/**
 * Created by William.Holroyd on 7/3/2015.
 */

var os = require("os");
var interfaces = os.networkInterfaces();
var addresses = {};
var fingerprint = {}

Object.keys(interfaces).filter(function(network) {
    return !interfaces[network].forEach(function(network) {
        network.mac.substr(0, network.mac.indexOf(":")) !== "00" && (addresses[network.mac] = 1)
    });
});

Object.keys(addresses).filter(function(address) {
    return !address.split(":").forEach(function (octet) {
        octet !== "00" && (fingerprint[octet] = 1);
    });
});

var temp = Object.keys(fingerprint).join("");
console.log(temp);