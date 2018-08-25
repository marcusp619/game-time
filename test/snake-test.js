const { assert } = require('chai');
const Snake = require('../lib/Snake');
const Game = require('../lib/Game');

describe('Snake', () => {
let snake;

beforeEach(() => {
	snake = new Snake(50, 50, 10, 10, 'rgb(235,66,56)', 1, 1, 'black');
});

it('should be a function', () => {
	assert.isFunction(Snake);
});


it('should instantiate a new snake', () => {
	assert.isObject(snake);
	assert.equal(snake.x, 50);
	assert.equal(snake.y, 50);
	assert.equal(snake.height, 10);
	assert.equal(snake.width, 10);
	assert.equal(snake.color, 'rgb(235,66,56)');
	assert.equal(snake.dxv, 1);
	assert.equal(snake.dxy, 1);
	assert.equal(snake.borderColor, 'black');
});

it('should move snake left', () => {
	snake.moveSnake('left');
	assert.deepEqual(snake.snakeBody[0], [40, 50]); 
});

it('should move snake right', () => {
	snake.moveSnake('right');
	assert.deepEqual(snake.snakeBody[0], [60, 50]); 
});

it('should move snake up', () => {
	snake.moveSnake('up');
	assert.deepEqual(snake.snakeBody[0], [50, 40]); 
});

it('should move snake down ', () => {
	snake.moveSnake('down');
	assert.deepEqual(snake.snakeBody[0], [50, 60]); 
});

it('should move tail to head', () => {
	snake.snakeGenerate(snake.snakeHead);
	assert.deepEqual(snake.snakeBody, [undefined, [50, 50], [40, 50]]);

});

it('should grow snake', () => {
	snake.growSnake();
	console.log(snake.snakeBody);
	assert.equal(snake.snakeBody.length, 9)
});










});