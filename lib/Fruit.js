const GamePiece = require('./GamePiece');
module.exports = class Fruit extends GamePiece {
	constructor(x, y, height, width, color, borderColor) {
		super(x, y, height, width, color, borderColor); 
	};
	draw(ctx) {
		const {x, y, height, width, color, borderColor } = this;

		super.draw(ctx);

		ctx.fillstyle = color;
		ctx.fillRect(x, y, width, height);
		ctx.strokeStyle = borderColor;
		ctx.strokeRect(x, y, width, height);
	}
};

