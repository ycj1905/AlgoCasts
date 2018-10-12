// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
const printStep = (s, total) => {
    let steps = '';
    for(let i=0; i<s; i++){
        steps += '#'
    }
    for(let i=0; i<total-s; i++){
        steps += ' '
    }
    console.log(steps)
}
const steps = (total) => {
    for(let i=1; i<total+1; i++){
        printStep(i, total)
    }
}

module.exports = steps;
