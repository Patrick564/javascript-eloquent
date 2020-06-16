const deepEqual = (object1, object2) => {
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);
    console.log(keys1);
    console.log(keys2);

    if (object1 === object2) {
        return true;
    }

    if (object1 == null || typeof(object1) != 'object' || object2 == null || typeof(object2) != 'object') {
        return false;
    }

    if (keys1.length != keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(object1[key], object2[key])) {
            return false;
        }
    }

    return true;
}

let val1 = {here: {is: 'de'}, object: 2};
let val2 = {here: 1, object: 2};
let val3 = {here: {is: 'de'}, object: 2};
let val4 = {here: 1, object: 2};

console.log(deepEqual(val1, val2));
