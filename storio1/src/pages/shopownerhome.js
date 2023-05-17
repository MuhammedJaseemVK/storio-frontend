import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import React from 'react'



export default function shopownerhome() {

  return (
    <div className='h-screen w-full bg-black'>
      <div className='flex flex-row'>
        <Sidebar activeTab={1} />
        <div className='w-full'>
          <Navbar />
          <Container />

        </div>
      </div>
      <div className='h-screen bg-black text-white p-3 justify-center items-center mx-auto'>
        {/* <Navbar /> */}
        

        {/* <div className='flex flex-col w-full gap-2 justify-center mt-10'>
          <div className='overflow-hidden flex gap-2 flex-col items-center'>
            <img src='/profile.jpg' className='rounded-full w-[100px] h-[100px] object-cover block' />
            <p className='text-white'>Hello Jaseem</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
