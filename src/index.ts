import isElectron from './utils/isElectron';
import * as parseIngredients from './ingredientParser';
import * as recipeService from './recipeService';
import * as shoppingListService from './shoppingListService';
import * as weekService from './weekService';

console.log(isElectron());

console.log('test');
export {
  parseIngredients,
  recipeService,
  shoppingListService,
  weekService,
};
