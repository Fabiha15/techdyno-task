import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { companyData, socialIcons, termsData } from "@/lib/data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[760px] pt-[56px]  bg-gray-500 ">
      <div className="content-wrapper flex gap-[271px] mt-[56px] ">
        <div className="flex flex-col w-[438px] h-[356px]">
          <div className="h-12 w-[182px] relative">
            <Image
              fill
              src="/logo.svg"
              alt="logo"
              className="object-contain object-left "
            />
          </div>

          <h1 className="mt-4 text-white-500 text-base font-medium">
            {" "}
            Sannai is dedicated to delivering innovative solutions with a focus
            on quality, creativity, and customer - satisfaction. We believe in
            building experiences - that inspire growth and trust.
          </h1>
          <div className="flex items-center justify-between  bg-white-500 rounded-md h-[48px] mt-[31px] px-[5px] py-[6px]">
            <Input
              placeholder="Enter your email"
              className=" w-1/2 h-full bg-white-500  text-base font-normal opacity-70 "
            />
            <Button className="w-[121px] h-[38px] bg-orange-500 text-white-500">
              Subscribe
            </Button>
          </div>
          <div className="flex justify-between h-[40px] gap-[18px] mt-[21px] mb-[37px]">
            <div className="w-[120px]  p-[7px] flex items-center gap-[2px] rounded-md bg-white-500">
              <div className="h-[21px] w-[17px] relative ">
                <Image fill src="/apple.svg" alt="apple" />
              </div>
              <div className="flex flex-col gap-[3px] ">
                <div className="h-[6px] w-[70px] relative ">
                  <Image fill src="/download.svg" alt="download" />
                </div>
                <div className="h-[15px] w-[75px] relative ">
                  <Image fill src="/app.svg" alt="app store" />
                </div>
              </div>
            </div>
            <div className=" p-[7px] flex items-center gap-[2px] rounded-md bg-white-500">
              <div className="h-[25px] w-[23px] relative ">
                <Image fill src="/googleplaylogo.svg" alt="google play logo" />
              </div>
              <div className="flex flex-col gap-[3px] ">
                <div className="h-[6px] w-[38px] relative ">
                  <Image fill src="/get.svg" alt="get it on" />
                </div>
                <div className="h-[17px] w-[84px] relative ">
                  <Image fill src="/googleplay.svg" alt="google play" />
                </div>
              </div>
            </div>
            <div className="  p-[7px] flex items-center gap-[2px] rounded-md bg-white-500">
              <div className="h-[26px] w-[26px] relative ">
                <Image fill src="/galaxyIcon.svg" alt="galaxy icon" />
              </div>
              <div className="flex flex-col gap-[3px] ">
                <div className="h-[7px] w-[55px] relative ">
                  <Image fill src="/available.svg" alt="available" />
                </div>
                <div className="h-[15px] w-[96px] relative ">
                  <Image fill src="/galaxy.svg" alt="galaxy store" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  gap-6">
            {/* Label */}
            <h1 className=" text-white text-base font-medium">Follow Us:</h1>

            {/* Social Icons */}
            <div className="flex items-center   gap-3">
              {socialIcons.map((item: { icon: string; path: string }) => (
                <Link
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  className="flex  items-center justify-center h-8 w-8 rounded-full bg-white hover:bg-gray-200 transition-colors duration-200"
                >
                  <Image
                    height={30}
                    width={20}
                    src={`/${item.icon}.svg`}
                    alt={item.icon}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-[114px]   ">
          {/* Company Section */}
          <div className="w-[177px]">
            <h1 className="text-white text-xl font-semibold mb-6">Company</h1>
            <ul className="space-y-3">
              {companyData.map(({ title, path }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="text-white text-base font-normal hover:underline transition-colors duration-200"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[177px]">
            <h1 className="text-white text-xl font-semibold mb-6">Terms</h1>
            <ul className="space-y-3">
              {termsData.map(({ title, path }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="text-white text-base font-normal hover:underline transition-colors duration-200"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[417px] gap-6 flex flex-col ">
            <h1 className="text-white text-xl font-semibold ">Address</h1>
            <div className="flex  gap-[14px] items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
              >
                <path
                  d="M14.75 7.73242C14.75 12.9824 8 17.4824 8 17.4824C8 17.4824 1.25 12.9824 1.25 7.73242C1.25 5.94221 1.96116 4.22532 3.22703 2.95945C4.4929 1.69358 6.20979 0.982422 8 0.982422C9.79021 0.982422 11.5071 1.69358 12.773 2.95945C14.0388 4.22532 14.75 5.94221 14.75 7.73242Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 9.98242C9.24264 9.98242 10.25 8.97506 10.25 7.73242C10.25 6.48978 9.24264 5.48242 8 5.48242C6.75736 5.48242 5.75 6.48978 5.75 7.73242C5.75 8.97506 6.75736 9.98242 8 9.98242Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-white text-base font-normal ">
                6th Floor, 45, Prabal Tower, The Cafe Rio Building, Ring Rd,
                Dhaka 1207
              </p>
            </div>
            <div className="flex  w-[243px] h-[54px] gap-[11px] px-[22px] py-[11px] bg-white rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M25.1291 19.9399V23.3063C25.1304 23.6188 25.0664 23.9281 24.9412 24.2145C24.816 24.5008 24.6324 24.7578 24.4021 24.9691C24.1718 25.1804 23.8999 25.3412 23.6039 25.4413C23.3078 25.5415 22.9942 25.5786 22.6829 25.5505C19.23 25.1753 15.9132 23.9954 12.999 22.1056C10.2878 20.3828 7.98911 18.0841 6.26628 15.3729C4.36987 12.4455 3.18969 9.11256 2.82136 5.64409C2.79332 5.33378 2.8302 5.02104 2.92965 4.72577C3.0291 4.4305 3.18894 4.15917 3.39899 3.92906C3.60905 3.69895 3.86472 3.5151 4.14972 3.38921C4.43472 3.26332 4.74282 3.19816 5.05439 3.19786H8.42075C8.96532 3.1925 9.49326 3.38535 9.90617 3.74044C10.3191 4.09554 10.5888 4.58867 10.665 5.12791C10.8071 6.20522 11.0706 7.263 11.4505 8.28107C11.6015 8.68271 11.6341 9.1192 11.5446 9.53884C11.4551 9.95847 11.2472 10.3437 10.9455 10.6487L9.52043 12.0738C11.1178 14.8831 13.4439 17.2092 16.2532 18.8066L17.6782 17.3815C17.9833 17.0798 18.3685 16.8719 18.7882 16.7824C19.2078 16.6929 19.6443 16.7255 20.0459 16.8765C21.064 17.2564 22.1218 17.5199 23.1991 17.662C23.7442 17.7389 24.242 18.0135 24.5978 18.4335C24.9537 18.8535 25.1428 19.3896 25.1291 19.9399Z"
                  stroke="#FF6B01"
                  strokeWidth="2.24424"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-orange-500 font-medium text-2xl">
                09254879523
              </p>
            </div>
            <div className="flex items-center gap-[14px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M16.5 2.6748C16.5 1.8498 15.825 1.1748 15 1.1748H3C2.175 1.1748 1.5 1.8498 1.5 2.6748M16.5 2.6748V11.6748C16.5 12.4998 15.825 13.1748 15 13.1748H3C2.175 13.1748 1.5 12.4998 1.5 11.6748V2.6748M16.5 2.6748L9 7.9248L1.5 2.6748"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-white font-normal text-base">
                sannaiinfo@gmail.com
              </p>
            </div>
            <div className="h-[225px] w-[418px] relative  ">
              <Image fill src="/map.svg" alt="map" />
            </div>
            <div className="flex justify-between">
              <div />
              <div className="flex w-[62px] h-[62px] rounded-full border border-white  items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="27"
                  viewBox="0 0 16 27"
                  fill="none"
                >
                  <path
                    d="M0.999999 8.73242C5 7.23242 8 1.73242 8 1.73242M8 1.73242C8 1.73242 10 6.98242 15 8.73242M8 1.73242L8 25.7324"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    
       <div className="h-[1px] bg-white-800 content-wrapper mt-[26px]"></div>
      <p className=" text-base font-normal text-center text-black-50 pt-[23px] mb-[36px]">
       © Copyright - | Techdynobd.com | Designed & Developed by TechTeams.com
      </p>
    
    </div>
  );
};

export default Footer;
