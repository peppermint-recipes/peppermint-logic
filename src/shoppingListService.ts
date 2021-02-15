import { AxiosResponse } from 'axios';
import { Recipe } from 'types/recipe';
import { http } from './api/axios';

export const getItems = async (): Promise<Array<Recipe>> => {
  const response = await http.get('/shoppingList');

  return response.data;
};

export const addItem = async (recipe: Recipe): Promise<Recipe> => {
  const response = await http.post('/shoppingList', recipe);

  return response.data;
};

export const addItems = async (recipes: Array<Recipe>): Promise<Array<Recipe>> => {
  const filteredRecipes = recipes.filter((recipe) => recipe.id);

  // const promises = filteredRecipes.map((recipe: Recipe) => addItem(recipe));

  const promises: Array<Promise<Recipe>> = filteredRecipes.map(
    async (recipe: Recipe): Promise<Recipe> => {
      const response = await addItem(recipe);
      return response;
    },
  );
  return Promise.all(promises);
};

export const removeItem = async (id: string): Promise<boolean> => {
  const response = await http.delete(`/shoppingList/${id}`);

  return response.status === 200;
};

export const removeAllItems = async (): Promise<boolean> => {
  const recipeResponse = await http.get('/shoppingList');
  const recipes = recipeResponse.data;
  const promises: Array<Promise<AxiosResponse<unknown>>> = recipes.map(
    async (recipe: Recipe): Promise<AxiosResponse<unknown>> => {
      const response = await http.delete(`/shoppingList/${recipe.id}`);
      return response;
    },
  );
  const resolved = await Promise.all(
    promises,
  );

  const responseWithoutOk = resolved.find((response) => response && (response.status === 200));

  return !!responseWithoutOk;
};
