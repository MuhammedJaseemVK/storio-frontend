import React, { useState, useEffect } from 'react';
import { BiQrScan } from 'react-icons/bi';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Link from 'next/link';
import QRCode from 'qrcode.react';
import Modal from 'react-modal';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import Navbar from '@/components/inputs/navbar';
import axios from 'axios';

const CustomerHome = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const [qrValue, setQrValue] = useState(null);
  const [showModal, setShowModal] = useState(false); // state to toggle modal
  const [profile, setprofile] = useState({})

  useEffect(() => {
    try {
      const fetchAndSetProfile = async () => {
        let username = localStorage.getItem('username')
        let profile = await fetchProfile(username)
        setprofile(profile.data.user)
        console.log(profile.data.user.profilePic.split('/'))
      }
      fetchAndSetProfile()
    } catch (error) {
      console.log(error)
      alert("Error!")
    }
  }, [])


  const fetchProfile = username => {
    return axios.get(`https://storio.virtualdom.tech/users/profile?username=${username}`)
  };



  const handleImageClick = () => {
    let id = localStorage.getItem('username')
    setQrValue(id);
    setShowModal(true); // show the modal when image is clicked
  }

  const handleCloseModal = () => {
    setShowModal(false); // hide the modal when it's closed
  }

  return (
    <div>
      {/* Content of VirtualCart page */}
      <div className='h-screen bg-black p-3'>
        {/* Profile pic */}
        <div className='flex w-full gap-2 justify-center mt-6'>
          <div className='overflow-hidden flex gap-2 flex-col items-center'>
            <img src={`https://storio.virtualdom.tech/${profile.profilePic?.split('/')[1]}`} className='rounded-full w-[100px] h-[100px] object-cover block' />
            <p className='text-white'>Hello {profile?.name}</p>
          </div>
        </div>

        <div>
          <AwesomeSlider className='px-3 mt-5'>
            <div className='object-cover '><img src='/bb.jpg' /></div>
            <div><img src='/3.jpg' /></div>
            <div><img src='/My project.jpg' /></div>
          </AwesomeSlider>
        </div>

        {/* QR code popup */}
        <Modal
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          contentLabel="QR Code Modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 999,
            },
            content: {
              top: 'auto',
              left: 'auto',
              right: 'auto',
              bottom: 'auto',
              maxWidth: '400px',
              width: '80%',
              padding: '20px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'white',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
            },
          }}
        >
          {/* QR code */}
          <div className="flex justify-center mb-6">
            <QRCode value={qrValue} size={256} />
          </div>

          {/* Close button */}
          <div className="flex justify-center">
            <button
              onClick={handleCloseModal}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </Modal>


        {/* Display image and generate QR code when clicked */}
        <div className="flex justify-center absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-2">
  <div className="flex flex-col items-center">
    <img src="/qr.jpg" alt="My Image" className="max-w-28 h-25 cursor-pointer" onClick={handleImageClick} />
    <h3 className='text-white font-semibold mt-1'>Generate QR Code</h3>
  </div>
</div>

      </div>
      <Navbar activeTab={0} />
    </div>

  );
};

export default CustomerHome;