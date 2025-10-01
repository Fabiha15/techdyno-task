import { Cart } from "./Cart";
import CustomerInfo from "./CustomerInfo";

const Hero = () => {
  return (
    <div className="content-wrapper mt-[56px] mb-[75px] ">
      <p className="text-4xl font-semibold text-black">Shopping Cart</p>
      <div className="flex mt-[26px] gap-[10px] ">
        <Cart />
        <div className="flex flex-col w-[588px]  ">
          <CustomerInfo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
