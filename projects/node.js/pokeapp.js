// JavaScript Document
"use strict"

const favoriteIndex = require('./favorite.js');
const pokemonArray = require('./pokemon.js');

const favorite = pokemonArray[favoriteIndex]; // selects a random number within the array and sets the value to what is in that spot

function logFavoriteStatus(pokemon) {
  if (pokemon === favorite) { // if the pokemon is the favorite...
    console.log(`${pokemon} is my favorite Pokemon!`);
  } else { // if the pokemon isn't the favorite...
    console.log(`${pokemon} is not my favorite Pokemon.`);
  }
}

// Using if/else statement
for (let i = 0; i < pokemonArray.length; i++) { // uses the array to set the pokemon variable
  const pokemon = pokemonArray[i];
  logFavoriteStatus(pokemon);
}

// Using switch statement with fall-through
switch (favorite) { //switches between each pokemon, tells if it is the favorite or not.
  case "Pikachu":
		 logFavoriteStatus(favorite); // calls the logFavoriteStatus function, which will tell which one is the favorite a second time.
		break
  case "Altaria":
		 logFavoriteStatus(favorite);
		break
  case "Rayquaza":
		 logFavoriteStatus(favorite);
		break
  case "Mr. Mime":
		 logFavoriteStatus(favorite);
		break
  case "Charizard":
    logFavoriteStatus(favorite); 
    break; // exits switch
  default:
    console.log("No favorite Pokemon selected.");
}