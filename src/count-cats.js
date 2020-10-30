const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
	if (typeof(matrix) !== 'object') return count;	
	for (let i = 0; i < matrix.length; i++) {
		for(let k = 0; k < matrix[i].length; k++) {
			if (matrix[i][k] === '^^') {
				count += 1;
			}
		}		
	}	
	return count;
};
