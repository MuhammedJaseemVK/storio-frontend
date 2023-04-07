import React from 'react'
import Heading from '@/components/inputs/Heading'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Date from '@/components/inputs/Date'
import Popup from '@/components/Popup'

export default function editprofile() {
    const router = useRouter();
    const [showPopup, setshowPopup] = useState(false);
    const [name, setName] = useState("")
    const [dob, setdob] = useState("")
    const [gender, setgender] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [pin, setPin] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")

    const handleOnClose = () => setshowPopup(false);

    async function submitHandler(e) {
        e.preventDefault();
        router.push('/profile')
    }

  return (
      <div className='h-screen bg-black text-white p-3'>
        <Link href="/profile"><MdArrowBack className='text-white text-3xl' /></Link>
        <Heading text1='Edit your' text2='profile' />

          <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3 mt-8'>
              <Input placeholder="Name" type="text" required={true} value={name} onChange={e => setName(e.target.value)} />
              <Date className='rounded-lg px-3 py-2 bg-gray-100' placeholder="Date of Birth"
                  id="date" required={true} value={dob} onChange={e => setdob(e.target.value)} />

              <select className='rounded-lg px-3 py-2 w-72 text-gray-400 ' defaultValue='gender' placeholder='Gender' name="gender" required={true} value={gender} onChange={e => setgender(e.target.value)} >
                  <option value="gender" hidden={true}>Select your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="I prefer not to say">I prefer not to say</option>

              </select>
              <Input placeholder="Address" type="text" required={true} value={address} onChange={e => setAddress(e.target.value)} />
              <Input placeholder="City" type="text" required={true} value={city} onChange={e => setCity(e.target.value)} />
              <Input placeholder="PIN/ZIP" type="number" required={true} value={pin} onChange={e => setPin(e.target.value)} />
              <Input placeholder="State" type="text" required={true} value={state} onChange={e => setState(e.target.value)} />
              <Input placeholder="Country" type="text" required={true} value={country} onChange={e => setCountry(e.target.value)} />
              <Button onClick={()=>setshowPopup(true)} text='Continue' />

          </form>
          <Popup visible={showPopup} onClose={handleOnClose} onSubmit={submitHandler}/> 
      </div>
  )
}
