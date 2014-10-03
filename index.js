/**
 * Dependencies
 */
var CoffeeScript= require("coffee-script");

// Register CoffeeScript if exits
if(CoffeeScript.register) CoffeeScript.register();

var semverDate = require('./lib/semverDate');

/**
 * Exports
 */
module.exports = semverDate.today;
