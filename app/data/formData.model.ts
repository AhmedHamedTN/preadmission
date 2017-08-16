export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    dateN : any = '';
    sexe : string = '';
    numTel : number;
    service : string = '';
    laboratoire : string = '';
    examensArray : any = [];
    analysesArray : any = [];
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    medPresc : string = '';
    dateRDV : any = '';
    documents : any = [];
    note : string = '';

    clear() {
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
    }
}

/*export class Document{
    titre : string ='';
}*/

export class Personal {
    firstName: string = '';
    lastName : string = '';
    dateN : any;
    sexe : string;
    email: string = '';
    numTel : number;
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}

export class Parcours {
    service : string = '';
    laboratoire : string = '';
    examensArray : any = [];
    analysesArray : any = [];
}

export class RDV {
    medPresc: string = '';
    dateRDV: any;
    documents : any = [];
    note : string = '';
}
