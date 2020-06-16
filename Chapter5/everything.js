const every = (array, test) => {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }

    return true;
}

const everySome = (array, test) => {
    return !array.some(element => !test(element));
}

let numbers_less_ten = [
    1, 2, 3, 4
];

let another_numbers = [
    3, 5, 1, 7, 91
];

console.log(every(numbers_less_ten, n => n < 10));

console.log(every(another_numbers, n => n < 10));
