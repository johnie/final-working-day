'use strict';

/**
 * Get final working day of the month.
 * Returns the current year and month by default
 * @param  {integer} year  Specify the year
 * @param  {integer} month Specify the month
 * @return {object}        The Date() object
 */
const finalWorkingDay = function (year, month) {
	const date = new Date();
	let offset = 0;
	let result = null;

	if (typeof year === 'undefined' || year === null) {
		year = date.getFullYear();
	}

	if (typeof month === 'undefined' || month === null) {
		month = date.getMonth();
	}

	do {
		result = new Date(year, month, offset);

		offset--;
	} while (result.getDay() === 0 || result.getDay() === 6);

	return result;
};

module.exports = finalWorkingDay;
