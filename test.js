import test from 'ava';
import d from './';

test('Get this month\'s final working day', t => {
	if (d instanceof Date) {
		t.pass();
	}
});

test('Get specified month\'s final working day', t => {
	const december = d(2016, 12);
	if (december instanceof Date) {
		t.pass();
	}
});
