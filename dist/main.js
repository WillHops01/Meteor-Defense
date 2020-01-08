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
      x: position.x,
      y: position.y
    };
    this.ctx = ctx;
    this.explosionImage = document.getElementById("explosion-1");
    this.draw = this.draw.bind(this);
  }

  _createClass(Explosion, [{
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.explosionImage, this.position.x, this.position.y);
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
        //check pos of meteor against explosions, and ground 
        // this.missileArray.forEach(missile => {
        //   let distance = missile.calculateDistance(meteor.position);
        //   let radiiDifference = missile.radius/2 + meteor.radius/2;
        //   if (distance - radiiDifference <= 3){
        //     console.log("hit");
        //   }
        // });
        if (meteor.position.y >= _this.screenHeight) {
          _this.meteorArray.splice(_this.meteorArray.indexOf(meteor), 1);
        } else {
          meteor.updatePosition(levelMultiplier, elapsedFrameTime / 100);
        }
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
        explosion.draw();
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

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2V4cGxvc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ldGVvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9taXNzaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3Rlc3RvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIkFwcCIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJTQ1JFRU5fV0lEVEgiLCJTQ1JFRU5fSEVJR0hUIiwid2lkdGgiLCJoZWlnaHQiLCJnYW1lIiwiR2FtZSIsImhhbmRsZUNsaWNrIiwicnVuR2FtZSIsIkJhc2UiLCJwb3NpdGlvbiIsImJhc2VJbWFnZSIsIngiLCJ5IiwiZHJhdyIsImJpbmQiLCJkcmF3SW1hZ2UiLCJFeHBsb3Npb24iLCJleHBsb3Npb25JbWFnZSIsImNvbnRleHQiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5XaWR0aCIsIm1ldGVvckFycmF5IiwiYmFzZUFycmF5IiwibWlzc2lsZUFycmF5IiwiZXhwbG9zaW9uQXJyYXkiLCJtaXNzaWxlQ291bnQiLCJsYXN0VGltZSIsInRpbWVyIiwibGV2ZWwiLCJiYWNrZ3JvdW5kIiwiZ2FtZUxvb3AiLCJidWlsZE5ld01ldGVvcnMiLCJlIiwiY2xvc2VzdEJhc2UiLCJkaWZmZXJlbmNlIiwiTWF0aCIsImFicyIsIm9mZnNldFgiLCJpIiwibGVuZ3RoIiwiZGVzdGluYXRpb24iLCJvZmZzZXRZIiwicHVzaCIsIk1pc3NpbGUiLCJzdGFydGluZ01ldGVvcnMiLCJzdGFydGluZ0Jhc2VzIiwicG9zWCIsImZsb29yIiwicmFuZG9tIiwiTWV0ZW9yIiwiYmFzZVBvc2l0aW9uIiwidGltZXN0YW1wIiwiZWxhcHNlZEZyYW1lVGltZSIsImxldmVsTXVsdGlwbGllciIsImZvckVhY2giLCJtZXRlb3IiLCJzcGxpY2UiLCJpbmRleE9mIiwidXBkYXRlUG9zaXRpb24iLCJtaXNzaWxlIiwiY2hlY2tFeHBsb3Npb24iLCJleHBsb3Npb24iLCJiYXNlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3BlZWQiLCJzZXRTcGVlZCIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsInJhZGl1cyIsInRocm90dGxlciIsImRlbHRhVGltZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbCIsImNvdXJzZSIsImV4cGxvc2lvblJhZGl1cyIsIm1pc3NpbGVJbWFnZSIsImNhbGN1bGF0ZURpc3RhbmNlIiwiZGlzdGFuY2UiLCJ4RGlzdCIsInlEaXN0Iiwic3FydCIsImR0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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Q0FBWS9ELENBQVosR0FBZ0IsS0FBS29ELEtBQXRCLEdBQStCbUIsRUFBbEQ7QUFDQSxXQUFLdEUsSUFBTDtBQUNEOzs7MkJBRUs7QUFDSjtBQUNBLFdBQUtmLEdBQUwsQ0FBU2lCLFNBQVQsQ0FDRSxLQUFLOEQsWUFEUCxFQUVFLEtBQUtwRSxRQUFMLENBQWNFLENBRmhCLEVBR0UsS0FBS0YsUUFBTCxDQUFjRyxDQUhoQjtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pESDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7O0FDbkRBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmNvbnN0IEFwcCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYXBwLmpzXCIpO1xuLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpOyAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIFxuICBjb25zdCBTQ1JFRU5fV0lEVEggPSAxMjAwO1xuICBjb25zdCBTQ1JFRU5fSEVJR0hUID0gODAwO1xuICBjdHguY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIO1xuICBjdHguY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQ7XG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgsIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5oYW5kbGVDbGljaywgZmFsc2UpO1xuICBnYW1lLnJ1bkdhbWUoKTtcbn0pOyIsIi8vIGZ1bmN0aW9uIEFwcCgpe1xuLy8gICBjb25zb2xlLmxvZyhcImFwcGVkXCIpO1xuLy8gfVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNle1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZS1pbWFnZVwiKTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgIHk6IHBvc2l0aW9uLnlcbiAgICB9O1xuICAgIC8vZGVidWdnZXI7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBkcmF3KCl7XG4gICAgLy9kZWJ1Z2dlcjtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmJhc2VJbWFnZSwgXG4gICAgICB0aGlzLnBvc2l0aW9uLngsIFxuICAgICAgdGhpcy5wb3NpdGlvbi55XG4gICAgICApO1xuICB9XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvc2lvbntcbiAgY29uc3RydWN0b3IoY3R4LCBwb3NpdGlvbil7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICB5OiBwb3NpdGlvbi55XG4gICAgfTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmV4cGxvc2lvbkltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tMVwiKTtcblxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuZXhwbG9zaW9uSW1hZ2UsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnlcbiAgICApO1xuICB9XG59IiwiaW1wb3J0IFRlc3RPYmplY3QgZnJvbSBcIi4vdGVzdG9iamVjdFwiO1xuaW1wb3J0IE1ldGVvciBmcm9tIFwiLi9tZXRlb3JcIjtcbmltcG9ydCBNaXNzaWxlIGZyb20gXCIuL21pc3NpbGVcIjtcbmltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCBFeHBsb3Npb24gZnJvbSBcIi4vZXhwbG9zaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpe1xuICAgIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gd2lkdGg7IFxuXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5taXNzaWxlQXJyYXkgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5ID0gW107XG5cbiAgICB0aGlzLm1pc3NpbGVDb3VudCA9IDEwO1xuXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMTsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG5cbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucnVuR2FtZSA9IHRoaXMucnVuR2FtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5idWlsZE5ld01ldGVvcnMgPSB0aGlzLmJ1aWxkTmV3TWV0ZW9ycy5iaW5kKHRoaXMpOyAgXG4gIH1cblxuICBoYW5kbGVDbGljayhlKXsgXG4gICAgXG4gICAgLy9jaGVjayBmb3IgbWlzc2lsZSBjb3VudFxuICAgIC8vZmluZCBjbG9zZXN0IGJhc2UgdG8gY2xpY2tcbiAgICAvL3NwYXduIG1pc3NpbGUgYXQgYmFzZSBoZWFkaW5nIHRvd2FyZHMgY2xpY2sgICAgXG4gICAgXG4gICAgaWYgKHRoaXMubWlzc2lsZUNvdW50ID4gMCl7XG5cbiAgICAgIGxldCBjbG9zZXN0QmFzZSA9IHRoaXMuYmFzZUFycmF5WzBdO1xuICAgICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5iYXNlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGUub2Zmc2V0WCAtIHRoaXMuYmFzZUFycmF5W2ldLnBvc2l0aW9uLngpIDwgZGlmZmVyZW5jZSkge1xuICAgICAgICAgIGNsb3Nlc3RCYXNlID0gdGhpcy5iYXNlQXJyYXlbaV07XG4gICAgICAgICAgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnBvc2l0aW9uLngpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZGVzdGluYXRpb24gPSB7XG4gICAgICAgIHg6IGUub2Zmc2V0WCxcbiAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICB9O1xuICAgICAgXG4gICAgICB0aGlzLm1pc3NpbGVBcnJheS5wdXNoKG5ldyBNaXNzaWxlKGRlc3RpbmF0aW9uLCAoY2xvc2VzdEJhc2UucG9zaXRpb24pLCB0aGlzLmN0eCkpO1xuICAgIH0gICAgIFxuICB9XG5cbiAgcnVuR2FtZSgpe1xuICAgIC8vaW5pdGlhbCBzZXR1cCBsb2dpY1xuICAgIC8vdGhlbiwgc3RhcnQgZ2FtZUxvb3BcbiAgICBsZXQgc3RhcnRpbmdNZXRlb3JzID0gMTA7XG4gICAgbGV0IHN0YXJ0aW5nQmFzZXMgPSAzO1xuICAgIC8vc2V0dXAgbWV0ZW9ycyA/Pz9tZXJnZSB3aXRoIGJ1aWxkTWV0ZW9ycz8/Pz9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0aW5nTWV0ZW9yczsgaSsrKXtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgICAvL3NldHVwIGJhc2VzXG4gICAgbGV0IGJhc2VQb3NpdGlvbiA9IHtcbiAgICAgIHg6IDE1MCxcbiAgICAgIHk6IHRoaXMuc2NyZWVuSGVpZ2h0IC0gMTAwXG4gICAgfTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0wOyBpIDwgc3RhcnRpbmdCYXNlczsgaSsrKXsgICAgICBcbiAgICAgIHRoaXMuYmFzZUFycmF5LnB1c2gobmV3IEJhc2UodGhpcy5jdHgsIGJhc2VQb3NpdGlvbikpOyAgICAgIFxuICAgICAgYmFzZVBvc2l0aW9uLnggKz0gdGhpcy5zY3JlZW5XaWR0aC8zO1xuICAgIH1cbiAgICB0aGlzLmdhbWVMb29wKDApO1xuICB9XG5cbiAgZ2FtZUxvb3AodGltZXN0YW1wKXsgICAgXG4gICAgLy93aGlsZSBub3QgbG9zdFxuXG4gICAgICAvL3VwZGF0ZSBtZXRlb3JhcnJheVxuICAgICAgLy9yZWRyYXcgbWV0ZW9yc1xuICAgICAgLy9saXN0ZW4gZm9yIGNsaWNrc1xuICAgICAgLy9yZXBlYXRcblxuICAgIC8vXG4gICAgbGV0IGVsYXBzZWRGcmFtZVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgdGhpcy50aW1lcis9ZWxhcHNlZEZyYW1lVGltZS8xMDAwOyAgICBcblxuICAgIGNvbnN0IGxldmVsTXVsdGlwbGllciA9IDEuMDsgIFxuXG4gICAgaWYgKHRoaXMudGltZXIgPj0gMy4wKXtcbiAgICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzKCk7XG4gICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9ICAgXG5cbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCk7XG5cbiAgICB0aGlzLm1ldGVvckFycmF5LmZvckVhY2gobWV0ZW9yID0+e1xuICAgICAgLy9jaGVjayBwb3Mgb2YgbWV0ZW9yIGFnYWluc3QgZXhwbG9zaW9ucywgYW5kIGdyb3VuZCBcblxuICAgICAgLy8gdGhpcy5taXNzaWxlQXJyYXkuZm9yRWFjaChtaXNzaWxlID0+IHtcbiAgICAgIC8vICAgbGV0IGRpc3RhbmNlID0gbWlzc2lsZS5jYWxjdWxhdGVEaXN0YW5jZShtZXRlb3IucG9zaXRpb24pO1xuICAgICAgLy8gICBsZXQgcmFkaWlEaWZmZXJlbmNlID0gbWlzc2lsZS5yYWRpdXMvMiArIG1ldGVvci5yYWRpdXMvMjtcbiAgICAgIC8vICAgaWYgKGRpc3RhbmNlIC0gcmFkaWlEaWZmZXJlbmNlIDw9IDMpe1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiaGl0XCIpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9KTtcbiAgICAgIFxuICAgICAgaWYgKG1ldGVvci5wb3NpdGlvbi55ID49IHRoaXMuc2NyZWVuSGVpZ2h0KXtcbiAgICAgICAgdGhpcy5tZXRlb3JBcnJheS5zcGxpY2UodGhpcy5tZXRlb3JBcnJheS5pbmRleE9mKG1ldGVvciksMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXRlb3IudXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBlbGFwc2VkRnJhbWVUaW1lIC8gMTAwKTsgIFxuICAgICAgfSAgICAgICAgICAgXG4gICAgfSk7ICBcblxuICAgIHRoaXMubWlzc2lsZUFycmF5LmZvckVhY2gobWlzc2lsZSA9PiB7XG4gICAgICAvL2NoZWNrIGZvciBleHBsb3Npb25cbiAgICAgIGlmIChtaXNzaWxlLmNoZWNrRXhwbG9zaW9uKCkpeyAgICAgICAgXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBtaXNzaWxlLnBvc2l0aW9uKSk7XG4gICAgICAgIHRoaXMubWlzc2lsZUFycmF5LnNwbGljZSh0aGlzLm1pc3NpbGVBcnJheS5pbmRleE9mKG1pc3NpbGUpLDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWlzc2lsZS51cGRhdGVQb3NpdGlvbihlbGFwc2VkRnJhbWVUaW1lIC8gMTAwKTtcbiAgICAgIH0gICAgICBcbiAgICB9KTtcblxuICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuZm9yRWFjaChleHBsb3Npb24gPT4ge1xuICAgICAgZXhwbG9zaW9uLmRyYXcoKTtcbiAgICB9KTtcblxuXG4gICAgdGhpcy5iYXNlQXJyYXkuZm9yRWFjaChiYXNlID0+IHtcbiAgICAgIGJhc2UuZHJhdygpO1xuICAgIH0pO1xuICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTsgICAgXG4gIH1cblxuICBidWlsZE5ld01ldGVvcnMoKSB7XG4gICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5sZXZlbCAqIDI7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRlb3J7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiAtMTBcbiAgICB9O1xuICAgIHRoaXMuc3BlZWQgPSA3ICogdGhpcy5zZXRTcGVlZCgpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICB0aGlzLnJhZGl1cyA9IDEwO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTcGVlZCgpe1xuICAgIC8vaGVscHMgc2V0IGFuIGludGlhbCByYW5kb20gcmFuZ2Ugb2Ygc3BlZWRzXG4gICAgbGV0IHRocm90dGxlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHRocm90dGxlciA8PSAwLjI1KSByZXR1cm4gMC43NTtcbiAgICBpZiAodGhyb3R0bGVyID49IDAuNzUpIHJldHVybiAxLjI1O1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKCl7XG4gICAgLy9zZXQgUmFuZG9tIHggZGlyZWN0aW9uXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh4ID4gMC41KSB4ICo9IC0xO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBkZWx0YVRpbWUpe1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLmRpcmVjdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKGxldmVsTXVsdGlwbGllciAqIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpOyAgICBcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG5cbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyAgICBcbiAgICB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lsZXtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24sIHBvc2l0aW9uLCBjdHgpe1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCArIDEwLFxuICAgICAgeTogcG9zaXRpb24ueSAtIDEwXG4gICAgfTtcblxuICAgIHRoaXMuY291cnNlID0ge1xuICAgICAgeDogKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCksXG4gICAgICB5OiAodGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55KVxuICAgIH07XG4gICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IDM7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLm1pc3NpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVsbG93LW1pc3NpbGVcIik7ICAgIFxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjdWxhdGVEaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrRXhwbG9zaW9uID0gdGhpcy5jaGVja0V4cGxvc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2hlY2tFeHBsb3Npb24oKXtcbiAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKCk7ICAgIFxuICAgIGlmIChkaXN0YW5jZSA8PSB0aGlzLmV4cGxvc2lvblJhZGl1cykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2FsY3VsYXRlRGlzdGFuY2UoKXtcbiAgICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuICAgIGxldCB5RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuZGVzdGluYXRpb24ueSk7XG4gICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QqeERpc3QpICsgKHlEaXN0KnlEaXN0KSk7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbihkdCl7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9ICh0aGlzLmNvdXJzZS54IC8gdGhpcy5zcGVlZCkgKiBkdDsgICAgXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLmNvdXJzZS55IC8gdGhpcy5zcGVlZCkgKiBkdDtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICAvL21ldGVvcnMgYXJlIGNoZWNraW5nIGZvciBjb2xsaXNpb25zIGluIEdhbWUuanNcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1pc3NpbGVJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueVxuICAgICk7XG4gIH1cbn0iLCIvLyBjbGFzcyBUZXN0T2JqZWN0e1xuLy8gICBjb25zdHJ1Y3RvcihzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0KXtcbi8vICAgICB0aGlzLndpZHRoID0gMTUwO1xuLy8gICAgIHRoaXMuaGVpZ2h0ID0gMzA7XG5cbi8vICAgICB0aGlzLnBvc2l0aW9uID0ge1xuLy8gICAgICAgeDogc2NyZWVuV2lkdGgvMiAtIHRoaXMud2lkdGgvMixcbi8vICAgICAgIHk6IHNjcmVlbkhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMTBcbi8vICAgICB9O1xuLy8gICB9XG5cbi8vICAgZHJhdyhjdHgpe1xuLy8gICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuLy8gICB9XG5cbi8vICAgdXBkYXRlKGRlbHRhVGltZSlcbi8vICAge1xuICAgIFxuLy8gICAgIGlmKCFkZWx0YVRpbWUpIHJldHVybjtcbi8vICAgICBjb25zb2xlLmxvZyhkZWx0YVRpbWUpO1xuLy8gICAgIHRoaXMucG9zaXRpb24ueCArPSA1IC8gZGVsdGFUaW1lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFRlc3RPYmplY3Q7XG5cbi8vIGxldCBhID0gWzEsMiwzXTtcbi8vIGEuZm9yRWFjaChlbCA9PiB7XG4vLyAgIGlmIChlbCA9PT0gMil7XG4vLyAgICAgYS5zcGxpY2UoYS5pbmRleE9mKGVsKSwxKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZyhlbCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBjb25zb2xlLmxvZyhhKTtcblxuLy8gY2xhc3MgVGVzdHtcbi8vICAgY29uc3RydWN0b3IoKXtcbi8vICAgICB0aGlzLnZhcmlhYmxlID0gMTtcbi8vICAgfVxuXG4vLyAgIGJ1aWxkT2JqKCl7XG4vLyAgICAgcmV0dXJuIG5ldyBUZXN0KCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gLy8gbGV0IHRlc3QgPSBUZXN0LmJ1aWxkT2JqKCk7XG4vLyAvLyBsZXQgdGVzdCA9IG5ldyBUZXN0KCk7XG4vLyAvLyBsZXQgb3RoZXJUZXN0ID0gdGVzdC5idWlsZE9iaigpO1xuLy8gbGV0IG90aGVyVGVzdCA9IG5ldyBUZXN0KCkuYnVpbGRPYmooKTtcbi8vIGNvbnNvbGUubG9nKG90aGVyVGVzdC52YXJpYWJsZSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==