import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { MdPhoneAndroid } from "react-icons/md";
import { setToggleNav } from "@/features/redux/slices/themeSlice";
import { CiMenuFries } from "react-icons/ci";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Check if scroll position is greater than the header height
      if (currentScrollY > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full text-sm h-[90px] bg-white z-50 shadow transition-transform duration-500 ease-in-out ${
        isSticky && scrollDirection === "up"
          ? "fixed top-0 left-0 transform translate-y-0 opacity-100"
          : isSticky && scrollDirection === "down"
          ? "fixed top-0 left-0 transform -translate-y-full opacity-0"
          : "relative transform translate-y-0 opacity-100"
      }`}
    >
      <div className="flex items-center justify-between h-full mx-auto max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
        {/* logo */}
        <Link href={"/"}>
          <Image src="/images/logo.png" alt="Logo" width={120} height={80} />
        </Link>
        {/* menus */}
        <div className="items-center hidden h-full gap-4 md:flex">
          {/* Services Dropdown */}
          <div className="relative flex items-center h-full gap-1 cursor-pointer group">
            Services <IoIosArrowDown className="text-[10px]" />
            {/* Dropdown menu */}
            <div className="absolute top-[90px] left-0 w-[200px] h-auto pb-3 bg-white shadow-xl rounded-md px-5 flex flex-col gap-2 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-in-out z-10">
              <div>
                <Link href={"tv-mounting"}>Tv Mounting</Link>
              </div>
              <div>
                <Link href={"home-appliances"}>Home Appliances</Link>
              </div>
              <div>Handyman Services</div>
              <div>iPhone Repair</div>
              <div>Smart Home Installation</div>
              <div>Garage Door Repair</div>
              <div>Plumbing Services</div>
            </div>
          </div>
          {/* Other Menu Items */}
          <div className="relative cursor-pointer">
            <Link href={"/pricing"}>Pricing</Link>
          </div>
          <div className="relative cursor-pointer">
            <Link href={"/warranty"}>Warranty</Link>
          </div>
          <div className="relative cursor-pointer">Blog</div>
          <div className="relative cursor-pointer">Become a Tech</div>
          <div className="relative cursor-pointer">Property Management</div>
        </div>
        <div className="block md:hidden">
          <button
            className="relative p-2 overflow-hidden rounded-full group focus:outline-none"
            onClick={() => dispatch(setToggleNav(true))}
          >
            <span className="absolute inset-0 transition-opacity duration-300 bg-[#e0b0a0] opacity-0 group-active:opacity-20"></span>
            <CiMenuFries className="text-[24px] cursor-pointer font-bold" />
          </button>
        </div>
        {/* support */}
        <div className="hidden gap-2 2xl:flex">
          <div className="flex items-center gap-1 text-sm">
            <LuClock3 /> <span className="font-bold">24/7</span> Customer
            Support
          </div>
          <div className="flex items-center gap-1 text-sm">
            <MdPhoneAndroid /> +8800998876
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
