/// <reference path="../../typings/bug-typescript-2953.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />
var crypto = require("crypto");
var Hashing = (function () {
    function Hashing() {
        this.algorithm = 'sha512';
        this.keyLength = 512;
        this.saltLength = this.keyLength / 8;
    }
    Hashing.prototype.hash = function (text) {
        if (!text) {
            throw new HashingException("You must pass a value with a length greater than 0.");
        }
        var salt = crypto.randomBytes(this.saltLength >> 1).toString('hex');
        var iterations = 64000 * ((new Date().getFullYear() - 2012) + 1);
        return this.pbkdf2(text, salt, iterations);
    };
    Hashing.prototype.verify = function (text, hash) {
        if (!text) {
            throw new HashingException("You must pass a value with a length greater than 0.");
        }
        if (!hash) {
            throw new HashingException("You must pass a hash with a length greater than 0.");
        }
        var salt = hash.split(':')[1];
        var iterations = parseInt(hash.split(':')[0], 16);
        return this.pbkdf2(text, salt, iterations) === hash;
    };
    Hashing.prototype.pbkdf2 = function (text, salt, iterations) {
        return iterations.toString(16) + ':' + salt + ':' + crypto.pbkdf2Sync(text, salt, iterations, this.keyLength >> 1, this.algorithm).toString('hex');
    };
    return Hashing;
})();
exports.Hashing = Hashing;
var HashingException = (function () {
    function HashingException(message) {
        this.message = message;
    }
    return HashingException;
})();
exports.HashingException = HashingException;
//# sourceMappingURL=hashing.js.map