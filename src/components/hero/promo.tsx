import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Promo = () => {
  return (
    <div className="flex flex-col  rounded-md px-[18px] py-[20px] border border-black-50 ">
      <p className="text-2xl font-medium text-gray-500 mb-[21px]">Promo Code</p>
       <Input
          className="text-lg font-light border items-center border-gray-300 rounded-sm mb-[21px]"
          placeholder="**************"
        />
         <div className="flex justify-end items-center">
        <Button className="w-[90px]   bg-orange-500  text-white  rounded-full">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Promo;
