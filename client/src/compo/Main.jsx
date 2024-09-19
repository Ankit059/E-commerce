import React from "react";
import { FavBlock } from "./FavBlock";

export const Main = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <div className="border-2 w-11/12 m-8 shadow-2xl border-gray-100 bg-[url('https://axiswi.com/wp-content/uploads/2020/04/eCommerce-website-development-technologies.gif')] bg-center h-3/5 rounded-2xl "></div>
        <div className=" flex justify-center items-center w-11/12 space-x-12  border-gray-200 h-2/6 rounded-2xl mt-0">
            <FavBlock/>
            <FavBlock/>
            <FavBlock/>
            <FavBlock/>
        </div>
      </div>
    </>
  );
};
