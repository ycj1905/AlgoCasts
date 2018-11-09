function *numbers(){
    yield 1
    yield 2
    yield* moreNumbers() 
    yield 6
    yield 7
}
function *moreNumbers(){
    yield 3
    yield 4
    yield 5
}

var generator = numbers()

for(let value of generator){
    console.log(value)
}