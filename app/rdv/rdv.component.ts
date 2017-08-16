/**
 * Created by Ahmed Hamed on 8/15/2017.
 */
import { Component, OnInit}   from '@angular/core';

import {RDV} from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

import {Http} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component ({
    selector: 'mt-wizard-rdv',
    templateUrl: './app/rdv/rdv.component.html'
})

export class RDVComponent implements OnInit {
    title = 'Informations Rendez-vous';
    rdv : RDV;
    form: any;
    myForm: FormGroup;
    filesToUpload: Array<File> = [];
    chosenfiles : any;


    constructor(private formDataService: FormDataService, private http: Http, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this.fb.group({
            chosenfiles: this.fb.array([]),
        });

        this.rdv = this.formDataService.getRDV();
        console.log('RDV feature loaded!');
    }

    save(form: any) {
        if (!form.valid)
            return;
        this.formDataService.setRDV(this.rdv);
    }

    upload() {
        const formData: any = new FormData();
        const files: Array<File> = this.filesToUpload;
        //console.log(files);
        const chosenf = <FormArray> this.myForm.controls["chosenfiles"];
        // iterate over the number of files
        for(let i =0; i < files.length; i++){
            formData.append("uploads[]", files[i], files[i]['name']);
            // store file name in an array
            chosenf.push(new FormControl(files[i]['name']));
        }
        //console.log("chosenf value " + chosenf.value);
        //this.rdv.documents = chosenf.value;
        //console.log("done storing values in chosenF");
        // formData.append("uploads[]", files[0], files[0]['name']);
        // this.address.documents = files.values;
        this.http.post('http://localhost:3003/api/upload', formData)
            .map(files => files.json())
            .subscribe(files => console.log('The files are : ', files));

        // this.address.documents = files;
        //console.log("this.address.documents has :  ", this.rdv.documents);
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        const formData: any = new FormData();
        const files: Array<File> = this.filesToUpload;
        console.log(files);
        const chosenf = <FormArray> this.myForm.controls["chosenfiles"];
        // iterate over the number of files
        for(let i =0; i < files.length; i++){
            formData.append("uploads[]", files[i], files[i]['name']);
            // store file name in an array
            chosenf.push(new FormControl(files[i]['name']));
        }
        console.log("chosenf value " + chosenf.value);
        this.rdv.documents = chosenf.value;
        console.log("done storing values in this.rdv.documents");
        // console.log("everytime files are selected" + this.filesToUpload.values);
        //this.product.photo = fileInput.target.files[0]['name'];
    }
}
