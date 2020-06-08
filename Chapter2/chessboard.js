let size = 8;
let chess = '';
let order = 1;

for (let i = 1; i <= (size ** 2); i++) {
    if ((order % 2) == 0) {
        if ((i % 2) == 0) {
            chess += '#';
        } else {
            chess += '  ';
        }
    } else {
        if ((i % 2) != 0) {
            chess += '#';
        } else {
            chess += '  ';
        }
    }

    if ((i % size) == 0) {
        chess += '\n';
        order++;
    }
}
console.log(chess);

/*
Book solution.

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

*/
