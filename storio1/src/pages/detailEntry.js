import React from 'react'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';

export default function detailEntry() {
  return (
    <div className='bg-black h-screen flex flex-col gap-5 p-5'>
      <MdArrowBack className='text-white text-3xl' />
      <div className='text-white text-3xl '>Tell us more about <span className='text-[#ff9900]'>Yourself</span></div>
      <form className='flex flex-col gap-3 w-full items-center'>
        <Input placeholder="test" type="text" required={true} />
        <Input placeholder="test" type="text" required={true} />
        <Input placeholder="test" type="text" required={true} />
        <Input placeholder="test" type="text" required={true} />
        <Button />
      </form>
    </div>
  )
}
