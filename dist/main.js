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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");


var App = __webpack_require__(/*! ./scripts/app.js */ "./src/scripts/app.js"); // const Game = require("./scripts/game.js");



document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("game-canvas");
  var ctx = canvas.getContext("2d");
  var SCREEN_WIDTH = 1200;
  var SCREEN_HEIGHT = 800;
  ctx.canvas.width = SCREEN_WIDTH;
  ctx.canvas.height = SCREEN_HEIGHT;
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, SCREEN_WIDTH, SCREEN_HEIGHT);
  canvas.addEventListener("click", game.handleClick, false);
  game.runGame();
});

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// function App(){
//   console.log("apped");
// }
// module.exports = App;

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _testobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testobject */ "./src/scripts/testobject.js");
/* harmony import */ var _testobject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_testobject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meteor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meteor */ "./src/scripts/meteor.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game =
/*#__PURE__*/
function () {
  function Game(context, width, height) {
    _classCallCheck(this, Game);

    this.ctx = context;
    this.screenHeight = height;
    this.screenWidth = width;
    this.meteorArray = [];
    this.lastTime = 0;
    this.timer = 0; //used to generate new meteors at intervals

    this.level = 1; //controls difficulty and pace of game

    this.background = document.getElementById("background");
    this.gameLoop = this.gameLoop.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.buildNewMeteors = this.buildNewMeteors.bind(this);
  }

  _createClass(Game, [{
    key: "handleClick",
    value: function handleClick(e) {//console.log(`clicked ${e.offsetX}`);  
      //console.log(`clicked ${e.offsetY}`);      
    }
  }, {
    key: "runGame",
    value: function runGame() {
      //initial setup logic
      //then, start gameLoop
      var startingMeteors = 10;

      for (var i = 0; i < startingMeteors; i++) {
        var posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
        this.meteorArray.push(new _meteor__WEBPACK_IMPORTED_MODULE_1__["default"](posX, this.ctx));
      }

      this.gameLoop(0);
    }
  }, {
    key: "gameLoop",
    value: function gameLoop(timestamp) {
      var _this = this;

      //while not lost
      //update meteorarray
      //redraw meteors
      //listen for clicks
      //repeat
      //
      var elapsedFrameTime = timestamp - this.lastTime;
      this.lastTime = timestamp;
      this.timer += elapsedFrameTime / 1000; // console.log(this.timer);

      var levelMultiplier = 1.0;

      if (this.timer >= 3.0) {
        this.buildNewMeteors();
        this.timer = 0;
      }

      this.ctx.drawImage(background, 0, 0);
      this.meteorArray.forEach(function (meteor) {
        //check pos of meteor against missiles, explosions, and ground
        if (meteor.position.y >= _this.screenHeight) {
          _this.meteorArray.splice(_this.meteorArray.indexOf(meteor), 1);
        } else {
          meteor.updatePosition(levelMultiplier, elapsedFrameTime / 100);
        }
      });
      console.log(this.meteorArray);
      requestAnimationFrame(this.gameLoop);
    }
  }, {
    key: "buildNewMeteors",
    value: function buildNewMeteors() {
      for (var i = 0; i < this.level * 2; i++) {
        var posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
        this.meteorArray.push(new _meteor__WEBPACK_IMPORTED_MODULE_1__["default"](posX, this.ctx));
      }
    }
  }]);

  return Game;
}(); // function Game(ctx){
//   ctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
//   let obj1 = new TestObject(SCREEN_WIDTH, SCREEN_HEIGHT);
//   obj1.draw(ctx);
//   let lastTime = 0;
//   function gameLoop (timestamp){
//     let dt = timestamp - lastTime;
//     lastTime = timestamp;    
//     ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
//     obj1.update(dt);
//     obj1.draw(ctx);
//     requestAnimationFrame(gameLoop);
//   }
//   gameLoop();
// }




/***/ }),

/***/ "./src/scripts/meteor.js":
/*!*******************************!*\
  !*** ./src/scripts/meteor.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Meteor; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Meteor =
/*#__PURE__*/
function () {
  function Meteor(posX, ctx) {
    _classCallCheck(this, Meteor);

    this.ctx = ctx;
    this.position = {
      x: posX,
      y: -10
    };
    this.speed = 7 * this.setSpeed();
    this.direction = this.setDirection();
    this.updatePosition = this.updatePosition.bind(this);
    this.draw = this.draw.bind(this);
  }

  _createClass(Meteor, [{
    key: "setSpeed",
    value: function setSpeed() {
      //helps set an intial random range of speeds
      var throttler = Math.random();
      if (throttler <= 0.25) return 0.75;
      if (throttler >= 0.75) return 1.25;
      return 1;
    }
  }, {
    key: "setDirection",
    value: function setDirection() {
      //set Random x direction
      var x = Math.random();
      if (x > 0.5) x *= -1;
      return x;
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(levelMultiplier, deltaTime) {
      this.position.x += this.direction;
      this.position.y += levelMultiplier * this.speed * deltaTime;
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      var radius = 10;
      this.ctx.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }]);

  return Meteor;
}();



/***/ }),

/***/ "./src/scripts/testobject.js":
/*!***********************************!*\
  !*** ./src/scripts/testobject.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// class TestObject{
//   constructor(screenWidth, screenHeight){
//     this.width = 150;
//     this.height = 30;
//     this.position = {
//       x: screenWidth/2 - this.width/2,
//       y: screenHeight - this.height - 10
//     };
//   }
//   draw(ctx){
//     ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
//   }
//   update(deltaTime)
//   {
//     if(!deltaTime) return;
//     console.log(deltaTime);
//     this.position.x += 5 / deltaTime;
//   }
// }
// export default TestObject;
var a = [1, 2, 3];
a.forEach(function (el) {
  if (el === 2) {
    a.splice(a.indexOf(el), 1);
  } else {
    console.log(el);
  }
});
console.log(a);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ldGVvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90ZXN0b2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJBcHAiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiU0NSRUVOX1dJRFRIIiwiU0NSRUVOX0hFSUdIVCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsIkdhbWUiLCJoYW5kbGVDbGljayIsInJ1bkdhbWUiLCJjb250ZXh0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJtZXRlb3JBcnJheSIsImxhc3RUaW1lIiwidGltZXIiLCJsZXZlbCIsImJhY2tncm91bmQiLCJnYW1lTG9vcCIsImJpbmQiLCJidWlsZE5ld01ldGVvcnMiLCJlIiwic3RhcnRpbmdNZXRlb3JzIiwiaSIsInBvc1giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwiTWV0ZW9yIiwidGltZXN0YW1wIiwiZWxhcHNlZEZyYW1lVGltZSIsImxldmVsTXVsdGlwbGllciIsImRyYXdJbWFnZSIsImZvckVhY2giLCJtZXRlb3IiLCJwb3NpdGlvbiIsInkiLCJzcGxpY2UiLCJpbmRleE9mIiwidXBkYXRlUG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwieCIsInNwZWVkIiwic2V0U3BlZWQiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJkcmF3IiwidGhyb3R0bGVyIiwiZGVs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QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQUlDLENBQUMsR0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFSO0FBQ0FBLENBQUMsQ0FBQ3ZCLE9BQUYsQ0FBVSxVQUFBd0IsRUFBRSxFQUFJO0FBQ2QsTUFBSUEsRUFBRSxLQUFLLENBQVgsRUFBYTtBQUNYRCxLQUFDLENBQUNuQixNQUFGLENBQVNtQixDQUFDLENBQUNsQixPQUFGLENBQVVtQixFQUFWLENBQVQsRUFBdUIsQ0FBdkI7QUFDRCxHQUZELE1BRU87QUFDTGpCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZ0IsRUFBWjtBQUNEO0FBQ0YsQ0FORDtBQVFBakIsT0FBTyxDQUFDQyxHQUFSLENBQVllLENBQVosRTs7Ozs7Ozs7Ozs7QUNuQ0EsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuY29uc3QgQXBwID0gcmVxdWlyZShcIi4vc2NyaXB0cy9hcHAuanNcIik7XG4vLyBjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7ICBcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgXG4gIGNvbnN0IFNDUkVFTl9XSURUSCA9IDEyMDA7XG4gIGNvbnN0IFNDUkVFTl9IRUlHSFQgPSA4MDA7XG4gIGN0eC5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEg7XG4gIGN0eC5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVDtcblxuICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgU0NSRUVOX1dJRFRILCBTQ1JFRU5fSEVJR0hUKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lLmhhbmRsZUNsaWNrLCBmYWxzZSk7XG4gIGdhbWUucnVuR2FtZSgpO1xufSk7IiwiLy8gZnVuY3Rpb24gQXBwKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwiYXBwZWRcIik7XG4vLyB9XG5cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cbiIsImltcG9ydCBUZXN0T2JqZWN0IGZyb20gXCIuL3Rlc3RvYmplY3RcIjtcbmltcG9ydCBNZXRlb3IgZnJvbSBcIi4vbWV0ZW9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpe1xuICAgIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gd2lkdGg7ICAgIFxuICAgIHRoaXMubWV0ZW9yQXJyYXkgPSBbXTtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDsgLy91c2VkIHRvIGdlbmVyYXRlIG5ldyBtZXRlb3JzIGF0IGludGVydmFsc1xuICAgIHRoaXMubGV2ZWwgPSAxOyAvL2NvbnRyb2xzIGRpZmZpY3VsdHkgYW5kIHBhY2Ugb2YgZ2FtZVxuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcblxuICAgIHRoaXMuZ2FtZUxvb3AgPSB0aGlzLmdhbWVMb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ydW5HYW1lID0gdGhpcy5ydW5HYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycyA9IHRoaXMuYnVpbGROZXdNZXRlb3JzLmJpbmQodGhpcyk7XG4gICAgXG4gIH1cblxuICBoYW5kbGVDbGljayhlKXtcbiAgICAvL2NvbnNvbGUubG9nKGBjbGlja2VkICR7ZS5vZmZzZXRYfWApOyAgXG4gICAgLy9jb25zb2xlLmxvZyhgY2xpY2tlZCAke2Uub2Zmc2V0WX1gKTsgICAgICBcbiAgfVxuXG4gIHJ1bkdhbWUoKXtcbiAgICAvL2luaXRpYWwgc2V0dXAgbG9naWNcbiAgICAvL3RoZW4sIHN0YXJ0IGdhbWVMb29wXG4gICAgbGV0IHN0YXJ0aW5nTWV0ZW9ycyA9IDEwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRpbmdNZXRlb3JzOyBpKyspe1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUxvb3AoMCk7XG4gIH1cblxuICBnYW1lTG9vcCh0aW1lc3RhbXApeyAgICBcbiAgICAvL3doaWxlIG5vdCBsb3N0XG5cbiAgICAgIC8vdXBkYXRlIG1ldGVvcmFycmF5XG4gICAgICAvL3JlZHJhdyBtZXRlb3JzXG4gICAgICAvL2xpc3RlbiBmb3IgY2xpY2tzXG4gICAgICAvL3JlcGVhdFxuXG4gICAgLy9cbiAgICBsZXQgZWxhcHNlZEZyYW1lVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICB0aGlzLnRpbWVyKz1lbGFwc2VkRnJhbWVUaW1lLzEwMDA7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy50aW1lcik7XG5cbiAgICBjb25zdCBsZXZlbE11bHRpcGxpZXIgPSAxLjA7ICBcbiAgICBcbiAgICBcblxuXG4gICAgaWYgKHRoaXMudGltZXIgPj0gMy4wKXtcbiAgICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzKCk7XG4gICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9ICAgXG5cbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCk7XG4gICAgdGhpcy5tZXRlb3JBcnJheS5mb3JFYWNoKG1ldGVvciA9PntcbiAgICAgIC8vY2hlY2sgcG9zIG9mIG1ldGVvciBhZ2FpbnN0IG1pc3NpbGVzLCBleHBsb3Npb25zLCBhbmQgZ3JvdW5kXG4gICAgICBpZiAobWV0ZW9yLnBvc2l0aW9uLnkgPj0gdGhpcy5zY3JlZW5IZWlnaHQpe1xuICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGVvci51cGRhdGVQb3NpdGlvbihsZXZlbE11bHRpcGxpZXIsIGVsYXBzZWRGcmFtZVRpbWUgLyAxMDApOyAgXG4gICAgICB9ICAgICAgICAgICBcbiAgICB9KTsgIFxuICAgIGNvbnNvbGUubG9nKHRoaXMubWV0ZW9yQXJyYXkpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTsgICAgXG4gIH1cblxuICBidWlsZE5ld01ldGVvcnMoKSB7XG4gICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5sZXZlbCAqIDI7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIGZ1bmN0aW9uIEdhbWUoY3R4KXtcbiAgXG5cbi8vICAgY3R4LmNsZWFyUmVjdCgwLDAsU0NSRUVOX1dJRFRILFNDUkVFTl9IRUlHSFQpO1xuLy8gICBsZXQgb2JqMSA9IG5ldyBUZXN0T2JqZWN0KFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4vLyAgIG9iajEuZHJhdyhjdHgpO1xuXG4vLyAgIGxldCBsYXN0VGltZSA9IDA7XG5cbi8vICAgZnVuY3Rpb24gZ2FtZUxvb3AgKHRpbWVzdGFtcCl7XG4vLyAgICAgbGV0IGR0ID0gdGltZXN0YW1wIC0gbGFzdFRpbWU7XG4vLyAgICAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7ICAgIFxuLy8gICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgU0NSRUVOX1dJRFRILCBTQ1JFRU5fSEVJR0hUKTtcbi8vICAgICBvYmoxLnVwZGF0ZShkdCk7XG4vLyAgICAgb2JqMS5kcmF3KGN0eCk7XG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbi8vICAgfVxuLy8gICBnYW1lTG9vcCgpO1xuLy8gfVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0ZW9ye1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogLTEwXG4gICAgfTtcbiAgICB0aGlzLnNwZWVkID0gNyAqIHRoaXMuc2V0U3BlZWQoKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuc2V0RGlyZWN0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldFNwZWVkKCl7XG4gICAgLy9oZWxwcyBzZXQgYW4gaW50aWFsIHJhbmRvbSByYW5nZSBvZiBzcGVlZHNcbiAgICBsZXQgdGhyb3R0bGVyID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAodGhyb3R0bGVyIDw9IDAuMjUpIHJldHVybiAwLjc1O1xuICAgIGlmICh0aHJvdHRsZXIgPj0gMC43NSkgcmV0dXJuIDEuMjU7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBzZXREaXJlY3Rpb24oKXtcbiAgICAvL3NldCBSYW5kb20geCBkaXJlY3Rpb25cbiAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHggPiAwLjUpIHggKj0gLTE7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbihsZXZlbE11bHRpcGxpZXIsIGRlbHRhVGltZSl7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuZGlyZWN0aW9uO1xuICAgIHRoaXMucG9zaXRpb24ueSArPSAobGV2ZWxNdWx0aXBsaWVyICogdGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7ICAgIFxuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgbGV0IHJhZGl1cyA9IDEwO1xuICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG59IiwiLy8gY2xhc3MgVGVzdE9iamVjdHtcbi8vICAgY29uc3RydWN0b3Ioc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCl7XG4vLyAgICAgdGhpcy53aWR0aCA9IDE1MDtcbi8vICAgICB0aGlzLmhlaWdodCA9IDMwO1xuXG4vLyAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbi8vICAgICAgIHg6IHNjcmVlbldpZHRoLzIgLSB0aGlzLndpZHRoLzIsXG4vLyAgICAgICB5OiBzY3JlZW5IZWlnaHQgLSB0aGlzLmhlaWdodCAtIDEwXG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIGRyYXcoY3R4KXtcbi8vICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbi8vICAgfVxuXG4vLyAgIHVwZGF0ZShkZWx0YVRpbWUpXG4vLyAgIHtcbiAgICBcbi8vICAgICBpZighZGVsdGFUaW1lKSByZXR1cm47XG4vLyAgICAgY29uc29sZS5sb2coZGVsdGFUaW1lKTtcbi8vICAgICB0aGlzLnBvc2l0aW9uLnggKz0gNSAvIGRlbHRhVGltZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBUZXN0T2JqZWN0O1xuXG5sZXQgYSA9IFsxLDIsM107XG5hLmZvckVhY2goZWwgPT4ge1xuICBpZiAoZWwgPT09IDIpe1xuICAgIGEuc3BsaWNlKGEuaW5kZXhPZihlbCksMSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coZWwpO1xuICB9XG59KTtcblxuY29uc29sZS5sb2coYSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==