import test from 'ava';
import union from './';

test('should return a new Set', t => {
	const set1 = new Set([]);
	const set2 = new Set([]);
	const result = union(set1, set2);

	t.not(result, set1);
	t.not(result, set2);

	t.deepEqual(
		union(
			new Set([]),
			new Set([])
		),
		new Set([])
	);
});

const object = {a: 1};
const objectClone = Object.assign({}, {a: 1});

const testMatrice = [
	[
		[], [], []
	],
	[
		[1], [], [1]
	],
	[
		[], [2], [2]
	],
	[
		[1], [2], [1, 2]
	],
	[
		[1], [1], [1]
	],
	[
		[1, 'foo', object], [2, 'bar', objectClone], [1, 'foo', object, 2, 'bar', objectClone]
	],
	[
		[1, 'foo', object], [2, 'foo', object], [1, 'foo', object, 2]
	]
];

testMatrice.forEach(([a, b, expected], index) => {
	test(`should create the Set union of two Sets (${index})`, t => {
		t.deepEqual(
			union(
				new Set(a),
				new Set(b)
			),
			new Set(expected)
		);
	});
});

testMatrice.forEach(([a, b, expected], index) => {
	test(`should create the Set union of two arrays (${index})`, t => {
		t.deepEqual(
			union(
				a,
				b
			),
			new Set(expected)
		);
	});
});

testMatrice.forEach(([a, b, expected], index) => {
	test(`should create the Set union of a Set and an array (${index})`, t => {
		t.deepEqual(
			union(
				new Set(a),
				b
			),
			new Set(expected)
		);
	});
});

testMatrice.forEach(([a, b, expected], index) => {
	test(`should create the Set union of an array and a Set (${index})`, t => {
		t.deepEqual(
			union(
				a,
				new Set(b)
			),
			new Set(expected)
		);
	});
});
