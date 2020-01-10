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
  canvas.addEventListener("click", game.handleClick, false); //game.runGame();
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
    this.drawHeight = this.baseImage.height;
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
    this.size = 60;
    this.maxSize = 150;
    this.growthRate = (this.maxSize - this.size) / 4; //calculation for how fast to grow

    this.ctx = ctx;
    this.timer = 0;
    this.explosionImageArray = [document.getElementById("explosion-1"), document.getElementById("explosion-2"), document.getElementById("explosion-3"), document.getElementById("explosion-4")];
    this.imageToDraw = this.explosionImageArray[0];
    this.stage = 0;
    this.explosionRadius = this.size / 2;
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
        this.explosionRadius = this.size / 2;
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
/* harmony import */ var _gameDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameDisplay */ "./src/scripts/gameDisplay.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Game =
/*#__PURE__*/
function () {
  function Game(context, width, height) {
    var _this = this;

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

    this.level = 0; //controls difficulty and pace of game

    this.levelMultiplier = 0.85;
    this.gameDisplay = new _gameDisplay__WEBPACK_IMPORTED_MODULE_4__["default"](this.ctx);
    this.gameLoop = this.gameLoop.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.buildNewMeteors = this.buildNewMeteors.bind(this);
    this.setupLevel = this.setupLevel.bind(this);
    this.background = document.getElementById("background");
    this.background.addEventListener("load", function () {
      _this.setupLevel();
    }, false);
  }

  _createClass(Game, [{
    key: "handleClick",
    value: function handleClick(e) {
      //check for missile count
      //find closest base to click
      //spawn missile at base heading towards click    
      if (this.gameDisplay.missiles > 0) {
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
        this.gameDisplay.fireMissile();
        this.missileArray.push(new _missile__WEBPACK_IMPORTED_MODULE_1__["default"](destination, closestBase.position, this.ctx));
      }
    }
  }, {
    key: "setupLevel",
    value: function setupLevel() {
      //sets up each level    
      this.meteorArray = [];
      this.baseArray = [];
      this.explosionArray = [];
      this.missileArray = [];
      this.level += 1; //setup meteors ???merge with buildMeteors????

      for (var i = 0; i < 8 + 2 * this.level; i++) {
        var posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
        this.meteorArray.push(new _meteor__WEBPACK_IMPORTED_MODULE_0__["default"](posX, this.ctx));
      } //setup bases


      var basePosition = {
        x: 150,
        y: this.screenHeight - 100
      };

      for (var _i = 0; _i < 3; _i++) {
        this.baseArray.push(new _base__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx, basePosition));
        basePosition.x += this.screenWidth / 3;
      }

      this.levelMultiplier += 0.15;
      this.runGame();
    }
  }, {
    key: "runGame",
    value: function runGame() {
      this.ctx.drawImage(this.background, 0, 0, this.screenWidth, this.screenHeight);
      this.lastTime += 2500;
      this.gameDisplay.nextLevel(this.gameLoop);
    }
  }, {
    key: "gameLoop",
    value: function gameLoop(timestamp) {
      var _this2 = this;

      if (this.gameDisplay.checkContinue()) {
        //game still progressing, player has neither won or lost
        var elapsedFrameTime = timestamp - this.lastTime;
        this.lastTime = timestamp; //debugger;

        this.timer += elapsedFrameTime / 1000; //const levelMultiplier = 1.0;

        if (this.timer >= 3.0) {
          this.buildNewMeteors();
          this.timer = 0;
        }

        this.ctx.drawImage(this.background, 0, 0);
        this.meteorArray.forEach(function (meteor) {
          //first, move the meteor
          if (meteor.position.y >= _this2.screenHeight) {
            _this2.meteorArray.splice(_this2.meteorArray.indexOf(meteor), 1);
          } else {
            meteor.updatePosition(_this2.levelMultiplier, elapsedFrameTime / 1000);
          } //check pos of meteor against explosions, and ground 


          _this2.explosionArray.forEach(function (explosion) {
            var distance = Object(_util__WEBPACK_IMPORTED_MODULE_5__["calculateDistance"])(explosion.position, meteor.position); // if meteor in radius, destroy it and create explosion

            if (distance <= explosion.explosionRadius + meteor.radius) {
              _this2.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_3__["default"](_this2.ctx, meteor.position));

              _this2.meteorArray.splice(_this2.meteorArray.indexOf(meteor), 1);

              _this2.gameDisplay.destroyMeteor();

              return;
            }
          });

          _this2.baseArray.forEach(function (base) {
            base.draw();

            if (base.destroyed) {
              return;
            }

            var distance = Object(_util__WEBPACK_IMPORTED_MODULE_5__["calculateDistance"])(meteor.position, base.position);

            if (distance <= base.radius + meteor.radius) {
              base.destroyBase();

              _this2.gameDisplay.destroyBase();

              _this2.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_3__["default"](_this2.ctx, base.position));
            }
          });
        });
        this.missileArray.forEach(function (missile) {
          //check for explosion
          if (missile.checkExplosion(Object(_util__WEBPACK_IMPORTED_MODULE_5__["calculateDistance"])(missile.position, missile.destination))) {
            _this2.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_3__["default"](_this2.ctx, missile.position));

            _this2.missileArray.splice(_this2.missileArray.indexOf(missile), 1);
          } else {
            missile.updatePosition(elapsedFrameTime / 1000);
          }
        });
        this.explosionArray.forEach(function (explosion) {
          if (explosion.stage >= 4) {
            _this2.explosionArray.splice(_this2.explosionArray.indexOf(explosion), 1);
          } else {
            explosion.updateExplosion(elapsedFrameTime);
          }
        });
        requestAnimationFrame(this.gameLoop);
      } else {
        if (this.gameDisplay.destroyedMeteorCount >= this.gameDisplay.levelGoal) {
          //player progress to next level
          this.setupLevel();
        } else {
          // player lost
          this.gameDisplay.gameLost();
        }
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

/***/ "./src/scripts/gameDisplay.js":
/*!************************************!*\
  !*** ./src/scripts/gameDisplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gameDisplay; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameDisplay =
/*#__PURE__*/
function () {
  function gameDisplay(ctx) {
    _classCallCheck(this, gameDisplay);

    this.ctx = ctx;
    this.ctx.font = "24pt sans serif";
    this.bases = 3;
    this.missiles = 10;
    this.level = 0;
    this.destroyedMeteorCount = 0;
    this.levelGoal = 15;
    this.basesDiv = document.getElementById("game-info-bases");
    this.missilesDiv = document.getElementById("game-info-missiles");
    this.levelDiv = document.getElementById("game-info-level");
    this.destroyedDiv = document.getElementById("game-info-destroyed");
    this.checkContinue = this.checkContinue.bind(this);
    this.destroyBase = this.destroyBase.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.destroyMeteor = this.destroyMeteor.bind(this);
    this.gameLost = this.gameLost.bind(this);
    this.setupLevelDisplay = this.setupLevelDisplay.bind(this);
    this.updateDisplay();
  }

  _createClass(gameDisplay, [{
    key: "setupLevelDisplay",
    value: function setupLevelDisplay() {
      this.level += 1;
      this.missiles = 8 + this.level;
      this.bases = 3;
      this.destroyedMeteorCount = 0;
      this.levelGoal = 8 + this.level * 5;
      this.updateDisplay();
    }
  }, {
    key: "nextLevel",
    value: function nextLevel(callback) {
      //level setup logic    
      this.setupLevelDisplay();
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(500, 300, 250, 200);
      this.ctx.fillStyle = "yellow";
      this.ctx.strokeText("Level ".concat(this.level), 575, 400); //let time = new Date().getMilliseconds();

      window.setTimeout(function () {
        callback(2500);
      }, 2500);
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      this.levelDiv.innerText = "Level: ".concat(this.level);
      this.basesDiv.innerText = "Bases: ".concat(this.bases);
      this.missilesDiv.innerText = "Missiles: ".concat(this.missiles);
      this.destroyedDiv.innerText = "Destroyed Meteors: ".concat(this.destroyedMeteorCount, " of ").concat(this.levelGoal);
    }
  }, {
    key: "fireMissile",
    value: function fireMissile() {
      this.missiles -= 1;
      this.updateDisplay();
    }
  }, {
    key: "destroyBase",
    value: function destroyBase() {
      this.bases -= 1;
      this.updateDisplay();
    }
  }, {
    key: "destroyMeteor",
    value: function destroyMeteor() {
      this.destroyedMeteorCount += 1;
      this.updateDisplay(); // if (this.destroyedMeteorCount >= this.levelGoal){
      //   this.
      // }
    }
  }, {
    key: "gameLost",
    value: function gameLost() {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(350, 300, 650, 200);
      this.ctx.fillStyle = "yellow";
      this.ctx.strokeText("Earth has been destroyed, whoops!", 450, 400);
    }
  }, {
    key: "checkContinue",
    value: function checkContinue() {
      if (this.destroyedMeteorCount >= this.levelGoal) return false;
      if (this.bases > 0) return true;
      return false;
    }
  }]);

  return gameDisplay;
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

    this.speed = 55 * this.setSpeed();
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
      //debugger;
      this.position.x += this.direction;
      this.position.y += levelMultiplier * this.speed * deltaTime; //debugger;  

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJTQ1JFRU5fV0lEVEgiLCJTQ1JFRU5fSEVJR0hUIiwid2lkdGgiLCJoZWlnaHQiLCJnYW1lIiwiR2FtZSIsImhhbmRsZUNsaWNrIiwiQmFzZSIsInBvc2l0aW9uIiwiYmFzZUltYWdlIiwiZHJhd1Bvc2l0aW9uIiwieCIsInkiLCJkcmF3V2lkdGgiLCJkcmF3SGVpZ2h0IiwicmFkaXVzIiwiZGVzdHJveWVkIiwiZHJhdyIsImJpbmQiLCJkZXN0cm95QmFzZSIsImRyYXdJbWFnZSIsIkV4cGxvc2lvbiIsInNpemUiLCJtYXhTaXplIiwiZ3Jvd3RoUmF0ZSIsInRpbWVyIiwiZXhwbG9zaW9uSW1hZ2VBcnJheSIsImltYWdlVG9EcmF3Iiwic3RhZ2UiLCJleHBsb3Npb25SYWRpdXMiLCJ1cGRhdGVFeHBsb3Npb24iLCJkdCIsImNvbnRleHQiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5XaWR0aCIsIm1ldGVvckFycmF5IiwiYmFzZUFycmF5IiwibWlzc2lsZUFycmF5IiwiZXhwbG9zaW9uQXJyYXkiLCJsYXN0VGltZSIsImxldmVsIiwibGV2ZWxNdWx0aXBsaWVyIiwiZ2FtZURpc3BsYXkiLCJHYW1lRGlzcGxheSIsImdhbWVMb29wIiwicnVuR2FtZSIsImJ1aWxkTmV3TWV0ZW9ycyIsInNldHVwTGV2ZWwiLCJiYWNrZ3JvdW5kIiwiZSIsIm1pc3NpbGVzIiwicG90ZW50aWFsQmFzZXMiLCJmaWx0ZXIiLCJiYXNlIiwiY2xvc2VzdEJhc2UiLCJkaWZmZXJlbmNlIiwiTWF0aCIsImFicyIsIm9mZnNldFgiLCJpIiwibGVuZ3RoIiwiZGVzdGluYXRpb24iLCJvZmZzZXRZIiwiZmlyZU1pc3NpbGUiLCJwdXNoIiwiTWlzc2lsZSIsInBvc1giLCJmbG9vciIsInJhbmRvbSIsIk1ldGVvciIsImJhc2VQb3NpdGlvbiIsIm5leHRMZXZlbCIsInRpbWVzdGFtcCIsImNoZWNrQ29udGludWUiLCJlbGFwc2VkRnJhbWVUaW1lIiwiZm9yRWFjaCIsIm1ldGVvciIsInNwbGljZSIsImluZGV4T2YiLCJ1cGRhdGVQb3NpdGlvbiIsImV4cGxvc2lvbiIsImRpc3RhbmNlIiwiY2FsY3VsYXRlRGlzdGFuY2UiLCJkZXN0cm95TWV0ZW9yIiwibWlzc2lsZSIsImNoZWNrRXhwbG9zaW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVzdHJveWVkTWV0ZW9yQ291bnQiLCJsZXZlbEdvYWwiLCJnYW1lTG9zdCIsImZvbnQiLCJiYXNlcyIsImJhc2VzRGl2IiwibWlzc2lsZXNEaXYiLCJsZXZlbERpdiIsImRlc3Ryb3llZERpdiIsInVwZGF0ZURpc3BsYXkiLCJzZXR1cExldmVsRGlzcGxheSIsImNhbGxiYWNrIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VUZXh0Iiwid2luZG93Iiwic2V0VGltZW91dCIsImlubmVyVGV4dCIsInNwZWVkIiwic2V0U3BlZWQiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJtZXRlb3JJbWFnZSIsInRocm90dGxlciIsImRlbHRhVGltZSIs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O0FBQ0o7QUFDQSxXQUFLbkIsR0FBTCxDQUFTc0IsU0FBVCxDQUNFLEtBQUs2RixZQURQLEVBRUUsS0FBS3pHLFFBQUwsQ0FBY0csQ0FGaEIsRUFHRSxLQUFLSCxRQUFMLENBQWNJLENBSGhCO0FBS0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pESDtBQUFBO0FBQU8sSUFBTXNFLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ2dDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUMvQztBQUNBLE1BQUlDLEtBQUssR0FBRzVELElBQUksQ0FBQ0MsR0FBTCxDQUFTeUQsSUFBSSxDQUFDdkcsQ0FBTCxHQUFTd0csSUFBSSxDQUFDeEcsQ0FBdkIsQ0FBWjtBQUNBLE1BQUkwRyxLQUFLLEdBQUc3RCxJQUFJLENBQUNDLEdBQUwsQ0FBU3lELElBQUksQ0FBQ3RHLENBQUwsR0FBU3VHLElBQUksQ0FBQ3ZHLENBQXZCLENBQVo7QUFDQSxTQUFPNEMsSUFBSSxDQUFDOEQsSUFBTCxDQUFXRixLQUFLLEdBQUdBLEtBQVQsR0FBbUJDLEtBQUssR0FBR0EsS0FBckMsQ0FBUDtBQUNELENBTE0sQyxDQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUNYQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG4vL2NvbnN0IEFwcCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYXBwLmpzXCIpO1xuLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpOyAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgU0NSRUVOX1dJRFRIID0gMTIwMDtcbiAgY29uc3QgU0NSRUVOX0hFSUdIVCA9IDgwMDtcbiAgY3R4LmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSDtcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4LCBTQ1JFRU5fV0lEVEgsIFNDUkVFTl9IRUlHSFQpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWUuaGFuZGxlQ2xpY2ssIGZhbHNlKTtcbiAgLy9nYW1lLnJ1bkdhbWUoKTtcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2V7XG4gIGNvbnN0cnVjdG9yKGN0eCwgcG9zaXRpb24pe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuYmFzZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLWltYWdlXCIpO1xuICAgIFxuICAgIC8vdGhpcy5kZXN0cm95ZWRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgeTogcG9zaXRpb24ueVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngrMjEsXG4gICAgICB5OiBwb3NpdGlvbi55KzUwXG4gICAgfTsgLy9tYWdpYyBudW1iZXJzIGZvciB3aWR0aCBhbmQgaGVpZ2h0IGFkanVzdGluZ1xuICAgIHRoaXMuZHJhd1dpZHRoID0gdGhpcy5iYXNlSW1hZ2Uud2lkdGg7XG4gICAgdGhpcy5kcmF3SGVpZ2h0ID0gdGhpcy5iYXNlSW1hZ2UuaGVpZ2h0O1xuICAgIHRoaXMucmFkaXVzID0gNDA7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveUJhc2UgPSB0aGlzLmRlc3Ryb3lCYXNlLmJpbmQodGhpcyk7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3V2lkdGggPSAxMDA7XG4gICAgdGhpcy5kcmF3SGVpZ2h0ID0gMTAwO1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnggLT0gMjA7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24ueSs9NDA7XG4gIH1cblxuICBkcmF3KCl7IFxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuYmFzZUltYWdlLCBcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLngsIFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueSxcbiAgICAgIHRoaXMuZHJhd1dpZHRoLFxuICAgICAgdGhpcy5kcmF3SGVpZ2h0XG5cbiAgICAgICk7XG4gIH1cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9zaW9ue1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICB5OiBwb3NpdGlvbi55XG4gICAgfTsgLy81MCBpcyBtYWdpYyBudW1iZXIgY2VudGVyXG4gICAgdGhpcy5wb3NpdGlvbj17XG4gICAgICB4OnBvc2l0aW9uLngsXG4gICAgICB5OnBvc2l0aW9uLnlcbiAgICB9O1xuXG4gICAgdGhpcy5zaXplID0gNjA7XG4gICAgdGhpcy5tYXhTaXplID0gMTUwO1xuICAgIHRoaXMuZ3Jvd3RoUmF0ZSA9ICh0aGlzLm1heFNpemUgLSB0aGlzLnNpemUpIC8gNDtcbiAgICAvL2NhbGN1bGF0aW9uIGZvciBob3cgZmFzdCB0byBncm93XG5cbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXkgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tMVwiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTJcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0zXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tNFwiKV07XG4gICAgdGhpcy5pbWFnZVRvRHJhdyA9IHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheVswXTtcbiAgICB0aGlzLnN0YWdlID0gMDtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IHRoaXMuc2l6ZS8yO1xuXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVFeHBsb3Npb24gPSB0aGlzLnVwZGF0ZUV4cGxvc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlRXhwbG9zaW9uKGR0KXtcbiAgICBkdCA9IGR0LzEwMDA7XG4gICAgdGhpcy50aW1lcis9ZHQ7XG4gICAgaWYgKHRoaXMudGltZXIgPj0gMC44KXtcbiAgICAgIHRoaXMuc3RhZ2UrKztcblxuICAgICAgdGhpcy50aW1lciA9MDtcbiAgICB9ICAgIFxuICAgIGlmICh0aGlzLnN0YWdlIDwgNCl7XG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLzI7XG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55ID0gdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zaXplLzI7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICAgIHRoaXMuc2l6ZSArPSB0aGlzLmdyb3d0aFJhdGUgKiBkdDsgIFxuICAgICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSB0aGlzLnNpemUgLyAyOyAgICBcbiAgICB9XG4gICAgXG4gIH1cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5W3RoaXMuc3RhZ2VdLFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCxcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUsIHRoaXMuc2l6ZVxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgTWV0ZW9yIGZyb20gXCIuL21ldGVvclwiO1xuaW1wb3J0IE1pc3NpbGUgZnJvbSBcIi4vbWlzc2lsZVwiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IEV4cGxvc2lvbiBmcm9tIFwiLi9leHBsb3Npb25cIjtcbmltcG9ydCBHYW1lRGlzcGxheSBmcm9tIFwiLi9nYW1lRGlzcGxheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGlzdGFuY2UgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpe1xuICAgIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gd2lkdGg7IFxuXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5taXNzaWxlQXJyYXkgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5ID0gW107XG5cbiAgICAvL3RoaXMubWlzc2lsZUNvdW50ID0gMTA7XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDsgLy91c2VkIHRvIGdlbmVyYXRlIG5ldyBtZXRlb3JzIGF0IGludGVydmFsc1xuICAgIHRoaXMubGV2ZWwgPSAwOyAvL2NvbnRyb2xzIGRpZmZpY3VsdHkgYW5kIHBhY2Ugb2YgZ2FtZVxuICAgIHRoaXMubGV2ZWxNdWx0aXBsaWVyID0gMC44NTtcbiAgICBcbiAgICB0aGlzLmdhbWVEaXNwbGF5ID0gbmV3IEdhbWVEaXNwbGF5KHRoaXMuY3R4KTsgICBcblxuICAgIHRoaXMuZ2FtZUxvb3AgPSB0aGlzLmdhbWVMb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ydW5HYW1lID0gdGhpcy5ydW5HYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycyA9IHRoaXMuYnVpbGROZXdNZXRlb3JzLmJpbmQodGhpcyk7ICBcbiAgICB0aGlzLnNldHVwTGV2ZWwgPSB0aGlzLnNldHVwTGV2ZWwuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgICB0aGlzLmJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge3RoaXMuc2V0dXBMZXZlbCgpO30sIGZhbHNlKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpeyBcbiAgICBcbiAgICAvL2NoZWNrIGZvciBtaXNzaWxlIGNvdW50XG4gICAgLy9maW5kIGNsb3Nlc3QgYmFzZSB0byBjbGlja1xuICAgIC8vc3Bhd24gbWlzc2lsZSBhdCBiYXNlIGhlYWRpbmcgdG93YXJkcyBjbGljayAgICBcbiAgICBcbiAgICBpZiAodGhpcy5nYW1lRGlzcGxheS5taXNzaWxlcyA+IDApe1xuICAgICAgbGV0IHBvdGVudGlhbEJhc2VzID0gdGhpcy5iYXNlQXJyYXkuZmlsdGVyKGJhc2UgPT4ge3JldHVybiAhYmFzZS5kZXN0cm95ZWQ7fSk7XG4gICAgICBsZXQgY2xvc2VzdEJhc2UgPSBwb3RlbnRpYWxCYXNlc1swXTtcbiAgICAgIGxldCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UucG9zaXRpb24ueCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvdGVudGlhbEJhc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhlLm9mZnNldFggLSBwb3RlbnRpYWxCYXNlc1tpXS5wb3NpdGlvbi54KSA8IGRpZmZlcmVuY2UpIHtcbiAgICAgICAgICBjbG9zZXN0QmFzZSA9IHBvdGVudGlhbEJhc2VzW2ldO1xuICAgICAgICAgIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGRlc3RpbmF0aW9uID0ge1xuICAgICAgICB4OiBlLm9mZnNldFgsXG4gICAgICAgIHk6IGUub2Zmc2V0WVxuICAgICAgfTtcbiAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZmlyZU1pc3NpbGUoKTtcbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LnB1c2gobmV3IE1pc3NpbGUoZGVzdGluYXRpb24sIChjbG9zZXN0QmFzZS5wb3NpdGlvbiksIHRoaXMuY3R4KSk7XG4gICAgfSAgICAgXG4gIH1cblxuICBzZXR1cExldmVsKCl7XG4gICAgLy9zZXRzIHVwIGVhY2ggbGV2ZWwgICAgXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5leHBsb3Npb25BcnJheSA9IFtdO1xuICAgIHRoaXMubWlzc2lsZUFycmF5ID0gW107XG4gICAgdGhpcy5sZXZlbCArPSAxO1xuICAgIC8vc2V0dXAgbWV0ZW9ycyA/Pz9tZXJnZSB3aXRoIGJ1aWxkTWV0ZW9ycz8/Pz9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICg4ICsgKDIgKiB0aGlzLmxldmVsKSk7IGkrKykge1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIC8vc2V0dXAgYmFzZXNcbiAgICBsZXQgYmFzZVBvc2l0aW9uID0ge1xuICAgICAgeDogMTUwLFxuICAgICAgeTogdGhpcy5zY3JlZW5IZWlnaHQgLSAxMDBcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIHRoaXMuYmFzZUFycmF5LnB1c2gobmV3IEJhc2UodGhpcy5jdHgsIGJhc2VQb3NpdGlvbikpO1xuXG4gICAgICBiYXNlUG9zaXRpb24ueCArPSB0aGlzLnNjcmVlbldpZHRoIC8gMztcbiAgICB9ICBcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciArPSAwLjE1O1xuICAgIHRoaXMucnVuR2FtZSgpO1xuICB9XG5cbiAgcnVuR2FtZSgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmQsIDAsIDAsIHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0KTtcbiAgICB0aGlzLmxhc3RUaW1lICs9IDI1MDA7XG4gICAgdGhpcy5nYW1lRGlzcGxheS5uZXh0TGV2ZWwodGhpcy5nYW1lTG9vcCk7XG4gIH1cblxuICBnYW1lTG9vcCh0aW1lc3RhbXApeyAgXG4gICAgaWYgKHRoaXMuZ2FtZURpc3BsYXkuY2hlY2tDb250aW51ZSgpKXtcbiAgICAgIC8vZ2FtZSBzdGlsbCBwcm9ncmVzc2luZywgcGxheWVyIGhhcyBuZWl0aGVyIHdvbiBvciBsb3N0XG4gICAgICBsZXQgZWxhcHNlZEZyYW1lVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgICAgLy9kZWJ1Z2dlcjtcbiAgICAgIHRoaXMudGltZXIgKz0gZWxhcHNlZEZyYW1lVGltZSAvIDEwMDA7XG5cbiAgICAgIC8vY29uc3QgbGV2ZWxNdWx0aXBsaWVyID0gMS4wO1xuXG4gICAgICBpZiAodGhpcy50aW1lciA+PSAzLjApIHtcbiAgICAgICAgdGhpcy5idWlsZE5ld01ldGVvcnMoKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmQsIDAsIDApO1xuXG4gICAgICB0aGlzLm1ldGVvckFycmF5LmZvckVhY2gobWV0ZW9yID0+IHtcbiAgICAgICAgLy9maXJzdCwgbW92ZSB0aGUgbWV0ZW9yXG4gICAgICAgIGlmIChtZXRlb3IucG9zaXRpb24ueSA+PSB0aGlzLnNjcmVlbkhlaWdodCkge1xuICAgICAgICAgIHRoaXMubWV0ZW9yQXJyYXkuc3BsaWNlKHRoaXMubWV0ZW9yQXJyYXkuaW5kZXhPZihtZXRlb3IpLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXRlb3IudXBkYXRlUG9zaXRpb24odGhpcy5sZXZlbE11bHRpcGxpZXIsIGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NoZWNrIHBvcyBvZiBtZXRlb3IgYWdhaW5zdCBleHBsb3Npb25zLCBhbmQgZ3JvdW5kIFxuICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShleHBsb3Npb24ucG9zaXRpb24sIG1ldGVvci5wb3NpdGlvbik7XG4gICAgICAgICAgLy8gaWYgbWV0ZW9yIGluIHJhZGl1cywgZGVzdHJveSBpdCBhbmQgY3JlYXRlIGV4cGxvc2lvblxuICAgICAgICAgIGlmIChkaXN0YW5jZSA8PSBleHBsb3Npb24uZXhwbG9zaW9uUmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIG1ldGVvci5wb3NpdGlvbikpO1xuICAgICAgICAgICAgdGhpcy5tZXRlb3JBcnJheS5zcGxpY2UodGhpcy5tZXRlb3JBcnJheS5pbmRleE9mKG1ldGVvciksIDEpO1xuICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5kZXN0cm95TWV0ZW9yKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJhc2VBcnJheS5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgICAgIGJhc2UuZHJhdygpO1xuICAgICAgICAgIGlmIChiYXNlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKG1ldGVvci5wb3NpdGlvbiwgYmFzZS5wb3NpdGlvbik7XG4gICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IGJhc2UucmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgICAgYmFzZS5kZXN0cm95QmFzZSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5kZXN0cm95QmFzZSgpO1xuICAgICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIGJhc2UucG9zaXRpb24pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LmZvckVhY2gobWlzc2lsZSA9PiB7XG4gICAgICAgIC8vY2hlY2sgZm9yIGV4cGxvc2lvblxuICAgICAgICBpZiAobWlzc2lsZS5jaGVja0V4cGxvc2lvbihjYWxjdWxhdGVEaXN0YW5jZShtaXNzaWxlLnBvc2l0aW9uLCBtaXNzaWxlLmRlc3RpbmF0aW9uKSkpIHtcbiAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgbWlzc2lsZS5wb3NpdGlvbikpO1xuICAgICAgICAgIHRoaXMubWlzc2lsZUFycmF5LnNwbGljZSh0aGlzLm1pc3NpbGVBcnJheS5pbmRleE9mKG1pc3NpbGUpLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtaXNzaWxlLnVwZGF0ZVBvc2l0aW9uKChlbGFwc2VkRnJhbWVUaW1lIC8gMTAwMCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5mb3JFYWNoKGV4cGxvc2lvbiA9PiB7XG4gICAgICAgIGlmIChleHBsb3Npb24uc3RhZ2UgPj0gNCkge1xuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuc3BsaWNlKHRoaXMuZXhwbG9zaW9uQXJyYXkuaW5kZXhPZihleHBsb3Npb24pLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleHBsb3Npb24udXBkYXRlRXhwbG9zaW9uKGVsYXBzZWRGcmFtZVRpbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApOyAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5nYW1lRGlzcGxheS5kZXN0cm95ZWRNZXRlb3JDb3VudCA+PSB0aGlzLmdhbWVEaXNwbGF5LmxldmVsR29hbCl7XG4gICAgICAgIC8vcGxheWVyIHByb2dyZXNzIHRvIG5leHQgbGV2ZWxcbiAgICAgICAgdGhpcy5zZXR1cExldmVsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGF5ZXIgbG9zdFxuICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmdhbWVMb3N0KCk7XG4gICAgICB9XG4gICAgfSAgICBcbiAgfVxuXG4gIGJ1aWxkTmV3TWV0ZW9ycygpIHtcbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmxldmVsICogMjsgaSsrKXtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWVEaXNwbGF5e1xuICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4OyAgICBcbiAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB0IHNhbnMgc2VyaWZcIjtcbiAgICB0aGlzLmJhc2VzID0gMztcbiAgICB0aGlzLm1pc3NpbGVzID0gMTA7XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCA9IDA7XG4gICAgdGhpcy5sZXZlbEdvYWwgPSAxNTtcblxuICAgIHRoaXMuYmFzZXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1iYXNlc1wiKTtcbiAgICB0aGlzLm1pc3NpbGVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tbWlzc2lsZXNcIik7XG4gICAgdGhpcy5sZXZlbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLWxldmVsXCIpO1xuICAgIHRoaXMuZGVzdHJveWVkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tZGVzdHJveWVkXCIpO1xuXG4gICAgdGhpcy5jaGVja0NvbnRpbnVlID0gdGhpcy5jaGVja0NvbnRpbnVlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXN0cm95QmFzZSA9IHRoaXMuZGVzdHJveUJhc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkgPSB0aGlzLnVwZGF0ZURpc3BsYXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLm5leHRMZXZlbCA9IHRoaXMubmV4dExldmVsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXN0cm95TWV0ZW9yID0gdGhpcy5kZXN0cm95TWV0ZW9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nYW1lTG9zdCA9IHRoaXMuZ2FtZUxvc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldHVwTGV2ZWxEaXNwbGF5ID0gdGhpcy5zZXR1cExldmVsRGlzcGxheS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cblxuICBzZXR1cExldmVsRGlzcGxheSgpe1xuICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICB0aGlzLm1pc3NpbGVzID0gKDggKyAodGhpcy5sZXZlbCkpOyAgICBcbiAgICB0aGlzLmJhc2VzID0gMztcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID0gMDtcbiAgICB0aGlzLmxldmVsR29hbCA9ICg4ICsgKHRoaXMubGV2ZWwgKiA1KSk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cblxuICBuZXh0TGV2ZWwoY2FsbGJhY2spe1xuICAgIC8vbGV2ZWwgc2V0dXAgbG9naWMgICAgXG4gICAgdGhpcy5zZXR1cExldmVsRGlzcGxheSgpOyBcblxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoNTAwLCAzMDAsIDI1MCwgMjAwKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYExldmVsICR7dGhpcy5sZXZlbH1gLCA1NzUsNDAwKTtcbiAgICAvL2xldCB0aW1lID0gbmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IGNhbGxiYWNrKDI1MDApOyB9LCAyNTAwKTsgICAgXG4gIH1cblxuICB1cGRhdGVEaXNwbGF5KCl7XG4gICAgdGhpcy5sZXZlbERpdi5pbm5lclRleHQgPSBgTGV2ZWw6ICR7dGhpcy5sZXZlbH1gO1xuICAgIHRoaXMuYmFzZXNEaXYuaW5uZXJUZXh0ID0gYEJhc2VzOiAke3RoaXMuYmFzZXN9YDtcbiAgICB0aGlzLm1pc3NpbGVzRGl2LmlubmVyVGV4dCA9IGBNaXNzaWxlczogJHt0aGlzLm1pc3NpbGVzfWA7XG4gICAgdGhpcy5kZXN0cm95ZWREaXYuaW5uZXJUZXh0ID0gYERlc3Ryb3llZCBNZXRlb3JzOiAke3RoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnR9IG9mICR7dGhpcy5sZXZlbEdvYWx9YDtcbiAgfVxuXG4gIGZpcmVNaXNzaWxlKCl7XG4gICAgdGhpcy5taXNzaWxlcyAtPSAxO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9XG5cbiAgZGVzdHJveUJhc2UoKXtcbiAgICB0aGlzLmJhc2VzIC09IDE7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cblxuICBkZXN0cm95TWV0ZW9yKCl7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCArPSAxO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICAgIC8vIGlmICh0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID49IHRoaXMubGV2ZWxHb2FsKXtcbiAgICAvLyAgIHRoaXMuXG4gICAgLy8gfVxuXG4gIH1cblxuICBnYW1lTG9zdCgpe1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMzUwLCAzMDAsIDY1MCwgMjAwKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYEVhcnRoIGhhcyBiZWVuIGRlc3Ryb3llZCwgd2hvb3BzIWAsIDQ1MCwgNDAwKTtcbiAgfVxuXG4gIGNoZWNrQ29udGludWUoKXtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCA+PSB0aGlzLmxldmVsR29hbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGlzLmJhc2VzID4wICkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0ZW9ye1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogLTEwXG4gICAgfTtcbiAgICAvLyB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAvLyAgIHg6IHRoaXMucG9zaXRpb24ueCAtIDEwLFxuICAgIC8vICAgeTogdGhpcy5wb3NpdGlvbi55IC0gMTBcbiAgICAvLyB9O1xuICAgIHRoaXMuc3BlZWQgPSA1NSAqIHRoaXMuc2V0U3BlZWQoKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuc2V0RGlyZWN0aW9uKCk7XG4gICAgdGhpcy5yYWRpdXMgPSAxMDtcblxuICAgIHRoaXMubWV0ZW9ySW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1ldGVvci0xXCIpO1xuXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldFNwZWVkKCl7XG4gICAgLy9oZWxwcyBzZXQgYW4gaW50aWFsIHJhbmRvbSByYW5nZSBvZiBzcGVlZHNcbiAgICBsZXQgdGhyb3R0bGVyID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAodGhyb3R0bGVyIDw9IDAuMjUpIHJldHVybiAwLjc1O1xuICAgIGlmICh0aHJvdHRsZXIgPj0gMC43NSkgcmV0dXJuIDEuMjU7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBzZXREaXJlY3Rpb24oKXtcbiAgICAvL3NldCBSYW5kb20geCBkaXJlY3Rpb25cbiAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHggPiAwLjUpIHggKj0gLTE7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbihsZXZlbE11bHRpcGxpZXIsIGRlbHRhVGltZSl7XG4gICAgLy9kZWJ1Z2dlcjtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5kaXJlY3Rpb247XG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IChsZXZlbE11bHRpcGxpZXIgKiB0aGlzLnNwZWVkICogZGVsdGFUaW1lKTsgIFxuICAgIC8vZGVidWdnZXI7ICBcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG5cbiAgZHJhdygpe1xuICAgIC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyAgICBcbiAgICAvLyB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgLy8gdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMubWV0ZW9ySW1hZ2UsXG4gICAgICB0aGlzLnBvc2l0aW9uLngtMTAsXG4gICAgICB0aGlzLnBvc2l0aW9uLnktMTAsXG4gICAgICAyMCxcbiAgICAgIDIwXG4gICAgKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3NpbGV7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uLCBwb3NpdGlvbiwgY3R4KXtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLnggKyAxMCxcbiAgICAgIHk6IHBvc2l0aW9uLnkgLSAxMFxuICAgIH07XG5cbiAgICB0aGlzLmNvdXJzZSA9IHtcbiAgICAgIHg6ICh0aGlzLmRlc3RpbmF0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpLFxuICAgICAgeTogKHRoaXMuZGVzdGluYXRpb24ueSAtIHRoaXMucG9zaXRpb24ueSlcbiAgICB9O1xuICAgIHRoaXMuc3BlZWQgPSAwLjg7XG4gICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gMztcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMubWlzc2lsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWxsb3ctbWlzc2lsZVwiKTsgICAgXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICAvL3RoaXMuY2FsY3VsYXRlRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0V4cGxvc2lvbiA9IHRoaXMuY2hlY2tFeHBsb3Npb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNoZWNrRXhwbG9zaW9uKGRpc3RhbmNlKXtcbiAgICAvL2xldCBkaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoKTsgICAgXG4gICAgaWYgKGRpc3RhbmNlIDw9IHRoaXMuZXhwbG9zaW9uUmFkaXVzKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuICAvLyAgIGxldCB4RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuZGVzdGluYXRpb24ueCk7XG4gIC8vICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gdGhpcy5kZXN0aW5hdGlvbi55KTtcbiAgLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCp4RGlzdCkgKyAoeURpc3QqeURpc3QpKTtcbiAgLy8gfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGR0KXtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gKHRoaXMuY291cnNlLnggLyB0aGlzLnNwZWVkKSAqIGR0OyAgICBcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKHRoaXMuY291cnNlLnkgLyB0aGlzLnNwZWVkKSAqIGR0O1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpe1xuICAgIC8vbWV0ZW9ycyBhcmUgY2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMgaW4gR2FtZS5qc1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMubWlzc2lsZUltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55XG4gICAgKTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVEaXN0YW5jZSA9IChwb3MxLCBwb3MyKSA9PiB7XG4gIC8vZGVidWdnZXI7XG4gIGxldCB4RGlzdCA9IE1hdGguYWJzKHBvczEueCAtIHBvczIueCk7XG4gIGxldCB5RGlzdCA9IE1hdGguYWJzKHBvczEueSAtIHBvczIueSk7XG4gIHJldHVybiBNYXRoLnNxcnQoKHhEaXN0ICogeERpc3QpICsgKHlEaXN0ICogeURpc3QpKTtcbn07XG5cbi8vIGNhbGN1bGF0ZURpc3RhbmNlKCl7XG4vLyAgIGxldCB4RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuZGVzdGluYXRpb24ueCk7XG4vLyAgIGxldCB5RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuZGVzdGluYXRpb24ueSk7XG4vLyAgIHJldHVybiBNYXRoLnNxcnQoKHhEaXN0ICogeERpc3QpICsgKHlEaXN0ICogeURpc3QpKTtcbi8vIH0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9