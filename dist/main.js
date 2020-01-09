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
      x: position.x - 60,
      y: position.y - 60
    }; //50 is magic number center

    this.position = {
      x: position.x,
      y: position.y
    };
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
      this.ctx.drawImage(this.explosionImageArray[this.stage], this.drawPosition.x, this.drawPosition.y, 120, 120);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGVzdG9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYzJhIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlNDUkVFTl9XSURUSCIsIlNDUkVFTl9IRUlHSFQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWUiLCJHYW1lIiwiaGFuZGxlQ2xpY2siLCJydW5HYW1lIiwiQmFzZSIsInBvc2l0aW9uIiwiYmFzZUltYWdlIiwiZHJhd1Bvc2l0aW9uIiwieCIsInkiLCJyYWRpdXMiLCJkZXN0cm95ZWQiLCJkcmF3IiwiYmluZCIsImRyYXdJbWFnZSIsIkV4cGxvc2lvbiIsInRpbWVyIiwiZXhwbG9zaW9uSW1hZ2VBcnJheSIsImltYWdlVG9EcmF3Iiwic3RhZ2UiLCJleHBsb3Npb25SYWRpdXMiLCJ1cGRhdGVFeHBsb3Npb24iLCJkdCIsImNvbnRleHQiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5XaWR0aCIsIm1ldGVvckFycmF5IiwiYmFzZUFycmF5IiwibWlzc2lsZUFycmF5IiwiZXhwbG9zaW9uQXJyYXkiLCJtaXNzaWxlQ291bnQiLCJsYXN0VGltZSIsImxldmVsIiwiYmFja2dyb3VuZCIsImdhbWVMb29wIiwiYnVpbGROZXdNZXRlb3JzIiwiZSIsImNsb3Nlc3RCYXNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJvZmZzZXRYIiwiaSIsImxlbmd0aCIsImRlc3RpbmF0aW9uIiwib2Zmc2V0WSIsInB1c2giLCJNaXNzaWxlIiwic3RhcnRpbmdNZXRlb3JzIiwic3RhcnRpbmdCYXNlcyIsInBvc1giLCJmbG9vciIsInJhbmRvbSIsIk1ldGVvciIsImJhc2VQb3NpdGlvbiIsInRpbWVzdGFtcCIsImVsYXBzZWRGcmFtZVRpbWUiLCJsZXZlbE11bHRpcGxpZXIiLCJmb3JFYWNoIiwibWV0ZW9yIiwic3BsaWNlIiwiaW5kZXhPZiIsInVwZGF0ZVBvc2l0aW9uIiwiZXhwbG9zaW9uIiwiZGlzdGFuY2UiLCJjYWxjdWxhdGVEaXN0YW5jZSIsImJhc2UiLCJkZXN0cm95QmFzZSIsIm1pc3NpbGUiLCJjaGVja0V4cGxvc2lvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNwZWVkIiwic2V0U3BlZWQiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJ0aHJvdHRsZXIiLCJkZWx0YVRpbWUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGwiLCJjb3Vyc2UiLCJtaXNzaWxlSW1hZ2UiLCJwb3MxIiwicG9zMiIsInhEaXN0IiwieURpc3QiLCJzcXJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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RSxLQUFLSCxRQUFMLENBQWNJLENBSGhCO0FBS0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRIO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBTyxJQUFNd0QsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDa0IsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQy9DO0FBQ0EsTUFBSUMsS0FBSyxHQUFHOUMsSUFBSSxDQUFDQyxHQUFMLENBQVMyQyxJQUFJLENBQUMzRSxDQUFMLEdBQVM0RSxJQUFJLENBQUM1RSxDQUF2QixDQUFaO0FBQ0EsTUFBSThFLEtBQUssR0FBRy9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTMkMsSUFBSSxDQUFDMUUsQ0FBTCxHQUFTMkUsSUFBSSxDQUFDM0UsQ0FBdkIsQ0FBWjtBQUNBLFNBQU84QixJQUFJLENBQUNnRCxJQUFMLENBQVdGLEtBQUssR0FBR0EsS0FBVCxHQUFtQkMsS0FBSyxHQUFHQSxLQUFyQyxDQUFQO0FBQ0QsQ0FMTSxDLENBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ1hBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vY29uc3QgQXBwID0gcmVxdWlyZShcIi4vc2NyaXB0cy9hcHAuanNcIik7XG4vLyBjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7ICBcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBjb25zdCBTQ1JFRU5fV0lEVEggPSAxMjAwO1xuICBjb25zdCBTQ1JFRU5fSEVJR0hUID0gODAwO1xuICBjdHguY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIO1xuICBjdHguY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQ7XG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgsIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5oYW5kbGVDbGljaywgZmFsc2UpO1xuICBnYW1lLnJ1bkdhbWUoKTtcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2V7XG4gIGNvbnN0cnVjdG9yKGN0eCwgcG9zaXRpb24pe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuYmFzZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLWltYWdlXCIpO1xuICAgIC8vdGhpcy5kZXN0cm95ZWRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgeTogcG9zaXRpb24ueVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngrMjEsXG4gICAgICB5OiBwb3NpdGlvbi55KzUwXG4gICAgfTsgLy9tYWdpYyBudW1iZXJzIGZvciB3aWR0aCBhbmQgaGVpZ2h0IGFkanVzdGluZ1xuICAgIHRoaXMucmFkaXVzID0gNDA7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRlc3Ryb3lCYXNlKCl7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMuYmFzZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXN0cm95ZWQtYmFzZVwiKTtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbi54IC09IDQwO1xuICB9XG5cbiAgZHJhdygpeyBcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmJhc2VJbWFnZSwgXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54LCBcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnlcbiAgICAgICk7XG4gIH1cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9zaW9ue1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngtNjAsXG4gICAgICB5OiBwb3NpdGlvbi55LTYwXG4gICAgfTsgLy81MCBpcyBtYWdpYyBudW1iZXIgY2VudGVyXG4gICAgdGhpcy5wb3NpdGlvbj17XG4gICAgICB4OnBvc2l0aW9uLngsXG4gICAgICB5OnBvc2l0aW9uLnlcbiAgICB9O1xuXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy50aW1lciA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5ID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTFcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0yXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tM1wiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTRcIildO1xuICAgIHRoaXMuaW1hZ2VUb0RyYXcgPSB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXlbMF07XG4gICAgdGhpcy5zdGFnZSA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSA2MzsgXG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUV4cGxvc2lvbiA9IHRoaXMudXBkYXRlRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVFeHBsb3Npb24oZHQpe1xuICAgIC8vZGVidWdnZXI7XG4gICAgdGhpcy50aW1lcis9ZHQvMTAwMDtcbiAgICBpZiAodGhpcy50aW1lciA+PSAwLjgpe1xuICAgICAgdGhpcy5zdGFnZSsrO1xuICAgICAgdGhpcy50aW1lciA9MDtcbiAgICB9ICAgIFxuICAgIGlmICh0aGlzLnN0YWdlIDwgNCl7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5W3RoaXMuc3RhZ2VdLFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCxcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnksXG4gICAgICAxMjAsIDEyMFxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgVGVzdE9iamVjdCBmcm9tIFwiLi90ZXN0b2JqZWN0XCI7XG5pbXBvcnQgTWV0ZW9yIGZyb20gXCIuL21ldGVvclwiO1xuaW1wb3J0IE1pc3NpbGUgZnJvbSBcIi4vbWlzc2lsZVwiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IEV4cGxvc2lvbiBmcm9tIFwiLi9leHBsb3Npb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZURpc3RhbmNlIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1le1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KXtcbiAgICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5zY3JlZW5XaWR0aCA9IHdpZHRoOyBcblxuICAgIHRoaXMubWV0ZW9yQXJyYXkgPSBbXTtcbiAgICB0aGlzLmJhc2VBcnJheSA9IFtdO1xuICAgIHRoaXMubWlzc2lsZUFycmF5ID0gW107XG4gICAgdGhpcy5leHBsb3Npb25BcnJheSA9IFtdO1xuXG4gICAgdGhpcy5taXNzaWxlQ291bnQgPSAxMDtcblxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMudGltZXIgPSAwOyAvL3VzZWQgdG8gZ2VuZXJhdGUgbmV3IG1ldGVvcnMgYXQgaW50ZXJ2YWxzXG4gICAgdGhpcy5sZXZlbCA9IDE7IC8vY29udHJvbHMgZGlmZmljdWx0eSBhbmQgcGFjZSBvZiBnYW1lXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuXG4gICAgdGhpcy5nYW1lTG9vcCA9IHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJ1bkdhbWUgPSB0aGlzLnJ1bkdhbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzID0gdGhpcy5idWlsZE5ld01ldGVvcnMuYmluZCh0aGlzKTsgIFxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSl7IFxuICAgIFxuICAgIC8vY2hlY2sgZm9yIG1pc3NpbGUgY291bnRcbiAgICAvL2ZpbmQgY2xvc2VzdCBiYXNlIHRvIGNsaWNrXG4gICAgLy9zcGF3biBtaXNzaWxlIGF0IGJhc2UgaGVhZGluZyB0b3dhcmRzIGNsaWNrICAgIFxuICAgIFxuICAgIGlmICh0aGlzLm1pc3NpbGVDb3VudCA+IDApe1xuXG4gICAgICBsZXQgY2xvc2VzdEJhc2UgPSB0aGlzLmJhc2VBcnJheVswXTtcbiAgICAgIGxldCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UucG9zaXRpb24ueCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYmFzZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhlLm9mZnNldFggLSB0aGlzLmJhc2VBcnJheVtpXS5wb3NpdGlvbi54KSA8IGRpZmZlcmVuY2UpIHtcbiAgICAgICAgICBjbG9zZXN0QmFzZSA9IHRoaXMuYmFzZUFycmF5W2ldO1xuICAgICAgICAgIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGRlc3RpbmF0aW9uID0ge1xuICAgICAgICB4OiBlLm9mZnNldFgsXG4gICAgICAgIHk6IGUub2Zmc2V0WVxuICAgICAgfTtcbiAgICAgIFxuICAgICAgdGhpcy5taXNzaWxlQXJyYXkucHVzaChuZXcgTWlzc2lsZShkZXN0aW5hdGlvbiwgKGNsb3Nlc3RCYXNlLnBvc2l0aW9uKSwgdGhpcy5jdHgpKTtcbiAgICB9ICAgICBcbiAgfVxuXG4gIHJ1bkdhbWUoKXtcbiAgICAvL2luaXRpYWwgc2V0dXAgbG9naWNcbiAgICAvL3RoZW4sIHN0YXJ0IGdhbWVMb29wXG4gICAgbGV0IHN0YXJ0aW5nTWV0ZW9ycyA9IDEwO1xuICAgIGxldCBzdGFydGluZ0Jhc2VzID0gMztcbiAgICAvL3NldHVwIG1ldGVvcnMgPz8/bWVyZ2Ugd2l0aCBidWlsZE1ldGVvcnM/Pz8/XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydGluZ01ldGVvcnM7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gICAgLy9zZXR1cCBiYXNlc1xuICAgIGxldCBiYXNlUG9zaXRpb24gPSB7XG4gICAgICB4OiAxNTAsXG4gICAgICB5OiB0aGlzLnNjcmVlbkhlaWdodCAtIDEwMFxuICAgIH07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9MDsgaSA8IHN0YXJ0aW5nQmFzZXM7IGkrKyl7ICAgICAgXG4gICAgICB0aGlzLmJhc2VBcnJheS5wdXNoKG5ldyBCYXNlKHRoaXMuY3R4LCBiYXNlUG9zaXRpb24pKTsgICAgICBcbiAgICAgIGJhc2VQb3NpdGlvbi54ICs9IHRoaXMuc2NyZWVuV2lkdGgvMztcbiAgICB9XG4gICAgdGhpcy5nYW1lTG9vcCgwKTtcbiAgfVxuXG4gIGdhbWVMb29wKHRpbWVzdGFtcCl7ICAgIFxuICAgIC8vd2hpbGUgbm90IGxvc3RcblxuICAgICAgLy91cGRhdGUgbWV0ZW9yYXJyYXlcbiAgICAgIC8vcmVkcmF3IG1ldGVvcnNcbiAgICAgIC8vbGlzdGVuIGZvciBjbGlja3NcbiAgICAgIC8vcmVwZWF0XG5cbiAgICAvL1xuICAgIGxldCBlbGFwc2VkRnJhbWVUaW1lID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgIHRoaXMudGltZXIrPWVsYXBzZWRGcmFtZVRpbWUvMTAwMDsgICAgXG5cbiAgICBjb25zdCBsZXZlbE11bHRpcGxpZXIgPSAxLjA7ICBcblxuICAgIGlmICh0aGlzLnRpbWVyID49IDMuMCl7XG4gICAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycygpO1xuICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfSAgIFxuXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDApO1xuXG4gICAgdGhpcy5tZXRlb3JBcnJheS5mb3JFYWNoKG1ldGVvciA9PntcbiAgICAgIC8vZmlyc3QsIG1vdmUgdGhlIG1ldGVvclxuICAgICAgaWYgKG1ldGVvci5wb3NpdGlvbi55ID49IHRoaXMuc2NyZWVuSGVpZ2h0KXtcbiAgICAgICAgdGhpcy5tZXRlb3JBcnJheS5zcGxpY2UodGhpcy5tZXRlb3JBcnJheS5pbmRleE9mKG1ldGVvciksMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXRlb3IudXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBlbGFwc2VkRnJhbWVUaW1lIC8gMTAwKTsgIFxuICAgICAgfSAgIFxuICAgICAgLy9jaGVjayBwb3Mgb2YgbWV0ZW9yIGFnYWluc3QgZXhwbG9zaW9ucywgYW5kIGdyb3VuZCBcbiAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuZm9yRWFjaChleHBsb3Npb24gPT4ge1xuICAgICAgICBsZXQgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShleHBsb3Npb24ucG9zaXRpb24sIG1ldGVvci5wb3NpdGlvbik7XG4gICAgICAgIC8vIGlmIG1ldGVvciBpbiByYWRpdXMsIGRlc3Ryb3kgaXQgYW5kIGNyZWF0ZSBleHBsb3Npb25cbiAgICAgICAgaWYgKGRpc3RhbmNlIDw9IGV4cGxvc2lvbi5leHBsb3Npb25SYWRpdXMgKyBtZXRlb3IucmFkaXVzKSB7XG4gICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIG1ldGVvci5wb3NpdGlvbikpO1xuICAgICAgICAgIHRoaXMubWV0ZW9yQXJyYXkuc3BsaWNlKHRoaXMubWV0ZW9yQXJyYXkuaW5kZXhPZihtZXRlb3IpLCAxKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pOyAgICAgICAgXG5cbiAgICAgIHRoaXMuYmFzZUFycmF5LmZvckVhY2goYmFzZSA9PiB7XG4gICAgICAgIGJhc2UuZHJhdygpO1xuICAgICAgICBpZiAoYmFzZS5kZXN0cm95ZWQpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKG1ldGVvci5wb3NpdGlvbiwgYmFzZS5wb3NpdGlvbik7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8PSBiYXNlLnJhZGl1cyArIG1ldGVvci5yYWRpdXMpe1xuICAgICAgICAgIGJhc2UuZGVzdHJveUJhc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7ICBcblxuICAgIHRoaXMubWlzc2lsZUFycmF5LmZvckVhY2gobWlzc2lsZSA9PiB7XG4gICAgICAvL2NoZWNrIGZvciBleHBsb3Npb25cbiAgICAgIGlmIChtaXNzaWxlLmNoZWNrRXhwbG9zaW9uKGNhbGN1bGF0ZURpc3RhbmNlKG1pc3NpbGUucG9zaXRpb24sIG1pc3NpbGUuZGVzdGluYXRpb24pKSl7ICAgICAgICBcbiAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIG1pc3NpbGUucG9zaXRpb24pKTtcbiAgICAgICAgdGhpcy5taXNzaWxlQXJyYXkuc3BsaWNlKHRoaXMubWlzc2lsZUFycmF5LmluZGV4T2YobWlzc2lsZSksMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaXNzaWxlLnVwZGF0ZVBvc2l0aW9uKGVsYXBzZWRGcmFtZVRpbWUgLyAxMDApO1xuICAgICAgfSAgICAgIFxuICAgIH0pO1xuXG4gICAgdGhpcy5leHBsb3Npb25BcnJheS5mb3JFYWNoKGV4cGxvc2lvbiA9PiB7XG4gICAgICBpZiAoZXhwbG9zaW9uLnN0YWdlID49IDQpe1xuICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnNwbGljZSh0aGlzLmV4cGxvc2lvbkFycmF5LmluZGV4T2YoZXhwbG9zaW9uKSwxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cGxvc2lvbi51cGRhdGVFeHBsb3Npb24oZWxhcHNlZEZyYW1lVGltZSk7XG4gICAgICB9ICAgICAgXG4gICAgfSk7XG4gICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApOyAgICBcbiAgfVxuXG4gIGJ1aWxkTmV3TWV0ZW9ycygpIHtcbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmxldmVsICogMjsgaSsrKXtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGVvcntcbiAgY29uc3RydWN0b3IocG9zWCwgY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IC0xMFxuICAgIH07XG4gICAgdGhpcy5zcGVlZCA9IDcgKiB0aGlzLnNldFNwZWVkKCk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldFNwZWVkKCl7XG4gICAgLy9oZWxwcyBzZXQgYW4gaW50aWFsIHJhbmRvbSByYW5nZSBvZiBzcGVlZHNcbiAgICBsZXQgdGhyb3R0bGVyID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAodGhyb3R0bGVyIDw9IDAuMjUpIHJldHVybiAwLjc1O1xuICAgIGlmICh0aHJvdHRsZXIgPj0gMC43NSkgcmV0dXJuIDEuMjU7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBzZXREaXJlY3Rpb24oKXtcbiAgICAvL3NldCBSYW5kb20geCBkaXJlY3Rpb25cbiAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHggPiAwLjUpIHggKj0gLTE7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbihsZXZlbE11bHRpcGxpZXIsIGRlbHRhVGltZSl7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuZGlyZWN0aW9uO1xuICAgIHRoaXMucG9zaXRpb24ueSArPSAobGV2ZWxNdWx0aXBsaWVyICogdGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7ICAgIFxuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7ICAgIFxuICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaWxle1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbiwgcG9zaXRpb24sIGN0eCl7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54ICsgMTAsXG4gICAgICB5OiBwb3NpdGlvbi55IC0gMTBcbiAgICB9O1xuXG4gICAgdGhpcy5jb3Vyc2UgPSB7XG4gICAgICB4OiAodGhpcy5kZXN0aW5hdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSxcbiAgICAgIHk6ICh0aGlzLmRlc3RpbmF0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkpXG4gICAgfTtcbiAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gMztcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMubWlzc2lsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWxsb3ctbWlzc2lsZVwiKTsgICAgXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICAvL3RoaXMuY2FsY3VsYXRlRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0V4cGxvc2lvbiA9IHRoaXMuY2hlY2tFeHBsb3Npb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNoZWNrRXhwbG9zaW9uKGRpc3RhbmNlKXtcbiAgICAvL2xldCBkaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoKTsgICAgXG4gICAgaWYgKGRpc3RhbmNlIDw9IHRoaXMuZXhwbG9zaW9uUmFkaXVzKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuICAvLyAgIGxldCB4RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuZGVzdGluYXRpb24ueCk7XG4gIC8vICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gdGhpcy5kZXN0aW5hdGlvbi55KTtcbiAgLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCp4RGlzdCkgKyAoeURpc3QqeURpc3QpKTtcbiAgLy8gfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGR0KXtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gKHRoaXMuY291cnNlLnggLyB0aGlzLnNwZWVkKSAqIGR0OyAgICBcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKHRoaXMuY291cnNlLnkgLyB0aGlzLnNwZWVkKSAqIGR0O1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpe1xuICAgIC8vbWV0ZW9ycyBhcmUgY2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMgaW4gR2FtZS5qc1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMubWlzc2lsZUltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55XG4gICAgKTtcbiAgfVxufSIsIi8vIGNsYXNzIFRlc3RPYmplY3R7XG4vLyAgIGNvbnN0cnVjdG9yKHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQpe1xuLy8gICAgIHRoaXMud2lkdGggPSAxNTA7XG4vLyAgICAgdGhpcy5oZWlnaHQgPSAzMDtcblxuLy8gICAgIHRoaXMucG9zaXRpb24gPSB7XG4vLyAgICAgICB4OiBzY3JlZW5XaWR0aC8yIC0gdGhpcy53aWR0aC8yLFxuLy8gICAgICAgeTogc2NyZWVuSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAxMFxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICBkcmF3KGN0eCl7XG4vLyAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4vLyAgIH1cblxuLy8gICB1cGRhdGUoZGVsdGFUaW1lKVxuLy8gICB7XG4gICAgXG4vLyAgICAgaWYoIWRlbHRhVGltZSkgcmV0dXJuO1xuLy8gICAgIGNvbnNvbGUubG9nKGRlbHRhVGltZSk7XG4vLyAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDUgLyBkZWx0YVRpbWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgVGVzdE9iamVjdDtcblxuLy8gbGV0IGEgPSBbMSwyLDNdO1xuLy8gYS5mb3JFYWNoKGVsID0+IHtcbi8vICAgaWYgKGVsID09PSAyKXtcbi8vICAgICBhLnNwbGljZShhLmluZGV4T2YoZWwpLDEpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKGVsKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKGEpO1xuXG4vLyBjbGFzcyBUZXN0e1xuLy8gICBjb25zdHJ1Y3Rvcigpe1xuLy8gICAgIHRoaXMudmFyaWFibGUgPSAxO1xuLy8gICB9XG5cbi8vICAgYnVpbGRPYmooKXtcbi8vICAgICByZXR1cm4gbmV3IFRlc3QoKTtcbi8vICAgfVxuLy8gfVxuXG4vLyAvLyBsZXQgdGVzdCA9IFRlc3QuYnVpbGRPYmooKTtcbi8vIC8vIGxldCB0ZXN0ID0gbmV3IFRlc3QoKTtcbi8vIC8vIGxldCBvdGhlclRlc3QgPSB0ZXN0LmJ1aWxkT2JqKCk7XG4vLyBsZXQgb3RoZXJUZXN0ID0gbmV3IFRlc3QoKS5idWlsZE9iaigpO1xuLy8gY29uc29sZS5sb2cob3RoZXJUZXN0LnZhcmlhYmxlKTsiLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlRGlzdGFuY2UgPSAocG9zMSwgcG9zMikgPT4ge1xuICAvL2RlYnVnZ2VyO1xuICBsZXQgeERpc3QgPSBNYXRoLmFicyhwb3MxLnggLSBwb3MyLngpO1xuICBsZXQgeURpc3QgPSBNYXRoLmFicyhwb3MxLnkgLSBwb3MyLnkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG59O1xuXG4vLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuLy8gICBsZXQgeURpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmRlc3RpbmF0aW9uLnkpO1xuLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG4vLyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==