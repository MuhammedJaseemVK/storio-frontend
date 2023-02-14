import React from 'react'

export default function Heading(props) {
  return (
    <div>
          <h3 className='text-white text-3xl '>{props.text1} <span className='text-[#ff9900]'>{props.text2}</span></h3>
    </div>
  )
}
