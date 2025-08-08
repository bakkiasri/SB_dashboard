import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FaCalendar } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import one from '../assets/illutration.svg';
import { FaDollarSign } from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa";
import two from '../assets/emoij.svg';
import { IoIosSettings } from "react-icons/io";

import {
  CategoryScale,
  LinearScale,

} from "chart.js";
import {
  LineElement,
  PointElement,
  Title,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale);
function Dashboard() {
   const databar = {
    labels: [""], // Only one bar
    datasets: [
      {
        label: "Progress",
        data: [70], // Static value
        backgroundColor: "#4E73DF",
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

    const chartData1 = {
      labels: ["jan","feb", "mar", "apr","may","june","july","Aug", "sep","oct", "nov","dec"],
    datasets: [
      {
        label: "earnings",
        data: [10000,15000,20000,15000,30000,25000,40000,35000,15000,30000,25000,40000,35000],
        borderColor: "#4E73DF", // Line color
        backgroundColor: "#4E73DF", // No fill
        tension: 0.3, // Smooth curve
        pointBorderColor: "#4E73DF",
        pointBackgroundColor: "#fff",
        pointRadius: 5,
      }
    ]
  };
  const optionsbar = {
    indexAxis: "y", // Horizontal bar
    responsive: true,
    scales: {
      x: {
        
        max: 100, // Max = 100% progress
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };
  //   labels: [],
  //   datasets: [
  //     {
  //       label: "",
  //       fill: true,
  //       lineTension: 0.4,
  //       borderWidth: 5,
  //       backgroundColor: "red",
  //       borderColor: "rgba(75,192,192,1)",
  //       pointBorderColor: "rgba(75,192,192,1)",
  //       pointBackgroundColor: "#fff",
  //       pointBorderWidth: 3,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: "#fff",
  //       pointHoverBorderColor: "#2D55B4",
  //       pointHoverBorderWidth: 1,
  //       pointRadius: 1,
  //       data: [],
  //     },
  //   ],
  // }

 
  // const [count, setCount] = useState(0)const 
   const chartData = {
    labels: ['Food', 'Transport', 'Rent'],
    datasets: [
      {
        data: [300, 150, 500],
        backgroundColor: ['#1CC88A', '#36B9CC', '#4E73DF'],
        hoverOffset: 8,
        offset:2,
        borderWidth: 0,  
        //  weight: 1,
         cutout: '85%',
          spacing: 4,
      },
    ],
  };


  const options = {
  cutout: '60%',
  plugins: {
    legend: {
      position: 'bottom', // 👈 Legend moved to bottom
      labels: {
        boxWidth: 20,
        padding: 15,
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
  },
};
const options1 = {
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#FFFFFF",
        borderColor: "#b3b5bdff",
        titleFont: { font: 12 },
        bodyColor: "#AAABB6",   
        titleColor: "#8F919C",
        backdropColor: "#0f40f1ff",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        
        border: { color: "#EFF2FB" },
        grid: { color: "transparent", tickColor: "transparent" },
      },
      y: {
        border: { color: "#EFF2FB" },
        grid: { color: "#EFF2FB", tickColor: "transparent" },
        min: 10000,
        max: 40000,
      },
    },
  };
  return(
    <div className=' bg-[#EFF0F3] ' >
    <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
  {/* Left side */}
     <div>
    <h1 className="text-2xl font-normal text-[#5A5C69]">
      Dashboard
    </h1>
      </div>

  {/* Right side */}
  <div>
    <button type="button" className="p-2 bg-[#4E73DF] text-white rounded">
      Generate Report
    </button>
  </div>
    </div>
   <div className="flex grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 justify-center lg:justify-between  gap-4 p-4">
  {/* Row 1 */}
  <div className='grid p-5 border-s-4 border-[#4E73DF] rounded-lg bg-white grid-cols-2 shadow-xl w-75'>
    <div className=" ">
    <h2 className="text-sm text-[#4E73DF] font-semibold">EARNINGS[MONTHLY]</h2>
    <p className='text-[#5A5C69]'>$40,000</p>
    </div>
    <div className='flex justify-end'>
       <FaCalendar className='text-[#DDDFEB] w-[40px] h-[40px]'/>
    </div>
  </div>
   <div className='grid p-5 border-s-4 border-[#1CC88A] rounded-lg bg-white grid-cols-2 shadow-xl w-75'>
    <div className="   ">
    <h2 className="text-sm text-[#1CC88A] font-semibold">EARNINGS[YEARLY]</h2>
    <p className='text-[#5A5C69]'>$40,000</p>
    </div>
    <div className='flex justify-end'>
       <FaDollarSign className='text-[#DDDFEB] w-[40px] h-[40px]'/>
    </div>
  </div>
   <div className='grid p-5 border-s-4 border-[#36B9CC] rounded-lg bg-white grid-cols-2 shadow-xl w-75'>
    <div className="   ">
    <h2 className="text-sm text-[#36B9CC] font-semibold">TASK</h2>
    <p className='text-[#5A5C69]'>$215,000</p>
    </div>
    <div className='flex justify-end'>
       <FaNotesMedical className='text-[#DDDFEB] w-[40px] h-[40px]'/>
    </div>
  </div>
   <div className='grid p-5 border-s-4 border-[#F6C23E] rounded-lg bg-white grid-cols-2 shadow-2xl w-75'>
    <div className="   ">
    <h2 className="text-sm text-[#F6C23E] font-semibold">PENDING TASK</h2>
    <p className='text-[#5A5C69]'>$40,000</p>
    </div>
    <div className='flex justify-end'>
       <FaNotesMedical className='text-[#DDDFEB] w-[40px] h-[40px]'/>
    </div>
  </div>
  
    
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
  {/* Earnings Overview */}
  <div className="shadow-2xl rounded-lg bg-white">
    <div className="p-5 text-left bg-[#F8F9FC] rounded-t-lg border-2 border-[#E3E6F0]">
      Earnings Overview
    </div>
    <div className="p-3">
      <Line
        data={chartData1}
        options={options1}
        className="p-4 w-full"
        style={{ height: "250px" }}
      />
    </div>
  </div>

  {/* Revenue Sources */}
  <div className="shadow-2xl rounded-lg bg-white">
    <div className="p-5  text-left bg-[#F8F9FC] rounded-t-lg border-2 border-[#E3E6F0]">
      Revenue Sources
    </div>
    <div className="pt-3 flex justify-center">
      <Doughnut data={chartData} options={options} />
    </div>
  </div>
   </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5'>
      <div className='grid grid-row'>
       <div className=' flex-row justify-center h-fit align-center shadow-2xl rounded-lg m-5'>
            <div className='p-5 text-left bg-[#F8F9FC] rounded-t-lg border-2 border-[#E3E6F0]'>
                Earnings Overview
            </div>
          
        <div className='p-3'> 
          <div className='flex justify-between'>
            <div className=''>
                Server Migration
            </div>
            <div className=''>
                20%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-[#E74A3B] h-4 rounded-full transition-all duration-300"
        style={{ width: `20%` }}
      ></div>
            </div> 
        <div>
        </div>
        </div>
        <div className='p-3'> 
          <div className='flex justify-between'>
            <div className=''>
                Sales Tracking
            </div>
            <div className=''>
                40%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-[#F6C23E] h-4 rounded-full transition-all duration-300"
        style={{ width: `40%` }}
      ></div>
            </div> 
        <div>
        </div>
        </div>
        <div className='p-3'> 
          <div className='flex justify-between'>
            <div className=''>
               Customer Database
            </div>
            <div className=''>
                60%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-[#4E73DF] h-4 rounded-full transition-all duration-300"
        style={{ width: `60%` }}
      ></div>
            </div> 
      
        </div>
        <div className='p-3'> 
          <div className='flex justify-between'>
            <div className=''>
                Payout Details
            </div>
            <div className=''>
                80%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-[#36B9CC] h-4 rounded-full transition-all duration-300"
        style={{ width: `80%` }}
      ></div>
            </div> 
        <div>
        </div>
        </div>
        <div className='p-3 mb-3' > 
          <div className='flex justify-between'>
            <div className=''>
                Account Setup
            </div>
            <div className=''>
                Completed
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-[#1CC88A] h-4 rounded-full transition-all duration-300"
        style={{ width: `100%` }}
      ></div>
            </div> 
            </div>
       </div>
       <div>
        <div className="grid lg:grid-cols-2  lg:grid-rows-4 grid-cols-1 grid-rows-8  gap-4 p-4">
            <div className="bg-[#4e73df] text-white  rounded-sm shadow-xl p-8">
              <div className=''>
               Primary 
               </div>
               <p>
                #4e73df
                </p>
               </div>
            <div className="bg-[#1cc88a] text-white rounded-sm shadow-xl p-8"><div className=''>
               Success
               </div>
               <p>
                #1cc88a
                </p></div>
            <div className="bg-[#36b9cc] text-white rounded-sm shadow-xl p-8"><div className=''>
               Info
               </div>
               <p>
                #36b9cc
                </p></div>
            <div className="bg-[#f6c23e] text-white rounded-sm shadow-xl p-8"><div className=''>
               Warning
               </div>
               <p>
                #f6c23e
                </p></div>
            <div className="bg-[#e74a3b] text-white rounded-sm shadow-xl p-8"><div className=''>
               Danger
               </div>
               <p>
                #e74a3b
                </p></div>
            <div className="bg-[#858796] text-white rounded-sm shadow-xl p-8"><div className=''>
               Secondary 
               </div>
               <p>
                #858796
                </p></div>
            <div className="bg-[#f8f9fc] text-white rounded-sm shadow-xl p-8"><div className=''>
               Light
               </div>
               <p>
                #f8f9fc
                </p></div>
            <div className="bg-[#5a5c69] text-white rounded-sm shadow-xl p-8"><div className=''>
               Dark
               </div>
               <p>
                #5a5c69
                </p></div>
          </div>
       </div>
      </div>
      <div className='grid h-fit grid-row'>
         <div className=' flex-row h-fit justify-center align-center shadow-2xl rounded-lg m-5'>
            <div className='p-5 font-lg text-left bg-[#F8F9FC] rounded-t-lg border-2 border-[#E3E6F0]'>
               Illustration
            </div>
            <div className='flex-row  justify-center  items-center'>
              <div className='flex justify-center items-center'>
              <img
              src={one}
              alt="user"
             className="text-center p-0 w-80 h-80 "
              /> 
              </div>
              <p className='p-2 text-[#8587B1]'>
              Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
              </p>
              <p>
              <a href="#" className='text-sky-500 p-2 hover:text-sky-700'>Browse Illustrations on unDraw →
             </a>
              </p>
              </div>
          </div>
      <div className=' flex-row justify-center h-fit align-center shadow-2xl rounded-lg m-5'>
            <div className='p-5 text-left bg-[#F8F9FC] rounded-t-lg border-2 border-[#E3E6F0]'>
                Earnings Overview
            </div>
            <div className='p-5 text-[#8587B1]'>
              <p>
              SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
              </p>
            <p className="mt-4">
                Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes
            </p>
            </div>
          </div>
      </div>
       

    </div>
    <div >
      
         {/* <div className="grid grid-cols-2 mb-20 grid-rows-4 gap-4 p-4">
            <div className="bg-[#4e73df] text-white  rounded-sm shadow-xl p-8">
              <div className=''>
               Primary 
               </div>
               <p>
                #4e73df
                </p>
               </div>
            <div className="bg-[#1cc88a] text-white rounded-sm shadow-xl p-8"><div className=''>
               Primary 
               </div>
               <p>
                #4e73df
                </p></div>
            <div className="bg-[#36b9cc] text-white rounded-sm shadow-xl p-8"><div className=''>
               Primary 
               </div>
               <p>
                #4e73df
                </p></div>
            <div className="bg-[#f6c23e] text-white rounded-sm shadow-xl p-8"><div className=''>
               Primary 
               </div>
               <p>
                #4e73df
                </p></div>
            <div className="bg-[#e74a3b] text-white rounded-sm shadow-xl p-8"><div className=''>
               Primary 
               </div>
               <p>
                #4e73df
                </p></div>
            <div className="bg-[#858796] text-white rounded-sm shadow-xl p-8"><div className=''>
               Primary 
               </div>
               <p>
                #4e73df
                </p></div>
            <div className="bg-[#f8f9fc] text-white rounded-sm shadow-xl p-8"><div className=''>
               Primary 
               </div>
               <p>
                #4e73df
                </p></div>
            <div className="bg-[#5a5c69] text-white rounded-sm shadow-xl p-8"><div className=''>
               Primary 
               </div>
               <p>
                #4e73df
                </p></div>
          </div> */}
          
    

    </div>
    </div>
    
  )
}
export default Dashboard