let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;

console.log(number.test('1.3e2'));
console.log(number.test('1f5'));
