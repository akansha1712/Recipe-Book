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
var router_1 = require("@angular/router");
var recipe_service_1 = require("../recipe.service");
var forms_1 = require("@angular/forms");
var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route, router, recipeService) {
        this.route = route;
        this.router = router;
        this.recipeService = recipeService;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
            // console.log(this.editMode);
        });
    };
    RecipeEditComponent.prototype.initForm = function () {
        var recipeName = '';
        var recipeimageUrl = '';
        var recipedescription = '';
        var recipeIngredients = new forms_1.FormArray([]);
        if (this.editMode) {
            var recipe = this.recipeService.getRecipeByIndex(this.id);
            recipeName = recipe.name;
            recipeimageUrl = recipe.imagePath;
            recipedescription = recipe.description;
            if (recipe['ingredients']) {
                for (var _i = 0, _a = recipe.ingredients; _i < _a.length; _i++) {
                    var ingredient = _a[_i];
                    recipeIngredients.push(new forms_1.FormGroup({
                        'name': new forms_1.FormControl(ingredient.name, forms_1.Validators.required),
                        'amount': new forms_1.FormControl(ingredient.amount, [forms_1.Validators.required, forms_1.Validators.pattern(/^[1-9]+[0-9]*$/)])
                    }));
                }
            }
        }
        this.recipeForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(recipeName, forms_1.Validators.required),
            'imagePath': new forms_1.FormControl(recipeimageUrl, forms_1.Validators.required),
            'description': new forms_1.FormControl(recipedescription, forms_1.Validators.required),
            'ingredients': recipeIngredients
        });
    };
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new forms_1.FormGroup({
            'name': new forms_1.FormControl(),
            'amount': new forms_1.FormControl()
        }));
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        console.log("in submitting");
        // const newRecipe=new Recipe(
        //   this.recipeForm.value['name'],
        //   this.recipeForm.value['imagePath'],
        //   this.recipeForm.value['description'],
        //   this.recipeForm.value['ingredients']
        // );
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent.prototype.onClickingCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent.prototype.onDeleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-edit',
            templateUrl: './recipe-edit.component.html',
            styleUrls: ['./recipe-edit.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            recipe_service_1.RecipeService])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());
exports.RecipeEditComponent = RecipeEditComponent;
//# sourceMappingURL=recipe-edit.component.js.map