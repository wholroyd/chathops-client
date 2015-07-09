var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var tsUnit = require('../../../node_modules/tsunit.external/tsUnit');
var Services = require('../../../app/services/encryption');
var EncryptionTests = (function (_super) {
    __extends(EncryptionTests, _super);
    function EncryptionTests() {
        _super.apply(this, arguments);
    }
    EncryptionTests.prototype.constructor_withBlankPassword_throwsEncryptionException = function () {
        try {
            var target = new Services.Encryption("");
        }
        catch (e) {
            this.isTrue(e instanceof Services.EncryptionException);
        }
    };
    EncryptionTests.prototype.encrypt_withKnownPasswordAndKnownPlainText_generatesKnownCipherText = function () {
        var target = new Services.Encryption("test");
        this.areIdentical("713c5bb3971f1e7dc8", target.encrypt("plaintext"));
    };
    EncryptionTests.prototype.decrypt_withKnownPasswordAndKnownCipherText_generatesKnownPlainText = function () {
        var target = new Services.Encryption("test");
        this.areIdentical("plaintext", target.decrypt("713c5bb3971f1e7dc8"));
    };
    return EncryptionTests;
})(tsUnit.TestClass);
exports.EncryptionTests = EncryptionTests;
//# sourceMappingURL=encryption.js.map