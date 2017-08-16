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
var forms_1 = require("@angular/forms");
var WorkComponent = (function () {
    function WorkComponent(formDataService, fb) {
        this.formDataService = formDataService;
        this.fb = fb;
        this.title = 'Parcours Médical';
        // Fetch these later on from database
        this.cardioExams = [{ test: "cardio 1" }, { test: "cardio 2" }, { test: "cardio 3" }, { test: 'cardio 4' }];
        this.orlExams = [{ test: "orl 1" }, { test: "orl 2" }, { test: "orl 3" }, { test: 'orl 4' }];
        this.analysesSanguines = [{ test: "ssss" }, { test: "sss" }, { test: "ss" }, { test: 's' }];
        this.analysesChimiques = [{ test: "cccc" }, { test: "ccc" }, { test: "cc" }, { test: 'c' }];
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            examensToChoose: this.fb.array([]),
            analysesToChoose: this.fb.array([])
        });
        this.parcoursObject = this.formDataService.getParcours();
        console.log('Parcours feature loaded!');
        console.log(this.parcoursObject);
    };
    WorkComponent.prototype.onExamChange = function (test, isChecked) {
        var examArray = this.myForm.controls["examensToChoose"];
        if (isChecked) {
            examArray.push(new forms_1.FormControl(test));
        }
        else {
            var index = examArray.controls.findIndex(function (x) { return x.value == test; });
            examArray.removeAt(index);
        }
        console.log(examArray.value);
        this.parcoursObject.examensArray = examArray.value;
        console.log("done storing values in examens");
    };
    WorkComponent.prototype.onAnalysesChange = function (test, isChecked) {
        var analyseArray = this.myForm.controls["analysesToChoose"];
        if (isChecked) {
            analyseArray.push(new forms_1.FormControl(test));
        }
        else {
            var index = analyseArray.controls.findIndex(function (x) { return x.value == test; });
            analyseArray.removeAt(index);
        }
        console.log(analyseArray.value);
        this.parcoursObject.analysesArray = analyseArray.value;
        console.log("done storing data in anlayses");
    };
    WorkComponent.prototype.save = function (form) {
        if (!form.valid)
            return;
        this.formDataService.setParcours(this.parcoursObject);
    };
    WorkComponent = __decorate([
        core_1.Component({
            selector: 'mt-wizard-work',
            templateUrl: 'app/work/work.component.html',
            styleUrls: ['../../assets/css/radioselect.css']
        }), 
        __metadata('design:paramtypes', [formData_service_1.FormDataService, forms_1.FormBuilder])
    ], WorkComponent);
    return WorkComponent;
}());
exports.WorkComponent = WorkComponent;
//# sourceMappingURL=work.component.js.map