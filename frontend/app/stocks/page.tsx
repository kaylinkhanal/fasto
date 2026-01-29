'use client'
import { useSocket } from '@/hooks/use-socket'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Stocks = () => {
    const [stocksData, setStocksData] = useState([])
    const { stocks, marketStats, isConnected } = useSocket('http://localhost:3001');
    const fetchStocksData = async()=> {
      const {data} =  await axios.get('http://localhost:3001/api/stocks')
        setStocksData(data.data)
    }
    useEffect(()=>{
        fetchStocksData()
    },[])
  return (
    <div>

           {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
        {
          marketStats?.top_gainers?.length > 0 &&  marketStats?.top_gainers.map((item:any, id:number)=>{
                return (
                    <div key={id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                        <h3>{item.symbol} - {item.companyName}</h3>
                        <p>Price: Rs.{item.last_price}</p>
                        <p>Change: {item.change} ({item.changePercent}%)</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Stocks