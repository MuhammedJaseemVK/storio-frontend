import Navbar from '@/components/Navbar';
import QRCodeScanner from '@/components/QRCodeScanner'
import Sidebar from '@/components/Sidebar';
import React, { useState } from 'react';

export default function shopownerhome() {
    const [showQR, setShowQR] = useState(false);
    const scanQR = () => {
        setShowQR(true);
    }
    return (
            <div className='h-screen w-full bg-black'>
            <div className='flex flex-row'>
              <Sidebar activeTab={2} />
              <div className='w-full'>
                <Navbar section="Scan"/>
                <div>
                    <QRCodeScanner />
                </div>
              </div>
            </div>
          </div>
    )
}
