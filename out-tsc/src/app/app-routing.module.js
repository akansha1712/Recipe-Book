"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var recipe_component_1 = require("./recipe/recipe.component");
var recipe_detail_component_1 = require("./recipe/recipe-detail/recipe-detail.component");
var shopping_list_component_1 = require("./shopping-list/shopping-list.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var recipe_start_component_1 = require("./recipe/recipe-start/recipe-start.component");
var recipe_edit_component_1 = require("./recipe/recipe-edit/recipe-edit.component");
var sign_in_component_1 = require("./auth/sign-in/sign-in.component");
var sign_up_component_1 = require("./auth/sign-up/sign-up.component");
var auth_guard_service_1 = require("./auth/auth-guard.service");
var appRoutes = [
    { path: 'register', component: sign_up_component_1.SignUpComponent },
    { path: 'login', component: sign_in_component_1.SignInComponent },
    { path: 'recipe', canActivate: [auth_guard_service_1.AuthGuard], component: recipe_component_1.RecipeComponent,
        children: [
            { path: '', component: recipe_start_component_1.RecipeStartComponent },
            { path: 'new', component: recipe_edit_component_1.RecipeEditComponent },
            { path: ':id', component: recipe_detail_component_1.RecipeDetailComponent },
            { path: ':id/edit', component: recipe_edit_component_1.RecipeEditComponent }
        ]
    },
    { path: 'shopping', canActivate: [auth_guard_service_1.AuthGuard], component: shopping_list_component_1.ShoppingListComponent },
    { path: '', component: home_component_1.HomeComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map