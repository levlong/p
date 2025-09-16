import React from "react";

interface Props {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
}

const MonthSelector: React.FC<Props> = ({ selectedMonth }) => (
  <div className="mt-2 mb-4 flex items-center font-semibold text-gray-700">
    <span>{selectedMonth}</span>
    <span className="ml-2 text-gray-400">▼</span>
  </div>
);

export default MonthSelector;