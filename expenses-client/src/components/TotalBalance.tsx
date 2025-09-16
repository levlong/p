import React from "react";
import type { Transaction } from "../model/Transaction";


interface Props {
  transactions: Transaction[];
}

const TotalBalance: React.FC<Props> = ({ transactions }) => {
  const total = transactions.reduce((sum, e) => {
    // Convert string to number and fallback to 0 for invalid values
    const amt = typeof e.amount === "number" ? e.amount : Number(e.amount);
    return sum + (isNaN(amt) ? 0 : amt);
  }, 0);

  return (
    <div className="text-xl font-bold bg-blue-50 p-4 rounded-xl mb-4 text-center shadow-sm">
      ₫{total.toLocaleString()}
      <span className="text-sm font-normal text-gray-500 ml-2">This Month</span>
    </div>
  );
};

export default TotalBalance;