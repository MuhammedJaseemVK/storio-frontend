import React, { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi'
import { HiCamera } from 'react-icons/hi'
import { TbLogout } from 'react-icons/tb'
import { MdArrowBack } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaBirthdayCake } from 'react-icons/fa'
import { BsGenderMale } from 'react-icons/bs'
import { FaAddressCard } from 'react-icons/fa'
import { MdLocationCity } from 'react-icons/md'
import { MdNumbers } from 'react-icons/md'
import { BsBuildings } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios';
import Navbar from '@/components/inputs/navbar';
import Popup from '@/components/Popup'

export default function profile() {
  const router = useRouter();
  const [profile, setprofile] = useState({})
  const [popupHeading, setPopupHeading] = useState('Are you sure you want to logout?');
  const [showPopup, setshowPopup] = useState(false);
  const handleOnClose = () => setshowPopup(false);

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

  function Logout(e) {
    e.preventDefault()
    localStorage.setItem('username', '')
    localStorage.setItem('tokan', '')
    router.push('/')
  }

  function update(e) {
    e.preventDefault()
    router.push('/editprofile')
  }

  return (
    <div className='h-screen bg-black text-white p-3 flex flex-col gap-3 items-center'>

      <div className='w-full text-2xl flex justify-between'>
        <Link href='/customerhome'><button><MdArrowBack /></button></Link>
        <Link href='/editprofile'><button><BiEdit /></button></Link>

      </div>

      {/* Profile picture */}
      <div className='relative h-[100px] w-[100px] mx-auto mt-0 rounded-full object-cover ' >
        <div className='rounded-full overflow-hidden h-[100px] w-[100px]'>
          <img src={`https://storio.virtualdom.tech/${profile.profilePic?.split('/')[1]}`} alt='profile image' className='w-full h-full object-cover' />
        </div>
        {/* Change dp icon */}
        <div className='absolute right-0 bottom-0'>
          <button onClick={update} className='bg-[#ff9900] rounded-full text-small p-3'><HiCamera /></button>
        </div>
      </div>

      {/* Profile name */}
      <div>
        {profile.username}
      </div>

      {/* Details box */}
      <div className=' rounded-xl w-full flex p-3 gap-2 flex-col items-center'>
        <div className='w-full'>
          <div className='flex flex-row justify-between px-3 py-2'>
            <div className='flex flex-row gap-2 items-center'>
              {/* <BsFillPersonFill /> */}
              <p className='text-white font-bold'>Name</p>
            </div>
            <p className='text-yellow-500 font-bold'>{profile.name}</p>
          </div>
        </div>
        {/* <p className='w-full h-[1px] bg-white'></p> */}
        <div className='w-full'>
          <div className='flex flex-row justify-between px-3 py-2'>
            <div className='flex flex-row gap-2 items-center'>
              {/* <FaBirthdayCake /> */}
              <p className='text-white font-bold'>DOB</p>
            </div>
            <p className='text-yellow-500 font-bold'>{new Date(profile.dob).toDateString()}</p>
          </div>
        </div>
        {/* <p className='w-full h-[1px] bg-white'></p> */}
        <div className='w-full'>
          <div className='flex flex-row justify-between px-3 py-2'>
            <div className='flex flex-row gap-2 items-center'>
              {/* <BsGenderMale /> */}
              <p className='text-white font-bold'>Gender</p>
            </div>
            <p className='text-yellow-500 font-bold'>{profile.gender}</p>
          </div>
        </div>
        {/* <p className='w-full h-[1px] bg-white'></p> */}
        <div className='w-full'>
          <div className='flex flex-row justify-between px-3 py-2'>
            <div className='flex flex-row gap-2 items-center'>
              {/* <FaAddressCard /> */}
              <p className='text-white font-bold'>Address</p>
            </div>
            <p className='text-yellow-500 font-bold text-right'>{profile.address}</p>
          </div>
        </div>
        {/* <p className='w-full h-[1px] bg-white'></p> */}
        <div className='w-full'>
          <div className='flex flex-row justify-between px-3 py-2'>
            <div className='flex flex-row gap-2 items-center'>
              {/* <MdLocationCity /> */}
              <p className='text-white font-bold'>City</p>
            </div>
            <p className='text-yellow-500 font-bold'>{profile.city}</p>
          </div>
        </div>
        {/* <p className='w-full h-[1px] bg-white'></p> */}
        <div className='w-full'>
          <div className='flex flex-row justify-between px-3 py-2'>
            <div className='flex flex-row gap-2 items-center'>
              {/* <MdNumbers /> */}
              <p className='text-white font-bold'>PIN</p>
            </div>
            <p className='text-yellow-500 font-bold'>{profile.pin}</p>
          </div>
        </div>
        {/* <p className='w-full h-[1px] bg-white'></p> */}
        <div className='w-full'>
          <div className='flex flex-row justify-between px-3 py-2'>
            <div className='flex flex-row gap-2 items-center'>
              {/* <BsBuildings /> */}
              <p className='text-white font-bold'>State</p>
            </div>
            <p className='text-yellow-500 font-bold'>{profile.state}</p>
          </div>
        </div>
        {/* <p className='w-full h-[1px] bg-white'></p> */}
        <div className='  w-full'>
          <div className='flex flex-row justify-between px-3 py-2'>
            <div className='flex flex-row gap-2 items-center'>
              {/* <FaMapMarkedAlt /> */}
              <p className='text-white font-bold'>Country</p>
            </div>
            <p className='text-yellow-500 font-bold'>{profile.country}</p>
          </div>
        </div>

      </div>

      {/* Edit Button */}
      {/* Want to add a pop up confirming to logout */}
      <button onClick={(e) => {
                    e.preventDefault()
                    setshowPopup(true)
                }} className='bg-[#ff9900] flex justify-center w-72 items-center text-black text-base rounded-lg px-3 py-2 mt-4 gap-2'>
        Logout
        <TbLogout />
      </button>
      <Navbar activeTab={4} />
      <Popup  heading={popupHeading} visible={showPopup} onClose={handleOnClose} onSubmit={Logout} />
    </div>
  )
}
