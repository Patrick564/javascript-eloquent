class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(value_x, value_y) {
        let sum_x = this.x + value_x;
        let sum_y = this.y + value_y;

        return `Vec{x: ${sum_x}, y: ${sum_y}}`;
    }

    minus(value_x, value_y) {
        let minus_x = this.x - value_x;
        let minus_y = this.y - value_y;

        return `Vec{x: ${minus_x}, y: ${minus_y}}`;
    }

    get length() {
        let sqr_x = this.x ** 2;
        let sqr_y = this.y ** 2;

        return `Vector length is: ${((sqr_x + sqr_y) ** 0.5)}`;
    } 
}

let vector = new Vec(3, 4);

console.log(vector.plus(1, 2));
console.log(vector.minus(3, 1));
console.log(vector.length);
