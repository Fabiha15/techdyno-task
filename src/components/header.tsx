import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col text-white-500">
      <div className="h-[28px] py-[6px]  bg-gray-500 ">
        <div className="flex gap-9 container text-xs font-light">
          <h1>Contact us 24/7 : +00854789956</h1>

          <div className="flex gap-[6px]">
            <div className="h-[14px] w-[14px] relative ">
              <Image fill src="/location.svg" alt="location" />
            </div>

            <h1>Store Locator</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
