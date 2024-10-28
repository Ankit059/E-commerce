import React from "react";
import img from "../image/bd_img.jpg";
import glass from "../image/glass.jfif";
import shirt from "../image/shirt.jfif";
import shoe from "../image/shoe.jpg";
import { Trends } from "./Trends";

export const Main = () => {
  return (
    <>
      <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-t from-customColor2 to-customColor1 ">
        <img className="w-full" src={img} alt="img" />
      </div>
      <Trends/>
    </>
  );
};
