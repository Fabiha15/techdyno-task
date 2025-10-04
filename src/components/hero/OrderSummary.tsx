import { paymentMethod } from "@/lib/data";
import Image from "next/image";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import Order from "./Order";


export const OrderSummary = () => {
  return (
    <div className="grid gap-[9px] w-[565px]">
      {/* payment method */}
      <div className="flex flex-col  rounded-md px-[18px] py-[40.69px] border border-black-50 ">
        <p className="text-2xl font-medium text-gray-500">Payment Method</p>
        <div className="grid gap-[40.69px] mt-[49.73px]">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="w-[22px] h-[22px] "
                value="option-one"
                id="option-one"
              />
              <p className="text-lg font-medium text-gray-500">
                Online Payment*
              </p>
            </div>

            <div className="flex items-center ">
              <p className="text-sm font-normal text-gray-400/70">
                We Accept :
              </p>
              <div className="flex gap-[6px] ml-3">
                {paymentMethod.map((item) => (
                  <div
                    key={item.id}
                    className="w-[65px] h-[45px]  flex items-center justify-center rounded-sm border border-gray-100 "
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="w-[22px] h-[22px] "
                value="option-two"
                id="option-two"
              />
              <p className="text-lg font-medium text-gray-500">
                Cash On Delivery*
              </p>
            </div>
          </RadioGroup>

          <div className="flex items-center space-x-2">
            <Checkbox />
            <span className="text-xs font-normal text-white-900">
              I have read & agree to the{" "}
            </span>
            <span className="text-xs font-normal text-orange-500">
              Terms & Conditions, Privacy policy, and Return Policy
            </span>
          </div>
        </div>
      </div>

      {/* Promo Code */}
      <div className="flex flex-col  rounded-md px-[18px] py-[20px] border border-black-50 ">
        <p className="text-2xl font-medium text-gray-500 mb-[21px]">
          Promo Code
        </p>
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
      {/* Order Summary */}
      <Order />
    </div>
  );
};
