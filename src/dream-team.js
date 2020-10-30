const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
	if (members === null) return false;	
	if (typeof(members) !== 'object') return false;
	
	if (members.length === 0) return false;
	
	for(let i = 0; i < members.length; i++) {
		
		if (typeof(members[i]) === 'string'){			
			members[i] = members[i].replace(/\s+/g, '');
			result.push(members[i][0].toUpperCase());
		}
	}
		result.sort();
		
	return result.join('');
}
