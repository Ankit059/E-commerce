import React, { useState } from "react";
import img from'../image/maleFashion.png'

export const Navbar = () => {
  return (
    <>
      <div className="h-12 border-2 border-gray-200 flex items-center relative">
        <div className="absolute left-0">
          <img className="w-40" src={img} alt="logo" />
        </div>
        <div className="flex absolute right-5 space-x-5 text-sm font-semibold text-gray-400">
          <div className="cursor-pointer hover:text-blue-500">Home</div>
          <div className="cursor-pointer hover:text-blue-500">Shop</div>
          <div className="cursor-pointer hover:text-blue-500">Blog</div>
          <div className="cursor-pointer hover:text-blue-500">Contact</div>
        </div>
      </div>
    </>
  );
};
