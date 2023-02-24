import React from 'react'

export default function Heading(props) {
  return (
    <div>
          <h3 className='text-white text-3xl md:text-4xl md:px-8 font-semibold px-3 mt-4'>{props.text1} <span className='text-[#ff9900]'>{props.text2}</span></h3>
    
    </div>
  )
}
