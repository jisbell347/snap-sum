// let arr = [5, 6, 7, 8];
// let sum = (accumulator, currentValue) => accumulator + currentValue;
//
// console.log(arr.reduce(sum)); //Expected output: 26
/**
* @param {array} arrayToSum array of numrics to sum
* @returns {number} value of sum
 **/

function sumArrayOldSchool(arrayToSum) {
	let sum = 0;
	for(let i = 0; i, arrayToSum.length; i++) {
		sum = sum + arrayToSum[i];
	}

	return sum;
}

/**
 *
 * @param {array} arrayToSum array of numerics to sum
 * @returns {number} value of sum
 */

function sumArrayFunctional(arrayToSum) {
	return arrayToSum.reduce((sum, current) => sum + current);
}