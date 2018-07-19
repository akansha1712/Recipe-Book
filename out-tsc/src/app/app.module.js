"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var recipe_component_1 = require("./recipe/recipe.component");
var header_component_1 = require("./header/header.component");
var recipe_list_component_1 = require("./recipe/recipe-list/recipe-list.component");
var recipe_detail_component_1 = require("./recipe/recipe-detail/recipe-detail.component");
var recipe_item_component_1 = require("./recipe/recipe-list/recipe-item/recipe-item.component");
var shopping_list_component_1 = require("./shopping-list/shopping-list.component");
var shopping_list_edit_component_1 = require("./shopping-list/shopping-list-edit/shopping-list-edit.component");
var home_component_1 = require("./home/home.component");
var recipe_start_component_1 = require("./recipe/recipe-start/recipe-start.component");
var dropdown_directive_1 = require("./shared/dropdown.directive");
var shopping_service_1 = require("./shopping-list/shopping.service");
var recipe_edit_component_1 = require("./recipe/recipe-edit/recipe-edit.component");
var recipe_service_1 = require("./recipe/recipe.service");
var http_1 = require("@angular/http");
var sign_up_component_1 = require("./auth/sign-up/sign-up.component");
var sign_in_component_1 = require("./auth/sign-in/sign-in.component");
var auth_service_1 = require("./auth/auth.service");
var auth_guard_service_1 = require("./auth/auth-guard.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                recipe_component_1.RecipeComponent,
                header_component_1.HeaderComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_detail_component_1.RecipeDetailComponent,
                recipe_item_component_1.RecipeItemComponent,
                shopping_list_component_1.ShoppingListComponent,
                shopping_list_edit_component_1.ShoppingListEditComponent,
                home_component_1.HomeComponent,
                recipe_start_component_1.RecipeStartComponent,
                dropdown_directive_1.DropdownDirective,
                recipe_edit_component_1.RecipeEditComponent,
                sign_up_component_1.SignUpComponent,
                sign_in_component_1.SignInComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [shopping_service_1.ShoppingService, recipe_service_1.RecipeService, auth_service_1.AuthService, auth_guard_service_1.AuthGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map