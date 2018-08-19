module.exports = class GamePiece {
  constructor(x, y, height, width, color, dxv = 1, dyv = 1, borderColor = 'black') {
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
    // Add snake body
    this.snakeBody = [];
    this.snakeBody.push([x, y]);
    this.snakeBody.push([40, y]);
    this.snakeBody.push([30, y]);
  }



  isCollidingWith(object) {
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth ||
      this.y < 0 || 
      this.y + this.height > canvasHeight
    )
  }

  draw(ctx, square) {
    const { height, width, color, borderColor } = this;
    // Add variable 
    let x = square[0];
    let y = square[1];
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }

  drawSnake(ctx) {
    this.snakeBody.forEach((square) => {
      this.draw(ctx, square);
    })
  }

  // move() {
  //   this.x += this.dx *s this.dxv;
  //   this.y += this.dy * this.dyv;
  // }



  moveSnake() {
    let snakeHead = this.snakeBody[0].slice();
    // console.log(snakeHead);
    // snakeHead[0] += 1;
    snakeHead[0] = snakeHead[0] + 10;
    this.snakeBody.unshift(snakeHead);
    this.snakeBody.pop();
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }

}