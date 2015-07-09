/// <reference path="../../typings/bug-typescript-2953.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />

import crypto = require("crypto");

export class Encryption {
    algorithm = 'aes-256-ctr';

    password : string;

    constructor(password: string) {
        // If we don't check this, we get cipher text with no known password to decrypt it
        if (!password) {
            throw new EncryptionException("You must pass a known password with a length greater than 0.")
        }
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

export class EncryptionException {
    message: string;

    constructor(message: string) {
        this.message = message;
    }
}