const loop = (value, test, update, body) => {
    do {
        body(value);
        value = update(value);
    } while (test(value));
}

loop(3, n => n > 0, n => n - 1, console.log);

// Book solution
// function loop(start, test, update, body) {
//     for (let value = start; test(value); value = update(value)) {
//         body(value)
//     }
// }
