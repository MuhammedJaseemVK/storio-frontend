import React, {useState} from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'

export default function detailEntry() {
  const router = useRouter();
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [pin, setPin] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")


  function submitHandler(e) {
    e.preventDefault();
    if(pin.length!=6){
      alert("Pin value is incorrect")
    }else{
      router.push('/')
    }
  }

  return (
    <div className='bg-black h-screen flex flex-col gap-5 p-5'>
      <Link href="/signup"><MdArrowBack className='text-white text-3xl' /></Link>
      
      <div className='text-white text-3xl font-semibold px-2 '>Tell us more about <span className='text-[#ff9900]'>Yourself</span></div>
      <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3'>
        <Input placeholder="Name" type="text" required={true} value={name} onChange={e=>setName(e.target.value)} />
        <Input placeholder="Address" type="text" required={true} value={address} onChange={e=>setAddress(e.target.value)} />
        <Input placeholder="City" type="text" required={true} value={city} onChange={e=>setCity(e.target.value)}/>
        <Input placeholder="PIN/ZIP" type="number" required={true} value={pin} onChange={e=>setPin(e.target.value)}/>
        <Input placeholder="State" type="text" required={true} value={state} onChange={e=>setState(e.target.value)} />
        <Input placeholder="Country" type="text" required={true} value={country} onChange={e=>setCountry(e.target.value)}/>
        <Button text='Continue'/>
        
      </form>
    </div>  
  )
}
