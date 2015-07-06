/// <reference path="../../../typings/angular2/angular2.d.ts" />
/// <reference path="../../../typings/custom.router.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Platforms = (function () {
    function Platforms() {
        this.message = "I'm the child";
    }
    Platforms = __decorate([
        angular2_1.Component({ selector: 'platforms' }),
        angular2_1.View({ template: "<p> {{ message }} </p>" }), 
        __metadata('design:paramtypes', [])
    ], Platforms);
    return Platforms;
})();
exports.Platforms = Platforms;
//# sourceMappingURL=platforms.js.map