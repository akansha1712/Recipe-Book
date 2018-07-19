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
var shopping_service_1 = require("./shopping.service");
var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(shoppingService) {
        this.shoppingService = shoppingService;
        this.indexClicked = new core_1.EventEmitter();
        this.indexclick = -1;
        this.rowText = "";
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.shoppingService.getIngredients();
        this.shoppingService.ingredientsChanged
            .subscribe(function (ingredient) {
            _this.ingredients = ingredient;
        });
    };
    ShoppingListComponent.prototype.onEditItem = function (i) {
        this.indexclick = i;
        this.shoppingService.startedEditing.next(i);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ShoppingListComponent.prototype, "indexClicked", void 0);
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-list',
            templateUrl: './shopping-list.component.html',
            styleUrls: ['./shopping-list.component.css']
        }),
        __metadata("design:paramtypes", [shopping_service_1.ShoppingService])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map