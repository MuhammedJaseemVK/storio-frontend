import React, { useState, useEffect } from 'react';
import Navbar from '@/components/inputs/navbar';


const PurchaseHistory = () => {
  


  

  return (
    <div className='min h-screen bg-black'>
      <div >
        <h3 className='text-[#ff9900] text-3xl font-bold p-4'>Purchase History</h3>
      </div>
      <Navbar activeTab={3} />
    </div>

  );
};

export default PurchaseHistory;