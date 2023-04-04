import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { HiCamera } from 'react-icons/hi'
import { TbLogout } from 'react-icons/tb'
import { MdArrowBack } from "react-icons/md";

export default function profile() {
  return (
    <div className='h-screen bg-black text-white p-3 flex flex-col gap-5 items-center'>
      
      <div className='w-full text-2xl flex justify-between'>
        <button><MdArrowBack /></button>
        <button><BiEdit /></button>
      </div>

        {/* Profile picture */}
      <div className='relative h-[100px] w-[100px] mx-auto mt-10 '>
          {/* <div className='absolute'> */}
          <img src='/profile.jpg' alt='profile image' className='rounded-full'/>
          {/* </div> */}
          {/* Change dp icon */}
          <div className='absolute right-0 bottom-0'>
            <button className='bg-yellow-500 rounded-full text-small p-3'><HiCamera /></button>
          </div>
      </div>

      <div>
        Jaseem
      </div>

        {/* Details box */}
        <div className='bg-orange-500 rounded-xl w-3/4 p-3 flex flex-col items-center'>
          <div className='bg-yellow-500 w-full'>
            <div className='flex flex-row justify-between px-3 py-2'>
              <p className='text-white'>Text1</p>
              <p className='bg-grey-500'>Text2</p>
            </div>
          </div>
          <p className='w-full h-[1px] bg-white'>-</p>
          <div className='bg-yellow-500 w-full'>
            <div className='flex flex-row justify-between px-3 py-2'>
              <p className='text-white'>Text1</p>
              <p className='bg-grey-500'>Text2</p>
            </div>
          </div>
          <p className='w-full h-[1px] bg-white'>-</p>
          <div className='bg-yellow-500 w-full'>
            <div className='flex flex-row justify-between px-3 py-2'>
              <p className='text-white'>Text1</p>
              <p className='bg-grey-500'>Text2</p>
            </div>
          </div>
          <p className='w-full h-[1px] bg-white'>-</p>
          <div className='bg-yellow-500 w-full'>
            <div className='flex flex-row justify-between px-3 py-2'>
              <p className='text-white'>Text1</p>
              <p className='bg-grey-500'>Text2</p>
            </div>
          </div>
          <p className='w-full h-[1px] bg-white'>-</p>
          <div className='bg-yellow-500 w-full'>
            <div className='flex flex-row justify-between px-3 py-2'>
              <p className='text-white'>Text1</p>
              <p className='bg-grey-500'>Text2</p>
            </div>
          </div>
          <p className='w-full h-[1px] bg-white'>-</p>
          <div className='bg-yellow-500 w-full'>
            <div className='flex flex-row justify-between px-3 py-2'>
              <p className='text-white'>Text1</p>
              <p className='bg-grey-500'>Text2</p>
            </div>
          </div>
        </div>

        {/* Edit Button */}
      <button className='bg-[#ff9900] flex justify-center w-72 items-center text-black text-base rounded-lg px-3 py-2 mt-4 gap-2'>
        Logout
        <TbLogout />
      </button>
    </div>
  )
}
