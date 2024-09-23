import React from "react";
import { MoveRight } from "lucide-react";
import img from '../image/model.jfif'

export const Carts = () => {
  return (
    <>
      <div className="fixed h-screen w-screen flex flex-col justify-center items-center">
        <div className=" h-4/6 w-3/6 border-black flex flex-col justify-self-end items-center">
          <div className="h-3/5">
            <table className="text-white ">
              <tr className="bg-orange-600 text-lg">
                <td className="w-96">Products</td>
                <td className="w-96 text-right">Quantity</td>
                <td className="w-96 text-right">Price</td>
              </tr>
              <tr className="text-black font-normal border-black h-28">
                <td className="flex">
                    <img src={img} alt="img" className="h-28 w-24 p-1" />
                    <div className="ml-2">
                        <div className="text-xl mb-2">Red printed T-shirt</div>
                        <div className="text-md mb-2" >Price $50.00</div>
                        <div className="text-red-400 text-xs">Remove</div>
                    </div>
                </td>
                <td className="w-96 flex-row text-right">
                   <div className="">1</div>
                </td>
                <td className="w-96 text-right">$200.00</td>
              </tr>
              <tr className="text-black  border-black h-28">
              <td className="flex">
                    <img src={img} alt="img" className="h-28 w-24 p-1 " />
                    <div className="ml-2">
                        <div className="text-xl mb-2">Red printed T-shirt</div>
                        <div className="text-md mb-2" >Price $50.00</div>
                        <div className="text-red-400 text-xs">Remove</div>
                    </div>
                </td>
                <td className="w-96 text-right">1</td>
                <td className="w-96 text-right">$200.00</td>
              </tr>
              <tr className="text-black  border-black h-28">
              <td className="flex">
                    <img src={img} alt="img" className="h-28 w-24 p-1" />
                    <div className="ml-2">
                        <div className="text-xl mb-2">Red printed T-shirt</div>
                        <div className="text-md mb-2" >Price $50.00</div>
                        <div className="text-red-400 text-xs">Remove</div>
                    </div>
                </td>
                <td className="w-96 text-right">1</td>
                <td className="w-96 text-right">$200.00</td>
              </tr>
              
            </table>
          </div>

          <div className=" h-2/5  border-black w-full relative">
          <div className="border-2 border-orange-600 w-96 absolute right-0"></div>
            <div className=" font-semibold">
              <table className="absolute right-0 top-0 text-right text-lg ">
                <tr className="">
                  <td className="p-2 w-40 ">Subtotal</td>
                  <td className="w-72 ">$200.00</td>
                </tr>
                <tr>
                  <td className="p-2">Tax</td>
                  <td className="w-52">$35.00</td>
                </tr>
                <tr>
                  <td className="p-2">Total</td>
                  <td>$235.00</td>
                </tr>
              </table>
              <div className="absolute bottom-16 right-10 font-normal text-white">
                <button className="p-1 bg-orange-600 rounded-2xl w-60 shadow-lg font-sans text-lg flex justify-center items-center">
                  <span>Proceed to checkout</span>{" "}
                  <span>
                    <MoveRight className="ml-2 mt-1" strokeWidth={2} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
