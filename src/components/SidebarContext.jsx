import React, { createContext, useState, useContext } from "react";

// Create context
const SidebarContext = createContext();

// Provider component
export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <SidebarContext.Provider value={{ collapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Hook for easy access
export const useSidebar = () => useContext(SidebarContext);
