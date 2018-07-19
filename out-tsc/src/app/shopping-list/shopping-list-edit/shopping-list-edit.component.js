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
var ingredient_model_1 = require("../../shared/ingredient.model");
var shopping_service_1 = require("../shopping.service");
var forms_1 = require("@angular/forms");
var ShoppingListEditComponent = /** @class */ (function () {
    function ShoppingListEditComponent(shoppingService) {
        this.shoppingService = shoppingService;
        this.editMode = false;
        this.ingredientDeleted = new core_1.EventEmitter();
    }
    ShoppingListEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.shoppingService.startedEditing
            .subscribe(function (i) {
            _this.editMode = true;
            _this.editedItemIndex = i;
            _this.editedItem = _this.shoppingService.getIngredient(i);
            _this.form.setValue({
                ingName: _this.editedItem.name,
                ingAmount: _this.editedItem.amount
            });
        });
    };
    ShoppingListEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingListEditComponent.prototype.addIngredient = function () {
        var value = this.form.value;
        if (value.ingName && value.ingAmount) {
            var newIngredient = new ingredient_model_1.Ingredient(value.ingName, value.ingAmount);
            if (this.editMode) {
                this.shoppingService.updateIngredient(newIngredient, this.editedItemIndex);
            }
            else
                this.shoppingService.addIngredients(newIngredient);
        }
        this.editMode = false;
        this.form.reset();
    };
    ShoppingListEditComponent.prototype.delIngredient = function () {
        this.shoppingService.deleteIngredients(this.editedItemIndex);
        this.editMode = false;
        this.form.reset();
    };
    ShoppingListEditComponent.prototype.clearIngredient = function () {
        this.editMode = false;
        this.form.reset();
    };
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", forms_1.NgForm)
    ], ShoppingListEditComponent.prototype, "form", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ShoppingListEditComponent.prototype, "ingredientDeleted", void 0);
    ShoppingListEditComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-list-edit',
            templateUrl: './shopping-list-edit.component.html',
            styleUrls: ['./shopping-list-edit.component.css']
        }),
        __metadata("design:paramtypes", [shopping_service_1.ShoppingService])
    ], ShoppingListEditComponent);
    return ShoppingListEditComponent;
}());
exports.ShoppingListEditComponent = ShoppingListEditComponent;
//# sourceMappingURL=shopping-list-edit.component.js.map