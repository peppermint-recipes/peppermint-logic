import { Recipe } from 'types/recipe';
import isElectron from './utils/isElectron';
import { LocalRecipesDesktop } from './LocalRecipesDesktop';

export class RecipeService {
  private localRecipesDesktop: LocalRecipesDesktop;

  constructor(localRecipes: LocalRecipesDesktop) {
    this.localRecipesDesktop = localRecipes;
  }

  public async createRecipe(recipe: Recipe): Promise<Recipe> {
    if (isElectron()) {
      await this.localRecipesDesktop.addRecipe(recipe);
      return recipe;
    }

    throw new Error('Unknown Environment');
  }

  public getAllRecipes(): Array<Recipe> {
    if (isElectron()) {
      return this.localRecipesDesktop.getRecipes();
    }

    throw new Error('Unknown Wnvironment');
  }

  public getRecipeById(id: string): Recipe | undefined {
    if (isElectron()) {
      return this.localRecipesDesktop.getRecipeById(id);
    }

    throw new Error('Unknown Wnvironment');
  }

  public async deleteRecipe(id: string): Promise<void> {
    if (isElectron()) {
      return this.localRecipesDesktop.deleteRecipe(id);
    }

    throw new Error('Unknown Wnvironment');
  }
}
