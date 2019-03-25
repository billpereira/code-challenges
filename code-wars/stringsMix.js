// function mix(s1, s2) {
//     var counter = s => s.replace(/[^a-z]/g,'').split('').sort().reduce((x,y)=> (x[y] = 1 + (x[y]||0), x),{});
//     s1 = counter(s1); s2 = counter(s2);
//     var res = [], keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
//     keys.forEach(key => {
//       var c1 = s1[key]||0, c2 = s2[key]||0, count = Math.max(c1, c2);
//       if (count>1) {
//         var from = [1, '=', 2][Math.sign(c2-c1)+1];
//         var str = [...Array(count)].map(_=>key).join('');
//         res.push(from+':'+str);
//       }
//     });
//     return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/');
//   }


function mix(s1, s2) {
	// 1 - check all lower cases from each strings
	ls1 = s1.match(/[a-z]/g).sort();
	ls2 = s2.match(/[a-z]/g).sort();
	let obj1 = {};
	let obj2 = {};
	let dif = [];
	let str = '';
	const countEqual = (e, obj) => {
		if (obj[e] !== undefined) obj[e]++;
		else obj[e] = 1;
	};
	ls1.forEach(e => {
		countEqual(e, obj1);
	});
	ls2.forEach(e => {
		countEqual(e, obj2);
	});

	for (let key in obj1) {
		if (obj2[key] !== undefined) {
			if (obj1[key] > 1 && obj1[key] > obj2[key]) {
				dif.push(`1:${key.repeat(obj1[key])}`);
				delete obj2[key];
			} else if (obj2[key] > 1 && obj2[key] > obj1[key]) {
				dif.push(`2:${key.repeat(obj2[key])}`);
				delete obj2[key];
			} else if (obj2[key] > 1 && obj2[key] === obj1[key]) {
				dif.push(`=:${key.repeat(obj1[key])}`);
				delete obj2[key];
			}
		} else if (obj1[key] > 1) {
			dif.push(`1:${key.repeat(obj1[key])}`);
		}
	}
	for (let key in obj2) {
		if (obj2[key] > 1) {
			dif.push(`2:${key.repeat(obj2[key])}`);
		}
	}
	dif = sortLetter(dif);
	dif = sortSize(dif);
	str = dif.join('/');
	console.log(str);
	return str;
}

function sortLetter(array) {
	for (var i = array.length - 1; i > 0; i--)
		for (var j = 0; j < i; j++)
			// if (array[j].slice(3, 4) > array[j + 1].slice(3, 4))
			if (array[j] > array[j + 1])
				[array[j], array[j + 1]] = [array[j + 1], array[j]];

	return array;
}

function sortSize(array) {
	for (var i = array.length - 1; i > 0; i--)
		for (var j = 0; j < i; j++)
			if (array[j].length < array[j + 1].length)
				[array[j], array[j + 1]] = [array[j + 1], array[j]];

	return array;
}

mix('Are they here', 'yes, they are here');
// mix('codewars', 'codewars');
// mix("A generation must confront the looming ", "codewarrs")
