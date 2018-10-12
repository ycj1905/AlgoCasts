// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#' 1 1
//   pyramid(2)
//       ' # ' 1 2
//       '###' 2 2
//   pyramid(3)
//       '  #  ' 1 3
//       ' ### ' 2 3
//       '#####' 3 3
const printBlock = (i, stairs) => {
    const maxBlocks = 2 * (stairs-1) + 1
    const blocks = 2 * (i-1) + 1
    const side = (maxBlocks - blocks)/2
    let pattern = ''
    
    for(let i=0; i<side; i++){
        pattern += ' '
    }
    for(let i=0; i<blocks; i++){
        pattern += '#'
    }
    for(let i=0; i<side; i++){
        pattern += ' '
    }
    console.log(pattern)
}
const pyramid = (stairs) => {
    for(let i=1; i<stairs+1; i++){
        printBlock(i, stairs)
    }
}

module.exports = pyramid;
