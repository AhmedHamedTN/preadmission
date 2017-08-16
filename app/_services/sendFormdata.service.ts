/**
 * Created by Ahmed Hamed on 8/8/2017.
 */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormData }           from '../data/formData.model';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class sendFormdataService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}
    // private instance variable to hold base url
    private sendDataUrl = 'http://localhost:3003/api/';
    dataFromApi : any;
    jnom: string;
    jprenom: string;
    jdaten: string;
    jaddress: string;
    jtel: string;
    jemail: string;

    // post data to server
    sendIt(formulaire){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(formulaire);
        return this.http.post(this.sendDataUrl+'data', body, options ).map((res: Response) => res.json());
    }

    //get data from server (hit API and subscribe directly here)
    getDataFromApi(){
        return this.http.get(this.sendDataUrl+`getData`)
            .map((response:Response) => {
                console.log('last name from getDataFromAPI  ' + response.json().lastName);
                this.jnom = response.json().lastName;
                this.jprenom = response.json().firstName;
                this.jemail = response.json().email;
                // this.jaddress = response.json().address;
                this.jtel = response.json().numTel;
                this.jdaten = response.json().dateN;
                response.json();
        }).subscribe();
    }

    // get data from server (Only subscribe to the call in the service)
    getDataFile():Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("hitting the service (Observable)");
        console.log(this.sendDataUrl+`getData`);
        console.log(this.http.get(this.sendDataUrl+`getData`));
        return this.http.get(this.sendDataUrl+`getData`, options)
            .map( response => {
                console.log(response.json());
                return response.json()})
            .catch (this.handleError);
    };


    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    // Post data
    sendFormdata (body: Object): Observable<FormData[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.sendDataUrl, body, options) // ...using post request
            .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
}