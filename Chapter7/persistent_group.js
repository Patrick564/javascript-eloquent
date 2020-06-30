class PGroup {
    constructor(data) {
        this.data = data;
    }

    add(value) {
        if (this.has(value)) {
            return this;
        }

        return new PGroup(this.data.concat([value]));
    }

    delete(value) {
        if (this.has(value)) {
            return new PGroup(this.data.filter(v => v!== value));
        }

        return this;
    }

    has(value) {
        return this.data.includes(value);
    }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add('a');
let ab = a.add('b');
let b = ab.delete('a');

console.log(b.has('b'));
console.log(a.has('b'));
console.log(b.has('a'));
