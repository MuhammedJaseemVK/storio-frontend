import React, { useState } from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'
import axios from 'axios';

export default function detailEntry() {
    const router = useRouter();
    const [name, setproductname] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [rfid, setrfid] = useState("")
    const [brand, setbrand] = useState("")
    const [category, setcategory] = useState("")
    const [quantity, setquantity] = useState("")


    async function addproduct() {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('rfid', rfid);
        formData.append('brand', brand);
        formData.append('category', category);
        formData.append('quantity', quantity);

        return axios.post('https://storio.virtualdom.tech/products', {
            name, price, rfid, brand, category, quantity
        }, {
            //   headers: { 'Content-Type': 'multipart/form-data' }
        });
    }

    async function submitHandler(e) {
        e.preventDefault();
        try {
            let resp = await addproduct()
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='bg-black h-screen flex flex-col gap-5 p-5'>
            <Link href="/signup"><MdArrowBack className='text-white text-3xl' /></Link>

            <div className='text-white text-3xl font-semibold px-2 '>Add new <span className='text-[#ff9900]'>Product</span></div>
            <form onSubmit={submitHandler} className='flex flex-col gap-3 w-full items-center px-3'>
                <Input placeholder="Product name" type="text" required={true} value={name} onChange={e => setproductname(e.target.value)} />
                <Input placeholder="Product Description" type="text" required={true} value={description} onChange={e => setdescription(e.target.value)} />
                <Input placeholder="Price" type="number" required={true} value={price} onChange={e => setprice(e.target.value)} />
                <Input placeholder="Product category" type="text" required={true} value={category} onChange={e => setcategory(e.target.value)} />
                <Input placeholder="Product Brand" type="text" required={true} value={brand} onChange={e => setbrand(e.target.value)} />
                <Input placeholder="Product RFID" type="text" required={true} value={rfid} onChange={e => setrfid(e.target.value)} />

                <Input placeholder="Quantity" type="number" required={true} value={quantity} onChange={e => setquantity(e.target.value)} />

                <Button text='Add' />

            </form>
        </div>
    )
}
