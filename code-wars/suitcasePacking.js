// Mr. Square is going on a holiday. He wants to bring 2 of
// his favorite squares with him, so he put them in his rectangle
// suitcase.

// Write a function that, given the size of the squares and the
// suitcase, return whether the squares can fit inside the suitcase.

function fit_in(a, b, m, n) {
	return (a+b<m && a<n &&b<n) || (a+b<n&&a<m &&b<m) // ? true :  false  // <- meu
}
//return Math.min(m,n) >= Math.max(a,b) && Math.max(m,n) >= a+b;

console.log(fit_in(7,2,8,7)); 
console.log(fit_in(40,46,60,71)); 
console.log(fit_in(3,1,5,2)); 



