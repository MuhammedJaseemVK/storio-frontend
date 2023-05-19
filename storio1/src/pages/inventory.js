import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
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
    return axios.get(`https://storio.virtualdom.tech/products`)
  };

  useEffect(() => {
    try {
      const fetchAndSetOrders = async () => {
        let orders = await fetchOrders()
        setorders(orders.data)
        console.log(orders)
      }
      fetchAndSetOrders()
    } catch (error) {
      console.log(error)
      alert("Error!")
    }
  }, [])
  const fetchOrders = () => {
    return axios.get(`https://storio.virtualdom.tech/payment/totalorders`)
  };


  return (

    <div className='h-screen w-full bg-black'>
      <div className='flex flex-row'>
        <Sidebar activeTab={4} />
        <div className='w-full flex flex-col'>
          <Navbar section="Add product" />
          <div className='my-auto'>
            <div className=" bg-black mx overflow-y-auto h-screen">

              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className='text-2xl text-white font-bold  p-5 '> Stock Details</h2>
                <table className="w-full text-white ">
                  <thead>
                    <tr className="bg-[#ff9900]">
                      <th className="py-2 px-4  font-bold">Product Name</th>
                      <th className="py-2 px-4  font-bold">Description</th>
                      <th className="py-2 px-4  font-bold">Price</th>
                      <th className="py-2 px-4  font-bold">RFID</th>
                      <th className="py-2 px-4  font-bold">Brand</th>
                      <th className="py-2 px-4 font-bold">Category</th>
                      <th className="py-2 px-4 font-bold">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p =>
                      <tr key={p.name} className="bg-gray-700 hover:bg-gray-800">
                        <td className="py-2 px-4">{p.name}</td>
                        <td className="py-2 px-4">{p.description}</td>
                        <td className="py-2 px-4">{p.price}</td>
                        <td className="py-2 px-4">{p.rfid}</td>
                        <td className="py-2 px-4">{p.brand}</td>
                        <td className="py-2 px-4">{p.category}</td>
                        <td className="py-2 px-4">{p.quantity}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <h2 className='text-2xl text-white font-bold flex justify-start text-left p-5'>Order Details</h2>
                <table className="w-full text-white bg-black">
                  <thead>
                    <tr className="bg-[#ff9900]">
                      <th className="py-2 px-4  font-bold">Order ID</th>
                      <th className="py-2 px-4  font-bold">Customer ID</th>
                      <th className="py-2 px-4  font-bold">Order Total</th>
                      <th className="py-2 px-4 font-bold">Payment ID</th>
                      <th className="py-2 px-4  font-bold">Order Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(p =>
                      <tr key={p.name} className="bg-gray-700 hover:bg-gray-800">
                        <td className="py-2 px-4">{p.orderId}</td>
                        <td className="py-2 px-4">{p.customerId}</td>
                        <td className="py-2 px-4">{p.orderTotal}</td>
                        <td className="py-2 px-4">{p.razorpayPaymentId}</td>
                        <td className="py-2 px-4">{p.orderDate}</td>
                      </tr>
                    )}
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

