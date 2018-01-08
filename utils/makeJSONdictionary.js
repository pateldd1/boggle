const fs = require('fs');

const dictionary = fs.readFileSync('./utils/dictionary.txt').toString().split('\n');

const DICTIONARY = {};

dictionary.forEach((word) => {
    DICTIONARY[word] = true;
});

fs.writeFileSync('./utils/jsonDictionary.js', JSON.stringify(DICTIONARY));

