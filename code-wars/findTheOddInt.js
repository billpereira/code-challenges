// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
function findOdd(A) {
	//happy coding!
    A.sort();
    console.log('A :', A);
	// let count = 1;
	for (let i = 0; i < A.length - 1; i++) {
        let count = 1 + A.lastIndexOf(A[i]);
		if ((count) % 2 !== 0) return A[count-1];
		i = A.lastIndexOf(A[i]);
	}
	return 0;
}

console.log(findOdd([ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ]));
