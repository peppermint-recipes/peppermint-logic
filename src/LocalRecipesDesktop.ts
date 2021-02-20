import { app } from 'electron';
import { Recipe } from 'types/recipe';
import { promises as filesystem } from 'fs';

export class LocalRecipesDesktop {
  private appPath: string;

  private pathToRecipes: string;

  private recipes: Recipe[] = [];

  constructor() {
    this.appPath = app.getPath('appData');
    this.pathToRecipes = `${this.appPath}/recipes`;
    this.readRecipes();
  }

  private async readRecipes() {
    const recipesAsString = await filesystem.readFile(this.pathToRecipes);
    this.recipes = JSON.parse(recipesAsString.toString());
  }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public async addRecipe(recipe: Recipe): Promise<void> {
    this.recipes.push(recipe);
    await filesystem.writeFile(this.pathToRecipes, JSON.stringify(this.recipes));
  }

  public getRecipeById(id: string): Recipe | undefined {
    const foundRecipe = this.recipes.find((recipe) => recipe.id === id);
    return foundRecipe;
  }

  public async deleteRecipe(id: string): Promise<void> {
    const recipesWithoutReipceToDelete = this.recipes.filter(
      (recipe) => recipe.id === id,
    );
    await filesystem.writeFile(this.pathToRecipes, JSON.stringify(recipesWithoutReipceToDelete));
    this.recipes = recipesWithoutReipceToDelete;
  }
}
