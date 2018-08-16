const { assert } = require('chai');
const Fruit = require('../lib/Fruit');

describe('Fruit', () => {
	let fruit;

	beforeEach(() => {
 		fruit = new Fruit(100, 100, 10, 10, 'green', 'green');
	});

	it('should be a function', () => {
		assert.isFunction(Fruit);
	});

	it('should have a default height and a width', () => {
		assert.equal(fruit.height, 10);
		assert.equal(fruit.width, 10);
	});

	it('should be stationary', () => {
		assert.equal(fruit.dxv, 0);
		assert.equal(fruit.dyv, 0);
	});


});
