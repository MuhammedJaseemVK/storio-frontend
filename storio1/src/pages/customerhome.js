import React from 'react';
import { useState } from 'react';
import { BiQrScan } from 'react-icons/bi';
import Quagga from 'quagga';
console.log(Quagga);
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useRouter } from 'next/router'
import Link from 'next/link'


const customerhome = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='h-screen bg-black p-3'>

      {/* NavBar */}

      {/* Profile pic */}
      <div className='flex w-full gap-2 justify-center mt-10'>
        <div className=' overflow-hidden flex gap-2 flex-col items-center'>
          <img src='/profile.jpg' className='rounded-full w-[100px] h-[100px] object-cover block' />
          <p className='text-white'>Hello JAseem</p>
        </div>
      </div>
      
      <div>
        <AwesomeSlider className='px-3 mt-5'>
          <div><img src='/orange2 .jpg' className='h-full' /></div>
          <div><img src='/profile.jpg' /></div>
          <div><img src='/profile.jpg' /></div>
        </AwesomeSlider>
      </div>
        
      <div className="flex justify-center absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-6">
        <img src="/qr.jpg" alt="My Image" className="max-w-24 h-24" onClick={() => setQrValue('some-unique-value')} />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 flex justify-between px-4 py-2">
        <Link href='/virtual-cart'><div className={`flex flex-col items-center cursor-pointer ${activeTab === 0 ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => setActiveTab(0)}>
          <BiQrScan size={24} />
          <span className="text-xs">Scan</span>
        </div>
        </Link> 
        <div className={`flex flex-col items-center cursor-pointer ${activeTab === 1 ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => setActiveTab(1)}>
          <BiQrScan size={24} />
          <span className="text-xs">Virtual cart</span>
        </div>
        <div className={`flex flex-col items-center cursor-pointer ${activeTab === 2 ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => setActiveTab(2)}>
          <BiQrScan size={24} />
          <span className="text-xs">Settings</span>
        </div>
      </div>
    </div>
  )
}

export default customerhome;
