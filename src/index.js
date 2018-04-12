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

module.exports = isMonth;