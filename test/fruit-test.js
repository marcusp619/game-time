const { assert } = require('chai');
const Fruit = require('../lib/Fruit');

describe('Fruit', () => {

	it('should be a function', () => {
		assert.isFunction(Fruit);
	});

	it('should have a default height and a width', () => {
		var fruit = new Fruit();
		assert.equal(fruit.height, 10);
		assert.equal(fruit.height, 10);
	});




});
