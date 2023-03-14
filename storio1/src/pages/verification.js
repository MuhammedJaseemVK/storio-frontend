import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import MdKeyboardBackspace from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Input from '@/components/inputs/Input';
import Button from '@/components/inputs/Button';
import Link from 'next/link'
import { auth, createUserWithEmailAndPassword, signInWithPhoneNumber, getAuth, RecaptchaVerifier } from '../config/firebase-config';

export default function verification() {
  const router = useRouter();
  const [phone, setPhone] = useState("")
  const [showotp, setShowotp] = useState(false)
  const [otp, setotp] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.recaptchaVerifier = new RecaptchaVerifier('signupButton', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      }, auth);
    }
  }, [])

  const signUpWithPhone = ({ phone }) => {
    if (typeof window === "undefined") { return }
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult)
        setShowotp(true)
        // ...
      }).catch((error) => {
        alert("Error sending otp")
        console.log(error)
      });

  };
  const confirmOtp = (otp) => {
    window.confirmationResult.confirm(otp).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user);
      router.push('/detailEntry')
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      alert("Bad verification code!!")
    });
  }

  function submitHandler(e) {
    console.log("test")
    e.preventDefault();
    if (phone.length != 10) {
      alert("Phone number is is incorrect")
    } else {
      if (showotp) {
        confirmOtp(otp)
        return;
      }
      signUpWithPhone({ phone: `+91${phone}` })
    }
  }
  return (
    <div className='bg-black h-screen p-5'>
      <Link href='/signup'><MdArrowBack className='text-white text-3xl' /></Link>
      <div className='text-white text-3xl mt-4 px-3'>Enter your <span className='text-[#ff9900]'>Phone</span></div>
      <p className='text-white text-sm text-left mt-7 px-3'>You will receive 4 digit code for phone number verification.</p>
      <form onSubmit={submitHandler} className='flex flex-col gap-3 px-3 py-7 ' >


        <select className='rounded-lg px-3 py-2' placeholder='Phone Number' name="country" id="country-names">

          <option value="India">India</option>

        </select>

        <div className='flex gap-3 '>
          <div className='bg-white w-1/4 rounded-md text-sm flex justify-center items-center'>
            <p>+91</p>
          </div>
          <div className='w-3/4 overflow-hidden'>
            <Input
              placeholder="Phone Number"
              type="number" required={true} value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>
        {
          showotp &&
          <Input placeholder="OTP" type="number" required={true} value={otp} onChange={e => setotp(e.target.value)} />
        }

        {
          showotp ?
          <Button onClick={()=>confirmOtp(otp)} text='Continue'  />:
          <Button text='Send OTP' id="signupButton" />
        }
      </form>

    </div>
  )
}
