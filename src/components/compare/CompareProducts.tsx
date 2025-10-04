import Image from "next/image";
import { Input } from "../ui/input";


const SearchBar = () => (
  <div className="flex  items-center justify-between bg-white-400  h-12 rounded-full ">
    <Input
      placeholder="Search your favorite accessories"
      className="h-full w-2/3   text-xs font-light text-gray-400  "
    />
    <button className="h-9 w-9 mr-3 flex   items-center justify-center rounded-full  bg-orange-500">
      <div className="h-4 w-4 relative  ">
        <Image fill src="/search.svg" alt="search" />
      </div>
    </button>
  </div>
);

const ProductHeaderContent = () => (
  <>
    <div className="h-[296px] w-[ 396px] flex items-center justify-center  bg-white-400 rounded-[6px] mt-2">
      <div className="w-[117px] h-[196px]   relative ">
        <Image src="/adapter.svg" alt="adapter" fill />
      </div>
    </div>
    <p className="text-[22px] font-medium text-left  text-black mt-3">
      Apple 20W USB-C Power Adapter
    </p>
    <div className="flex items-center gap-[9px] pt-[11px] pb-[7px] ">
      <p className="text-[22px] font-semibold text-orange-500">৳2600</p>
      <div className="flex rounded-full items-center justify-center w-[80px] h-[24px] gap-[10px] bg-green-200 ">
        <p className="text-base font-medium text-green-500">10% OFF</p>
      </div>
      <p className="text-base font-semibold text-white-700 line-through">
        ৳2800
      </p>
    </div>
  </>
);

const EmptyHeaderContent = () => (
  <>
    {/* Placeholder for Product Image Area */}
    <div className="h-[296px] w-full mt-2"></div>
    {/* Placeholder for Product Name */}
    <div className="h-[22px] mt-3"></div>
    {/* Placeholder for Price/Discount Area */}
    <div className="h-[22px] pt-[11px] pb-[7px]"></div>
  </>
);

// --- Main Component 

export default function CompareProducts({
  features,
  featureDetails,
}: {
  features: string[];
  featureDetails: string[];
}) {
  return (
    <table className="w-[1308px] border border-white-700 rounded-md table-fixed">
      <thead>
        <tr className="align-top">
          <th className="w-[436px] bg-white-400 pt-[34px] border-r border-white-700 px-[21px] pb-[34px] font-normal">
            <p className="text-2xl font-semibold text-orange-500 text-left">
              Compare Products
            </p>
            <p className="text-lg font-normal text-orange-400 mt-3 text-left">
              Find and select products to see the differences and similarities
              between them
            </p>
          </th>

          <th className="w-[436px] pt-[34px] border-r border-white-700 px-[20px] font-normal">
            <SearchBar />
            <ProductHeaderContent />
          </th>

          <th className="w-[436px] pt-[34px] px-[20px] font-normal">
            <SearchBar />
            <EmptyHeaderContent />
          </th>
        </tr>
      </thead>

      <tbody>
        {features?.map((feature, index) => (
          <tr
            key={feature}
            className={`text-[22px] font-normal text-gray-500 border-t border-white-700`}
          >
            {/* Column 1: Feature Name */}
            <td className="w-[436px] bg-white-400 border-r border-white-700 px-[21px] py-[26px] font-normal text-gray-500">
              {feature}
            </td>

            {/* Column 2: Product 1 Detail */}
            <td className="w-[436px] border-r border-white-700 px-[21px] py-[26px]">
              {featureDetails[index] || ""}
            </td>

            {/* Column 3: Empty Slot Detail */}
            <td className="w-[436px] px-[21px] py-[26px]"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
