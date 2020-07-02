// use strict case
function canYouSpotTheProblem() {
    'use strict';
    for (let counter = 0; counter < 10; counter++) {
        console.log('Happy happy');
    }
}

canYouSpotTheProblem();

// without use strict
function Person(name) {
    this.name = name;
}

let ferdinand = Person('Ferdinand');

console.log(name);

// function test
function test(label, body) {
    if (!body()) {
        console.log(`Failed: ${label}`);
    }
}

test('convert Latin text to uppercase', () => {
    return 'hello'.toUpperCase() == 'HELLO';
});

test('convert Greek text to uppercase', () => {
    return 'Χαίρετε'.toUpperCase() == 'ΧΑΊΡΕΤΕ';
});

test('don\'t convert case-less characters', () => {
    return 'ࢎ࠶߈ఆ௷'.toUpperCase == 'ࢎ࠶߈ఆ௷';
});

// Errors
function promptDirection(question) {
    let result = prompt(question);

    if (result.toLowerCase() == 'left') {
        return 'L';
    }

    if (result.toLowerCase() == 'right') {
        return 'R';
    }

    throw new Error('Invalid direction: ' + result);
}

function look() {
    if (promptDirection('Which way?') == 'L') {
        return 'a house';
    } else {
        return 'two angry birds';
    }
}

try {
    console.log('You see', look());
} catch (error) {
    console.log('Something went wrong: ' + error);
}

// Error with extends
class InputError extends Error {}

function promptDir(question) {
    let result = prompt(question);

    if (result.toLowerCase() == 'left') return 'L';
    if (result.toLowerCase() == 'right') return 'R';

    throw new InputError('Invalid direction: ' + result);
}

// for (; ;) {
//     try {
//         let dir = promptDir('Where?');
//         console.log('You chose ', dir);
//         break;
//     } catch (error) {
//         if (error instanceof InputError) {
//             console.log('Not a valid direction. Try again.');
//         } else {
//             throw error;
//         }
//     }
// }

// Assertion
function firstElement(array) {
    if (array.length == 0) {
        throw new Error('firstElement called with []');
    }

    return array[0];
}
