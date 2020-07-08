let re1 = new RegExp('abc');
let re2 = /eighteen\+/;

console.log(/abc/.test('abcde'));
console.log(/abc/.test('abxde'));

console.log(/[0123456789]/.test('in 1992'));
console.log(/[0-9]/.test('in 1992'));

let dateTime = /\d\d-\d\d-\d\d\d\d\ \d\d:\d\d/;

console.log(dateTime.test('01-30-2003 15:20'));
console.log(dateTime.test('30-jan-2003 15:20'));

console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

let neighbor = /neighbou?r/;

console.log(neighbor.test('neighbour'));
console.log(neighbor.test('neighbor'));

let dateT = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateT.test('1-30-2003 8:45'));

let match = /\d+/.exec('one two 100');

console.log(match);
console.log(match.index);

console.log(new Date());
console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387407600000));

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    console.log(_, month, day, year);

    return new Date(year, month - 1, day);
}

console.log(getDate('1-30-2003'));

console.log('papa'.replace('p', 'm'));
console.log('Borobudur'.replace(/[ou]/g, 'a'));

let s = 'the cia and fbi';

console.log(s.replace(
    /\b(fbi|cia)\b/g,
    str => str.toUpperCase() 
));

let stock = '1 lemon, 2 cabbages, and 101 eggs';

function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;

    if (amount == 1) {
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = 'no';
    }

    return amount + ' ' + unit;
}

console.log(stock.replace(
    /(\d+) (\w+)/g,
    minusOne
));

let name = 'harry';
let text = 'Harry is a suspicius character';
let regexp = new RegExp('\\b(' + name + ')\\b', 'gi');

console.log(text.replace(regexp, '_$1_'));

let name2 = 'dea+hl[]rd';
let text2 = 'This dea+hl[]rd gut is super annoying';
let escaped = name2.replace(/[\\[.+*?(){|^$]/g, '\\$&');
let regexp2 = new RegExp('\\b' + escaped + '\\b', 'gi');

console.log(text2.replace(regexp2, '_$&_'));

let pattern = /y/g;
pattern.lastIndex = 2;
let matchP = pattern.exec('xyzzzyzx');

console.log(matchP.index);
console.log(pattern.lastIndex);

let global = /abc/g;

console.log(global.exec('xyz abc'));

let sticky = /abc/y;

console.log(sticky.exec('xyz abc'));

let input = 'A string with 3 numbers in it... 42 and 88.';
let number = /\b\d+\b/g;
let matchL;

while (matchL = number.exec(input)) {
    console.log('Found', matchL[0], 'at', matchL.index);
}
