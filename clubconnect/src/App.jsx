import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Use React's useState hook to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to close the dropdown if clicked outside
  const handleOutsideClick = (e) => {
    const dropdown = document.getElementById('user-dropdown');
    const button = document.getElementById('user-menu-button');
    if (
      dropdown && !dropdown.contains(e.target) &&
      button && !button.contains(e.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  // Attach event listener on mount and remove on unmount
  React.useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  //Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  React.useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isSidebarOpen && !e.target.closest('#sidebar') && !e.target.closest('#toggle-sidebar')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSidebarOpen]);




  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Heading with Image</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.0/dist/tailwind.min.css" rel="stylesheet" />
      </head>

      <header className="fixed top-0 left-0 w-full p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="relative text-2xl ml-12 font-semibold text-gray-800">Club Connect</h1>
        <button
          type="button"
          className="absolute right-0 pr-5"
          id="user-menu-button"
          onClick={toggleDropdown} // Toggle dropdown on click
        >
          <img src="/public/cat prof.jpg" alt="Profile Image" className="w-10 h-10 rounded-full" />
        </button>

        {/* Dropdown menu */}
        <div
          className={`top-full z-50 absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 ${isDropdownOpen ? '' : 'hidden'}`}
          id="user-dropdown"
        >
          <div className="px-4 py-2">
            <span className="block text-sm text-gray-900 dark:text-white">John Doe</span>
            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">john.doe@example.com</span>
          </div>
          <ul className="py-2">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Sign out
              </a>
            </li>
          </ul>
        </div>


        <button
          id="toggle-sidebar"
          className="fixed mb-8 ml-2 left-0 m-0 p-2 bg-white-500 text-black rounded text-5xl w-15 h-15"
          onClick={toggleSidebar}
        >
          ...
        </button>
      </header>


      <body class=" flex w-screen h-screen m-0 p-0">




        <div
          id="sidebar"
          className={`fixed inset-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 p-4`}
        >
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul>
            <li><a href="#" className="block py-2">Home</a></li>
            <li><a href="#" className="block py-2">Explore</a></li>
            <li><a href="#" className="block py-2">Messages</a></li>
          </ul>
        </div>


      </body>




    </>
  )
}

export default App
