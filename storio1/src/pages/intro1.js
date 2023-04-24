import React, {useEffect} from 'react';
import { useRouter } from 'next/router';

const Intro1 = () => {
  const router = useRouter();
  
  useEffect(() => {
    if (!localStorage.getItem("introwatched")) {
      localStorage.setItem("introwatched", true);
    }
  }, [])

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 p-5">
        <img className="w-300 h-300 px-6" src="/intro1.png" alt="Page 1" />
        <div className="text-center">
          <h3 className="text-white text-3xl md:text-4xl font-semibold p-6 mt-4">
            Discover new ways of Shopping
          </h3>
          
        </div>
        <div className="mt-auto">
          <button onClick={() => router.push('/intro2')} className="bg-[#ff9900] flex justify-center w-72 items-center text-white font-semibold rounded-lg px-3 py-2 mt-7">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro1;