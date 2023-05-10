import React, { useState } from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'
import { MdOutlineArrowForward } from "react-icons/md";
import axios from 'axios';
import NotificationDesktop from '@/components/NotificationDesktop';

const categoryNames = ['Electronics', 'Clothing', 'Home', 'Sports']

export default function detailEntry() {
  const router = useRouter();
  const [ownername, setOwnerName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [pin, setPin] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [companyName, setCompanyname] = useState("")
  const [category, setCategory] = useState("")
  const [apiResponse, setapiResponse] = useState({})

  async function registersupplier({ username, companyName, ownername, address, city, pin, state, country }) {
    const formData = new FormData();
    formData.append('companyName', companyName);
    formData.append('username', username);
    formData.append('name', ownername);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('pin', pin);
    formData.append('state', state);
    formData.append('country', country);
    formData.append('category', category);

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
        let response = await registersupplier({ username, companyName, ownername, address, city, pin, state, country })
        console.log(response)
        if (response.status !== 200) throw Error("Wrong")

        setapiResponse({
          error: false,
          show: true,
          heading: "Registration is Successful"
        })
        setTimeout(() => {
          setapiResponse({})
          router.push('/supplierhome')
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


  return (
    <div className='bg-black h-screen flex flex-col gap-5 p-5'>
      <Link href="/signup"><MdArrowBack className='text-white text-3xl' /></Link>
      <div className='text-white text-3xl font-semibold px-2 '>Tell us more about <span className='text-[#ff9900]'>Yourself</span></div>
      <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3'>
        <Input placeholder="Company name" type="text" required={true} value={companyName} onChange={e => setCompanyname(e.target.value)} />
        <Input placeholder="Owner name" type="text" required={true} value={ownername} onChange={e => setOwnerName(e.target.value)} />
        <Input placeholder="Address" type="text" required={true} value={address} onChange={e => setAddress(e.target.value)} />
        <Input placeholder="City" type="text" required={true} value={city} onChange={e => setCity(e.target.value)} />
        <Input placeholder="PIN/ZIP" type="number" required={true} value={pin} onChange={e => setPin(e.target.value)} />
        <Input placeholder="State" type="text" required={true} value={state} onChange={e => setState(e.target.value)} />
        <Input placeholder="Country" type="text" required={true} value={country} onChange={e => setCountry(e.target.value)} />
        {/* <Input placeholder="Category" type="text" required={true} value={category} onChange={e => setCategory(e.target.value)} /> */}
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="form-select mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select a category</option>
          {categoryNames.map((productName) => (
            <option key={productName} value={productName}>
              {productName}
            </option>
          ))}
        </select>
        <Button text='Continue' />

      </form>
      <NotificationDesktop error={apiResponse.error} heading={apiResponse.heading} show={apiResponse.show} />
    </div>
  )
}
