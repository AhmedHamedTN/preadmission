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
var platform_browser_1 = require('@angular/platform-browser');
var ui_router_ng2_1 = require("ui-router-ng2");
var forms_1 = require('@angular/forms');
/* App Root */
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar/navbar.component');
/* Feature Components */
var personal_component_1 = require('./personal/personal.component');
var work_component_1 = require('./work/work.component');
var rdv_component_1 = require("./rdv/rdv.component");
var profilechange_component_1 = require("./profileChange/profilechange.component");
var result_component_1 = require('./result/result.component');
var footer_component_1 = require('./common/footer/footer.component');
var mainnavbar_component_1 = require('./common/mainnavbar/mainnavbar.component');
var profilebox_component_1 = require('./profilebox/profilebox.component');
/*authentification*/
var index_1 = require('./_directives/index');
var index_2 = require('./_guards/index');
var index_3 = require('./_services/index');
var index_4 = require('./home/index');
var index_5 = require('./login/index');
var index_6 = require('./register/index');
/* App Router */
var app_router_1 = require("./app.router");
var app_states_1 = require("./app.states");
/* Shared Service */
var formData_service_1 = require('./data/formData.service');
var workflow_service_1 = require('./workflow/workflow.service');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
// used to create fake backend
var index_7 = require('./_helpers/index');
var testing_1 = require('@angular/http/testing');
var http_2 = require('@angular/http');
var wizard_component_1 = require("./pread/wizard.component");
var sendFormdata_service_1 = require("./_services/sendFormdata.service");
// modal
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
// sidebar
// import { SidebarModule } from './sidebar/sidebar.module';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                ng2_bs3_modal_1.Ng2Bs3ModalModule,
                ui_router_ng2_1.UIRouterModule.forRoot({
                    states: app_states_1.appStates,
                    useHash: true,
                    config: app_router_1.UIRouterConfigFn
                })
            ],
            providers: [
                index_2.AuthGuard,
                index_3.AlertService,
                index_3.AuthenticationService,
                index_3.UserService,
                sendFormdata_service_1.sendFormdataService,
                // providers used to create fake backend
                index_7.fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions,
                { provide: formData_service_1.FormDataService, useClass: formData_service_1.FormDataService },
                { provide: workflow_service_1.WorkflowService, useClass: workflow_service_1.WorkflowService }],
            declarations: [app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                personal_component_1.PersonalComponent,
                work_component_1.WorkComponent,
                index_1.AlertComponent,
                index_4.HomeComponent,
                index_5.LoginComponent,
                index_6.RegisterComponent,
                rdv_component_1.RDVComponent,
                result_component_1.ResultComponent,
                footer_component_1.FooterComponent,
                profilechange_component_1.ProfileChangeComponent,
                mainnavbar_component_1.MainNavbarComponent,
                profilebox_component_1.ProfileBoxComponent,
                wizard_component_1.WizardComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map