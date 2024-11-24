import React from "react";
import { MdHome, MdSearch, MdHistory, MdPerson } from "react-icons/md";

const MobileNav = () => {
  return (
    // bg-gradient-to-b from-purple-500 to-purple-700
    <div className="fixed bottom-0 left-0 right-0 z-50 block bg-transparent md:hidden">
      <div className="flex items-center justify-around p-2 pt-2 bg-white  rounded-tl-[30px] rounded-tr-[30px] shadow-[0px_-4px_6px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col items-center">
          <div className="p-2 bg-[#f5e1da] rounded-full">
            <MdHome className="text-2xl text-[#ff6c3a]" />
          </div>
          <span className="mt-1 text-xs text-[#ff6c3a]">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <MdSearch className="text-2xl text-gray-500" />
          <span className="mt-1 text-xs text-gray-500">Search</span>
        </div>
        <div className="flex flex-col items-center">
          <MdHistory className="text-2xl text-gray-500" />
          <span className="mt-1 text-xs text-gray-500">History</span>
        </div>
        <div className="flex flex-col items-center">
          <MdPerson className="text-2xl text-gray-500" />
          <span className="mt-1 text-xs text-gray-500">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
