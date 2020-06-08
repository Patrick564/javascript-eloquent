const arrayToList = (...array) => {
    let list = null;

    for (let element of array) {
        list = {
            value: element,
            rest: list
        };
    }

    return list;
}

const listToArray = (list) => {
    let my_array = [];

    for (let rest = list; rest; rest = rest.rest) {
        my_array.push(rest.value);
    }

    return my_array;
}

const prepend = (element, list) => {
    let help_list;

    help_list = {
        value: element,
        rest: list
    }

    return help_list;
}

const nth = (list, number) => {
    let element_list;

    if (list == null) {
        return element_list = undefined;
    }

    if (number == 0) {
        element_list = list.value;
    } else {
        let rest = list.rest;
        element_list = nth(rest, number - 1);
    }

    return element_list;
}

let my_array = [1, 2, 3];
let array_list = arrayToList(...my_array);

console.log(array_list);

console.log(listToArray(array_list));

console.log(prepend(8, array_list));

console.log(nth(array_list, 0));
