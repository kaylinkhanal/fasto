import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (url) => {
  const [stocks, setStocks] = useState([]);
  const [marketStats, setMarketStats] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize Socket.IO connection
    const socket = io(url, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity
    });

    socketRef.current = socket;

    // Connection event
    socket.on('connect', () => {
      console.log('Socket.IO connected');
      setIsConnected(true);
    });

    // Disconnection event
    socket.on('disconnect', (reason) => {
      console.log('Socket.IO disconnected:', reason);
      setIsConnected(false);
    });

    // Connection error
    socket.on('connect_error', (error) => {
      console.error('Socket.IO connection error:', error);
      setIsConnected(false);
    });

    // Main message handler
    socket.on('message', (message) => {
      try {
        switch (message.type) {
          case 'LATEST_UPDATES':
            setStocks(message.data);
            break;
          case 'MARKET_STATS':
            setMarketStats(message.data);
            break;
          case 'CONNECTION':
            console.log('Connection message:', message.message);
            break;
          default:
            console.log('Unknown message type:', message.type);
        }
      } catch (error) {
        console.error('Error handling message:', error);
      }
    });

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [url]);

  return { stocks, marketStats, isConnected };
};