// JavaScript Document
"use strict";

const $mess1 = 'These are words. Some more words.';
const $mess2 = 'This is a phrase. A very short sentence. A slightly kind of maybe long sentence.';

const $parag = ($part) => {
  console.log(`This is a paragraph made of different stuff. ${$part}`);
};

$parag($mess2);