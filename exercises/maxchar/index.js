// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// # 1
const maxChar = (str) => {
    const charMap = {}
    let max = 0;
    let maxChar = '';
    for(let char of str){
        charMap[char] = charMap[char] +1 || 1;
    }
    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
// const maxChar = (str) => {
//     let l = str.length;
//     let dict = []
//     for(let char of str){
//         dict[char] = dict[char]++ || 1;
//     }
//     console.log(dict)
//     // return Math.max.apply(null, dict)
//     // return dict.reduce((min, val) => val < min ? val : min, dict[0]);
// }

maxChar('abcccccccd')
module.exports = maxChar;
