import { Injectable }                        from '@angular/core';

import {FormData, Personal, Parcours, RDV}       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;
    private isRDVFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            dateN : this.formData.dateN,
            sexe : this.formData.sexe,
            numTel : this.formData.numTel,
            street: this.formData.street,
            city : this.formData.city,
            state : this.formData.state,
            zip: this.formData.zip
        };
        return personal;
    }

    setPersonal(data: Personal) {
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
        this.workflowService.validateStep(STEPS.personal);
    }

/*    getWork() : string {
        // Return the work type
        return this.formData.work;
    }*/

    getParcours() : Parcours {
        // Return the work data
        var parcourObject: Parcours = {
            service: this.formData.service,
            laboratoire: this.formData.laboratoire,
            examensArray : this.formData.examensArray,
            analysesArray : this.formData.analysesArray
        };
        return parcourObject;
    }

    setParcours(data: Parcours) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.service = data.service;
        this.formData.laboratoire = data.laboratoire;
        this.formData.examensArray = data.examensArray;
        this.formData.analysesArray = data.analysesArray;

        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.parcours);
    }

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

    getRDV() : RDV {
        // Return the RDV data
        var rdv: RDV = {
            medPresc: this.formData.medPresc,
            dateRDV: this.formData.dateRDV,
            documents : this.formData.documents,
            note : this.formData.note
            /*street: this.formData.street,
             city: this.formData.city,
             state: this.formData.state,
             zip: this.formData.zip*/
        };
        return rdv;
    }

    setRDV(data: RDV) {
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
        this.workflowService.validateStep(STEPS.rdv);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid && 
                this.isAddressFormValid;
    }
}