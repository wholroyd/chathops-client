/// <reference path="../../typings/node/node.d.ts" />

import crypto = require("crypto");

export class Encryption {
    algorithm : string;
    password : string;

    constructor(password: string) {
        this.algorithm = 'aes-256-ctr';
        this.password = password;
    }

    public encrypt(text: string) : string {
        var cipher = crypto.createCipher(this.algorithm, this.password);
        var encrypted = cipher.update(text,'utf8','hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    public decrypt(text: string) : string {
        var decipher = crypto.createDecipher(this.algorithm, this.password);
        var decrypted = decipher.update(text,'hex','utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}
