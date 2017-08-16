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
 * Created by Ahmed Hamed on 8/15/2017.
 */
var core_1 = require('@angular/core');
var formData_service_1 = require('../data/formData.service');
var http_1 = require("@angular/http");
require('rxjs/Rx');
require('rxjs/add/operator/map');
var forms_1 = require("@angular/forms");
var RDVComponent = (function () {
    function RDVComponent(formDataService, http, fb) {
        this.formDataService = formDataService;
        this.http = http;
        this.fb = fb;
        this.title = 'Informations Rendez-vous';
        this.filesToUpload = [];
    }
    RDVComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            chosenfiles: this.fb.array([]),
        });
        this.rdv = this.formDataService.getRDV();
        console.log('RDV feature loaded!');
    };
    RDVComponent.prototype.save = function (form) {
        if (!form.valid)
            return;
        this.formDataService.setRDV(this.rdv);
    };
    RDVComponent.prototype.upload = function () {
        var formData = new FormData();
        var files = this.filesToUpload;
        console.log(files);
        var chosenf = this.myForm.controls["chosenfiles"];
        // iterate over the number of files
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i]['name']);
            // store file name in an array
            chosenf.push(new forms_1.FormControl(files[i]['name']));
        }
        console.log("chosenf value " + chosenf.value);
        this.rdv.documents = chosenf.value;
        console.log("done storing values in chosenF");
        // formData.append("uploads[]", files[0], files[0]['name']);
        // this.address.documents = files.values;
        this.http.post('http://localhost:3003/api/upload', formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) { return console.log('The files are : ', files); });
        // this.address.documents = files;
        console.log("this.address.documents has :  ", this.rdv.documents);
    };
    RDVComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        // console.log("everytime files are selected" + this.filesToUpload.values);
        //this.product.photo = fileInput.target.files[0]['name'];
    };
    RDVComponent = __decorate([
        core_1.Component({
            selector: 'mt-wizard-rdv',
            templateUrl: './app/rdv/rdv.component.html'
        }), 
        __metadata('design:paramtypes', [formData_service_1.FormDataService, http_1.Http, forms_1.FormBuilder])
    ], RDVComponent);
    return RDVComponent;
}());
exports.RDVComponent = RDVComponent;
//# sourceMappingURL=rdv.component.js.map