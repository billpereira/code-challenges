// Arithmetic Progression
// S =(a1 + an)n/2

const lastNum = (limit, constant) =>
	Math.floor(limit / constant) * constant < limit
		? Math.floor(limit / constant) * constant
		: Math.floor(limit / constant) * constant - constant;

const sum = (limit, constant) =>
	((constant + lastNum(limit, constant)) *
		(lastNum(limit, constant) / constant)) /
	2;

const sumOfMultiples = limit => sum(limit, 3) + sum(limit, 5) - sum(limit, 15);

console.log(sumOfMultiples(1000));
