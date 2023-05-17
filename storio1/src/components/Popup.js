import React from 'react';

function Popup({ heading ,visible, onClose, onSubmit }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm text-black flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-md mx-auto">
        <p className="text-lg font-semibold mb-4">{heading}</p>
        <div className="flex justify-between">
          <button onClick={onClose} className="bg-[#ff9900] text-black  py-2 px-4 rounded-lg mr-2 w-24">Cancel</button>
          <button onClick={onSubmit} className="bg-white text-gray-600 py-2 px-4 rounded-lg ml-2 w-24">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
