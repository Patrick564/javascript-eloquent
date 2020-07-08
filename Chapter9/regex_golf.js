function regexMatch(regex, correct, incorrect) {
    for (let exp of correct) {
        if (!regex.test(exp)) {
            console.log(`Failure to match '${exp}'`);
        }
    }

    for (let exp of incorrect) {
        if (regex.test(exp)) {
            console.log(`Unexpected match for '${exp}'`);
        }
    }
}

regexMatch(
    /ca[rt]/,
    ['my car', 'bad cats'],
    ['camper', 'high art']
);

regexMatch(
    /pr?op/,
    ['pop culture', 'mad props'],
    ['plop', 'prrrop']
);

regexMatch(
    /ferr(et|y|ari)/,
    ['ferret', 'ferry', 'ferrari'],
    ['ferrum', 'transfer A']
);

regexMatch(
    /ious\b/,
    ['how delicious', 'spacious room'],
    ['ruinous', 'consciousness']
);

regexMatch(
    /\s[;:,.]/,
    ['bad punctuation .'],
    ['escape the dot']
);

regexMatch(
    /\w{7}/,
    ['hottentottententen'],
    ['no', 'hotten totten tenten']
);

regexMatch(
    /\b[^\We]+\b/i,
    ['red platypus', 'wobbling nest'],
    ['earth bed', 'learning ape', 'BEET']
);
