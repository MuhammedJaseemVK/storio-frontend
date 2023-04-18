import Link from 'next/link';
import { BiQrScan } from 'react-icons/bi';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRecommend } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from 'next/router';


const Navbar = ({ activeTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t-2 border-gray-300 flex justify-between px-4 py-2">
      <Link href='/customerhome'>
        <div className={`flex flex-col items-center cursor-pointer ${activeTab === 0 ? 'text-blue-500' : 'text-gray-500'}`}>
          <AiOutlineHome size={24} />
          <span className="text-xs">Home</span>
        </div>
      </Link>
      <Link href='/virtual-cart'>
        <div className={`flex flex-col items-center cursor-pointer ${activeTab === 1? 'text-blue-500' : 'text-gray-500'}`}>
          <AiOutlineShoppingCart size={24} />
          <span className="text-xs ">Virtual cart</span>
        </div>
      </Link>
      <Link href='/page1'>
        <div className={`flex flex-col items-center cursor-pointer ${activeTab === 2 ? 'text-blue-500' : 'text-gray-500'}`}>
          <MdOutlineRecommend size={24} />
          <span className="text-xs">My list</span>
        </div>
      </Link>
      
      <Link href='/profile'>
        <div className={`flex flex-col items-center cursor-pointer ${activeTab === 3 ? 'text-blue-500' : 'text-gray-500'}`}>
          <CgProfile size={24} />
          <span className="text-xs">Profile</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
