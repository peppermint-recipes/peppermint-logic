import { Recipe } from 'types/recipe';
import { LocalRecipesDesktop } from './LocalRecipesDesktop';
export declare class RecipeService {
    private localRecipesDesktop;
    constructor(localRecipes: LocalRecipesDesktop);
    createRecipe(recipe: Recipe): Promise<Recipe>;
    getAllRecipes(): Array<Recipe>;
    getRecipeById(id: string): Recipe | undefined;
    deleteRecipe(id: string): Promise<void>;
}
