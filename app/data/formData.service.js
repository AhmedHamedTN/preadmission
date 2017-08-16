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
var formData_model_1 = require('./formData.model');
var workflow_service_1 = require('../workflow/workflow.service');
var workflow_model_1 = require('../workflow/workflow.model');
var FormDataService = (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new formData_model_1.FormData();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
        this.isRDVFormValid = false;
    }
    FormDataService.prototype.getPersonal = function () {
        // Return the Personal data
        var personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            dateN: this.formData.dateN,
            sexe: this.formData.sexe,
            numTel: this.formData.numTel,
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return personal;
    };
    FormDataService.prototype.setPersonal = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.formData.dateN = data.dateN;
        this.formData.sexe = data.sexe;
        this.formData.numTel = data.numTel;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(workflow_model_1.STEPS.personal);
    };
    /*    getWork() : string {
            // Return the work type
            return this.formData.work;
        }*/
    FormDataService.prototype.getParcours = function () {
        // Return the work data
        var parcourObject = {
            service: this.formData.service,
            laboratoire: this.formData.laboratoire,
            examensArray: this.formData.examensArray,
            analysesArray: this.formData.analysesArray
        };
        return parcourObject;
    };
    FormDataService.prototype.setParcours = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.service = data.service;
        this.formData.laboratoire = data.laboratoire;
        this.formData.examensArray = data.examensArray;
        this.formData.analysesArray = data.analysesArray;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(workflow_model_1.STEPS.parcours);
    };
    /*
        getRDV(){
            // Return the RDV data
            var rdv: RDV = {
                medPresc: this.formData.medPresc,
                dateRDV: this.formData.dateRDV
            };
            return rdv;
        }
    
        setRDV(data: RDV) {
            // Update the RDV data only when the Personal Form had been validated successfully
            this.isRDVValid = true;
            this.formData.medPresc = data.medPresc;
            this.formData.dateRDV = data.dateRDV;
            // Validate Personal Step in Workflow
            this.workflowService.validateStep(STEPS.rdv);
        }
    */
    /*    setWork(data: string) {
            // Update the work type only when the Work Form had been validated successfully
            this.isWorkFormValid = true;
            this.formData.work = data;
            // Validate Work Step in Workflow
            this.workflowService.validateStep(STEPS.work);
        }*/
    FormDataService.prototype.getRDV = function () {
        // Return the RDV data
        var rdv = {
            medPresc: this.formData.medPresc,
            dateRDV: this.formData.dateRDV,
            documents: this.formData.documents,
            note: this.formData.note
        };
        return rdv;
    };
    FormDataService.prototype.setRDV = function (data) {
        // Update the RDV data only when the Address Form had been validated successfully
        this.formData.medPresc = data.medPresc;
        this.formData.dateRDV = data.dateRDV;
        this.formData.documents = data.documents;
        this.formData.note = data.note;
        this.isRDVFormValid = true;
        /* this.formData.street = data.street;
         this.formData.city = data.city;
         this.formData.state = data.state;
         this.formData.zip = data.zip;*/
        // Validate RDV Step in Workflow
        this.workflowService.validateStep(workflow_model_1.STEPS.rdv);
    };
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    };
    FormDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [workflow_service_1.WorkflowService])
    ], FormDataService);
    return FormDataService;
}());
exports.FormDataService = FormDataService;
//# sourceMappingURL=formData.service.js.map