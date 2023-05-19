import React, { useState } from 'react'
import { MdOutlineArrowForward } from "react-icons/md";
import { MdArrowBack, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Button from '@/components/inputs/Button';
import Heading from '@/components/inputs/Heading';
import Input from '@/components/inputs/Input';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { auth, createUserWithEmailAndPassword } from '../config/firebase-config';
import Subtext from '@/components/inputs/Subtext';
import axios from 'axios';
import Notification from '@/components/Notification';
import Switch from 'react-switch';

export default function signup() {
  const router = useRouter();
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password1, setpassword1] = useState("")
  const [password2, setpassword2] = useState("")
  const [showpassword, setshowpassword] = useState(false)
  const [apiResponse, setapiResponse] = useState({})

  const signUp = ({ name, email, password }) => {
    return axios.post('https://storio.virtualdom.tech/users/register', {
      username: name,
      email,
      password
    })
  };

  // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  // const isValidPassword = passwordRegex.test(password1);


  async function submitHandler(e) {
    e.preventDefault();

    // if (!isValidPassword) {
    //   setapiResponse({
    //     error: true,
    //     show: true,
    //     heading: "Passwords must contain an Uppercase letter, a lowercase letter, a special symbol and a digit !"
    //   })

    //   setTimeout(() => {
    //     setapiResponse({})
    //   }, 3000)
    // }

    // else
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
    else if (password1.length < 8) {
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
      // router.push('/verification')
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
          router.push('/verification')
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
        <Heading text1="Sign" text2='Up' />
        <Subtext text="Create an account to enjoy shopping"></Subtext>
        <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3 mt-4'>
          <div className='relative'>
            <Input placeholder='Username' type='text' required={true} value={name} onChange={e => setname(e.target.value)} />
          </div>
          <div className='relative'>
            <Input placeholder='Email' type='text' required={true} value={email} onChange={e => setemail(e.target.value)} />
          </div>
          <div className='relative'>
            <Input placeholder='Password' type={showpassword ? "text" : "password"} required={true} value={password1} onChange={e => setpassword1(e.target.value)} />
            <MdVisibility onClick={() => setshowpassword(!showpassword)} className='text-black text-xl cursor-pointer absolute right-2 top-2' />
          </div>
          <div className='relative'>
            <Input placeholder='Confirm Password' required={true} type={showpassword ? "text" : "password"} value={password2} onChange={e => setpassword2(e.target.value)} />
            <MdVisibility onClick={() => setshowpassword(!showpassword)} className='text-black text-xl cursor-pointer absolute right-2 top-2' />
          </div>
          <Link className="text-right" href="/login" ><p className='text-white justify-right text-sm text-right w-full mt-3'>Already have an account?</p></Link>
          <Button text="Continue" id="signupButton" />
        </form>

      </div>
      <Notification error={apiResponse.error} heading={apiResponse.heading} show={apiResponse.show} />

    </div>
  );
}