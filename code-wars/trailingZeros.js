var f = [];

function zeros(n) {
	// const fact = (n) => n == 0 || n == 1 ? 1 : fact(n-1) * n;
    let trail = 0;
    console.log('Math.trunc(Math.log2(n) / Math.log2(5)) :', Math.trunc(Math.log2(n) / Math.log2(5)));
	for (let k = 1; k <= Math.trunc(Math.log2(n) / Math.log2(5)); k++){
        console.log('trail', trail)
        console.log('n', n)
        console.log(`Math.pow(5, ${k})`, Math.pow(5, k))
        trail += n / Math.pow(5, k);
    }

	return Math.trunc(trail);
}

// const zeros = (n) => n == 0 || n == 1 ? 1 : (f[n] > 0) ? f[n] : f[n] = zeros(n-1) * n

console.log(zeros(30));
console.log(zeros(758945496));
