'use strict';
import isUndefined from 'lodash/isUndefined';

/**
 * @name isMonth
 * @description Check if the current month is equalt to the given month
 * 
 * @example 
 * // on April
 * isMonth('january') //=> false
 * isMonth('april') //=> true
 * 
 * @param {String} month 
 * @param {Date} today
 * 
 * @returns Boolean
 */
function isMonth(month, { today } = { today: new Date() }) {
	const months = [
		'january', 'february',
		'march', 'april',
		'may', 'june',
		'july', 'august',
		'september', 'october',
		'november', 'december'
	];

	if ( months[today.getMonth()].toLowerCase().trim() === month.toLowerCase().trim()) {
		return true;
	}

	return false;
}

isMonth.promise = (month, { today } = { today: new Date() }) => {
	return new Promise((resolve, reject) => {
		if ( isMonth(month, { today }) ) {
			resolve(true)
		}

		reject(false)
	})
}

module.exports = isMonth;