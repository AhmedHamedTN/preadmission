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
var formData_service_1 = require('../data/formData.service');
var sendFormdata_service_1 = require("../_services/sendFormdata.service");
var Observable_1 = require("rxjs/Observable");
var PersonalComponent = (function () {
    function PersonalComponent(formDataService, sfd) {
        this.formDataService = formDataService;
        this.sfd = sfd;
        this.title = 'Informations Personnelles';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    PersonalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personal = this.formDataService.getPersonal();
        //console.log('getFData should be triggered below  ', this.getFdata());
        this.sfd.getDataFile()
            .subscribe(function (res) {
            _this.jnom = res.firstName;
            _this.jprenom = res.lastName;
            _this.jemail = res.email;
            _this.jdaten = res.dateN;
            _this.jtel = res.numTel;
            _this.jaddress = res.street;
            _this.jsexeU = res.sexe;
            console.log(_this.jsexeU);
        });
    };
    PersonalComponent.prototype.getNom = function () {
        if (this.currentUser) {
            this.personal.lastName = this.currentUser.lastName;
            return this.nomFromlocal = this.currentUser.lastName;
        }
        else {
            return '';
        }
    };
    PersonalComponent.prototype.getPrenom = function () {
        if (this.currentUser) {
            this.personal.firstName = this.currentUser.firstName;
            return this.prenomFromLocal = this.currentUser.firstName;
        }
        else {
            return '';
        }
    };
    PersonalComponent.prototype.getFdata = function () {
        var output;
        this.sfd.getDataFile()
            .subscribe(function (data) {
            console.log(data);
            //this.dataFromApi = response;
            output = data;
            //this.jnom = JSON.parse(response).lastName;
            //console.log('name from subscribing to getFData : '+ this.jnom);
        }, function (error) {
            console.error("No data !");
            return Observable_1.Observable.throw(error);
        }).unsubscribe();
        return output;
    };
    PersonalComponent.prototype.save = function (form) {
        if (!form.valid)
            return;
        this.formDataService.setPersonal(this.personal);
    };
    PersonalComponent = __decorate([
        core_1.Component({
            selector: 'mt-wizard-personal',
            templateUrl: 'app/personal/personal.component.html',
            styleUrls: ['../../assets/css/radioselect.css']
        }), 
        __metadata('design:paramtypes', [formData_service_1.FormDataService, sendFormdata_service_1.sendFormdataService])
    ], PersonalComponent);
    return PersonalComponent;
}());
exports.PersonalComponent = PersonalComponent;
//# sourceMappingURL=personal.component.js.map