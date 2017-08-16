/**
 * Created by Ahmed Hamed on 8/9/2017.
 */
import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {AuthenticationService} from "../_services/authentication.service";
import {AlertService} from "../_services/alert.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: 'profilechange.component.html',
    styleUrls: ['../../assets/css/material-kit.css']
})

export class ProfileChangeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    model: any = {};

    constructor(private userService: UserService,
                private authenticationService: AuthenticationService,
                private alertService: AlertService,
                private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

/*    updateuser(){
        //this.deleteUser(this.currentUser.id);
        //this.authenticationService.(this.model.clinicalid, this.model.password)
        this.userService.update(this.currentUser);
    }*/

    updateuser2() {
        // this.loading = true;
        // this.userService.delete(this.currentUser.id);
        // this.deleteUser(this.currentUser.id);
        this.userService.update(this.model)
            .subscribe(
                data => {
                    console.log('saret amma wini yooooooooooo !!!! ');
                    this.alertService.success('Votre profil est mise à jour avec succés', true);
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.error(error);
                    //this.loading = false;
                });
    }


    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }


}