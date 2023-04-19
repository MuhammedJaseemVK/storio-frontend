import React from 'react'
import Heading from '@/components/inputs/Heading'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Date from '@/components/inputs/Date'
import Popup from '@/components/Popup'
import axios from 'axios'

import Notification from '@/components/Notification';

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
    const [image, setImage] = useState(null);
    const [apiResponse, setapiResponse] = useState({})

    const handleOnClose = () => setshowPopup(false);

    useEffect(() => {
        try {
            const fetchAndSetProfile = async () => {
                let username = localStorage.getItem('username')
                let profile = await fetchProfile(username)
                setName(profile.data.user.name)
                setdob(profile.data.user.dob.slice(0, 10))
                setgender(profile.data.user.gender)
                setAddress(profile.data.user.address)
                setPin(profile.data.user.pin)
                setCity(profile.data.user.city)
                setState(profile.data.user.state)
                setCountry(profile.data.user.country)
                setImage(profile.data.user.image)
            }
            fetchAndSetProfile()
        } catch (error) {
            console.log(error)
            alert("Error!")
        }
    }, [])

    const fetchProfile = username => {
        return axios.get(`https://storio.virtualdom.tech/users/profile?username=${username}`)
    };

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
        setshowPopup(false)
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
                    heading: "Details Updated Successfully"
                })
                setTimeout(() => {
                    setapiResponse({})
                    router.push('/profile')
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
        <div className='h-screen bg-black text-white p-3'>
            <Link href="/profile"><MdArrowBack className='text-white text-3xl' /></Link>
            <Heading text1='Edit your' text2='profile' />

            <form className='flex flex-col gap-3 w-full items-center px-3 mt-8 text-black'>
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
                <Button onClick={(e) => {
                    e.preventDefault()
                    setshowPopup(true)
                }} text='Continue' />

            </form>
            <Popup visible={showPopup} onClose={handleOnClose} onSubmit={submitHandler} />
            <Notification error={apiResponse.error} heading={apiResponse.heading} show={apiResponse.show} />
        </div>
    )
}
