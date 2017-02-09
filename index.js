'use strict';

module.exports = (set1, set2) => {
	const res = new Set(set1);

	for (const value of set2) {
		res.add(value);
	}

	return res;
};
