import React, {useState} from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'
import NotificationDesktop from '@/components/NotificationDesktop';
import axios from 'axios';

export default function shopownerdetail() {
  const router = useRouter();
  const [shopName, setshopName] = useState("")
  const [ownername, setOwnerName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [pin, setPin] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [apiResponse, setapiResponse] = useState({})

  async function register({ username,shopName, ownername, address,city,pin,state,country }) {
    const formData = new FormData();
    formData.append('shopName', shopName);
    formData.append('username', username);
    formData.append('name', ownername);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('pin', pin);
    formData.append('state', state);
    formData.append('country', country);
   
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
        let response = await register({ username, shopName,ownername, address, city, pin, state, country })
        console.log(response)
        if (response.status !== 200) throw Error("Wrong")

        setapiResponse({
          error: false,
          show: true,
          heading: "Registration is Successful"
        })
        setTimeout(() => {
          setapiResponse({})
          router.push('/shopownerhome')
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
      
      <div className='text-white text-4xl font-semibold px-8 '>Tell us more about <span className='text-[#ff9900]'>Your Store</span></div>
      <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3'>
        <Input placeholder="Shop name" type="text" required={true} value={shopName} onChange={e=>setshopName(e.target.value)} />
        <Input placeholder="Owner name" type="text" required={true} value={ownername} onChange={e=>setOwnerName(e.target.value)} />
        <Input placeholder="Address" type="text" required={true} value={address} onChange={e=>setAddress(e.target.value)} />
        <Input placeholder="City" type="text" required={true} value={city} onChange={e=>setCity(e.target.value)}/>
        <Input placeholder="PIN/ZIP" type="number" required={true} value={pin} onChange={e=>setPin(e.target.value)}/>
        <Input placeholder="State" type="text" required={true} value={state} onChange={e=>setState(e.target.value)} />
        <Input placeholder="Country" type="text" required={true} value={country} onChange={e=>setCountry(e.target.value)}/>
        <button className='bg-[#ff9900] flex justify-center w-1/6  items-center text-black text-base rounded-lg px-1 py-2 mt-4'  >Continue <MdOutlineArrowForward ></MdOutlineArrowForward></button>
        
      </form>
      <NotificationDesktop error={apiResponse.error} heading={apiResponse.heading} show={apiResponse.show} />
    </div>  
  )
}
