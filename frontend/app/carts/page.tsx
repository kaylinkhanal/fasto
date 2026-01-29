'use client'
import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Carts = () => {
  const [carts, setCarts] = useState([]);

  // Fetch cart data from the API
  const fetchCarts = async () => {
    try {
      const {data} = await axios.get('https://fakestoreapi.com/carts/1');

      setCarts(data.products);
    } catch (error) {
      console.error('Error fetching carts:', error);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carts.map((item)=>{
            return (
                <div className='p-4 shadow-md' key={item.id}>
                 <Button>-</Button>    {item.quantity} <Button>+</Button>
                    </div>
            )
        })}

        <Button>Proceed To Checkout</Button>
    </div>
  );
};

export default Carts;










// REST API                     vs      GRAPHQL



// lots of endpoints                   single endpoint /graphql
// GET POST PUT PATCH DEL ...          POST
// CRUD operations                     queries (GET)  and mutation  (create, update, delete)     
//                                     SOLVES 2 main problem: overfetching and underfetching
//                                     query from frontend specifies exactly what data is needed
