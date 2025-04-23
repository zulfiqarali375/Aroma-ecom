import React from "react";

const TopBar = () => {
  return (
    <>
      <div className="hidden lg:flex w-full h-9 bg-black items-center justify-center text-gray-300 text-md">
        <div className="w-[92%] h-full flex justify-between items-center px-4">
          <div className="text-white-800 text-shippping">
            Free shipping for standard order over $100
          </div>

          <div className="flex items-center space-x-1">
            <hr className="h-8 border-l border-gray-400" />
            <p className="topbar-spaces transition duration-200 px-4 hover:text-blue-600">
              Help & FAQs
            </p>
            <hr className="h-8 border-l border-gray-400" />
            <p className="topbar-spaces transition duration-200 px-4 hover:text-blue-600">
              My Account
            </p>
            <hr className="h-8 border-l border-gray-400" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
