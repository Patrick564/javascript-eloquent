function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

let noi = noisy(Math.min)(3, 2, 1);

if (noi == 1) {
    console.log('result has returned');
} else {
    console.log('return hasnt return');
}

let a = true;

if (!a) {
    console.log('true');
}

let emote = '😃';

console.log(emote.charCodeAt(0));

console.log(emote.charCodeAt(1));

console.log('Hi'.charCodeAt());

// Return code units(full Unicode character) of string(even emotes)
console.log(emote.codePointAt(0));

console.log(emote.codePointAt(1));

console.log('Hi'.codePointAt());
