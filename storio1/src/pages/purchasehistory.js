import React, { useState, useEffect } from 'react';
import Navbar from '@/components/inputs/navbar';
import axios from 'axios';

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
    <div className='min h-screen bg-black'>
      <div >
        <h3 className='text-[#ff9900] text-3xl font-bold p-4'>Purchase History</h3>
        {
          orders.map(order =>
            <div className='bg-gray-200 bg-opacity-3 border border-y-2'>
              <div>Total:{order.orderTotal}</div>
              <div>Products:{order.items.length}</div>
              <div>Total:{new Date(order.orderDate).toDateString()}</div>
            </div>
          )
        }
      </div>
      <Navbar activeTab={3} />
    </div>

  );
};

export default PurchaseHistory;