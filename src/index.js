
// You should implement your task here.
module.exports = function towelSort (matrix) {

	if (arguments.length === 0) {
		return [];
	}

	let result = [];

	matrix.forEach((elem, index) => {
		if (index % 2 === 0) {
			result.push(...elem);
		}
		else {
			result.push(...elem.reverse());
		}
	});
	return result;
}