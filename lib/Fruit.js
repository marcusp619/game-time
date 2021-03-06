const GamePiece = require('./GamePiece');

module.exports = class Fruit extends GamePiece {
  constructor(x, y, height, width, color, dxv, dyv, borderColor) {
    super(x, y, height, width);
    this.x = (Math.round(Math.random() * (49 - 1) + 1)) * 10;
    this.y = (Math.round(Math.random() * (49 - 1) + 1)) * 10;
    this.dxv = 0;
    this.dyv = 0;
    this.color = color;
    this.borderColor = borderColor;
  }

  draw(ctx) {
    const {x, y, height, width, color, borderColor } = this;
		
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
}