import React from 'react'

function Popup({visible,onClose,onSubmit}) {
  const handleOnClose = (e) => {
    if (e.target.id ==="container") onClose();
  };

    if (!visible) return null;
  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm text-black flex justify-center items-center'>
        <div className='bg-white p-2 rounded'>
            <p>Confirm edit?</p>
            <div className='flex flex-row gap-5'>
                  <button onClick={onSubmit} className='bg-[rgb(255,153,0)] rounded p-3'>Yes</button>
                  <button onClick={onClose} className='bg-black rounded p-3 text-white'>No</button>
            </div>
        </div>
    </div>
  )
}

export default Popup