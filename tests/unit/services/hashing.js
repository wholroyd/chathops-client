var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var tsUnit = require('../../../node_modules/tsunit.external/tsUnit');
var Services = require('../../../app/services/hashing');
var HashingTests = (function (_super) {
    __extends(HashingTests, _super);
    function HashingTests() {
        _super.apply(this, arguments);
    }
    HashingTests.prototype.verify_withKnownHashAndKnownHashText_returnsTrue = function () {
        var target = new Services.Hashing();
        var hash = target.hash("plaintext");
        this.isTrue(target.verify("plaintext", hash));
    };
    return HashingTests;
})(tsUnit.TestClass);
exports.HashingTests = HashingTests;
//# sourceMappingURL=hashing.js.map