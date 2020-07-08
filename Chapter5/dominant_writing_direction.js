require('../Higher-Order-ch5/code/scripts');

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {

            return script;
        }
    }

    return null;
}
  
function countBy(items, groupName) {
    let counts = [];

    for (let item of items) {
        let direction = groupName(item);
        let known = counts.findIndex(c => c.direction == direction);

        if (known == -1) {
            counts.push({direction, count: 1});
        } else {
            counts[known].count++;
        }
    }

    return counts;
}

function readDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));

        return script ? script.direction : 'none';
    }).filter(({direction}) => direction != 'none');

    let total = scripts.reduce((n, {count}) => n + count, 0);

    return scripts.map(({direction, count}) => {
        return `${Math.round(count * 100 / total)}% ${direction}`;
    }).join(', ');
}

let firsWord = 'hola y una prueba como palabra, hi مساء الخير';

console.log(readDirection(firsWord));
