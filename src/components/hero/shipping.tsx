import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const Shipping = () => {
  return (
    <div className="flex flex-col rounded-md px-[18px] py-[40.69px] border border-black-50 ">
      <p className="text-2xl font-medium text-black">Shipping Method</p>
      <RadioGroup className="gap-[45px] mt-12" defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem className="w-[22px] h-[22px] " value="option-one" id="option-one" />
          <p className="text-lg font-medium text-black">
            Inside Dhaka - 2/4 Days ৳ 70
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem className="w-[22px] h-[22px]" value="option-two" id="option-two" />
          <p className="text-lg font-medium text-black">
            Outside Dhaka - 4/6 Days {"{ Advanced First }"} ৳ 140
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem className="w-[22px] h-[22px]" value="option-three" id="option-three" />
          <p className="text-lg font-medium text-shadow-black-50">
            Free Shipping {"{Upto ৳ 2000 }"}
          </p>
        </div>
      </RadioGroup>
    </div>
  );
};

export default Shipping;
