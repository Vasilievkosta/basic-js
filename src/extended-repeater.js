const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arrStr = [];
	let result = '';
	
	str = String(str);
		
	if (options.separator === undefined) {
		options.separator = '+';
	}
	if (options.additionSeparator === undefined) {
		options.additionSeparator = '|';
	}
	if (options.addition === undefined) {
		options.addition = '';
	}
	
	if (options.addition === null) {
		options.addition = 'null';
	}
	
	result = str + options.addition;
	console.log('результат до 1 цикла -  ' + result);
	if (options.additionRepeatTimes !== undefined) {
		for (let i = 0; i < options.additionRepeatTimes; i++) {
			arrStr.push(options.addition);			
		}
		result = str + arrStr.join(options.additionSeparator);
	}
	arrStr = [];
	if (options.repeatTimes === undefined) return result;
	for (let i = 0; i < options.repeatTimes; i++) {
		
		arrStr.push(result);
		
	}	
	result = arrStr.join(options.separator);
	
	return result;
}
  