class Group {
    constructor() {
        this.group = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
        }
    }

    delete(value) {
        this.group = this.group.filter(v => v !== value);
    }

    has(value) {
        return this.group.includes(value);
    }

    static from(array) {
        let group = new Group;

        for (let element of array) {
            group.add(element);
        }

        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(iterGroup) {
        this.iterGroup = iterGroup;
        this.position = 0;
    }

    next() {
        if (this.position == this.iterGroup.group.length) {
            return {done: true};
        } else {
            let result = {
                value: this.iterGroup.group[this.position],
                done: false
            };
            this.position++;

            return result;
        }
    }
}

let group = Group.from([1, 2, 3]);

console.log(group.has(1));
console.log(group.has(5));
group.add(4);
group.delete(4);
console.log(group.has(4));

for (let value of Group.from([34, 56, 23, 12])) {
    console.log(`Number ${value}`);
}
