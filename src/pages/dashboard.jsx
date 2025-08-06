import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


function Dashboard() {
  // const [count, setCount] = useState(0)const 
  chartData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#A78BFA', '#4BC0C0'],
        hoverOffset: 8,
      },
    ],
  };
  return(
    <div className='p-3 bg-blue-200 h-screen'>
        <div className="mx-auto max-w-7xl flex items-center justify-between bg-purple-100 p-4">
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
   <div className="flex flex-row  justify-between bg-red-100  gap-4 p-4">
  {/* Row 1 */}
    

  

  <div className="bg-purple-100 p-4 rounded shadow">
    <h2 className="text-xl font-semibold">Row 1</h2>
    <p>This is the first row.</p>
    </div>
    <div className="bg-purple-100 p-4 rounded shadow">
    <h2 className="text-xl font-semibold">Row 1</h2>
    <p>This is the first row.</p>
    </div>
    <div className="bg-purple-100 p-4 rounded shadow">
    <h2 className="text-xl font-semibold">Row 1</h2>
    <p>This is the first row.</p>
    </div>
    <div className="bg-purple-100 p-4 rounded shadow">
    <h2 className="text-xl font-semibold">Row 1</h2>
    <p>This is the first row.</p>
    </div>
    </div>

    <div className=''>
        <div>
            <Doughnut data={chartData} />
        </div>
        <div>

        </div>

    </div>

    </div>
   
        
    //    <h1 className='text-2xl  bg-blue-100 font-normal text-[#5A5C69] '>
    //     Dashboard
    //    </h1>
    //    <h1 className='text-2xl  bg-blue-100 font-normal text-[#5A5C69] '>
    //     Dashboard
    //    </h1>
       
      
    
   
    
  )
}
export default Dashboard