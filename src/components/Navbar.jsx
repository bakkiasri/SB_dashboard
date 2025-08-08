import React from "react";
import { IoMdMenu } from "react-icons/io";
import { LuSearch } from "react-icons/lu"; 
import { IoMdNotifications } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import one from "../assets/profile.svg";
import { useSidebar } from "../components/SidebarContext";

function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="shadow-lg grid grid-cols-2 items-center justify-between p-3 bg-white">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <IoMdMenu
          className="w-[30px] h-[30px] lg:hidden cursor-pointer text-[#4E73DF]"
          onClick={toggleSidebar}
        />
        <div className="flex items-center bg-[#F8F9FC] rounded-full overflow-hidden">
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="w-full px-4 py-2 outline-none bg-[#F8F9FC] text-gray-800 placeholder-gray-400"
          />
          <LuSearch className="bg-[#4E73DF] text-white p-2 w-[40px] h-[40px]" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-end items-center gap-4">
        <div className="relative">
          <IoMdNotifications className="text-[#D1D3E2] w-[30px] h-[30px]" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            3
          </span>
        </div>

        <IoMail className="text-[#D1D3E2] w-[30px] h-[30px]" />

        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-700 font-medium">Bakkiasri Pandi</div>
          <img
            src={one}
            alt="user"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;