const solution = (x, arr) => {
    
	let arrCheck = [];
	for (let i = 0; i < arr.length; i++) {
		if (!arrCheck[arr[i]]) {
			arrCheck[arr[i]] = true;
			x -= 1;
			if (x == 0) return i;
        }
        
    }
    return -1
};

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
