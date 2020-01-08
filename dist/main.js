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
    this.elapsedFrameTime = 0;
    this.gameLoop = this.gameLoop.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.background = document.getElementById("background");
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

      this.elapsedFrameTime = timestamp - this.lastTime;
      this.lastTime = timestamp;
      var levelMultiplier = 1.0; //while not lost
      //update meteorarray
      //redraw meteors
      //listen for clicks
      //repeat
      //

      this.ctx.drawImage(background, 0, 0);
      this.meteorArray.forEach(function (meteor) {
        meteor.updatePosition(levelMultiplier, _this.elapsedFrameTime / 100);
      });
      requestAnimationFrame(this.gameLoop);
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
      y: 30
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TestObject =
/*#__PURE__*/
function () {
  function TestObject(screenWidth, screenHeight) {
    _classCallCheck(this, TestObject);

    this.width = 150;
    this.height = 30;
    this.position = {
      x: screenWidth / 2 - this.width / 2,
      y: screenHeight - this.height - 10
    };
  }

  _createClass(TestObject, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      if (!deltaTime) return;
      console.log(deltaTime);
      this.position.x += 5 / deltaTime;
    }
  }]);

  return TestObject;
}();

/* harmony default export */ __webpack_exports__["default"] = (TestObject);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ldGVvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90ZXN0b2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJBcHAiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiU0NSRUVOX1dJRFRIIiwiU0NSRUVOX0hFSUdIVCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsIkdhbWUiLCJoYW5kbGVDbGljayIsInJ1bkdhbWUiLCJjb250ZXh0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJtZXRlb3JBcnJheSIsImxhc3RUaW1lIiwiZWxhcHNlZEZyYW1lVGltZSIsImdhbWVMb29wIiwiYmluZCIsImJhY2tncm91bmQiLCJlIiwic3RhcnRpbmdNZXRlb3JzIiwiaSIsInBvc1giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwiTWV0ZW9yIiwidGltZXN0YW1wIiwibGV2ZWxNdWx0aXBsaWVyIiwiZHJhd0ltYWdlIiwiZm9yRWFjaCIsIm1ldGVvciIsInVwZGF0ZVBvc2l0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicG9zaXRpb24iLCJ4IiwieSIsInNwZWVkIiwic2V0U3BlZWQiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJkcmF3IiwidGhyb3R0bGVyIiwiZGVsdGFUaW1lIiwiYmVnaW5QYXRoIiwicmFkaXVzIiwiYXJjIiwiUEkiLCJmaWxsIiwiVGVzdE9iamVjdCIsImZpbGxSZWN0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VDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDeENHQyxVOzs7QUFDSixzQkFBWXRDLFdBQVosRUFBeUJELFlBQXpCLEVBQXNDO0FBQUE7O0FBQ3BDLFNBQUtQLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFFQSxTQUFLOEIsUUFBTCxHQUFnQjtBQUNkQyxPQUFDLEVBQUV4QixXQUFXLEdBQUMsQ0FBWixHQUFnQixLQUFLUixLQUFMLEdBQVcsQ0FEaEI7QUFFZGlDLE9BQUMsRUFBRTFCLFlBQVksR0FBRyxLQUFLTixNQUFwQixHQUE2QjtBQUZsQixLQUFoQjtBQUlEOzs7O3lCQUVJTCxHLEVBQUk7QUFDUEEsU0FBRyxDQUFDbUQsUUFBSixDQUFhLEtBQUtoQixRQUFMLENBQWNDLENBQTNCLEVBQThCLEtBQUtELFFBQUwsQ0FBY0UsQ0FBNUMsRUFBK0MsS0FBS2pDLEtBQXBELEVBQTJELEtBQUtDLE1BQWhFO0FBQ0Q7OzsyQkFFTXVDLFMsRUFDUDtBQUVFLFVBQUcsQ0FBQ0EsU0FBSixFQUFlO0FBQ2ZRLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVCxTQUFaO0FBQ0EsV0FBS1QsUUFBTCxDQUFjQyxDQUFkLElBQW1CLElBQUlRLFNBQXZCO0FBQ0Q7Ozs7OztBQUdZTSx5RUFBZixFOzs7Ozs7Ozs7OztBQ3hCQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5jb25zdCBBcHAgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2FwcC5qc1wiKTtcbi8vIGNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWUuanNcIik7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTsgIFxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBcbiAgY29uc3QgU0NSRUVOX1dJRFRIID0gMTIwMDtcbiAgY29uc3QgU0NSRUVOX0hFSUdIVCA9IDgwMDtcbiAgY3R4LmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSDtcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4LCBTQ1JFRU5fV0lEVEgsIFNDUkVFTl9IRUlHSFQpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWUuaGFuZGxlQ2xpY2ssIGZhbHNlKTtcbiAgZ2FtZS5ydW5HYW1lKCk7XG59KTsiLCIvLyBmdW5jdGlvbiBBcHAoKXtcbi8vICAgY29uc29sZS5sb2coXCJhcHBlZFwiKTtcbi8vIH1cblxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuIiwiaW1wb3J0IFRlc3RPYmplY3QgZnJvbSBcIi4vdGVzdG9iamVjdFwiO1xuaW1wb3J0IE1ldGVvciBmcm9tIFwiLi9tZXRlb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgd2lkdGgsIGhlaWdodCl7XG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xuICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuc2NyZWVuV2lkdGggPSB3aWR0aDsgICAgXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuZWxhcHNlZEZyYW1lVGltZSA9IDA7XG4gICAgdGhpcy5nYW1lTG9vcCA9IHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJ1bkdhbWUgPSB0aGlzLnJ1bkdhbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpe1xuICAgIC8vY29uc29sZS5sb2coYGNsaWNrZWQgJHtlLm9mZnNldFh9YCk7ICBcbiAgICAvL2NvbnNvbGUubG9nKGBjbGlja2VkICR7ZS5vZmZzZXRZfWApOyAgICAgIFxuICB9XG5cbiAgcnVuR2FtZSgpe1xuICAgIC8vaW5pdGlhbCBzZXR1cCBsb2dpY1xuICAgIC8vdGhlbiwgc3RhcnQgZ2FtZUxvb3BcbiAgICBsZXQgc3RhcnRpbmdNZXRlb3JzID0gMTA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydGluZ01ldGVvcnM7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gICAgdGhpcy5nYW1lTG9vcCgwKTtcbiAgfVxuXG4gIGdhbWVMb29wKHRpbWVzdGFtcCl7XG4gICAgdGhpcy5lbGFwc2VkRnJhbWVUaW1lID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgIGNvbnN0IGxldmVsTXVsdGlwbGllciA9IDEuMDtcbiAgICAvL3doaWxlIG5vdCBsb3N0XG5cbiAgICAgIC8vdXBkYXRlIG1ldGVvcmFycmF5XG4gICAgICAvL3JlZHJhdyBtZXRlb3JzXG4gICAgICAvL2xpc3RlbiBmb3IgY2xpY2tzXG4gICAgICAvL3JlcGVhdFxuXG4gICAgLy9cblxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLDApO1xuICAgIHRoaXMubWV0ZW9yQXJyYXkuZm9yRWFjaChtZXRlb3IgPT57XG4gICAgICBtZXRlb3IudXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCB0aGlzLmVsYXBzZWRGcmFtZVRpbWUvMTAwKTsgICAgICAgXG4gICAgfSk7ICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7ICAgIFxuICB9XG59XG5cbi8vIGZ1bmN0aW9uIEdhbWUoY3R4KXtcbiAgXG5cbi8vICAgY3R4LmNsZWFyUmVjdCgwLDAsU0NSRUVOX1dJRFRILFNDUkVFTl9IRUlHSFQpO1xuLy8gICBsZXQgb2JqMSA9IG5ldyBUZXN0T2JqZWN0KFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4vLyAgIG9iajEuZHJhdyhjdHgpO1xuXG4vLyAgIGxldCBsYXN0VGltZSA9IDA7XG5cbi8vICAgZnVuY3Rpb24gZ2FtZUxvb3AgKHRpbWVzdGFtcCl7XG4vLyAgICAgbGV0IGR0ID0gdGltZXN0YW1wIC0gbGFzdFRpbWU7XG4vLyAgICAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7ICAgIFxuLy8gICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgU0NSRUVOX1dJRFRILCBTQ1JFRU5fSEVJR0hUKTtcbi8vICAgICBvYmoxLnVwZGF0ZShkdCk7XG4vLyAgICAgb2JqMS5kcmF3KGN0eCk7XG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbi8vICAgfVxuLy8gICBnYW1lTG9vcCgpO1xuLy8gfVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0ZW9ye1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogMzBcbiAgICB9O1xuICAgIHRoaXMuc3BlZWQgPSA3ICogdGhpcy5zZXRTcGVlZCgpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0U3BlZWQoKXtcbiAgICAvL2hlbHBzIHNldCBhbiBpbnRpYWwgcmFuZG9tIHJhbmdlIG9mIHNwZWVkc1xuICAgIGxldCB0aHJvdHRsZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh0aHJvdHRsZXIgPD0gMC4yNSkgcmV0dXJuIDAuNzU7XG4gICAgaWYgKHRocm90dGxlciA+PSAwLjc1KSByZXR1cm4gMS4yNTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHNldERpcmVjdGlvbigpe1xuICAgIC8vc2V0IFJhbmRvbSB4IGRpcmVjdGlvblxuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAoeCA+IDAuNSkgeCAqPSAtMTtcbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGxldmVsTXVsdGlwbGllciwgZGVsdGFUaW1lKXtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5kaXJlY3Rpb247XG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IChsZXZlbE11bHRpcGxpZXIgKiB0aGlzLnNwZWVkICogZGVsdGFUaW1lKTsgICAgXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuXG4gIGRyYXcoKXtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICBsZXQgcmFkaXVzID0gMTA7XG4gICAgdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cblxufSIsImNsYXNzIFRlc3RPYmplY3R7XG4gIGNvbnN0cnVjdG9yKHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQpe1xuICAgIHRoaXMud2lkdGggPSAxNTA7XG4gICAgdGhpcy5oZWlnaHQgPSAzMDtcblxuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBzY3JlZW5XaWR0aC8yIC0gdGhpcy53aWR0aC8yLFxuICAgICAgeTogc2NyZWVuSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAxMFxuICAgIH07XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFUaW1lKVxuICB7XG4gICAgXG4gICAgaWYoIWRlbHRhVGltZSkgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKGRlbHRhVGltZSk7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IDUgLyBkZWx0YVRpbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdE9iamVjdDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9