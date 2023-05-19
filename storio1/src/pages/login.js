import React,  { useState } from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack, MdVisibility, MdVisibilityOff } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'
import Notification from '@/components/Notification';
import axios from 'axios'


export default function detailEntry() {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showpassword, setshowpassword] = useState(false)
  const [apiResponse, setapiResponse] = useState({})

  const login = ({ email, password }) => {
    return axios.post('https://storio.virtualdom.tech/users/login', {
      username: email,
      password
    })
  };

  async function submitHandler(e) {
    e.preventDefault();
    if (password.length < 8 || password.length > 16) {
      setapiResponse({
        error: true,
        show: true,
        heading: "Incorrect password !"
      })
      setTimeout(() => {
        setapiResponse({})
      }, 3000)
    } else {
      try {
        let response = await login({ email, password })
        console.log(response)
        if (response.status !== 200) throw Error("Wrong")
        // set username and token in localstorage
        localStorage.setItem('username', response.data.user.username)
        localStorage.setItem('tokan', response.data.token)

        setapiResponse({
          error: false,
          show: true,
          heading: `Welcome back ${response.data.user.username}`
        })
        setTimeout(() => {
          setapiResponse({})
          if(response.data.user.role=='shopowner')
          {
            router.push('/shopownerhome')
            return
          }
          else  if(response.data.user.role=='supplier')
          {
            router.push('/supplierHome')
            return
          }
          else{
            router.push('/customerhome')
          }
         
        }, 3000)
      } catch (error) {
        console.log(error)
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
    <div className='bg-black h-screen flex flex-col gap-5 p-5'>
      <Link href="/"> <MdArrowBack className='text-white text-3xl' /></Link>
      <div className='text-white text-3xl font-semibold px-3 mt-4'>Welcome <span className='text-[#ff9900]'>    Back</span></div>
      <p className='text-white text-sm text-left px-3 mt-3'>You have been missed</p>
      <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3 mt-5'>
        <Input placeholder="Username" type="text" required={true} value={email} onChange={e => setEmail(e.target.value)} />
        <div className='relative'>
        <Input placeholder="Password" type={showpassword ? "text" : "password"} required={true} value={password} onChange={e => setPassword(e.target.value)} />
        {
          showpassword? (
            <MdVisibilityOff onClick={() => setshowpassword(false)} className='text-black text-xl cursor-pointer absolute right-2 top-2' />
          ) : (
            <MdVisibility onClick={() => setshowpassword(true)} className='text-black text-xl cursor-pointer absolute right-2 top-2' />
          )
        }
        </div>
        {/* <div className='flex items-center justify-end w-72'>
          <input type="checkbox" name="show" value={showpassword} onChange={() => setshowpassword(!showpassword)} />
          <label className='text-white text-sm  px-3 ' >Show password</label>

        </div> */}
        <Button className='mt-10' text='Continue' />

      </form>
      <Notification error={apiResponse.error} heading={apiResponse.heading} show={apiResponse.show} />
    </div>
  )
}