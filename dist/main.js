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
    this.totalElapsedTime = 0;
    this.gameLoop = this.gameLoop.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.background = document.getElementById("background");
  }

  _createClass(Game, [{
    key: "handleClick",
    value: function handleClick(e) {
      console.log("clicked ".concat(e.offsetX));
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
      //while not lost
      //update meteorarray
      //redraw meteors
      //listen for clicks
      //repeat
      //
      this.ctx.drawImage(background, 0, 0);
      this.meteorArray.forEach(function (meteor) {
        meteor.updatePosition();
        meteor.draw();
      }); //console.log(timestamp);

      this.elapsedTime += timestamp / 1000; //console.log(this.elapsedTime);

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
    this.direction = this.setDirection(); //set speed as well
  }

  _createClass(Meteor, [{
    key: "setDirection",
    value: function setDirection() {//set Random downwards direction
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ldGVvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90ZXN0b2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJBcHAiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiU0NSRUVOX1dJRFRIIiwiU0NSRUVOX0hFSUdIVCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsIkdhbWUiLCJoYW5kbGVDbGljayIsInJ1bkdhbWUiLCJjb250ZXh0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJtZXRlb3JBcnJheSIsInRvdGFsRWxhcHNlZFRpbWUiLCJnYW1lTG9vcCIsImJpbmQiLCJiYWNrZ3JvdW5kIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvZmZzZXRYIiwic3RhcnRpbmdNZXRlb3JzIiwiaSIsInBvc1giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwiTWV0ZW9yIiwidGltZXN0YW1wIiwiZHJhd0ltYWdlIiwiZm9yRWFjaCIsIm1ldGVvciIsInVwZGF0ZVBvc2l0aW9uIiwiZHJhdyIsImVsYXBzZWRUaW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicG9zaXRpb24iLCJ4IiwieSIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsImJlZ2luUGF0aCIsInJhZGl1cyIsImFyYyIsIlBJIiwiZmlsbCIsIlRlc3RPYmplY3QiLCJmaWxsUmVjdCIsImRlbHRhVGltZSJdLCJtYXBwaW5ncyI6IjtRQUFB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TCxDQUFTMkMsU0FBVDtBQUNBLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsV0FBSzVDLEdBQUwsQ0FBUzZDLEdBQVQsQ0FBYSxLQUFLUCxRQUFMLENBQWNDLENBQTNCLEVBQThCLEtBQUtELFFBQUwsQ0FBY0UsQ0FBNUMsRUFBK0NJLE1BQS9DLEVBQXVELENBQXZELEVBQTBEbkIsSUFBSSxDQUFDcUIsRUFBTCxHQUFVLENBQXBFO0FBQ0EsV0FBSzlDLEdBQUwsQ0FBUytDLElBQVQ7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3pCR0MsVTs7O0FBQ0osc0JBQVlwQyxXQUFaLEVBQXlCRCxZQUF6QixFQUFzQztBQUFBOztBQUNwQyxTQUFLUCxLQUFMLEdBQWEsR0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBRUEsU0FBS2lDLFFBQUwsR0FBZ0I7QUFDZEMsT0FBQyxFQUFFM0IsV0FBVyxHQUFDLENBQVosR0FBZ0IsS0FBS1IsS0FBTCxHQUFXLENBRGhCO0FBRWRvQyxPQUFDLEVBQUU3QixZQUFZLEdBQUcsS0FBS04sTUFBcEIsR0FBNkI7QUFGbEIsS0FBaEI7QUFJRDs7Ozt5QkFFSUwsRyxFQUFJO0FBQ1BBLFNBQUcsQ0FBQ2lELFFBQUosQ0FBYSxLQUFLWCxRQUFMLENBQWNDLENBQTNCLEVBQThCLEtBQUtELFFBQUwsQ0FBY0UsQ0FBNUMsRUFBK0MsS0FBS3BDLEtBQXBELEVBQTJELEtBQUtDLE1BQWhFO0FBQ0Q7OzsyQkFFTTZDLFMsRUFDUDtBQUVFLFVBQUcsQ0FBQ0EsU0FBSixFQUFlO0FBQ2YvQixhQUFPLENBQUNDLEdBQVIsQ0FBWThCLFNBQVo7QUFDQSxXQUFLWixRQUFMLENBQWNDLENBQWQsSUFBbUIsSUFBSVcsU0FBdkI7QUFDRDs7Ozs7O0FBR1lGLHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDeEJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmNvbnN0IEFwcCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYXBwLmpzXCIpO1xuLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpOyAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIFxuICBjb25zdCBTQ1JFRU5fV0lEVEggPSAxMjAwO1xuICBjb25zdCBTQ1JFRU5fSEVJR0hUID0gODAwO1xuICBjdHguY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIO1xuICBjdHguY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQ7XG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgsIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5oYW5kbGVDbGljaywgZmFsc2UpO1xuICBnYW1lLnJ1bkdhbWUoKTtcbn0pOyIsIi8vIGZ1bmN0aW9uIEFwcCgpe1xuLy8gICBjb25zb2xlLmxvZyhcImFwcGVkXCIpO1xuLy8gfVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG4iLCJpbXBvcnQgVGVzdE9iamVjdCBmcm9tIFwiLi90ZXN0b2JqZWN0XCI7XG5pbXBvcnQgTWV0ZW9yIGZyb20gXCIuL21ldGVvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1le1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KXtcbiAgICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5zY3JlZW5XaWR0aCA9IHdpZHRoOyAgICBcbiAgICB0aGlzLm1ldGVvckFycmF5ID0gW107XG4gICAgdGhpcy50b3RhbEVsYXBzZWRUaW1lID0gMDtcbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucnVuR2FtZSA9IHRoaXMucnVuR2FtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSl7XG4gICAgY29uc29sZS5sb2coYGNsaWNrZWQgJHtlLm9mZnNldFh9YCk7ICAgIFxuICB9XG5cbiAgcnVuR2FtZSgpe1xuICAgIC8vaW5pdGlhbCBzZXR1cCBsb2dpY1xuICAgIC8vdGhlbiwgc3RhcnQgZ2FtZUxvb3BcbiAgICBsZXQgc3RhcnRpbmdNZXRlb3JzID0gMTA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydGluZ01ldGVvcnM7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gICAgdGhpcy5nYW1lTG9vcCgwKTtcbiAgfVxuXG4gIGdhbWVMb29wKHRpbWVzdGFtcCl7XG4gICAgLy93aGlsZSBub3QgbG9zdFxuXG4gICAgICAvL3VwZGF0ZSBtZXRlb3JhcnJheVxuICAgICAgLy9yZWRyYXcgbWV0ZW9yc1xuICAgICAgLy9saXN0ZW4gZm9yIGNsaWNrc1xuICAgICAgLy9yZXBlYXRcblxuICAgIC8vXG5cbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwwKTtcbiAgICB0aGlzLm1ldGVvckFycmF5LmZvckVhY2gobWV0ZW9yID0+e1xuICAgICAgbWV0ZW9yLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICBtZXRlb3IuZHJhdygpO1xuICAgIH0pO1xuICAgIC8vY29uc29sZS5sb2codGltZXN0YW1wKTtcbiAgICB0aGlzLmVsYXBzZWRUaW1lKz0odGltZXN0YW1wLzEwMDApO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5lbGFwc2VkVGltZSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApO1xuICAgIFxuICB9XG59XG5cbi8vIGZ1bmN0aW9uIEdhbWUoY3R4KXtcbiAgXG5cbi8vICAgY3R4LmNsZWFyUmVjdCgwLDAsU0NSRUVOX1dJRFRILFNDUkVFTl9IRUlHSFQpO1xuLy8gICBsZXQgb2JqMSA9IG5ldyBUZXN0T2JqZWN0KFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4vLyAgIG9iajEuZHJhdyhjdHgpO1xuXG4vLyAgIGxldCBsYXN0VGltZSA9IDA7XG5cbi8vICAgZnVuY3Rpb24gZ2FtZUxvb3AgKHRpbWVzdGFtcCl7XG4vLyAgICAgbGV0IGR0ID0gdGltZXN0YW1wIC0gbGFzdFRpbWU7XG4vLyAgICAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7ICAgIFxuLy8gICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgU0NSRUVOX1dJRFRILCBTQ1JFRU5fSEVJR0hUKTtcbi8vICAgICBvYmoxLnVwZGF0ZShkdCk7XG4vLyAgICAgb2JqMS5kcmF3KGN0eCk7XG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbi8vICAgfVxuLy8gICBnYW1lTG9vcCgpO1xuLy8gfVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0ZW9ye1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogMzBcbiAgICB9O1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICAvL3NldCBzcGVlZCBhcyB3ZWxsXG4gIH1cblxuICBzZXREaXJlY3Rpb24oKXtcbiAgICAvL3NldCBSYW5kb20gZG93bndhcmRzIGRpcmVjdGlvblxuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oKXtcblxuICB9XG5cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgbGV0IHJhZGl1cyA9IDEwO1xuICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG5cbn0iLCJjbGFzcyBUZXN0T2JqZWN0e1xuICBjb25zdHJ1Y3RvcihzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0KXtcbiAgICB0aGlzLndpZHRoID0gMTUwO1xuICAgIHRoaXMuaGVpZ2h0ID0gMzA7XG5cbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogc2NyZWVuV2lkdGgvMiAtIHRoaXMud2lkdGgvMixcbiAgICAgIHk6IHNjcmVlbkhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMTBcbiAgICB9O1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhVGltZSlcbiAge1xuICAgIFxuICAgIGlmKCFkZWx0YVRpbWUpIHJldHVybjtcbiAgICBjb25zb2xlLmxvZyhkZWx0YVRpbWUpO1xuICAgIHRoaXMucG9zaXRpb24ueCArPSA1IC8gZGVsdGFUaW1lO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RPYmplY3Q7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==