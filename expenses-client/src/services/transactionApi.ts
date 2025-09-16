import api from "./api";
import type { Transaction } from "../model/Transaction";


export const createTransaction = async (transactionData: Omit<Transaction, 'transaction_id' | 'created_at' | 'category_name' | 'category_type' | 'username'>): Promise<Transaction> => {
    try {
        const response = await api.post<Transaction>('transactions/new', transactionData);
        return response.data;
    } catch (error) {
        console.error("Error creating transaction: ", error);
        throw error;
    }
};

export const allTransactions = async (userId: number): Promise<Transaction[]> => {
    try {
        const response = await api.get<Transaction[]>(`/transactions/get/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch transactions: ', error);
        throw error;
    }
};