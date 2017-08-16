/**
 * Created by Ahmed Hamed on 11/07/2017.
 */
import { Component, OnInit, Input }   from '@angular/core';

import { FormDataService }            from '../data/formData.service';

@Component ({
    moduleId: module.id,
/*
    selector:     'multi-step-wizard-app',
*/
    templateUrl: 'wizard.component.html'
})

export class WizardComponent implements OnInit {
    title = 'Préadmission';
    @Input() formData;
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    }
}