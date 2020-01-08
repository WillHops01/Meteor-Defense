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
  function Base(ctx, position) {
    _classCallCheck(this, Base);

    this.ctx = ctx;
    this.baseImage = document.getElementById("base-image");
    this.position = {
      x: position.x,
      y: position.y
    }; //debugger;

    this.draw = this.draw.bind(this);
  }

  _createClass(Base, [{
    key: "draw",
    value: function draw() {
      //debugger;
      this.ctx.drawImage(this.baseImage, this.position.x, this.position.y);
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
        var difference = Math.abs(e.offsetX - closestBase.position.x);

        for (var i = 1; i < this.baseArray.length; i++) {
          if (Math.abs(e.offsetX - this.baseArray[i].position.x) < difference) {
            closestBase = this.baseArray[i];
            difference = Math.abs(e.offsetX - closestBase.position.x);
          }
        }

        var destination = {
          x: e.offsetX,
          y: e.offsetY
        };
        this.missileArray.push(new _missile__WEBPACK_IMPORTED_MODULE_2__["default"](destination, closestBase.position, this.ctx));
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


      var basePosition = {
        x: 150,
        y: this.screenHeight - 100
      };

      for (var _i = 0; _i < startingBases; _i++) {
        this.baseArray.push(new _base__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx, basePosition));
        basePosition.x += this.screenWidth / 3;
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
      });
      this.missileArray.forEach(function (missile) {
        missile.updatePosition(elapsedFrameTime / 100);
      });
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
  function Missile(destination, position, ctx) {
    _classCallCheck(this, Missile);

    this.destination = destination;
    this.position = {
      x: position.x + 10,
      y: position.y - 10
    };
    this.course = {
      x: this.destination.x - this.position.x,
      y: this.destination.y - this.position.y
    }; //debugger;

    this.speed = 10;
    this.radius = 5;
    this.ctx = ctx;
    this.missileImage = document.getElementById("yellow-missile");
    this.draw = this.draw.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
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
    key: "updatePosition",
    value: function updatePosition(dt) {
      this.position.x += this.course.x / this.speed * dt; //debugger;

      this.position.y += this.course.y / this.speed * dt;
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      //meteors are checking for collisions in Game.js
      this.ctx.drawImage(this.missileImage, this.position.x, this.position.y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGVzdG9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQXBwIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlNDUkVFTl9XSURUSCIsIlNDUkVFTl9IRUlHSFQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWUiLCJHYW1lIiwiaGFuZGxlQ2xpY2siLCJydW5HYW1lIiwiQmFzZSIsInBvc2l0aW9uIiwiYmFzZUltYWdlIiwieCIsInkiLCJkcmF3IiwiYmluZCIsImRyYXdJbWFnZSIsImNvbnRleHQiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5XaWR0aCIsIm1ldGVvckFycmF5IiwiYmFzZUFycmF5IiwibWlzc2lsZUFycmF5IiwibWlzc2lsZUNvdW50IiwibGFzdFRpbWUiLCJ0aW1lciIsImxldmVsIiwiYmFja2dyb3VuZCIsImdhbWVMb29wIiwiYnVpbGROZXdNZXRlb3JzIiwiZSIsImNsb3Nlc3RCYXNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJvZmZzZXRYIiwiaSIsImxlbmd0aCIsImRlc3RpbmF0aW9uIiwib2Zmc2V0WSIsInB1c2giLCJNaXNzaWxlIiwic3RhcnRpbmdNZXRlb3JzIiwic3RhcnRpbmdCYXNlcyIsInBvc1giLCJmbG9vciIsInJhbmRvbSIsIk1ldGVvciIsImJhc2VQb3NpdGlvbiIsInRpbWVzdGFtcCIsImVsYXBzZWRGcmFtZVRpbWUiLCJsZXZlbE11bHRpcGxpZXIiLCJmb3JFYWNoIiwibWV0ZW9yIiwibWlzc2lsZSIsImRpc3RhbmNlIiwiY2FsY3VsYXRlRGlzdGFuY2UiLCJyYWRpaURpZmZlcmVuY2UiLCJyYWRpdXMiLCJjb25zb2xlIiwibG9nIiwic3BsaWNlIiwiaW5kZXhPZiIsInVwZGF0ZVBvc2l0aW9uIiwiYmFzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNwZWVkIiwic2V0U3BlZWQiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJ0aHJvdHRsZXIiLCJkZWx0YVRpbWUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGwiLCJjb3Vyc2UiLCJtaXNzaWxlSW1hZ2UiLCJtUG9zIiwieERpc3QiLCJ5RGlzdCIsInNxcnQiLCJkdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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LENBRWhCOztBQUNBLFdBQUt4RSxRQUFMLENBQWNHLENBQWQsSUFBb0IsS0FBSytELE1BQUwsQ0FBWS9ELENBQVosR0FBZ0IsS0FBS3FELEtBQXRCLEdBQStCZ0IsRUFBbEQ7QUFHQSxXQUFLcEUsSUFBTDtBQUNEOzs7MkJBRUs7QUFDSjtBQUNBLFdBQUtmLEdBQUwsQ0FBU2lCLFNBQVQsQ0FDRSxLQUFLNkQsWUFEUCxFQUVFLEtBQUtuRSxRQUFMLENBQWNFLENBRmhCLEVBR0UsS0FBS0YsUUFBTCxDQUFjRyxDQUhoQjtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDSDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7O0FDbkRBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmNvbnN0IEFwcCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYXBwLmpzXCIpO1xuLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpOyAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIFxuICBjb25zdCBTQ1JFRU5fV0lEVEggPSAxMjAwO1xuICBjb25zdCBTQ1JFRU5fSEVJR0hUID0gODAwO1xuICBjdHguY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIO1xuICBjdHguY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQ7XG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgsIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5oYW5kbGVDbGljaywgZmFsc2UpO1xuICBnYW1lLnJ1bkdhbWUoKTtcbn0pOyIsIi8vIGZ1bmN0aW9uIEFwcCgpe1xuLy8gICBjb25zb2xlLmxvZyhcImFwcGVkXCIpO1xuLy8gfVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNle1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZS1pbWFnZVwiKTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgIHk6IHBvc2l0aW9uLnlcbiAgICB9O1xuICAgIC8vZGVidWdnZXI7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBkcmF3KCl7XG4gICAgLy9kZWJ1Z2dlcjtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmJhc2VJbWFnZSwgXG4gICAgICB0aGlzLnBvc2l0aW9uLngsIFxuICAgICAgdGhpcy5wb3NpdGlvbi55XG4gICAgICApO1xuICB9XG5cblxufSIsImltcG9ydCBUZXN0T2JqZWN0IGZyb20gXCIuL3Rlc3RvYmplY3RcIjtcbmltcG9ydCBNZXRlb3IgZnJvbSBcIi4vbWV0ZW9yXCI7XG5pbXBvcnQgTWlzc2lsZSBmcm9tIFwiLi9taXNzaWxlXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpe1xuICAgIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gd2lkdGg7IFxuXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5taXNzaWxlQXJyYXkgPSBbXTtcblxuICAgIHRoaXMubWlzc2lsZUNvdW50ID0gMTA7XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDsgLy91c2VkIHRvIGdlbmVyYXRlIG5ldyBtZXRlb3JzIGF0IGludGVydmFsc1xuICAgIHRoaXMubGV2ZWwgPSAxOyAvL2NvbnRyb2xzIGRpZmZpY3VsdHkgYW5kIHBhY2Ugb2YgZ2FtZVxuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcblxuICAgIHRoaXMuZ2FtZUxvb3AgPSB0aGlzLmdhbWVMb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ydW5HYW1lID0gdGhpcy5ydW5HYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycyA9IHRoaXMuYnVpbGROZXdNZXRlb3JzLmJpbmQodGhpcyk7ICBcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpe1xuICAgIC8vY29uc29sZS5sb2coYGNsaWNrZWQgJHtlLm9mZnNldFh9YCk7ICBcbiAgICAvL2NvbnNvbGUubG9nKGBjbGlja2VkICR7ZS5vZmZzZXRZfWApO1xuICAgIFxuICAgIC8vY2hlY2sgZm9yIG1pc3NpbGUgY291bnRcbiAgICAvL2ZpbmQgY2xvc2VzdCBiYXNlIHRvIGNsaWNrXG4gICAgLy9zcGF3biBtaXNzaWxlIGF0IGJhc2UgaGVhZGluZyB0b3dhcmRzIGNsaWNrICAgIFxuICAgIFxuICAgIGlmICh0aGlzLm1pc3NpbGVDb3VudCA+IDApe1xuXG4gICAgICBsZXQgY2xvc2VzdEJhc2UgPSB0aGlzLmJhc2VBcnJheVswXTtcbiAgICAgIGxldCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UucG9zaXRpb24ueCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYmFzZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhlLm9mZnNldFggLSB0aGlzLmJhc2VBcnJheVtpXS5wb3NpdGlvbi54KSA8IGRpZmZlcmVuY2UpIHtcbiAgICAgICAgICBjbG9zZXN0QmFzZSA9IHRoaXMuYmFzZUFycmF5W2ldO1xuICAgICAgICAgIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGRlc3RpbmF0aW9uID0ge1xuICAgICAgICB4OiBlLm9mZnNldFgsXG4gICAgICAgIHk6IGUub2Zmc2V0WVxuICAgICAgfTtcbiAgICAgIFxuICAgICAgdGhpcy5taXNzaWxlQXJyYXkucHVzaChuZXcgTWlzc2lsZShkZXN0aW5hdGlvbiwgKGNsb3Nlc3RCYXNlLnBvc2l0aW9uKSwgdGhpcy5jdHgpKTtcbiAgICB9ICAgICBcbiAgfVxuXG4gIHJ1bkdhbWUoKXtcbiAgICAvL2luaXRpYWwgc2V0dXAgbG9naWNcbiAgICAvL3RoZW4sIHN0YXJ0IGdhbWVMb29wXG4gICAgbGV0IHN0YXJ0aW5nTWV0ZW9ycyA9IDEwO1xuICAgIGxldCBzdGFydGluZ0Jhc2VzID0gMztcbiAgICAvL3NldHVwIG1ldGVvcnMgPz8/bWVyZ2Ugd2l0aCBidWlsZE1ldGVvcnM/Pz8/XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydGluZ01ldGVvcnM7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gICAgLy9zZXR1cCBiYXNlc1xuICAgIGxldCBiYXNlUG9zaXRpb24gPSB7XG4gICAgICB4OiAxNTAsXG4gICAgICB5OiB0aGlzLnNjcmVlbkhlaWdodCAtIDEwMFxuICAgIH07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9MDsgaSA8IHN0YXJ0aW5nQmFzZXM7IGkrKyl7ICAgICAgXG4gICAgICB0aGlzLmJhc2VBcnJheS5wdXNoKG5ldyBCYXNlKHRoaXMuY3R4LCBiYXNlUG9zaXRpb24pKTsgICAgICBcbiAgICAgIGJhc2VQb3NpdGlvbi54ICs9IHRoaXMuc2NyZWVuV2lkdGgvMztcbiAgICB9XG4gICAgdGhpcy5nYW1lTG9vcCgwKTtcbiAgfVxuXG4gIGdhbWVMb29wKHRpbWVzdGFtcCl7ICAgIFxuICAgIC8vd2hpbGUgbm90IGxvc3RcblxuICAgICAgLy91cGRhdGUgbWV0ZW9yYXJyYXlcbiAgICAgIC8vcmVkcmF3IG1ldGVvcnNcbiAgICAgIC8vbGlzdGVuIGZvciBjbGlja3NcbiAgICAgIC8vcmVwZWF0XG5cbiAgICAvL1xuICAgIGxldCBlbGFwc2VkRnJhbWVUaW1lID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgIHRoaXMudGltZXIrPWVsYXBzZWRGcmFtZVRpbWUvMTAwMDsgICAgXG5cbiAgICBjb25zdCBsZXZlbE11bHRpcGxpZXIgPSAxLjA7ICBcblxuICAgIGlmICh0aGlzLnRpbWVyID49IDMuMCl7XG4gICAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycygpO1xuICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfSAgIFxuXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDApO1xuXG4gICAgdGhpcy5tZXRlb3JBcnJheS5mb3JFYWNoKG1ldGVvciA9PntcbiAgICAgIC8vY2hlY2sgcG9zIG9mIG1ldGVvciBhZ2FpbnN0IG1pc3NpbGVzLCBleHBsb3Npb25zLCBhbmQgZ3JvdW5kICAgICAgXG4gICAgICB0aGlzLm1pc3NpbGVBcnJheS5mb3JFYWNoKG1pc3NpbGUgPT4ge1xuICAgICAgICBsZXQgZGlzdGFuY2UgPSBtaXNzaWxlLmNhbGN1bGF0ZURpc3RhbmNlKG1ldGVvci5wb3NpdGlvbik7XG4gICAgICAgIGxldCByYWRpaURpZmZlcmVuY2UgPSBtaXNzaWxlLnJhZGl1cy8yICsgbWV0ZW9yLnJhZGl1cy8yO1xuICAgICAgICBpZiAoZGlzdGFuY2UgLSByYWRpaURpZmZlcmVuY2UgPD0gMil7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJoaXRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBpZiAobWV0ZW9yLnBvc2l0aW9uLnkgPj0gdGhpcy5zY3JlZW5IZWlnaHQpe1xuICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGVvci51cGRhdGVQb3NpdGlvbihsZXZlbE11bHRpcGxpZXIsIGVsYXBzZWRGcmFtZVRpbWUgLyAxMDApOyAgXG4gICAgICB9ICAgICAgICAgICBcbiAgICB9KTsgIFxuXG4gICAgdGhpcy5taXNzaWxlQXJyYXkuZm9yRWFjaChtaXNzaWxlID0+IHtcbiAgICAgIG1pc3NpbGUudXBkYXRlUG9zaXRpb24oZWxhcHNlZEZyYW1lVGltZSAvIDEwMCk7XG4gICAgfSk7XG4gICAgdGhpcy5iYXNlQXJyYXkuZm9yRWFjaChiYXNlID0+IHtcbiAgICAgIGJhc2UuZHJhdygpO1xuICAgIH0pO1xuICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTsgICAgXG4gIH1cblxuICBidWlsZE5ld01ldGVvcnMoKSB7XG4gICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5sZXZlbCAqIDI7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRlb3J7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiAtMTBcbiAgICB9O1xuICAgIHRoaXMuc3BlZWQgPSA3ICogdGhpcy5zZXRTcGVlZCgpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICB0aGlzLnJhZGl1cyA9IDEwO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTcGVlZCgpe1xuICAgIC8vaGVscHMgc2V0IGFuIGludGlhbCByYW5kb20gcmFuZ2Ugb2Ygc3BlZWRzXG4gICAgbGV0IHRocm90dGxlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHRocm90dGxlciA8PSAwLjI1KSByZXR1cm4gMC43NTtcbiAgICBpZiAodGhyb3R0bGVyID49IDAuNzUpIHJldHVybiAxLjI1O1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKCl7XG4gICAgLy9zZXQgUmFuZG9tIHggZGlyZWN0aW9uXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh4ID4gMC41KSB4ICo9IC0xO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBkZWx0YVRpbWUpe1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLmRpcmVjdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKGxldmVsTXVsdGlwbGllciAqIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpOyAgICBcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG5cbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyAgICBcbiAgICB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lsZXtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24sIHBvc2l0aW9uLCBjdHgpe1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCArIDEwLFxuICAgICAgeTogcG9zaXRpb24ueSAtIDEwXG4gICAgfTtcblxuICAgIHRoaXMuY291cnNlID0ge1xuICAgICAgeDogKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCksXG4gICAgICB5OiAodGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55KVxuICAgIH07XG4gICAgLy9kZWJ1Z2dlcjtcbiAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5taXNzaWxlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllbGxvdy1taXNzaWxlXCIpOyAgICBcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjYWxjdWxhdGVEaXN0YW5jZShtUG9zKXtcbiAgICAvL2RlYnVnZ2VyO1xuICAgIGxldCB4RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIG1Qb3MueCk7XG4gICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gbVBvcy55KTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCp4RGlzdCkgKyAoeURpc3QqeURpc3QpKTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGR0KXtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gKHRoaXMuY291cnNlLnggLyB0aGlzLnNwZWVkKSAqIGR0O1xuICAgIC8vZGVidWdnZXI7XG4gICAgdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLmNvdXJzZS55IC8gdGhpcy5zcGVlZCkgKiBkdDtcblxuXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBkcmF3KCl7XG4gICAgLy9tZXRlb3JzIGFyZSBjaGVja2luZyBmb3IgY29sbGlzaW9ucyBpbiBHYW1lLmpzXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5taXNzaWxlSW1hZ2UsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnlcbiAgICApO1xuICB9XG59IiwiLy8gY2xhc3MgVGVzdE9iamVjdHtcbi8vICAgY29uc3RydWN0b3Ioc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCl7XG4vLyAgICAgdGhpcy53aWR0aCA9IDE1MDtcbi8vICAgICB0aGlzLmhlaWdodCA9IDMwO1xuXG4vLyAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbi8vICAgICAgIHg6IHNjcmVlbldpZHRoLzIgLSB0aGlzLndpZHRoLzIsXG4vLyAgICAgICB5OiBzY3JlZW5IZWlnaHQgLSB0aGlzLmhlaWdodCAtIDEwXG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIGRyYXcoY3R4KXtcbi8vICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbi8vICAgfVxuXG4vLyAgIHVwZGF0ZShkZWx0YVRpbWUpXG4vLyAgIHtcbiAgICBcbi8vICAgICBpZighZGVsdGFUaW1lKSByZXR1cm47XG4vLyAgICAgY29uc29sZS5sb2coZGVsdGFUaW1lKTtcbi8vICAgICB0aGlzLnBvc2l0aW9uLnggKz0gNSAvIGRlbHRhVGltZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBUZXN0T2JqZWN0O1xuXG4vLyBsZXQgYSA9IFsxLDIsM107XG4vLyBhLmZvckVhY2goZWwgPT4ge1xuLy8gICBpZiAoZWwgPT09IDIpe1xuLy8gICAgIGEuc3BsaWNlKGEuaW5kZXhPZihlbCksMSk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5sb2coZWwpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gY29uc29sZS5sb2coYSk7XG5cbi8vIGNsYXNzIFRlc3R7XG4vLyAgIGNvbnN0cnVjdG9yKCl7XG4vLyAgICAgdGhpcy52YXJpYWJsZSA9IDE7XG4vLyAgIH1cblxuLy8gICBidWlsZE9iaigpe1xuLy8gICAgIHJldHVybiBuZXcgVGVzdCgpO1xuLy8gICB9XG4vLyB9XG5cbi8vIC8vIGxldCB0ZXN0ID0gVGVzdC5idWlsZE9iaigpO1xuLy8gLy8gbGV0IHRlc3QgPSBuZXcgVGVzdCgpO1xuLy8gLy8gbGV0IG90aGVyVGVzdCA9IHRlc3QuYnVpbGRPYmooKTtcbi8vIGxldCBvdGhlclRlc3QgPSBuZXcgVGVzdCgpLmJ1aWxkT2JqKCk7XG4vLyBjb25zb2xlLmxvZyhvdGhlclRlc3QudmFyaWFibGUpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=