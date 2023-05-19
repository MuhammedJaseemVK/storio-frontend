import React, { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi'
import { HiCamera } from 'react-icons/hi'
import { TbLogout } from 'react-icons/tb'
import { MdArrowBack, MdLocationCity, MdNumbers } from 'react-icons/md';
import { BsFillPersonFill, BsGenderMale, BsBuildings } from 'react-icons/bs';
import { FaBirthdayCake, FaAddressCard, FaMapMarkedAlt } from 'react-icons/fa';
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
    <div className='h-screen bg-black text-white p-3 flex flex-col gap-3 items-center font-sans'>

  <div className='w-full text-2xl flex justify-between'>
    <Link href='/customerhome'><button className='bg-transparent'><MdArrowBack className='text-white' /></button></Link>
    <Link href='/editprofile'><button className='bg-transparent'><BiEdit className='text-white' /></button></Link>
  </div>

  <div className='relative top-0  h-20 w-20 mx-auto mt-0 rounded-full overflow-hidden'>
    <img src={`https://storio.virtualdom.tech/${profile.profilePic?.split('/')[1]}`} alt='profile image' className='w-full h-full object-cover' />
    <div className='absolute right-1 text-sm bottom-1'>
      <button onClick={update} className='bg-yellow-500 rounded-full text-sm p-2'><HiCamera className='text-white text-sm' /></button>
    </div>
  </div>

  <div className='text-xl mt-1 p-1 font-semibold'>
    {profile.username}
  </div>

  <div className='rounded-xl w-full flex flex-col gap-1 p-1 bg-gradient-to-t from-[#ff9900]  via-black via-black  via-black via-black  via-black via-black via-black via-black  via-black via-black  via-black via-black  via-black via-black via-black via-black to-black '>
    <div className='flex flex-row justify-between px-3 py-2 bg-white rounded-lg mb-2'>
      <div className='flex flex-row gap-1 items-center'>
        <BsFillPersonFill className='text-gray-600' />
        <p className='text-gray-600 font-bold'>Name</p>
      </div>
      <p className='text-black font-bold'>{profile.name}</p>
    </div>
    <div className='flex flex-row justify-between px-3 py-2 bg-white rounded-lg mb-2'>
      <div className='flex flex-row gap-2 items-center'>
        <FaBirthdayCake className='text-gray-600' />
        <p className='text-gray-600 font-bold'>DOB</p>
      </div>
      <p className='text-black  font-bold'>{new Date(profile.dob).toDateString()}</p>
    </div>
    <div className='flex flex-row justify-between px-3 py-2 bg-white rounded-lg mb-2'>
      <div className='flex flex-row gap-2 items-center'>
        <BsGenderMale className='text-gray-600' />
        <p className='text-gray-600 font-bold'>Gender</p>
      </div>
      <p className='text-black  font-bold'>{profile.gender}</p>
    </div>
    <div className='flex flex-row justify-between px-3 py-2 bg-white rounded-lg mb-2'>
      <div className='flex flex-row gap-2 items-center'>
        <FaAddressCard className='text-gray-600' />
        <p className='text-gray-600 font-bold'>Address</p>
      </div>
      <p className='text-black  font-bold text-right'>{profile.address}</p>
    </div>
    <div className='flex flex-row justify-between px-3 py-2 bg-white rounded-lg mb-2'>
      <div className='flex flex-row gap-2 items-center'>
        <MdLocationCity className='text-gray-600' />
        <p className='text-gray-600 font-bold'>City</p>
      </div>
      <p className='text-black font-bold'>{profile.city}</p>
    </div>
    <div className='flex flex-row justify-between px-3 py-2 bg-white rounded-lg mb-2'>
      <div className='flex flex-row gap-2 items-center'>
        <MdNumbers className='text-gray-600' />
        <p className='text-gray-600 font-bold'>PIN</p>
      </div>
      <p className='text-black  font-bold'>{profile.pin}</p>
    </div>
    <div className='flex flex-row justify-between px-3 py-2 bg-white rounded-lg mb-2'>
      <div className='flex flex-row gap-2 items-center'>
        <BsBuildings className='text-gray-600' />
        <p className='text-gray-600 font-bold'>State</p>
      </div>
      <p className='text-black  font-bold'>{profile.state}</p>
    </div>
    <div className='flex flex-row justify-between px-3 py-2 bg-white rounded-lg mb-2'>
      <div className='flex flex-row gap-2 items-center'>
        <FaMapMarkedAlt className='text-gray-600' />
        <p className='text-gray-600 font-bold'>Country</p>
      </div>
      <p className='text-black font-bold'>{profile.country}</p>
    </div>
  </div>

  <button onClick={(e) => {
                e.preventDefault()
                setshowPopup(true)
            }} className='bg-[#ff9900] font-bold flex justify-center w-72 items-center text-black text-base rounded-lg px-3 py-2 mt-4 gap-2'>
    Logout
    <TbLogout className='text-black' />
  </button>

  <div className='mt-4'>
    <Navbar activeTab={4} />
  </div>

  <Popup  heading={popupHeading} visible={showPopup} onClose={handleOnClose} onSubmit={Logout} />
</div>

  )
}