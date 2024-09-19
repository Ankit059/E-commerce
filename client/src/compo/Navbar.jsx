import React, { useState } from 'react';
import { UserRound, Slack, ShoppingCart, Search, CircleX  } from 'lucide-react';

export const Navbar = () => {

  const [search,setSearch] = useState("");
  const [visible,setVisible] = useState("invisible");

  return (
    <>
      <div className="border-2  border-gray-800 bg-gray-800  h-16 relative px-2  rounded-b-xl">
        <div className="flex items-center mt-3">
        <div className='flex items-center space-x-2'>
          <div className='text-red-500 text-3xl font-serif ml-2'><Slack size={28}/></div>
          <div className='text-white text-3xl font-serif'>E-commerce</div>
        </div>
        <div onMouseLeave={()=>setVisible("invisible")} className=' pr-10 h-16 flex justify-center 
        items-center mt-1 absolute right-20 text-white space-x-8 font-serif text-md'>
          <button className='cursor-pointer flex relative'>
            <input onChange={(e)=>setSearch(e.target.value)} value={search} className='pl-2 pr-7 rounded-l-md h-6 text-black' type="text" placeholder='Search' />
            <CircleX fill='gray' onClick={()=>setSearch("")} color='white' className='absolute right-7  z-20'/>
            <Search size={5} color='black' className='bg-red-400 active:bg-red-500 h-6 w-7 rounded-r-md'/>
          </button>
          <div className='cursor-pointer'>Home</div>
          <div className='cursor-pointer flex'><ShoppingCart size={18} className='mr-1 mt-1'/>Cart</div>
          <div className='cursor-pointer'>Help</div>
          <div className='cursor-pointer'>contact us</div>
        </div>
        <div className='flex absolute right-3 top-2'>
          <div onMouseEnter={()=>setVisible("visible")}  className='border-black bg-gray-400 h-10 w-10 cursor-pointer flex items-center justify-center
           rounded-full '>
            <UserRound size={28}/>
          </div>
        </div>
        </div>
        <div onMouseLeave={()=>setVisible("invisible")} className={`${visible} absolute right-3 top-16 w-28 border-2 border-gray-200 text-white text-xl font-serif bg-gray-800 
        rounded-l-xl rounded-b-xl`}>
          <div className="text-center">Ankit</div>
          <div className="text-center">asd</div>
          <div className="bg-red-400 active:bg-red-500 rounded-b-xl text-center text-black cursor-pointer
           ">
            <button className='underline'>Logout</button>
            </div>
        </div>
      </div>
    </>
  )
}
