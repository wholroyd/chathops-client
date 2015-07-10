/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/custom.router.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';
import {serviceInjectables} from './services/services'

import {App} from './components/app';

bootstrap(App, [serviceInjectables, routerInjectables]);