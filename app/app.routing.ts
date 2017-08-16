import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {WizardComponent} from "./pread/wizard.component";
import {PersonalComponent} from "./personal/personal.component";
import {WorkComponent} from "./work/work.component";
import {ResultComponent} from "./result/result.component";
import {ProfileChangeComponent} from "./profileChange/profilechange.component";
import {RDVComponent} from "./rdv/rdv.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'wizard', component: WizardComponent, canActivate: [AuthGuard]},
    { path: 'personal', component: PersonalComponent, canActivate: [AuthGuard]},
    { path: 'parcours', component: WorkComponent, canActivate: [AuthGuard] },
    { path: 'rdv', component: RDVComponent, canActivate: [AuthGuard]},
    { path: 'result', component: ResultComponent, canActivate: [AuthGuard]},
    { path: 'profilechange', component: ProfileChangeComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

const restrictedRoutes : Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'wizard', component: WizardComponent},
    { path: 'personal', component: PersonalComponent },
    { path: 'parcours', component: WorkComponent },
    { path: 'rdv', component: RDVComponent, canActivate: [AuthGuard]},
    { path: 'result', component: ResultComponent},
    { path: 'profilechange', component: ProfileChangeComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

//export const routing = RouterModule.forRoot([{ path : '', canActivate: [AuthGuard], children: restrictedRoutes }]);