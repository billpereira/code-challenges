function add(a, b) {
	if (a.length < 10) return (Number(a) + Number(b)).toString();

	let x1 = a
		.split('')
		.reverse()
		.join('')
		.match(/[0-9]{1,10}/g);
	let x2 = b
		.split('')
		.reverse()
		.join('')
		.match(/[0-9]{1,10}/g);

	let x3 = ['0'];
	if (x1 < x2) [x1, x2] = [x2, x1];

	for (let i = 0; i < x1.length; i++) {
		x1[i] = x1[i]
			.split('')
			.reverse()
			.join('');
		if (!!x2[i]) {
			x2[i] = x2[i]
				.split('')
				.reverse()
				.join('');
			x3[i] = (parseInt(x3[i]) + parseInt(x1[i]) + parseInt(x2[i])).toString();
		} else x3[i] = (parseInt(x3[i]) + parseInt(x1[i])).toString();

		if (x3[i].length > 10) {
			x3[i] = x3[i].slice(1, 11);
			x3[i + 1] = '1';
		} else x3[i + 1] = '0';
	}
	return x3.reverse().join(''); // Fix me!
}
