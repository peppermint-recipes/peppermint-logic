"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllItems = exports.removeItem = exports.addItems = exports.addItem = exports.getItems = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("./api/axios");
var getItems = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.http.get('/shoppingList')];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
exports.getItems = getItems;
var addItem = function (recipe) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.http.post('/shoppingList', recipe)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
exports.addItem = addItem;
var addItems = function (recipes) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var filteredRecipes, promises;
    return tslib_1.__generator(this, function (_a) {
        filteredRecipes = recipes.filter(function (recipe) { return recipe.id; });
        promises = filteredRecipes.map(function (recipe) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.addItem(recipe)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); });
        return [2 /*return*/, Promise.all(promises)];
    });
}); };
exports.addItems = addItems;
var removeItem = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.http.delete("/shoppingList/" + id)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.status === 200];
        }
    });
}); };
exports.removeItem = removeItem;
var removeAllItems = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var recipeResponse, recipes, promises, resolved, responseWithoutOk;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.http.get('/shoppingList')];
            case 1:
                recipeResponse = _a.sent();
                recipes = recipeResponse.data;
                promises = recipes.map(function (recipe) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                    var response;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, axios_1.http.delete("/shoppingList/" + recipe.id)];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response];
                        }
                    });
                }); });
                return [4 /*yield*/, Promise.all(promises)];
            case 2:
                resolved = _a.sent();
                responseWithoutOk = resolved.find(function (response) { return response && (response.status === 200); });
                return [2 /*return*/, !!responseWithoutOk];
        }
    });
}); };
exports.removeAllItems = removeAllItems;
//# sourceMappingURL=shoppingListService.js.map