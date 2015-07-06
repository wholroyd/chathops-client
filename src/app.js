/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/custom.router.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var authentication_1 = require('./components/authentication/authentication');
var settings_1 = require('./components/settings/settings');
var manage_1 = require('./components/manage/manage');
var App = (function () {
    function App() {
        this.name = 'Alice';
    }
    App = __decorate([
        angular2_1.Component({ selector: 'app' }),
        angular2_1.View({ template: '<h1>Hello {{ name }}</h1>' }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/authentication' },
            { path: '/authentication', component: authentication_1.Authentication, as: 'authentication' },
            { path: '/manage', component: manage_1.Manage, as: 'manage' },
            { path: '/settings', component: settings_1.Settings, as: 'settings' },
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);
//# sourceMappingURL=app.js.map