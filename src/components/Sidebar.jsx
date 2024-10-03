import React, {useEffect, useState, ReactNode } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { SvgIcon } from './svg/SvgIcon';
import logo from '../assets/logo.png';
import bg from '../assets/bg.png';

const Sidebar = ({toggleSidebar, isSidebarVisible, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const isMenuItemActive = (path) => location.pathname.includes(path);
  // const isSubMenuActive = (submenuString) => location.pathname.includes(submenuString);

  let x = bg;
  // const [loggedOut, setLoggedOut] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update active tab
  };

  // const hideSidebar = () => {
  //   if (window.innerWidth <= 1280) {
  //     toggleSidebar(false);
  //   }
  // };

  const logoutBtn = () => {
    localStorage.removeItem('token');
    setLoggedOut(true);
    window.location.reload();
  };

  // useEffect(() => {
  //   if (loggedOut) {
  //     console.log('Logged out');
  //   }
  // }, [loggedOut]);

  return (
     <aside className={isSidebarVisible ? 'sidebar--container' : 'sidebar--container onHide'}>
      <button onClick={toggleSidebar} className={`${isSidebarVisible ? "sidebar--open" : "sidebar--close"} sidebar--button`}>
        <SvgIcon />
      </button>
      <div className="w-64 h-screen bg-white flex flex-col justify-between">
        <div>
          <div className="text-center py-4">
            <img src={logo} alt="UniSol" className="w-44 mx-auto" />
          </div>
          <nav className="mt-4 mx-4">
            <ul>
            <li onClick={() => handleTabClick('Dashboard')}>
              <div className="flex p-4 bg-blue-600 text-white h-10 items-center gap-4 m-5 rounded-md w-48">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-microsoft"
                  viewBox="0 0 16 16">
                  <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
                </svg>
                <NavLink to="/dashboard" className="cursor-pointer">
                  Dashboard
                </NavLink>
              </div>
            </li>
            <li onClick={() => handleTabClick('Sickle Cell')}>
              <div className="flex p-4 bg-blue-600 text-white h-10 items-center gap-4 m-5 rounded-md w-48">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-microsoft"
                  viewBox="0 0 16 16">
                  <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
                </svg>
                <NavLink to="/sickle-cell" className="cursor-pointer">
                  Sickle Cell
                </NavLink>
              </div>
            </li>
            <li onClick={() => handleTabClick('Breast Cancer')}>
              <div className="flex p-4 bg-blue-600 text-white h-10 items-center gap-4 m-5 rounded-md w-48">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-microsoft"
                  viewBox="0 0 16 16">
                  <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
                </svg>
                <NavLink to="/breast-cancer" className="cursor-pointer">
                  Breast Cancer
                </NavLink>
              </div>
            </li>
            <li onClick={() => handleTabClick('Cervical Cancer')}>
              <div className="flex p-4 bg-blue-600 text-white h-10 items-center gap-4 m-5 rounded-md w-48">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-microsoft"
                  viewBox="0 0 16 16">
                  <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
                </svg>
                <NavLink to="/cervical-cancer" className="cursor-pointer">
                  Cervical Cancer
                </NavLink>
              </div>
            </li>
            </ul>
          </nav>
        </div>

        <div className="p-4">
          <div
            onClick={() => document.getElementById('addadmindata').showModal()}
            className="pb-4 flex items-center gap-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-circle-fill"
              viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
            <p className="text-slate-500 text-md font-bold">Add Admin</p>
          </div>
          <div className="pb-4 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-circle-fill"
              viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
            <p className="text-slate-500 text-md font-bold">Add Employee</p>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
            <p onClick={() => logoutBtn()}>Log out</p>
          </div>
        </div>
      </div>

      {/* Add Admin Modal Start */}
      <dialog id="addadmindata" className="modal">
        <div className="modal-box" style={{ width: '900px', height: '400px' }}>
          <div className="flex justify-between border-2 border-black p-2">
            <h1 className="font-bold">Add New Admin</h1>
            <div className="flex gap-2 text-sm font-bold">
              <span
                onClick={() => document.getElementById('addadmindata').close()}
                className="cursor-pointer text-lg ">
                X
              </span>
            </div>
          </div>

          <div>{/* Form elements can go here */}</div>
        </div>
      </dialog>
      {/* Add Admin Modal End */}
      </aside>
  );
};

export default Sidebar;
