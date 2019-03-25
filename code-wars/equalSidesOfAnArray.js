// You are going to be given an array of integers. Your job is
// to take that array and find an index N where the sum of the
// integers to the left of N is equal to the sum of the integers
// to the right of N. If there is no index that would make this
// happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd
// position of the array, the sum of left side of the index ({1,2,3})
// and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st
// position of the array, the sum of left side of the index ({1}) and
// the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0
// in this problem)
// Index 0 is the place where the left side and right side are equal.
function findEvenIndex(arr) {
    let index = 1
    let sumA = sumArr(arr.slice(0,index))
    let sumB = sumArr(arr.slice(index+1))

    while (sumA!==sumB) {
        if(sumA===0 || sumB===0) return -1

        index = index + 1;

        sumA = sumArr(arr.slice(0,index))
        sumB = sumArr(arr.slice(index+1))

        console.log('sumA', sumA)
        console.log('sumB', sumB)
        // if(sumA===sumB) {
        //     return index
        // }
        
    }
	return index
}

const sumArr = arr => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
};

findEvenIndex([1, 2, 3, 4, 3, 2, 1]); //-> 3
findEvenIndex([1, 100, 50, -51, 1, 1]); //-> 1
findEvenIndex([1, 2, 3, 4, 5, 6]); // -> -1
findEvenIndex([20, 10, 30, 10, 10, 15, 35]); // -> 3
