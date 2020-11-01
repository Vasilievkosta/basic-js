const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here // throw Error;
  
	//if (typeof(arr) !== 'object') return 'Error';
	if (Array.isArray(arr) === 'false') return 'Error';
	
	let outArr = [];
	let promArr = arr.slice();
	
	for (let i = 0; i < promArr.length; i++) {		
		
		if (promArr[i] === '--discard-next' && (promArr[i+2] === '--discard-prev' || promArr[i+2] === '--double-prev')) {
			promArr.splice(i, 3);
		}	
	}	
	for (let i = 0; i < promArr.length; i++) {	
	
		if (promArr[i] === '--double-next') {
			outArr.push(promArr[i + 1]);
			
		} else if (promArr[i] === '--double-prev') {		
			outArr.push(promArr[i - 1]);
			
		} else if (promArr[i] === '--discard-prev') {			
			outArr.splice(i-1, 2);
			
		} else {
			outArr.push(promArr[i]);
		}	
	}
	
	for (let i = 0; i < outArr.length; i++) {		
			if (outArr[i] === undefined) {
			outArr.splice(i, 1);
			}
		if (outArr[i] === '--discard-next') {			
			outArr.splice(i, 2);			
		}		
	}	
	
	return outArr;
};
