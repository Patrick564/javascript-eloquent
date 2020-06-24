class ShowArray {
    constructor(array) {
        this.array = array;
    }

    show() {
        return this.array;
    }

    [Symbol.iterator]() {
        return new IterableArray(this);
    }
}

class IterableArray {
    constructor(array) {
        this.position = 0;
        this.array = array;
    }

    iter() {
        if (this.position == this.array.array.length) {
            return {};
        } else {
            let value = {
                value: this.array.array[this.position],
            };

            this.count++;

            return value;
        }
    }
}

let showArray = new ShowArray([1, 3, 4, 6]);

console.log(showArray.show());

let iterArray = new ShowArray([3, 5, 6, 7]);

console.log(iterArray.show());

for (let value of iterArray.show()) {
    console.log(value);
}
