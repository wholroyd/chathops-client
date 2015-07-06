/// <reference path="../../typings/node/node.d.ts" />
var crypto = require("crypto");
var Hashing = (function () {
    function Hashing(salt) {
        this.salt = salt;
    }
    Hashing.prototype.hash = function (password) {
        var hash;
        crypto.pbkdf2(password, this.salt, 4096, 512, function (err, key) {
            hash = key.toString();
        });
        return hash;
    };
    Hashing.prototype.verify = function (password, hash) {
        return this.hash(password) === hash;
    };
    return Hashing;
})();
exports.Hashing = Hashing;
//# sourceMappingURL=hashing.js.map