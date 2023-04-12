import React from 'react'

export default function Confirmpayment({ show, confirmpayment,cancelpayment}) {
    return (
        <div className='absolute bottom-0 left-0 z-50 w-full px-5 '>
            {
                show &&
                <div className='bg-white rounded-t-2xl px-5 pt-5 pb-20 animate-emerge-confirm-popup  flex flex-col gap-5 items-center z-30 absolute bottom-0 right-5 left-5'>
                    
                    <h5 className='font-bold text-xl text-center text-gray-800 p-4'>Are you sure you want to conifrm your payment</h5>
                    <button onClick={confirmpayment} className='bg-[#ff9900] font-Poppins font-bold text-gray-900 rounded-lg w-full p-4'>Yes let's go ahead</button>
                    <button onClick={cancelpayment} className=' font-bold text-gray-600  rounded-lg w-full p-0'>Not sure</button>
                </div>
            }
        </div>
    )
}