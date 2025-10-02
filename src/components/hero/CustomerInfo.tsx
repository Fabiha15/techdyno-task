import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CustomerInfo = () => {
  return (
    
    <div className="flex flex-col gap-[26.86px] rounded-md pt-9 pb-[18px] px-[18px] border border-black-50 ">
      <p className="text-2xl font-medium text-black">Customer Information</p>
      <div>
        <p className="text-base font-medium text-gray-400 mb-[11.3px]">
          Your Name*
        </p>
        <Input
          className="text-sm font-normal border border-gray-300 rounded-sm"
          placeholder="aman***"
        />
      </div>
      <div>
        <p className="text-base font-medium text-gray-400 mb-[11.3px]">
          Mobile*
        </p>
        <Input
          className="text-sm font-normal border border-gray-300 rounded-sm"
          placeholder="019*******"
        />
      </div>
      <div>
        <p className="text-base font-medium text-gray-400 mb-[11.3px]">
          E-mail ( Optional )*
        </p>
        <Input
          className="text-sm font-normal border border-gray-300 rounded-sm"
          placeholder="@email.****"
        />
      </div>
      <div>
        <p className="text-base font-medium text-gray-400 mb-[11.3px]">
          Address*
        </p>
        <Input
          className="text-sm font-normal border border-gray-300 rounded-sm"
          placeholder="Suggested location"
        />
      </div>
      <div className="flex justify-end items-center">
        <Button className="w-[90px]   bg-orange-500  text-white  rounded-full">
          Save
        </Button>
      </div>
    </div>
  );
};

export default CustomerInfo;
