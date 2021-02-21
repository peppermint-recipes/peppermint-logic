"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
var tslib_1 = require("tslib");
var isElectron_1 = tslib_1.__importDefault(require("./utils/isElectron"));
var RecipeService = /** @class */ (function () {
    function RecipeService(localRecipes) {
        this.localRecipesDesktop = localRecipes;
    }
    RecipeService.prototype.createRecipe = function (recipe) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!isElectron_1.default()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.localRecipesDesktop.addRecipe(recipe)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, recipe];
                    case 2: throw new Error('Unknown Environment');
                }
            });
        });
    };
    RecipeService.prototype.getAllRecipes = function () {
        if (isElectron_1.default()) {
            return this.localRecipesDesktop.getRecipes();
        }
        throw new Error('Unknown Wnvironment');
    };
    RecipeService.prototype.getRecipeById = function (id) {
        if (isElectron_1.default()) {
            return this.localRecipesDesktop.getRecipeById(id);
        }
        throw new Error('Unknown Wnvironment');
    };
    RecipeService.prototype.deleteRecipe = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (isElectron_1.default()) {
                    return [2 /*return*/, this.localRecipesDesktop.deleteRecipe(id)];
                }
                throw new Error('Unknown Wnvironment');
            });
        });
    };
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipeService.js.map