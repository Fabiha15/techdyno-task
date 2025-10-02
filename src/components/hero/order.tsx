import { Button } from "../ui/button";

const Order = () => {
  return (
    <div className="grid gap-[9px]">
      <div className="flex flex-col  rounded-md px-[18px] py-[30px] border border-black-50 ">
        <p className="text-2xl font-medium text-gray-500 mb-[38px] ">
          In Your Order Summary
        </p>
        <div className="grid gap-[6px] ">
          <div className="flex items-center justify-between py-[20px] px-[11px] ">
            <p className="text-lg font-medium text-gray-400">Sub Total : </p>
            <p className="text-[27px] font-normal text-black">৳ 1000</p>
          </div>
          <div className="flex items-center justify-between py-[20px] px-[11px] ">
            <p className="text-lg font-medium text-gray-400">
              Delivery Charge :{" "}
            </p>
            <p className="text-[27px] font-normal text-black">৳ 80</p>
          </div>
          <div className="flex items-center justify-between py-[20px] px-[11px] ">
            <p className="text-lg font-medium text-gray-400">Discount : </p>
            <p className="text-[27px] font-normal text-black">৳ 10</p>
          </div>
          <div className="flex items-center justify-between bg-white-400 py-[20px] px-[11px] ">
             <p className="text-[20px] font-semibold text-orange-500">Total Amount : </p>
            <p className="text-[27px] font-normal text-black">৳ 890</p>
          </div>
        </div>
      </div>
      <Button className="h-[58px] rounded-full bg-orange-500 text-lg font-semibold text-white">
        {" "}
        Confirm Order
      </Button>
      <div className="flex items-center gap-[11px] mt-[20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
        >
          <path
            d="M6.78135 10.8921C6.97348 10.8921 7.13465 10.827 7.26485 10.6968C7.39504 10.5666 7.45992 10.4057 7.45946 10.214C7.45946 10.0219 7.39437 9.86094 7.26417 9.7312C7.13397 9.60145 6.97303 9.53635 6.78135 9.5359C6.58922 9.5359 6.42828 9.601 6.29854 9.7312C6.16879 9.86139 6.10369 10.0223 6.10324 10.214C6.10324 10.4061 6.16834 10.5673 6.29854 10.6975C6.42874 10.8277 6.58967 10.8926 6.78135 10.8921ZM6.10324 8.17968H7.45946V4.11101H6.10324V8.17968ZM6.78135 14.2827C5.8433 14.2827 4.96176 14.1046 4.13672 13.7483C3.31169 13.3921 2.59402 12.9091 1.98372 12.2992C1.37342 11.6889 0.890378 10.9712 0.534596 10.1462C0.178813 9.32117 0.000696215 8.43962 0.000244141 7.50157C0.000244141 6.56352 0.178361 5.68197 0.534596 4.85694C0.89083 4.0319 1.37387 3.31423 1.98372 2.70393C2.59402 2.09363 3.31169 1.61059 4.13672 1.25481C4.96176 0.899028 5.8433 0.720911 6.78135 0.720459C7.71941 0.720459 8.60095 0.898576 9.42599 1.25481C10.251 1.61104 10.9687 2.09409 11.579 2.70393C12.1893 3.31423 12.6726 4.0319 13.0288 4.85694C13.385 5.68197 13.5629 6.56352 13.5625 7.50157C13.5625 8.43962 13.3843 9.32117 13.0281 10.1462C12.6719 10.9712 12.1888 11.6889 11.579 12.2992C10.9687 12.9095 10.251 13.3928 9.42599 13.749C8.60095 14.1052 7.71941 14.2831 6.78135 14.2827ZM6.78135 12.9265C8.2958 12.9265 9.57856 12.4009 10.6296 11.3498C11.6807 10.2988 12.2062 9.01602 12.2062 7.50157C12.2062 5.98712 11.6807 4.70436 10.6296 3.65329C9.57856 2.60222 8.2958 2.07668 6.78135 2.07668C5.26691 2.07668 3.98415 2.60222 2.93307 3.65329C1.882 4.70436 1.35647 5.98712 1.35647 7.50157C1.35647 9.01602 1.882 10.2988 2.93307 11.3498C3.98415 12.4009 5.26691 12.9265 6.78135 12.9265Z"
            fill="#E01F26"
          />
        </svg>
        <p className="text-[13px] font-light text-red-300 font-Montserrat">
          Please select agree to the Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default Order;
