import React from 'react'
import styled from 'styled-components'
import { BiSearch } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
// import avatarImage from "../assets/avatar.jpg"
function Navbar() {
    return (
        <div className=" text-white flex justify-between bg-gray-900 px-4 w-full ">
            <div className=' text-white text-2xl f my-auto'>
                <h1>Dashboard</h1>
                {/* <p>hello</p> */}
            </div>
            <div className="flex justify-end p-2">
                <div className="flex items-center gap-4 ">
                    <AiOutlineCalendar className='text-white' />
                    <span className='text-white'>Jan 30, 2022</span>
                </div>
                <div className="flex items-center gap-4 p-4">
                    <BiSearch className='text-white'/>
                    <span  className='text-white'>|</span>
                    <AiOutlineBell className='text-white' />
                    <span  className='text-white'>|</span>
                    <div className="flex gap-4">
                        <img src="/profile.jpg" alt=""  className='h-10 w-10 rounded-full'/>
                    </div>
                    <AiOutlineCaretDown className='text-white'/>
                </div>
            </div>
        </div>
    ) 
}

export default Navbar