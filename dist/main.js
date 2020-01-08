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

/***/ "./src/scripts/base.js":
/*!*****************************!*\
  !*** ./src/scripts/base.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Base =
/*#__PURE__*/
function () {
  function Base(ctx, height, xPos) {
    _classCallCheck(this, Base);

    this.ctx = ctx;
    this.baseImage = document.getElementById("base-image");
    this.screenHeight = height;
    this.xPos = xPos;
    this.draw = this.draw.bind(this);
  }

  _createClass(Base, [{
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.baseImage, this.xPos, this.screenHeight - 100);
    }
  }]);

  return Base;
}();



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
/* harmony import */ var _missile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./missile */ "./src/scripts/missile.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./src/scripts/base.js");
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
    this.baseArray = [];
    this.lastTime = 0;
    this.timer = 0; //used to generate new meteors at intervals

    this.level = 1; //controls difficulty and pace of game

    this.background = document.getElementById("background");
    this.gameLoop = this.gameLoop.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.buildNewMeteors = this.buildNewMeteors.bind(this); //this.base = new Base(this.ctx, this.screenHeight);
  }

  _createClass(Game, [{
    key: "handleClick",
    value: function handleClick(e) {
      console.log("clicked ".concat(e.offsetX)); //console.log(`clicked ${e.offsetY}`);
      //find closest base to click

      this.baseArray.forEach(function (base) {
        console.log(base.xPos);
      });
    }
  }, {
    key: "runGame",
    value: function runGame() {
      //initial setup logic
      //then, start gameLoop
      var startingMeteors = 10;
      var startingBases = 3; //setup meteors ???merge with buildMeteors????

      for (var i = 0; i < startingMeteors; i++) {
        var posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
        this.meteorArray.push(new _meteor__WEBPACK_IMPORTED_MODULE_1__["default"](posX, this.ctx));
      } //setup bases


      var baseXoffset = 150;

      for (var _i = 0; _i < startingBases; _i++) {
        this.baseArray.push(new _base__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx, this.screenHeight, baseXoffset));
        baseXoffset += this.screenWidth / 3;
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
      this.baseArray.forEach(function (base) {
        base.draw();
      }); //console.log(this.meteorArray);

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
}();



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

/***/ "./src/scripts/missile.js":
/*!********************************!*\
  !*** ./src/scripts/missile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Missile; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Missile = function Missile() {
  _classCallCheck(this, Missile);
};



/***/ }),

/***/ "./src/scripts/testobject.js":
/*!***********************************!*\
  !*** ./src/scripts/testobject.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
// let a = [1,2,3];
// a.forEach(el => {
//   if (el === 2){
//     a.splice(a.indexOf(el),1);
//   } else {
//     console.log(el);
//   }
// });
// console.log(a);
var Test =
/*#__PURE__*/
function () {
  function Test() {
    _classCallCheck(this, Test);

    this.variable = 1;
  }

  _createClass(Test, [{
    key: "buildObj",
    value: function buildObj() {
      return new Test();
    }
  }]);

  return Test;
}(); // let test = Test.buildObj();
// let test = new Test();
// let otherTest = test.buildObj();


var otherTest = new Test().buildObj();
console.log(otherTest.variable);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGVzdG9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQXBwIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlNDUkVFTl9XSURUSCIsIlNDUkVFTl9IRUlHSFQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWUiLCJHYW1lIiwiaGFuZGxlQ2xpY2siLCJydW5HYW1lIiwiQmFzZSIsInhQb3MiLCJiYXNlSW1hZ2UiLCJzY3JlZW5IZWlnaHQiLCJkcmF3IiwiYmluZCIsImRyYXdJbWFnZSIsImNvbnRleHQiLCJzY3JlZW5XaWR0aCIsIm1ldGVvckFycmF5IiwiYmFzZUFycmF5IiwibGFzdFRpbWUiLCJ0aW1lciIsImxldmVsIiwiYmFja2dyb3VuZCIsImdhbWVMb29wIiwiYnVpbGROZXdNZXRlb3JzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvZmZzZXRYIiwiZm9yRWFjaCIsImJhc2UiLCJzdGFydGluZ01ldGVvcnMiLCJzdGFydGluZ0Jhc2VzIiwiaSIsInBvc1giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwiTWV0ZW9yIiwiYmFzZVhvZmZzZXQiLCJ0aW1lc3RhbXAiLCJlbGFwc2VkRnJhbWVUaW1lIiwibGV2ZWxNdWx0aXBsaWVyIiwibWV0ZW9yIiwicG9zaXRpb24iLCJ5Iiwic3BsaWNlIiwiaW5kZXhPZiIsInVwZGF0ZVBvc2l0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwieCIsInNwZWVkIiwic2V0U3BlZWQiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJ0aHJvdHRsZXIiLCJkZWx0YVRpbWUiLCJiZWdpblBhdGgiLCJyYWRpdXMiLCJhcmMiLCJQSSIsImZpbGwiLCJNaXNzaWxlIiwiVGVzdCIsInZhcmlhYmxlIiwib3RoZXJUZXN0IiwiYnVpbGRPYmoiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQSxJQUFNQSxHQUFHLEdBQUdDLG1CQUFPLENBQUMsOENBQUQsQ0FBbkIsQyxDQUNBOzs7QUFDQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFJO0FBQ2hELE1B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QUFhLEtBQUtmLFFBQUwsQ0FBY00sQ0FBM0IsRUFBOEIsS0FBS04sUUFBTCxDQUFjQyxDQUE1QyxFQUErQ2EsTUFBL0MsRUFBdUQsQ0FBdkQsRUFBMER4QixJQUFJLENBQUMwQixFQUFMLEdBQVUsQ0FBcEU7QUFDQSxXQUFLL0QsR0FBTCxDQUFTZ0UsSUFBVDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDeENrQkMsTyxHQUNuQixtQkFBYTtBQUFBO0FBRVosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hIO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7SUFFTUMsSTs7O0FBQ0osa0JBQWE7QUFBQTs7QUFDWCxTQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0Q7Ozs7K0JBRVM7QUFDUixhQUFPLElBQUlELElBQUosRUFBUDtBQUNEOzs7O0tBR0g7QUFDQTtBQUNBOzs7QUFDQSxJQUFJRSxTQUFTLEdBQUcsSUFBSUYsSUFBSixHQUFXRyxRQUFYLEVBQWhCO0FBQ0F6QyxPQUFPLENBQUNDLEdBQVIsQ0FBWXVDLFNBQVMsQ0FBQ0QsUUFBdEIsRTs7Ozs7Ozs7Ozs7QUNuREEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuY29uc3QgQXBwID0gcmVxdWlyZShcIi4vc2NyaXB0cy9hcHAuanNcIik7XG4vLyBjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7ICBcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgXG4gIGNvbnN0IFNDUkVFTl9XSURUSCA9IDEyMDA7XG4gIGNvbnN0IFNDUkVFTl9IRUlHSFQgPSA4MDA7XG4gIGN0eC5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEg7XG4gIGN0eC5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVDtcblxuICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgU0NSRUVOX1dJRFRILCBTQ1JFRU5fSEVJR0hUKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lLmhhbmRsZUNsaWNrLCBmYWxzZSk7XG4gIGdhbWUucnVuR2FtZSgpO1xufSk7IiwiLy8gZnVuY3Rpb24gQXBwKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwiYXBwZWRcIik7XG4vLyB9XG5cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2V7XG4gIGNvbnN0cnVjdG9yKGN0eCwgaGVpZ2h0LCB4UG9zKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZS1pbWFnZVwiKTtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnhQb3MgPSB4UG9zO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJhc2VJbWFnZSwgdGhpcy54UG9zLCB0aGlzLnNjcmVlbkhlaWdodC0xMDApO1xuICB9XG5cblxufSIsImltcG9ydCBUZXN0T2JqZWN0IGZyb20gXCIuL3Rlc3RvYmplY3RcIjtcbmltcG9ydCBNZXRlb3IgZnJvbSBcIi4vbWV0ZW9yXCI7XG5pbXBvcnQgTWlzc2lsZSBmcm9tIFwiLi9taXNzaWxlXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpe1xuICAgIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gd2lkdGg7ICAgIFxuICAgIHRoaXMubWV0ZW9yQXJyYXkgPSBbXTtcbiAgICB0aGlzLmJhc2VBcnJheSA9IFtdO1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMudGltZXIgPSAwOyAvL3VzZWQgdG8gZ2VuZXJhdGUgbmV3IG1ldGVvcnMgYXQgaW50ZXJ2YWxzXG4gICAgdGhpcy5sZXZlbCA9IDE7IC8vY29udHJvbHMgZGlmZmljdWx0eSBhbmQgcGFjZSBvZiBnYW1lXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuXG4gICAgdGhpcy5nYW1lTG9vcCA9IHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJ1bkdhbWUgPSB0aGlzLnJ1bkdhbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzID0gdGhpcy5idWlsZE5ld01ldGVvcnMuYmluZCh0aGlzKTsgICAgXG4gICAgLy90aGlzLmJhc2UgPSBuZXcgQmFzZSh0aGlzLmN0eCwgdGhpcy5zY3JlZW5IZWlnaHQpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSl7XG4gICAgY29uc29sZS5sb2coYGNsaWNrZWQgJHtlLm9mZnNldFh9YCk7ICBcbiAgICAvL2NvbnNvbGUubG9nKGBjbGlja2VkICR7ZS5vZmZzZXRZfWApO1xuICAgIFxuICAgIC8vZmluZCBjbG9zZXN0IGJhc2UgdG8gY2xpY2tcbiAgICB0aGlzLmJhc2VBcnJheS5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgY29uc29sZS5sb2coYmFzZS54UG9zKTtcbiAgICB9KTsgICBcbiAgfVxuXG4gIHJ1bkdhbWUoKXtcbiAgICAvL2luaXRpYWwgc2V0dXAgbG9naWNcbiAgICAvL3RoZW4sIHN0YXJ0IGdhbWVMb29wXG4gICAgbGV0IHN0YXJ0aW5nTWV0ZW9ycyA9IDEwO1xuICAgIGxldCBzdGFydGluZ0Jhc2VzID0gMztcbiAgICAvL3NldHVwIG1ldGVvcnMgPz8/bWVyZ2Ugd2l0aCBidWlsZE1ldGVvcnM/Pz8/XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydGluZ01ldGVvcnM7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gICAgLy9zZXR1cCBiYXNlc1xuICAgIGxldCBiYXNlWG9mZnNldCA9IDE1MDtcbiAgICBmb3IgKGxldCBpID0wOyBpIDwgc3RhcnRpbmdCYXNlczsgaSsrKXtcbiAgICAgIHRoaXMuYmFzZUFycmF5LnB1c2gobmV3IEJhc2UodGhpcy5jdHgsIHRoaXMuc2NyZWVuSGVpZ2h0LGJhc2VYb2Zmc2V0KSk7XG4gICAgICBiYXNlWG9mZnNldCArPSB0aGlzLnNjcmVlbldpZHRoLzM7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUxvb3AoMCk7XG4gIH1cblxuICBnYW1lTG9vcCh0aW1lc3RhbXApeyAgICBcbiAgICAvL3doaWxlIG5vdCBsb3N0XG5cbiAgICAgIC8vdXBkYXRlIG1ldGVvcmFycmF5XG4gICAgICAvL3JlZHJhdyBtZXRlb3JzXG4gICAgICAvL2xpc3RlbiBmb3IgY2xpY2tzXG4gICAgICAvL3JlcGVhdFxuXG4gICAgLy9cbiAgICBsZXQgZWxhcHNlZEZyYW1lVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICB0aGlzLnRpbWVyKz1lbGFwc2VkRnJhbWVUaW1lLzEwMDA7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy50aW1lcik7XG5cbiAgICBjb25zdCBsZXZlbE11bHRpcGxpZXIgPSAxLjA7ICBcblxuICAgIGlmICh0aGlzLnRpbWVyID49IDMuMCl7XG4gICAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycygpO1xuICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfSAgIFxuXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDApO1xuXG4gICAgdGhpcy5tZXRlb3JBcnJheS5mb3JFYWNoKG1ldGVvciA9PntcbiAgICAgIC8vY2hlY2sgcG9zIG9mIG1ldGVvciBhZ2FpbnN0IG1pc3NpbGVzLCBleHBsb3Npb25zLCBhbmQgZ3JvdW5kXG4gICAgICBpZiAobWV0ZW9yLnBvc2l0aW9uLnkgPj0gdGhpcy5zY3JlZW5IZWlnaHQpe1xuICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGVvci51cGRhdGVQb3NpdGlvbihsZXZlbE11bHRpcGxpZXIsIGVsYXBzZWRGcmFtZVRpbWUgLyAxMDApOyAgXG4gICAgICB9ICAgICAgICAgICBcbiAgICB9KTsgIFxuXG4gICAgdGhpcy5iYXNlQXJyYXkuZm9yRWFjaChiYXNlID0+IHtcbiAgICAgIGJhc2UuZHJhdygpO1xuICAgIH0pO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5tZXRlb3JBcnJheSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApOyAgICBcbiAgfVxuXG4gIGJ1aWxkTmV3TWV0ZW9ycygpIHtcbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmxldmVsICogMjsgaSsrKXtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGVvcntcbiAgY29uc3RydWN0b3IocG9zWCwgY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IC0xMFxuICAgIH07XG4gICAgdGhpcy5zcGVlZCA9IDcgKiB0aGlzLnNldFNwZWVkKCk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTcGVlZCgpe1xuICAgIC8vaGVscHMgc2V0IGFuIGludGlhbCByYW5kb20gcmFuZ2Ugb2Ygc3BlZWRzXG4gICAgbGV0IHRocm90dGxlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHRocm90dGxlciA8PSAwLjI1KSByZXR1cm4gMC43NTtcbiAgICBpZiAodGhyb3R0bGVyID49IDAuNzUpIHJldHVybiAxLjI1O1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKCl7XG4gICAgLy9zZXQgUmFuZG9tIHggZGlyZWN0aW9uXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh4ID4gMC41KSB4ICo9IC0xO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBkZWx0YVRpbWUpe1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLmRpcmVjdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKGxldmVsTXVsdGlwbGllciAqIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpOyAgICBcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG5cbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIGxldCByYWRpdXMgPSAxMDtcbiAgICB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3NpbGV7XG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIFxufSIsIi8vIGNsYXNzIFRlc3RPYmplY3R7XG4vLyAgIGNvbnN0cnVjdG9yKHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQpe1xuLy8gICAgIHRoaXMud2lkdGggPSAxNTA7XG4vLyAgICAgdGhpcy5oZWlnaHQgPSAzMDtcblxuLy8gICAgIHRoaXMucG9zaXRpb24gPSB7XG4vLyAgICAgICB4OiBzY3JlZW5XaWR0aC8yIC0gdGhpcy53aWR0aC8yLFxuLy8gICAgICAgeTogc2NyZWVuSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAxMFxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICBkcmF3KGN0eCl7XG4vLyAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4vLyAgIH1cblxuLy8gICB1cGRhdGUoZGVsdGFUaW1lKVxuLy8gICB7XG4gICAgXG4vLyAgICAgaWYoIWRlbHRhVGltZSkgcmV0dXJuO1xuLy8gICAgIGNvbnNvbGUubG9nKGRlbHRhVGltZSk7XG4vLyAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDUgLyBkZWx0YVRpbWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgVGVzdE9iamVjdDtcblxuLy8gbGV0IGEgPSBbMSwyLDNdO1xuLy8gYS5mb3JFYWNoKGVsID0+IHtcbi8vICAgaWYgKGVsID09PSAyKXtcbi8vICAgICBhLnNwbGljZShhLmluZGV4T2YoZWwpLDEpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKGVsKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKGEpO1xuXG5jbGFzcyBUZXN0e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMudmFyaWFibGUgPSAxO1xuICB9XG5cbiAgYnVpbGRPYmooKXtcbiAgICByZXR1cm4gbmV3IFRlc3QoKTtcbiAgfVxufVxuXG4vLyBsZXQgdGVzdCA9IFRlc3QuYnVpbGRPYmooKTtcbi8vIGxldCB0ZXN0ID0gbmV3IFRlc3QoKTtcbi8vIGxldCBvdGhlclRlc3QgPSB0ZXN0LmJ1aWxkT2JqKCk7XG5sZXQgb3RoZXJUZXN0ID0gbmV3IFRlc3QoKS5idWlsZE9iaigpO1xuY29uc29sZS5sb2cob3RoZXJUZXN0LnZhcmlhYmxlKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9