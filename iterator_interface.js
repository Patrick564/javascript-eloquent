// Symbols and first iterator
const toStringSymbol = Symbol('toString');

Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

let okIterator = 'sep'[Symbol.iterator]();

console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

let stringObject = {
    [toStringSymbol]() { return 'a jute rope'; }
};

console.log(stringObject[toStringSymbol]());

// Iterator matrix
class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

// Getter and setters
let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};

console.log(varyingSize.size);

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    // Return the temperature celsius value in fahrenheit
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    // Set a fahrenheit value and convert in celsius too
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    // A method to create a new Temperature with fahrenheit instead celsius
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);

console.log(temp.fahrenheit);

temp.fahrenheit = 92;
console.log(temp.celsius);

let fromTemp = Temperature.fromFahrenheit(140);

console.log(fromTemp.celsius);
console.log(fromTemp.fahrenheit);
