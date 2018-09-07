
// const reverseInt = (n) => {
//     const revered = n.toString().split('').reverse().join('');
//     return parseInt(revered) * Math.sign(n);
// }

// const reverseInt = (n)=> {
// 	const sign = Math.sign(n);
// 	let result = 0;
// 	p = Math.abs(n);

//     const getDigit = (p) => {
//         if(p<10) {
//             result = result*10 + (p%10);
//             return;
//         }
//         result = result*10 + (p%10);
//         return getDigit(parseInt(p/10));
//     }
//     getDigit(p);
//     return result * sign
// }

const reverseInt = (n) => {
    if(n === 0) return 0;
    const sign = Math.sign(n) > 0;
    p = Math.abs(n)
    const reversedP = Number(p.toString().split('').reverse().join(''))
    
    return sign? reversedP : -1 * reversedP
    // return sign? reversedP : 0-reversedP
}


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

run(1000000, reverseInt, 1234567)

