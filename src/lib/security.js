/// <reference path="../node.d.ts" />
var crypto = require("crypto");
var os = require("os");
var Security;
(function (Security) {
    var Encryption = (function () {
        function Encryption(password) {
            this.algorithm = 'aes-256-ctr';
            this.password = password;
        }
        Encryption.prototype.encrypt = function (text) {
            var cipher = crypto.createCipher(this.algorithm, this.password);
            var crypted = cipher.update(text, 'utf8', 'hex');
            crypted += cipher.final('hex');
            return crypted;
        };
        Encryption.prototype.decrypt = function (text) {
            var decipher = crypto.createDecipher(this.algorithm, this.password);
            var decrypted = decipher.update(text, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        };
        return Encryption;
    })();
    Security.Encryption = Encryption;
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
    Security.Hashing = Hashing;
    var Identifier = (function () {
        function Identifier() {
        }
        Identifier.prototype.generate = function () {
            var interfaces = os.networkInterfaces();
            var addresses = {};
            Object.keys(interfaces).filter(function (network) {
                return !interfaces[network].forEach(function (network) {
                    network.mac.substr(0, network.mac.indexOf(":")) !== "00" && (addresses[network.mac] = 1);
                });
            });
            var fingerprint = {};
            Object.keys(addresses).filter(function (address) {
                return !address.split(":").forEach(function (octet) {
                    octet !== "00" && (fingerprint[octet] = 1);
                });
            });
            var uid = Object.keys(fingerprint).join("");
            uid += os.totalmem();
            uid += os.cpus().map(function (cpu) {
                return cpu.model;
            }).join(":");
            return crypto.createHash("md5").update(uid).digest("HEX");
        };
        return Identifier;
    })();
    Security.Identifier = Identifier;
})(Security || (Security = {}));
//# sourceMappingURL=security.js.map