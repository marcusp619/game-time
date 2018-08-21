const GamePiece = require('./GamePiece');
const Fruit = require('./Fruit');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.snake = new GamePiece(50, 50, 10, 10, 'red', 1, 1, 'black'),
    this.fruit = new Fruit(100, 100, 10, 10, 'green', 0, 0, 'black')
    this.direction = 'right';
    this.score = 0;
  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

    if (this.snake.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame();  

    } else {
      this.snake.moveSnake(this.direction);
    }
    if (this.snake.isCollidingWith(this.fruit)) {
      // console.log(this.snake)
      this.fruit.x = Math.floor(Math.random() * (490 - 1) + 1);
      this.fruit.y = Math.floor(Math.random() * (490 - 1) + 1);
      this.growSnake();
      this.score += 100;
      document.getElementById('game__score').innerHTML = this.score;
    }

    this.snake.drawSnake(this.ctx);
    this.fruit.draw(this.ctx);
  }



  // Pushes new index to snakeBody array, containing x & y coordinates of new block
  growSnake() {
    this.snake.snakeBody.push(this.snake.x - 10);
    this.snake.snakeBody.push(this.snake.x - 10);
    this.snake.snakeBody.push(this.snake.x - 10);
    this.snake.snakeBody.push(this.snake.x - 10);
    this.snake.snakeBody.push(this.snake.x - 10);
    this.snake.snakeBody.push(this.snake.x - 10);
    this.snake.snakeBody.push(this.snake.x - 10);
    this.snake.snakeBody.push(this.snake.x - 10);
  };

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {

    let snake = this.snake;
    console.log(snake)

    if (e.key === 'ArrowRight' && this.direction !== 'left') {
      this.direction = 'right';

    } else if (e.key === 'ArrowLeft' && this.direction !== 'right') {
      this.direction = 'left';

    } else if (e.key === 'ArrowDown' && this.direction !== 'up') {
      this.direction = 'down';

    } else if (e.key === 'ArrowUp' && this.direction !== 'down') {
      this.direction = 'up';

    } else if (e.key === 'Space') {
      this.paused = true;
      snake.dx = 0;
      snake.dy = 0;
    }

    // this.blocks.forEach( block => block.changeDirection(direction) );
  }

}