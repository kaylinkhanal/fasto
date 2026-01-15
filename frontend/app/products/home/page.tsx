'use client'
import EcomCard from '@/components/ecom-card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
//client side rendering
const ProductHome =  () => {
  const [products, setProducts] = useState([])
  const fetchdata = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products')
    setProducts(data)
  }

  //this will run only once when the component is mounted
   useEffect(()=>{
    fetchdata()
   },[])
  return (
    <div>

      <div className='flex flex-wrap justify-center'>
        {products.map((item,id)=>{
          return (
            <EcomCard key={id} item={item} />
          )
        })}
    </div>
    </div>
    
  )
}

export default ProductHome

