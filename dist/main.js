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
 //const App = require("./scripts/app.js");
// const Game = require("./scripts/game.js");


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
    this.baseImage = document.getElementById("base-image"); //this.destroyedImage = document.getElementById("destroyed-base");

    this.drawPosition = {
      x: position.x,
      y: position.y
    };
    this.position = {
      x: position.x + 21,
      y: position.y + 50
    }; //magic numbers for width and height adjusting

    this.radius = 40;
    this.destroyed = false;
    this.draw = this.draw.bind(this);
  }

  _createClass(Base, [{
    key: "destroyBase",
    value: function destroyBase() {
      this.destroyed = true;
      this.baseImage = document.getElementById("destroyed-base");
      this.drawPosition.x -= 40;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.baseImage, this.drawPosition.x, this.drawPosition.y);
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

    this.drawPosition = {
      x: position.x,
      y: position.y
    }; //50 is magic number center

    this.position = {
      x: position.x,
      y: position.y
    };
    this.size = 50;
    this.maxSize = 130;
    this.growthRate = (this.maxSize - this.size) / 4; //calculation for how fast to grow

    this.ctx = ctx;
    this.timer = 0;
    this.explosionImageArray = [document.getElementById("explosion-1"), document.getElementById("explosion-2"), document.getElementById("explosion-3"), document.getElementById("explosion-4")];
    this.imageToDraw = this.explosionImageArray[0];
    this.stage = 0;
    this.explosionRadius = 63;
    this.draw = this.draw.bind(this);
    this.updateExplosion = this.updateExplosion.bind(this);
  }

  _createClass(Explosion, [{
    key: "updateExplosion",
    value: function updateExplosion(dt) {
      dt = dt / 1000;
      this.timer += dt;

      if (this.timer >= 0.8) {
        this.stage++;
        this.timer = 0;
      }

      if (this.stage < 4) {
        this.drawPosition.x = this.position.x - this.size / 2;
        this.drawPosition.y = this.position.y - this.size / 2;
        this.draw();
        this.size += this.growthRate * dt;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.explosionImageArray[this.stage], this.drawPosition.x, this.drawPosition.y, this.size, this.size);
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

            return;
          }
        });

        _this.baseArray.forEach(function (base) {
          base.draw();

          if (base.destroyed) {
            return;
          }

          var distance = Object(_util__WEBPACK_IMPORTED_MODULE_5__["calculateDistance"])(meteor.position, base.position);

          if (distance <= base.radius + meteor.radius) {
            base.destroyBase();
          }
        });
      });
      this.missileArray.forEach(function (missile) {
        //check for explosion
        if (missile.checkExplosion(Object(_util__WEBPACK_IMPORTED_MODULE_5__["calculateDistance"])(missile.position, missile.destination))) {
          _this.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_4__["default"](_this.ctx, missile.position));

          _this.missileArray.splice(_this.missileArray.indexOf(missile), 1);
        } else {
          missile.updatePosition(elapsedFrameTime / 1000);
        }
      });
      this.explosionArray.forEach(function (explosion) {
        if (explosion.stage >= 4) {
          _this.explosionArray.splice(_this.explosionArray.indexOf(explosion), 1);
        } else {
          explosion.updateExplosion(elapsedFrameTime);
        }
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
    this.speed = 0.8;
    this.radius = 5;
    this.explosionRadius = 3;
    this.ctx = ctx;
    this.missileImage = document.getElementById("yellow-missile");
    this.draw = this.draw.bind(this);
    this.updatePosition = this.updatePosition.bind(this); //this.calculateDistance = this.calculateDistance.bind(this);

    this.checkExplosion = this.checkExplosion.bind(this);
  }

  _createClass(Missile, [{
    key: "checkExplosion",
    value: function checkExplosion(distance) {
      //let distance = this.calculateDistance();    
      if (distance <= this.explosionRadius) return true;
      return false;
    } // calculateDistance(){
    //   let xDist = Math.abs(this.position.x - this.destination.x);
    //   let yDist = Math.abs(this.position.y - this.destination.y);
    //   return Math.sqrt((xDist*xDist) + (yDist*yDist));
    // }

  }, {
    key: "updatePosition",
    value: function updatePosition(dt) {
      this.position.x += this.course.x * this.speed * dt;
      this.position.y += this.course.y * this.speed * dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGVzdG9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJTQ1JFRU5fV0lEVEgiLCJTQ1JFRU5fSEVJR0hUIiwid2lkdGgiLCJoZWlnaHQiLCJnYW1lIiwiR2FtZSIsImhhbmRsZUNsaWNrIiwicnVuR2FtZSIsIkJhc2UiLCJwb3NpdGlvbiIsImJhc2VJbWFnZSIsImRyYXdQb3NpdGlvbiIsIngiLCJ5IiwicmFkaXVzIiwiZGVzdHJveWVkIiwiZHJhdyIsImJpbmQiLCJkcmF3SW1hZ2UiLCJFeHBsb3Npb24iLCJzaXplIiwibWF4U2l6ZSIsImdyb3d0aFJhdGUiLCJ0aW1lciIsImV4cGxvc2lvbkltYWdlQXJyYXkiLCJpbWFnZVRvRHJhdyIsInN0YWdlIiwiZXhwbG9zaW9uUmFkaXVzIiwidXBkYXRlRXhwbG9zaW9uIiwiZHQiLCJjb250ZXh0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJtZXRlb3JBcnJheSIsImJhc2VBcnJheSIsIm1pc3NpbGVBcnJheSIsImV4cGxvc2lvbkFycmF5IiwibWlzc2lsZUNvdW50IiwibGFzdFRpbWUiLCJsZXZlbCIsImJhY2tncm91bmQiLCJnYW1lTG9vcCIsImJ1aWxkTmV3TWV0ZW9ycyIsImUiLCJjbG9zZXN0QmFzZSIsImRpZmZlcmVuY2UiLCJNYXRoIiwiYWJzIiwib2Zmc2V0WCIsImkiLCJsZW5ndGgiLCJkZXN0aW5hdGlvbiIsIm9mZnNldFkiLCJwdXNoIiwiTWlzc2lsZSIsInN0YXJ0aW5nTWV0ZW9ycyIsInN0YXJ0aW5nQmFzZXMiLCJwb3NYIiwiZmxvb3IiLCJyYW5kb20iLCJNZXRlb3IiLCJiYXNlUG9zaXRpb24iLCJ0aW1lc3RhbXAiLCJlbGFwc2VkRnJhbWVUaW1lIiwibGV2ZWxNdWx0aXBsaWVyIiwiZm9yRWFjaCIsIm1ldGVvciIsInNwbGljZSIsImluZGV4T2YiLCJ1cGRhdGVQb3NpdGlvbiIsImV4cGxvc2lvbiIsImRpc3RhbmNlIiwiY2FsY3VsYXRlRGlzdGFuY2UiLCJiYXNlIiwiZGVzdHJveUJhc2UiLCJtaXNzaWxlIiwiY2hlY2tFeHBsb3Npb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzcGVlZCIsInNldFNwZWVkIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwidGhyb3R0bGVyIiwiZGVsdGFUaW1lIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsIiwiY291cnNlIiwibWlzc2lsZUltYWdlIiwicG9zMSIsInBvczIiLCJ4RGlzdCIsInlEaXN0Iiwic3FydCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FB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UzhFLElBQUksQ0FBQzlFLENBQXZCLENBQVo7QUFDQSxTQUFPaUMsSUFBSSxDQUFDZ0QsSUFBTCxDQUFXRixLQUFLLEdBQUdBLEtBQVQsR0FBbUJDLEtBQUssR0FBR0EsS0FBckMsQ0FBUDtBQUNELENBTE0sQyxDQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUNYQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG4vL2NvbnN0IEFwcCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYXBwLmpzXCIpO1xuLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpOyAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgU0NSRUVOX1dJRFRIID0gMTIwMDtcbiAgY29uc3QgU0NSRUVOX0hFSUdIVCA9IDgwMDtcbiAgY3R4LmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSDtcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4LCBTQ1JFRU5fV0lEVEgsIFNDUkVFTl9IRUlHSFQpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWUuaGFuZGxlQ2xpY2ssIGZhbHNlKTtcbiAgZ2FtZS5ydW5HYW1lKCk7XG59KTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNle1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZS1pbWFnZVwiKTtcbiAgICAvL3RoaXMuZGVzdHJveWVkSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3Ryb3llZC1iYXNlXCIpO1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgIHk6IHBvc2l0aW9uLnlcbiAgICB9O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54KzIxLFxuICAgICAgeTogcG9zaXRpb24ueSs1MFxuICAgIH07IC8vbWFnaWMgbnVtYmVycyBmb3Igd2lkdGggYW5kIGhlaWdodCBhZGp1c3RpbmdcbiAgICB0aGlzLnJhZGl1cyA9IDQwO1xuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24ueCAtPSA0MDtcbiAgfVxuXG4gIGRyYXcoKXsgXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5iYXNlSW1hZ2UsIFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCwgXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55XG4gICAgICApO1xuICB9XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvc2lvbntcbiAgY29uc3RydWN0b3IoY3R4LCBwb3NpdGlvbil7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgeTogcG9zaXRpb24ueVxuICAgIH07IC8vNTAgaXMgbWFnaWMgbnVtYmVyIGNlbnRlclxuICAgIHRoaXMucG9zaXRpb249e1xuICAgICAgeDpwb3NpdGlvbi54LFxuICAgICAgeTpwb3NpdGlvbi55XG4gICAgfTtcblxuICAgIHRoaXMuc2l6ZSA9IDUwO1xuICAgIHRoaXMubWF4U2l6ZSA9IDEzMDtcbiAgICB0aGlzLmdyb3d0aFJhdGUgPSAodGhpcy5tYXhTaXplIC0gdGhpcy5zaXplKSAvIDQ7XG4gICAgLy9jYWxjdWxhdGlvbiBmb3IgaG93IGZhc3QgdG8gZ3Jvd1xuXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy50aW1lciA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5ID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTFcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0yXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tM1wiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTRcIildO1xuICAgIHRoaXMuaW1hZ2VUb0RyYXcgPSB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXlbMF07XG4gICAgdGhpcy5zdGFnZSA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSA2MzsgXG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUV4cGxvc2lvbiA9IHRoaXMudXBkYXRlRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVFeHBsb3Npb24oZHQpe1xuICAgIGR0ID0gZHQvMTAwMDtcbiAgICB0aGlzLnRpbWVyKz1kdDtcbiAgICBpZiAodGhpcy50aW1lciA+PSAwLjgpe1xuICAgICAgdGhpcy5zdGFnZSsrO1xuXG4gICAgICB0aGlzLnRpbWVyID0wO1xuICAgIH0gICAgXG4gICAgaWYgKHRoaXMuc3RhZ2UgPCA0KXtcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnggPSB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnNpemUvMjtcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNpemUvMjtcbiAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgdGhpcy5zaXplICs9IHRoaXMuZ3Jvd3RoUmF0ZSAqIGR0OyAgICAgIFxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXlbdGhpcy5zdGFnZV0sXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54LFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2l6ZSwgdGhpcy5zaXplXG4gICAgKTtcbiAgfVxufSIsImltcG9ydCBUZXN0T2JqZWN0IGZyb20gXCIuL3Rlc3RvYmplY3RcIjtcbmltcG9ydCBNZXRlb3IgZnJvbSBcIi4vbWV0ZW9yXCI7XG5pbXBvcnQgTWlzc2lsZSBmcm9tIFwiLi9taXNzaWxlXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQgRXhwbG9zaW9uIGZyb20gXCIuL2V4cGxvc2lvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGlzdGFuY2UgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpe1xuICAgIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gd2lkdGg7IFxuXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5taXNzaWxlQXJyYXkgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5ID0gW107XG5cbiAgICB0aGlzLm1pc3NpbGVDb3VudCA9IDEwO1xuXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMTsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG5cbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucnVuR2FtZSA9IHRoaXMucnVuR2FtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5idWlsZE5ld01ldGVvcnMgPSB0aGlzLmJ1aWxkTmV3TWV0ZW9ycy5iaW5kKHRoaXMpOyAgXG4gIH1cblxuICBoYW5kbGVDbGljayhlKXsgXG4gICAgXG4gICAgLy9jaGVjayBmb3IgbWlzc2lsZSBjb3VudFxuICAgIC8vZmluZCBjbG9zZXN0IGJhc2UgdG8gY2xpY2tcbiAgICAvL3NwYXduIG1pc3NpbGUgYXQgYmFzZSBoZWFkaW5nIHRvd2FyZHMgY2xpY2sgICAgXG4gICAgXG4gICAgaWYgKHRoaXMubWlzc2lsZUNvdW50ID4gMCl7XG5cbiAgICAgIGxldCBjbG9zZXN0QmFzZSA9IHRoaXMuYmFzZUFycmF5WzBdO1xuICAgICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5iYXNlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGUub2Zmc2V0WCAtIHRoaXMuYmFzZUFycmF5W2ldLnBvc2l0aW9uLngpIDwgZGlmZmVyZW5jZSkge1xuICAgICAgICAgIGNsb3Nlc3RCYXNlID0gdGhpcy5iYXNlQXJyYXlbaV07XG4gICAgICAgICAgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnBvc2l0aW9uLngpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZGVzdGluYXRpb24gPSB7XG4gICAgICAgIHg6IGUub2Zmc2V0WCxcbiAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICB9O1xuICAgICAgXG4gICAgICB0aGlzLm1pc3NpbGVBcnJheS5wdXNoKG5ldyBNaXNzaWxlKGRlc3RpbmF0aW9uLCAoY2xvc2VzdEJhc2UucG9zaXRpb24pLCB0aGlzLmN0eCkpO1xuICAgIH0gICAgIFxuICB9XG5cbiAgcnVuR2FtZSgpe1xuICAgIC8vaW5pdGlhbCBzZXR1cCBsb2dpY1xuICAgIC8vdGhlbiwgc3RhcnQgZ2FtZUxvb3BcbiAgICBsZXQgc3RhcnRpbmdNZXRlb3JzID0gMTA7XG4gICAgbGV0IHN0YXJ0aW5nQmFzZXMgPSAzO1xuICAgIC8vc2V0dXAgbWV0ZW9ycyA/Pz9tZXJnZSB3aXRoIGJ1aWxkTWV0ZW9ycz8/Pz9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0aW5nTWV0ZW9yczsgaSsrKXtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgICAvL3NldHVwIGJhc2VzXG4gICAgbGV0IGJhc2VQb3NpdGlvbiA9IHtcbiAgICAgIHg6IDE1MCxcbiAgICAgIHk6IHRoaXMuc2NyZWVuSGVpZ2h0IC0gMTAwXG4gICAgfTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0wOyBpIDwgc3RhcnRpbmdCYXNlczsgaSsrKXsgICAgICBcbiAgICAgIHRoaXMuYmFzZUFycmF5LnB1c2gobmV3IEJhc2UodGhpcy5jdHgsIGJhc2VQb3NpdGlvbikpOyAgICAgIFxuICAgICAgYmFzZVBvc2l0aW9uLnggKz0gdGhpcy5zY3JlZW5XaWR0aC8zO1xuICAgIH1cbiAgICB0aGlzLmdhbWVMb29wKDApO1xuICB9XG5cbiAgZ2FtZUxvb3AodGltZXN0YW1wKXsgICAgXG4gICAgLy93aGlsZSBub3QgbG9zdFxuXG4gICAgICAvL3VwZGF0ZSBtZXRlb3JhcnJheVxuICAgICAgLy9yZWRyYXcgbWV0ZW9yc1xuICAgICAgLy9saXN0ZW4gZm9yIGNsaWNrc1xuICAgICAgLy9yZXBlYXRcblxuICAgIC8vXG4gICAgbGV0IGVsYXBzZWRGcmFtZVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgdGhpcy50aW1lcis9ZWxhcHNlZEZyYW1lVGltZS8xMDAwOyAgICBcblxuICAgIGNvbnN0IGxldmVsTXVsdGlwbGllciA9IDEuMDsgIFxuXG4gICAgaWYgKHRoaXMudGltZXIgPj0gMy4wKXtcbiAgICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzKCk7XG4gICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9ICAgXG5cbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCk7XG5cbiAgICB0aGlzLm1ldGVvckFycmF5LmZvckVhY2gobWV0ZW9yID0+e1xuICAgICAgLy9maXJzdCwgbW92ZSB0aGUgbWV0ZW9yXG4gICAgICBpZiAobWV0ZW9yLnBvc2l0aW9uLnkgPj0gdGhpcy5zY3JlZW5IZWlnaHQpe1xuICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGVvci51cGRhdGVQb3NpdGlvbihsZXZlbE11bHRpcGxpZXIsIGVsYXBzZWRGcmFtZVRpbWUgLyAxMDApOyAgXG4gICAgICB9ICAgXG4gICAgICAvL2NoZWNrIHBvcyBvZiBtZXRlb3IgYWdhaW5zdCBleHBsb3Npb25zLCBhbmQgZ3JvdW5kIFxuICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5mb3JFYWNoKGV4cGxvc2lvbiA9PiB7XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKGV4cGxvc2lvbi5wb3NpdGlvbiwgbWV0ZW9yLnBvc2l0aW9uKTtcbiAgICAgICAgLy8gaWYgbWV0ZW9yIGluIHJhZGl1cywgZGVzdHJveSBpdCBhbmQgY3JlYXRlIGV4cGxvc2lvblxuICAgICAgICBpZiAoZGlzdGFuY2UgPD0gZXhwbG9zaW9uLmV4cGxvc2lvblJhZGl1cyArIG1ldGVvci5yYWRpdXMpIHtcbiAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgbWV0ZW9yLnBvc2l0aW9uKSk7XG4gICAgICAgICAgdGhpcy5tZXRlb3JBcnJheS5zcGxpY2UodGhpcy5tZXRlb3JBcnJheS5pbmRleE9mKG1ldGVvciksIDEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7ICAgICAgICBcblxuICAgICAgdGhpcy5iYXNlQXJyYXkuZm9yRWFjaChiYXNlID0+IHtcbiAgICAgICAgYmFzZS5kcmF3KCk7XG4gICAgICAgIGlmIChiYXNlLmRlc3Ryb3llZCl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UobWV0ZW9yLnBvc2l0aW9uLCBiYXNlLnBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGRpc3RhbmNlIDw9IGJhc2UucmFkaXVzICsgbWV0ZW9yLnJhZGl1cyl7XG4gICAgICAgICAgYmFzZS5kZXN0cm95QmFzZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTsgIFxuXG4gICAgdGhpcy5taXNzaWxlQXJyYXkuZm9yRWFjaChtaXNzaWxlID0+IHtcbiAgICAgIC8vY2hlY2sgZm9yIGV4cGxvc2lvblxuICAgICAgaWYgKG1pc3NpbGUuY2hlY2tFeHBsb3Npb24oY2FsY3VsYXRlRGlzdGFuY2UobWlzc2lsZS5wb3NpdGlvbiwgbWlzc2lsZS5kZXN0aW5hdGlvbikpKXsgICAgICAgIFxuICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgbWlzc2lsZS5wb3NpdGlvbikpO1xuICAgICAgICB0aGlzLm1pc3NpbGVBcnJheS5zcGxpY2UodGhpcy5taXNzaWxlQXJyYXkuaW5kZXhPZihtaXNzaWxlKSwxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pc3NpbGUudXBkYXRlUG9zaXRpb24oKGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwKSk7XG4gICAgICB9ICAgICAgXG4gICAgfSk7XG5cbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgIGlmIChleHBsb3Npb24uc3RhZ2UgPj0gNCl7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuc3BsaWNlKHRoaXMuZXhwbG9zaW9uQXJyYXkuaW5kZXhPZihleHBsb3Npb24pLDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwbG9zaW9uLnVwZGF0ZUV4cGxvc2lvbihlbGFwc2VkRnJhbWVUaW1lKTtcbiAgICAgIH0gICAgICBcbiAgICB9KTtcbiAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7ICAgIFxuICB9XG5cbiAgYnVpbGROZXdNZXRlb3JzKCkge1xuICAgIGZvcihsZXQgaSA9MDsgaSA8IHRoaXMubGV2ZWwgKiAyOyBpKyspe1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0ZW9ye1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogLTEwXG4gICAgfTtcbiAgICB0aGlzLnNwZWVkID0gNyAqIHRoaXMuc2V0U3BlZWQoKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuc2V0RGlyZWN0aW9uKCk7XG4gICAgdGhpcy5yYWRpdXMgPSAxMDtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0U3BlZWQoKXtcbiAgICAvL2hlbHBzIHNldCBhbiBpbnRpYWwgcmFuZG9tIHJhbmdlIG9mIHNwZWVkc1xuICAgIGxldCB0aHJvdHRsZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh0aHJvdHRsZXIgPD0gMC4yNSkgcmV0dXJuIDAuNzU7XG4gICAgaWYgKHRocm90dGxlciA+PSAwLjc1KSByZXR1cm4gMS4yNTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHNldERpcmVjdGlvbigpe1xuICAgIC8vc2V0IFJhbmRvbSB4IGRpcmVjdGlvblxuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAoeCA+IDAuNSkgeCAqPSAtMTtcbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGxldmVsTXVsdGlwbGllciwgZGVsdGFUaW1lKXtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5kaXJlY3Rpb247XG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IChsZXZlbE11bHRpcGxpZXIgKiB0aGlzLnNwZWVkICogZGVsdGFUaW1lKTsgICAgXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuXG4gIGRyYXcoKXtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTsgICAgXG4gICAgdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3NpbGV7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uLCBwb3NpdGlvbiwgY3R4KXtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLnggKyAxMCxcbiAgICAgIHk6IHBvc2l0aW9uLnkgLSAxMFxuICAgIH07XG5cbiAgICB0aGlzLmNvdXJzZSA9IHtcbiAgICAgIHg6ICh0aGlzLmRlc3RpbmF0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpLFxuICAgICAgeTogKHRoaXMuZGVzdGluYXRpb24ueSAtIHRoaXMucG9zaXRpb24ueSlcbiAgICB9O1xuICAgIHRoaXMuc3BlZWQgPSAwLjg7XG4gICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gMztcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMubWlzc2lsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWxsb3ctbWlzc2lsZVwiKTsgICAgXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICAvL3RoaXMuY2FsY3VsYXRlRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0V4cGxvc2lvbiA9IHRoaXMuY2hlY2tFeHBsb3Npb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNoZWNrRXhwbG9zaW9uKGRpc3RhbmNlKXtcbiAgICAvL2xldCBkaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoKTsgICAgXG4gICAgaWYgKGRpc3RhbmNlIDw9IHRoaXMuZXhwbG9zaW9uUmFkaXVzKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuICAvLyAgIGxldCB4RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuZGVzdGluYXRpb24ueCk7XG4gIC8vICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gdGhpcy5kZXN0aW5hdGlvbi55KTtcbiAgLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCp4RGlzdCkgKyAoeURpc3QqeURpc3QpKTtcbiAgLy8gfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGR0KXtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gKHRoaXMuY291cnNlLnggKiB0aGlzLnNwZWVkKSAqIGR0OyAgICBcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKHRoaXMuY291cnNlLnkgKiB0aGlzLnNwZWVkKSAqIGR0O1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpe1xuICAgIC8vbWV0ZW9ycyBhcmUgY2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMgaW4gR2FtZS5qc1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMubWlzc2lsZUltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55XG4gICAgKTtcbiAgfVxufSIsIi8vIGNsYXNzIFRlc3RPYmplY3R7XG4vLyAgIGNvbnN0cnVjdG9yKHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQpe1xuLy8gICAgIHRoaXMud2lkdGggPSAxNTA7XG4vLyAgICAgdGhpcy5oZWlnaHQgPSAzMDtcblxuLy8gICAgIHRoaXMucG9zaXRpb24gPSB7XG4vLyAgICAgICB4OiBzY3JlZW5XaWR0aC8yIC0gdGhpcy53aWR0aC8yLFxuLy8gICAgICAgeTogc2NyZWVuSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAxMFxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICBkcmF3KGN0eCl7XG4vLyAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4vLyAgIH1cblxuLy8gICB1cGRhdGUoZGVsdGFUaW1lKVxuLy8gICB7XG4gICAgXG4vLyAgICAgaWYoIWRlbHRhVGltZSkgcmV0dXJuO1xuLy8gICAgIGNvbnNvbGUubG9nKGRlbHRhVGltZSk7XG4vLyAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDUgLyBkZWx0YVRpbWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgVGVzdE9iamVjdDtcblxuLy8gbGV0IGEgPSBbMSwyLDNdO1xuLy8gYS5mb3JFYWNoKGVsID0+IHtcbi8vICAgaWYgKGVsID09PSAyKXtcbi8vICAgICBhLnNwbGljZShhLmluZGV4T2YoZWwpLDEpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKGVsKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKGEpO1xuXG4vLyBjbGFzcyBUZXN0e1xuLy8gICBjb25zdHJ1Y3Rvcigpe1xuLy8gICAgIHRoaXMudmFyaWFibGUgPSAxO1xuLy8gICB9XG5cbi8vICAgYnVpbGRPYmooKXtcbi8vICAgICByZXR1cm4gbmV3IFRlc3QoKTtcbi8vICAgfVxuLy8gfVxuXG4vLyAvLyBsZXQgdGVzdCA9IFRlc3QuYnVpbGRPYmooKTtcbi8vIC8vIGxldCB0ZXN0ID0gbmV3IFRlc3QoKTtcbi8vIC8vIGxldCBvdGhlclRlc3QgPSB0ZXN0LmJ1aWxkT2JqKCk7XG4vLyBsZXQgb3RoZXJUZXN0ID0gbmV3IFRlc3QoKS5idWlsZE9iaigpO1xuLy8gY29uc29sZS5sb2cob3RoZXJUZXN0LnZhcmlhYmxlKTsiLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlRGlzdGFuY2UgPSAocG9zMSwgcG9zMikgPT4ge1xuICAvL2RlYnVnZ2VyO1xuICBsZXQgeERpc3QgPSBNYXRoLmFicyhwb3MxLnggLSBwb3MyLngpO1xuICBsZXQgeURpc3QgPSBNYXRoLmFicyhwb3MxLnkgLSBwb3MyLnkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG59O1xuXG4vLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuLy8gICBsZXQgeURpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmRlc3RpbmF0aW9uLnkpO1xuLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG4vLyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==