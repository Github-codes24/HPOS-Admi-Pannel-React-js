import React from 'react';
import Sidebar from './Sidebar'; // Your Sidebar component (Side.jsx)
import DashboardHeader from './DashboardHeader'; // Your Dashboard Header component
import { Outlet } from 'react-router-dom'; // Outlet will render dynamic content
import './MainLayout.css'; // Assuming you put the CSS in this file

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar /> {/* Sidebar remains static */}
      <div className="main-content">
        <DashboardHeader /> {/* Header remains static */}
        <div className="content-wrapper">
            {children}
          {/* <Outlet /> This is where the dynamic content (body) will be rendered */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;