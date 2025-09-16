export type Transaction = {
    transaction_id: number;
    amount: number;
    description: string;
    created_at: string;
    category_id: number;
    category_name: string;
    category_type: string;
    user_id: number;
    username: string;
}