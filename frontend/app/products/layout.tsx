import { NavigationMenuDemo } from '@/components/nav-menu'
import React from 'react'

const ProductLayout = ({children}) => {
  return (
    <div>
        <NavigationMenuDemo/>
        {children}</div>
  )
}

export default ProductLayout