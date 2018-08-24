const { assert } = require('chai');
const Snake = require('../lib/Snake');

describe('Snake', () => {

it('should be a function', () => {
	assert.isFunction(Snake);
});

it('should instantiate a new snake', () => {
	let snake = new Snake;
	assert.isObject(snake);
})











});