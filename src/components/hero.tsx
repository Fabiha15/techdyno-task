import React from "react";
import { Button } from "./ui/button";
import { cartData } from "@/lib/data";
import Product from "@/lib/type";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="content-wrapper mt-[56px] mb-[75px] border2">
      <p className="text-4xl font-semibold text-black">Shopping Cart</p>
      <div className="flex mt-[26px] gap-[10px]">
        <div className="flex flex-col w-[533px] px-[16px] py-[25px] border border-black-50 rounded-md">
          <div className="flex items-center justify-between ">
            <p className="text-2xl font-medium text-black">In Your Cart</p>
            <Button className="w-[121px] px-4 py-[10px]  bg-gray-50">
              <div className="flex items-center gap-[10px]">
                <p className="text-sm font-normal text-white-900">Add Cart</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M8.82243 4.19742V13.5308M4.15576 8.86409H13.4891"
                    stroke="#6B6B6B"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Button>
          </div>
          <div className="grid mt-[26px] gap-[13.56px]">
            {cartData &&
              cartData.map((item: Product) => {
                return (
                  <div key={item.id} className="flex items-center gap-[15px]">
                    <div className="w-[124px] h-[124px] p-[7px] bg-black-50 rounded-md">
                      <div className="h-[110px] w-[110px] relative">
                        <Image
                         
                          src={item.image}
                          alt="product"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
