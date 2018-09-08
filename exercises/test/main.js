// const maxChar = (str) => {
//     const charMap = {}
//     let max = 0;
//     let maxChar = '';
    
//     for(let char of str){
//         charMap[char] = charMap[char] +1 || 1;
//     }
//     for(let char in charMap){
//         if(charMap[char] > max){
//             max = charMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar || 'h';
// }
const maxChar = (str) => {
    const charMap = {}
    let max = 0;
    let maxChar = '';
    
    for(let char of str){
        charMap[char] = charMap[char] +1 || 1;
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }

    }
    return maxChar;
}
// const maxChar = (str) => {
//     const charMap = {}
//     let max = 0;
//     let maxChar = '';
    
//     for(let char of str){
//         charMap[char] = charMap[char] +1 || 1;
//         if(charMap[char] > max){
//             max = charMap[char];
//             maxChar = char;
//         }

//     }
//     return maxChar;
// }

const getTime = () => {
    return  new Date().getTime();
}
const run = (times, callBack, arg) => {
    const start = getTime();
    for(let i=0; i<times; i++){
        callBack(arg)
    }
    const end = getTime();
    console.log(`diff ${end-start}`)
}

run(1000000, maxChar, 'abcdefghijklmnopqrstuvwxyz')