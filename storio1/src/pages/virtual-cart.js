import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { MdArrowBack } from "react-icons/md";
import Heading from '@/components/inputs/Heading';
import Button from '@/components/inputs/Button';
import Link from 'next/link'
import Navbar from '@/components/inputs/navbar';


const socket = io("https://storio.virtualdom.tech", {
    reconnectionDelay: 1000,
    reconnection: true,
    reconnectionAttemps: 10,
    transports: ['websocket'],
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
});

function App() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);
    const [products, setproducts] = useState([])
    const [lastAddedProduct, setlastAddedProduct] = useState({})
    const [lastRemoved, setlastRemoved] = useState({})
    const [total, settotal] = useState(0)
    const [animate, setanimate] = useState(true)

    // global variable
    let productsArray = []

    function StarRating(props) {
        const stars = [];

        // Loop through the number of stars and push a star element into the stars array
        for (let i = 0; i < props.rating; i++) {
            stars.push(<span key={i}>★</span>);
        }

        return (
            <div className="star-rating">
                {stars}
            </div>
        );
    }

    useEffect(() => {
        let t = 0
        products.forEach(pro => {
            t += pro.price
        });
        settotal(t)
        setanimate(true)
        setTimeout(() => {
            setanimate(false)
        }, 2000);
    }, [products])


    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('pong', () => {
            setLastPong(new Date().toISOString());
        });
        socket.on('change', (data) => {
            const removed = productsArray.filter((prevObj) => !data.some((obj) => JSON.stringify(obj) === JSON.stringify(prevObj)));
            const added = data.filter((prevObj) => !productsArray.some((obj) => JSON.stringify(obj) === JSON.stringify(prevObj)));
            const prevProductsArrayLen = productsArray.length
            console.log(prevProductsArrayLen)
            setproducts(data)
            productsArray = data
            if (removed[0] && data.length !== 1 && prevProductsArrayLen !== 0) {
                console.log(removed[0].name + " removed")
                setlastRemoved(removed[0])
                setTimeout(() => {
                    setlastRemoved({})
                }, 3500)
            }
            if (added[0]) {
                setlastAddedProduct(added[0])
                setTimeout(() => {
                    setlastAddedProduct({})
                }, 3000)
            }
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };
    }, []);

    const sendPing = () => {
        try {
            socket.emit('valuefromsocket', { ids: ['sdfs*1000'] });
        } catch (error) {
            console.error("Error sending message to server:", error);
        }
    }

    return (
        <div>
      {/* Content of VirtualCart page */}
      <div className='w-screen h-screen bg-black text-white p-5 relative'>
            <Link href="/customerhome"><MdArrowBack className='text-white text-3xl' /></Link>
            {/* <p>Connected: {'' + isConnected}</p> */}
            <Heading text1="My" text2="Cart" />
            <div className='pt-10 flex flex-col gap-3'>
                {
                    products?.map(p => {
                        return (
                            <div className='rounded-md bg-gray-100 text-gray-800'>
                                <div className='flex'>
                                    <div className='w-20 h-20'>
                                        <img src={p.image} />
                                    </div>
                                    <div className='p-3'>
                                        <div className=''>
                                            {p.name}
                                        </div>
                                        <div className=''>
                                            {p.brand}
                                        </div>
                                        <div className=''>
                                            {p.description}
                                        </div>
                                        <div className='font-bold text-xl'>
                                            {p.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='bg-transparent absolute right-5 left-5 bottom-16 rounded-t-2xl pb-12'>
                <div className={`${animate ? 'scale-in-out' : ''} rounded-full px-3 py-2 bg-white  duration-300 peer mb-5 w-full flex justify-between items-center`}>
                    <h3
                        className='text-gray-700 text-xl md:text-4xl md:px-8 font-bold '>Total </h3>
                    <h3 className='text-gray-800 text-2xl font-bold'>Rs.{total}</h3>
                </div>
            </div>
            <div className='absolute bottom-0 left-0 z-50 w-full px-5 '>
                {
                    lastRemoved?.name &&
                    <div className='bg-white rounded-t-2xl px-5 pt-5 pb-10 animate-emerge flex flex-col gap-5 items-center z-30 absolute bottom-0 right-5 left-5'>
                        <div className='flex flex-col items-center'>
                            <div className=' rounded-full w-12 h-12 bg-red-400 grid items-center justify-center'>
                                X
                            </div>
                            <div className='text-red-600'>
                                Removed
                            </div>
                        </div>
                        <div className='text-gray-700 text-center'>
                            <span className='font-bold '>
                                {lastRemoved.name}
                            </span>
                            <span> removed from cart</span>
                        </div>
                        <div className='text-gray-700 text-center'>
                            <span className='text-gray-500'>
                                {lastRemoved.description}
                            </span>
                            <div>
                                {
                                    <StarRating rating={lastRemoved.rating} />
                                }
                            </div>
                        </div>
                        <div className='flex text-gray-800 gap-5 items-center'>
                            <div>{lastRemoved.brand}</div>
                            <div>
                                <span className='font-bold text-2xl'>{lastRemoved.price}</span>
                                <span className='text-sm text-gray-500'>/-</span>
                            </div>
                        </div>
                    </div>
                }
                {
                    lastAddedProduct?.name &&
                    <div className='bg-white rounded-t-2xl px-5 pt-5 pb-10 animate-emerge flex flex-col gap-5 items-center z-40 absolute bottom-0 right-5 left-5'>
                        <div className='flex flex-col items-center'>
                            <div className=' rounded-full w-12 h-12 bg-green-400 grid items-center justify-center'>
                                ✓
                            </div>
                            <div className='text-green-700'>
                                Added to cart
                            </div>
                        </div>
                        <div className='text-gray-700 text-center'>
                            <span className='font-bold '>
                                {lastAddedProduct.name}
                            </span>
                            <span> added to cart</span>
                        </div>

                        <div className='text-gray-700 text-center'>
                            <span className='text-gray-500'>
                                {lastAddedProduct.description}
                            </span>
                            <div>
                                {
                                    <StarRating rating={lastAddedProduct.rating} />
                                }
                            </div>
                        </div>
                        <div className='flex text-gray-800 gap-5 items-center'>
                            <div>{lastAddedProduct.brand}</div>
                            <div className='flex items-center'>
                                <span className='font-bold text-2xl'>{lastAddedProduct.price}</span>
                                <span className='text-sm text-gray-500'>/-</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
      <Navbar activeTab={1} />
    </div>
        
    );
}

export default App;