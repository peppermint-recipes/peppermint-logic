interface Ingredient {
    amount: string;
    unit: string;
    ingredient: string;
}
declare const parseIngredients: (ingredientsString: string) => Array<Ingredient>;
export { parseIngredients, Ingredient };
