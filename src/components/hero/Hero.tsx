import { Cart } from "./Cart"






const Hero = () => {
  return (
   <div className="content-wrapper mt-[56px] mb-[75px] ">
      <p className="text-4xl font-semibold text-black">Shopping Cart</p>
      <div className="flex mt-[26px] gap-[10px] ">
      <Cart />
      </div>
    </div>
  )
}

export default Hero