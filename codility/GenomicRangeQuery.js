const solution = (S, P, Q) => {
	var dna = '';
	var minimalImpact = [];

	for (var i=0; i < P.length; i++) {
		dna = S.slice(P[i], Q[i] + 1);

		if (dna.indexOf('A') !== -1) minimalImpact.push(1)
		else if (dna.indexOf('C') !== -1) minimalImpact.push(2)
		else if (dna.indexOf('G') !== -1) minimalImpact.push(3)
		else minimalImpact.push(4)
		
	}

	return minimalImpact;
}