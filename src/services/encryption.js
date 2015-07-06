/// <reference path="../../typings/node/node.d.ts" />
var crypto = require("crypto");
var Encryption = (function () {
    function Encryption(password) {
        this.algorithm = 'aes-256-ctr';
        this.password = password;
    }
    Encryption.prototype.encrypt = function (text) {
        var cipher = crypto.createCipher(this.algorithm, this.password);
        var encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    };
    Encryption.prototype.decrypt = function (text) {
        var decipher = crypto.createDecipher(this.algorithm, this.password);
        var decrypted = decipher.update(text, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    };
    return Encryption;
})();
exports.Encryption = Encryption;
//# sourceMappingURL=encryption.js.map