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
var firebase = require("firebase");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AuthService = /** @class */ (function () {
    function AuthService(route) {
        this.route = route;
        this.signuperr = "";
        this.signinerr = "";
    }
    AuthService.prototype.signupUser = function (email, password) {
        var _this = this;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.successregister = "You are successfully registered, Now Please Login";
            _this.route.navigate(['login']);
        }, function (error) {
            _this.signuperr = "The email address is already in use by another account,Please Try Another";
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        this.signuperr = "";
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.route.navigate(['recipe']);
            firebase.auth().currentUser.getIdToken()
                .then(function (token) {
                _this.token = token;
                // console.log(this.token);
                localStorage.setItem('currentUser', JSON.stringify({ token: _this.token, name: name }));
            });
        }, function (error) {
            _this.signinerr = "Wrong Password or email, Please Try again";
        })
            .catch(function (error) {
        });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase.auth().currentUser.getIdToken()
            .then(function (token) {
            _this.token = token;
            return _this.token;
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser.token;
        return token;
    };
    AuthService.prototype.isAuthenticateUser = function () {
        //Q3 console.log(this.token!==null);
        return this.token !== null;
    };
    AuthService.prototype.logOut = function () {
        firebase.auth().signOut();
        this.successregister = "";
        this.signinerr = "";
        this.signuperr = "";
        this.route.navigate(['/']);
        this.token = null;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map