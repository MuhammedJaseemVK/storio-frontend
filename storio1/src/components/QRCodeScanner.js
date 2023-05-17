import React, { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';
import Notification from './Notification';

const QRCodeScanner = () => {
  const videoRef = useRef(null);
  const [qrList, setQrList] = useState([]);
  const [shouldScan, setShouldScan] = useState(true);
  const [apiResponse, setapiResponse] = useState({})

  useEffect(() => {
    QrScanner.WORKER_PATH = './qr-scanner-worker.min.js';
    let scanner = null;

    if (shouldScan) {
      scanner = new QrScanner(videoRef.current, async (result) => {
        const currentTime = new Date();
        const newQrList = qrList.slice();
        const index = newQrList.findIndex((qr) => qr.code === result);
        if (index !== -1) {
          newQrList[index].outTime = currentTime;
          // show exit notification
          setapiResponse({
            error: true,
            show: true,
            heading: ` ${result} exited the shop`
          })

          setTimeout(() => {
            setapiResponse({})
          }, 3000)
        } else {
          newQrList.push({
            code: result,
            inTime: currentTime,
            outTime: null,
          });
          // show entry notification
          setapiResponse({
            error: false,
            show: true,
            heading: ` ${result} entered the shop`
          })

          setTimeout(() => {
            setapiResponse({})
          }, 3000)
        }
        setQrList(newQrList);
        localStorage.setItem('qrList', JSON.stringify(newQrList));
        setShouldScan(false);
        setTimeout(() => {
          setShouldScan(true);
        }, 5000);
      });
      scanner.start();
    }

    return () => {
      if (scanner) {
        scanner.destroy();
      }
    };
  }, [qrList, shouldScan]);

  useEffect(() => {
    const storedQrList = localStorage.getItem('qrList');
    if (storedQrList) {
      setQrList(JSON.parse(storedQrList));
    }
  }, []);

  return (
    <div>
      <div>
        {qrList.map((qr) => {
          return (
            <div className='p-3 bg-white text-black rounded-md mx-auto w-80 mt-2' key={qr.code}>
              <p className='font-bold'>User: {qr.code}</p>
              <div className='flex flex-col gap-2'>
                <p className='text-[#ff9900]'>Check in: {qr.inTime.toLocaleString()}</p>
                {qr.outTime ? <p className='text-red-500'> Check out: {qr.outTime.toLocaleString()} </p> : null}
              </div>
            </div>
          );
        })}
      </div>
      <video className='mx-auto' ref={videoRef} width='50%' height='50%' autoPlay={true} />
      <Notification error={apiResponse.error} heading={apiResponse.heading} show={apiResponse.show} />
    </div>
  );
};

export default QRCodeScanner;