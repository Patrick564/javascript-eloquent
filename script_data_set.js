let ages = new Map();
let eons = {
    'Anima': 01
}

ages.set('Boris', 23);
ages.set('Alexa', 19);

console.log(`Boris age is ${ages.get('Boris')}`);

console.log(eons.hasOwnProperty('Anima'));
console.log({'Boris': 22}.hasOwnProperty('Boris'));
