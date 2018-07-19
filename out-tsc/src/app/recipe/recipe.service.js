"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var recipe_model_1 = require("./recipe.model");
var core_1 = require("@angular/core");
var ingredient_model_1 = require("../shared/ingredient.model");
var shopping_service_1 = require("../shopping-list/shopping.service");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var auth_service_1 = require("../auth/auth.service");
var RecipeService = /** @class */ (function () {
    function RecipeService(shoppingService, http, authService) {
        this.shoppingService = shoppingService;
        this.http = http;
        this.authService = authService;
        this.recipesChanged = new rxjs_1.Subject();
        this.recipes = [
            new recipe_model_1.Recipe("Potato Tartlets", "It's Potato time", "https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg", [
                new ingredient_model_1.Ingredient('Potatoes', 20),
                new ingredient_model_1.Ingredient('Fries', 10)
            ]),
            new recipe_model_1.Recipe("FoolProof Pan Pizza", "Hey,It's Pizza time", "https://www.seriouseats.com/2013/01/20160503-cast-iron-pizza.jpg", [
                new ingredient_model_1.Ingredient('cheese', 2),
                new ingredient_model_1.Ingredient('origano', 5)
            ])
        ];
    }
    RecipeService.prototype.setRecipes = function (recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.getRecipeByIndex = function (index) {
        return this.recipes.slice()[index];
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredient) {
        this.shoppingService.addIngredientFromRecipeManage(ingredient);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.saveRecipe = function () {
        var token = this.authService.getToken();
        return this.http.put(' https://recipe-book-2b285.firebaseio.com/data.json?auth=' + token, this.recipes);
    };
    RecipeService.prototype.fetchRecipe = function () {
        var token = this.authService.getToken();
        return this.http.get('https://recipe-book-2b285.firebaseio.com/data.json?auth=' + token)
            .map(function (reponse) {
            var data = reponse.json();
            return data;
        });
    };
    RecipeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [shopping_service_1.ShoppingService, http_1.Http, auth_service_1.AuthService])
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map