var sport = 'football';
var id = 5;
//id = '5'; if you set id to anything that is not a number, it shows an error
console.log("".concat(id));
// if you set confirmed to anything that is not a boolean, it shows an error
var confirmed = 'yes';
confirmed = true;
// if you set person[0] to anything that's not a boolean, it shows an error
var person = [false, 'John', 'Plumber'];
person[0] = true;
console.log("".concat(person[1], " is a ").concat(person[2]));
//reference type, sets the value once, then uses it from memory whenever used again
var origValue = { val01: 1, val02: 2 };
var refPoint = origValue.val02;
if (origValue.val01 == refPoint) {
    console.log('They\'re equal.');
}
else {
    console.log('Not even close');
}
//examples of what the type aliases can be used for, and later used in the functions below 
var itemA = {
    title: 'Box',
    serial: 234,
    inventory: 4
};
var itemB = {
    title: 'Bowl',
    serial: '2er45',
    inventory: 3
};
//functions
function buy(cart, item) {
    var theMess = '';
    if (item == 'a' || item == 'A') {
        if (cart > itemA.inventory) {
            theMess = "You can't buy that many of the ".concat(itemA.title);
        }
        else {
            theMess = "There are ".concat(itemA.inventory - cart, " of ").concat(itemA.title);
        }
    }
    else {
        if (cart > itemB.inventory) {
            theMess = "You can't buy that many of the ".concat(itemB.title);
        }
        else {
            theMess = "There are ".concat(itemB.inventory - cart, " of ").concat(itemB.title);
        }
    }
    return theMess;
}
console.log(buy(3, 'a'));
