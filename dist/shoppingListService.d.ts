import { Recipe } from 'types/recipe';
export declare const getItems: () => Promise<Array<Recipe>>;
export declare const addItem: (recipe: Recipe) => Promise<Recipe>;
export declare const addItems: (recipes: Array<Recipe>) => Promise<Array<Recipe>>;
export declare const removeItem: (id: string) => Promise<boolean>;
export declare const removeAllItems: () => Promise<boolean>;
