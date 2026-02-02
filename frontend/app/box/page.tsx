'use client'
import { incrementHeight } from '@/lib/features/box/boxSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const {height, width} = useSelector(state=> state.box)

    const dispatch = useDispatch()
  return (
    <div>
  <div style={{height, width, background: 'red'}}>

  </div>
    <button onClick={()=> dispatch(incrementHeight())}>Increment height</button>
    </div>
  )
}

export default Box