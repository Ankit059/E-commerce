import React from 'react';
import shirt from '../image/shirt.jfif';
import shoe from '../image/shoe.jpg';
import glass from '../image/glass.jfif';

export const Trends = () => {
  return (
    <>
      <div className=" h-72 flex justify-center">
        <div className="w-2/4 mt-5 flex justify-center items-center space-x-8 ">
            <img className='border-2 border-gray-50 shadow-xl h-4/5 w-1/4 rounded-lg' src={shirt} alt="img" />
            <img className='border-2 border-gray-50 shadow-xl h-4/5 w-1/4 rounded-lg' src={shoe} alt="img" />
            <img className='border-2 border-gray-50 shadow-xl h-4/5 w-1/4 rounded-lg' src={glass} alt="img" />
        </div>
      </div>
    </>
  )
}
