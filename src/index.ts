import { LocalRecipesDesktop } from './LocalRecipesDesktop';
import * as parseIngredients from './ingredientParser';
import { RecipeService } from './recipeService';
import * as shoppingListService from './shoppingListService';
import * as weekService from './weekService';

const localRecipesDesktop = new LocalRecipesDesktop();
const recipeService = new RecipeService(localRecipesDesktop);

export {
  parseIngredients,
  recipeService,
  shoppingListService,
  weekService,
};
