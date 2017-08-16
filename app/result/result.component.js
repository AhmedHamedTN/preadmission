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
var formData_model_1 = require('../data/formData.model');
var formData_service_1 = require('../data/formData.service');
var router_1 = require('@angular/router');
var http_1 = require("@angular/http");
require('rxjs/Rx');
require('rxjs/add/operator/map');
var Rx_1 = require('rxjs/Rx');
var sendFormdata_service_1 = require('../_services/sendFormdata.service');
var ResultComponent = (function () {
    // Constructor
    function ResultComponent(formDataService, router, sfd, http) {
        this.formDataService = formDataService;
        this.router = router;
        this.sfd = sfd;
        this.http = http;
        this.title = 'Merci! Juste une petite dernière étape';
        this.isFormValid = false;
        console.log(sfd);
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        var jsonData = JSON.stringify(this.formData);
        console.log("Trying JSON formatting :   ", JSON.stringify(this.formData));
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    };
    ResultComponent.prototype.submit = function () {
        alert('Excellent Job!');
        // this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    };
    ResultComponent.prototype.sendData = function () {
        this.sfd.sendIt(this.formData).subscribe(function (data) {
            // refresh the list
            // this.getFoods();
            return true;
        }, function (error) {
            console.error("Error !");
            return Rx_1.Observable.throw(error);
        });
    };
    ResultComponent.prototype.saveFile = function (filename, data) {
        var blob = new Blob([data], { type: 'application/json' });
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        }
        else {
            var elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    };
    ResultComponent.prototype.getBackHome = function () {
        this.sendData();
        this.saveFile("dataFromAngular", JSON.stringify(this.formData));
        // this.sendformdata.sendFormdata(this.formData);
        this.formData = this.formDataService.resetFormData();
        this.router.navigate(['/']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', formData_model_1.FormData)
    ], ResultComponent.prototype, "formData", void 0);
    ResultComponent = __decorate([
        core_1.Component({
            selector: 'mt-wizard-result',
            templateUrl: 'app/result/result.component.html'
        }), 
        __metadata('design:paramtypes', [formData_service_1.FormDataService, router_1.Router, sendFormdata_service_1.sendFormdataService, http_1.Http])
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=result.component.js.map