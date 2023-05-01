import QRCodeScanner from '@/components/QRCodeScanner'
import Sidebar from '@/components/inputs/Sidebar';
import React, { useState } from 'react'

export default function shopownerhome() {
    const [showQR, setShowQR] = useState(false);
    const scanQR = () => {
        setShowQR(true);
    }
    return (
        <div className='flex bg-black text-white'>
            <Sidebar activeTab={2} />
            <div className='h-screen bg-black text-white p-3 justify-center items-center mx-auto'>
                <div>
                    <QRCodeScanner />
                </div>
            </div>
        </div>
    )
}
