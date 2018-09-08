// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// # 1
// const palindrome = (str) => {
//     const reverse = str.split('').reverse().join('');
// 	return str === reverse;
// }

// # 2
// const palindrome = (str) => {
//     return str.split('').every((item, index, array) => {
//         return item === str[str.length -index -1]
//     })
// }

const palindrome = (str) => {
	const L = str.length;
	let result = true;
	for(var i=0; i<Math.floor(L/2); i++){
		if(str[i] !== str[L-i-1]){
			result = false;
			break; 
		}		
	}
	return result;
}
module.exports = palindrome;
