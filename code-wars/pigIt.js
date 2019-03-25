// Move the first letter of each word to the end of it, then add
// "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str) {
	arr = str.split(' ');
	for (let i = 0; i < arr.length; i++) {
		let a = arr[i].slice(1).match(/(\w+)/g) || '';
		let b = arr[i].slice(0, 1) || '';
		let c = arr[i].match(/[^\w\*]/) || '';
		!!arr[i].match(/[^\w\*]/)&&arr[i].length===1 ? arr[i]=arr[i]:arr[i] = a+b+'ay'+c
		
	}
	return arr.join(' ');
}

console.log(pigIt('O tempora, o mores !')); // igPay atinlay siay oolcay
pigIt('Quis custodiet ipsos custodes ?'); // elloHay orldway !
