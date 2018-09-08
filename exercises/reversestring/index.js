// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// # 1
// const reverse = (str) => {
//     return str.split('').reverse().join('')
// }

// # 2
// const reverse = (str) => {
//     let result = '';
//     for(let char of str) {
//         result = char + result;
//     }
//     return result;
// }

// # 3
// const reverse = (str) => {
//     return str.split('').reduce((accumulator, currentValue, index, array)=>{
//         return currentValue + accumulator;
//     }, '')
// }
// reverse('abcd')


// 
const reverse = (str) => {
    const Length = str.length;
    let result = '';
    for(let i=Length-1; i>=0; i--){
        result += str[i]
    }
    return result;
}



module.exports = reverse;
