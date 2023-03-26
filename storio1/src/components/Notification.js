import React from 'react'

export default function Notification({error, heading, show}) {
    return (
        <div className='absolute bottom-0 left-0 z-50 w-full px-5 '>
            {
                show &&
                <div className='bg-white rounded-t-2xl px-5 pt-5 pb-10 animate-emerge flex flex-col gap-5 items-center z-30 absolute bottom-0 right-5 left-5'>
                    {error?<div className='flex flex-col items-center'>
                        <div className=' rounded-full w-12 h-12 bg-red-400 grid items-center justify-center'>
                            X
                        </div>
                        <div className='text-red-600'>
                            {heading}
                        </div>
                    </div>:
                    <div className='flex flex-col items-center'>
                        <div className=' rounded-full w-12 h-12 bg-green-400 grid items-center justify-center'>
                            ✓
                        </div>
                        <div className='text-green-700'>
                            {heading}
                        </div>
                    </div>}
                </div>
            }
        </div>
    )
}
