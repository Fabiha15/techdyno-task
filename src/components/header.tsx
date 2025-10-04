import { navData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <div className="flex items-center gap-8 content-wrapper  ">
      {navData.map((item: { title: string; path: string }) => {
        return (
          <Link
            key={item.path}
            href={item.path}
            className="text-white-500 text-base font-medium hover:underline"
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
const Header = () => {
  return (
    <div className="flex flex-col ">
      {/* top bar */}
      <div className="h-[28px] py-[6px]  bg-gray-500 text-white-500 ">
        <div className="flex gap-9 content-wrapper text-xs font-light">
          <h1>Contact us 24/7 : +00854789956</h1>

          <div className="flex gap-[6px]">
            <div className="h-[14px] w-[14px] relative ">
              <Image fill src="/location.svg" alt="location" />
            </div>

            <h1>Store Locator</h1>
          </div>
        </div>
      </div>
      {/* middle header */}
      <div className="h-[104px] bg-white-500 py-7 ">
        <div className="content-wrapper flex  items-center  ">
          <div className=" flex justify-between h-12 w-[1153px]  ">
            <div className="h-12 w-[182px] relative  ">
              <Image fill src="/logo.svg" alt="logo" />
            </div>
            <div className="flex items-center justify-between bg-gray-500 w-[593px] h-12 rounded-full ">
              <Input
                placeholder="Search your favorite accessories"
                className="w-1/2 h-full  text-xs font-light text-white-500 "
              />
              <button className="h-9 w-9 mr-3 flex items-center justify-center rounded-full  bg-orange-500">
                <div className="h-4 w-4 relative  ">
                  <Image fill src="/search.svg" alt="search" />
                </div>
              </button>
            </div>
          </div>
          <div className="ml-[65px] mr-[45px]">
            <div className="flex items-center py-2 px-[10px]  bg-orange-100 rounded-md gap-[6px] w-[91px] h-[34px] border border-orange-300">
              <div className="h-[16px] w-[13px] relative ">
                <Image fill src="/offer.svg" alt="offer" />
              </div>

              <span className="text-base font-medium text-orange-500">
                Offer&apos;s
              </span>
            </div>
          </div>

          <div className="flex items-center gap-[53px] w-[355px]">
            <div className="flex items-center gap-[6px]">
              <span className="text-base font-medium text-gray-500">
                English
              </span>
              <div className="h-[14px] w-[14px] relative ">
                <Image fill src="/chevron-down.svg" alt="chevron-down" />
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="h-7 w-7 relative ">
                <Image fill src="/cart.svg" alt="cart" />
              </div>
              <div className="grid">
                <span className="text-lg font-normal text-gray-500">Cart</span>
                <span className="text-[8px] font-normal text-white-800">
                  1-Items
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="h-7 w-7 relative ">
                <Image fill src="/profile.svg" alt="profile" />
              </div>
              <div className="grid">
                <span className="text-lg font-normal text-gray-500">
                  Profile
                </span>
                <span className="text-[8px] font-normal text-white-800">
                  Amanullah
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="h-[53px]  bg-orange-500 text-white-500 py-[15px]">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
