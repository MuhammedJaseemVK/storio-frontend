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
          <Navbar section="Dashboard" />
          <div className='my-auto'>
            <Container />
          </div>
        </div>
      </div>
    </div>
  )
}
