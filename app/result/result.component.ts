import { Component, OnInit, Input, Output, EventEmitter}   from '@angular/core';

import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/formData.service';
import { Router } from '@angular/router';
import { EmitterService } from '../EmitterService';

import {Http} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

import { sendFormdataService } from '../_services/sendFormdata.service';

@Component ({
    selector:     'mt-wizard-result',
    templateUrl: 'app/result/result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Merci! Juste une petite dernière étape';
    @Input() formData: FormData;
    isFormValid: boolean = false;

    // Constructor
    constructor( private formDataService: FormDataService,
                 public router: Router,
                 private sfd: sendFormdataService,
                 private http: Http) {console.log(sfd);}

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        let jsonData = JSON.stringify(this.formData);
        console.log("Trying JSON formatting :   ", JSON.stringify(this.formData));
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    }

    submit() {
        alert('Excellent Job!');
        // this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }

    sendData() {
        this.sfd.sendIt(this.formData).subscribe(
            data => {
                // refresh the list
                // this.getFoods();
                return true;
            },
            error => {
                console.error("Error !");
                return Observable.throw(error);
            }
        );
    }

    saveFile(filename, data) {
        var blob = new Blob([data], {type: 'application/json'});
        if(window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        }
        else{
            var elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    }

    getBackHome() {
        this.sendData();
        this.saveFile("dataFromAngular", JSON.stringify(this.formData));
        // this.sendformdata.sendFormdata(this.formData);
        this.formData = this.formDataService.resetFormData();
        this.router.navigate(['/'])
    }
}
