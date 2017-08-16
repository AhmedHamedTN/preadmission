"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var index_2 = require('./login/index');
var index_3 = require('./register/index');
var index_4 = require('./_guards/index');
var wizard_component_1 = require("./pread/wizard.component");
var personal_component_1 = require("./personal/personal.component");
var work_component_1 = require("./work/work.component");
var result_component_1 = require("./result/result.component");
var profilechange_component_1 = require("./profileChange/profilechange.component");
var rdv_component_1 = require("./rdv/rdv.component");
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_4.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'wizard', component: wizard_component_1.WizardComponent, canActivate: [index_4.AuthGuard] },
    { path: 'personal', component: personal_component_1.PersonalComponent, canActivate: [index_4.AuthGuard] },
    { path: 'parcours', component: work_component_1.WorkComponent, canActivate: [index_4.AuthGuard] },
    { path: 'rdv', component: rdv_component_1.RDVComponent, canActivate: [index_4.AuthGuard] },
    { path: 'result', component: result_component_1.ResultComponent, canActivate: [index_4.AuthGuard] },
    { path: 'profilechange', component: profilechange_component_1.ProfileChangeComponent, canActivate: [index_4.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var restrictedRoutes = [
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'wizard', component: wizard_component_1.WizardComponent },
    { path: 'personal', component: personal_component_1.PersonalComponent },
    { path: 'parcours', component: work_component_1.WorkComponent },
    { path: 'rdv', component: rdv_component_1.RDVComponent, canActivate: [index_4.AuthGuard] },
    { path: 'result', component: result_component_1.ResultComponent },
    { path: 'profilechange', component: profilechange_component_1.ProfileChangeComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//export const routing = RouterModule.forRoot([{ path : '', canActivate: [AuthGuard], children: restrictedRoutes }]); 
//# sourceMappingURL=app.routing.js.map