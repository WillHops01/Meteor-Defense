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
  function Base(ctx, height, position) {
    _classCallCheck(this, Base);

    this.ctx = ctx;
    this.baseImage = document.getElementById("base-image");
    this.screenHeight = height;
    this.position = position;
    this.draw = this.draw.bind(this);
  }

  _createClass(Base, [{
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.baseImage, this.position.x, this.screenHeight - this.position.y);
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
    this.missileArray = [];
    this.missileCount = 10;
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
    value: function handleClick(e) {
      //console.log(`clicked ${e.offsetX}`);  
      //console.log(`clicked ${e.offsetY}`);
      //check for missile count
      //find closest base to click
      //spawn missile at base heading towards click    
      if (this.missileCount > 0) {
        var closestBase = this.baseArray[0];
        var difference = Math.abs(e.offsetX - closestBase.xPos);

        for (var i = 1; i < this.baseArray.length; i++) {
          if (Math.abs(e.offsetX - this.baseArray[i].xPos) < difference) {
            closestBase = this.baseArray[i];
            difference = Math.abs(e.offsetX - closestBase.xPos);
          }
        }

        var destination = {
          x: e.offsetX,
          y: e.offsetY
        };
        this.missileArray.push(new _missile__WEBPACK_IMPORTED_MODULE_2__["default"](destination, closestBase.position));
      }
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


      var baseXoffset = {
        x: 150,
        y: 100
      };

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
      this.timer += elapsedFrameTime / 1000;
      var levelMultiplier = 1.0;

      if (this.timer >= 3.0) {
        this.buildNewMeteors();
        this.timer = 0;
      }

      this.ctx.drawImage(background, 0, 0);
      this.meteorArray.forEach(function (meteor) {
        //check pos of meteor against missiles, explosions, and ground      
        _this.missileArray.forEach(function (missile) {
          var distance = missile.calculateDistance(meteor.position);
          var radiiDifference = missile.radius / 2 + meteor.radius / 2;

          if (distance - radiiDifference <= 2) {
            console.log("hit");
          }
        });

        if (meteor.position.y >= _this.screenHeight) {
          _this.meteorArray.splice(_this.meteorArray.indexOf(meteor), 1);
        } else {
          meteor.updatePosition(levelMultiplier, elapsedFrameTime / 100);
        }
      }); // this.missileArray.forEach(missile => {
      //   missile.draw();
      // });

      this.baseArray.forEach(function (base) {
        base.draw();
      });
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
    this.radius = 10;
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
      this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Missile =
/*#__PURE__*/
function () {
  function Missile(destination, position) {
    _classCallCheck(this, Missile);

    this.destination = destination;
    this.position = position;
    this.radius = 5;
    this.draw = this.draw.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);
  }

  _createClass(Missile, [{
    key: "calculateDistance",
    value: function calculateDistance(mPos) {
      //debugger;
      var xDist = Math.abs(this.position.x - mPos.x);
      var yDist = Math.abs(this.position.y - mPos.y);
      return Math.sqrt(xDist * xDist + yDist * yDist);
    }
  }, {
    key: "draw",
    value: function draw() {//meteors are checking for collisions
    }
  }]);

  return Missile;
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
// let a = [1,2,3];
// a.forEach(el => {
//   if (el === 2){
//     a.splice(a.indexOf(el),1);
//   } else {
//     console.log(el);
//   }
// });
// console.log(a);
// class Test{
//   constructor(){
//     this.variable = 1;
//   }
//   buildObj(){
//     return new Test();
//   }
// }
// // let test = Test.buildObj();
// // let test = new Test();
// // let otherTest = test.buildObj();
// let otherTest = new Test().buildObj();
// console.log(otherTest.variable);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGVzdG9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQXBwIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlNDUkVFTl9XSURUSCIsIlNDUkVFTl9IRUlHSFQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWUiLCJHYW1lIiwiaGFuZGxlQ2xpY2siLCJydW5HYW1lIiwiQmFzZSIsInBvc2l0aW9uIiwiYmFzZUltYWdlIiwic2NyZWVuSGVpZ2h0IiwiZHJhdyIsImJpbmQiLCJkcmF3SW1hZ2UiLCJ4IiwieSIsImNvbnRleHQiLCJzY3JlZW5XaWR0aCIsIm1ldGVvckFycmF5IiwiYmFzZUFycmF5IiwibWlzc2lsZUFycmF5IiwibWlzc2lsZUNvdW50IiwibGFzdFRpbWUiLCJ0aW1lciIsImxldmVsIiwiYmFja2dyb3VuZCIsImdhbWVMb29wIiwiYnVpbGROZXdNZXRlb3JzIiwiZSIsImNsb3Nlc3RCYXNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJvZmZzZXRYIiwieFBvcyIsImkiLCJsZW5ndGgiLCJkZXN0aW5hdGlvbiIsIm9mZnNldFkiLCJwdXNoIiwiTWlzc2lsZSIsInN0YXJ0aW5nTWV0ZW9ycyIsInN0YXJ0aW5nQmFzZXMiLCJwb3NYIiwiZmxvb3IiLCJyYW5kb20iLCJNZXRlb3IiLCJiYXNlWG9mZnNldCIsInRpbWVzdGFtcCIsImVsYXBzZWRGcmFtZVRpbWUiLCJsZXZlbE11bHRpcGxpZXIiLCJmb3JFYWNoIiwibWV0ZW9yIiwibWlzc2lsZSIsImRpc3RhbmNlIiwiY2FsY3VsYXRlRGlzdGFuY2UiLCJyYWRpaURpZmZlcmVuY2UiLCJyYWRpdXMiLCJjb25zb2xlIiwibG9nIiwic3BsaWNlIiwiaW5kZXhPZiIsInVwZGF0ZVBvc2l0aW9uIiwiYmFzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNwZWVkIiwic2V0U3BlZWQiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJ0aHJvdHRsZXIiLCJkZWx0YVRpbWUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGwiLCJtUG9zIiwieERpc3QiLCJ5RGlzdCIsInNxcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7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LENBQWQsR0FBa0I0RCxJQUFJLENBQUM1RCxDQUFoQyxDQUFaO0FBQ0EsYUFBT2dCLElBQUksQ0FBQytDLElBQUwsQ0FBV0YsS0FBSyxHQUFDQSxLQUFQLEdBQWlCQyxLQUFLLEdBQUNBLEtBQWpDLENBQVA7QUFDRDs7OzJCQUVLLENBQ0o7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkg7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7OztBQ25EQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5jb25zdCBBcHAgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2FwcC5qc1wiKTtcbi8vIGNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWUuanNcIik7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTsgIFxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBcbiAgY29uc3QgU0NSRUVOX1dJRFRIID0gMTIwMDtcbiAgY29uc3QgU0NSRUVOX0hFSUdIVCA9IDgwMDtcbiAgY3R4LmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSDtcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4LCBTQ1JFRU5fV0lEVEgsIFNDUkVFTl9IRUlHSFQpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWUuaGFuZGxlQ2xpY2ssIGZhbHNlKTtcbiAgZ2FtZS5ydW5HYW1lKCk7XG59KTsiLCIvLyBmdW5jdGlvbiBBcHAoKXtcbi8vICAgY29uc29sZS5sb2coXCJhcHBlZFwiKTtcbi8vIH1cblxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZXtcbiAgY29uc3RydWN0b3IoY3R4LCBoZWlnaHQsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZS1pbWFnZVwiKTtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5iYXNlSW1hZ2UsIFxuICAgICAgdGhpcy5wb3NpdGlvbi54LCBcbiAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0LXRoaXMucG9zaXRpb24ueVxuICAgICAgKTtcbiAgfVxuXG5cbn0iLCJpbXBvcnQgVGVzdE9iamVjdCBmcm9tIFwiLi90ZXN0b2JqZWN0XCI7XG5pbXBvcnQgTWV0ZW9yIGZyb20gXCIuL21ldGVvclwiO1xuaW1wb3J0IE1pc3NpbGUgZnJvbSBcIi4vbWlzc2lsZVwiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1le1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KXtcbiAgICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5zY3JlZW5XaWR0aCA9IHdpZHRoOyBcblxuICAgIHRoaXMubWV0ZW9yQXJyYXkgPSBbXTtcbiAgICB0aGlzLmJhc2VBcnJheSA9IFtdO1xuICAgIHRoaXMubWlzc2lsZUFycmF5ID0gW107XG5cbiAgICB0aGlzLm1pc3NpbGVDb3VudCA9IDEwO1xuXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMTsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG5cbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucnVuR2FtZSA9IHRoaXMucnVuR2FtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5idWlsZE5ld01ldGVvcnMgPSB0aGlzLmJ1aWxkTmV3TWV0ZW9ycy5iaW5kKHRoaXMpOyAgXG4gIH1cblxuICBoYW5kbGVDbGljayhlKXtcbiAgICAvL2NvbnNvbGUubG9nKGBjbGlja2VkICR7ZS5vZmZzZXRYfWApOyAgXG4gICAgLy9jb25zb2xlLmxvZyhgY2xpY2tlZCAke2Uub2Zmc2V0WX1gKTtcbiAgICBcbiAgICAvL2NoZWNrIGZvciBtaXNzaWxlIGNvdW50XG4gICAgLy9maW5kIGNsb3Nlc3QgYmFzZSB0byBjbGlja1xuICAgIC8vc3Bhd24gbWlzc2lsZSBhdCBiYXNlIGhlYWRpbmcgdG93YXJkcyBjbGljayAgICBcbiAgICBcbiAgICBpZiAodGhpcy5taXNzaWxlQ291bnQgPiAwKXtcblxuICAgICAgbGV0IGNsb3Nlc3RCYXNlID0gdGhpcy5iYXNlQXJyYXlbMF07XG4gICAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnhQb3MpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJhc2VBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoTWF0aC5hYnMoZS5vZmZzZXRYIC0gdGhpcy5iYXNlQXJyYXlbaV0ueFBvcykgPCBkaWZmZXJlbmNlKSB7XG4gICAgICAgICAgY2xvc2VzdEJhc2UgPSB0aGlzLmJhc2VBcnJheVtpXTtcbiAgICAgICAgICBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UueFBvcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBkZXN0aW5hdGlvbiA9IHtcbiAgICAgICAgeDogZS5vZmZzZXRYLFxuICAgICAgICB5OiBlLm9mZnNldFlcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LnB1c2gobmV3IE1pc3NpbGUoZGVzdGluYXRpb24sIGNsb3Nlc3RCYXNlLnBvc2l0aW9uKSk7XG4gICAgfSAgICAgXG4gIH1cblxuICBydW5HYW1lKCl7XG4gICAgLy9pbml0aWFsIHNldHVwIGxvZ2ljXG4gICAgLy90aGVuLCBzdGFydCBnYW1lTG9vcFxuICAgIGxldCBzdGFydGluZ01ldGVvcnMgPSAxMDtcbiAgICBsZXQgc3RhcnRpbmdCYXNlcyA9IDM7XG4gICAgLy9zZXR1cCBtZXRlb3JzID8/P21lcmdlIHdpdGggYnVpbGRNZXRlb3JzPz8/P1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRpbmdNZXRlb3JzOyBpKyspe1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIC8vc2V0dXAgYmFzZXNcbiAgICBsZXQgYmFzZVhvZmZzZXQgPSB7XG4gICAgICB4OiAxNTAsXG4gICAgICB5OiAxMDBcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPTA7IGkgPCBzdGFydGluZ0Jhc2VzOyBpKyspe1xuICAgICAgdGhpcy5iYXNlQXJyYXkucHVzaChuZXcgQmFzZSh0aGlzLmN0eCwgdGhpcy5zY3JlZW5IZWlnaHQsYmFzZVhvZmZzZXQpKTtcbiAgICAgIGJhc2VYb2Zmc2V0ICs9IHRoaXMuc2NyZWVuV2lkdGgvMztcbiAgICB9XG4gICAgdGhpcy5nYW1lTG9vcCgwKTtcbiAgfVxuXG4gIGdhbWVMb29wKHRpbWVzdGFtcCl7ICAgIFxuICAgIC8vd2hpbGUgbm90IGxvc3RcblxuICAgICAgLy91cGRhdGUgbWV0ZW9yYXJyYXlcbiAgICAgIC8vcmVkcmF3IG1ldGVvcnNcbiAgICAgIC8vbGlzdGVuIGZvciBjbGlja3NcbiAgICAgIC8vcmVwZWF0XG5cbiAgICAvL1xuICAgIGxldCBlbGFwc2VkRnJhbWVUaW1lID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgIHRoaXMudGltZXIrPWVsYXBzZWRGcmFtZVRpbWUvMTAwMDsgICAgXG5cbiAgICBjb25zdCBsZXZlbE11bHRpcGxpZXIgPSAxLjA7ICBcblxuICAgIGlmICh0aGlzLnRpbWVyID49IDMuMCl7XG4gICAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycygpO1xuICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfSAgIFxuXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDApO1xuXG4gICAgXG5cbiAgICB0aGlzLm1ldGVvckFycmF5LmZvckVhY2gobWV0ZW9yID0+e1xuICAgICAgLy9jaGVjayBwb3Mgb2YgbWV0ZW9yIGFnYWluc3QgbWlzc2lsZXMsIGV4cGxvc2lvbnMsIGFuZCBncm91bmQgICAgICBcbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LmZvckVhY2gobWlzc2lsZSA9PiB7XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IG1pc3NpbGUuY2FsY3VsYXRlRGlzdGFuY2UobWV0ZW9yLnBvc2l0aW9uKTtcbiAgICAgICAgbGV0IHJhZGlpRGlmZmVyZW5jZSA9IG1pc3NpbGUucmFkaXVzLzIgKyBtZXRlb3IucmFkaXVzLzI7XG4gICAgICAgIGlmIChkaXN0YW5jZSAtIHJhZGlpRGlmZmVyZW5jZSA8PSAyKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImhpdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgaWYgKG1ldGVvci5wb3NpdGlvbi55ID49IHRoaXMuc2NyZWVuSGVpZ2h0KXtcbiAgICAgICAgdGhpcy5tZXRlb3JBcnJheS5zcGxpY2UodGhpcy5tZXRlb3JBcnJheS5pbmRleE9mKG1ldGVvciksMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXRlb3IudXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBlbGFwc2VkRnJhbWVUaW1lIC8gMTAwKTsgIFxuICAgICAgfSAgICAgICAgICAgXG4gICAgfSk7ICBcblxuICAgIC8vIHRoaXMubWlzc2lsZUFycmF5LmZvckVhY2gobWlzc2lsZSA9PiB7XG4gICAgLy8gICBtaXNzaWxlLmRyYXcoKTtcbiAgICAvLyB9KTtcblxuICAgIHRoaXMuYmFzZUFycmF5LmZvckVhY2goYmFzZSA9PiB7XG4gICAgICBiYXNlLmRyYXcoKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7ICAgIFxuICB9XG5cbiAgYnVpbGROZXdNZXRlb3JzKCkge1xuICAgIGZvcihsZXQgaSA9MDsgaSA8IHRoaXMubGV2ZWwgKiAyOyBpKyspe1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0ZW9ye1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogLTEwXG4gICAgfTtcbiAgICB0aGlzLnNwZWVkID0gNyAqIHRoaXMuc2V0U3BlZWQoKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuc2V0RGlyZWN0aW9uKCk7XG4gICAgdGhpcy5yYWRpdXMgPSAxMDtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0U3BlZWQoKXtcbiAgICAvL2hlbHBzIHNldCBhbiBpbnRpYWwgcmFuZG9tIHJhbmdlIG9mIHNwZWVkc1xuICAgIGxldCB0aHJvdHRsZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh0aHJvdHRsZXIgPD0gMC4yNSkgcmV0dXJuIDAuNzU7XG4gICAgaWYgKHRocm90dGxlciA+PSAwLjc1KSByZXR1cm4gMS4yNTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHNldERpcmVjdGlvbigpe1xuICAgIC8vc2V0IFJhbmRvbSB4IGRpcmVjdGlvblxuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAoeCA+IDAuNSkgeCAqPSAtMTtcbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGxldmVsTXVsdGlwbGllciwgZGVsdGFUaW1lKXtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5kaXJlY3Rpb247XG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IChsZXZlbE11bHRpcGxpZXIgKiB0aGlzLnNwZWVkICogZGVsdGFUaW1lKTsgICAgXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuXG4gIGRyYXcoKXtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTsgICAgXG4gICAgdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3NpbGV7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uLCBwb3NpdGlvbil7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnJhZGl1cyA9IDU7XG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2FsY3VsYXRlRGlzdGFuY2UobVBvcyl7XG4gICAgLy9kZWJ1Z2dlcjtcbiAgICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSBtUG9zLngpO1xuICAgIGxldCB5RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIG1Qb3MueSk7XG4gICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QqeERpc3QpICsgKHlEaXN0KnlEaXN0KSk7XG4gIH1cblxuICBkcmF3KCl7XG4gICAgLy9tZXRlb3JzIGFyZSBjaGVja2luZyBmb3IgY29sbGlzaW9uc1xuICB9XG59IiwiLy8gY2xhc3MgVGVzdE9iamVjdHtcbi8vICAgY29uc3RydWN0b3Ioc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCl7XG4vLyAgICAgdGhpcy53aWR0aCA9IDE1MDtcbi8vICAgICB0aGlzLmhlaWdodCA9IDMwO1xuXG4vLyAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbi8vICAgICAgIHg6IHNjcmVlbldpZHRoLzIgLSB0aGlzLndpZHRoLzIsXG4vLyAgICAgICB5OiBzY3JlZW5IZWlnaHQgLSB0aGlzLmhlaWdodCAtIDEwXG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIGRyYXcoY3R4KXtcbi8vICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbi8vICAgfVxuXG4vLyAgIHVwZGF0ZShkZWx0YVRpbWUpXG4vLyAgIHtcbiAgICBcbi8vICAgICBpZighZGVsdGFUaW1lKSByZXR1cm47XG4vLyAgICAgY29uc29sZS5sb2coZGVsdGFUaW1lKTtcbi8vICAgICB0aGlzLnBvc2l0aW9uLnggKz0gNSAvIGRlbHRhVGltZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBUZXN0T2JqZWN0O1xuXG4vLyBsZXQgYSA9IFsxLDIsM107XG4vLyBhLmZvckVhY2goZWwgPT4ge1xuLy8gICBpZiAoZWwgPT09IDIpe1xuLy8gICAgIGEuc3BsaWNlKGEuaW5kZXhPZihlbCksMSk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5sb2coZWwpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gY29uc29sZS5sb2coYSk7XG5cbi8vIGNsYXNzIFRlc3R7XG4vLyAgIGNvbnN0cnVjdG9yKCl7XG4vLyAgICAgdGhpcy52YXJpYWJsZSA9IDE7XG4vLyAgIH1cblxuLy8gICBidWlsZE9iaigpe1xuLy8gICAgIHJldHVybiBuZXcgVGVzdCgpO1xuLy8gICB9XG4vLyB9XG5cbi8vIC8vIGxldCB0ZXN0ID0gVGVzdC5idWlsZE9iaigpO1xuLy8gLy8gbGV0IHRlc3QgPSBuZXcgVGVzdCgpO1xuLy8gLy8gbGV0IG90aGVyVGVzdCA9IHRlc3QuYnVpbGRPYmooKTtcbi8vIGxldCBvdGhlclRlc3QgPSBuZXcgVGVzdCgpLmJ1aWxkT2JqKCk7XG4vLyBjb25zb2xlLmxvZyhvdGhlclRlc3QudmFyaWFibGUpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=