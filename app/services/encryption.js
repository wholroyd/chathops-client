/// <reference path="../../typings/bug-typescript-2953.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />
var crypto = require("crypto");
var Encryption = (function () {
    function Encryption(password) {
        this.algorithm = 'aes-256-ctr';
        // If we don't check this, we get cipher text with no known password to decrypt it
        if (!password) {
            throw new EncryptionException("You must pass a known password with a length greater than 0.");
        }
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
var EncryptionException = (function () {
    function EncryptionException(message) {
        this.message = message;
    }
    return EncryptionException;
})();
exports.EncryptionException = EncryptionException;
//# sourceMappingURL=encryption.js.map