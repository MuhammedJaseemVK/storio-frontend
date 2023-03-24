import React from 'react'

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

    </div>
  )
}

export default customerhome