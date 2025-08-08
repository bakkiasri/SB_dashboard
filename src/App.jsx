import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Navbar from './components/Navbar';
import Sidemenu from './components/Sidemenu';
import { SidebarProvider } from "./components/SidebarContext";
function App() {

  return (
    <>  <SidebarProvider>
       <div className="flex h-screen">
      {/* Sidebar */}
      <Sidemenu />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-4 flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </div>
    </SidebarProvider>
    </>
  )
}

export default App
