"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ingredient_model_1 = require("../shared/ingredient.model");
var rxjs_1 = require("rxjs");
var ShoppingService = /** @class */ (function () {
    function ShoppingService() {
        this.ingredientsChanged = new rxjs_1.Subject();
        this.startedEditing = new rxjs_1.Subject();
        this.index = -1;
        this.ingredients = [
            new ingredient_model_1.Ingredient("Potatoes", 200),
            new ingredient_model_1.Ingredient("Sour cream.", 2),
            new ingredient_model_1.Ingredient("Flour", 2000),
            new ingredient_model_1.Ingredient("Garlic Powder", 5)
        ];
    }
    ShoppingService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingService.prototype.addIngredients = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingService.prototype.updateIngredient = function (newIngredient, index) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingService.prototype.deleteIngredients = function (editedItemIndex) {
        this.ingredients.splice(editedItemIndex, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingService.prototype.addIngredientFromRecipeManage = function (ingredient) {
        (_a = this.ingredients).push.apply(_a, ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
        var _a;
    };
    return ShoppingService;
}());
exports.ShoppingService = ShoppingService;
//# sourceMappingURL=shopping.service.js.map