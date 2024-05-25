// JavaScript Document
"use strict";

const $mess1 = 'These are words. Some more words.';
const $mess2 = 'This is a phrase. A very short sentence. A slightly kind of maybe long sentence.';

const $messages = [$mess1, $mess2];

var $states = 1;

const $rating = ($states > 2) ? 'There are a lot of statements here.' : 'This is a fairly short statement.';

const $parag = ($part) => {
  console.log(`This is a paragraph made of different stuff. ${$part}`);
};

let i = 0;
while (i <= 1) {
$parag($messages[i]);
$states++;
i++;
}

console.log($rating);





// $parag($mess2);