import React, { useState } from 'react'
import { AiFillHome, AiOutlineDropbox, AiFillDollarCircle } from 'react-icons/ai';
import { ImWarning } from 'react-icons/im';
import { TbLogout } from 'react-icons/tb';
import { useRouter } from 'next/router';
import Popup from '@/components/Popup';

function SidebarSupplier({ activeTab }) {

    const router = useRouter();
    const [popupHeading, setPopupHeading] = useState('Are you sure you want to logout?');
    const [showPopup, setshowPopup] = useState(false);
    const handleOnClose = () => setshowPopup(false);

    const Logout = (e) => {
        e.preventDefault();
        localStorage.setItem('username', '')
        localStorage.setItem('tokan', '')
        router.push('/')
    }

    return (
        <div className=' left-0 bg-gray-900 h-screen w-18 flex flex-col items-center justify-between py-8 gap-8'>

            <div className='flex flex-col gap-8 w-full'>
                <div className="w-full flex justify-center gap-y-5  gap-1">
                    <AiFillHome className="text-[#ff9900] text-2xl" />
                    <span className="text-2xl font-bold text-[#ff9900]">STORIO</span>
                </div>
                <div className="flex justify-center mt-8">

                        <Popup heading={popupHeading} visible={showPopup} onClose={handleOnClose} onSubmit={Logout} />
                    <ul className="list-none flex flex-col gap-4 px-3">
                        <li className={`py-2 px-8 rounded-md ${activeTab === 1 ? 'text-[#ff9900] ' : 'text-white '} hover:text-[#ff9900] hover:bg-white "`}>
                            <a href="/supplierHome" className="flex flex-col items-center justify-center gap-2 ">
                                <AiFillHome className="text-2xl" />
                                <span className='text-xl font-bold'>Home</span>
                            </a>
                        </li>
                        <li className={`py-2 px-8 rounded-md ${activeTab === 2 ? 'text-[#ff9900] ' : 'text-white '} hover:text-[#ff9900] hover:bg-white "`}>
                            <a href="/lowStock" className="flex flex-col items-center justify-center gap-2 ">
                                <ImWarning className="text-2xl" />
                                <span className='text-xl font-bold whitespace-nowrap'>Low Stock</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <button className="py-2.5 px-12.5 ml-[-2rem]" onClick={(e) => {
                e.preventDefault()
                setshowPopup(true)
            }}>
                <div className="text-white flex items-center justify-center gap-2 ">
                    <TbLogout className=" text-2xl" />
                    <span className='text-xl font-bold'>Logout</span>
                </div>
            </button>

        </div>
    )
}

export default SidebarSupplier