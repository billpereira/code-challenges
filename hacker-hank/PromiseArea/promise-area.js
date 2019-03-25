const shapes = ['square', 'rectangle', 'circle', 'triangle'];
const values = [[2], [3, 4], [5], [2, 4]];

let calculateArea = (shape, values) => {
	let areas = [];
	let pi = 3.14;

	for (i = 0; i < shape.length; i++) {
		switch (shape[i]) {
			case 'square':
				sides = values[i];
				areas.push(sides[0] * sides[0]);
				break;

			case 'rectangle':
				sides = values[i];
				areas.push(sides[0] * sides[1]);
				break;

			case 'circle':
				sides = values[i];

				areas.push(parseFloat((pi * sides[0] * sides[0]).toFixed(2)));
				break;

			case 'triangle':
				sides = values[i];
				areas.push((sides[0] * sides[1]) / 2);
				break;

			default:
				areas.push(-1);
				break;
		}
	}

	return new Promise(function(resolve, reject) {
		if (areas.indexOf(-1) !== -1) reject(-1);
		else resolve(areas);
	});
};

let callCalculateArea = async (shapes, values) => {
	a = await calculateArea(shapes, values);
	console.log('depois do await');

	return a;
};
// await calculateArea(shapes[0], values[0]).catch(error => error);

function main() {
	console.log('entrou');

	callCalculateArea(shapes, values)
		.then(res => console.log('passou: ', res))
		.catch(e => console.log('falhou: ', e));
}

main();

// for (i = 0; i < shape.length; i++){

//     switch (shape[i]) {
//         case 'square':
// ?            return values[0] * values[0];
//             break;
//         case 'rectangle':
//  ?           return values[0] * values[1]
//             break;
//         case 'circle':
//   ?          let pi = 3.14
//   ?          return values[0] * values[0] * pi
//             break;
//         case 'triangle':
//    ?         return values[0] * values[1] / 2
//             break;
//         default:
//             return -1;
//     }
// }
