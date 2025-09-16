import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import { Outlet } from "react-router-dom";
import type { Transaction } from "./model/Transaction";
import { useEffect, useState } from "react";
import { allTransactions } from "./services/transactionApi";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("September 2025");

  useEffect(() => {
    allTransactions(1).then(data => {
      setTransactions(data);
      console.log(data);
    }).catch(error => {
      throw error;
    })
  }, []);
  
  return (
    <div className="max-w-lg mx-auto min-h-screen bg-gray-50 px-2 fixed inset-0">
      <Header />
      <Outlet context={{
        transactions,
        setTransactions,
        selectedMonth,
        setSelectedMonth
      }} />
      <BottomNav />
    </div>
  );
}

export const user_id = 1;

export default App;