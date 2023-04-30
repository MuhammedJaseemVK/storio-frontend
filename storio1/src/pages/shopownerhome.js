import QRCodeScanner from '@/components/QRCodeScanner'
import React, { useState } from 'react'
import AwesomeSlider from 'react-awesome-slider';


export default function shopownerhome() {
    const [showQR,setShowQR]=useState(false);
    const scanQR=()=>{
        setShowQR(true);
    }
  return (
    <div className='h-screen bg-black text-white p-3'>

          <div className='flex flex-col w-full gap-2 justify-center mt-10'>
              <div className='overflow-hidden flex gap-2 flex-col items-center'>
                  <img src='/profile.jpg' className='rounded-full w-[100px] h-[100px] object-cover block' />
                  <p className='text-white'>Hello Jaseem</p>
              </div>
              <div>
                <QRCodeScanner />
              </div>
              <div style={{width: '20%', height:'50%'}}>
              </div>
          </div>

          
    </div>
  )
}
