import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls:['../../content/css/authentication.css']
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    text : string = "";
    possible : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) { }


    makeString() {
    this.text = '';
    /*var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";*/
    for (let i = 0; i < 5; i++){
        this.text += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    this.model.clinicalid = this.text;
}


    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Inscription avec succées', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
