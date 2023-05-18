import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SidebarSupplier from '@/components/SidebarSupplier'
import Navbar from '@/components/Navbar'


export default function inventory() {
    const [products, setproducts] = useState([])
    const [orders, setorders] = useState([])
    useEffect(() => {
        try {
            const fetchAndSetProfile = async () => {
                let products = await fetchProducts()
                setproducts(products.data)
                console.log(products)
            }
            fetchAndSetProfile()
        } catch (error) {
            console.log(error)
            alert("Error!")
        }
    }, [])
    const fetchProducts = () => {
        let username = localStorage.getItem('username')
        return axios.get(`https://storio.virtualdom.tech/payment/get_notification_supplier?id=${username}`)
    };

    return (

        <div className='h-screen w-full bg-black'>
            <div className='flex flex-row'>
                <SidebarSupplier activeTab={2} />
                <div className='w-full flex flex-col'>
                    <Navbar section="Add product" />
                    <div className='my-auto'>

                        <div className=" bg-black mx overflow-y-auto h-screen">

                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <h2 className='text-2xl text-white font-bold  p-5 '> Low Stock Details</h2>
                                <table className="w-full text-white bg-black">
                                    <thead>
                                        <tr className="bg-[#ff9900]">
                                            <th className="py-2 px-4  font-bold">Product Name</th>
                                            <th className="py-2 px-4  font-bold">Description</th>
                                            <th className="py-2 px-4  font-bold">Price</th>
                                            <th className="py-2 px-4  font-bold">Brand</th>
                                            <th className="py-2 px-4  font-bold">Category</th>
                                            <th className="py-2 px-4  font-bold">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map(p => {
                                            if (p.quantity < 5) {
                                                return (
                                                    <tr key={p.name} className="bg-gray-700 hover:bg-gray-800">
                                                        <td className="py-2 px-4">{p.name}</td>
                                                        <td className="py-2 px-4">{p.description}</td>
                                                        <td className="py-2 px-4">{p.price}</td>
                                                        <td className="py-2 px-4">{p.brand}</td>
                                                        <td className="py-2 px-4">{p.category}</td>
                                                        <td className={`py-2 px-4 ${p.quantity <= 5 ? 'text-red-500' : ''}`}>{p.quantity}</td>
                                                    </tr>
                                                );
                                            } else {
                                                return null; // Skip rendering the table row if quantity is not less than 5
                                            }
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

