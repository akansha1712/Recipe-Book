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
var core_1 = require("@angular/core");
var recipe_service_1 = require("../recipe/recipe.service");
var auth_service_1 = require("../auth/auth.service");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(recipeService, authService) {
        this.recipeService = recipeService;
        this.authService = authService;
    }
    HeaderComponent.prototype.saveRecipeClicked = function () {
        this.recipeService.saveRecipe()
            .subscribe(function (response) {
            console.log(response);
        }, function (error) { console.log(error); });
    };
    HeaderComponent.prototype.fetchRecipeClicked = function () {
        var _this = this;
        this.recipeService.fetchRecipe()
            .subscribe(function (recipes) {
            console.log(recipes);
            _this.recipeService.setRecipes(recipes);
            // this.recipeService.getRecipes()=recipes;
        }, function (error) { console.log(error); });
    };
    HeaderComponent.prototype.logOut = function () {
        this.authService.logOut();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        __metadata("design:paramtypes", [recipe_service_1.RecipeService, auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map