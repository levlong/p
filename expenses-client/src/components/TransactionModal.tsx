import React, { useState, useEffect } from 'react';
import { getAllCategories, type Category } from '../services/categoryApi';
import { user_id as USER_ID } from '../App';

export interface TransactionFormData {
  user_id: number;
  category_id: number;
  description: string;
  amount: string;
}

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TransactionFormData) => void;
}

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const initialFormState: TransactionFormData = {
    user_id: USER_ID,
    category_id: 0,
    description: '',
    amount: '',
  };

  const [formData, setFormData] = useState<TransactionFormData>(initialFormState);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      getAllCategories(1)
        .then(data => {
          setCategories(data);
          // console.log(data);
          if (data.length > 0) {
            setFormData(prev => ({ ...prev, category_id: data[0].category_id }));
          }
        })
        .catch(error => {
          console.error("Failed to load categories:", error);
          alert("Could not load categories. Please try again.");
        })
        .finally(() => setIsLoading(false));
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.category_id || !formData.description || !formData.amount) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit(formData);
    // console.log(formData);
    setFormData(initialFormState);
    onClose(); // Đóng modal
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 backdrop-blur-sm z-50 flex justify-center items-center px-2"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Add New Expense</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category_id"
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              disabled={isLoading}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {isLoading ? (
                <option>Loading...</option>
              ) : (
                // Render động các option từ state `categories`
                categories.map((cat, index) => (
                  <option key={index} value={cat.category_id}>
                    {cat.name}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g., Lunch with colleagues"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Amount */}
          <div className="mb-6">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Action buttons */}
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;