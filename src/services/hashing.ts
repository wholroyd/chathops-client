/// <reference path="../../typings/node/node.d.ts" />

import crypto = require("crypto");

export class Hashing {
    salt : string;

    constructor(salt: string) {
        this.salt = salt;
    }

    public hash(password: string) : string {
        var hash;
        crypto.pbkdf2(password, this.salt, 4096, 512, function(err, key) {
            hash = key.toString();
        });
        return hash;
    }

    public verify(password: string, hash: string) : boolean {
        return this.hash(password) === hash;
    }
}