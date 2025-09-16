import React from "react";
import TransactionItem from "./TransactionItem";
import type { Transaction } from "../model/Transaction";

interface Props {
  transactions: Transaction[];
  onEdit: (id: number) => void;
}

const TransactionsList: React.FC<Props> = ({ transactions, onEdit }) => (
  <div className="bg-white rounded-lg shadow-sm px-2 h-80 overflow-y-auto">
    {transactions.map((transaction, index) => (
      <TransactionItem key={index} transaction={transaction} onEdit={onEdit} />
    ))}
  </div>
);

export default TransactionsList;