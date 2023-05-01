import React from 'react'
import { AiFillHome, AiOutlineDropbox } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { TbLogout } from 'react-icons/tb';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Sidebar({ activeTab }) {

    const router = useRouter();

    const Logout = (e) => {
        e.preventDefault();
        localStorage.setItem('username', '')
        localStorage.setItem('tokan', '')
        router.push('/')
    }

    return (
        <div className='flex flex-col justify-between w-auto bg-gray-900 h-auto p-2'>
            <div className='flex flex-col gap-4 '>
                <div>
                    <Link href='/shopownerhome'>
                        <div className={` flex flex-col items-center gap-2 ${activeTab === 0 ? 'text-[#ff9900]' : 'text-white'}`}>
                            <AiFillHome className='text-2xl' />
                            <p className='text-xl'>Home</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href='/sales'>
                        <div className={` flex flex-col items-center p-2 gap-2 ${activeTab === 1 ? 'text-[#ff9900]' : 'text-white'}`}>
                            <RiMoneyDollarCircleFill className='text-2xl' />
                            <p className='text-xl'>Sales</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href='/scan'>
                        <div className={` flex flex-col items-center p-2 gap-2 ${activeTab === 2 ? 'text-[#ff9900]' : 'text-white'}`}>
                            <MdOutlineQrCodeScanner className='text-2xl' />
                            <p className='text-xl'>Scan</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href='/inventory'>
                        <div className={` flex flex-col items-center p-2 gap-2 ${activeTab === 3 ? 'text-[#ff9900]' : 'text-white'}`}>
                            <AiOutlineDropbox className='text-2xl' />
                            <p className='text-xl'>Inventory</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href='/scan'>
                        <div className={` flex flex-col items-center p-2 gap-2 ${activeTab === 4 ? 'text-[#ff9900]' : 'text-white'}`}>
                            <IoMdAddCircle className='text-2xl' />
                            <p className='text-xl'>Add product</p>
                        </div>
                    </Link>
                </div>
            </div>
            <button onClick={Logout} className='flex flex-col items-center p-2 gap-2 text-white'>
                <TbLogout className='text-2xl' />
                <p className='text-xl'>Logout</p>
            </button>
        </div>
    )
}

export default Sidebar