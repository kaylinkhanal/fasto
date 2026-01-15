'use client'
import React, { useEffect, useState } from 'react'
import CreateProducts from './create-users'
import ProductsTable from './user-table'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])
    const fetchdata = async () => {
      const {data} = await axios.get('https://fakestoreapi.com/users')
      setProducts(data)
    }


     useEffect(()=>{
      fetchdata()
     },[])
  return (
    <div>
      <CreateProducts fetchdata={fetchdata} />
      <ProductsTable products={products} fetchdata={fetchdata} />
    </div>
  )
}

export default Products