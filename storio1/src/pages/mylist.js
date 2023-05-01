import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import { BsCheckCircle, BsCheckCircleFill, BsTrash } from 'react-icons/bs';
import ProductRecommendation from '@/components/ProductRecommendation';

export default function ShoppingList() {
  const [item, setitem] = useState('');
  const [items, setitems] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);

  useEffect(() => {
    localStorage.setItem("introseen", true)
    if (localStorage.getItem("localItems")) {
      const storedList = JSON.parse(localStorage.getItem("localItems"));
      setitems(storedList);
    }
  }, [])

  const addItem = (e) => {
    if (item) {
      const newitem = { id: new Date().getTime().toString(), title: item, purchased: false };
      setitems([...items, newitem]);
      localStorage.setItem('localItems', JSON.stringify([...items, newitem]))
    }
  };

  const handleDelete = (item) => {
    const deleted = items.filter((i) => i.id !== item.id);
    setitems(deleted);
    localStorage.setItem('localItems', JSON.stringify(deleted));
  };

  const handleCheck = (item) => {
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, purchased: !i.purchased };
      } else {
        return i;
      }
    });
    setitems(updatedItems);
    localStorage.setItem("localItems", JSON.stringify(updatedItems));
  };

  return (
    <div>
        <ProductRecommendation/>
      {showRecommendation && <ProductRecommendation/>}

      <div className='h-screen bg-black text-white  p-5 flex flex-col '>
        
        <div className='flex flex-col gap-2 p-3'>
          <Link href="/customerhome"><MdArrowBack className='text-white text-3xl' /></Link>
          <h3 className='text-white text-3xl font-semibold '>Shopping <span className='text-[#ff9900]'>list</span></h3>
          <div className='flex flex-row p-2'>
            <input type='text' className='text-black p-3 w-full rounded-l-md ' placeholder='Add item' value={item} onChange={(e) => setitem(e.target.value)} />
            <button type='submit' className='bg-[#ff9900]  rounded-r-md p-2' onClick={addItem}>Add</button>
          </div>
        </div>
        
        {/* Tasks section */}
        <div className='text-lg flex flex-col mt-5 px-4'>
          You have
          {
            !items.length? " no items"
            : items.length === 1 ?  ` ${items.filter((i) => !i.purchased).length} item to buy`
            : items.length > 1 ? ` ${items.filter((i)=>!i.purchased).length}/${items.length} items to buy`
            : null
          }

          <div>
            {items.map((item) =>
              <React.Fragment key={item.id} >
                <div className='flex flex-row gap-2 w-full justify-between my-2 bg-white text-black rounded-md p-2'>
                  <button onClick={() => handleCheck(item)} >
                    {item.purchased ?
                      <BsCheckCircleFill className='text-[#ff9900]' />
                      : <BsCheckCircle className='text-[#ff9900]' />
                    }
                  </button>
                  <p className={item.purchased ? "line-through" : ""} >{item.title}</p>
                  <button onClick={() => handleDelete(item)}><BsTrash className='text-[#ff9900]' /></button>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
        
        {/* Button section */}
        <div className='flex justify-center'>
          <button  className='bg-[#ff9900] flex  justify-center absolute bottom-14 items-center p-4 text-white text-bold rounded-lg px-3 py-2' onClick={() => setShowRecommendation(true)}>See recommendations</button>
        </div>
        
      </div>
    </div>
  )
}