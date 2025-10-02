import { Cart } from "./Cart";
import CustomerInfo from "./CustomerInfo";
import { OrderSummary } from "./OrderSummary";

import Shipping from "./shipping";

const Hero = () => {
  return (
    <div className="content-wrapper mt-[56px] mb-[75px] ">
      <p className="text-4xl font-semibold text-black">Shopping Cart</p>
      <div className="flex mt-[26px] gap-[10px] ">
        {/* first column */}
        <Cart />
        {/* second column */}
        <div className="flex flex-col w-[588px] gap-[9px] ">
          <CustomerInfo />
          <Shipping />
        </div>
        {/* third column */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default Hero;
