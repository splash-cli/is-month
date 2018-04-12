import test from 'ava';
import isMonth from '.';
test('testing current month', t => {
	const months = [
		'january', 'february',
		'march', 'april',
		'may', 'june',
		'july', 'august',
		'september', 'october',
		'november', 'december'
	];
	const current = months[new Date().getMonth()];
	
	return t.deepEqual(isMonth(current), true)
})