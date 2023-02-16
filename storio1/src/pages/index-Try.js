import React from 'react'
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Heading from '@/components/inputs/Heading';
import Subtext from '@/components/inputs/Subtext';

export default function index1() {
  return (
    <div className='h-screen flex flex-col justify-between bg-black p-5'>
        <MdArrowBack className='text-white text-3xl'/>
          <div className='flex flex-col gap-3 pb-20'>
              <Heading text1="Let's get" text2='Started' />
              <Subtext text='Create an account or login to begin adventure'></Subtext>
              <div className='flex flex-col items-center justify-center text-black text-base'>
                  <button className='bg-white w-full  px-3 py-2 mt-4 rounded-lg'>
                      Signup as customer
                  </button>
                  <button className='bg-[#ff9900] w-full px-3 py-2 mt-4 rounded-lg'>
                      Signup as shopowner
                  </button>
                  <button className='bg-[#ff9900] w-full px-3 py-2 mt-4 rounded-lg'>
                      Signup as supplier
                  </button>
              </div>
              <p className='text-sm text-white text-center'>Already have an account?</p>
        </div>
               
    </div>
  )
}
