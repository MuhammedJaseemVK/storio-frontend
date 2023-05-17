import React from 'react'
import { AiFillHome, AiOutlineDropbox, AiFillDollarCircle } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';
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
        <div className=' left-0 bg-gray-900 h-screen w-18 flex flex-col items-center justify-between py-8 gap-8'>
            <div className='flex flex-col gap-8 w-full'>
                <div className="w-full flex justify-center gap-y-5  gap-1">
                    <AiFillHome className="text-[#ff9900] text-2xl" />
                    <span className="text-2xl font-bold text-[#ff9900]">STORIO</span>
                </div>
                <div className="flex justify-center mt-8">
                    <ul className="list-none flex flex-col gap-4 px-3">
                        <li className={`py-2 px-8 rounded-md ${activeTab === 1 ? 'text-[#ff9900] ' : 'text-white '} hover:text-[#ff9900] hover:bg-white "`}>
                            <a href="/shopownerhome" className="flex flex-col items-center justify-center gap-2 ">
                                <AiFillHome className="text-2xl" />
                                <span className='text-xl font-bold'>Home</span>
                            </a>
                        </li>
                        <li className={`py-2 px-8 rounded-md ${activeTab === 2 ? 'text-[#ff9900] ' : 'text-white '} hover:bg-white hover:text-black "`}>
                            <a href="/scan" className="flex flex-col items-center justify-center gap-2 ">
                                <MdOutlineQrCodeScanner className=" text-2xl" />
                                <span className='text-xl font-bold'>Scan</span>
                            </a>
                        </li>
                        <li className={`py-2 px-8 rounded-md ${activeTab === 3 ? 'text-[#ff9900] ' : 'text-white '} hover:bg-white hover:text-black "`}>
                            <a href="/sales" className="flex flex-col items-center justify-center gap-2 ">
                                <AiFillDollarCircle className=" text-2xl" />
                                <span className='text-xl font-bold'>Sales</span>
                            </a>
                        </li>
                        <li className={`py-2 px-8 rounded-md ${activeTab === 4 ? 'text-[#ff9900] ' : 'text-white '} hover:bg-white hover:text-black "`}>
                            <a href="/inventory" className="flex flex-col items-center justify-center gap-2 ">
                                <AiOutlineDropbox className=" text-2xl" />
                                <span className='text-xl font-bold'>Inventory</span>
                            </a>
                        </li>
                        <li className={`py-2 px-8 rounded-md ${activeTab === 5 ? 'text-[#ff9900] ' : 'text-white '} hover:bg-white hover:text-black "`}>
                            <a href="/addproductdetails" className="flex flex-col items-center gap-2 ">
                                <IoMdAddCircle className=" text-2xl" />
                                <p className='text-xl font-bold whitespace-nowrap'>Add product</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="py-2.5 px-12.5 ml-[-2rem]">
                <div className="text-white flex items-center justify-center gap-2 ">
                    <TbLogout className=" text-2xl" />
                    <span className='text-xl font-bold'>Logout</span>
                </div>
            </button>
        </div>
    )
}

export default Sidebar