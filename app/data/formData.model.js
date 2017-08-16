"use strict";
var FormData = (function () {
    function FormData() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.dateN = '';
        this.sexe = '';
        this.service = '';
        this.laboratoire = '';
        this.examensArray = [];
        this.analysesArray = [];
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.medPresc = '';
        this.dateRDV = '';
        this.documents = [];
        this.note = '';
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.dateN = '';
        this.sexe = '';
        this.numTel = 0;
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.medPresc = '';
        this.dateRDV = '';
        this.service = '';
        this.laboratoire = '';
        this.examensArray = [];
        this.analysesArray = [];
        this.documents = [];
        this.note = '';
    };
    return FormData;
}());
exports.FormData = FormData;
/*export class Document{
    titre : string ='';
}*/
var Personal = (function () {
    function Personal() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    return Personal;
}());
exports.Personal = Personal;
var Parcours = (function () {
    function Parcours() {
        this.service = '';
        this.laboratoire = '';
        this.examensArray = [];
        this.analysesArray = [];
    }
    return Parcours;
}());
exports.Parcours = Parcours;
var RDV = (function () {
    function RDV() {
        this.medPresc = '';
        this.documents = [];
        this.note = '';
    }
    return RDV;
}());
exports.RDV = RDV;
//# sourceMappingURL=formData.model.js.map