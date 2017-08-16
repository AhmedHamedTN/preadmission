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
/**
 * Created by Ahmed Hamed on 8/9/2017.
 */
var core_1 = require('@angular/core');
var index_1 = require('../_services/index');
var authentication_service_1 = require("../_services/authentication.service");
var alert_service_1 = require("../_services/alert.service");
var router_1 = require("@angular/router");
var ProfileChangeComponent = (function () {
    function ProfileChangeComponent(userService, authenticationService, alertService, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.router = router;
        this.users = [];
        this.model = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    /*    updateuser(){
            //this.deleteUser(this.currentUser.id);
            //this.authenticationService.(this.model.clinicalid, this.model.password)
            this.userService.update(this.currentUser);
        }*/
    ProfileChangeComponent.prototype.updateuser2 = function () {
        var _this = this;
        // this.loading = true;
        // this.userService.delete(this.currentUser.id);
        // this.deleteUser(this.currentUser.id);
        this.userService.update(this.model)
            .subscribe(function (data) {
            console.log('saret amma wini yooooooooooo !!!! ');
            _this.alertService.success('Votre profil est mise à jour avec succés', true);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.alertService.error(error);
            //this.loading = false;
        });
    };
    ProfileChangeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    ProfileChangeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    ProfileChangeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    ProfileChangeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'profilechange.component.html',
            styleUrls: ['../../assets/css/material-kit.css']
        }), 
        __metadata('design:paramtypes', [index_1.UserService, authentication_service_1.AuthenticationService, alert_service_1.AlertService, router_1.Router])
    ], ProfileChangeComponent);
    return ProfileChangeComponent;
}());
exports.ProfileChangeComponent = ProfileChangeComponent;
//# sourceMappingURL=profilechange.component.js.map