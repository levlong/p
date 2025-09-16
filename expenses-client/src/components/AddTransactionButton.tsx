import React, { useState } from "react";
import type { Transaction } from "../model/Transaction";
import TransactionModal, { type TransactionFormData } from "./TransactionModal";
import { createTransaction } from "../services/transactionApi";

interface Props {
  onAdd: (transaction: Transaction) => void;
}

const AddTransactionButton: React.FC<Props> = ({ onAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = async (formData: TransactionFormData) => {
    const newTransactionData: Omit<Transaction, 'transaction_id' | 'created_at' | 'category_name' | 'username' | 'category_type'> = {
      user_id: formData.user_id,
      category_id: formData.category_id,
      description: formData.description,
      amount: parseFloat(formData.amount),
    };

    try {
      const createdTransaction = await createTransaction(newTransactionData);
      onAdd(createdTransaction); // Update parent state/list
      setIsModalOpen(false);     // Close modal
    } catch (err) {
      alert("Could not add transaction.");
    }

  };

  return (
    <>
      {/* Open Modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full p-2 bg-blue-500 text-white font-bold text-lg rounded-lg mb-4 hover:bg-blue-600 transition"
      >
        + Add Transaction
      </button>

      {/* Render Modal */}
      <TransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default AddTransactionButton;