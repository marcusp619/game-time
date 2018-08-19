const GamePiece = require('./GamePiece');
const Fruit = require('./Fruit');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.snake = new GamePiece(50, 50, 10, 10, 'red', 1, 1, 'black'),
    this.fruit = new Fruit(100, 100, 10, 10, 'green', 0, 0, 'green')
    this.direction = 'right';
  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

      if (this.snake.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();  

      } else {
        this.snake.moveSnake(this.direction);
      }
      // if (this.blocks[0].isCollidingWith(this.blocks[1])) {
      //   this.blocks[1].x = Math.random() * 500;
      //   this.blocks[1].y = Math.random() * 500;
      //   // growSnake();
      // }
      
      this.snake.drawSnake(this.ctx);
      this.fruit.draw(this.ctx);
  }

  // growSnake() {
  //   const newSnakeLength = new GamePiece(50, 50, 10, 10, 'red', 1, 1, 'black');
  //   console.log(newSnakeLength.x);
  //   // this.blocks.push(newSnakeLength);
  // };

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
    if (e.key === 'ArrowRight') {
      this.direction = 'right';

    } else if (e.key === 'ArrowLeft') {
      this.direction = 'left';

    } else if (e.key === 'ArrowDown') {
      this.direction = 'down';

    } else if (e.key === 'ArrowUp') {
      this.direction = 'up';
    } 

    // this.blocks.forEach( block => block.changeDirection(direction) );
  }

}