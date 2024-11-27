import React, { useState } from 'react';
import { FaSearch, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';

const DashboardHeader = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex items-center justify-between p-4 bg-gray-800 relative overflow-x-hidden">
            <div className="flex items-center space-x-2 w-full max-w-md">
                <FaSearch className="text-gray-500" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-700 text-white w-full py-2 px-4 rounded-md focus:outline-none"
                />
            </div>
            <div className="flex items-center space-x-4">
                <FaUserCircle className="text-2xl text-white" />
                <button onClick={toggleSidebar} className="text-2xl text-white">
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default DashboardHeader;
