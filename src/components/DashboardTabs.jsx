// components/Tabs.js
import React from 'react';

const categories = ['Recommended', 'Trending', 'New movies', 'Action', 'Comedy'];

const DashboardTabs = () => {
    return (
        <div className="flex overflow-x-auto space-x-4 p-4 bg-gray-900">
        {categories.map((category, index) => (
            <button
            key={index}
            className="text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none whitespace-nowrap"
            >
            {category}
            </button>
        ))}
        </div>
    );
};

export default DashboardTabs;
