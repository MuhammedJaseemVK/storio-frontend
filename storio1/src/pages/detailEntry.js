import React, {useState} from 'react'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'

export default function detailEntry() {
  const [name, setName] = useState("")
  function submitHandler(e) {
    e.preventDefault();
    alert(name)
  }

  return (
    <div className='bg-black h-screen flex flex-col gap-5 p-5'>
      <MdArrowBack className='text-white text-3xl' />
      <div className='text-white text-3xl '>Tell us more about <span className='text-[#ff9900]'>Yourself</span></div>
      <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3'>
        <Input placeholder="name" type="text" required={true} value={name} onChange={e=>setName(e.target.value)} />
        <Input placeholder="test" type="text" required={true} />
        <Input placeholder="test" type="text" required={true} />
        <Input placeholder="test" type="text" required={true} />
        <Link href="/"><Button text='Continue'/></Link>
        
      </form>
    </div>
  )
}
