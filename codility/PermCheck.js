const solution = arr => {
	let dup = [];
	let perm = ((arr.length + 1) * arr.length) / 2;
	for (let i = 0; i < arr.length; i++) {
		if (dup[arr[i]] >= 0) dup[arr[i]] += 1;
		else dup[arr[i]] = 1;
		perm -= arr[i];
		if (perm < 0 || dup[arr[i]] >= 2) return 0;
	}
	if (perm < 0 || perm > 0) return 0;
	return 1;
};

console.log(solution([4, 1, 3, 2]));
console.log(solution([4, 1, 3]));
console.log(solution([1, 4, 1]));
