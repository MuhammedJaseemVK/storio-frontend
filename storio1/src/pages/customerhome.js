import React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const customerhome = () => {
  return (
    <div className='h-screen bg-black p-3'>

      {/* NavBar */}

      {/* Profile pic */}
      <div className='flex w-full gap-2 justify-center mt-10'>
        <div className=' overflow-hidden flex gap-2 flex-col items-center'>
          <img src='/profile.jpg' className='rounded-full w-[100px] h-[100px] object-cover block' />
          <p className='text-white'>Hello JAseem</p>
        </div>
      </div>
                <AwesomeSlider>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </AwesomeSlider>
    </div>
  )
}

export default customerhome