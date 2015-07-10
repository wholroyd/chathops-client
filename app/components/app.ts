/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/custom.router.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Router, RouteConfig, routerDirectives, routerInjectables} from 'angular2/router';

import {Authentication} from './authentication/authentication';
import {Conversations} from './conversations/conversations';
import {Platforms} from './platforms/platforms';
import {Settings} from './settings/settings';
import {Profile} from './profile/profile';
import {Manage} from './manage/manage';

@Component({ selector: 'app' })
@View({ template: '<h1>{{ message }}</h1><br><p>Stage: {{ stage }}</p><br><input (keyup)="advance()">' })
@RouteConfig([
    { path: '/', redirectTo: '/authentication'},
    { path: '/authentication', component: Authentication, as: 'authentication' },
    { path: '/manage', component: Manage, as: 'manage' },
    { path: '/settings', component: Settings, as: 'settings' },
])
export class App {
    message: string;
    stage: number;

    constructor() {
        this.message = 'Welcome to ChatHops';
        this.stage = 0;
    }

    public advance() {
        switch(this.stage) {
            case 0:
                this.message = "stage 0";
                break;
            case 1:
                this.message = "stage 1";
                break;
            default:
                this.message = "stage 2";
                break;
        }
        this.stage++;
    }
}