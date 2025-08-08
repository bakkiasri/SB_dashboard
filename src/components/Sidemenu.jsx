import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { TiSpanner } from "react-icons/ti";
import { SiFiles } from "react-icons/si";
import { FaChartArea, FaTable } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import two from "../assets/emoij.svg";
import { useSidebar } from "../components/SidebarContext";

function Sidemenu() {
  const { collapsed, toggleSidebar } = useSidebar();

  return (
    <div className={`h-screen lg:block ${collapsed ? "block" : "hidden"} bg-[#4E73DF] transition-all duration-300 ${collapsed ? "w-25" : "w-56"}`}>
      <div className="flex items-center gap-2 text-white px-4 py-5 text-lg">
        {!collapsed && (
          <span className="text-white font-bold text-sm">
            <img src={two} alt="logo" className="w-8 h-8 inline-block mr-1" />
            SB ADMIN
          </span>
        )}
      </div>

      <div className="text-white space-y-3">
        <div className="flex items-center gap-2 px-5 py-2">
          <div className="flex-row justify-center">
            {collapsed && 
            <p className="text-[12px]">
            Dashboard
            </p>}
          <AiFillDashboard />
          </div>
          
          {!collapsed && <span>Dashboard</span>}
        </div>

        <div className="flex items-center gap-2 px-5 py-2">
         <div className="flex-row justify-center">
            {collapsed && 
            <p className="text-[12px] pe-3">
           Components
            </p>}
          <IoIosSettings />
          </div>
          {!collapsed && (
            <select className="bg-transparent text-white text-sm">
              <option>Components</option>
              <option>Buttons</option>
              <option>Cards</option>
            </select>
          )}
        </div>

        <div className="flex items-center gap-2 px-5 py-2">
         <div className="flex-row justify-center">
            {collapsed && 
            <p className="text-[12px]">
           Utilities
            </p>}
          <TiSpanner />
         </div>
          {!collapsed && <span>Utilities</span>}
        </div>

        <div className="flex items-center gap-2 px-5 py-2">
         <div className="flex-row justify-center">
            {collapsed && 
            <p className="text-[12px]">
           Pages
            </p>}
          
          <SiFiles />
          </div>
          {!collapsed && (
            <select className="bg-transparent text-white text-sm">
              <option>Pages</option>
              <option>Login</option>
              <option>Register</option>
              <option>Forget Password</option>
              <option>404 Error</option>
              <option>Blank Page</option>
            </select>
          )}
        </div>

        <div className="flex items-center gap-2 px-5 py-2">
         <div className="flex-row justify-center">
            {collapsed && 
            <p className="text-[12px]">
           Charts
            </p>}
          <FaChartArea />
          </div>
          {!collapsed && (
            <select className="bg-transparent text-white text-sm">
              <option>Charts</option>
              <option>Chart 1</option>
              <option>Chart 2</option>
            </select>
          )}
        </div>

        <div className="flex items-center gap-2 px-5 py-2">
         <div className="flex-row justify-center">
            {collapsed && 
            <p className="text-[12px]">
           Tables
            </p>}
          <FaTable />
          </div>
          {!collapsed && <span>Tables</span>}
        </div>
      </div>

      <div className="w-full mt-30 flex justify-center items-end">
        <button
          onClick={toggleSidebar}
          className="text-white rounded-full p-2 bg-blue-100 hover:bg-blue-200 transition-all duration-300"
        >
          <MdArrowForwardIos
            className={`w-6 h-6 text-[#4E73DF] transform transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}

export default Sidemenu;
