import React, {useState} from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'

export default function detailEntry() {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showpassword, setshowpassword] = useState(false)
  


  function submitHandler(e) {
    e.preventDefault();
    if(password.length<8 || password.length>16){
      alert("Password is incorrect")
    }else{
      router.push('/customerhome')
    }
  }

  return (
    <div className='bg-black h-screen flex flex-col gap-5 p-5'>
     <Link href="/index"> <MdArrowBack className='text-white text-3xl' /></Link>
      <div className='text-white text-3xl font-semibold px-3 mt-4'>Welcome <span className='text-[#ff9900]'>    Back</span></div>
      <p className='text-white text-sm text-left px-3 mt-3'>You have been missed</p>
      <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3 mt-0.001'>
        <Input placeholder="Email" type="text" required={true} value={email} onChange={e=>setEmail(e.target.value)} />
        <Input placeholder="Password" type={showpassword?"text":"password" } required={true} value={password} onChange={e=>setPassword(e.target.value)} />
        <div className='flex items-center justify-end w-72'>
        <input type="checkbox" name="show" value={showpassword} onChange={()=>setshowpassword(!showpassword)} />
            <label className='text-white text-sm  px-3 ' >Show password</label>
           
        </div>
        <Button className='mt-10' text='Continue'/>
        
      </form>
    </div>  
  )
}