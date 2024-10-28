import React from "react";
import { Products } from "./Products";

export const Shop = () => {
  return (
    <>
      <div className="h-screen">
        <div className="  border-black flex justify-center h-2/6 w-full">
          <div className=" border-black w-3/5">
            <div className="font-bold border-black h-12 flex items-center ">
                Top sales
            </div>
            <div className="flex justify-center space-x-8 border-black w-full">
              <Products />
              <Products />
              <Products />
              <Products />
            </div>
          </div>
        </div>
        <div className="  border-black flex justify-center h-2/6 w-full">
          <div className=" border-black w-3/5">
            <div className="font-bold  border-black h-12 flex items-center ">
            New arrivals
            </div>
            <div className="flex justify-center space-x-8 border-black w-full">
              <Products />
              <Products />
              <Products />
              <Products />
            </div>
          </div>
        </div>
        <div className="  border-black flex justify-center h-2/6 w-full">
          <div className=" border-black w-3/5">
            <div className="font-bold  border-black h-12 flex items-center ">
            Hot sales
            </div>
            <div className="flex justify-center space-x-8 border-black w-full">
              <Products />
              <Products />
              <Products />
              <Products />
            </div>
          </div>
        </div>
       
        
      </div>
    </>
  );
};
