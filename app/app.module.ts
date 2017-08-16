import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { UIRouterModule }     from "ui-router-ng2";
import { FormsModule, ReactiveFormsModule}        from '@angular/forms';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import {RDVComponent} from "./rdv/rdv.component";
import {ProfileChangeComponent} from "./profileChange/profilechange.component";
import { ResultComponent }    from './result/result.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainNavbarComponent } from './common/mainnavbar/mainnavbar.component';
import { ProfileBoxComponent } from './profilebox/profilebox.component';

/*authentification*/
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

/* App Router */
import { UIRouterConfigFn }   from "./app.router";
import { appStates }          from "./app.states";

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';

import { HttpModule } from '@angular/http';
import { routing }        from './app.routing';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import {WizardComponent} from "./pread/wizard.component";
import {sendFormdataService} from "./_services/sendFormdata.service";

// modal
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

// sidebar
// import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    ReactiveFormsModule,
                    HttpModule,
                    routing,
                    Ng2Bs3ModalModule,
                    UIRouterModule.forRoot({
                      states: appStates,
                      useHash: true,
                      config: UIRouterConfigFn
                    }) 
                  ],
    providers:    [
                    AuthGuard,
                    AlertService,
                    AuthenticationService,
                    UserService,
                    sendFormdataService,
                    // providers used to create fake backend
                    fakeBackendProvider,
                    MockBackend,
                    BaseRequestOptions,
                   { provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent,
                    NavbarComponent,
                    PersonalComponent,
                    WorkComponent,
                    AlertComponent,
                    HomeComponent,
                    LoginComponent,
                    RegisterComponent,
                    RDVComponent,
                    ResultComponent,
                    FooterComponent,
                    ProfileChangeComponent,
                    MainNavbarComponent,
                    ProfileBoxComponent,
                    WizardComponent],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}