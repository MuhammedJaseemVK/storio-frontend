import React from 'react'

export default function NotificationDesktop({error, heading, show}) {
    return (
        <div className='fixed bottom-0 left-0 right-0 flex justify-center z-50'>
            {
                show &&
                <div className='bg-white rounded-t-2xl px-4 py-5 animate-emerge flex flex-col gap-5 items-center w-72'>
                    {error?<div className='flex flex-col items-center'>
                        <div className='rounded-full w-12 h-12 bg-red-400 grid items-center justify-center'>
                            X
                        </div>
                        <div className='text-red-600 text-center mt-4'>
                            {heading}
                        </div>
                    </div>:
                    <div className='flex flex-col items-center'>
                        <div className='rounded-full w-12 h-12 bg-green-400 grid items-center justify-center'>
                            ✓
                        </div>
                        <div className='text-green-700 text-center mt-4'>
                            {heading}
                        </div>
                    </div>}
                </div>
            }
        </div>
    )
}
