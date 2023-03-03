const palindromes = function (string) {
    const cleanString = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reversedString = cleanString.split('').reverse().join('');

    return cleanString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
