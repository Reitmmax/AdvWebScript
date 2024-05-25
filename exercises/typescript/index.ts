let sport = 'football';
let id = 5;

//id = '5'; if you set id to anything that is not a number, it shows an error

console.log(`${id}`);

// if you set confirmed to anything that is not a boolean, it shows an error
let confirmed: string | boolean = 'yes';
confirmed = true;

// if you set person[0] to anything that's not a boolean, it shows an error
let person = [false, 'John', 'Plumber'];
person[0] = true;
console.log(`${person[1]} is a ${person[2]}`);


//reference type, sets the value once, then uses it from memory whenever used again
let origValue = {val01: 1, val02: 2};
let refPoint = origValue.val02;

if (origValue.val01 == refPoint) {
    console.log('They\'re equal.');
} else {
    console.log('Not even close');
}
// type alias creates your own type of data
type myAlias = string | number;

type itemObj = {
    title: string;
    serial: myAlias;
    inventory: number;
}
//examples of what the type aliases can be used for, and later used in the functions below 
const itemA: itemObj = {
    title: 'Box',
    serial: 234,

   inventory: 4
}

const itemB: itemObj = {
    title: 'Bowl',
    serial: '2er45',

    inventory: 3
}

//functions
function buy(cart:number, item:string):string {
	let theMess = '';
	if (item == 'a' || item == 'A') {
        if (cart > itemA.inventory){
            theMess = `You can't buy that many of the ${itemA.title}`;
        } else {
        theMess = `There are ${itemA.inventory-cart} of ${itemA.title}`;
        }
    } else {
        if (cart > itemB.inventory) {
            theMess = `You can't buy that many of the ${itemB.title}`;
        } else {
            theMess = `There are ${itemB.inventory-cart} of ${itemB.title}`;
        }
    }
  return theMess;
}
	console.log(buy(3, 'a'))