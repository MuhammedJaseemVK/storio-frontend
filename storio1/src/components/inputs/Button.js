import React from 'react'
import { MdOutlineArrowForward } from "react-icons/md";

export default function Button(props) {
    return (
        <button className='bg-[#ff9900] flex justify-center w-full items-center text-black text-base rounded-lg px-3 py-2 mt-4'>
            <span>{props.text}</span>
            <MdOutlineArrowForward />
            
        </button>
    )
}
