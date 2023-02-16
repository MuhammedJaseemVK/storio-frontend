import React from 'react'
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';

export default function forgotPassword() {
    return (
        <div className='bg-black h-screen flex flex-col gap-5 p-5'>
             <MdArrowBack className='text-white text-3xl' />
                <div className='text-white text-3xl px-3'><b> Forgot <span className='text-[#ff9900] text-3xl'>
          Password?</span></b>
                </div>
                <p className='text-base text-white mt-4 px-3'>
                Please enter your email address. You will receive a link to create a new password via email.
                </p><br/>
                <form className='w-full flex flex-col gap-2 items-center px-3'>
                    <Input className='w-1/2' placeholder="E-mail" type="text" required={true} />    
                    <Button text='Send Recovery Email' />                                     
                </form>
        </div>
    )
}
