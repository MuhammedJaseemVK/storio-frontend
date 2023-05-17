import React, { useState } from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Subtext from '@/components/inputs/Subtext';

export default function detailEntry() {
    const router = useRouter();
    const [productname, setproductname] = useState("")
    const [productcategory, setproductcategory] = useState("")
    const [manufacturename, setmanufacturename] = useState("")
    const [productid, setproductid] = useState("")
    const [companyname, setcompanyname] = useState("")
    const [price, setprice] = useState("")


    function submitHandler(e) {
        e.preventDefault();
        router.push('/')
    }

    return (
        <div className='bg-black h-screen flex flex-col '>
            {/* <Link href="/signup"><MdArrowBack className='text-white text-3xl' /></Link> */}


            <div className='h-screen w-full bg-black'>
                <div className='flex flex-row'>
                    <Sidebar activeTab={5} />
                    <div className='w-full flex flex-col'>
                        <Navbar section="Add product" />
                        <div className='my-auto'>
                        <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3 '>
                        <div className='text-white text-3xl font-semibold p-2 '>Add a new <span className='text-[#ff9900]'>product</span></div>
                        <Subtext text="Enter details about new product" />
                            <Input placeholder="Product name" type="text" required={true} value={productname} onChange={e => setproductname(e.target.value)} />
                            <Input placeholder="Product category" type="text" required={true} value={productcategory} onChange={e => setproductcategory(e.target.value)} />
                            <Input placeholder="Manufacturer name" type="text" required={true} value={manufacturename} onChange={e => setmanufacturename(e.target.value)} />
                            <Input placeholder="Product id" type="text" required={true} value={productid} onChange={e => setproductid(e.target.value)} />
                            <Input placeholder="Company name" type="text" required={true} value={companyname} onChange={e => setcompanyname(e.target.value)} />
                            <Input placeholder="Price" type="number" required={true} value={price} onChange={e => setprice(e.target.value)} />
                            {/* <Input placeholder="Country" type="text" required={true} value={country} onChange={e => setCountry(e.target.value)} /> */}
                            <Button text='Add' />
                        </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
