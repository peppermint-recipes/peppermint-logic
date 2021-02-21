"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipe = exports.getRecipeById = exports.getAllRecipes = exports.createRecipe = void 0;
var tslib_1 = require("tslib");
var createRecipe = function (recipe) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var createdRecipe;
    return tslib_1.__generator(this, function (_a) {
        createdRecipe = tslib_1.__assign(tslib_1.__assign({}, recipe), { id: '1' });
        return [2 /*return*/, createdRecipe];
    });
}); };
exports.createRecipe = createRecipe;
var getAllRecipes = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/, [
                {
                    calories: 520,
                    name: 'Test1',
                    yield: 2,
                    activeTime: '1h',
                    totalTime: '1,5h',
                    ingredients: '1 Banana',
                    instructions: '1.: cook',
                    id: '1',
                },
                {
                    calories: 671,
                    name: 'Test2',
                    yield: 1,
                    activeTime: '30 min',
                    totalTime: '1h',
                    ingredients: '1 Banana',
                    instructions: '1.: cook',
                    id: '2',
                },
                {
                    calories: 52,
                    name: 'Test3',
                    yield: 5,
                    activeTime: '5 min',
                    totalTime: '129 min',
                    ingredients: '1 Banana',
                    instructions: '1.: cook',
                    id: '3',
                },
                {
                    calories: 1873,
                    name: 'Test4',
                    yield: 12,
                    activeTime: '1h',
                    totalTime: '1h',
                    ingredients: '1 Banana',
                    instructions: '1.: cook',
                    id: '4',
                },
                {
                    calories: 3,
                    name: 'Test5',
                    yield: 14,
                    activeTime: '2h',
                    totalTime: '3h',
                    ingredients: '1 Banana',
                    instructions: '1.: cook',
                    id: '5',
                },
            ]];
    });
}); };
exports.getAllRecipes = getAllRecipes;
var getRecipeById = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/, ({
                calories: 420,
                name: 'Test1',
                yield: 2,
                activeTime: '20 min',
                totalTime: '1h',
                ingredients: '1 Banana',
                instructions: '1.: cook',
                id: id,
            })];
    });
}); };
exports.getRecipeById = getRecipeById;
var deleteRecipe = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2 /*return*/, "deleted " + id];
}); }); };
exports.deleteRecipe = deleteRecipe;
//# sourceMappingURL=recipeService.js.map