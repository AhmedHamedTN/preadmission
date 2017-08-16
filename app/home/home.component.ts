import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {sendFormdataService} from "../_services/sendFormdata.service";
import {Observable} from "rxjs/Observable";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['../../assets/css/material-kit.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    dataFromApi : any;

    constructor(private userService: UserService,
                private sfd: sendFormdataService)
    {this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

    ngOnInit() {
        this.loadAllUsers();
        this.getFdata();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    getFdata() {
        // this.dataFromApi = this.sfd.getDataFile().subscribe(
        this.dataFromApi = this.sfd.getDataFile().subscribe(
            data => {
                // refresh the list
                // this.getFoods();
                return data;
            },
            error => {
                console.error("No data !");
                return Observable.throw(error);
            }
        );
        // console.log('Data after request execution' + this.dataFromApi)
    }
}