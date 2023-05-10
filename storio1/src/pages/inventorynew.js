import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function inventory() {
  const [products, setproducts] = useState([])
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

  return (

    <div className="bg-black">
    <table className="w-full text-white">
      <thead>
        <tr>
          <th className="py-2 px-4 bg-gray-800 font-bold">Product Name</th>
          <th className="py-2 px-4 bg-gray-800 font-bold">Description</th>
          <th className="py-2 px-4 bg-gray-800 font-bold">Price</th>
          <th className="py-2 px-4 bg-gray-800 font-bold">RFID</th>
          <th className="py-2 px-4 bg-gray-800 font-bold">Brand</th>
          <th className="py-2 px-4 bg-gray-800 font-bold">Category</th>
          <th className="py-2 px-4 bg-gray-800 font-bold">Quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p =>
          <tr key={p.name} className="bg-gray-900 hover:bg-gray-800">
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
  </div>
  
    )
  }
 
