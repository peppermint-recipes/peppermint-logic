"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekService = exports.shoppingListService = exports.recipeService = exports.parseIngredients = void 0;
var tslib_1 = require("tslib");
var LocalRecipesDesktop_1 = require("./LocalRecipesDesktop");
var parseIngredients = tslib_1.__importStar(require("./ingredientParser"));
exports.parseIngredients = parseIngredients;
var recipeService_1 = require("./recipeService");
var shoppingListService = tslib_1.__importStar(require("./shoppingListService"));
exports.shoppingListService = shoppingListService;
var weekService = tslib_1.__importStar(require("./weekService"));
exports.weekService = weekService;
var localRecipesDesktop = new LocalRecipesDesktop_1.LocalRecipesDesktop();
var recipeService = new recipeService_1.RecipeService(localRecipesDesktop);
exports.recipeService = recipeService;
//# sourceMappingURL=index.js.map