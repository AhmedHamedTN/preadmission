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
/**
 * Created by Ahmed Hamed on 8/8/2017.
 */
// Imports
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var sendFormdataService = (function () {
    // Resolve HTTP using the constructor
    function sendFormdataService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.sendDataUrl = 'http://localhost:3003/api/';
    }
    // post data to server
    sendFormdataService.prototype.sendIt = function (formulaire) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(formulaire);
        return this.http.post(this.sendDataUrl + 'data', body, options).map(function (res) { return res.json(); });
    };
    //get data from server (hit API and subscribe directly here)
    sendFormdataService.prototype.getDataFromApi = function () {
        var _this = this;
        return this.http.get(this.sendDataUrl + "getData")
            .map(function (response) {
            console.log('last name from getDataFromAPI  ' + response.json().lastName);
            _this.jnom = response.json().lastName;
            _this.jprenom = response.json().firstName;
            _this.jemail = response.json().email;
            // this.jaddress = response.json().address;
            _this.jtel = response.json().numTel;
            _this.jdaten = response.json().dateN;
            response.json();
        }).subscribe();
    };
    // get data from server (Only subscribe to the call in the service)
    sendFormdataService.prototype.getDataFile = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log("hitting the service (Observable)");
        console.log(this.sendDataUrl + "getData");
        console.log(this.http.get(this.sendDataUrl + "getData"));
        return this.http.get(this.sendDataUrl + "getData", options)
            .map(function (response) {
            console.log(response.json());
            return response.json();
        })
            .catch(this.handleError);
    };
    ;
    sendFormdataService.prototype.handleError = function (error) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    // Post data
    sendFormdataService.prototype.sendFormdata = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.sendDataUrl, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    sendFormdataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], sendFormdataService);
    return sendFormdataService;
}());
exports.sendFormdataService = sendFormdataService;
//# sourceMappingURL=sendFormdata.service.js.map