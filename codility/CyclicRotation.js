const cyclicRotation = (originalArray, shiftIndex) => {
	const newIndex = shiftIndex % originalArray.length;
	const newArray =
		newIndex > 0
			? originalArray
					.slice(originalArray.length - newIndex)
					.concat(originalArray.slice(0, originalArray.length - newIndex))
			: originalArray
					.slice(Math.abs(newIndex))
					.concat(originalArray.slice(0, Math.abs(newIndex)));

	return newArray;
};

console.log(cyclicRotation([3, 8, 9, 7, 6], 3));
console.log(cyclicRotation([3, 8, 9, 7, 6], -1));
