// const solution = arr => {
	// if (arr.length == 0) return null;
	// for (let i = 1; i <= arr.length + 1; i++) if (arr.indexOf(i) < 0) return i;
// };

const solution = (arr) => arr.reduce((dif,num)=>dif-num,(arr.length+2)*(arr.length+1)/2)

console.log('solution', solution([2, 3, 1, 5]));
