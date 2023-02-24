import React, { useState } from 'react'
export default function Input(props) {

    const [inputType, setinputType] = useState('text')

    return (
        <div>
            <input type={inputType} placeholder={props.placeholder} onChange={props.onChange} value={props.value} required={props.required ? true : false}
                className='rounded-lg px-3 py-2 bg-gray-100 focus:bg-white duration-300 peer w-72'
            onFocus={()=> setinputType('date')} onBlur={()=> setinputType('text')}/>
            <p className="mt-0 invisible peer-invalid:visible text-pink-600 text-xs font-semibold">
                {props.error}
            </p>
        </div>
    )
}
