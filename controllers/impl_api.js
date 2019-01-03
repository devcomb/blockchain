/*
 * devcomb-blockchain
 * https://github.com/devcomb/blockchain
 *
 * Copyright (c) 2018 James Drummond
 * Licensed under the Eclipse, Public, License, -, v, 2.0 licenses.
 */
 
const util = require('util');
const yamlDir = __dirname+'/config/';

//console.log(`json=${json}.`);
function getJson(yamlFile) {
    var inputfile = yamlDir+yamlFile;
    var yaml = require('js-yaml');
    var fs = require('fs');
    var obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
    var json = JSON.stringify(obj);
    return json;
};

module.exports.getCarsList = function(options) {
    var json = getJson('car-list.yml');
    console.log( "API call to getCarsList returned: " + json );
    return json;
};

