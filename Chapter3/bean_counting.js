const countChar = (word, character) => {
    let bLetters = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] == character) {
            bLetters++;
        }
    }

    return bLetters;
}

const countBs = (word) => {
    return countChar(word, 'B');
}

console.log(countBs('BuenasBaaa', 'a'));
