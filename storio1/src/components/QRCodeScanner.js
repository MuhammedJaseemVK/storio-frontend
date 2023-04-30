import React, { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';

const QRCodeScanner = () => {
  const videoRef = useRef(null);
  const [qrList, setQrList] = useState([]);

  useEffect(() => {
    QrScanner.WORKER_PATH = './qr-scanner-worker.min.js';
    const scanner = new QrScanner(videoRef.current, async (result) => {
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
      // Check if scanner is not null before calling resume
      
    });
    scanner.start();
    return () => {
      scanner.destroy();
    };
  }, [qrList]);

  return (
    <div>
      <div>{qrList.map((qr) => JSON.stringify(qr))}</div>
      <video ref={videoRef} width="50%" height="50%" />
    </div>
  );
};

export default QRCodeScanner;
