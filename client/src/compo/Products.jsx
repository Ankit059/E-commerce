import React from 'react';
import img from '../image/shoe.jpg'

export const Products = () => {
  return (
    <>
        <div className="border-black shadow-lg rounded-xl  ">
            <div className=""><img src={img} alt="img" /></div>
            <div className="">Ps England shoes</div>
            <div className="">$37.99</div>
            <button className='bg-buttonColor text-white rounded-xl w-24 h-7 text-sm'>BUY NOW</button>
        </div>
    </>
  )
}
