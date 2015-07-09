/// <reference path="../../typings/bug-typescript-2953.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />

import crypto = require("crypto");

export class Hashing {
    algorithm = 'sha512'

    keyLength = 512;
    saltLength = this.keyLength / 8;

    constructor() {
    }

    public hash(text: string) : string {
        if (!text) {
            throw new HashingException("You must pass a value with a length greater than 0.")
        }
        var salt = crypto.randomBytes(this.saltLength >> 1).toString('hex');
        var iterations = 64000 * ((new Date().getFullYear() - 2012) + 1);
        return this.pbkdf2(text, salt, iterations);
    }

    public verify(text: string, hash: string) : boolean {
        if (!text) {
            throw new HashingException("You must pass a value with a length greater than 0.")
        }
        if (!hash) {
            throw new HashingException("You must pass a hash with a length greater than 0.")
        }
        var salt = hash.split(':')[1];
        var iterations: number = parseInt(hash.split(':')[0], 16);
        return this.pbkdf2(text, salt, iterations) === hash;
    }

    private pbkdf2(text: string, salt: string, iterations: number) : string {
        return iterations.toString(16) + ':' + salt + ':' + crypto.pbkdf2Sync(text, salt, iterations, this.keyLength >> 1, this.algorithm).toString('hex');
    }
}

export class HashingException {
    message: string;

    constructor(message: string) {
        this.message = message;
    }
}