import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { MdPhoneAndroid } from "react-icons/md";
const Header = () => {
  return (
    <div className="w-full text-sm h-[90px] shadow">
      <div className="flex items-center justify-between h-full container-2xl">
        {/* logo  */}
        <Link href={"/"}>
          <Image src="/images/logo.png" alt="" width={100} height={80} />
        </Link>

        {/* menus  */}
        <div className="flex items-center gap-4">
          <div className="relative flex items-center gap-1 cursor-pointer group">
            Services <IoIosArrowDown className="text-[10px]" />
            {/* Dropdown menu with shadow on all sides, including top */}
            <div className="absolute top-full left-0 w-[200px] h-auto pb-3 bg-white shadow-lg rounded-md mt-3  px-5 flex flex-col gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-10">
              <div className="">Tv Mounting</div>
              <div className="">Home Appliances</div>
              <div className="">Handyman Services</div>
              <div className="">iPhone Repair</div>
              <div className="">Smart Home Installation</div>
              <div className="">Garage Door Repair</div>
              <div className="">Plumbing Services</div>
            </div>
          </div>
          <div className="relative flex items-center gap-1 cursor-pointer group">
            Pricing <IoIosArrowDown className="text-[10px]" />
          </div>
          <div className="relative cursor-pointer">Warranty</div>
          <div className="relative flex items-center gap-1 cursor-pointer group">
            Pages <IoIosArrowDown className="text-[10px]" />
          </div>
          <div className="relative flex items-center gap-1 cursor-pointer group">
            Blog <IoIosArrowDown className="text-[10px]" />
          </div>
          <div className="relative cursor-pointer">Property Management</div>
        </div>

        {/* support  */}
        <div className="flex gap-2">
          <div className="flex items-center gap-1 text-sm">
            <LuClock3 /> <span className="font-bold">24/7</span> Customer
            Support
          </div>
          <div className="flex items-center gap-1 text-sm">
            <MdPhoneAndroid /> +8800998876
          </div>

          <div className="flex items-center gap-1">
            <button className="bg-[#FF6C3A] py-2 px-5 text-white text-sm rounded-sm shadow-md">
              Login
            </button>

            <button className="px-5 py-2 text-sm text-black rounded-sm">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
