/// <reference path="../../../typings/angular2/angular2.d.ts" />
/// <reference path="../../../typings/custom.router.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({ selector: 'conversations' })
@View({ template: `<p> {{ message }} </p>` })
export class Conversations {
    message: string;
    constructor() {
        this.message = "I'm the child";
    }
}