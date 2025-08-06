import React from 'react';

import { FaLaughWink } from 'react-icons/fa';
import { AiFillDashboard } from "react-icons/ai";

function Sidemenu() {
 
  return(
    <div className='h-screen pb-0 w-56 bg-[#4E73DF]'>
        <div className='flex justify-items-center font-medium gap-2 text-white p-y-10 border-y-1 p-5  text-lg items-center'>
           {/* <FaLaughWink size={20} color="#f39c12" /> */}
           <AiFillDashboard  />
           <div className=''> Dashboard
          </div>
        </div>
        <div className='flex justify-items-center font-medium gap-2 text-white p-b-10 border-y-1 p-5  text-lg items-center'>
           {/* <FaLaughWink size={20} color="#f39c12" /> */}
           <AiFillDashboard  />
           <div className=''>
          <select id="dropdown" >
          <option value="c">components</option>
          <option value="apple">Buttons</option>
          <option value="banana">Cards</option>
          </select>
           </div>
           
        </div>
        <div className='flex justify-items-center font-medium gap-2 text-white p-b-10 border-y-1 p-5  text-lg items-center'>
           {/* <FaLaughWink size={20} color="#f39c12" /> */}
           <AiFillDashboard  />
           <div className=''>
          <select id="dropdown" >
          <option value="">Pages</option>
          <option value="apple">Login</option>
          <option value="banana">Register</option>
          <option value="">Forget Password</option>
          <option value="apple">Other page</option>
          <option value="banana">404 error</option>
          <option value="banana">Blank page</option>
         
          </select>
           </div>

        </div>
        
        <div className='flex justify-items-center font-medium gap-2 text-white p-b-10 border-y-1 p-5  text-lg items-center'>
           {/* <FaLaughWink size={20} color="#f39c12" /> */}
           <AiFillDashboard  />
           <div className=''>
          <select id="dropdown" >
          <option value="">Pages</option>
          <option value="apple">Login</option>
          <option value="banana">Register</option>
          <option value="">Forget Password</option>
          <option value="apple">Other page</option>
          <option value="banana">404 error</option>
          <option value="banana">Blank page</option>
         
          </select>
           </div>

        </div>
        <div className='flex justify-items-center font-medium gap-2 text-white p-b-10 border-y-1 p-5  text-lg items-center'>
           {/* <FaLaughWink size={20} color="#f39c12" /> */}
           <AiFillDashboard  />
           <div className=''>
          <select id="dropdown" >
          <option value="">Pages</option>
          <option value="apple">Login</option>
          <option value="banana">Register</option>
          <option value="">Forget Password</option>
          <option value="apple">Other page</option>
          <option value="banana">404 error</option>
          <option value="banana">Blank page</option>
          </select>
           </div>
           
        </div>
    </div>
  )
}
export default Sidemenu