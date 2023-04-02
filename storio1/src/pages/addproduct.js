import React, {useState} from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import {MdOutlineArrowForward}  from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'

export default function productEntry() {
  const router = useRouter();
  const [name, setProductName] = useState("")
  const [address, setMrp] = useState("")
  const [city, setDescription] = useState("")
  const [pin, setPin] = useState("")
 

  


  function submitHandler(e) {
    e.preventDefault();
    router.push('/')
    
  }

  



  return (
    <div className='bg-black h-screen flex flex-col gap-5 p-5'>
    <Link href="/signup"><MdArrowBack className='text-white text-3xl' /></Link>
    
    <div className='text-white text-4xl font-semibold px-8 '>Tell us more about <span className='text-[#ff9900]'>Your Product</span></div>
    <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3'>
      <Input placeholder="Product name" type="text" required={true} value={name} onChange={e=>setProductName(e.target.value)} />
      <Input placeholder="Description" type="text" required={true} value={city} onChange={e=>setDescription(e.target.value)}/>
      <Input placeholder="MRP" type="number" required={true} value={address} onChange={e=>setMrp(e.target.value)} />
      <Input placeholder="Stock details" type="number" required={true} value={pin} onChange={e=>setPin(e.target.value)}/>
      <button className='bg-[#ff9900] flex justify-center w-1/6  items-center text-black text-base rounded-lg px-1 py-2 mt-4'  >Continue <MdOutlineArrowForward ></MdOutlineArrowForward></button>
      
    </form>
  </div>  
  )
}
