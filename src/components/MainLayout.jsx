import React from 'react';
import Sidebar from './Sidebar'; // Your Sidebar component (Side.jsx)
import Header from './Header'; // Your Dashboard Header component
import './MainLayout.css'; // Assuming you put the CSS in this file

const MainLayout = ({ children, activeTab, setActiveTab, onSearch}) => {
  return (
    <div className="main-layout">
      <Sidebar setActiveTab={setActiveTab} /> {/* Sidebar remains static */}
      <div className="main-content">
        <Header activeTab={activeTab}  onSearch={onSearch} /> {/* Header remains static */}
        <div className="content-wrapper">
            {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;