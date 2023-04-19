import React from 'react';
import { useRouter } from 'next/router';

const Page1 = () => {
  const router = useRouter();
  const isLoggedIn = false;

  if (isLoggedIn) {
    router.push('/page3');
    return null;
  }

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 p-5">
        <img className="w-300 h-300 px-6" src="/page1.png" alt="Page 1" />
        <div className="text-center">
          <h3 className="text-white text-3xl md:text-4xl font-semibold p-6 mt-4">
            Get things done with
          </h3>
          <h3 className="text-[#ff9900] text-3xl md:text-4xl font-semibold mt-4 px-8">
            My List
          </h3>
        </div>
        <div className="mt-auto">
          <button onClick={() => router.push('/page2')} className="bg-violet-500 flex justify-center w-72 items-center text-white font-semibold rounded-lg px-3 py-2 mt-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;