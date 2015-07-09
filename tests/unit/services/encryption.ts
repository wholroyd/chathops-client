import tsUnit = require('../../../node_modules/tsunit.external/tsUnit');
import Services = require('../../../app/services/encryption');

export class EncryptionTests extends tsUnit.TestClass {

    constructor_withBlankPassword_throwsEncryptionException() {
        try {
            var target = new Services.Encryption("");
        } catch (e) {
            this.isTrue(e instanceof Services.EncryptionException);
        }
    }

    encrypt_withKnownPasswordAndKnownPlainText_generatesKnownCipherText() {
        var target = new Services.Encryption("test");

        this.areIdentical("713c5bb3971f1e7dc8", target.encrypt("plaintext"));
    }

    decrypt_withKnownPasswordAndKnownCipherText_generatesKnownPlainText() {
        var target = new Services.Encryption("test");

        this.areIdentical("plaintext", target.decrypt("713c5bb3971f1e7dc8"));
    }
}

