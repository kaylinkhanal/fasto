'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'

const Id = () => {
  const params = useParams()
  const [imageId, setImageId] = useState(0)
  const [productDetail, setProductDetail] = useState(null)

  const fetchProductDetail = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    setProductDetail(data)
  }

  useEffect(() => {
    fetchProductDetail()
  }, [])

  if (!productDetail) {
    return <div className="text-center text-gray-500">Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Images */}
        <div className="flex-1">
          <img
            src={productDetail.image}
            alt={productDetail.title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
         
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{productDetail.title}</h1>
          <p className="text-xl text-pink-500 font-semibold mb-4">${productDetail.price}</p>
          <p className="text-gray-700 mb-6">{productDetail.description}</p>
          <div className="text-sm text-gray-500">
            <span className="font-semibold">Category:</span> {productDetail.category.name}
          </div>
        <button className='bg-red-400 p-4' >Add to Cart</button>

        </div>
      </div>
    </div>
  )
}

export default Id