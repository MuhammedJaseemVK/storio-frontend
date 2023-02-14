import React from 'react'
// import {MdOutlineArrowForward}  from "react-icons/md";
import {MdArrowBack}  from "react-icons/md";
import Button from '@/components/inputs/Button';

export default function otp() {
    return (
      <div className='bg-black h-screen p-5'>
          <MdArrowBack className='text-white text-3xl'/>
          <div className='text-white text-3xl mt-4 px-3'>Enter your <span className='text-[#ff9900]'>Phone</span></div>
          <p className='text-white text-sm text-left mt-7 px-3'>You will receive 4 digit code for phone number verification.</p>
          <form className='flex flex-col gap-3 px-3 py-7'>
            
            
            <select className='rounded-lg px-3 py-2' placeholder='Phone Number' name="country" id="country-names">

            <option value="India">India</option>
            
            </select>
            
            <input type='password' className='rounded-lg px-3 py-2' placeholder='Phone Number' required={true}></input>
            
            <input type='password' className='rounded-lg px-3 py-2' placeholder='OTP' required={true}></input>
            
            
            <Button text='Continue' />
          </form>
          
      </div>
    )
  }
  