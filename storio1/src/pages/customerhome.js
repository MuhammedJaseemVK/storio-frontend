import React, { useState } from 'react';
import { BiQrScan } from 'react-icons/bi';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import QrReader from 'react-qr-reader';

const CustomerHome = () => {
  const [showScanner, setShowScanner] = useState(false);

  const handleImageClick = () => {
    setShowScanner(true);
  };

  const handleScan = (data) => {
    if (data) {
      console.log(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className='h-screen bg-black p-3'>
      {/* NavBar */}

      {/* Profile pic */}
      <div className='flex w-full gap-2 justify-center mt-10'>
        <div className='overflow-hidden flex gap-2 flex-col items-center'>
          <img src='/profile.jpg' className='rounded-full w-[100px] h-[100px] object-cover block' />
          <p className='text-white'>Hello JAseem</p>
        </div>
      </div>
      <div>
        <AwesomeSlider className='px-3'>
          <div>
            <img src='/offer.jpg' />
          </div>
          <div>
            <img src='/profile.jpg' />
          </div>
          <div>
            <img src='/profile.jpg' />
          </div>
        </AwesomeSlider>
      </div>

      {showScanner ? (
        <div className='absolute top-0 left-0 w-full h-full'>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
          <button
            className='bg-gray-400 p-3 text-2xl rounded-full absolute top-3 right-3'
            onClick={() => setShowScanner(false)}
          >
            <BiQrScan />
          </button>
        </div>
      ) : (
        <div className='flex justify-center absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-6'>
          <img src='/qr.jpg' alt='My Image' className='max-w-24 h-24' onClick={handleImageClick} />
        </div>
      )}

      {/* Bottom buttons */}
      <div className='absolute bottom-3 w-screen pr-6'>
        <div className='flex flex-row justify-center gap-5'>
          <div className='flex flex-col gap-2 items-center'>
            <button className='bg-gray-400 p-3 text-2xl rounded-full'>
              <BiQrScan />
            </button>
            <p className='text-white'>Scan Me</p>
          </div>

          <div className='bottom-0 flex flex-col gap-2 items-center'>
            <button className='bg-gray-400 p-3 text-2xl rounded-full'>
              <BiQrScan />
            </button>
            <p className='text-white'>Scan Me</p>
          </div>

          <div className='flex flex-col gap-2 items-center'>
            <button className='bg-gray-400 p-3 text-2xl rounded-full'>
              <BiQrScan />
            </button>
            <p className='text-white'>Scan Me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHome
