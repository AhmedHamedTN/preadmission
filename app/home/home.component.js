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
var core_1 = require('@angular/core');
var index_1 = require('../_services/index');
var sendFormdata_service_1 = require("../_services/sendFormdata.service");
var Observable_1 = require("rxjs/Observable");
var HomeComponent = (function () {
    function HomeComponent(userService, sfd) {
        this.userService = userService;
        this.sfd = sfd;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
        this.getFdata();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    HomeComponent.prototype.getFdata = function () {
        // this.dataFromApi = this.sfd.getDataFile().subscribe(
        this.dataFromApi = this.sfd.getDataFile().subscribe(function (data) {
            // refresh the list
            // this.getFoods();
            return data;
        }, function (error) {
            console.error("No data !");
            return Observable_1.Observable.throw(error);
        });
        // console.log('Data after request execution' + this.dataFromApi)
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home.component.html',
            styleUrls: ['../../assets/css/material-kit.css']
        }), 
        __metadata('design:paramtypes', [index_1.UserService, sendFormdata_service_1.sendFormdataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map