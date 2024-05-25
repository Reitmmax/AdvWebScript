// JavaScript Document
"use strict"
const _ = require('lodash');

var $array01 = ['Rose', 'Tulip', 'Orchid', 'Hyacinth', 'Lily', 'Daffoldil'];
var $array02 = ['Poppy', 'Sunflower', 'Hyacinth', 'Bellflower', 'Cactus', 'Rose'];
// Javascript code
//var $result = [];
//
//for (let i = 0; i < $array01.length; i++) {
//if ($array02.indexOf($array01[i] !== -1)) {
//let indexpos = $array02.indexOf($array01[i]);
//$result.push($array02[indexpos]);
//}
//}
//console.log($result);


// Lodash
console.log(_.intersection($array01,$array02));