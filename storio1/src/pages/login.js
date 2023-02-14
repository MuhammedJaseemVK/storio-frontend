import React from 'react'
import { Icon } from '@iconify/react';

export default function login() {
  return (
    <div className='bg-black h-screen p-5'>
      {/* <script src="https://code.iconify.design/iconify-icon/1.0.5/iconify-icon.min.js"></script> */}
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icons/6.6.6/css/flag-icons.min.css" rel="stylesheet"></link> */}
      <Icon icon="mdi:arrow-left" color="white" />
        <div className='text-white text-3xl'>
          Enter your <span className='text-[#ff9900] text-3xl'>
          phone</span>
        </div>
        <div className='text-base text-white'>
        You will receive 4 digit code for phone number verification.
        </div><br/>
        
        <div className='flex flex-col gap-3 bg-yellow-500 text-white rounded-lg  '>
          <div>
            <select className='text-black w-full  rounded-lg px-3 py-1'>
            <option value='India '>
              {/* <span className='flag-icon flag-icon-ind'></span> */}
            India</option>
            <option value='Pakistan'>Pakistan</option>
            </select>
          </div>
        
          <div>
            <input type='text' className='text-black w-full rounded-lg px-3 py-1' placeholder='Number'></input>
          </div>
          {/* <div className='flex flex-row'> */}
          <button className='flex justify-center gap-2 bg-[#ff9900] text-white border border-yellow-500 rounded px-3 py-1 w-full'>
              <img src="https://cdn-icons-png.flaticon.com/512/46/46854.png" className='h-5 block'></img>
              <div className='block'>Continue</div>
            </button>
        {/* </div> */}
        </div>
        
        
          
        
      </div>
  )
}
