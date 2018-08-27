module.exports = class GamePiece {
  constructor(x, y, height, width, color, dxv = 1, dyv = 1, 
    borderColor = 'black') {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = dxv;
    this.dyv = dyv;
    this.borderColor = borderColor;
  }

  isCollidingWithSelf() {
    for (let i = 1; i < this.snakeBody.length; i++) {
      if (this.snakeBody[0][0] === this.snakeBody[i][0] && 
        this.snakeBody[0][1] === this.snakeBody[i][1]) {
        return true;
      }
    }
  }

  isCollidingWith(object) {
    let snakeArray = this.snakeBody[0];

    return (
      snakeArray[0] < object.x + object.width && 
      snakeArray[0] + this.width > object.x &&
      snakeArray[1] < object.y + object.height &&
      snakeArray[1] + this.height > object.y
    )
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    let snakeArray = this.snakeBody[0];

    return (
      snakeArray[0] === 0 ||
      snakeArray[0] + this.width > canvasWidth - 10 ||
      snakeArray[1] === 0 || 
      snakeArray[1] + this.height > canvasHeight - 10
    )
  }

  draw(ctx, square) {
    const { height, width, color, borderColor } = this;
    let x = square[0];
    let y = square[1];

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
};