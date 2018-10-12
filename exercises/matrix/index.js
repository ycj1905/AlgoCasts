// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2], 2 1 1
//     [4, 3]]  x y -x
//   matrix(3)
//     [[1, 2, 3],  3  2  2  1  1
//     [8, 9, 4],   x y -x -y x
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4], 4 3 3 2 2 1 1
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//  matrix(5)
//     [[1,   2,  3, 4, 5],   5  -4  -4  3  3  -2  -2  1  1 個數
//     [16, 17, 18, 19, 6],  
//     [15, 24, 25, 20, 7],   1  2  3  4  5  6  7  8  9  次數
//     [14,  23,  22, 21, 8]]
//     [13,  12,  11, 10, 9]]
initArray = (n) => {
    return new Array(n*n)
}
createPath = (n) => {
    let path = [];
    path.push(n)
    for(let i=n-1; i>0; i--){
		path.push(-1 * i)
		path.push(i)
	}
    return path;
}

fillArray = (x, y, src) => {

}
getPosition = (n, path) => {
    let x, y =0;
    path.forEach((s, i)=>{
        if(i/2 === 0){
            for(let i=0; i<Math.abs(s); i++){
                s>0 ? x++ : x--;
            }
        }else {
            for(let i=0; i<Math.abs(s); i++){
                s>0 ? y++ : y--;
            }
        }
    })
    return [x,y]
}

matrix = (n) => {
    total = n*n;
    result = initArray();
    path = createPath();
    
    for(let i=0; i<total; i++){
        coord = getPosition(i, path);
        fillArray(coord[0], coord[1], total)
    }
}



// list = [];
// const initArray = (n) => {
//     for(let i=0; i<n; i++){
// 		list.push(new Array(n))
// 	}
// }
// // const checkBoundary = (x, y, size) => {
// //     return (x === size || y === size) ? true : false
// // }
// const fillArray = (x, y, value) => {
//     list[x][y] = value
// }
// const createPath = (n) => {
//     let path = [];
//     path.push(n)
//     for(let i=n-1; i>0; i--){
// 		path.push(i)
// 		path.push(i)
// 	}
//     // return path;
//     d = []
//     path.forEach((s)=>{
//         d.push(new Array(s))
//     })
//     return d;
// }
// function matrix(n) {
//     initArray(n)
//     const pathArray = createPath(n)
//     for(let i=1; i<n*n; i++){
//         pathArray[i]
//         fillArray(i)
//     }

// // }



// initArray = (n) => {
//     return new Array(n*n)
// }
// createPath = (n) => {
//     let path = [];
//     path.push(n)
//     for(let i=n-1; i>0; i--){
// 		path.push(i)
// 		path.push(i)
// 	}
// 	return path
// }

// function matrix(n) {
//     arry = initArray(n)
//     const pathArray = createPath(n)
// 	d = [];
//     pathArray.forEach((s)=>{
//         d.push(arry.slice(0,s))
//     })
//     console.log(d)
//     for(let i=0; i<d.length; i++){
//         L = d[i].length;
//         for(let j=0; j<L; j++){
//             d[i] = j;
//         }
//     }
// }
module.exports = matrix;
