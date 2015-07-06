/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/custom.router.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Router, RouteConfig, routerDirectives, routerInjectables} from 'angular2/router';

import {Authentication} from './components/authentication/authentication';
import {Conversations} from './components/conversations/conversations';
import {Platforms} from './components/platforms/platforms';
import {Settings} from './components/settings/settings';
import {Profile} from './components/profile/profile';
import {Manage} from './components/manage/manage';

@Component({ selector: 'app' })
@View({ template: '<h1>Hello {{ name }}</h1>' })
@RouteConfig([
    { path: '/', redirectTo: '/authentication'},
    { path: '/authentication', component: Authentication, as: 'authentication' },
    { path: '/manage', component: Manage, as: 'manage' },
    { path: '/settings', component: Settings, as: 'settings' },
])
class App {
    name: string;

    constructor() {
        this.name = 'Alice';
    }
}

bootstrap(App);