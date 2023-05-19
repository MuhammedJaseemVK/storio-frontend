import React, { useState,useEffect } from 'react'
// import styled from 'styled-components'
import { BiSearch } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import axios from 'axios';

function Navbar(props) {
    const [profile, setprofile] = useState({});

    useEffect(() => {
        try {
          const fetchAndSetProfile = async () => {
            let username = localStorage.getItem('username')
            let profile = await fetchProfile(username)
            setprofile(profile.data.user)
           
          }
          fetchAndSetProfile()
        } catch (error) {
          console.log(error)
          alert("Error!")
        }
      }, [])
    
    
      const fetchProfile = username => {
        return axios.get(`https://storio.virtualdom.tech/users/profile?username=${username}`)
      };
    return (
        <div className=" text-white flex justify-between bg-gray-900 px-4 w-full ">
            <div className=' text-white text-2xl f my-auto'>

            </div>
            <div className="flex justify-end p-2">
                <div className="flex items-center gap-4 ">
                    <AiOutlineCalendar className='text-white' />
                    <span className='text-white'>Jan 30, 2022</span>
                </div>
                <div className="flex items-center gap-4 p-4">
                    {/* <BiSearch className='text-white'/>
                    <span  className='text-white'>|</span>
                    <AiOutlineBell className='text-white' />
                    <span  className='text-white'>|</span> */}
                    <div className="flex gap-2 items-center">
                        {/* <img src={`https://storio.virtualdom.tech/${profile.profilePic?.split('/')[1]}`}alt="" className='h-10 w-10 rounded-full' /> */}
                        <BsFillPersonFill className='text-md' />
                        <p>{profile.name}</p>
                    </div>
                    {/* <AiOutlineCaretDown className='text-white'/> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar