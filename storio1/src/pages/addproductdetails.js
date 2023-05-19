import React, { useState } from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'
import axios from 'axios';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Subtext from '@/components/inputs/Subtext';
import Heading from '@/components/inputs/Heading';

export default function detailEntry() {
    const router = useRouter();
    const [name, setproductname] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [rfid, setrfid] = useState("")
    const [brand, setbrand] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setquantity] = useState("")


    async function addproduct() {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('rfid', rfid);
        formData.append('brand', brand);
        formData.append('description', description)
        formData.append('category', category);
        formData.append('quantity', quantity);

        return axios.post('https://storio.virtualdom.tech/products', {
            name, price, rfid, brand, category, quantity, description
        }, {
            //   headers: { 'Content-Type': 'multipart/form-data' }
        });
    }

    async function submitHandler(e) {
        e.preventDefault();
        try {
            let resp = await addproduct()
            console.log(resp)
            router.back()
        } catch (error) {
            console.log(error)
        }
    }

    const categoryNames = ['Electronics', 'Clothing', 'Home', 'Sports']

    return (

        <div className='h-screen w-full bg-black'>
            <div className='flex flex-row'>
                <Sidebar activeTab={5} />
                <div className='w-full flex flex-col'>
                    <Navbar section="Add product" />
                    <div className='my-auto'>
                        <form onSubmit={submitHandler} className='flex flex-col gap-2 w-full items-center px-3 '>
                            <div className='text-white text-3xl font-semibold px-2 '>Add new <span className='text-[#ff9900]'>Product</span></div>
                            <Subtext text="Enter details of new product" />
                            <Input placeholder="Product name" type="text" required={true} value={name} onChange={e => setproductname(e.target.value)} />
                            <Input placeholder="Product Description" type="text" required={true} value={description} onChange={e => setdescription(e.target.value)} />
                            <Input placeholder="Price" type="number" required={true} value={price} onChange={e => setprice(e.target.value)} />
                            <select
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                                className="form-select mt-1 block  text-gray-600 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring w-72 focus:ring-indigo-200 focus:ring-opacity-50"
                            >
                                <option value="">Select a category</option>
                                {categoryNames.map((productName) => (
                                    <option key={productName} value={productName}>
                                        {productName}
                                    </option>
                                ))}
                            </select>
                            <Input placeholder="Product Brand" type="text" required={true} value={brand} onChange={e => setbrand(e.target.value)} />
                            <Input placeholder="Product RFID" type="text" required={true} value={rfid} onChange={e => setrfid(e.target.value)} />

                            <Input placeholder="Quantity" type="number" required={true} value={quantity} onChange={e => setquantity(e.target.value)} />

                            <Button text='Add' />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

