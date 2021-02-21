"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalRecipesDesktop = void 0;
var tslib_1 = require("tslib");
var electron_1 = require("electron");
var fs_1 = require("fs");
var LocalRecipesDesktop = /** @class */ (function () {
    function LocalRecipesDesktop() {
        this.recipes = [];
        this.appPath = electron_1.app.getPath('appData');
        this.pathToRecipes = this.appPath + "/recipes";
        this.readRecipes();
    }
    LocalRecipesDesktop.prototype.readRecipes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var recipesAsString;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_1.promises.readFile(this.pathToRecipes)];
                    case 1:
                        recipesAsString = _a.sent();
                        this.recipes = JSON.parse(recipesAsString.toString());
                        return [2 /*return*/];
                }
            });
        });
    };
    LocalRecipesDesktop.prototype.getRecipes = function () {
        return this.recipes;
    };
    LocalRecipesDesktop.prototype.addRecipe = function (recipe) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.recipes.push(recipe);
                        return [4 /*yield*/, fs_1.promises.writeFile(this.pathToRecipes, JSON.stringify(this.recipes))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LocalRecipesDesktop.prototype.getRecipeById = function (id) {
        var foundRecipe = this.recipes.find(function (recipe) { return recipe.id === id; });
        return foundRecipe;
    };
    LocalRecipesDesktop.prototype.deleteRecipe = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var recipesWithoutReipceToDelete;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        recipesWithoutReipceToDelete = this.recipes.filter(function (recipe) { return recipe.id === id; });
                        return [4 /*yield*/, fs_1.promises.writeFile(this.pathToRecipes, JSON.stringify(recipesWithoutReipceToDelete))];
                    case 1:
                        _a.sent();
                        this.recipes = recipesWithoutReipceToDelete;
                        return [2 /*return*/];
                }
            });
        });
    };
    return LocalRecipesDesktop;
}());
exports.LocalRecipesDesktop = LocalRecipesDesktop;
//# sourceMappingURL=LocalRecipesDesktop.js.map