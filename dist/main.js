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

    this.drawWidth = this.baseImage.width;
    this.drawHeight = this.baseImage.height; //debugger;

    this.radius = 40;
    this.destroyed = false;
    this.draw = this.draw.bind(this);
    this.destroyBase = this.destroyBase.bind(this);
  }

  _createClass(Base, [{
    key: "destroyBase",
    value: function destroyBase() {
      this.destroyed = true;
      this.baseImage = document.getElementById("destroyed-base");
      this.drawWidth = 100;
      this.drawHeight = 100;
      this.drawPosition.x -= 20;
      this.drawPosition.y += 40;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.baseImage, this.drawPosition.x, this.drawPosition.y, this.drawWidth, this.drawHeight);
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
/* harmony import */ var _meteor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meteor */ "./src/scripts/meteor.js");
/* harmony import */ var _missile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./missile */ "./src/scripts/missile.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/scripts/base.js");
/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explosion */ "./src/scripts/explosion.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameState */ "./src/scripts/gameState.js");
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
    this.explosionArray = []; //this.missileCount = 10;

    this.lastTime = 0;
    this.timer = 0; //used to generate new meteors at intervals

    this.level = 1; //controls difficulty and pace of game

    this.background = document.getElementById("background");
    this.gameState = new _gameState__WEBPACK_IMPORTED_MODULE_4__["default"]();
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
      if (this.gameState.missiles > 0) {
        var potentialBases = this.baseArray.filter(function (base) {
          return !base.destroyed;
        });
        var closestBase = potentialBases[0];
        var difference = Math.abs(e.offsetX - closestBase.position.x);

        for (var i = 1; i < potentialBases.length; i++) {
          if (Math.abs(e.offsetX - potentialBases[i].position.x) < difference) {
            closestBase = potentialBases[i];
            difference = Math.abs(e.offsetX - closestBase.position.x);
          }
        }

        var destination = {
          x: e.offsetX,
          y: e.offsetY
        };
        this.gameState.fireMissile();
        this.missileArray.push(new _missile__WEBPACK_IMPORTED_MODULE_1__["default"](destination, closestBase.position, this.ctx));
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
        this.meteorArray.push(new _meteor__WEBPACK_IMPORTED_MODULE_0__["default"](posX, this.ctx));
      } //setup bases


      var basePosition = {
        x: 150,
        y: this.screenHeight - 100
      };

      for (var _i = 0; _i < startingBases; _i++) {
        this.baseArray.push(new _base__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx, basePosition));
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
      if (this.gameState.checkContinue()) {
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
              _this.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_3__["default"](_this.ctx, meteor.position));

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

              _this.gameState.destroyBase();

              _this.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_3__["default"](_this.ctx, base.position));
            }
          });
        });
        this.missileArray.forEach(function (missile) {
          //check for explosion
          if (missile.checkExplosion(Object(_util__WEBPACK_IMPORTED_MODULE_5__["calculateDistance"])(missile.position, missile.destination))) {
            _this.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_3__["default"](_this.ctx, missile.position));

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
    }
  }, {
    key: "buildNewMeteors",
    value: function buildNewMeteors() {
      for (var i = 0; i < this.level * 2; i++) {
        var posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
        this.meteorArray.push(new _meteor__WEBPACK_IMPORTED_MODULE_0__["default"](posX, this.ctx));
      }
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/gameState.js":
/*!**********************************!*\
  !*** ./src/scripts/gameState.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gameState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameState =
/*#__PURE__*/
function () {
  function gameState() {
    _classCallCheck(this, gameState);

    this.bases = 3;
    this.missiles = 10;
    this.level = 1;
    this.basesDiv = document.getElementById("game-info-bases");
    this.missilesDiv = document.getElementById("game-info-missiles");
    this.levelDiv = document.getElementById("game-info-level");
    this.checkContinue = this.checkContinue.bind(this);
    this.destroyBase = this.destroyBase.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.updateDisplay();
  }

  _createClass(gameState, [{
    key: "updateDisplay",
    value: function updateDisplay() {
      this.levelDiv.innerText = "Level: ".concat(this.level);
      this.basesDiv.innerText = "Bases: ".concat(this.bases);
      this.missilesDiv.innerText = "Missiles: ".concat(this.missiles);
    }
  }, {
    key: "fireMissile",
    value: function fireMissile() {
      this.missiles -= 1;
      this.updateDisplay();
    }
  }, {
    key: "resetState",
    value: function resetState() {}
  }, {
    key: "destroyBase",
    value: function destroyBase() {
      this.bases -= 1;
    }
  }, {
    key: "checkContinue",
    value: function checkContinue() {
      if (this.bases > 0) return true;
      return false;
    }
  }]);

  return gameState;
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
    }; // this.drawPosition = {
    //   x: this.position.x - 10,
    //   y: this.position.y - 10
    // };

    this.speed = 7 * this.setSpeed();
    this.direction = this.setDirection();
    this.radius = 10;
    this.meteorImage = document.getElementById("meteor-1");
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
      // this.ctx.beginPath();    
      // this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      // this.ctx.fill();
      this.ctx.drawImage(this.meteorImage, this.position.x - 10, this.position.y - 10, 20, 20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ldGVvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9taXNzaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlNDUkVFTl9XSURUSCIsIlNDUkVFTl9IRUlHSFQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWUiLCJHYW1lIiwiaGFuZGxlQ2xpY2siLCJydW5HYW1lIiwiQmFzZSIsInBvc2l0aW9uIiwiYmFzZUltYWdlIiwiZHJhd1Bvc2l0aW9uIiwieCIsInkiLCJkcmF3V2lkdGgiLCJkcmF3SGVpZ2h0IiwicmFkaXVzIiwiZGVzdHJveWVkIiwiZHJhdyIsImJpbmQiLCJkZXN0cm95QmFzZSIsImRyYXdJbWFnZSIsIkV4cGxvc2lvbiIsInNpemUiLCJtYXhTaXplIiwiZ3Jvd3RoUmF0ZSIsInRpbWVyIiwiZXhwbG9zaW9uSW1hZ2VBcnJheSIsImltYWdlVG9EcmF3Iiwic3RhZ2UiLCJleHBsb3Npb25SYWRpdXMiLCJ1cGRhdGVFeHBsb3Npb24iLCJkdCIsImNvbnRleHQiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5XaWR0aCIsIm1ldGVvckFycmF5IiwiYmFzZUFycmF5IiwibWlzc2lsZUFycmF5IiwiZXhwbG9zaW9uQXJyYXkiLCJsYXN0VGltZSIsImxldmVsIiwiYmFja2dyb3VuZCIsImdhbWVTdGF0ZSIsIkdhbWVTdGF0ZSIsImdhbWVMb29wIiwiYnVpbGROZXdNZXRlb3JzIiwiZSIsIm1pc3NpbGVzIiwicG90ZW50aWFsQmFzZXMiLCJmaWx0ZXIiLCJiYXNlIiwiY2xvc2VzdEJhc2UiLCJkaWZmZXJlbmNlIiwiTWF0aCIsImFicyIsIm9mZnNldFgiLCJpIiwibGVuZ3RoIiwiZGVzdGluYXRpb24iLCJvZmZzZXRZIiwiZmlyZU1pc3NpbGUiLCJwdXNoIiwiTWlzc2lsZSIsInN0YXJ0aW5nTWV0ZW9ycyIsInN0YXJ0aW5nQmFzZXMiLCJwb3NYIiwiZmxvb3IiLCJyYW5kb20iLCJNZXRlb3IiLCJiYXNlUG9zaXRpb24iLCJ0aW1lc3RhbXAiLCJjaGVja0NvbnRpbnVlIiwiZWxhcHNlZEZyYW1lVGltZSIsImxldmVsTXVsdGlwbGllciIsImZvckVhY2giLCJtZXRlb3IiLCJzcGxpY2UiLCJpbmRleE9mIiwidXBkYXRlUG9zaXRpb24iLCJleHBsb3Npb24iLCJkaXN0YW5jZSIsImNhbGN1bGF0ZURpc3RhbmNlIiwibWlzc2lsZSIsImNoZWNrRXhwbG9zaW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmFzZXMiLCJiYXNlc0RpdiIsIm1pc3NpbGVzRGl2IiwibGV2ZWxEaXYiLCJ1cGRhdGVEaXNwbGF5IiwiaW5uZXJUZXh0Iiwic3BlZWQiLCJzZXRTcGVlZCIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsIm1ldGVvckltYWdlIiwidGhyb3R0bGVyIiwiZGVsdGFUaW1lIiwiY291cnNlIiwibWlzc2lsZUltYWdlIiwicG9zMSIsInBvczIiLCJ4RGlzdCIsInlEaXN0Iiwic3FydCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtDQUNBO0FBQ0E7O0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBSTtBQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUVBLE1BQU1DLFlBQVksR0FBRyxJQUFyQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxHQUF0QjtBQUNBSCxLQUFHLENBQUNGLE1BQUosQ0FBV00sS0FBWCxHQUFtQkYsWUFBbkI7QUFDQUYsS0FBRyxDQUFDRixNQUFKLENBQVdPLE1BQVgsR0FBb0JGLGFBQXBCO0FBRUEsTUFBSUcsSUFBSSxHQUFHLElBQUlDLHFEQUFKLENBQVNQLEdBQVQsRUFBY0UsWUFBZCxFQUE0QkMsYUFBNUIsQ0FBWDtBQUNBTCxRQUFNLENBQUNELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDUyxJQUFJLENBQUNFLFdBQXRDLEVBQW1ELEtBQW5EO0FBQ0FGLE1BQUksQ0FBQ0csT0FBTDtBQUNELENBWkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNMcUJDLEk7OztBQUNuQixnQkFBWVYsR0FBWixFQUFpQlcsUUFBakIsRUFBMEI7QUFBQTs7QUFDeEIsU0FBS1gsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS1ksU0FBTCxHQUFpQmhCLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixZQUF4QixDQUFqQixDQUZ3QixDQUl4Qjs7QUFDQSxTQUFLYyxZQUFMLEdBQW9CO0FBQ2xCQyxPQUFDLEVBQUVILFFBQVEsQ0FBQ0csQ0FETTtBQUVsQkMsT0FBQyxFQUFFSixRQUFRLENBQUNJO0FBRk0sS0FBcEI7QUFJQSxTQUFLSixRQUFMLEdBQWdCO0FBQ2RHLE9BQUMsRUFBRUgsUUFBUSxDQUFDRyxDQUFULEdBQVcsRUFEQTtBQUVkQyxPQUFDLEVBQUVKLFFBQVEsQ0FBQ0ksQ0FBVCxHQUFXO0FBRkEsS0FBaEIsQ0FUd0IsQ0FZckI7O0FBQ0gsU0FBS0MsU0FBTCxHQUFpQixLQUFLSixTQUFMLENBQWVSLEtBQWhDO0FBQ0EsU0FBS2EsVUFBTCxHQUFrQixLQUFLTCxTQUFMLENBQWVQLE1BQWpDLENBZHdCLENBZXhCOztBQUNBLFNBQUthLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUVBLFNBQUtDLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVDLElBQVYsQ0FBZSxJQUFmLENBQVo7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0Q7Ozs7a0NBRVk7QUFDWCxXQUFLRixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS1AsU0FBTCxHQUFpQmhCLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixnQkFBeEIsQ0FBakI7QUFDQSxXQUFLaUIsU0FBTCxHQUFpQixHQUFqQjtBQUNBLFdBQUtDLFVBQUwsR0FBa0IsR0FBbEI7QUFDQSxXQUFLSixZQUFMLENBQWtCQyxDQUFsQixJQUF1QixFQUF2QjtBQUNBLFdBQUtELFlBQUwsQ0FBa0JFLENBQWxCLElBQXFCLEVBQXJCO0FBQ0Q7OzsyQkFFSztBQUNKLFdBQUtmLEdBQUwsQ0FBU3VCLFNBQVQsQ0FDRSxLQUFLWCxTQURQLEVBRUUsS0FBS0MsWUFBTCxDQUFrQkMsQ0FGcEIsRUFHRSxLQUFLRCxZQUFMLENBQWtCRSxDQUhwQixFQUlFLEtBQUtDLFNBSlAsRUFLRSxLQUFLQyxVQUxQO0FBUUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDMUNrQk8sUzs7O0FBQ25CLHFCQUFZeEIsR0FBWixFQUFpQlcsUUFBakIsRUFBMEI7QUFBQTs7QUFDeEIsU0FBS0UsWUFBTCxHQUFvQjtBQUNsQkMsT0FBQyxFQUFFSCxRQUFRLENBQUNHLENBRE07QUFFbEJDLE9BQUMsRUFBRUosUUFBUSxDQUFDSTtBQUZNLEtBQXBCLENBRHdCLENBSXJCOztBQUNILFNBQUtKLFFBQUwsR0FBYztBQUNaRyxPQUFDLEVBQUNILFFBQVEsQ0FBQ0csQ0FEQztBQUVaQyxPQUFDLEVBQUNKLFFBQVEsQ0FBQ0k7QUFGQyxLQUFkO0FBS0EsU0FBS1UsSUFBTCxHQUFZLEVBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWUsR0FBZjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsQ0FBQyxLQUFLRCxPQUFMLEdBQWUsS0FBS0QsSUFBckIsSUFBNkIsQ0FBL0MsQ0Fad0IsQ0FheEI7O0FBRUEsU0FBS3pCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUs0QixLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLG1CQUFMLEdBQTJCLENBQUNqQyxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBRCxFQUN6QkgsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBRHlCLEVBRXpCSCxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FGeUIsRUFHekJILFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUh5QixDQUEzQjtBQUlBLFNBQUsrQixXQUFMLEdBQW1CLEtBQUtELG1CQUFMLENBQXlCLENBQXpCLENBQW5CO0FBQ0EsU0FBS0UsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEVBQXZCO0FBRUEsU0FBS1osSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBWjtBQUNBLFNBQUtZLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQlosSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDRDs7OztvQ0FFZWEsRSxFQUFHO0FBQ2pCQSxRQUFFLEdBQUdBLEVBQUUsR0FBQyxJQUFSO0FBQ0EsV0FBS04sS0FBTCxJQUFZTSxFQUFaOztBQUNBLFVBQUksS0FBS04sS0FBTCxJQUFjLEdBQWxCLEVBQXNCO0FBQ3BCLGFBQUtHLEtBQUw7QUFFQSxhQUFLSCxLQUFMLEdBQVksQ0FBWjtBQUNEOztBQUNELFVBQUksS0FBS0csS0FBTCxHQUFhLENBQWpCLEVBQW1CO0FBQ2pCLGFBQUtsQixZQUFMLENBQWtCQyxDQUFsQixHQUFzQixLQUFLSCxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS1csSUFBTCxHQUFVLENBQWxEO0FBQ0EsYUFBS1osWUFBTCxDQUFrQkUsQ0FBbEIsR0FBc0IsS0FBS0osUUFBTCxDQUFjSSxDQUFkLEdBQWtCLEtBQUtVLElBQUwsR0FBVSxDQUFsRDtBQUNBLGFBQUtMLElBQUw7QUFDQSxhQUFLSyxJQUFMLElBQWEsS0FBS0UsVUFBTCxHQUFrQk8sRUFBL0I7QUFDRDtBQUVGOzs7MkJBRUs7QUFDSixXQUFLbEMsR0FBTCxDQUFTdUIsU0FBVCxDQUNFLEtBQUtNLG1CQUFMLENBQXlCLEtBQUtFLEtBQTlCLENBREYsRUFFRSxLQUFLbEIsWUFBTCxDQUFrQkMsQ0FGcEIsRUFHRSxLQUFLRCxZQUFMLENBQWtCRSxDQUhwQixFQUlFLEtBQUtVLElBSlAsRUFJYSxLQUFLQSxJQUpsQjtBQU1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RESDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCbEIsSTs7O0FBQ25CLGdCQUFZNEIsT0FBWixFQUFxQi9CLEtBQXJCLEVBQTRCQyxNQUE1QixFQUFtQztBQUFBOztBQUNqQyxTQUFLTCxHQUFMLEdBQVdtQyxPQUFYO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQi9CLE1BQXBCO0FBQ0EsU0FBS2dDLFdBQUwsR0FBbUJqQyxLQUFuQjtBQUVBLFNBQUtrQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEVBQXRCLENBUmlDLENBVWpDOztBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLZCxLQUFMLEdBQWEsQ0FBYixDQWJpQyxDQWFqQjs7QUFDaEIsU0FBS2UsS0FBTCxHQUFhLENBQWIsQ0FkaUMsQ0FjakI7O0FBQ2hCLFNBQUtDLFVBQUwsR0FBa0JoRCxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbEI7QUFDQSxTQUFLOEMsU0FBTCxHQUFpQixJQUFJQyxrREFBSixFQUFqQjtBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjMUIsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtaLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFZLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLFNBQUtiLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQmEsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLMkIsZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCM0IsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDRDs7OztnQ0FFVzRCLEMsRUFBRTtBQUVaO0FBQ0E7QUFDQTtBQUVBLFVBQUksS0FBS0osU0FBTCxDQUFlSyxRQUFmLEdBQTBCLENBQTlCLEVBQWdDO0FBQzlCLFlBQUlDLGNBQWMsR0FBRyxLQUFLWixTQUFMLENBQWVhLE1BQWYsQ0FBc0IsVUFBQUMsSUFBSSxFQUFJO0FBQUMsaUJBQU8sQ0FBQ0EsSUFBSSxDQUFDbEMsU0FBYjtBQUF3QixTQUF2RCxDQUFyQjtBQUNBLFlBQUltQyxXQUFXLEdBQUdILGNBQWMsQ0FBQyxDQUFELENBQWhDO0FBQ0EsWUFBSUksVUFBVSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU1IsQ0FBQyxDQUFDUyxPQUFGLEdBQVlKLFdBQVcsQ0FBQzNDLFFBQVosQ0FBcUJHLENBQTFDLENBQWpCOztBQUNBLGFBQUssSUFBSTZDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdSLGNBQWMsQ0FBQ1MsTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMsY0FBSUgsSUFBSSxDQUFDQyxHQUFMLENBQVNSLENBQUMsQ0FBQ1MsT0FBRixHQUFZUCxjQUFjLENBQUNRLENBQUQsQ0FBZCxDQUFrQmhELFFBQWxCLENBQTJCRyxDQUFoRCxJQUFxRHlDLFVBQXpELEVBQXFFO0FBQ25FRCx1QkFBVyxHQUFHSCxjQUFjLENBQUNRLENBQUQsQ0FBNUI7QUFDQUosc0JBQVUsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNSLENBQUMsQ0FBQ1MsT0FBRixHQUFZSixXQUFXLENBQUMzQyxRQUFaLENBQXFCRyxDQUExQyxDQUFiO0FBQ0Q7QUFDRjs7QUFDRCxZQUFJK0MsV0FBVyxHQUFHO0FBQ2hCL0MsV0FBQyxFQUFFbUMsQ0FBQyxDQUFDUyxPQURXO0FBRWhCM0MsV0FBQyxFQUFFa0MsQ0FBQyxDQUFDYTtBQUZXLFNBQWxCO0FBSUEsYUFBS2pCLFNBQUwsQ0FBZWtCLFdBQWY7QUFDQSxhQUFLdkIsWUFBTCxDQUFrQndCLElBQWxCLENBQXVCLElBQUlDLGdEQUFKLENBQVlKLFdBQVosRUFBMEJQLFdBQVcsQ0FBQzNDLFFBQXRDLEVBQWlELEtBQUtYLEdBQXRELENBQXZCO0FBQ0Q7QUFDRjs7OzhCQUVRO0FBQ1A7QUFDQTtBQUNBLFVBQUlrRSxlQUFlLEdBQUcsRUFBdEI7QUFDQSxVQUFJQyxhQUFhLEdBQUcsQ0FBcEIsQ0FKTyxDQUtQOztBQUNBLFdBQUssSUFBSVIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR08sZUFBcEIsRUFBcUNQLENBQUMsRUFBdEMsRUFBeUM7QUFDdkMsWUFBSVMsSUFBSSxHQUFHWixJQUFJLENBQUNhLEtBQUwsQ0FBV2IsSUFBSSxDQUFDYyxNQUFMLEtBQWdCZCxJQUFJLENBQUNhLEtBQUwsQ0FBVyxLQUFLaEMsV0FBaEIsQ0FBM0IsQ0FBWDtBQUNBLGFBQUtDLFdBQUwsQ0FBaUIwQixJQUFqQixDQUFzQixJQUFJTywrQ0FBSixDQUFXSCxJQUFYLEVBQWlCLEtBQUtwRSxHQUF0QixDQUF0QjtBQUNELE9BVE0sQ0FVUDs7O0FBQ0EsVUFBSXdFLFlBQVksR0FBRztBQUNqQjFELFNBQUMsRUFBRSxHQURjO0FBRWpCQyxTQUFDLEVBQUUsS0FBS3FCLFlBQUwsR0FBb0I7QUFGTixPQUFuQjs7QUFLQSxXQUFLLElBQUl1QixFQUFDLEdBQUUsQ0FBWixFQUFlQSxFQUFDLEdBQUdRLGFBQW5CLEVBQWtDUixFQUFDLEVBQW5DLEVBQXNDO0FBQ3BDLGFBQUtwQixTQUFMLENBQWV5QixJQUFmLENBQW9CLElBQUl0RCw2Q0FBSixDQUFTLEtBQUtWLEdBQWQsRUFBbUJ3RSxZQUFuQixDQUFwQjtBQUNBQSxvQkFBWSxDQUFDMUQsQ0FBYixJQUFrQixLQUFLdUIsV0FBTCxHQUFpQixDQUFuQztBQUNEOztBQUNELFdBQUtVLFFBQUwsQ0FBYyxDQUFkO0FBQ0Q7Ozs2QkFFUTBCLFMsRUFBVTtBQUFBOztBQUNqQjtBQUVFO0FBQ0E7QUFDQTtBQUNBO0FBRUY7QUFDQSxVQUFJLEtBQUs1QixTQUFMLENBQWU2QixhQUFmLEVBQUosRUFBbUM7QUFDakMsWUFBSUMsZ0JBQWdCLEdBQUdGLFNBQVMsR0FBRyxLQUFLL0IsUUFBeEM7QUFDQSxhQUFLQSxRQUFMLEdBQWdCK0IsU0FBaEI7QUFDQSxhQUFLN0MsS0FBTCxJQUFjK0MsZ0JBQWdCLEdBQUcsSUFBakM7QUFFQSxZQUFNQyxlQUFlLEdBQUcsR0FBeEI7O0FBRUEsWUFBSSxLQUFLaEQsS0FBTCxJQUFjLEdBQWxCLEVBQXVCO0FBQ3JCLGVBQUtvQixlQUFMO0FBQ0EsZUFBS3BCLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7O0FBRUQsYUFBSzVCLEdBQUwsQ0FBU3VCLFNBQVQsQ0FBbUJxQixVQUFuQixFQUErQixDQUEvQixFQUFrQyxDQUFsQztBQUVBLGFBQUtOLFdBQUwsQ0FBaUJ1QyxPQUFqQixDQUF5QixVQUFBQyxNQUFNLEVBQUk7QUFDakM7QUFDQSxjQUFJQSxNQUFNLENBQUNuRSxRQUFQLENBQWdCSSxDQUFoQixJQUFxQixLQUFJLENBQUNxQixZQUE5QixFQUE0QztBQUMxQyxpQkFBSSxDQUFDRSxXQUFMLENBQWlCeUMsTUFBakIsQ0FBd0IsS0FBSSxDQUFDekMsV0FBTCxDQUFpQjBDLE9BQWpCLENBQXlCRixNQUF6QixDQUF4QixFQUEwRCxDQUExRDtBQUNELFdBRkQsTUFFTztBQUNMQSxrQkFBTSxDQUFDRyxjQUFQLENBQXNCTCxlQUF0QixFQUF1Q0QsZ0JBQWdCLEdBQUcsR0FBMUQ7QUFDRCxXQU5nQyxDQU9qQzs7O0FBQ0EsZUFBSSxDQUFDbEMsY0FBTCxDQUFvQm9DLE9BQXBCLENBQTRCLFVBQUFLLFNBQVMsRUFBSTtBQUN2QyxnQkFBSUMsUUFBUSxHQUFHQywrREFBaUIsQ0FBQ0YsU0FBUyxDQUFDdkUsUUFBWCxFQUFxQm1FLE1BQU0sQ0FBQ25FLFFBQTVCLENBQWhDLENBRHVDLENBRXZDOztBQUNBLGdCQUFJd0UsUUFBUSxJQUFJRCxTQUFTLENBQUNsRCxlQUFWLEdBQTRCOEMsTUFBTSxDQUFDNUQsTUFBbkQsRUFBMkQ7QUFDekQsbUJBQUksQ0FBQ3VCLGNBQUwsQ0FBb0J1QixJQUFwQixDQUF5QixJQUFJeEMsa0RBQUosQ0FBYyxLQUFJLENBQUN4QixHQUFuQixFQUF3QjhFLE1BQU0sQ0FBQ25FLFFBQS9CLENBQXpCOztBQUNBLG1CQUFJLENBQUMyQixXQUFMLENBQWlCeUMsTUFBakIsQ0FBd0IsS0FBSSxDQUFDekMsV0FBTCxDQUFpQjBDLE9BQWpCLENBQXlCRixNQUF6QixDQUF4QixFQUEwRCxDQUExRDs7QUFDQTtBQUNEO0FBQ0YsV0FSRDs7QUFVQSxlQUFJLENBQUN2QyxTQUFMLENBQWVzQyxPQUFmLENBQXVCLFVBQUF4QixJQUFJLEVBQUk7QUFDN0JBLGdCQUFJLENBQUNqQyxJQUFMOztBQUNBLGdCQUFJaUMsSUFBSSxDQUFDbEMsU0FBVCxFQUFvQjtBQUNsQjtBQUNEOztBQUVELGdCQUFJZ0UsUUFBUSxHQUFHQywrREFBaUIsQ0FBQ04sTUFBTSxDQUFDbkUsUUFBUixFQUFrQjBDLElBQUksQ0FBQzFDLFFBQXZCLENBQWhDOztBQUNBLGdCQUFJd0UsUUFBUSxJQUFJOUIsSUFBSSxDQUFDbkMsTUFBTCxHQUFjNEQsTUFBTSxDQUFDNUQsTUFBckMsRUFBNkM7QUFDM0NtQyxrQkFBSSxDQUFDL0IsV0FBTDs7QUFDQSxtQkFBSSxDQUFDdUIsU0FBTCxDQUFldkIsV0FBZjs7QUFDQSxtQkFBSSxDQUFDbUIsY0FBTCxDQUFvQnVCLElBQXBCLENBQXlCLElBQUl4QyxrREFBSixDQUFjLEtBQUksQ0FBQ3hCLEdBQW5CLEVBQXdCcUQsSUFBSSxDQUFDMUMsUUFBN0IsQ0FBekI7QUFDRDtBQUNGLFdBWkQ7QUFhRCxTQS9CRDtBQWlDQSxhQUFLNkIsWUFBTCxDQUFrQnFDLE9BQWxCLENBQTBCLFVBQUFRLE9BQU8sRUFBSTtBQUNuQztBQUNBLGNBQUlBLE9BQU8sQ0FBQ0MsY0FBUixDQUF1QkYsK0RBQWlCLENBQUNDLE9BQU8sQ0FBQzFFLFFBQVQsRUFBbUIwRSxPQUFPLENBQUN4QixXQUEzQixDQUF4QyxDQUFKLEVBQXNGO0FBQ3BGLGlCQUFJLENBQUNwQixjQUFMLENBQW9CdUIsSUFBcEIsQ0FBeUIsSUFBSXhDLGtEQUFKLENBQWMsS0FBSSxDQUFDeEIsR0FBbkIsRUFBd0JxRixPQUFPLENBQUMxRSxRQUFoQyxDQUF6Qjs7QUFDQSxpQkFBSSxDQUFDNkIsWUFBTCxDQUFrQnVDLE1BQWxCLENBQXlCLEtBQUksQ0FBQ3ZDLFlBQUwsQ0FBa0J3QyxPQUFsQixDQUEwQkssT0FBMUIsQ0FBekIsRUFBNkQsQ0FBN0Q7QUFDRCxXQUhELE1BR087QUFDTEEsbUJBQU8sQ0FBQ0osY0FBUixDQUF3Qk4sZ0JBQWdCLEdBQUcsSUFBM0M7QUFDRDtBQUNGLFNBUkQ7QUFVQSxhQUFLbEMsY0FBTCxDQUFvQm9DLE9BQXBCLENBQTRCLFVBQUFLLFNBQVMsRUFBSTtBQUN2QyxjQUFJQSxTQUFTLENBQUNuRCxLQUFWLElBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLGlCQUFJLENBQUNVLGNBQUwsQ0FBb0JzQyxNQUFwQixDQUEyQixLQUFJLENBQUN0QyxjQUFMLENBQW9CdUMsT0FBcEIsQ0FBNEJFLFNBQTVCLENBQTNCLEVBQW1FLENBQW5FO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLHFCQUFTLENBQUNqRCxlQUFWLENBQTBCMEMsZ0JBQTFCO0FBQ0Q7QUFDRixTQU5EO0FBUUFZLDZCQUFxQixDQUFDLEtBQUt4QyxRQUFOLENBQXJCO0FBQ0Q7QUFDRjs7O3NDQUVpQjtBQUNoQixXQUFJLElBQUlZLENBQUMsR0FBRSxDQUFYLEVBQWNBLENBQUMsR0FBRyxLQUFLaEIsS0FBTCxHQUFhLENBQS9CLEVBQWtDZ0IsQ0FBQyxFQUFuQyxFQUFzQztBQUNwQyxZQUFJUyxJQUFJLEdBQUdaLElBQUksQ0FBQ2EsS0FBTCxDQUFXYixJQUFJLENBQUNjLE1BQUwsS0FBZ0JkLElBQUksQ0FBQ2EsS0FBTCxDQUFXLEtBQUtoQyxXQUFoQixDQUEzQixDQUFYO0FBQ0EsYUFBS0MsV0FBTCxDQUFpQjBCLElBQWpCLENBQXNCLElBQUlPLCtDQUFKLENBQVdILElBQVgsRUFBaUIsS0FBS3BFLEdBQXRCLENBQXRCO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuS2tCNkMsUzs7O0FBQ25CLHVCQUFhO0FBQUE7O0FBQ1gsU0FBSzJDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS3RDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLUCxLQUFMLEdBQWEsQ0FBYjtBQUVBLFNBQUs4QyxRQUFMLEdBQWdCN0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGlCQUF4QixDQUFoQjtBQUNBLFNBQUsyRixXQUFMLEdBQW1COUYsUUFBUSxDQUFDRyxjQUFULENBQXdCLG9CQUF4QixDQUFuQjtBQUNBLFNBQUs0RixRQUFMLEdBQWdCL0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGlCQUF4QixDQUFoQjtBQUVBLFNBQUsyRSxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJyRCxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLdUUsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CdkUsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFFQSxTQUFLdUUsYUFBTDtBQUNEOzs7O29DQUVjO0FBQ2IsV0FBS0QsUUFBTCxDQUFjRSxTQUFkLG9CQUFvQyxLQUFLbEQsS0FBekM7QUFDQSxXQUFLOEMsUUFBTCxDQUFjSSxTQUFkLG9CQUFvQyxLQUFLTCxLQUF6QztBQUNBLFdBQUtFLFdBQUwsQ0FBaUJHLFNBQWpCLHVCQUEwQyxLQUFLM0MsUUFBL0M7QUFDRDs7O2tDQUVZO0FBQ1gsV0FBS0EsUUFBTCxJQUFpQixDQUFqQjtBQUNBLFdBQUswQyxhQUFMO0FBQ0Q7OztpQ0FFVyxDQUVYOzs7a0NBRVk7QUFDWCxXQUFLSixLQUFMLElBQWMsQ0FBZDtBQUNEOzs7b0NBRWM7QUFDYixVQUFJLEtBQUtBLEtBQUwsR0FBWSxDQUFoQixFQUFvQixPQUFPLElBQVA7QUFDcEIsYUFBTyxLQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdkNrQmpCLE07OztBQUNuQixrQkFBWUgsSUFBWixFQUFrQnBFLEdBQWxCLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtXLFFBQUwsR0FBZ0I7QUFDZEcsT0FBQyxFQUFFc0QsSUFEVztBQUVkckQsT0FBQyxFQUFFLENBQUM7QUFGVSxLQUFoQixDQUZvQixDQU1wQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFLK0UsS0FBTCxHQUFhLElBQUksS0FBS0MsUUFBTCxFQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0MsWUFBTCxFQUFqQjtBQUNBLFNBQUsvRSxNQUFMLEdBQWMsRUFBZDtBQUVBLFNBQUtnRixXQUFMLEdBQW1CdEcsUUFBUSxDQUFDRyxjQUFULENBQXdCLFVBQXhCLENBQW5CO0FBRUEsU0FBS2tGLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQjVELElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0EsU0FBS0QsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBWjtBQUNEOzs7OytCQUVTO0FBQ1I7QUFDQSxVQUFJOEUsU0FBUyxHQUFHM0MsSUFBSSxDQUFDYyxNQUFMLEVBQWhCO0FBQ0EsVUFBSTZCLFNBQVMsSUFBSSxJQUFqQixFQUF1QixPQUFPLElBQVA7QUFDdkIsVUFBSUEsU0FBUyxJQUFJLElBQWpCLEVBQXVCLE9BQU8sSUFBUDtBQUN2QixhQUFPLENBQVA7QUFDRDs7O21DQUVhO0FBQ1o7QUFDQSxVQUFJckYsQ0FBQyxHQUFHMEMsSUFBSSxDQUFDYyxNQUFMLEVBQVI7QUFDQSxVQUFJeEQsQ0FBQyxHQUFHLEdBQVIsRUFBYUEsQ0FBQyxJQUFJLENBQUMsQ0FBTjtBQUNiLGFBQU9BLENBQVA7QUFDRDs7O21DQUVjOEQsZSxFQUFpQndCLFMsRUFBVTtBQUN4QyxXQUFLekYsUUFBTCxDQUFjRyxDQUFkLElBQW1CLEtBQUtrRixTQUF4QjtBQUNBLFdBQUtyRixRQUFMLENBQWNJLENBQWQsSUFBb0I2RCxlQUFlLEdBQUcsS0FBS2tCLEtBQXZCLEdBQStCTSxTQUFuRDtBQUNBLFdBQUtoRixJQUFMO0FBQ0Q7OzsyQkFHSztBQUNKO0FBQ0E7QUFDQTtBQUNBLFdBQUtwQixHQUFMLENBQVN1QixTQUFULENBQ0UsS0FBSzJFLFdBRFAsRUFFRSxLQUFLdkYsUUFBTCxDQUFjRyxDQUFkLEdBQWdCLEVBRmxCLEVBR0UsS0FBS0gsUUFBTCxDQUFjSSxDQUFkLEdBQWdCLEVBSGxCLEVBSUUsRUFKRixFQUtFLEVBTEY7QUFPRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0RGtCa0QsTzs7O0FBQ25CLG1CQUFZSixXQUFaLEVBQXlCbEQsUUFBekIsRUFBbUNYLEdBQW5DLEVBQXVDO0FBQUE7O0FBQ3JDLFNBQUs2RCxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtsRCxRQUFMLEdBQWdCO0FBQ2RHLE9BQUMsRUFBRUgsUUFBUSxDQUFDRyxDQUFULEdBQWEsRUFERjtBQUVkQyxPQUFDLEVBQUVKLFFBQVEsQ0FBQ0ksQ0FBVCxHQUFhO0FBRkYsS0FBaEI7QUFLQSxTQUFLc0YsTUFBTCxHQUFjO0FBQ1p2RixPQUFDLEVBQUcsS0FBSytDLFdBQUwsQ0FBaUIvQyxDQUFqQixHQUFxQixLQUFLSCxRQUFMLENBQWNHLENBRDNCO0FBRVpDLE9BQUMsRUFBRyxLQUFLOEMsV0FBTCxDQUFpQjlDLENBQWpCLEdBQXFCLEtBQUtKLFFBQUwsQ0FBY0k7QUFGM0IsS0FBZDtBQUlBLFNBQUsrRSxLQUFMLEdBQWEsR0FBYjtBQUNBLFNBQUs1RSxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtjLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxTQUFLaEMsR0FBTCxHQUFXQSxHQUFYO0FBRUEsU0FBS3NHLFlBQUwsR0FBb0IxRyxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXBCO0FBQ0EsU0FBS3FCLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVDLElBQVYsQ0FBZSxJQUFmLENBQVo7QUFDQSxTQUFLNEQsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CNUQsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEIsQ0FsQnFDLENBbUJyQzs7QUFDQSxTQUFLaUUsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CakUsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDRDs7OzttQ0FFYzhELFEsRUFBUztBQUN0QjtBQUNBLFVBQUlBLFFBQVEsSUFBSSxLQUFLbkQsZUFBckIsRUFBc0MsT0FBTyxJQUFQO0FBQ3RDLGFBQU8sS0FBUDtBQUNELEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O21DQUVlRSxFLEVBQUc7QUFDaEIsV0FBS3ZCLFFBQUwsQ0FBY0csQ0FBZCxJQUFvQixLQUFLdUYsTUFBTCxDQUFZdkYsQ0FBWixHQUFnQixLQUFLZ0YsS0FBdEIsR0FBK0I1RCxFQUFsRDtBQUNBLFdBQUt2QixRQUFMLENBQWNJLENBQWQsSUFBb0IsS0FBS3NGLE1BQUwsQ0FBWXRGLENBQVosR0FBZ0IsS0FBSytFLEtBQXRCLEdBQStCNUQsRUFBbEQ7QUFDQSxXQUFLZCxJQUFMO0FBQ0Q7OzsyQkFFSztBQUNKO0FBQ0EsV0FBS3BCLEdBQUwsQ0FBU3VCLFNBQVQsQ0FDRSxLQUFLK0UsWUFEUCxFQUVFLEtBQUszRixRQUFMLENBQWNHLENBRmhCLEVBR0UsS0FBS0gsUUFBTCxDQUFjSSxDQUhoQjtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREg7QUFBQTtBQUFPLElBQU1xRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNtQixJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDL0M7QUFDQSxNQUFJQyxLQUFLLEdBQUdqRCxJQUFJLENBQUNDLEdBQUwsQ0FBUzhDLElBQUksQ0FBQ3pGLENBQUwsR0FBUzBGLElBQUksQ0FBQzFGLENBQXZCLENBQVo7QUFDQSxNQUFJNEYsS0FBSyxHQUFHbEQsSUFBSSxDQUFDQyxHQUFMLENBQVM4QyxJQUFJLENBQUN4RixDQUFMLEdBQVN5RixJQUFJLENBQUN6RixDQUF2QixDQUFaO0FBQ0EsU0FBT3lDLElBQUksQ0FBQ21ELElBQUwsQ0FBV0YsS0FBSyxHQUFHQSxLQUFULEdBQW1CQyxLQUFLLEdBQUdBLEtBQXJDLENBQVA7QUFDRCxDQUxNLEMsQ0FPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7O0FDWEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuLy9jb25zdCBBcHAgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2FwcC5qc1wiKTtcbi8vIGNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWUuanNcIik7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTsgIFxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGNvbnN0IFNDUkVFTl9XSURUSCA9IDEyMDA7XG4gIGNvbnN0IFNDUkVFTl9IRUlHSFQgPSA4MDA7XG4gIGN0eC5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEg7XG4gIGN0eC5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVDtcblxuICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgU0NSRUVOX1dJRFRILCBTQ1JFRU5fSEVJR0hUKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lLmhhbmRsZUNsaWNrLCBmYWxzZSk7XG4gIGdhbWUucnVuR2FtZSgpO1xufSk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZXtcbiAgY29uc3RydWN0b3IoY3R4LCBwb3NpdGlvbil7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5iYXNlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2UtaW1hZ2VcIik7XG4gICAgXG4gICAgLy90aGlzLmRlc3Ryb3llZEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXN0cm95ZWQtYmFzZVwiKTtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICB5OiBwb3NpdGlvbi55XG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCsyMSxcbiAgICAgIHk6IHBvc2l0aW9uLnkrNTBcbiAgICB9OyAvL21hZ2ljIG51bWJlcnMgZm9yIHdpZHRoIGFuZCBoZWlnaHQgYWRqdXN0aW5nXG4gICAgdGhpcy5kcmF3V2lkdGggPSB0aGlzLmJhc2VJbWFnZS53aWR0aDtcbiAgICB0aGlzLmRyYXdIZWlnaHQgPSB0aGlzLmJhc2VJbWFnZS5oZWlnaHQ7XG4gICAgLy9kZWJ1Z2dlcjtcbiAgICB0aGlzLnJhZGl1cyA9IDQwO1xuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3lCYXNlID0gdGhpcy5kZXN0cm95QmFzZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZGVzdHJveUJhc2UoKXtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5iYXNlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3Ryb3llZC1iYXNlXCIpO1xuICAgIHRoaXMuZHJhd1dpZHRoID0gMTAwO1xuICAgIHRoaXMuZHJhd0hlaWdodCA9IDEwMDtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbi54IC09IDIwO1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnkrPTQwO1xuICB9XG5cbiAgZHJhdygpeyBcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmJhc2VJbWFnZSwgXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54LCBcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnksXG4gICAgICB0aGlzLmRyYXdXaWR0aCxcbiAgICAgIHRoaXMuZHJhd0hlaWdodFxuXG4gICAgICApO1xuICB9XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvc2lvbntcbiAgY29uc3RydWN0b3IoY3R4LCBwb3NpdGlvbil7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgeTogcG9zaXRpb24ueVxuICAgIH07IC8vNTAgaXMgbWFnaWMgbnVtYmVyIGNlbnRlclxuICAgIHRoaXMucG9zaXRpb249e1xuICAgICAgeDpwb3NpdGlvbi54LFxuICAgICAgeTpwb3NpdGlvbi55XG4gICAgfTtcblxuICAgIHRoaXMuc2l6ZSA9IDUwO1xuICAgIHRoaXMubWF4U2l6ZSA9IDEzMDtcbiAgICB0aGlzLmdyb3d0aFJhdGUgPSAodGhpcy5tYXhTaXplIC0gdGhpcy5zaXplKSAvIDQ7XG4gICAgLy9jYWxjdWxhdGlvbiBmb3IgaG93IGZhc3QgdG8gZ3Jvd1xuXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy50aW1lciA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5ID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTFcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0yXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tM1wiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTRcIildO1xuICAgIHRoaXMuaW1hZ2VUb0RyYXcgPSB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXlbMF07XG4gICAgdGhpcy5zdGFnZSA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSA2MzsgXG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUV4cGxvc2lvbiA9IHRoaXMudXBkYXRlRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVFeHBsb3Npb24oZHQpe1xuICAgIGR0ID0gZHQvMTAwMDtcbiAgICB0aGlzLnRpbWVyKz1kdDtcbiAgICBpZiAodGhpcy50aW1lciA+PSAwLjgpe1xuICAgICAgdGhpcy5zdGFnZSsrO1xuXG4gICAgICB0aGlzLnRpbWVyID0wO1xuICAgIH0gICAgXG4gICAgaWYgKHRoaXMuc3RhZ2UgPCA0KXtcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnggPSB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnNpemUvMjtcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNpemUvMjtcbiAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgdGhpcy5zaXplICs9IHRoaXMuZ3Jvd3RoUmF0ZSAqIGR0OyAgICAgIFxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXlbdGhpcy5zdGFnZV0sXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54LFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2l6ZSwgdGhpcy5zaXplXG4gICAgKTtcbiAgfVxufSIsImltcG9ydCBNZXRlb3IgZnJvbSBcIi4vbWV0ZW9yXCI7XG5pbXBvcnQgTWlzc2lsZSBmcm9tIFwiLi9taXNzaWxlXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQgRXhwbG9zaW9uIGZyb20gXCIuL2V4cGxvc2lvblwiO1xuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9nYW1lU3RhdGVcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZURpc3RhbmNlIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1le1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KXtcbiAgICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5zY3JlZW5XaWR0aCA9IHdpZHRoOyBcblxuICAgIHRoaXMubWV0ZW9yQXJyYXkgPSBbXTtcbiAgICB0aGlzLmJhc2VBcnJheSA9IFtdO1xuICAgIHRoaXMubWlzc2lsZUFycmF5ID0gW107XG4gICAgdGhpcy5leHBsb3Npb25BcnJheSA9IFtdO1xuXG4gICAgLy90aGlzLm1pc3NpbGVDb3VudCA9IDEwO1xuXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMTsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKCk7XG5cbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucnVuR2FtZSA9IHRoaXMucnVuR2FtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5idWlsZE5ld01ldGVvcnMgPSB0aGlzLmJ1aWxkTmV3TWV0ZW9ycy5iaW5kKHRoaXMpOyAgXG4gIH1cblxuICBoYW5kbGVDbGljayhlKXsgXG4gICAgXG4gICAgLy9jaGVjayBmb3IgbWlzc2lsZSBjb3VudFxuICAgIC8vZmluZCBjbG9zZXN0IGJhc2UgdG8gY2xpY2tcbiAgICAvL3NwYXduIG1pc3NpbGUgYXQgYmFzZSBoZWFkaW5nIHRvd2FyZHMgY2xpY2sgICAgXG4gICAgXG4gICAgaWYgKHRoaXMuZ2FtZVN0YXRlLm1pc3NpbGVzID4gMCl7XG4gICAgICBsZXQgcG90ZW50aWFsQmFzZXMgPSB0aGlzLmJhc2VBcnJheS5maWx0ZXIoYmFzZSA9PiB7cmV0dXJuICFiYXNlLmRlc3Ryb3llZDt9KTtcbiAgICAgIGxldCBjbG9zZXN0QmFzZSA9IHBvdGVudGlhbEJhc2VzWzBdO1xuICAgICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG90ZW50aWFsQmFzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGUub2Zmc2V0WCAtIHBvdGVudGlhbEJhc2VzW2ldLnBvc2l0aW9uLngpIDwgZGlmZmVyZW5jZSkge1xuICAgICAgICAgIGNsb3Nlc3RCYXNlID0gcG90ZW50aWFsQmFzZXNbaV07XG4gICAgICAgICAgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnBvc2l0aW9uLngpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZGVzdGluYXRpb24gPSB7XG4gICAgICAgIHg6IGUub2Zmc2V0WCxcbiAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICB9O1xuICAgICAgdGhpcy5nYW1lU3RhdGUuZmlyZU1pc3NpbGUoKTtcbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LnB1c2gobmV3IE1pc3NpbGUoZGVzdGluYXRpb24sIChjbG9zZXN0QmFzZS5wb3NpdGlvbiksIHRoaXMuY3R4KSk7XG4gICAgfSAgICAgXG4gIH1cblxuICBydW5HYW1lKCl7XG4gICAgLy9pbml0aWFsIHNldHVwIGxvZ2ljXG4gICAgLy90aGVuLCBzdGFydCBnYW1lTG9vcFxuICAgIGxldCBzdGFydGluZ01ldGVvcnMgPSAxMDtcbiAgICBsZXQgc3RhcnRpbmdCYXNlcyA9IDM7XG4gICAgLy9zZXR1cCBtZXRlb3JzID8/P21lcmdlIHdpdGggYnVpbGRNZXRlb3JzPz8/P1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRpbmdNZXRlb3JzOyBpKyspe1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIC8vc2V0dXAgYmFzZXNcbiAgICBsZXQgYmFzZVBvc2l0aW9uID0ge1xuICAgICAgeDogMTUwLFxuICAgICAgeTogdGhpcy5zY3JlZW5IZWlnaHQgLSAxMDBcbiAgICB9O1xuICAgIFxuICAgIGZvciAobGV0IGkgPTA7IGkgPCBzdGFydGluZ0Jhc2VzOyBpKyspeyAgICAgIFxuICAgICAgdGhpcy5iYXNlQXJyYXkucHVzaChuZXcgQmFzZSh0aGlzLmN0eCwgYmFzZVBvc2l0aW9uKSk7ICAgICAgXG4gICAgICBiYXNlUG9zaXRpb24ueCArPSB0aGlzLnNjcmVlbldpZHRoLzM7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUxvb3AoMCk7XG4gIH1cblxuICBnYW1lTG9vcCh0aW1lc3RhbXApeyAgICBcbiAgICAvL3doaWxlIG5vdCBsb3N0XG5cbiAgICAgIC8vdXBkYXRlIG1ldGVvcmFycmF5XG4gICAgICAvL3JlZHJhdyBtZXRlb3JzXG4gICAgICAvL2xpc3RlbiBmb3IgY2xpY2tzXG4gICAgICAvL3JlcGVhdFxuXG4gICAgLy9cbiAgICBpZiAodGhpcy5nYW1lU3RhdGUuY2hlY2tDb250aW51ZSgpKXtcbiAgICAgIGxldCBlbGFwc2VkRnJhbWVUaW1lID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICB0aGlzLnRpbWVyICs9IGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwO1xuXG4gICAgICBjb25zdCBsZXZlbE11bHRpcGxpZXIgPSAxLjA7XG5cbiAgICAgIGlmICh0aGlzLnRpbWVyID49IDMuMCkge1xuICAgICAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycygpO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDApO1xuXG4gICAgICB0aGlzLm1ldGVvckFycmF5LmZvckVhY2gobWV0ZW9yID0+IHtcbiAgICAgICAgLy9maXJzdCwgbW92ZSB0aGUgbWV0ZW9yXG4gICAgICAgIGlmIChtZXRlb3IucG9zaXRpb24ueSA+PSB0aGlzLnNjcmVlbkhlaWdodCkge1xuICAgICAgICAgIHRoaXMubWV0ZW9yQXJyYXkuc3BsaWNlKHRoaXMubWV0ZW9yQXJyYXkuaW5kZXhPZihtZXRlb3IpLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXRlb3IudXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBlbGFwc2VkRnJhbWVUaW1lIC8gMTAwKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NoZWNrIHBvcyBvZiBtZXRlb3IgYWdhaW5zdCBleHBsb3Npb25zLCBhbmQgZ3JvdW5kIFxuICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShleHBsb3Npb24ucG9zaXRpb24sIG1ldGVvci5wb3NpdGlvbik7XG4gICAgICAgICAgLy8gaWYgbWV0ZW9yIGluIHJhZGl1cywgZGVzdHJveSBpdCBhbmQgY3JlYXRlIGV4cGxvc2lvblxuICAgICAgICAgIGlmIChkaXN0YW5jZSA8PSBleHBsb3Npb24uZXhwbG9zaW9uUmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIG1ldGVvci5wb3NpdGlvbikpO1xuICAgICAgICAgICAgdGhpcy5tZXRlb3JBcnJheS5zcGxpY2UodGhpcy5tZXRlb3JBcnJheS5pbmRleE9mKG1ldGVvciksIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iYXNlQXJyYXkuZm9yRWFjaChiYXNlID0+IHtcbiAgICAgICAgICBiYXNlLmRyYXcoKTtcbiAgICAgICAgICBpZiAoYmFzZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShtZXRlb3IucG9zaXRpb24sIGJhc2UucG9zaXRpb24pO1xuICAgICAgICAgIGlmIChkaXN0YW5jZSA8PSBiYXNlLnJhZGl1cyArIG1ldGVvci5yYWRpdXMpIHtcbiAgICAgICAgICAgIGJhc2UuZGVzdHJveUJhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlLmRlc3Ryb3lCYXNlKCk7XG4gICAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgYmFzZS5wb3NpdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5taXNzaWxlQXJyYXkuZm9yRWFjaChtaXNzaWxlID0+IHtcbiAgICAgICAgLy9jaGVjayBmb3IgZXhwbG9zaW9uXG4gICAgICAgIGlmIChtaXNzaWxlLmNoZWNrRXhwbG9zaW9uKGNhbGN1bGF0ZURpc3RhbmNlKG1pc3NpbGUucG9zaXRpb24sIG1pc3NpbGUuZGVzdGluYXRpb24pKSkge1xuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBtaXNzaWxlLnBvc2l0aW9uKSk7XG4gICAgICAgICAgdGhpcy5taXNzaWxlQXJyYXkuc3BsaWNlKHRoaXMubWlzc2lsZUFycmF5LmluZGV4T2YobWlzc2lsZSksIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1pc3NpbGUudXBkYXRlUG9zaXRpb24oKGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgICAgaWYgKGV4cGxvc2lvbi5zdGFnZSA+PSA0KSB7XG4gICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5zcGxpY2UodGhpcy5leHBsb3Npb25BcnJheS5pbmRleE9mKGV4cGxvc2lvbiksIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4cGxvc2lvbi51cGRhdGVFeHBsb3Npb24oZWxhcHNlZEZyYW1lVGltZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7ICAgXG4gICAgfSAgICAgXG4gIH1cblxuICBidWlsZE5ld01ldGVvcnMoKSB7XG4gICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5sZXZlbCAqIDI7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lU3RhdGV7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5taXNzaWxlcyA9IDEwO1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuXG4gICAgdGhpcy5iYXNlc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLWJhc2VzXCIpO1xuICAgIHRoaXMubWlzc2lsZXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1taXNzaWxlc1wiKTtcbiAgICB0aGlzLmxldmVsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tbGV2ZWxcIik7XG5cbiAgICB0aGlzLmNoZWNrQ29udGludWUgPSB0aGlzLmNoZWNrQ29udGludWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3lCYXNlID0gdGhpcy5kZXN0cm95QmFzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSA9IHRoaXMudXBkYXRlRGlzcGxheS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5KCl7XG4gICAgdGhpcy5sZXZlbERpdi5pbm5lclRleHQgPSBgTGV2ZWw6ICR7dGhpcy5sZXZlbH1gO1xuICAgIHRoaXMuYmFzZXNEaXYuaW5uZXJUZXh0ID0gYEJhc2VzOiAke3RoaXMuYmFzZXN9YDtcbiAgICB0aGlzLm1pc3NpbGVzRGl2LmlubmVyVGV4dCA9IGBNaXNzaWxlczogJHt0aGlzLm1pc3NpbGVzfWA7XG4gIH1cblxuICBmaXJlTWlzc2lsZSgpe1xuICAgIHRoaXMubWlzc2lsZXMgLT0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuXG4gIHJlc2V0U3RhdGUoKXtcblxuICB9XG5cbiAgZGVzdHJveUJhc2UoKXtcbiAgICB0aGlzLmJhc2VzIC09IDE7XG4gIH1cblxuICBjaGVja0NvbnRpbnVlKCl7XG4gICAgaWYgKHRoaXMuYmFzZXMgPjAgKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRlb3J7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiAtMTBcbiAgICB9O1xuICAgIC8vIHRoaXMuZHJhd1Bvc2l0aW9uID0ge1xuICAgIC8vICAgeDogdGhpcy5wb3NpdGlvbi54IC0gMTAsXG4gICAgLy8gICB5OiB0aGlzLnBvc2l0aW9uLnkgLSAxMFxuICAgIC8vIH07XG4gICAgdGhpcy5zcGVlZCA9IDcgKiB0aGlzLnNldFNwZWVkKCk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG5cbiAgICB0aGlzLm1ldGVvckltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXRlb3ItMVwiKTtcblxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTcGVlZCgpe1xuICAgIC8vaGVscHMgc2V0IGFuIGludGlhbCByYW5kb20gcmFuZ2Ugb2Ygc3BlZWRzXG4gICAgbGV0IHRocm90dGxlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHRocm90dGxlciA8PSAwLjI1KSByZXR1cm4gMC43NTtcbiAgICBpZiAodGhyb3R0bGVyID49IDAuNzUpIHJldHVybiAxLjI1O1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKCl7XG4gICAgLy9zZXQgUmFuZG9tIHggZGlyZWN0aW9uXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh4ID4gMC41KSB4ICo9IC0xO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBkZWx0YVRpbWUpe1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLmRpcmVjdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKGxldmVsTXVsdGlwbGllciAqIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpOyAgICBcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG5cbiAgZHJhdygpe1xuICAgIC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyAgICBcbiAgICAvLyB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgLy8gdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMubWV0ZW9ySW1hZ2UsXG4gICAgICB0aGlzLnBvc2l0aW9uLngtMTAsXG4gICAgICB0aGlzLnBvc2l0aW9uLnktMTAsXG4gICAgICAyMCxcbiAgICAgIDIwXG4gICAgKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3NpbGV7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uLCBwb3NpdGlvbiwgY3R4KXtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLnggKyAxMCxcbiAgICAgIHk6IHBvc2l0aW9uLnkgLSAxMFxuICAgIH07XG5cbiAgICB0aGlzLmNvdXJzZSA9IHtcbiAgICAgIHg6ICh0aGlzLmRlc3RpbmF0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpLFxuICAgICAgeTogKHRoaXMuZGVzdGluYXRpb24ueSAtIHRoaXMucG9zaXRpb24ueSlcbiAgICB9O1xuICAgIHRoaXMuc3BlZWQgPSAwLjg7XG4gICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gMztcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMubWlzc2lsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWxsb3ctbWlzc2lsZVwiKTsgICAgXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICAvL3RoaXMuY2FsY3VsYXRlRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0V4cGxvc2lvbiA9IHRoaXMuY2hlY2tFeHBsb3Npb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNoZWNrRXhwbG9zaW9uKGRpc3RhbmNlKXtcbiAgICAvL2xldCBkaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoKTsgICAgXG4gICAgaWYgKGRpc3RhbmNlIDw9IHRoaXMuZXhwbG9zaW9uUmFkaXVzKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuICAvLyAgIGxldCB4RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuZGVzdGluYXRpb24ueCk7XG4gIC8vICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gdGhpcy5kZXN0aW5hdGlvbi55KTtcbiAgLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCp4RGlzdCkgKyAoeURpc3QqeURpc3QpKTtcbiAgLy8gfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGR0KXtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gKHRoaXMuY291cnNlLnggKiB0aGlzLnNwZWVkKSAqIGR0OyAgICBcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKHRoaXMuY291cnNlLnkgKiB0aGlzLnNwZWVkKSAqIGR0O1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpe1xuICAgIC8vbWV0ZW9ycyBhcmUgY2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMgaW4gR2FtZS5qc1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMubWlzc2lsZUltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55XG4gICAgKTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVEaXN0YW5jZSA9IChwb3MxLCBwb3MyKSA9PiB7XG4gIC8vZGVidWdnZXI7XG4gIGxldCB4RGlzdCA9IE1hdGguYWJzKHBvczEueCAtIHBvczIueCk7XG4gIGxldCB5RGlzdCA9IE1hdGguYWJzKHBvczEueSAtIHBvczIueSk7XG4gIHJldHVybiBNYXRoLnNxcnQoKHhEaXN0ICogeERpc3QpICsgKHlEaXN0ICogeURpc3QpKTtcbn07XG5cbi8vIGNhbGN1bGF0ZURpc3RhbmNlKCl7XG4vLyAgIGxldCB4RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuZGVzdGluYXRpb24ueCk7XG4vLyAgIGxldCB5RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuZGVzdGluYXRpb24ueSk7XG4vLyAgIHJldHVybiBNYXRoLnNxcnQoKHhEaXN0ICogeERpc3QpICsgKHlEaXN0ICogeURpc3QpKTtcbi8vIH0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9