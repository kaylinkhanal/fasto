import { useRouter } from 'next/navigation';
import React from 'react';

const EcomCard = (props) => {
    const router = useRouter()
  return (
    <div onClick={()=>router.push('/products/'+props.item.id)} className="bg-white m-4 shadow-lg p-6 rounded-lg w-[20%] border border-gray-200 hover:shadow-xl transition-shadow">
      <img
        src={props.item.image}
        alt={props.item.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800 mb-2">{props.item.title}</h2>
      <div className="text-pink-500 font-semibold text-xl">${props.item.price}</div>
    </div>
  );
};

export default EcomCard;