/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Fruit.js":
/*!**********************!*\
  !*** ./lib/Fruit.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Fruit, _GamePiece);

  function Fruit(x, y, height, width, color, dxv, dyv, borderColor) {
    _classCallCheck(this, Fruit);

    var _this = _possibleConstructorReturn(this, (Fruit.__proto__ || Object.getPrototypeOf(Fruit)).call(this, x, y, height, width));

    _this.x = Math.round(Math.random() * (49 - 1) + 1) * 10;
    _this.y = Math.round(Math.random() * (49 - 1) + 1) * 10;
    _this.dxv = 0;
    _this.dyv = 0;
    _this.color = color;
    _this.borderColor = borderColor;
    return _this;
  }

  _createClass(Fruit, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color,
          borderColor = this.borderColor;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }]);

  return Fruit;
}(GamePiece);

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");
var Fruit = __webpack_require__(/*! ./Fruit */ "./lib/Fruit.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new GamePiece(50, 50, 10, 10, 'red', 1, 1, 'black');
    this.fruit = new Fruit(100, 100, 10, 10, 'green', 0, 0, 'black');
    this.direction = 'right';
    this.score = 0;
  }

  _createClass(Game, [{
    key: 'animate',
    value: function animate() {
      var canvas = this.ctx.canvas;


      if (this.snake.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();
      } else {
        this.snake.moveSnake(this.direction);
      }

      if (this.snake.isCollidingWith(this.fruit)) {
        this.fruit.x = Math.round(Math.random() * (49 - 1) + 1) * 10;
        this.fruit.y = Math.round(Math.random() * (49 - 1) + 1) * 10;
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

  }, {
    key: 'growSnake',
    value: function growSnake() {
      for (var i = 0; i <= 5; i++) {
        this.snake.snakeBody.push(this.snake.x - 10);
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      var gameOverMsg = document.querySelector('.game__gameover');

      gameOverMsg.style.display = 'flex';
      this.gameOver = true;
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      return this.gameOver;
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
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
          var gameOverMsg = document.querySelector('.game__gameover');

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
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, height, width, color) {
    var dxv = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
    var dyv = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
    var borderColor = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'black';

    _classCallCheck(this, GamePiece);

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
    this.snakeBody = [];
    this.snakeBody.push([x, y]);
    this.snakeBody.push([40, y]);
    this.snakeBody.push([30, y]);
  }

  _createClass(GamePiece, [{
    key: 'isCollidingWithSelf',
    value: function isCollidingWithSelf() {
      for (var i = 1; i < this.snakeBody.length; i++) {
        if (this.snakeBody[0][0] === this.snakeBody[i][0] && this.snakeBody[0][1] === this.snakeBody[i][1]) {
          return true;
        }
      }
    }
  }, {
    key: 'isCollidingWith',
    value: function isCollidingWith(object) {
      var snakeArray = this.snakeBody[0];

      return snakeArray[0] < object.x + object.width && snakeArray[0] + this.width > object.x && snakeArray[1] < object.y + object.height && snakeArray[1] + this.height > object.y;
    }
  }, {
    key: 'isCollidingWithWall',
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      var snakeArray = this.snakeBody[0];

      return snakeArray[0] === 0 || snakeArray[0] + this.width > canvasWidth - 10 || snakeArray[1] === 0 || snakeArray[1] + this.height > canvasHeight - 10;
    }
  }, {
    key: 'draw',
    value: function draw(ctx, square) {
      var height = this.height,
          width = this.width,
          color = this.color,
          borderColor = this.borderColor;

      var x = square[0];
      var y = square[1];

      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }, {
    key: 'drawSnake',
    value: function drawSnake(ctx) {
      var _this = this;

      this.snakeBody.forEach(function (square) {
        _this.draw(ctx, square);
      });
    }
  }, {
    key: 'moveSnake',
    value: function moveSnake(direction) {
      var snakeHead = this.snakeBody[0].slice();

      if (direction === 'right') {
        snakeHead[0] = snakeHead[0] + 10;
        this.snakeGenerate(snakeHead);
      }if (direction === 'left') {
        snakeHead[0] = snakeHead[0] - 10;
        this.snakeGenerate(snakeHead);
      }if (direction === 'down') {
        snakeHead[1] = snakeHead[1] + 10;
        this.snakeGenerate(snakeHead);
      }if (direction === 'up') {
        snakeHead[1] = snakeHead[1] - 10;
        this.snakeGenerate(snakeHead);
      }
    }
  }, {
    key: 'snakeGenerate',
    value: function snakeGenerate(snakeHead) {
      this.snakeBody.unshift(snakeHead);
      this.snakeBody.pop();
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");
var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);
var playBtn = document.querySelector('.game__btn--wide');
var difficulty1Btn = document.querySelector('#difficulty-1');
var difficulty2Btn = document.querySelector('#difficulty-2');
var difficulty3Btn = document.querySelector('#difficulty-3');
var gameSpeed = [50, 100, 150];

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);
playBtn.addEventListener('click', function () {
  return requestAnimationFrame(gameLoop);
});

//   difficulty1Btn.addEventListener('click', () => {
//   timeOut(gameSpeed[2]);
// });
// difficulty2Btn.addEventListener('click', () => {
//   timeOut(gameSpeed[1]);
// });
// difficulty3Btn.addEventListener('click', () => {
//   timeOut(gameSpeed[0]);
// });

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

function gameLoop() {
  setTimeout(function () {
    if (game.isOver()) {
      return false;
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.animate();
    }
    window.requestAnimationFrame(gameLoop);
    // timeOut();
  }, 100);
}

// const timeOut = (speed = 150) => {
//   if (!game.paused) {
//     setTimeout(gameLoop, speed);
//   } else {
//     setTimeout(timeOut, speed);
//   }
// };

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0ZydWl0LmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiZHh2IiwiZHl2IiwiYm9yZGVyQ29sb3IiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsIkZydWl0IiwicGF1c2VkIiwiZ2FtZU92ZXIiLCJzbmFrZSIsImZydWl0IiwiZGlyZWN0aW9uIiwic2NvcmUiLCJjYW52YXMiLCJpc0NvbGxpZGluZ1dpdGhXYWxsIiwiZW5kR2FtZSIsIm1vdmVTbmFrZSIsImlzQ29sbGlkaW5nV2l0aCIsImdyb3dTbmFrZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJpc0NvbGxpZGluZ1dpdGhTZWxmIiwiZHJhd1NuYWtlIiwiZHJhdyIsImkiLCJzbmFrZUJvZHkiLCJwdXNoIiwiZ2FtZU92ZXJNc2ciLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiZSIsImtleSIsImtleUNvZGUiLCJkeCIsImR5IiwibGVuZ3RoIiwib2JqZWN0Iiwic25ha2VBcnJheSIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0Iiwic3F1YXJlIiwiZm9yRWFjaCIsInNuYWtlSGVhZCIsInNsaWNlIiwic25ha2VHZW5lcmF0ZSIsInVuc2hpZnQiLCJwb3AiLCJHYW1lIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJwbGF5QnRuIiwiZGlmZmljdWx0eTFCdG4iLCJkaWZmaWN1bHR5MkJ0biIsImRpZmZpY3VsdHkzQnRuIiwiZ2FtZVNwZWVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleVByZXNzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJzZXRUaW1lb3V0IiwiaXNPdmVyIiwiY2xlYXJSZWN0IiwiYW5pbWF0ZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7QUFFQUMsT0FBT0MsT0FBUDtBQUFBOztBQUNFLGlCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLE1BQWxCLEVBQTBCQyxLQUExQixFQUFpQ0MsS0FBakMsRUFBd0NDLEdBQXhDLEVBQTZDQyxHQUE3QyxFQUFrREMsV0FBbEQsRUFBK0Q7QUFBQTs7QUFBQSw4R0FDdkRQLENBRHVELEVBQ3BEQyxDQURvRCxFQUNqREMsTUFEaUQsRUFDekNDLEtBRHlDOztB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QUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRixjQUFULENBQXdCMUIsQ0FBeEIsRUFBMkI7QUFDekJtQixPQUFLTyxjQUFMLENBQW9CMUIsQ0FBcEI7QUFDRDs7QUFFRCxTQUFTNEIsUUFBVCxHQUFxQjtBQUNuQkMsYUFBVyxZQUFNO0FBQ2YsUUFBSVYsS0FBS1csTUFBTCxFQUFKLEVBQW1CO0FBQ2pCLGFBQU8sS0FBUDtBQUNELEtBRkQsTUFFTztBQUNMN0QsVUFBSThELFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CbEQsT0FBT3BCLEtBQTNCLEVBQWtDb0IsT0FBT3JCLE1BQXpDO0FBQ0EyRCxXQUFLYSxPQUFMO0FBQ0Q7QUFDREMsV0FBT04scUJBQVAsQ0FBNkJDLFFBQTdCO0FBQ0E7QUFDRCxHQVRELEVBU0csR0FUSDtBQVVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEsiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRnJ1aXQgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgZHh2LCBkeXYsIGJvcmRlckNvbG9yKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgdGhpcy54ID0gKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICg0OSAtIDEpICsgMSkpICogMTA7XG4gICAgdGhpcy55ID0gKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICg0OSAtIDEpICsgMSkpICogMTA7XG4gICAgdGhpcy5keHYgPSAwO1xuICAgIHRoaXMuZHl2ID0gMDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7eCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGJvcmRlckNvbG9yIH0gPSB0aGlzO1xuXHRcdFxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn07IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcbmNvbnN0IEZydWl0ID0gcmVxdWlyZSgnLi9GcnVpdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNuYWtlID0gbmV3IEdhbWVQaWVjZSg1MCwgNTAsIDEwLCAxMCwgJ3JlZCcsIDEsIDEsICdibGFjaycpO1xuICAgIHRoaXMuZnJ1aXQgPSBuZXcgRnJ1aXQoMTAwLCAxMDAsIDEwLCAxMCwgJ2dyZWVuJywgMCwgMCwgJ2JsYWNrJyk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcy5jdHg7XG5cbiAgICBpZiAodGhpcy5zbmFrZS5pc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCkpIHtcbiAgICAgIHRoaXMuZW5kR2FtZSgpOyAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc25ha2UubW92ZVNuYWtlKHRoaXMuZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zbmFrZS5pc0NvbGxpZGluZ1dpdGgodGhpcy5mcnVpdCkpIHtcbiAgICAgIHRoaXMuZnJ1aXQueCA9IChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoNDkgLSAxKSArIDEpKSAqIDEwO1xuICAgICAgdGhpcy5mcnVpdC55ID0gKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICg0OSAtIDEpICsgMSkpICogMTA7XG4gICAgICB0aGlzLmdyb3dTbmFrZSgpO1xuICAgICAgdGhpcy5zY29yZSArPSAxMDA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZV9fc2NvcmUnKS5pbm5lckhUTUwgPSB0aGlzLnNjb3JlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNuYWtlLmlzQ29sbGlkaW5nV2l0aFNlbGYoKSkge1xuICAgICAgdGhpcy5lbmRHYW1lKCk7ICBcbiAgICB9XG5cbiAgICB0aGlzLnNuYWtlLmRyYXdTbmFrZSh0aGlzLmN0eCk7XG4gICAgdGhpcy5mcnVpdC5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIC8qIFB1c2hlcyBuZXcgaW5kZXggdG8gc25ha2VCb2R5IGFycmF5LCBjb250YWluaW5nIHggJiB5IFxuICBjb29yZGluYXRlcyBvZiBuZXcgYmxvY2sgKi9cbiAgZ3Jvd1NuYWtlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDU7IGkrKykge1xuICAgICAgdGhpcy5zbmFrZS5zbmFrZUJvZHkucHVzaCh0aGlzLnNuYWtlLnggLSAxMCk7XG4gICAgfVxuICB9XG5cbiAgZW5kR2FtZSgpIHtcbiAgICBsZXQgZ2FtZU92ZXJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fZ2FtZW92ZXInKTtcbiAgICBcbiAgICBnYW1lT3Zlck1zZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgaXNPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVPdmVyO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcgJiYgdGhpcy5kaXJlY3Rpb24gIT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcgJiYgdGhpcy5kaXJlY3Rpb24gIT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicgJiYgdGhpcy5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2Rvd24nO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnICYmIHRoaXMuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3VwJztcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIGlmICh0aGlzLmdhbWVPdmVyKSB7XG4gICAgICAgIGxldCBnYW1lT3Zlck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19nYW1lb3ZlcicpO1xuXG4gICAgICAgIGdhbWVPdmVyTXNnLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zbmFrZSA9IG5ldyBHYW1lUGllY2UoNTAsIDUwLCAxMCwgMTAsICdyZWQnLCAxLCAxLCAnYmxhY2snKTtcbiAgICAgICAgdGhpcy5mcnVpdCA9IG5ldyBGcnVpdCgxMDAsIDEwMCwgMTAsIDEwLCAnZ3JlZW4nLCAwLCAwLCAnYmxhY2snKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVfX3Njb3JlJykuaW5uZXJIVE1MID0gdGhpcy5zY29yZTtcbiAgICAgIH1cbiAgICB9IFxuICB9XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGR4diA9IDEsIGR5diA9IDEsIFxuICAgIGJvcmRlckNvbG9yID0gJ2JsYWNrJykge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHggPSAxO1xuICAgIHRoaXMuZHkgPSAwO1xuICAgIHRoaXMuZHh2ID0gZHh2O1xuICAgIHRoaXMuZHl2ID0gZHl2O1xuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcbiAgICB0aGlzLnNuYWtlQm9keSA9IFtdO1xuICAgIHRoaXMuc25ha2VCb2R5LnB1c2goW3gsIHldKTtcbiAgICB0aGlzLnNuYWtlQm9keS5wdXNoKFs0MCwgeV0pO1xuICAgIHRoaXMuc25ha2VCb2R5LnB1c2goWzMwLCB5XSk7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGhTZWxmKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zbmFrZUJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnNuYWtlQm9keVswXVswXSA9PT0gdGhpcy5zbmFrZUJvZHlbaV1bMF0gJiYgXG4gICAgICAgIHRoaXMuc25ha2VCb2R5WzBdWzFdID09PSB0aGlzLnNuYWtlQm9keVtpXVsxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgbGV0IHNuYWtlQXJyYXkgPSB0aGlzLnNuYWtlQm9keVswXTtcblxuICAgIHJldHVybiAoXG4gICAgICBzbmFrZUFycmF5WzBdIDwgb2JqZWN0LnggKyBvYmplY3Qud2lkdGggJiYgXG4gICAgICBzbmFrZUFycmF5WzBdICsgdGhpcy53aWR0aCA+IG9iamVjdC54ICYmXG4gICAgICBzbmFrZUFycmF5WzFdIDwgb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0ICYmXG4gICAgICBzbmFrZUFycmF5WzFdICsgdGhpcy5oZWlnaHQgPiBvYmplY3QueVxuICAgICk7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpIHtcbiAgICBsZXQgc25ha2VBcnJheSA9IHRoaXMuc25ha2VCb2R5WzBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHNuYWtlQXJyYXlbMF0gPT09IDAgfHxcbiAgICAgIHNuYWtlQXJyYXlbMF0gKyB0aGlzLndpZHRoID4gY2FudmFzV2lkdGggLSAxMCB8fFxuICAgICAgc25ha2VBcnJheVsxXSA9PT0gMCB8fCBcbiAgICAgIHNuYWtlQXJyYXlbMV0gKyB0aGlzLmhlaWdodCA+IGNhbnZhc0hlaWdodCAtIDEwXG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoY3R4LCBzcXVhcmUpIHtcbiAgICBjb25zdCB7IGhlaWdodCwgd2lkdGgsIGNvbG9yLCBib3JkZXJDb2xvciB9ID0gdGhpcztcbiAgICBsZXQgeCA9IHNxdWFyZVswXTtcbiAgICBsZXQgeSA9IHNxdWFyZVsxXTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBkcmF3U25ha2UoY3R4KSB7XG4gICAgdGhpcy5zbmFrZUJvZHkuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICB0aGlzLmRyYXcoY3R4LCBzcXVhcmUpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZVNuYWtlKGRpcmVjdGlvbikge1xuICAgIGxldCBzbmFrZUhlYWQgPSB0aGlzLnNuYWtlQm9keVswXS5zbGljZSgpO1xuICAgIFxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHNuYWtlSGVhZFswXSA9IHNuYWtlSGVhZFswXSArIDEwOyBcbiAgICAgIHRoaXMuc25ha2VHZW5lcmF0ZShzbmFrZUhlYWQpO1xuXG4gICAgfSBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHNuYWtlSGVhZFswXSA9IHNuYWtlSGVhZFswXSAtIDEwOyAgICAgIFxuICAgICAgdGhpcy5zbmFrZUdlbmVyYXRlKHNuYWtlSGVhZCk7IFxuXG4gICAgfSBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIHNuYWtlSGVhZFsxXSA9IHNuYWtlSGVhZFsxXSArIDEwOyAgIFxuICAgICAgdGhpcy5zbmFrZUdlbmVyYXRlKHNuYWtlSGVhZCk7XG5cbiAgICB9IGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgIHNuYWtlSGVhZFsxXSA9IHNuYWtlSGVhZFsxXSAtIDEwOyBcbiAgICAgIHRoaXMuc25ha2VHZW5lcmF0ZShzbmFrZUhlYWQpO1xuICAgIH0gXG4gIH1cblxuICBzbmFrZUdlbmVyYXRlKHNuYWtlSGVhZCkge1xuICAgIHRoaXMuc25ha2VCb2R5LnVuc2hpZnQoc25ha2VIZWFkKTtcbiAgICB0aGlzLnNuYWtlQm9keS5wb3AoKTtcbiAgfVxufTtcbiIsImNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUnKTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19idG4tLXdpZGUnKTtcbmNvbnN0IGRpZmZpY3VsdHkxQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpZmZpY3VsdHktMScpO1xuY29uc3QgZGlmZmljdWx0eTJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlmZmljdWx0eS0yJyk7XG5jb25zdCBkaWZmaWN1bHR5M0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWZmaWN1bHR5LTMnKTtcbmNvbnN0IGdhbWVTcGVlZCA9IFs1MCwgMTAwLCAxNTBdO1xuXG4vLyBBZGQga2V5IHByZXNzIGV2ZW50IGhhbmRsZXJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG5wbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCkpO1xuXG4vLyAgIGRpZmZpY3VsdHkxQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICB0aW1lT3V0KGdhbWVTcGVlZFsyXSk7XG4vLyB9KTtcbi8vIGRpZmZpY3VsdHkyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICB0aW1lT3V0KGdhbWVTcGVlZFsxXSk7XG4vLyB9KTtcbi8vIGRpZmZpY3VsdHkzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICB0aW1lT3V0KGdhbWVTcGVlZFswXSk7XG4vLyB9KTtcbiAgICAgIFxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xuICBnYW1lLmhhbmRsZUtleVByZXNzKGUpO1xufVxuXG5mdW5jdGlvbiBnYW1lTG9vcCAoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChnYW1lLmlzT3ZlcigpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGdhbWUuYW5pbWF0ZSgpO1xuICAgIH1cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICAvLyB0aW1lT3V0KCk7XG4gIH0sIDEwMCk7XG59XG5cbi8vIGNvbnN0IHRpbWVPdXQgPSAoc3BlZWQgPSAxNTApID0+IHtcbi8vICAgaWYgKCFnYW1lLnBhdXNlZCkge1xuLy8gICAgIHNldFRpbWVvdXQoZ2FtZUxvb3AsIHNwZWVkKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBzZXRUaW1lb3V0KHRpbWVPdXQsIHNwZWVkKTtcbi8vICAgfVxuLy8gfTsiXSwic291cmNlUm9vdCI6IiJ9