class Plus {
    constructor(value1, value2, action) {
        this.value1 = value1;
        this.value2 = value2;
        this.action = action;
    }

    actioner(x, y) {
        return `${(x + this.value1) * (y + this.value2)} and the ${this.action}`;
    }

    printer() {
        return `Variables used: ${this.value1}, ${this.value2}, ${this.action}`;
    }
}

class Minus extends Plus {
    constructor(value1, value2, action) {
        super(value1, value2, action);
    }

    actioner(x, y) {
        return `${this.action}, only minus ${(this.value1 + x) - (this.value2 + y)}`;
    }
}

let p = new Plus(1, 2, 'x');

console.log(p.actioner(1, 2));
console.log(p.printer());

let m = new Minus(3, 4, '-');

console.log(m.actioner(2, 1));
console.log(m.printer());

console.log(m instanceof Minus);
console.log(m instanceof Plus)
