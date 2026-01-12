'use client'
import EcomCard from '@/components/ecom-card'
import { NavigationMenuDemo } from '@/components/nav-menu'
import React, { useEffect, useState } from 'react'

// 1. blank page -----> data fetch ----> show in the blank UI
// 2. fetch data -----> create the html with the data -----> show in the UI

//client side rendering
const ProductHome =  () => {
  const [products, setProducts] = useState([])
  const fetchdata = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
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

