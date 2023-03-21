import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

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
            // setLastPong(data);
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
            <p>Connected: {'' + isConnected}</p>
            <p>Last pong: {lastPong || '-'}</p>
            <button onClick={sendPing}>Send ping</button>
        </div>
    );
}

export default App;