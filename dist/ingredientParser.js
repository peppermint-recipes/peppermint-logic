"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIngredients = void 0;
var parseIngredients = function (ingredientsString) {
    var ingredients = [];
    var ingredientLines = ingredientsString.split('\n');
    ingredients = ingredientLines.map(function (line) {
        var copy = line;
        var parsedIngredient = {
            amount: '',
            unit: '',
            ingredient: '',
        };
        var amountRegex = new RegExp(/(\d)+(\s?\d)*(\d|\.|\/)*/);
        var match = copy.match(amountRegex);
        if (match) {
            var amount = match[0];
            parsedIngredient.amount = amount;
            var lineWithoutAmount = copy.replace(amountRegex, '');
            copy = lineWithoutAmount.trim();
        }
        var units = ['EL', 'TL', 'CUPS', 'CUP', 'G', 'ML'];
        var regexBuilder = function (string) { return "((\\W|^)" + string + "(?=\\W))"; };
        var test = units.reduce(function (string, unit) { return string.concat("|" + regexBuilder(unit)); }, regexBuilder(units[0]));
        var unitRegex = new RegExp(test, 'i');
        var unitMatch = copy.match(unitRegex);
        if (unitMatch) {
            var unit = unitMatch[0];
            parsedIngredient.unit = unit.trim();
            var lineWithoutUnit = copy.replace(unit, '');
            copy = lineWithoutUnit.trim();
        }
        parsedIngredient.ingredient = copy;
        return parsedIngredient;
    });
    return ingredients;
};
exports.parseIngredients = parseIngredients;
//# sourceMappingURL=ingredientParser.js.map