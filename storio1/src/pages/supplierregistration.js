import React, { useState } from 'react'
import { MdOutlineArrowForward } from "react-icons/md";
import { MdArrowBack, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Button from '@/components/inputs/Button';
import Input from '@/components/inputs/Input';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Heading from '@/components/inputs/Heading';
import Subtext from '@/components/inputs/Subtext';
import axios from 'axios';
import NotificationDesktop from '@/components/NotificationDesktop';

export default function supplier() {
  const router = useRouter();
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password1, setpassword1] = useState("")
  const [password2, setpassword2] = useState("")
  const [showpassword1, setshowpassword1] = useState(false);
  const [showpassword2, setshowpassword2] = useState(false);
  const [apiResponse, setapiResponse] = useState({})

  const signUp = ({ name, email, password }) => {
    return axios.post('https://storio.virtualdom.tech/users/register', {
      username: name,
      email,
      password,
      role: "supplier"
    })
  };
  async function submitHandler(e) {
    e.preventDefault();
    if (password1 != password2) {
      setapiResponse({
        error: true,
        show: true,
        heading: "Passwords do not match !"
      })
   
      setTimeout(() => {
        setapiResponse({})
      }, 3000)
    }
    else if(password1.length<8){
      setapiResponse({
        error: true,
        show: true,
        heading: "Password must contain atleast 8 characters"
      })
   
      setTimeout(() => {
        setapiResponse({})
      }, 3000)
    }
    else {
      // 
      try {
        let response = await signUp({ name, email, password: password1 })
        console.log(response)
        if (response.status !== 201) throw Error("Wrong")
        // set username and token in localstorage
        window.localStorage.setItem('username', response.data.user.username)
        window.localStorage.setItem('tokan', response.data.token)

        setapiResponse({
          error: false,
          show: true,
          heading: `Welcome ${response.data.user.username}`
        })
        setTimeout(() => {
          setapiResponse({})
          router.push('/supplierdetails')
        }, 3000)
      } catch (error) {
        setapiResponse({
          error: true,
          show: true,
          heading: error?.response?.data?.message || "Something went wrong !"
        })
        setTimeout(() => {
          setapiResponse({})
        }, 3000)
      }
    }

  }


  return (
    <div className='bg-black h-screen p-5'>
      <Link href="/" ><MdArrowBack className='text-white text-3xl' /></Link>
      <div className="flex flex-col gap-3">
        <Heading text1="Sign" text2="Up" />
        <Subtext text="Create an account to level up your business" />
        {/* <div className='text-white text-3xl'>Sign <span className='text-[#ff9900]'>Up</span></div> */}
        <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3'>
          <Input placeholder='Username' type='text' required={true} value={name} onChange={e => setname(e.target.value)} />
          <Input placeholder='Email' type='text' required={true} value={email} onChange={e => setemail(e.target.value)} />
          <div className='relative'>
            <Input placeholder='Password' type={showpassword1 ? "text" : "password"} required={true} value={password1} onChange={e => setpassword1(e.target.value)} />
            {showpassword1 ? (
              <MdVisibilityOff onClick={() => setshowpassword1(false)} className='text-black text-xl cursor-pointer absolute right-2 top-2' />
            ) : (
              <MdVisibility onClick={() => setshowpassword1(true)} className='text-black text-xl cursor-pointer absolute right-2 top-2' />
            )}
          </div>
          <div className='relative'>
            <Input placeholder='Confirm Password' required={true} type={showpassword2 ? "text" : "password"} value={password2} onChange={e => setpassword2(e.target.value)} />
            {showpassword2 ? (
              <MdVisibilityOff onClick={() => setshowpassword2(false)} className='text-black text-xl cursor-pointer absolute right-2 top-2' />
            ) : (
              <MdVisibility onClick={() => setshowpassword2(true)} className='text-black text-xl cursor-pointer absolute right-2 top-2' />
            )}
          </div>

          <div className='w-full'>
            <Link href="/"  ><p className='text-white text-sm text-center'>Already have an account?</p></Link>
          </div>

          
          <button className='bg-[#ff9900] flex justify-center w-1/6 items-center text-black text-base rounded-lg px-3 py-2 mt-4'>
            <span>Continue</span>
            <MdOutlineArrowForward />
        </button>
        </form>

      </div>

      <NotificationDesktop error={apiResponse.error} heading={apiResponse.heading} show={apiResponse.show} />

    </div>
  )
}
