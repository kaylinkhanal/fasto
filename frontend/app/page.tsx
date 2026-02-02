// import React from 'react'
// import ProductHome from './products/home/page'

// const Home = () => {
//   return (
//     <div>
//       <ProductHome/>
//     </div>
//   )
// }

// export default Home

'use client'
import EcomCard from '@/components/ecom-card'
import Counter from '@/components/Counter'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
//client side rendering
const Home = () => {

  const {username} = useSelector(state=>state.user)
  const inputRef = useRef<HTMLInputElement>(null);
  const [products, setProducts] = useState([])
  const fetchdata = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    const { data: llmOutput } = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent', {
      contents: [
        {
          parts: [
            {
              text: `Below is the list of datasets that i got from api, the user has asked: "Give me all the products with rating greater than 4". The datasets: ${JSON.stringify(data)}`
            }
          ]
        }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setProducts(data)
  }

  //this will run only once when the component is mounted
  useEffect(() => {
    fetchdata()

  }, [])

  const handleClear = () => {
    if (inputRef.current) {
      debugger
      inputRef.current.value = ''
    }
  }
  return (
    <div>
      <Input ref={inputRef} placeholder="Search or buy anything..." />
      <Input placeholder="Search or buy anything..." />

      <Button onClick={handleClear}>Clear all</Button>
{username}
      <div className="mt-8">
        <Counter />
      </div>
    </div>
  )
}

export default Home














// fundamentals: state refs and props
// hooks: useState, useRef, useEffect