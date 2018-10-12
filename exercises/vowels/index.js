// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const length = str.length
    let count = 0;
    const STR = str.toLowerCase();
    for(let i=0; i<length; i++){
        // if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') count ++
        if(STR[i] === 'a' || STR[i] === 'e' || STR[i] === 'i' || STR[i] === 'o' || STR[i] === 'u' ) count ++
    }
    return count
}

module.exports = vowels;
