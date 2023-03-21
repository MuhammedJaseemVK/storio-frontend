import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Heading from '@/components/inputs/Heading';

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
            console.log(data)
            setproducts(data)
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
        <div className='w-screen h-screen bg-black text-white p-5'>
            <p>Connected: {'' + isConnected}</p>
            <Heading text1="My" text2="Cart" />
            <div className='pt-10 gap-3'>
            {
                products?.map(p=>{
                    return (
                        <div className='rounded-md bg-gray-800 '>
                            <div className='flex'>
                                <div  className='w-20 h-20'>
                                    <img src={p.imageUrl} />
                                </div>
                                <div className='p-3'>
                                    <div className=''>
                                        {p.name}
                                    </div>
                                    <div className='font-bold text-xl'>
                                        {p.mrp}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default App;