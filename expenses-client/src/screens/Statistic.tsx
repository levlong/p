import React from "react";

const mockStats = [
  { label: "Total Transactions", value: 248 },
  { label: "Total Spent", value: "₫120,000,000" },
  { label: "Biggest Expense", value: "₫5,000,000" },
  { label: "Average Expense", value: "₫483,870" },
  { label: "Most Used Category", value: "Food & Drink" },
];

const Statistic: React.FC = () => {
  return (
    <div className="bg-white/80 rounded-xl shadow-md p-6 mt-4 mb-16">
      <h2 className="text-xl font-semibold text-center mb-2 text-gray-900">Statistics</h2>
      <p className="text-gray-500 text-center mb-6">Your financial summary for this month</p>
      <div className="divide-y divide-gray-200">
        {mockStats.map((stat, idx) => (
          <div key={idx} className="flex justify-between items-center py-3">
            <span className="text-gray-600">{stat.label}</span>
            <span className="font-medium text-blue-600">{stat.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        {/* Example mini chart bar for illustration */}
        <div className="text-gray-700 mb-2 font-semibold text-sm">Expense Distribution</div>
        <div className="flex space-x-2 h-4">
          <div className="bg-blue-500 rounded-l-full w-2/5"></div>
          <div className="bg-green-400 w-1/5"></div>
          <div className="bg-yellow-400 w-1/5"></div>
          <div className="bg-red-400 rounded-r-full w-1/5"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
          <span>Food</span>
          <span>Travel</span>
          <span>Utilities</span>
          <span>Others</span>
        </div>
      </div>
    </div>
  );
};

export default Statistic;