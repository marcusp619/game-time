const GamePiece = require('./GamePiece');

module.exports = class Snake extends GamePiece {
  constructor(x, y, height, width, color, dxv, dxy, borderColor) {
    super(x, y, height, width, color, dxv, dxy, borderColor);
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dxv = dxv;
    this.dxy = dxy;
    this.borderColor = borderColor;
    this.snakeBody = [];
    this.snakeBody.push([x, y]);
    this.snakeBody.push([40, y]);
    this.snakeBody.push([30, y]);
  }

  drawSnake(ctx, square) {
    this.snakeBody.forEach(square => {
      this.draw(ctx, square);
    });
  }

  moveSnake(direction) {
    let snakeHead = this.snakeBody[0].slice();
    
    if (direction === 'right') {
      snakeHead[0] = snakeHead[0] + 10; 
      this.snakeGenerate(snakeHead);

    } if (direction === 'left') {
      snakeHead[0] = snakeHead[0] - 10;      
      this.snakeGenerate(snakeHead); 

    } if (direction === 'down') {
      snakeHead[1] = snakeHead[1] + 10;   
      this.snakeGenerate(snakeHead);

    } if (direction === 'up') {
      snakeHead[1] = snakeHead[1] - 10; 
      this.snakeGenerate(snakeHead);
    } 
  }

  snakeGenerate(snakeHead) {
    this.snakeBody.unshift(snakeHead);
    this.snakeBody.pop();
  }

  /* Pushes new index to snakeBody array, containing x & y 
  coordinates of new block */
  growSnake() {
    for (let i = 0; i <= 5; i++) {
      this.snake.snakeBody.push(this.snake.x - 10);
    }
  }

};


