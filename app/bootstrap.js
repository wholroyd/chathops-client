/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/custom.router.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var services_1 = require('./services/services');
var app_1 = require('./components/app');
angular2_1.bootstrap(app_1.App, [services_1.serviceInjectables, router_1.routerInjectables]);
//# sourceMappingURL=bootstrap.js.map