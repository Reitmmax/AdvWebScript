// JavaScript Document
const $messages = require('./M05_messages');

const $parag = require('./M05_func');

var $states = 1;

$parag('This is a test sentence. Short and sweet. Does it work?');

let i = 0;
while (i <= 1) {
$parag($messages[i]);
$states++;
i++;
}
const $rating = ($states > 2) ? 'There are a lot of statements here.' : 'This is a fairly short statement.';
console.log($rating);