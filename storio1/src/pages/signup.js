import React from 'react'
import {MdOutlineArrowForward}  from "react-icons/md";
import {MdArrowBack}  from "react-icons/md";
import Button from '@/components/inputs/Button';

export default function signup() {
  return (
    <div className='bg-black h-screen p-5'>
        <MdArrowBack className='text-white text-3xl'/>
        <div className='text-white text-3xl'>Sign <span className='text-[#ff9900]'>Up</span></div>
        <div className='flex flex-col gap-3 px-3 py-5'>
          <input type='text' className='rounded-lg px-3 py-2' placeholder='User name'></input>
          <input type='text' className='rounded-lg px-3 py-2' placeholder='Phone'></input>
          <input type='password' className='rounded-lg px-3 py-2' placeholder='Password'></input>
          <p className='text-white text-sm text-right'>Already have an account?</p>
          
          <Button />
        </div>
        
    </div>
  )
}
