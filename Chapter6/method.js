let Counter = {
    name: 'Peco',
    age: 23,
    size: 'C',
    hasOwnProperty: true,
};

console.log(Counter.name);
console.log(Counter.hasOwnProperty);
console.log(Object.prototype.hasOwnProperty.call(Counter, 'noExist'));
