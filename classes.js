// Test call in functions
function normalize() {
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({coords: [0, 2, 3], length: 5});

function floor() {
    console.log(this.name + this.welcome);
}

floor.call({name: 'Ellie', welcome: 'Good morning'});

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let wRabbit = {type: 'white', speak};
let hRabbit = {type: 'hungry', speak};

wRabbit.speak('Anything idk...');
hRabbit.speak('hungry or angry or something');

// Create with prototype
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit);

killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

// Create new object
function createRabbit(type) {
    let rabbit = Object.create(protoRabbit);

    rabbit.type = type;

    return rabbit;
}

console.log(createRabbit('lonely'));

// Create a new object
function Rabbity(type) {
    this.type = type;
}

Rabbity.prototype.speak = function (line) {
    console.log(`This ${this.type} and line ${line}`);
}

let weirdRabbity = new Rabbity('weird');

console.log(weirdRabbity);

// Create a new object actually
class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let kRabbit = new Rabbit('killer');
let bRabbit = new Rabbit('black');

console.log(kRabbit);
console.log(bRabbit);

// Class without name class in expressions
let object = new class { getWord() { return 'hello'; } };

console.log(object.getWord());
