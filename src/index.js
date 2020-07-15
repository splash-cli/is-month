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
const isMonth = (month, { today } = { today: new Date() }) => [
		'january', 'february',
		'march', 'april',
		'may', 'june',
		'july', 'august',
		'september', 'october',
		'november', 'december'
	][today.getMonth()].toLowerCase().trim() === month.toLowerCase().trim();

isMonth.promise = (month, { today } = { today: new Date() }) => Promise.resolve(isMonth(month, { today }));

module.exports = isMonth;
