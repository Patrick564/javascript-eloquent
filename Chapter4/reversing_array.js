const reverseArray = (...array) => {
    let reverse_array = [];
    let i = array.length - 1;

    for (i; i >= 0; i--) {
        reverse_array.push(array[i]);
    }

    return reverse_array;
}

const reverseArrayInPlace = (...array) => {
    let spliced_array = array.splice(0);
    let i = spliced_array.length;

    for (i; i > 0; i--) {
        array.push(spliced_array[i - 1]);
        spliced_array.pop();
    }

    return array;
}

let my_numbers = [1, 3, 4, 2];

console.log(reverseArray(...my_numbers));

console.log(reverseArrayInPlace(...my_numbers));
