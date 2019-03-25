// return masked string
function maskify(cc) {
	arr = cc.split('');

	if (arr.length > 4) {
		for (let i = 0; i < arr.length - 4; i++) arr[i] = '#';
	}

	const str = arr.join('');
	return str;
}

//   function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
//   }


maskify('4556364607935616'); //== "############5616"
maskify('64607935616'); //==      "#######5616"
maskify('1'); //==                "1"
maskify(''); //==                 ""

// "What was the name of your first pet?"
maskify('Skippy'); //== "##ippy"
maskify('Nananananananananananananananana Batman!'); //== "####################################man!"
