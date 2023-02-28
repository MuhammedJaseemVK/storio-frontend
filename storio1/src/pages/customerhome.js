import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsXLg ,BsCartCheckFill} from "react-icons/bs";
import { AiFillHome ,AiOutlineUnorderedList} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp ,IoLogOut} from "react-icons/io5";



import Input from '@/components/inputs/Input';

import { BsSearch } from "react-icons/bs";
export default function 
() {
  return (
    <div className='bg-yellow-600 font-[Poppins]'>
      <span className='absolute text-gray-600 text-4xl top-5 left-4 cursor-pointer' onclick="Open()">
        <i className='bi bi-filter-left px-2 bg-gray-900  '></i>
      </span>
      <div className='sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-black'>
          <div className='text-white-100 text-xl'>
            <div className='p-2.5 mt-1 flex items-center'>
              <RxHamburgerMenu className='text-white bi bi-app-indicator ' />
              <h1 className='font-bold text-[#FF9900] text-[25px] ml-3 px-5'>STORIO</h1>
              <BsXLg className='size-1 text-white bi bi-x px-25 ml-20 cursor-pointer ' />
              
            </div>
              <hr className='my-2 text-white'></hr>

           </div>
           <div className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  bg-white'>
            <BsSearch className='text-gray-500 bi bi-search '/>
            <input type="text" className='text-[15px] ml-4 w-full bg-transparent focus:outline-none ' placeholder="Search" />
           </div>

           <div className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 bg-white'>
            <AiFillHome className='text-gray-600 bi bi-search '/>
            <span className='px-4 text-[15px] text-gray-600'>Home</span>
           </div>

           <div className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 bg-white'>
            <BsCartCheckFill className='text-gray-600 bi bi-search '/>
            <span className='px-4 text-[15px] text-gray-600'>My Purchases</span>
           </div>

           <div className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 bg-white'>
            <AiOutlineUnorderedList className='text-gray-600 bi bi-search '/>
            <span className='px-4 text-[15px] text-gray-600'>My Lists</span>
           </div>

           <div className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 bg-white'>
            <MdAccountCircle className='text-gray-600 bi bi-search '/>
            <span className='px-4 text-[15px] text-gray-600'>Account</span>
           </div>

           <div className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 bg-white'>
            <IoSettingsSharp className='text-gray-600 bi bi-search '/>
            <span className='px-4 text-[15px] text-gray-600'>Settings</span>
           </div>

           <div className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 bg-white'>
            <IoLogOut className='text-gray-600 bi bi-search '/>
            <span className='px-4 text-[15px] text-gray-600'>Log out </span>
          
          </div>
           
      </div>

    </div>
  )
}
