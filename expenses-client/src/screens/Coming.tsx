import React from "react";
import { HiOutlineSparkles } from "react-icons/hi2";

const Coming: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white/80 rounded-xl shadow-md p-8 flex flex-col items-center max-w-xs w-full">
        <HiOutlineSparkles className="w-16 h-16 text-blue-400 mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Coming Soon</h2>
        <p className="text-gray-500 text-center mb-4">
          This feature is under development.<br />Please check back later!
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold mt-2 transition"
          disabled
        >
          Stay Tuned
        </button>
      </div>
    </div>
  );
};

export default Coming;