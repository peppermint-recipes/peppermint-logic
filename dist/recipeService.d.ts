import { Recipe } from 'types/recipe';
export declare const createRecipe: (recipe: Recipe) => Promise<Recipe>;
export declare const getAllRecipes: () => Promise<Array<Recipe>>;
export declare const getRecipeById: (id: string) => Promise<Recipe>;
export declare const deleteRecipe: (id: string) => Promise<boolean>;
