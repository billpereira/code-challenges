function findShort(s) {
	const arrStr = s.split(' ');
    var min = null;
	arrStr.forEach(element => {
		min =
			min === null
				? element.length
				: min < element.length
				? min
				: element.length;
    });
    
	return min;
}

console.log(findShort('BTC 21inc 21inc Waves Classic Factom Dash Factom 21inc MadeSafeCoin Dash Bitcoin Classic Classic ProofOfStake Dogecoin ProofOfStake Dogecoin MadeSafeCoin Ethereum'))

