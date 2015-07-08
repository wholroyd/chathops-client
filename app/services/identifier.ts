/// <reference path="../../typings/bug-typescript-2953.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />

import crypto = require("crypto");
import os = require("os");

export class Identifier {

    public generate() : string {

        var interfaces = os.networkInterfaces();

        var addresses = {};
        Object.keys(interfaces).filter(function(network) {
            return !interfaces[network].forEach(function(network) {
                network.mac.substr(0, network.mac.indexOf(":")) !== "00" && (addresses[network.mac] = 1)
            });
        });

        var fingerprint = {};
        Object.keys(addresses).filter(function(address) {
            return !address.split(":").forEach(function (octet) {
                octet !== "00" && (fingerprint[octet] = 1);
            });
        });

        var uid = Object.keys(fingerprint).join("");
        uid += os.totalmem();
        uid += os.cpus().map( function( cpu ){ return cpu.model } ).join( ":" );

        return crypto.createHash( "md5" ).update( uid ).digest( "HEX" );
    }
}