import api from './api';

export interface Category {
  category_id: number;
  user_id: number;
  name: string;
  type: string;
}

export const getAllCategories = async (id: number): Promise<Category[]> => {
  try {
    const response = await api.get<Category[]>(`/categories/get/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch categories: ', error);
    throw error;
  }
};