import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { companyData, socialIcons } from "@/lib/data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[707px] pt-[56px] bg-gray-500">
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
        <div className="flex justify-between gap-[114px]   border">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
