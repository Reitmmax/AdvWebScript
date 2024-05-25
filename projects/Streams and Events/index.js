const fs = require('fs');
const eventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

// Create custom chunk size for streaming data
const CHUNK_SIZE = 64;

// Define event emitters
const emitterMess = new eventEmitter();
const emitterGame = new eventEmitter();
const emitterChar = new eventEmitter();

// Function to manipulate data in various ways
function manipulateData(character, game, name) {
    // Capitalize the first character of the character's name
    const capitalizedCharacter = character.charAt(0).toUpperCase() + character.slice(1);
    // Capitalize the first character of the name
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    // Concatenate strings
    const message = `${capitalizedName}'s favorite video game character is ${capitalizedCharacter}, from the game ${game}.`;

    // Emit events with manipulated data
    emitterMess.emit('message', message);
    emitterChar.emit('character', capitalizedCharacter);
    emitterGame.emit('game', game.toUpperCase());

    // Write message to the output file synchronously
    fs.writeFileSync('output.txt', `${message}\n`, { flag: 'a' }); // 'a' flag for appending

    // Return manipulated data
    return message;
}

// Event listener for emitterMess
emitterMess.on('message', (data) => {
    console.log(`${data}`);
});

// Event listener for emitterChar
emitterChar.on('character', (character) => {
    console.log(`Your favorite character is ${character}`);
});

// Event listener for emitterGame
emitterGame.on('game', (game) => {
    console.log(`Your favorite game is ${game}`);
});

// Ask for user's name
rl.question('What is your name? ', (name) => {
    rl.question('Enter your favorite video game character: ', (character) => {
        rl.question('Enter the game it\'s from: ', (game) => {
            // Manipulate data
            manipulateData(character, game, name);

            // Close readline interface
            rl.close();
        });
    });
});
