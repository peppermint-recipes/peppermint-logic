import { Recipe } from 'types/recipe';
export declare class LocalRecipesDesktop {
    private appPath;
    private pathToRecipes;
    private recipes;
    constructor();
    private readRecipes;
    getRecipes(): Recipe[];
    addRecipe(recipe: Recipe): Promise<void>;
    getRecipeById(id: string): Recipe | undefined;
    deleteRecipe(id: string): Promise<void>;
}
