import tsUnit = require('../../../node_modules/tsunit.external/tsUnit');
import Services = require('../../../app/services/hashing');

export class HashingTests extends tsUnit.TestClass {

    verify_withKnownHashAndKnownHashText_returnsTrue() {
        var target = new Services.Hashing();

        var hash = target.hash("plaintext");

        this.isTrue(target.verify("plaintext", hash));
    }
}

