//

const solution =( A)=> {

    if(A.length >= 100000) return -1;
    var west = 0
    var east = 0;
    //var west = 0;
    for(var i in A) {
        if(A[i] == 0) {
            east++;
        } else {
            if (west>=1000000000) return -1
            west+=east;
        }
    }
    return west;
}

// const solution = arr =>
// 	arr.length > 10 ** 9
// 		? -1
// 		: (pairCars = arr
// 				.reduce(
// 					(arr, n) => {
// 						if (n == 0) arr[0] += 1;
// 						else arr[1] += 1;
// 						return arr;
// 					},
// 					[0, 0]
// 				)
// 				.reduce((a, b) => a + b));

console.log(solution([0, 1, 0, 1, 1]));
console.log(solution([1]));
