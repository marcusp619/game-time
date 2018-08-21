const Game = require('./Game');
const GamePiece = require('./GamePiece');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const playBtn = document.querySelector('.play-btn');


// Add key press event handler
document.addEventListener('keydown', handleKeyPress);
playBtn.addEventListener('click', () => {window.requestAnimationFrame(gameLoop)});

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

// Start animation loop



function gameLoop () {
  if (game.isOver()) {
    console.log('Game Over');
    
  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw this frame
    game.animate();

  }

  // prepare to draw next frame
  // window.requestAnimationFrame(gameLoop)
  window.setTimeout(gameLoop, 150);
}