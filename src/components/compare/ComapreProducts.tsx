import { features } from "@/lib/data";
import React from "react";

const ComapreProducts = () => {
  return (
     <div className="w-[1308px] flex flex-col border border-white-700 rounded-md">
      {/* Left column */}
      <div className="w-[436px] bg-white-400 pt-[34px] border-r border-white-700">
        <div className="flex flex-col px-[21px] mb-[348px]">
          <p className="text-2xl font-semibold text-orange-500">
            Compare Products
          </p>
          <p className="text-lg font-normal text-orange-400 mt-3">
            Find and select products to see the differences and similarities
            between them
          </p>
        </div>

        {/* Feature list */}
        <ul className="text-[22px] font-normal text-gray-500">
          {features.map((feature, index) => (
            <li
              key={feature}
              className={`flex items-center px-[21px] py-[26px] ${
                index === 0
                  ? "border-y border-white-700"
                  : index === features.length - 1
                  ? ""
                  : "border-b border-white-700"
              }`}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
 
  );
};

export default ComapreProducts;
