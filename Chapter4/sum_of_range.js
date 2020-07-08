const range = (start, end, step=1) => {
    let numbers = [];

    if (start > end) {
        for (start; start >= end; start += step) {
            numbers.push(start);
        }
    } else {
        for (start; start <= end; start += step) {
            numbers.push(start);
        } 
    }

    return numbers;
}

const sum = (...numbers) => {
    let sum_numbers = 0;

    for (let number of numbers) {
        sum_numbers = sum_numbers + number;
    }

    return sum_numbers;
}

let array_numbers = range(5, -4, -1);

console.log(array_numbers);

console.log(sum(...array_numbers));
