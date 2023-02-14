import React from 'react'
// import {MdOutlineArrowForward}  from "react-icons/md";
import {MdArrowBack}  from "react-icons/md";
import Button from '@/components/inputs/Button';

export default function login() {
    return (
      <div className='bg-black h-screen p-5'>
          <MdArrowBack className='text-white text-3xl'/>
          <div className='text-white text-3xl mt-4 px-3'>Welcome <span className='text-[#ff9900]'>Back</span></div>
          <p className='text-white text-sm text-left mt-7 px-3'>You have been missed</p>
          <form className='flex flex-col gap-3 px-3 py-7'>
            
            <input type='text' className='rounded-lg px-3 py-2' placeholder='Email' required={true}></input>
            <input type='password' className='rounded-lg px-3 py-2' placeholder='Password' required={true}></input>
            <p className='text-white text-sm text-right'>Forgot your password?</p>
            
            <Button text='Log in' />
          </form>
          
      </div>
    )
  }
  