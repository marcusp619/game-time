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

  animate() {
    const { canvas } = this.ctx;

    if (this.snake.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame();  
    } else {
      this.snake.moveSnake(this.direction);
    }

    if (this.snake.isCollidingWith(this.fruit)) {
      this.fruit.x = Math.round(Math.random() * (490 - 1) + 1);
      this.fruit.y = Math.round(Math.random() * (490 - 1) + 1);
      this.growSnake();
      this.score += 100;
      document.getElementById('game__score').innerHTML = this.score;
    }

    if (this.snake.isCollidingWithSelf()) {
      this.endGame();  
    }

    this.snake.drawSnake(this.ctx);
    this.fruit.draw(this.ctx);
  }

  /* Pushes new index to snakeBody array, containing x & y 
  coordinates of new block */
  growSnake() {
    for (let i = 0; i <= 5; i++) {
      this.snake.snakeBody.push(this.snake.x - 10);
    }
  }

  endGame() {
    let gameOverMsg = document.querySelector('.game__gameover');
    
    gameOverMsg.style.display = 'flex';
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

    if (e.key === 'ArrowRight' && this.direction !== 'left') {
      this.direction = 'right';

    } else if (e.key === 'ArrowLeft' && this.direction !== 'right') {
      this.direction = 'left';

    } else if (e.key === 'ArrowDown' && this.direction !== 'up') {
      this.direction = 'down';

    } else if (e.key === 'ArrowUp' && this.direction !== 'down') {
      this.direction = 'up';
    } else if (e.keyCode === 32) {
      if (this.gameOver) {
        let gameOverMsg = document.querySelector('.game__gameover');

        gameOverMsg.style.display = 'none';
        this.paused = false;
        this.gameOver = false;
        this.snake = new GamePiece(50, 50, 10, 10, 'red', 1, 1, 'black');
        this.fruit = new Fruit(100, 100, 10, 10, 'green', 0, 0, 'black');
        this.direction = 'right';
        this.score = 0;
        document.getElementById('game__score').innerHTML = this.score;
      }
    } 
  }
};