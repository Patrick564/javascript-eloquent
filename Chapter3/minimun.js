const minimun = (number1, number2) => {
    if (number1 == number2) {
        return number1;
    } else if (number1 < number2) {
        return number1;
    } else {
        return number2;
    }
}

console.log(minimun(23, 45));
