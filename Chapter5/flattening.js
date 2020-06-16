let my_numbers = [
    [1, 2, 3],
    [5, 6, 7, 0],
    [23, 12, 67]
];

let full_array = my_numbers.reduce(
    (current, numbers) => current.concat(numbers)
);

console.log(full_array);
