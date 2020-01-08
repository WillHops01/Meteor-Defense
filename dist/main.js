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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/appacademystudent/Desktop/MeteorDefense/src/scripts/app.js'");

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
    this.drawPosition = {
      x: position.x,
      y: position.y
    };
    this.position = {
      x: position.x + 21,
      y: position.y + 50
    }; //magic numbers for width and height adjusting

    this.radius = 40;
    this.draw = this.draw.bind(this);
  }

  _createClass(Base, [{
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
          var distance = Object(_util__WEBPACK_IMPORTED_MODULE_5__["calculateDistance"])(meteor.position, base.position);

          if (distance <= base.radius + meteor.radius) {
            console.log("base destroyed");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGVzdG9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJBcHAiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiU0NSRUVOX1dJRFRIIiwiU0NSRUVOX0hFSUdIVCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsIkdhbWUiLCJoYW5kbGVDbGljayIsInJ1bkdhbWUiLCJCYXNlIiwicG9zaXRpb24iLCJiYXNlSW1hZ2UiLCJkcmF3UG9zaXRpb24iLCJ4IiwieSIsInJhZGl1cyIsImRyYXciLCJiaW5kIiwiZHJhd0ltYWdlIiwiRXhwbG9zaW9uIiwidGltZXIiLCJleHBsb3Npb25JbWFnZUFycmF5IiwiaW1hZ2VUb0RyYXciLCJzdGFnZSIsImV4cGxvc2lvblJhZGl1cyIsInVwZGF0ZUV4cGxvc2lvbiIsImR0IiwiY29udGV4dCIsInNjcmVlbkhlaWdodCIsInNjcmVlbldpZHRoIiwibWV0ZW9yQXJyYXkiLCJiYXNlQXJyYXkiLCJtaXNzaWxlQXJyYXkiLCJleHBsb3Npb25BcnJheSIsIm1pc3NpbGVDb3VudCIsImxhc3RUaW1lIiwibGV2ZWwiLCJiYWNrZ3JvdW5kIiwiZ2FtZUxvb3AiLCJidWlsZE5ld01ldGVvcnMiLCJlIiwiY2xvc2VzdEJhc2UiLCJkaWZmZXJlbmNlIiwiTWF0aCIsImFicyIsIm9mZnNldFgiLCJpIiwibGVuZ3RoIiwiZGVzdGluYXRpb24iLCJvZmZzZXRZIiwicHVzaCIsIk1pc3NpbGUiLCJzdGFydGluZ01ldGVvcnMiLCJzdGFydGluZ0Jhc2VzIiwicG9zWCIsImZsb29yIiwicmFuZG9tIiwiTWV0ZW9yIiwiYmFzZVBvc2l0aW9uIiwidGltZXN0YW1wIiwiZWxhcHNlZEZyYW1lVGltZSIsImxldmVsTXVsdGlwbGllciIsImZvckVhY2giLCJtZXRlb3IiLCJzcGxpY2UiLCJpbmRleE9mIiwidXBkYXRlUG9zaXRpb24iLCJleHBsb3Npb24iLCJkaXN0YW5jZSIsImNhbGN1bGF0ZURpc3RhbmNlIiwiYmFzZSIsImNvbnNvbGUiLCJsb2ciLCJtaXNzaWxlIiwiY2hlY2tFeHBsb3Npb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzcGVlZCIsInNldFNwZWVkIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwidGhyb3R0bGVyIiwiZGVsdGFUaW1lIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsIiwiY291cnNlIiwibWlzc2lsZUltYWdlIiwicG9zMSIsInBvczIiLCJ4RGlzdCIsInlEaXN0Iiwic3FydCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQU8sSUFBTXVELGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ21CLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUMvQztBQUNBLE1BQUlDLEtBQUssR0FBRy9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTNEMsSUFBSSxDQUFDM0UsQ0FBTCxHQUFTNEUsSUFBSSxDQUFDNUUsQ0FBdkIsQ0FBWjtBQUNBLE1BQUk4RSxLQUFLLEdBQUdoRCxJQUFJLENBQUNDLEdBQUwsQ0FBUzRDLElBQUksQ0FBQzFFLENBQUwsR0FBUzJFLElBQUksQ0FBQzNFLENBQXZCLENBQVo7QUFDQSxTQUFPNkIsSUFBSSxDQUFDaUQsSUFBTCxDQUFXRixLQUFLLEdBQUdBLEtBQVQsR0FBbUJDLEtBQUssR0FBR0EsS0FBckMsQ0FBUDtBQUNELENBTE0sQyxDQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUNYQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5jb25zdCBBcHAgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2FwcC5qc1wiKTtcbi8vIGNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWUuanNcIik7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTsgIFxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBcbiAgY29uc3QgU0NSRUVOX1dJRFRIID0gMTIwMDtcbiAgY29uc3QgU0NSRUVOX0hFSUdIVCA9IDgwMDtcbiAgY3R4LmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSDtcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4LCBTQ1JFRU5fV0lEVEgsIFNDUkVFTl9IRUlHSFQpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWUuaGFuZGxlQ2xpY2ssIGZhbHNlKTtcbiAgZ2FtZS5ydW5HYW1lKCk7XG59KTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNle1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZS1pbWFnZVwiKTtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICB5OiBwb3NpdGlvbi55XG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCsyMSxcbiAgICAgIHk6IHBvc2l0aW9uLnkrNTBcbiAgICB9OyAvL21hZ2ljIG51bWJlcnMgZm9yIHdpZHRoIGFuZCBoZWlnaHQgYWRqdXN0aW5nXG4gICAgdGhpcy5yYWRpdXMgPSA0MDtcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRyYXcoKXsgICAgXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5iYXNlSW1hZ2UsIFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCwgXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55XG4gICAgICApO1xuICB9XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvc2lvbntcbiAgY29uc3RydWN0b3IoY3R4LCBwb3NpdGlvbil7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LTYwLFxuICAgICAgeTogcG9zaXRpb24ueS02MFxuICAgIH07IC8vNTAgaXMgbWFnaWMgbnVtYmVyIGNlbnRlclxuICAgIHRoaXMucG9zaXRpb249e1xuICAgICAgeDpwb3NpdGlvbi54LFxuICAgICAgeTpwb3NpdGlvbi55XG4gICAgfTtcblxuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMudGltZXIgPSAwO1xuICAgIHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheSA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0xXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tMlwiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTNcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi00XCIpXTtcbiAgICB0aGlzLmltYWdlVG9EcmF3ID0gdGhpcy5leHBsb3Npb25JbWFnZUFycmF5WzBdO1xuICAgIHRoaXMuc3RhZ2UgPSAwO1xuICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gNjM7IFxuXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVFeHBsb3Npb24gPSB0aGlzLnVwZGF0ZUV4cGxvc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlRXhwbG9zaW9uKGR0KXtcbiAgICAvL2RlYnVnZ2VyO1xuICAgIHRoaXMudGltZXIrPWR0LzEwMDA7XG4gICAgaWYgKHRoaXMudGltZXIgPj0gMC44KXtcbiAgICAgIHRoaXMuc3RhZ2UrKztcbiAgICAgIHRoaXMudGltZXIgPTA7XG4gICAgfSAgICBcbiAgICBpZiAodGhpcy5zdGFnZSA8IDQpe1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheVt0aGlzLnN0YWdlXSxcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLngsXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55LFxuICAgICAgMTIwLCAxMjBcbiAgICApO1xuICB9XG59IiwiaW1wb3J0IFRlc3RPYmplY3QgZnJvbSBcIi4vdGVzdG9iamVjdFwiO1xuaW1wb3J0IE1ldGVvciBmcm9tIFwiLi9tZXRlb3JcIjtcbmltcG9ydCBNaXNzaWxlIGZyb20gXCIuL21pc3NpbGVcIjtcbmltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCBFeHBsb3Npb24gZnJvbSBcIi4vZXhwbG9zaW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVEaXN0YW5jZSB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgd2lkdGgsIGhlaWdodCl7XG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xuICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuc2NyZWVuV2lkdGggPSB3aWR0aDsgXG5cbiAgICB0aGlzLm1ldGVvckFycmF5ID0gW107XG4gICAgdGhpcy5iYXNlQXJyYXkgPSBbXTtcbiAgICB0aGlzLm1pc3NpbGVBcnJheSA9IFtdO1xuICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkgPSBbXTtcblxuICAgIHRoaXMubWlzc2lsZUNvdW50ID0gMTA7XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDsgLy91c2VkIHRvIGdlbmVyYXRlIG5ldyBtZXRlb3JzIGF0IGludGVydmFsc1xuICAgIHRoaXMubGV2ZWwgPSAxOyAvL2NvbnRyb2xzIGRpZmZpY3VsdHkgYW5kIHBhY2Ugb2YgZ2FtZVxuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcblxuICAgIHRoaXMuZ2FtZUxvb3AgPSB0aGlzLmdhbWVMb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ydW5HYW1lID0gdGhpcy5ydW5HYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycyA9IHRoaXMuYnVpbGROZXdNZXRlb3JzLmJpbmQodGhpcyk7ICBcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpeyBcbiAgICBcbiAgICAvL2NoZWNrIGZvciBtaXNzaWxlIGNvdW50XG4gICAgLy9maW5kIGNsb3Nlc3QgYmFzZSB0byBjbGlja1xuICAgIC8vc3Bhd24gbWlzc2lsZSBhdCBiYXNlIGhlYWRpbmcgdG93YXJkcyBjbGljayAgICBcbiAgICBcbiAgICBpZiAodGhpcy5taXNzaWxlQ291bnQgPiAwKXtcblxuICAgICAgbGV0IGNsb3Nlc3RCYXNlID0gdGhpcy5iYXNlQXJyYXlbMF07XG4gICAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnBvc2l0aW9uLngpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJhc2VBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoTWF0aC5hYnMoZS5vZmZzZXRYIC0gdGhpcy5iYXNlQXJyYXlbaV0ucG9zaXRpb24ueCkgPCBkaWZmZXJlbmNlKSB7XG4gICAgICAgICAgY2xvc2VzdEJhc2UgPSB0aGlzLmJhc2VBcnJheVtpXTtcbiAgICAgICAgICBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UucG9zaXRpb24ueCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBkZXN0aW5hdGlvbiA9IHtcbiAgICAgICAgeDogZS5vZmZzZXRYLFxuICAgICAgICB5OiBlLm9mZnNldFlcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LnB1c2gobmV3IE1pc3NpbGUoZGVzdGluYXRpb24sIChjbG9zZXN0QmFzZS5wb3NpdGlvbiksIHRoaXMuY3R4KSk7XG4gICAgfSAgICAgXG4gIH1cblxuICBydW5HYW1lKCl7XG4gICAgLy9pbml0aWFsIHNldHVwIGxvZ2ljXG4gICAgLy90aGVuLCBzdGFydCBnYW1lTG9vcFxuICAgIGxldCBzdGFydGluZ01ldGVvcnMgPSAxMDtcbiAgICBsZXQgc3RhcnRpbmdCYXNlcyA9IDM7XG4gICAgLy9zZXR1cCBtZXRlb3JzID8/P21lcmdlIHdpdGggYnVpbGRNZXRlb3JzPz8/P1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRpbmdNZXRlb3JzOyBpKyspe1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIC8vc2V0dXAgYmFzZXNcbiAgICBsZXQgYmFzZVBvc2l0aW9uID0ge1xuICAgICAgeDogMTUwLFxuICAgICAgeTogdGhpcy5zY3JlZW5IZWlnaHQgLSAxMDBcbiAgICB9O1xuICAgIFxuICAgIGZvciAobGV0IGkgPTA7IGkgPCBzdGFydGluZ0Jhc2VzOyBpKyspeyAgICAgIFxuICAgICAgdGhpcy5iYXNlQXJyYXkucHVzaChuZXcgQmFzZSh0aGlzLmN0eCwgYmFzZVBvc2l0aW9uKSk7ICAgICAgXG4gICAgICBiYXNlUG9zaXRpb24ueCArPSB0aGlzLnNjcmVlbldpZHRoLzM7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUxvb3AoMCk7XG4gIH1cblxuICBnYW1lTG9vcCh0aW1lc3RhbXApeyAgICBcbiAgICAvL3doaWxlIG5vdCBsb3N0XG5cbiAgICAgIC8vdXBkYXRlIG1ldGVvcmFycmF5XG4gICAgICAvL3JlZHJhdyBtZXRlb3JzXG4gICAgICAvL2xpc3RlbiBmb3IgY2xpY2tzXG4gICAgICAvL3JlcGVhdFxuXG4gICAgLy9cbiAgICBsZXQgZWxhcHNlZEZyYW1lVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICB0aGlzLnRpbWVyKz1lbGFwc2VkRnJhbWVUaW1lLzEwMDA7ICAgIFxuXG4gICAgY29uc3QgbGV2ZWxNdWx0aXBsaWVyID0gMS4wOyAgXG5cbiAgICBpZiAodGhpcy50aW1lciA+PSAzLjApe1xuICAgICAgdGhpcy5idWlsZE5ld01ldGVvcnMoKTtcbiAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH0gICBcblxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwKTtcblxuICAgIHRoaXMubWV0ZW9yQXJyYXkuZm9yRWFjaChtZXRlb3IgPT57XG4gICAgICAvL2ZpcnN0LCBtb3ZlIHRoZSBtZXRlb3JcbiAgICAgIGlmIChtZXRlb3IucG9zaXRpb24ueSA+PSB0aGlzLnNjcmVlbkhlaWdodCl7XG4gICAgICAgIHRoaXMubWV0ZW9yQXJyYXkuc3BsaWNlKHRoaXMubWV0ZW9yQXJyYXkuaW5kZXhPZihtZXRlb3IpLDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0ZW9yLnVwZGF0ZVBvc2l0aW9uKGxldmVsTXVsdGlwbGllciwgZWxhcHNlZEZyYW1lVGltZSAvIDEwMCk7ICBcbiAgICAgIH0gICBcbiAgICAgIC8vY2hlY2sgcG9zIG9mIG1ldGVvciBhZ2FpbnN0IGV4cGxvc2lvbnMsIGFuZCBncm91bmQgXG4gICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoZXhwbG9zaW9uLnBvc2l0aW9uLCBtZXRlb3IucG9zaXRpb24pO1xuICAgICAgICAvLyBpZiBtZXRlb3IgaW4gcmFkaXVzLCBkZXN0cm95IGl0IGFuZCBjcmVhdGUgZXhwbG9zaW9uXG4gICAgICAgIGlmIChkaXN0YW5jZSA8PSBleHBsb3Npb24uZXhwbG9zaW9uUmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBtZXRlb3IucG9zaXRpb24pKTtcbiAgICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwgMSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTsgICAgICAgIFxuXG4gICAgICB0aGlzLmJhc2VBcnJheS5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgICBsZXQgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShtZXRlb3IucG9zaXRpb24sIGJhc2UucG9zaXRpb24pO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPD0gYmFzZS5yYWRpdXMgKyBtZXRlb3IucmFkaXVzKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJhc2UgZGVzdHJveWVkXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTsgIFxuXG4gICAgdGhpcy5taXNzaWxlQXJyYXkuZm9yRWFjaChtaXNzaWxlID0+IHtcbiAgICAgIC8vY2hlY2sgZm9yIGV4cGxvc2lvblxuICAgICAgaWYgKG1pc3NpbGUuY2hlY2tFeHBsb3Npb24oY2FsY3VsYXRlRGlzdGFuY2UobWlzc2lsZS5wb3NpdGlvbiwgbWlzc2lsZS5kZXN0aW5hdGlvbikpKXsgICAgICAgIFxuICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgbWlzc2lsZS5wb3NpdGlvbikpO1xuICAgICAgICB0aGlzLm1pc3NpbGVBcnJheS5zcGxpY2UodGhpcy5taXNzaWxlQXJyYXkuaW5kZXhPZihtaXNzaWxlKSwxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pc3NpbGUudXBkYXRlUG9zaXRpb24oZWxhcHNlZEZyYW1lVGltZSAvIDEwMCk7XG4gICAgICB9ICAgICAgXG4gICAgfSk7XG5cbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgIGlmIChleHBsb3Npb24uc3RhZ2UgPj0gNCl7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuc3BsaWNlKHRoaXMuZXhwbG9zaW9uQXJyYXkuaW5kZXhPZihleHBsb3Npb24pLDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwbG9zaW9uLnVwZGF0ZUV4cGxvc2lvbihlbGFwc2VkRnJhbWVUaW1lKTtcbiAgICAgIH0gICAgICBcbiAgICB9KTtcblxuXG4gICAgdGhpcy5iYXNlQXJyYXkuZm9yRWFjaChiYXNlID0+IHtcbiAgICAgIGJhc2UuZHJhdygpO1xuICAgIH0pO1xuICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTsgICAgXG4gIH1cblxuICBidWlsZE5ld01ldGVvcnMoKSB7XG4gICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5sZXZlbCAqIDI7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRlb3J7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiAtMTBcbiAgICB9O1xuICAgIHRoaXMuc3BlZWQgPSA3ICogdGhpcy5zZXRTcGVlZCgpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICB0aGlzLnJhZGl1cyA9IDEwO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTcGVlZCgpe1xuICAgIC8vaGVscHMgc2V0IGFuIGludGlhbCByYW5kb20gcmFuZ2Ugb2Ygc3BlZWRzXG4gICAgbGV0IHRocm90dGxlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHRocm90dGxlciA8PSAwLjI1KSByZXR1cm4gMC43NTtcbiAgICBpZiAodGhyb3R0bGVyID49IDAuNzUpIHJldHVybiAxLjI1O1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKCl7XG4gICAgLy9zZXQgUmFuZG9tIHggZGlyZWN0aW9uXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh4ID4gMC41KSB4ICo9IC0xO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBkZWx0YVRpbWUpe1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLmRpcmVjdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKGxldmVsTXVsdGlwbGllciAqIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpOyAgICBcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG5cbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyAgICBcbiAgICB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lsZXtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24sIHBvc2l0aW9uLCBjdHgpe1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCArIDEwLFxuICAgICAgeTogcG9zaXRpb24ueSAtIDEwXG4gICAgfTtcblxuICAgIHRoaXMuY291cnNlID0ge1xuICAgICAgeDogKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCksXG4gICAgICB5OiAodGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55KVxuICAgIH07XG4gICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IDM7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLm1pc3NpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVsbG93LW1pc3NpbGVcIik7ICAgIFxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgLy90aGlzLmNhbGN1bGF0ZURpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tFeHBsb3Npb24gPSB0aGlzLmNoZWNrRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBjaGVja0V4cGxvc2lvbihkaXN0YW5jZSl7XG4gICAgLy9sZXQgZGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKCk7ICAgIFxuICAgIGlmIChkaXN0YW5jZSA8PSB0aGlzLmV4cGxvc2lvblJhZGl1cykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlRGlzdGFuY2UoKXtcbiAgLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuICAvLyAgIGxldCB5RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuZGVzdGluYXRpb24ueSk7XG4gIC8vICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QqeERpc3QpICsgKHlEaXN0KnlEaXN0KSk7XG4gIC8vIH1cblxuICB1cGRhdGVQb3NpdGlvbihkdCl7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9ICh0aGlzLmNvdXJzZS54IC8gdGhpcy5zcGVlZCkgKiBkdDsgICAgXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLmNvdXJzZS55IC8gdGhpcy5zcGVlZCkgKiBkdDtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICAvL21ldGVvcnMgYXJlIGNoZWNraW5nIGZvciBjb2xsaXNpb25zIGluIEdhbWUuanNcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1pc3NpbGVJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueVxuICAgICk7XG4gIH1cbn0iLCIvLyBjbGFzcyBUZXN0T2JqZWN0e1xuLy8gICBjb25zdHJ1Y3RvcihzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0KXtcbi8vICAgICB0aGlzLndpZHRoID0gMTUwO1xuLy8gICAgIHRoaXMuaGVpZ2h0ID0gMzA7XG5cbi8vICAgICB0aGlzLnBvc2l0aW9uID0ge1xuLy8gICAgICAgeDogc2NyZWVuV2lkdGgvMiAtIHRoaXMud2lkdGgvMixcbi8vICAgICAgIHk6IHNjcmVlbkhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMTBcbi8vICAgICB9O1xuLy8gICB9XG5cbi8vICAgZHJhdyhjdHgpe1xuLy8gICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuLy8gICB9XG5cbi8vICAgdXBkYXRlKGRlbHRhVGltZSlcbi8vICAge1xuICAgIFxuLy8gICAgIGlmKCFkZWx0YVRpbWUpIHJldHVybjtcbi8vICAgICBjb25zb2xlLmxvZyhkZWx0YVRpbWUpO1xuLy8gICAgIHRoaXMucG9zaXRpb24ueCArPSA1IC8gZGVsdGFUaW1lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFRlc3RPYmplY3Q7XG5cbi8vIGxldCBhID0gWzEsMiwzXTtcbi8vIGEuZm9yRWFjaChlbCA9PiB7XG4vLyAgIGlmIChlbCA9PT0gMil7XG4vLyAgICAgYS5zcGxpY2UoYS5pbmRleE9mKGVsKSwxKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZyhlbCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBjb25zb2xlLmxvZyhhKTtcblxuLy8gY2xhc3MgVGVzdHtcbi8vICAgY29uc3RydWN0b3IoKXtcbi8vICAgICB0aGlzLnZhcmlhYmxlID0gMTtcbi8vICAgfVxuXG4vLyAgIGJ1aWxkT2JqKCl7XG4vLyAgICAgcmV0dXJuIG5ldyBUZXN0KCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gLy8gbGV0IHRlc3QgPSBUZXN0LmJ1aWxkT2JqKCk7XG4vLyAvLyBsZXQgdGVzdCA9IG5ldyBUZXN0KCk7XG4vLyAvLyBsZXQgb3RoZXJUZXN0ID0gdGVzdC5idWlsZE9iaigpO1xuLy8gbGV0IG90aGVyVGVzdCA9IG5ldyBUZXN0KCkuYnVpbGRPYmooKTtcbi8vIGNvbnNvbGUubG9nKG90aGVyVGVzdC52YXJpYWJsZSk7IiwiZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZURpc3RhbmNlID0gKHBvczEsIHBvczIpID0+IHtcbiAgLy9kZWJ1Z2dlcjtcbiAgbGV0IHhEaXN0ID0gTWF0aC5hYnMocG9zMS54IC0gcG9zMi54KTtcbiAgbGV0IHlEaXN0ID0gTWF0aC5hYnMocG9zMS55IC0gcG9zMi55KTtcbiAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QgKiB4RGlzdCkgKyAoeURpc3QgKiB5RGlzdCkpO1xufTtcblxuLy8gY2FsY3VsYXRlRGlzdGFuY2UoKXtcbi8vICAgbGV0IHhEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi54IC0gdGhpcy5kZXN0aW5hdGlvbi54KTtcbi8vICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gdGhpcy5kZXN0aW5hdGlvbi55KTtcbi8vICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QgKiB4RGlzdCkgKyAoeURpc3QgKiB5RGlzdCkpO1xuLy8gfSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=