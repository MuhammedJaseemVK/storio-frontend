import React, { useEffect } from 'react'
import { MdArrowBack } from "react-icons/md";;
import Heading from '@/components/inputs/Heading';
import Subtext from '@/components/inputs/Subtext';
import Button from '@/components/inputs/Button';
import { MdOutlineArrowForward } from "react-icons/md";
import { useRouter } from 'next/router';
import Link from 'next/link'



export default function index1() {

  useEffect(() => {
    let username = localStorage.getItem('username')
    if (localStorage.getItem('introwatched') !== 'true') {
      router.push('/intro1');
      localStorage.setItem('introwatched', 'true');
    }
    else if(username){
      router.push('/customerhome')
    }
    
  }, [])
  

  const router = useRouter();
  function supplier(e) {
    router.push('\supplierregistration')
  }
  function customer(e) {
    router.push('\signup')
  }
  function shopowner(e) {
    router.push('\shopownerreg')
  }

  return (
    <div className='h-screen flex flex-col justify-between bg-black p-5'>
      <MdArrowBack className='text-black text-3xl' />
      <div className='flex flex-col gap-5 pb-20'>
        <Heading text1="Let's get" text2='Started' />
        <Subtext text='Create an account or login to begin adventure'></Subtext>
        <div className='flex flex-col items-center justify-center text-black text-base'>


          <button onClick={customer} className='bg-white flex justify-center w-72 items-center text-black text-base rounded-lg px-3 py-2 mt-4'>
            Signup as customer<MdOutlineArrowForward />
          </button>

          <Button onClick={shopowner} text="Signup as shopowner" />
          <Button onClick={supplier} text="Signup as supplier" />
        </div>
        <Link href="/login"><p className='text-sm text-white text-center'>Already have an account?</p></Link>
      </div>

    </div>
  )
}