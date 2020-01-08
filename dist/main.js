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

/***/ "./src/scripts/explosion.js":
/*!**********************************!*\
  !*** ./src/scripts/explosion.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Explosion; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Explosion =
/*#__PURE__*/
function () {
  function Explosion(ctx, position) {
    _classCallCheck(this, Explosion);

    this.position = {
      x: position.x - 50,
      y: position.y - 50
    }; //50 is magic number center

    this.ctx = ctx;
    this.timer = 0;
    this.explosionImageArray = [document.getElementById("explosion-1"), document.getElementById("explosion-2"), document.getElementById("explosion-3"), document.getElementById("explosion-4")];
    this.imageToDraw = this.explosionImageArray[0];
    this.stage = 0;
    this.explosionRadius = 75;
    this.draw = this.draw.bind(this);
    this.updateExplosion = this.updateExplosion.bind(this);
  }

  _createClass(Explosion, [{
    key: "updateExplosion",
    value: function updateExplosion(dt) {
      //debugger;
      this.timer += dt / 1000;

      if (this.timer >= 0.8) {
        this.stage++;
        this.timer = 0;
      }

      if (this.stage < 4) {
        this.draw();
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.explosionImageArray[this.stage], this.position.x, this.position.y, 100, 100);
    }
  }]);

  return Explosion;
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
/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explosion */ "./src/scripts/explosion.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
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
    this.explosionArray = [];
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
        //first, move the meteor
        if (meteor.position.y >= _this.screenHeight) {
          _this.meteorArray.splice(_this.meteorArray.indexOf(meteor), 1);
        } else {
          meteor.updatePosition(levelMultiplier, elapsedFrameTime / 100);
        } //check pos of meteor against explosions, and ground 


        _this.explosionArray.forEach(function (explosion) {
          var distance = Object(_util__WEBPACK_IMPORTED_MODULE_5__["calculateDistance"])(explosion.position, meteor.position); // if meteor in radius, destroy it and create explosion

          if (distance <= explosion.explosionRadius + meteor.radius) {
            _this.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_4__["default"](_this.ctx, meteor.position));

            _this.meteorArray.splice(_this.meteorArray.indexOf(meteor), 1);
          }
        });
      });
      this.missileArray.forEach(function (missile) {
        //check for explosion
        if (missile.checkExplosion()) {
          _this.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_4__["default"](_this.ctx, missile.position));

          _this.missileArray.splice(_this.missileArray.indexOf(missile), 1);
        } else {
          missile.updatePosition(elapsedFrameTime / 100);
        }
      });
      this.explosionArray.forEach(function (explosion) {
        if (explosion.stage >= 4) {
          _this.explosionArray.splice(_this.explosionArray.indexOf(explosion), 1);
        } else {
          explosion.updateExplosion(elapsedFrameTime);
        }
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
    };
    this.speed = 10;
    this.radius = 5;
    this.explosionRadius = 3;
    this.ctx = ctx;
    this.missileImage = document.getElementById("yellow-missile");
    this.draw = this.draw.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);
    this.checkExplosion = this.checkExplosion.bind(this);
  }

  _createClass(Missile, [{
    key: "checkExplosion",
    value: function checkExplosion() {
      var distance = this.calculateDistance();
      if (distance <= this.explosionRadius) return true;
      return false;
    }
  }, {
    key: "calculateDistance",
    value: function calculateDistance() {
      var xDist = Math.abs(this.position.x - this.destination.x);
      var yDist = Math.abs(this.position.y - this.destination.y);
      return Math.sqrt(xDist * xDist + yDist * yDist);
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(dt) {
      this.position.x += this.course.x / this.speed * dt;
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

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/*! exports provided: calculateDistance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDistance", function() { return calculateDistance; });
var calculateDistance = function calculateDistance(pos1, pos2) {
  //debugger;
  var xDist = Math.abs(pos1.x - pos2.x);
  var yDist = Math.abs(pos1.y - pos2.y);
  return Math.sqrt(xDist * xDist + yDist * yDist);
}; // calculateDistance(){
//   let xDist = Math.abs(this.position.x - this.destination.x);
//   let yDist = Math.abs(this.position.y - this.destination.y);
//   return Math.sqrt((xDist * xDist) + (yDist * yDist));
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2V4cGxvc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ldGVvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9taXNzaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3Rlc3RvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQXBwIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlNDUkVFTl9XSURUSCIsIlNDUkVFTl9IRUlHSFQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWUiLCJHYW1lIiwiaGFuZGxlQ2xpY2siLCJydW5HYW1lIiwiQmFzZSIsInBvc2l0aW9uIiwiYmFzZUltYWdlIiwieCIsInkiLCJkcmF3IiwiYmluZCIsImRyYXdJbWFnZSIsIkV4cGxvc2lvbiIsInRpbWVyIiwiZXhwbG9zaW9uSW1hZ2VBcnJheSIsImltYWdlVG9EcmF3Iiwic3RhZ2UiLCJleHBsb3Npb25SYWRpdXMiLCJ1cGRhdGVFeHBsb3Npb24iLCJkdCIsImNvbnRleHQiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5XaWR0aCIsIm1ldGVvckFycmF5IiwiYmFzZUFycmF5IiwibWlzc2lsZUFycmF5IiwiZXhwbG9zaW9uQXJyYXkiLCJtaXNzaWxlQ291bnQiLCJsYXN0VGltZSIsImxldmVsIiwiYmFja2dyb3VuZCIsImdhbWVMb29wIiwiYnVpbGROZXdNZXRlb3JzIiwiZSIsImNsb3Nlc3RCYXNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJvZmZzZXRYIiwiaSIsImxlbmd0aCIsImRlc3RpbmF0aW9uIiwib2Zmc2V0WSIsInB1c2giLCJNaXNzaWxlIiwic3RhcnRpbmdNZXRlb3JzIiwic3RhcnRpbmdCYXNlcyIsInBvc1giLCJmbG9vciIsInJhbmRvbSIsIk1ldGVvciIsImJhc2VQb3NpdGlvbiIsInRpbWVzdGFtcCIsImVsYXBzZWRGcmFtZVRpbWUiLCJsZXZlbE11bHRpcGxpZXIiLCJmb3JFYWNoIiwibWV0ZW9yIiwic3BsaWNlIiwiaW5kZXhPZiIsInVwZGF0ZVBvc2l0aW9uIiwiZXhwbG9zaW9uIiwiZGlzdGFuY2UiLCJjYWxjdWxhdGVEaXN0YW5jZSIsInJhZGl1cyIsIm1pc3NpbGUiLCJjaGVja0V4cGxvc2lvbiIsImJhc2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzcGVlZCIsInNldFNwZWVkIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwidGhyb3R0bGVyIiwiZGVsdGFUaW1lIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsIiwiY291cnNlIiwibWlzc2lsZUltYWdlIiwieERpc3QiLCJ5RGlzdCIsInNxcnQiLCJwb3MxIiwicG9zMiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDcUIsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQy9DO0FBQ0EsTUFBSUosS0FBSyxHQUFHNUMsSUFBSSxDQUFDQyxHQUFMLENBQVM4QyxJQUFJLENBQUM1RSxDQUFMLEdBQVM2RSxJQUFJLENBQUM3RSxDQUF2QixDQUFaO0FBQ0EsTUFBSTBFLEtBQUssR0FBRzdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTOEMsSUFBSSxDQUFDM0UsQ0FBTCxHQUFTNEUsSUFBSSxDQUFDNUUsQ0FBdkIsQ0FBWjtBQUNBLFNBQU80QixJQUFJLENBQUM4QyxJQUFMLENBQVdGLEtBQUssR0FBR0EsS0FBVCxHQUFtQkMsS0FBSyxHQUFHQSxLQUFyQyxDQUFQO0FBQ0QsQ0FMTSxDLENBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ1hBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmNvbnN0IEFwcCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYXBwLmpzXCIpO1xuLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpOyAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIFxuICBjb25zdCBTQ1JFRU5fV0lEVEggPSAxMjAwO1xuICBjb25zdCBTQ1JFRU5fSEVJR0hUID0gODAwO1xuICBjdHguY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIO1xuICBjdHguY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQ7XG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgsIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5oYW5kbGVDbGljaywgZmFsc2UpO1xuICBnYW1lLnJ1bkdhbWUoKTtcbn0pOyIsIi8vIGZ1bmN0aW9uIEFwcCgpe1xuLy8gICBjb25zb2xlLmxvZyhcImFwcGVkXCIpO1xuLy8gfVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNle1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZS1pbWFnZVwiKTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgIHk6IHBvc2l0aW9uLnlcbiAgICB9O1xuICAgIC8vZGVidWdnZXI7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBkcmF3KCl7XG4gICAgLy9kZWJ1Z2dlcjtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmJhc2VJbWFnZSwgXG4gICAgICB0aGlzLnBvc2l0aW9uLngsIFxuICAgICAgdGhpcy5wb3NpdGlvbi55XG4gICAgICApO1xuICB9XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvc2lvbntcbiAgY29uc3RydWN0b3IoY3R4LCBwb3NpdGlvbil7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngtNTAsXG4gICAgICB5OiBwb3NpdGlvbi55LTUwXG4gICAgfTsgLy81MCBpcyBtYWdpYyBudW1iZXIgY2VudGVyXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy50aW1lciA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5ID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTFcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0yXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tM1wiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTRcIildO1xuICAgIHRoaXMuaW1hZ2VUb0RyYXcgPSB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXlbMF07XG4gICAgdGhpcy5zdGFnZSA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSA3NTsgXG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUV4cGxvc2lvbiA9IHRoaXMudXBkYXRlRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVFeHBsb3Npb24oZHQpe1xuICAgIC8vZGVidWdnZXI7XG4gICAgdGhpcy50aW1lcis9ZHQvMTAwMDtcbiAgICBpZiAodGhpcy50aW1lciA+PSAwLjgpe1xuICAgICAgdGhpcy5zdGFnZSsrO1xuICAgICAgdGhpcy50aW1lciA9MDtcbiAgICB9ICAgIFxuICAgIGlmICh0aGlzLnN0YWdlIDwgNCl7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5W3RoaXMuc3RhZ2VdLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgMTAwLCAxMDBcbiAgICApO1xuICB9XG59IiwiaW1wb3J0IFRlc3RPYmplY3QgZnJvbSBcIi4vdGVzdG9iamVjdFwiO1xuaW1wb3J0IE1ldGVvciBmcm9tIFwiLi9tZXRlb3JcIjtcbmltcG9ydCBNaXNzaWxlIGZyb20gXCIuL21pc3NpbGVcIjtcbmltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCBFeHBsb3Npb24gZnJvbSBcIi4vZXhwbG9zaW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVEaXN0YW5jZSB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgd2lkdGgsIGhlaWdodCl7XG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xuICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuc2NyZWVuV2lkdGggPSB3aWR0aDsgXG5cbiAgICB0aGlzLm1ldGVvckFycmF5ID0gW107XG4gICAgdGhpcy5iYXNlQXJyYXkgPSBbXTtcbiAgICB0aGlzLm1pc3NpbGVBcnJheSA9IFtdO1xuICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkgPSBbXTtcblxuICAgIHRoaXMubWlzc2lsZUNvdW50ID0gMTA7XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDsgLy91c2VkIHRvIGdlbmVyYXRlIG5ldyBtZXRlb3JzIGF0IGludGVydmFsc1xuICAgIHRoaXMubGV2ZWwgPSAxOyAvL2NvbnRyb2xzIGRpZmZpY3VsdHkgYW5kIHBhY2Ugb2YgZ2FtZVxuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcblxuICAgIHRoaXMuZ2FtZUxvb3AgPSB0aGlzLmdhbWVMb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ydW5HYW1lID0gdGhpcy5ydW5HYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycyA9IHRoaXMuYnVpbGROZXdNZXRlb3JzLmJpbmQodGhpcyk7ICBcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpeyBcbiAgICBcbiAgICAvL2NoZWNrIGZvciBtaXNzaWxlIGNvdW50XG4gICAgLy9maW5kIGNsb3Nlc3QgYmFzZSB0byBjbGlja1xuICAgIC8vc3Bhd24gbWlzc2lsZSBhdCBiYXNlIGhlYWRpbmcgdG93YXJkcyBjbGljayAgICBcbiAgICBcbiAgICBpZiAodGhpcy5taXNzaWxlQ291bnQgPiAwKXtcblxuICAgICAgbGV0IGNsb3Nlc3RCYXNlID0gdGhpcy5iYXNlQXJyYXlbMF07XG4gICAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnBvc2l0aW9uLngpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJhc2VBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoTWF0aC5hYnMoZS5vZmZzZXRYIC0gdGhpcy5iYXNlQXJyYXlbaV0ucG9zaXRpb24ueCkgPCBkaWZmZXJlbmNlKSB7XG4gICAgICAgICAgY2xvc2VzdEJhc2UgPSB0aGlzLmJhc2VBcnJheVtpXTtcbiAgICAgICAgICBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UucG9zaXRpb24ueCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBkZXN0aW5hdGlvbiA9IHtcbiAgICAgICAgeDogZS5vZmZzZXRYLFxuICAgICAgICB5OiBlLm9mZnNldFlcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LnB1c2gobmV3IE1pc3NpbGUoZGVzdGluYXRpb24sIChjbG9zZXN0QmFzZS5wb3NpdGlvbiksIHRoaXMuY3R4KSk7XG4gICAgfSAgICAgXG4gIH1cblxuICBydW5HYW1lKCl7XG4gICAgLy9pbml0aWFsIHNldHVwIGxvZ2ljXG4gICAgLy90aGVuLCBzdGFydCBnYW1lTG9vcFxuICAgIGxldCBzdGFydGluZ01ldGVvcnMgPSAxMDtcbiAgICBsZXQgc3RhcnRpbmdCYXNlcyA9IDM7XG4gICAgLy9zZXR1cCBtZXRlb3JzID8/P21lcmdlIHdpdGggYnVpbGRNZXRlb3JzPz8/P1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRpbmdNZXRlb3JzOyBpKyspe1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIC8vc2V0dXAgYmFzZXNcbiAgICBsZXQgYmFzZVBvc2l0aW9uID0ge1xuICAgICAgeDogMTUwLFxuICAgICAgeTogdGhpcy5zY3JlZW5IZWlnaHQgLSAxMDBcbiAgICB9O1xuICAgIFxuICAgIGZvciAobGV0IGkgPTA7IGkgPCBzdGFydGluZ0Jhc2VzOyBpKyspeyAgICAgIFxuICAgICAgdGhpcy5iYXNlQXJyYXkucHVzaChuZXcgQmFzZSh0aGlzLmN0eCwgYmFzZVBvc2l0aW9uKSk7ICAgICAgXG4gICAgICBiYXNlUG9zaXRpb24ueCArPSB0aGlzLnNjcmVlbldpZHRoLzM7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUxvb3AoMCk7XG4gIH1cblxuICBnYW1lTG9vcCh0aW1lc3RhbXApeyAgICBcbiAgICAvL3doaWxlIG5vdCBsb3N0XG5cbiAgICAgIC8vdXBkYXRlIG1ldGVvcmFycmF5XG4gICAgICAvL3JlZHJhdyBtZXRlb3JzXG4gICAgICAvL2xpc3RlbiBmb3IgY2xpY2tzXG4gICAgICAvL3JlcGVhdFxuXG4gICAgLy9cbiAgICBsZXQgZWxhcHNlZEZyYW1lVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICB0aGlzLnRpbWVyKz1lbGFwc2VkRnJhbWVUaW1lLzEwMDA7ICAgIFxuXG4gICAgY29uc3QgbGV2ZWxNdWx0aXBsaWVyID0gMS4wOyAgXG5cbiAgICBpZiAodGhpcy50aW1lciA+PSAzLjApe1xuICAgICAgdGhpcy5idWlsZE5ld01ldGVvcnMoKTtcbiAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH0gICBcblxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwKTtcblxuICAgIHRoaXMubWV0ZW9yQXJyYXkuZm9yRWFjaChtZXRlb3IgPT57XG4gICAgICAvL2ZpcnN0LCBtb3ZlIHRoZSBtZXRlb3JcbiAgICAgIGlmIChtZXRlb3IucG9zaXRpb24ueSA+PSB0aGlzLnNjcmVlbkhlaWdodCl7XG4gICAgICAgIHRoaXMubWV0ZW9yQXJyYXkuc3BsaWNlKHRoaXMubWV0ZW9yQXJyYXkuaW5kZXhPZihtZXRlb3IpLDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0ZW9yLnVwZGF0ZVBvc2l0aW9uKGxldmVsTXVsdGlwbGllciwgZWxhcHNlZEZyYW1lVGltZSAvIDEwMCk7ICBcbiAgICAgIH0gICBcbiAgICAgIC8vY2hlY2sgcG9zIG9mIG1ldGVvciBhZ2FpbnN0IGV4cGxvc2lvbnMsIGFuZCBncm91bmQgXG4gICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoZXhwbG9zaW9uLnBvc2l0aW9uLCBtZXRlb3IucG9zaXRpb24pO1xuICAgICAgICAvLyBpZiBtZXRlb3IgaW4gcmFkaXVzLCBkZXN0cm95IGl0IGFuZCBjcmVhdGUgZXhwbG9zaW9uXG4gICAgICAgIGlmIChkaXN0YW5jZSA8PSBleHBsb3Npb24uZXhwbG9zaW9uUmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBtZXRlb3IucG9zaXRpb24pKTtcbiAgICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pOyAgICAgICAgXG4gICAgfSk7ICBcblxuICAgIHRoaXMubWlzc2lsZUFycmF5LmZvckVhY2gobWlzc2lsZSA9PiB7XG4gICAgICAvL2NoZWNrIGZvciBleHBsb3Npb25cbiAgICAgIGlmIChtaXNzaWxlLmNoZWNrRXhwbG9zaW9uKCkpeyAgICAgICAgXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBtaXNzaWxlLnBvc2l0aW9uKSk7XG4gICAgICAgIHRoaXMubWlzc2lsZUFycmF5LnNwbGljZSh0aGlzLm1pc3NpbGVBcnJheS5pbmRleE9mKG1pc3NpbGUpLDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWlzc2lsZS51cGRhdGVQb3NpdGlvbihlbGFwc2VkRnJhbWVUaW1lIC8gMTAwKTtcbiAgICAgIH0gICAgICBcbiAgICB9KTtcblxuICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuZm9yRWFjaChleHBsb3Npb24gPT4ge1xuICAgICAgaWYgKGV4cGxvc2lvbi5zdGFnZSA+PSA0KXtcbiAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5zcGxpY2UodGhpcy5leHBsb3Npb25BcnJheS5pbmRleE9mKGV4cGxvc2lvbiksMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleHBsb3Npb24udXBkYXRlRXhwbG9zaW9uKGVsYXBzZWRGcmFtZVRpbWUpO1xuICAgICAgfSAgICAgIFxuICAgIH0pO1xuXG5cbiAgICB0aGlzLmJhc2VBcnJheS5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgYmFzZS5kcmF3KCk7XG4gICAgfSk7XG4gICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApOyAgICBcbiAgfVxuXG4gIGJ1aWxkTmV3TWV0ZW9ycygpIHtcbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmxldmVsICogMjsgaSsrKXtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGVvcntcbiAgY29uc3RydWN0b3IocG9zWCwgY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IC0xMFxuICAgIH07XG4gICAgdGhpcy5zcGVlZCA9IDcgKiB0aGlzLnNldFNwZWVkKCk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldFNwZWVkKCl7XG4gICAgLy9oZWxwcyBzZXQgYW4gaW50aWFsIHJhbmRvbSByYW5nZSBvZiBzcGVlZHNcbiAgICBsZXQgdGhyb3R0bGVyID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAodGhyb3R0bGVyIDw9IDAuMjUpIHJldHVybiAwLjc1O1xuICAgIGlmICh0aHJvdHRsZXIgPj0gMC43NSkgcmV0dXJuIDEuMjU7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBzZXREaXJlY3Rpb24oKXtcbiAgICAvL3NldCBSYW5kb20geCBkaXJlY3Rpb25cbiAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHggPiAwLjUpIHggKj0gLTE7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbihsZXZlbE11bHRpcGxpZXIsIGRlbHRhVGltZSl7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuZGlyZWN0aW9uO1xuICAgIHRoaXMucG9zaXRpb24ueSArPSAobGV2ZWxNdWx0aXBsaWVyICogdGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7ICAgIFxuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7ICAgIFxuICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaWxle1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbiwgcG9zaXRpb24sIGN0eCl7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54ICsgMTAsXG4gICAgICB5OiBwb3NpdGlvbi55IC0gMTBcbiAgICB9O1xuXG4gICAgdGhpcy5jb3Vyc2UgPSB7XG4gICAgICB4OiAodGhpcy5kZXN0aW5hdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSxcbiAgICAgIHk6ICh0aGlzLmRlc3RpbmF0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkpXG4gICAgfTtcbiAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gMztcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMubWlzc2lsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWxsb3ctbWlzc2lsZVwiKTsgICAgXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tFeHBsb3Npb24gPSB0aGlzLmNoZWNrRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBjaGVja0V4cGxvc2lvbigpe1xuICAgIGxldCBkaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoKTsgICAgXG4gICAgaWYgKGRpc3RhbmNlIDw9IHRoaXMuZXhwbG9zaW9uUmFkaXVzKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuICAgIGxldCB4RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuZGVzdGluYXRpb24ueCk7XG4gICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gdGhpcy5kZXN0aW5hdGlvbi55KTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCp4RGlzdCkgKyAoeURpc3QqeURpc3QpKTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGR0KXtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gKHRoaXMuY291cnNlLnggLyB0aGlzLnNwZWVkKSAqIGR0OyAgICBcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKHRoaXMuY291cnNlLnkgLyB0aGlzLnNwZWVkKSAqIGR0O1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpe1xuICAgIC8vbWV0ZW9ycyBhcmUgY2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMgaW4gR2FtZS5qc1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMubWlzc2lsZUltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55XG4gICAgKTtcbiAgfVxufSIsIi8vIGNsYXNzIFRlc3RPYmplY3R7XG4vLyAgIGNvbnN0cnVjdG9yKHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQpe1xuLy8gICAgIHRoaXMud2lkdGggPSAxNTA7XG4vLyAgICAgdGhpcy5oZWlnaHQgPSAzMDtcblxuLy8gICAgIHRoaXMucG9zaXRpb24gPSB7XG4vLyAgICAgICB4OiBzY3JlZW5XaWR0aC8yIC0gdGhpcy53aWR0aC8yLFxuLy8gICAgICAgeTogc2NyZWVuSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAxMFxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICBkcmF3KGN0eCl7XG4vLyAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4vLyAgIH1cblxuLy8gICB1cGRhdGUoZGVsdGFUaW1lKVxuLy8gICB7XG4gICAgXG4vLyAgICAgaWYoIWRlbHRhVGltZSkgcmV0dXJuO1xuLy8gICAgIGNvbnNvbGUubG9nKGRlbHRhVGltZSk7XG4vLyAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDUgLyBkZWx0YVRpbWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgVGVzdE9iamVjdDtcblxuLy8gbGV0IGEgPSBbMSwyLDNdO1xuLy8gYS5mb3JFYWNoKGVsID0+IHtcbi8vICAgaWYgKGVsID09PSAyKXtcbi8vICAgICBhLnNwbGljZShhLmluZGV4T2YoZWwpLDEpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKGVsKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKGEpO1xuXG4vLyBjbGFzcyBUZXN0e1xuLy8gICBjb25zdHJ1Y3Rvcigpe1xuLy8gICAgIHRoaXMudmFyaWFibGUgPSAxO1xuLy8gICB9XG5cbi8vICAgYnVpbGRPYmooKXtcbi8vICAgICByZXR1cm4gbmV3IFRlc3QoKTtcbi8vICAgfVxuLy8gfVxuXG4vLyAvLyBsZXQgdGVzdCA9IFRlc3QuYnVpbGRPYmooKTtcbi8vIC8vIGxldCB0ZXN0ID0gbmV3IFRlc3QoKTtcbi8vIC8vIGxldCBvdGhlclRlc3QgPSB0ZXN0LmJ1aWxkT2JqKCk7XG4vLyBsZXQgb3RoZXJUZXN0ID0gbmV3IFRlc3QoKS5idWlsZE9iaigpO1xuLy8gY29uc29sZS5sb2cob3RoZXJUZXN0LnZhcmlhYmxlKTsiLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlRGlzdGFuY2UgPSAocG9zMSwgcG9zMikgPT4ge1xuICAvL2RlYnVnZ2VyO1xuICBsZXQgeERpc3QgPSBNYXRoLmFicyhwb3MxLnggLSBwb3MyLngpO1xuICBsZXQgeURpc3QgPSBNYXRoLmFicyhwb3MxLnkgLSBwb3MyLnkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG59O1xuXG4vLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuLy8gICBsZXQgeURpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmRlc3RpbmF0aW9uLnkpO1xuLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG4vLyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==