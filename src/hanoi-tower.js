const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let solution = {turns: 0, seconds: 0};
	
	let turnsN = Math.pow(2, disksNumber) - 1;
	let secondsS = Math.floor(turnsN * 3600 / turnsSpeed);	
	
	solution.turns = turnsN;
	solution.seconds = secondsS;
	
	return solution;
};
