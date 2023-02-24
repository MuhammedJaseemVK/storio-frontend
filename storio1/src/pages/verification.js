import React, {useState} from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'

export default function verification() {
    const router = useRouter();
    const [phone, setPhone] = useState("")
    const [showotp, setShowotp] = useState(false)
    const [otp, setotp] = useState("")
    function submitHandler(e) {
        e.preventDefault();
        if(phone.length!=10){
          alert("Phone number is is incorrect")
        }else{
          setShowotp(true)
        }
      }
    return (
      <div className='bg-black h-screen p-5'>
          <MdArrowBack className='text-white text-3xl'/>
          <div className='text-white text-3xl mt-4 px-3'>Enter your <span className='text-[#ff9900]'>Phone</span></div>
          <p className='text-white text-sm text-left mt-7 px-3'>You will receive 4 digit code for phone number verification.</p>
          <form onSubmit={submitHandler} className='flex flex-col gap-3 px-3 py-7' >
            
            
            <select className='rounded-lg px-3 py-2' placeholder='Phone Number' name="country" id="country-names">

            <option value="India">India</option>
            
            </select>
            
            <Input placeholder="Phone Number" type="number" required={true} value={phone} onChange={e=>setPhone(e.target.value)} />
            {
                showotp &&
                <Input placeholder="OTP" type="number" required={true} value={otp} onChange={e=>setotp(e.target.value)} />
            }
           
            
            
            <Button text='Continue' />
          </form>
          
      </div>
    )
  }
  