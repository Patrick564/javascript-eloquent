const isEven = (number) => {
    if (number == 0) {
        return true;
    } else if (number == 1) {
        return false;
    } else if (number < 0) {
        return isEven(-number);
    }

    return (false || isEven(number - 2));
}

console.log(isEven(4));
