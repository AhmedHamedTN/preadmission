import { Component, OnInit }   from '@angular/core';

import { Parcours} from "../data/formData.model";
import { FormDataService }     from '../data/formData.service';
import { FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component ({
    selector:     'mt-wizard-work',
    templateUrl: 'app/work/work.component.html',
    styleUrls: ['../../assets/css/radioselect.css']
})

export class WorkComponent implements OnInit {
    title = 'Parcours Médical';
    parcoursObject : Parcours;
    form: any;

    // Fetch these later on from database
    cardioExams = [{test:"cardio 1"},{test:"cardio 2"},{test:"cardio 3"},{test:'cardio 4'}];
    orlExams = [{test:"orl 1"},{test:"orl 2"},{test:"orl 3"},{test:'orl 4'}];

    analysesSanguines = [{test:"ssss"},{test:"sss"},{test:"ss"},{test:'s'}];
    analysesChimiques = [{test:"cccc"},{test:"ccc"},{test:"cc"},{test:'c'}];

    myForm: FormGroup;
    keyword : string;
    examensToChoose : any;
    analysesToChoose : any;

    constructor(private formDataService: FormDataService, private fb: FormBuilder) {
    }

    ngOnInit() {

        this.myForm = this.fb.group({
            examensToChoose: this.fb.array([]),
            analysesToChoose: this.fb.array([])
        });
        this.parcoursObject = this.formDataService.getParcours();
        console.log('Parcours feature loaded!');
        console.log(this.parcoursObject);
    }

    onExamChange(test: string, isChecked: boolean) {
        const examArray = <FormArray> this.myForm.controls["examensToChoose"];

        if(isChecked) {
            examArray.push(new FormControl(test));
        } else {
            let index = examArray.controls.findIndex(x => x.value == test);
            examArray.removeAt(index);
        }
        console.log(examArray.value);
        this.parcoursObject.examensArray = examArray.value;
        console.log("done storing values in examens");
    }

    onAnalysesChange(test: string, isChecked: boolean) {
        const analyseArray = <FormArray> this.myForm.controls["analysesToChoose"];

        if(isChecked) {
            analyseArray.push(new FormControl(test));
        } else {
            let index = analyseArray.controls.findIndex(x => x.value == test);
            analyseArray.removeAt(index);
        }
        console.log(analyseArray.value);
        this.parcoursObject.analysesArray = analyseArray.value;
        console.log("done storing data in anlayses");
    }

    save(form: any) {
        if (!form.valid)
            return;
        
        this.formDataService.setParcours(this.parcoursObject);
    }
}