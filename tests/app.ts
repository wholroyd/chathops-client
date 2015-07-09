import tsUnit = require('../node_modules/tsunit.external/tsUnit');
import readline = require('readline');

var tests = new tsUnit.Test();

import enc = require('./unit/services/encryption');
tests.addTestClass(new enc.EncryptionTests, 'Encryption');

import hash = require('./unit/services/hashing');
tests.addTestClass(new hash.HashingTests, 'Hashing');


var resultsGroup: string;
var results = tests.run();

console.log("");
console.log("The following tests SUCCEEDED:");
console.log("");

results.passes.forEach(pass => {
    if (resultsGroup !== pass.testName) {
        resultsGroup = pass.testName;
        console.log(pass.testName);
    }
    console.log('    ' + pass.funcName);
});

resultsGroup = "";

console.log("");
console.log("The following tests FAILED:");
console.log("");

results.errors.forEach(error => {
    if (resultsGroup !== error.testName) {
        resultsGroup = error.testName;
        console.log(error.testName);
    }
    console.log('    ' + error.funcName + '...');
    console.log('         ' + error.message);
});

console.log("");
console.log('Errors: ' + results.errors.length);
console.log("");

if (results.errors.length) {
    process.exit(1);
}