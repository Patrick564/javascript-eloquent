function multiplier(factor) {
    // number is another arrow function
    return number => number * factor;
}

let twice = multiplier(2);

console.log(twice(3));
