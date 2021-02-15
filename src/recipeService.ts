import { Recipe } from 'types/recipe';
import { http } from './api/axios';

export const createRecipe = async (recipe: Recipe): Promise<Recipe> => {
  const response = await http.post('/recipes', recipe);

  return response.data;
};

export const getAllRecipes = async (): Promise<Array<Recipe>> => {
  const response = await http.get('/recipes');

  return response.data;
};

export const getRecipeById = async (id: string): Promise<Recipe> => {
  const response = await http.get(`/recipes/${id}`);

  return response.data;
};

export const deleteRecipe = async (id: string): Promise<boolean> => {
  const response = await http.delete(`/recipes/${id}`);

  return response.status === 200;
};
