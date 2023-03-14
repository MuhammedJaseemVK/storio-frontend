import React,{useState} from 'react'
import {MdOutlineArrowForward}  from "react-icons/md";
import {MdArrowBack}  from "react-icons/md";
import Button from '@/components/inputs/Button';
import Input from '@/components/inputs/Input';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { auth, createUserWithEmailAndPassword } from '../config/firebase-config';
import Subtext from '@/components/inputs/Subtext';

export default function signup() {
  const router = useRouter();
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password1, setpassword1] = useState("")
  const [password2, setpassword2] = useState("")

  const signUp = ({ name, email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password1)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        return { error };
      });
  };

  function submitHandler(e) {
    e.preventDefault();
    if (password1 != password2) {
      alert("check passwords")
    }
    else {
      router.push('/verification')
      return signUp({name, email, password1}).then((user) => {
        console.log(user);
        
      });
    }

  }

  return (
    <div className='bg-black h-screen p-5'>
      <Link href="/" ><MdArrowBack className='text-white text-3xl' /></Link>
        <div className="flex flex-col gap-3">
        <div className='text-white text-3xl px-3 mt-4 font-semibold'>Sign <span className='text-[#ff9900]'>Up</span></div>
        <Subtext text="Create an account to enjoy shopping"></Subtext>
        <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3 mt-4'>
          <Input placeholder='Username' type='text' required={true} value={name} onChange={e => setname(e.target.value)} />
          <Input placeholder='Email' type='text' required={true} value={email} onChange={e => setemail(e.target.value)} />
          <Input placeholder='Password' type='text' required={true} value={password1} onChange={e => setpassword1(e.target.value)} />
          <Input placeholder='Confirm Password' required={true} type='text' value={password2} onChange={e => setpassword2(e.target.value)} />
          <Link className="text-right" href="/loginnew" ><p className='text-white justify-right text-sm text-right w-full mt-3'>Already have an account?</p></Link>
          <Button text="Continue" id="signupButton"/>        
        </form>

     
      </div>


    </div>
  )
}