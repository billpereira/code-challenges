// Equaçao da reta
// y – y0 = m (x – x0)
// uma reta perpendicular:
//a = -1/m

const findM = (AX, AY, BX, BY) => (m = (AY - BY) / (AX - BX));

const findNextPoint = (AX, AY, BX, BY) =>
	`${BX >= AX && BY <= AY ? BX - 1 : BX + 1},${-1 *
		((-1 / findM(AX, AY, BX, BY)) *
			(BX - (BX >= AX && BY <= AY ? BX - 1 : BX + 1)) -
			BY)}`;

console.log(findNextPoint(-1, 3, 3, 1));
console.log(findNextPoint(2, 2, 2, -3));
console.log(findNextPoint(3, 2, 2, -3));
