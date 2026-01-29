'use client'
import EcomCard from '@/components/ecom-card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
//client side rendering
const ProductHome =  () => {
  const z = useSelector(state=>state)

  const [products, setProducts] = useState([])
  const fetchdata = async () => {
    const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL+'/products')
    setProducts(data)
  }

  //this will run only once when the component is mounted
   useEffect(()=>{
    fetchdata()
   },[])
  return (
    <div>
      {JSON.stringify(z)}

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

