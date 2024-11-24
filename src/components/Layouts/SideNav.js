import React, { useState } from "react";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { RiFullscreenExitFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setToggleNav } from "@/features/redux/slices/themeSlice";

import { FiList } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const SideNav = () => {
  // declare dispatch
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="h-[50px] flex items-center justify-between">
        <Image src="/images/logo.svg" alt="" width={100} height={80} />

        <div>
          <RiFullscreenExitFill
            className="text-lg cursor-pointer"
            onClick={() => dispatch(setToggleNav(false))}
          />
        </div>
      </div>

      <div className="flex items-center w-full gap-2 p-2 bg-white rounded-md shadow-md">
        <div className="p-2 bg-white rounded-sm shadow-md w-fit">
          <Image src="/images/avater.png" alt="" width={40} height={30} />
        </div>
        {/* profile  */}
        <div className="flex flex-col gap-[2px]">
          <span className="text-sm">Guy Hawkins</span>
          <span className="text-[10px]">hawkings33@gmail.com</span>
        </div>
      </div>

      {/* side menus  */}

      <div className="flex flex-col gap-2 py-4 mt-2 border-b">
        <div className="flex items-center gap-2">
          <IoHomeOutline className="text-black text-md" />
          <span className="text-black">Home</span>
        </div>

        <div className="flex items-center gap-2">
          <IoSearch className="text-black text-md" />
          <span className="text-black">Search</span>
        </div>

        <div className="flex items-center gap-2">
          <GoBell className="text-black text-md" />
          <span className="text-black">Notification</span>
        </div>
      </div>

      {/* menus  */}
      <div className="flex flex-col gap-2 py-4">
        <div
          className="flex items-center justify-between gap-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="flex items-center gap-2">
            <FiList className="text-black text-md" />
            <span className="text-black">Service</span>
          </div>
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </div>
        {/* Dropdown Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="p-4 bg-gray-100 rounded-md shadow-md">
            <li className="px-2 py-1 text-sm hover:bg-gray-200">
              Tv Mounting{" "}
            </li>
            <li className="px-2 py-1 text-sm hover:bg-gray-200">
              Home Appliances
            </li>
            <li className="px-2 py-1 text-sm hover:bg-gray-200">
              Handiman Services
            </li>
            <li className="px-2 py-1 text-sm hover:bg-gray-200">
              iPhone Repair
            </li>
            <li className="px-2 py-1 text-sm hover:bg-gray-200">
              Smart Home Installation
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
