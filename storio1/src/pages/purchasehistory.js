import React, { useState, useEffect } from 'react';
import Navbar from '@/components/inputs/navbar';
import axios from 'axios';
import { MdArrowBack } from "react-icons/md";
import Link from 'next/link'

const PurchaseHistory = () => {
  const [orders, setorders] = useState([])
  useEffect(() => {
    try {
      const fetchorders = async () => {
        let username = localStorage.getItem('username')
        let orders = await fetchProfile(username)
        console.log(orders)
        setorders(orders.data)
      }
      fetchorders()
    } catch (error) {
      console.log(error)
      alert("Error!")
    }

  }, [])

  const fetchProfile = username => {
    return axios.get(`https://storio.virtualdom.tech/payment/orders?id=${username}`)
  };



  return (
    <div className='h-[800px] min-h-screen bg-black p-3 overflow-y-auto'>
      <div className='max-w-3xl mx-auto px-4 py-8'>
      <Link href="/customerhome"> <MdArrowBack className='text-white text-3xl' /></Link>
        <h3 className='text-orange-500 text-3xl font-bold mb-4 p-4'>Purchase History</h3>
        <h5 className='text-white font-bold text-2xl mt-3 p-4 '>Your previous orders are:</h5>
        {
          orders.map((order, index) =>
            <div key={index} className='bg-white shadow-md rounded-lg mb-4'>
              <div className='px-4 py-3 border-b'>
                <div className='text-gray-600'>Products: {order.items.length}</div>
                <div className='text-gray-600'>Total: {order.orderTotal / 100} Rs</div>
                <div className='text-gray-600'>Date: {new Date(order.orderDate).toDateString()}</div>
                <div className='text-gray-600'>Order ID: {order.orderId}</div>
              </div>
              <div className='p-4'>
                <ul className='list-disc list-inside'>
                  {
                    order.items.map((item, index) =>
                      <li key={index} className='text-gray-700'>{item.name} - {item.price} Rs</li>
                    )
                  }
                </ul>
              </div>
            </div>
          )
        }
      </div>
      <Navbar activeTab={3} />
    </div>
  );
};

export default PurchaseHistory;