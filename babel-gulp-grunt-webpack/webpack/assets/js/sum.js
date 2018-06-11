"use strict";

var _client = require("./client.js");

var pizza = 10;
var beer = 5;
var sum = function sum(a, b) {
  return a + b + "$";
};
console.log(_client.name + ", tu dois payer " + sum(pizza, beer));