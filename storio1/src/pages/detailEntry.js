import React, { useState } from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Date from '@/components/inputs/Date';
import Button from '@/components/inputs/Button';
import Link from 'next/link'
import axios from 'axios';
import Notification from '@/components/Notification';

export default function detailEntry() {
  const router = useRouter();
  const [name, setName] = useState("")
  const [dob, setdob] = useState("")
  const [gender, setgender] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [pin, setPin] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [image, setImage] = useState(null);
  const [apiResponse, setapiResponse] = useState({})

  // const verification = ({ username, phone, name, dob, gender, address, city, pin, state, country, image }) => {
  //   return axios.put('https://storio.virtualdom.tech/users/update', {
  //     name, dob, gender, address, city, pin, state, country, image,
  //     mobileNumber: phone, username
  //   })
  // };

  async function verification({ username, phone, name, dob, gender, address, city, pin, state, country, image }) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('dob', dob);
    formData.append('gender', gender);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('pin', pin);
    formData.append('state', state);
    formData.append('country', country);
    formData.append('profilePic', image);
    formData.append('mobileNumber', phone);
    formData.append('username', username);
  
    return axios.put('https://storio.virtualdom.tech/users/update', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  }
  

  async function submitHandler(e) {
    e.preventDefault();
    if (pin.length != 6) {
      setapiResponse({
        error: true,
        show: true,
        heading: "Invalid pin !"
      })
      setTimeout(() => {
        setapiResponse({})
      }, 3000)
      console.log("test")
    }
    else {
      // router.push('/verification')
      try {
        let phone = router.query.id
        // TODO save and retrive username on localstorage
        let username = localStorage.getItem('username')
        if (!username) {
          setapiResponse({
            error: true,
            show: true,
            heading: "Something went wrong !"
          })
          setTimeout(() => {
            setapiResponse({})
          }, 3000)
          return
        }
        let response = await verification({ username: username, phone, name, dob, gender, address, city, pin, state, country, image })
        console.log(response)
        if (response.status !== 200) throw Error("Wrong")

        setapiResponse({
          error: false,
          show: true,
          heading: "Registration is Successful"
        })
        setTimeout(() => {
          setapiResponse({})
          router.push('/customerhome')
        }, 3000)
      } catch (error) {
        console.log(error)

        setapiResponse({
          error: true,
          show: true,
          heading: error?.response?.data?.message || "Something went wrong !"
        })
        setTimeout(() => {
          setapiResponse({})
        }, 3000)
      }
    }

  }

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className='bg-black h-screen flex flex-col gap-5 p-5'>
      <Link href="/signup"><MdArrowBack className='text-white text-3xl' /></Link>

      <div className='text-white text-3xl font-semibold px-3 '>Tell us more about <span className='text-[#ff9900]'>Yourself</span></div>
      <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3'>
        <label className='text-white text-1xl p-5 '>
          Upload Profile Picture:
          <input type="file" onChange={handleImageUpload} />
        </label>
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
        <Button text='Continue' />

      </form>
      <Notification error={apiResponse.error} heading={apiResponse.heading} show={apiResponse.show} />
    </div>
  )
}