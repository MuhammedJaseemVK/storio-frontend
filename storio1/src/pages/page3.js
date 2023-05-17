import React from 'react';
import { useRouter } from 'next/router';
import Subtext from '@/components/inputs/Subtext';

const Page3 = () => {
  const router = useRouter();
  
  

  
  return (
    <div className="h-screen bg-black flex items-center relative">
      <div className="flex flex-col items-center justify-center space-y-4 p-5 mt-10 m-auto">
        <img className="w-300 h-300 px-6" src="/page3.png" alt="Page 1" />
        <div className="text-center">
          <h3 className="text-white text-3xl md:text-4xl font-semibold p-6 mt-4">
            Organize your list
          </h3>
          <Subtext text="In Mylist you can create your personalized lists to stay productive" />
        </div>
        <div className="mb-14 mt-10 flex justify-between w-72 absolute bottom-14 left-1/2 transform -translate-x-1/2">
          <button
            className="bg-black w-30 items-center text-white font-semibold rounded-lg px-3 py-2 mt-4"
            onClick={() => router.push('/page2')}
          >
            Back
          </button>
          <button
            className="bg-violet-500 w-30 items-center text-white font-semibold rounded-lg px-3 py-2 mt-4"
            onClick={() => router.push('/mylist')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;