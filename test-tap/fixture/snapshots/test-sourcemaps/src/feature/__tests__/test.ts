/* eslint-disable @typescript-eslint/no-unsafe-call */
import test from '../../../../../../../entrypoints/main.cjs';

test('feature test title', t => {
	t.snapshot({foo: 'bar'});

	t.snapshot({answer: 40});
});

test('another feature test', t => {
	t.snapshot(new Map());
});
