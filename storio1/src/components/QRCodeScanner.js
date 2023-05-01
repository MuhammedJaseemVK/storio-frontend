import React, { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';

const QRCodeScanner = () => {
  const videoRef = useRef(null);

  const [qrList, setQrList] = useState(() => {
    const storedQrList = typeof localStorage !== 'undefined' ? localStorage.getItem('qrList') : null;
    return storedQrList ? JSON.parse(storedQrList) : [];
  });

  const [shouldScan, setShouldScan] = useState(true);

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
        } else {
          newQrList.push({
            code: result,
            inTime: currentTime,
            outTime: null,
          });
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
      <video className='mx-auto' ref={videoRef} width='25%' height='25%' autoPlay={true} />
    </div>
  );
};

export default QRCodeScanner;
