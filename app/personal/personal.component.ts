import {Component, Input, OnInit}   from '@angular/core';

import { Personal }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';
import {User} from "../_models/user";
import {UserService} from "../_services/user.service";
import {sendFormdataService} from "../_services/sendFormdata.service";
import {Observable} from "rxjs/Observable";
import {error} from "util";

@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: 'app/personal/personal.component.html',
    styleUrls: ['../../assets/css/radioselect.css']
})

export class PersonalComponent implements OnInit {
    title = 'Informations Personnelles';
    personal: Personal;
    form: any;
    dataFromApi: any;
    nomFromlocal : string;
    prenomFromLocal : string;
    currentUser: User;
    jsonData: any;
    jnom: string;
    jprenom: string;
    jdaten: string;
    jaddress: string;
    jtel: string;
    jsexeU: string;
    jemail: string;

    constructor(private formDataService: FormDataService,
                private sfd: sendFormdataService)
    {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        //console.log('getFData should be triggered below  ', this.getFdata());
        this.sfd.getDataFile()
            .subscribe(
                res =>
                {
                this.jnom = res.firstName;
                this.jprenom = res.lastName;
                this.jemail = res.email;
                this.jdaten = res.dateN;
                this.jtel = res.numTel;
                this.jaddress = res.street;
                this.jsexeU = res.sexe;
                console.log(this.jsexeU);
                }
            );
    }

    getNom(){
        if (this.currentUser){
            this.personal.lastName = this.currentUser.lastName;
            return this.nomFromlocal = this.currentUser.lastName;
        } else {
            return '';
        }
    }

    getPrenom(){
        if (this.currentUser){
            this.personal.firstName = this.currentUser.firstName;
            return this.prenomFromLocal = this.currentUser.firstName;
        } else {
            return '';
        }
    }

    getFdata() {
        let output;
        this.sfd.getDataFile()
            .subscribe(
                data => {
                    console.log(data);
                    //this.dataFromApi = response;
                    output = data;
                    //this.jnom = JSON.parse(response).lastName;
                    //console.log('name from subscribing to getFData : '+ this.jnom);
                },
                error => {
                    console.error("No data !");
                    return Observable.throw(error);
                }
            ).unsubscribe();
        return output;
    }

    save(form: any) {
        if (!form.valid)
            return;

        this.formDataService.setPersonal(this.personal);
    }
}
