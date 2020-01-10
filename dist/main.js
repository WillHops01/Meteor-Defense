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
    this.startTime = null;
    this.timer = 0; //used to generate new meteors at intervals

    this.level = 0; //controls difficulty and pace of game

    this.levelMultiplier = 0.85;
    this.gameDisplay = new _gameDisplay__WEBPACK_IMPORTED_MODULE_4__["default"](this.ctx);
    this.gameLoop = this.gameLoop.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.buildNewMeteors = this.buildNewMeteors.bind(this);
    this.setupLevel = this.setupLevel.bind(this);
    this.waitForStart = this.waitForStart.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.explosionAudio = document.getElementById("explosion-audio");
    this.activeListener = true;
    this.background = document.getElementById("background");
    background.addEventListener("load", function () {
      _this.ctx.drawImage(_this.background, 0, 0);
    }, false); // $("#background").one("keypress", this.waitForStart);

    document.addEventListener("keydown", function () {
      _this.waitForStart();
    }); // addEventListener("load", () => {this.setupLevel();}, false);
  }

  _createClass(Game, [{
    key: "resetGame",
    value: function resetGame() {
      this.lastTime = 0;
      this.timer = 0; //used to generate new meteors at intervals

      this.level = 0; //controls difficulty and pace of game

      this.levelMultiplier = 0.85;
      this.startTime = null;
      this.gameDisplay.resetDisplay();
    }
  }, {
    key: "waitForStart",
    value: function waitForStart() {
      if (this.activeListener) {
        this.gameDisplay.changeUserPrompt(1);
        this.resetGame();
        this.setupLevel();
        this.activeListener = false;
      }
    }
  }, {
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
      this.ctx.drawImage(this.background, 0, 0);
      this.gameDisplay.nextLevel(this.gameLoop);
    }
  }, {
    key: "gameLoop",
    value: function gameLoop(timestamp) {
      var _this2 = this;

      if (!this.startTime) {
        this.startTime = timestamp;
        this.lastTime = this.startTime;
      }

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
              new Audio(_this2.explosionAudio.src).play();

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
            new Audio(_this2.explosionAudio.src).play();

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
          window.setTimeout(function () {
            _this2.gameDisplay.changeUserPrompt(2);

            _this2.activeListener = true;
          }, 2500);
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
    this.promptHeader = document.getElementById("user-prompt-header-active");
    this.checkContinue = this.checkContinue.bind(this);
    this.destroyBase = this.destroyBase.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.destroyMeteor = this.destroyMeteor.bind(this);
    this.gameLost = this.gameLost.bind(this);
    this.setupLevelDisplay = this.setupLevelDisplay.bind(this);
    this.resetDisplay = this.resetDisplay.bind(this);
    this.changeUserPrompt = this.changeUserPrompt.bind(this);
    this.updateDisplay();
  }

  _createClass(gameDisplay, [{
    key: "changeUserPrompt",
    value: function changeUserPrompt(promptId) {
      if (promptId === 1) {
        this.promptHeader.innerText = "Begin!";
        this.promptHeader.setAttribute("id", "user-prompt-header-idle");
      } else if (promptId === 2) {
        this.promptHeader.innerText = "Press Any Key to Begin";
      }
    }
  }, {
    key: "resetDisplay",
    value: function resetDisplay() {
      this.bases = 3;
      this.missiles = 10;
      this.level = 0;
      this.destroyedMeteorCount = 0;
      this.levelGoal = 15;
      this.updateDisplay();
    }
  }, {
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
      this.ctx.strokeText("Level ".concat(this.level), 575, 400);
      window.setTimeout(function () {
        callback(0);
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
      this.updateDisplay();
    }
  }, {
    key: "gameLost",
    value: function gameLost() {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(350, 300, 650, 200);
      this.ctx.fillStyle = "yellow";
      this.ctx.strokeText("Earth has been destroyed, whoops!", 450, 400);
      this.promptHeader.innerText = "Game Over";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiU0NSRUVOX1dJRFRIIiwiU0NSRUVOX0hFSUdIVCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsIkdhbWUiLCJoYW5kbGVDbGljayIsIkJhc2UiLCJwb3NpdGlvbiIsImJhc2VJbWFnZSIsImRyYXdQb3NpdGlvbiIsIngiLCJ5IiwiZHJhd1dpZHRoIiwiZHJhd0hlaWdodCIsInJhZGl1cyIsImRlc3Ryb3llZCIsImRyYXciLCJiaW5kIiwiZGVzdHJveUJhc2UiLCJkcmF3SW1hZ2UiLCJFeHBsb3Npb24iLCJzaXplIiwibWF4U2l6ZSIsImdyb3d0aFJhdGUiLCJ0aW1lciIsImV4cGxvc2lvbkltYWdlQXJyYXkiLCJpbWFnZVRvRHJhdyIsInN0YWdlIiwiZXhwbG9zaW9uUmFkaXVzIiwidXBkYXRlRXhwbG9zaW9uIiwiZHQiLCJjb250ZXh0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJtZXRlb3JBcnJheSIsImJhc2VBcnJheSIsIm1pc3NpbGVBcnJheSIsImV4cGxvc2lvbkFycmF5IiwibGFzdFRpbWUiLCJzdGFydFRpbWUiLCJsZXZlbCIsImxldmVsTXVsdGlwbGllciIsImdhbWVEaXNwbGF5IiwiR2FtZURpc3BsYXkiLCJnYW1lTG9vcCIsInJ1bkdhbWUiLCJidWlsZE5ld01ldGVvcnMiLCJzZXR1cExldmVsIiwid2FpdEZvclN0YXJ0IiwicmVzZXRHYW1lIiwiZXhwbG9zaW9uQXVkaW8iLCJhY3RpdmVMaXN0ZW5lciIsImJhY2tncm91bmQiLCJyZXNldERpc3BsYXkiLCJjaGFuZ2VVc2VyUHJvbXB0IiwiZSIsIm1pc3NpbGVzIiwicG90ZW50aWFsQmFzZXMiLCJmaWx0ZXIiLCJiYXNlIiwiY2xvc2VzdEJhc2UiLCJkaWZmZXJlbmNlIiwiTWF0aCIsImFicyIsIm9mZnNldFgiLCJpIiwibGVuZ3RoIiwiZGVzdGluYXRpb24iLCJvZmZzZXRZIiwiZmlyZU1pc3NpbGUiLCJwdXNoIiwiTWlzc2lsZSIsInBvc1giLCJmbG9vciIsInJhbmRvbSIsIk1ldGVvciIsImJhc2VQb3NpdGlvbiIsIm5leHRMZXZlbCIsInRpbWVzdGFtcCIsImNoZWNrQ29udGludWUiLCJlbGFwc2VkRnJhbWVUaW1lIiwiZm9yRWFjaCIsIm1ldGVvciIsInNwbGljZSIsImluZGV4T2YiLCJ1cGRhdGVQb3NpdGlvbiIsImV4cGxvc2lvbiIsImRpc3RhbmNlIiwiY2FsY3VsYXRlRGlzdGFuY2UiLCJBdWRpbyIsInNyYyIsInBsYXkiLCJkZXN0cm95TWV0ZW9yIiwibWlzc2lsZSIsImNoZWNrRXhwbG9zaW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVzdHJveWVkTWV0ZW9yQ291bnQiLCJsZXZlbEdvYWwiLCJnYW1lTG9zdCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJmb250IiwiYmFzZXMiLCJiYXNlc0RpdiIsIm1pc3NpbGVzRGl2IiwibGV2ZWxEaXYiLCJkZXN0cm95ZWREaXYiLCJwcm9tcHRIZWFkZXIiLCJ1cGRhdGVEaXNwbGF5Iiwic2V0dXBMZXZlbERpc3BsYXkiLCJwcm9tcHRJZCIsImlubmVyVGV4dCIsInNldEF0dHJpYnV0ZSIsImNhbGxiYWNrIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VUZXh0Iiwic3BlZWQiLCJzZXRTcGVlZCIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsIm1ldGVvckltYWdlIiwidGhyb3R0bGVyIiwiZGVsdGFUaW1lIiwiY291cnNlIiwibWlzc2lsZUltYWdlIiwicG9zMSIsInBvczIiLCJ4RGlzdCIsInlEaXN0Iiwic3FydCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtDQUNBO0FBQ0E7O0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBSTtBQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNH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LEtBQUswRyxLQUF0QixHQUErQnZGLEVBQWxEO0FBQ0EsV0FBS2QsSUFBTDtBQUNEOzs7MkJBRUs7QUFDSjtBQUNBLFdBQUtuQixHQUFMLENBQVNzQixTQUFULENBQ0UsS0FBSzBHLFlBRFAsRUFFRSxLQUFLdEgsUUFBTCxDQUFjRyxDQUZoQixFQUdFLEtBQUtILFFBQUwsQ0FBY0ksQ0FIaEI7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRIO0FBQUE7QUFBTyxJQUFNNkUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDc0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQy9DO0FBQ0EsTUFBSUMsS0FBSyxHQUFHbEUsSUFBSSxDQUFDQyxHQUFMLENBQVMrRCxJQUFJLENBQUNwSCxDQUFMLEdBQVNxSCxJQUFJLENBQUNySCxDQUF2QixDQUFaO0FBQ0EsTUFBSXVILEtBQUssR0FBR25FLElBQUksQ0FBQ0MsR0FBTCxDQUFTK0QsSUFBSSxDQUFDbkgsQ0FBTCxHQUFTb0gsSUFBSSxDQUFDcEgsQ0FBdkIsQ0FBWjtBQUNBLFNBQU9tRCxJQUFJLENBQUNvRSxJQUFMLENBQVdGLEtBQUssR0FBR0EsS0FBVCxHQUFtQkMsS0FBSyxHQUFHQSxLQUFyQyxDQUFQO0FBQ0QsQ0FMTSxDLENBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ1hBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vY29uc3QgQXBwID0gcmVxdWlyZShcIi4vc2NyaXB0cy9hcHAuanNcIik7XG4vLyBjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7ICBcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBjb25zdCBTQ1JFRU5fV0lEVEggPSAxMjAwO1xuICBjb25zdCBTQ1JFRU5fSEVJR0hUID0gODAwO1xuICBjdHguY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIO1xuICBjdHguY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQ7XG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgsIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5oYW5kbGVDbGljaywgZmFsc2UpO1xuICAvL2dhbWUucnVuR2FtZSgpO1xufSk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZXtcbiAgY29uc3RydWN0b3IoY3R4LCBwb3NpdGlvbil7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5iYXNlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2UtaW1hZ2VcIik7XG4gICAgXG4gICAgLy90aGlzLmRlc3Ryb3llZEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXN0cm95ZWQtYmFzZVwiKTtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICB5OiBwb3NpdGlvbi55XG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCsyMSxcbiAgICAgIHk6IHBvc2l0aW9uLnkrNTBcbiAgICB9OyAvL21hZ2ljIG51bWJlcnMgZm9yIHdpZHRoIGFuZCBoZWlnaHQgYWRqdXN0aW5nXG4gICAgdGhpcy5kcmF3V2lkdGggPSB0aGlzLmJhc2VJbWFnZS53aWR0aDtcbiAgICB0aGlzLmRyYXdIZWlnaHQgPSB0aGlzLmJhc2VJbWFnZS5oZWlnaHQ7XG4gICAgdGhpcy5yYWRpdXMgPSA0MDtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXN0cm95QmFzZSA9IHRoaXMuZGVzdHJveUJhc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRlc3Ryb3lCYXNlKCl7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMuYmFzZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXN0cm95ZWQtYmFzZVwiKTtcbiAgICB0aGlzLmRyYXdXaWR0aCA9IDEwMDtcbiAgICB0aGlzLmRyYXdIZWlnaHQgPSAxMDA7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24ueCAtPSAyMDtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbi55Kz00MDtcbiAgfVxuXG4gIGRyYXcoKXsgXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5iYXNlSW1hZ2UsIFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCwgXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55LFxuICAgICAgdGhpcy5kcmF3V2lkdGgsXG4gICAgICB0aGlzLmRyYXdIZWlnaHRcblxuICAgICAgKTtcbiAgfVxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb3Npb257XG4gIGNvbnN0cnVjdG9yKGN0eCwgcG9zaXRpb24pe1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgIHk6IHBvc2l0aW9uLnlcbiAgICB9OyAvLzUwIGlzIG1hZ2ljIG51bWJlciBjZW50ZXJcbiAgICB0aGlzLnBvc2l0aW9uPXtcbiAgICAgIHg6cG9zaXRpb24ueCxcbiAgICAgIHk6cG9zaXRpb24ueVxuICAgIH07XG5cbiAgICB0aGlzLnNpemUgPSA2MDtcbiAgICB0aGlzLm1heFNpemUgPSAxNTA7XG4gICAgdGhpcy5ncm93dGhSYXRlID0gKHRoaXMubWF4U2l6ZSAtIHRoaXMuc2l6ZSkgLyA0O1xuICAgIC8vY2FsY3VsYXRpb24gZm9yIGhvdyBmYXN0IHRvIGdyb3dcblxuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMudGltZXIgPSAwO1xuICAgIHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheSA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0xXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tMlwiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTNcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi00XCIpXTtcbiAgICB0aGlzLmltYWdlVG9EcmF3ID0gdGhpcy5leHBsb3Npb25JbWFnZUFycmF5WzBdO1xuICAgIHRoaXMuc3RhZ2UgPSAwO1xuICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gdGhpcy5zaXplLzI7XG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUV4cGxvc2lvbiA9IHRoaXMudXBkYXRlRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVFeHBsb3Npb24oZHQpe1xuICAgIGR0ID0gZHQvMTAwMDtcbiAgICB0aGlzLnRpbWVyKz1kdDtcbiAgICBpZiAodGhpcy50aW1lciA+PSAwLjgpe1xuICAgICAgdGhpcy5zdGFnZSsrO1xuXG4gICAgICB0aGlzLnRpbWVyID0wO1xuICAgIH0gICAgXG4gICAgaWYgKHRoaXMuc3RhZ2UgPCA0KXtcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnggPSB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnNpemUvMjtcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNpemUvMjtcbiAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgdGhpcy5zaXplICs9IHRoaXMuZ3Jvd3RoUmF0ZSAqIGR0OyAgXG4gICAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IHRoaXMuc2l6ZSAvIDI7ICAgIFxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXlbdGhpcy5zdGFnZV0sXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54LFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2l6ZSwgdGhpcy5zaXplXG4gICAgKTtcbiAgfVxufSIsImltcG9ydCBNZXRlb3IgZnJvbSBcIi4vbWV0ZW9yXCI7XG5pbXBvcnQgTWlzc2lsZSBmcm9tIFwiLi9taXNzaWxlXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQgRXhwbG9zaW9uIGZyb20gXCIuL2V4cGxvc2lvblwiO1xuaW1wb3J0IEdhbWVEaXNwbGF5IGZyb20gXCIuL2dhbWVEaXNwbGF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVEaXN0YW5jZSB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgd2lkdGgsIGhlaWdodCl7XG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xuICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuc2NyZWVuV2lkdGggPSB3aWR0aDsgXG5cbiAgICB0aGlzLm1ldGVvckFycmF5ID0gW107XG4gICAgdGhpcy5iYXNlQXJyYXkgPSBbXTtcbiAgICB0aGlzLm1pc3NpbGVBcnJheSA9IFtdO1xuICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkgPSBbXTtcblxuICAgIC8vdGhpcy5taXNzaWxlQ291bnQgPSAxMDtcblxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLnRpbWVyID0gMDsgLy91c2VkIHRvIGdlbmVyYXRlIG5ldyBtZXRlb3JzIGF0IGludGVydmFsc1xuICAgIHRoaXMubGV2ZWwgPSAwOyAvL2NvbnRyb2xzIGRpZmZpY3VsdHkgYW5kIHBhY2Ugb2YgZ2FtZVxuICAgIHRoaXMubGV2ZWxNdWx0aXBsaWVyID0gMC44NTtcbiAgICBcbiAgICB0aGlzLmdhbWVEaXNwbGF5ID0gbmV3IEdhbWVEaXNwbGF5KHRoaXMuY3R4KTsgICBcblxuICAgIHRoaXMuZ2FtZUxvb3AgPSB0aGlzLmdhbWVMb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ydW5HYW1lID0gdGhpcy5ydW5HYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycyA9IHRoaXMuYnVpbGROZXdNZXRlb3JzLmJpbmQodGhpcyk7ICBcbiAgICB0aGlzLnNldHVwTGV2ZWwgPSB0aGlzLnNldHVwTGV2ZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLndhaXRGb3JTdGFydCA9IHRoaXMud2FpdEZvclN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEdhbWUgPSB0aGlzLnJlc2V0R2FtZS5iaW5kKHRoaXMpOyAgIFxuICAgIFxuICAgIHRoaXMuZXhwbG9zaW9uQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi1hdWRpb1wiKTsgICAgXG5cbiAgICB0aGlzLmFjdGl2ZUxpc3RlbmVyID0gdHJ1ZTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gICAgYmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7IFxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZCwgMCwgMCk7IH0sIGZhbHNlKTtcbiAgICAvLyAkKFwiI2JhY2tncm91bmRcIikub25lKFwia2V5cHJlc3NcIiwgdGhpcy53YWl0Rm9yU3RhcnQpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKCkgPT4ge3RoaXMud2FpdEZvclN0YXJ0KCk7fSk7XG4gICAgXG4gICAgLy8gYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge3RoaXMuc2V0dXBMZXZlbCgpO30sIGZhbHNlKTtcbiAgfVxuXG4gIHJlc2V0R2FtZSgpe1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMudGltZXIgPSAwOyAvL3VzZWQgdG8gZ2VuZXJhdGUgbmV3IG1ldGVvcnMgYXQgaW50ZXJ2YWxzXG4gICAgdGhpcy5sZXZlbCA9IDA7IC8vY29udHJvbHMgZGlmZmljdWx0eSBhbmQgcGFjZSBvZiBnYW1lXG4gICAgdGhpcy5sZXZlbE11bHRpcGxpZXIgPSAwLjg1O1xuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmdhbWVEaXNwbGF5LnJlc2V0RGlzcGxheSgpO1xuICB9XG5cbiAgd2FpdEZvclN0YXJ0KCl7XG4gICAgaWYgKHRoaXMuYWN0aXZlTGlzdGVuZXIpe1xuICAgICAgdGhpcy5nYW1lRGlzcGxheS5jaGFuZ2VVc2VyUHJvbXB0KDEpO1xuICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICAgIHRoaXMuc2V0dXBMZXZlbCgpO1xuICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpeyAgICAgXG4gICAgLy9jaGVjayBmb3IgbWlzc2lsZSBjb3VudFxuICAgIC8vZmluZCBjbG9zZXN0IGJhc2UgdG8gY2xpY2tcbiAgICAvL3NwYXduIG1pc3NpbGUgYXQgYmFzZSBoZWFkaW5nIHRvd2FyZHMgY2xpY2sgXG4gICAgaWYgKHRoaXMuZ2FtZURpc3BsYXkubWlzc2lsZXMgPiAwKXtcbiAgICAgIGxldCBwb3RlbnRpYWxCYXNlcyA9IHRoaXMuYmFzZUFycmF5LmZpbHRlcihiYXNlID0+IHtyZXR1cm4gIWJhc2UuZGVzdHJveWVkO30pO1xuICAgICAgbGV0IGNsb3Nlc3RCYXNlID0gcG90ZW50aWFsQmFzZXNbMF07XG4gICAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnBvc2l0aW9uLngpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb3RlbnRpYWxCYXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoTWF0aC5hYnMoZS5vZmZzZXRYIC0gcG90ZW50aWFsQmFzZXNbaV0ucG9zaXRpb24ueCkgPCBkaWZmZXJlbmNlKSB7XG4gICAgICAgICAgY2xvc2VzdEJhc2UgPSBwb3RlbnRpYWxCYXNlc1tpXTtcbiAgICAgICAgICBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UucG9zaXRpb24ueCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBkZXN0aW5hdGlvbiA9IHtcbiAgICAgICAgeDogZS5vZmZzZXRYLFxuICAgICAgICB5OiBlLm9mZnNldFlcbiAgICAgIH07XG4gICAgICB0aGlzLmdhbWVEaXNwbGF5LmZpcmVNaXNzaWxlKCk7XG4gICAgICB0aGlzLm1pc3NpbGVBcnJheS5wdXNoKG5ldyBNaXNzaWxlKGRlc3RpbmF0aW9uLCAoY2xvc2VzdEJhc2UucG9zaXRpb24pLCB0aGlzLmN0eCkpO1xuICAgIH0gICAgIFxuICB9XG5cbiAgc2V0dXBMZXZlbCgpe1xuICAgIC8vc2V0cyB1cCBlYWNoIGxldmVsICAgIFxuICAgIHRoaXMubWV0ZW9yQXJyYXkgPSBbXTtcbiAgICB0aGlzLmJhc2VBcnJheSA9IFtdO1xuICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkgPSBbXTtcbiAgICB0aGlzLm1pc3NpbGVBcnJheSA9IFtdOyAgICBcbiAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgLy9zZXR1cCBtZXRlb3JzID8/P21lcmdlIHdpdGggYnVpbGRNZXRlb3JzPz8/P1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKDggKyAoMiAqIHRoaXMubGV2ZWwpKTsgaSsrKSB7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gICAgLy9zZXR1cCBiYXNlc1xuICAgIGxldCBiYXNlUG9zaXRpb24gPSB7XG4gICAgICB4OiAxNTAsXG4gICAgICB5OiB0aGlzLnNjcmVlbkhlaWdodCAtIDEwMFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgdGhpcy5iYXNlQXJyYXkucHVzaChuZXcgQmFzZSh0aGlzLmN0eCwgYmFzZVBvc2l0aW9uKSk7XG5cbiAgICAgIGJhc2VQb3NpdGlvbi54ICs9IHRoaXMuc2NyZWVuV2lkdGggLyAzO1xuICAgIH0gIFxuICAgIHRoaXMubGV2ZWxNdWx0aXBsaWVyICs9IDAuMTU7XG4gICAgdGhpcy5ydW5HYW1lKCk7XG4gIH1cblxuICBydW5HYW1lKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZCwgMCwgMCk7ICAgIFxuICAgIHRoaXMuZ2FtZURpc3BsYXkubmV4dExldmVsKHRoaXMuZ2FtZUxvb3ApO1xuICB9XG5cbiAgZ2FtZUxvb3AodGltZXN0YW1wKXsgIFxuICAgIGlmICghdGhpcy5zdGFydFRpbWUpe1xuICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGhpcy5zdGFydFRpbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmdhbWVEaXNwbGF5LmNoZWNrQ29udGludWUoKSl7XG4gICAgICAvL2dhbWUgc3RpbGwgcHJvZ3Jlc3NpbmcsIHBsYXllciBoYXMgbmVpdGhlciB3b24gb3IgbG9zdFxuICAgICAgbGV0IGVsYXBzZWRGcmFtZVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgIC8vZGVidWdnZXI7XG4gICAgICB0aGlzLnRpbWVyICs9IGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwO1xuXG4gICAgICAvL2NvbnN0IGxldmVsTXVsdGlwbGllciA9IDEuMDtcblxuICAgICAgaWYgKHRoaXMudGltZXIgPj0gMy4wKSB7XG4gICAgICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTtcblxuICAgICAgdGhpcy5tZXRlb3JBcnJheS5mb3JFYWNoKG1ldGVvciA9PiB7XG4gICAgICAgIC8vZmlyc3QsIG1vdmUgdGhlIG1ldGVvclxuICAgICAgICBpZiAobWV0ZW9yLnBvc2l0aW9uLnkgPj0gdGhpcy5zY3JlZW5IZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWV0ZW9yLnVwZGF0ZVBvc2l0aW9uKHRoaXMubGV2ZWxNdWx0aXBsaWVyLCBlbGFwc2VkRnJhbWVUaW1lIC8gMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBwb3Mgb2YgbWV0ZW9yIGFnYWluc3QgZXhwbG9zaW9ucywgYW5kIGdyb3VuZCBcbiAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5mb3JFYWNoKGV4cGxvc2lvbiA9PiB7XG4gICAgICAgICAgbGV0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoZXhwbG9zaW9uLnBvc2l0aW9uLCBtZXRlb3IucG9zaXRpb24pO1xuICAgICAgICAgIC8vIGlmIG1ldGVvciBpbiByYWRpdXMsIGRlc3Ryb3kgaXQgYW5kIGNyZWF0ZSBleHBsb3Npb25cbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gZXhwbG9zaW9uLmV4cGxvc2lvblJhZGl1cyArIG1ldGVvci5yYWRpdXMpIHtcbiAgICAgICAgICAgIG5ldyBBdWRpbyh0aGlzLmV4cGxvc2lvbkF1ZGlvLnNyYykucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIG1ldGVvci5wb3NpdGlvbikpO1xuICAgICAgICAgICAgdGhpcy5tZXRlb3JBcnJheS5zcGxpY2UodGhpcy5tZXRlb3JBcnJheS5pbmRleE9mKG1ldGVvciksIDEpO1xuICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5kZXN0cm95TWV0ZW9yKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJhc2VBcnJheS5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgICAgIGJhc2UuZHJhdygpO1xuICAgICAgICAgIGlmIChiYXNlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKG1ldGVvci5wb3NpdGlvbiwgYmFzZS5wb3NpdGlvbik7XG4gICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IGJhc2UucmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgICAgYmFzZS5kZXN0cm95QmFzZSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5kZXN0cm95QmFzZSgpO1xuICAgICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIGJhc2UucG9zaXRpb24pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LmZvckVhY2gobWlzc2lsZSA9PiB7XG4gICAgICAgIC8vY2hlY2sgZm9yIGV4cGxvc2lvblxuICAgICAgICBpZiAobWlzc2lsZS5jaGVja0V4cGxvc2lvbihjYWxjdWxhdGVEaXN0YW5jZShtaXNzaWxlLnBvc2l0aW9uLCBtaXNzaWxlLmRlc3RpbmF0aW9uKSkpIHtcbiAgICAgICAgICBuZXcgQXVkaW8odGhpcy5leHBsb3Npb25BdWRpby5zcmMpLnBsYXkoKTtcbiAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgbWlzc2lsZS5wb3NpdGlvbikpOyAgICAgICAgICBcbiAgICAgICAgICB0aGlzLm1pc3NpbGVBcnJheS5zcGxpY2UodGhpcy5taXNzaWxlQXJyYXkuaW5kZXhPZihtaXNzaWxlKSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWlzc2lsZS51cGRhdGVQb3NpdGlvbigoZWxhcHNlZEZyYW1lVGltZSAvIDEwMDApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuZm9yRWFjaChleHBsb3Npb24gPT4ge1xuICAgICAgICBpZiAoZXhwbG9zaW9uLnN0YWdlID49IDQpIHtcbiAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnNwbGljZSh0aGlzLmV4cGxvc2lvbkFycmF5LmluZGV4T2YoZXhwbG9zaW9uKSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhwbG9zaW9uLnVwZGF0ZUV4cGxvc2lvbihlbGFwc2VkRnJhbWVUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTsgICBcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ2FtZURpc3BsYXkuZGVzdHJveWVkTWV0ZW9yQ291bnQgPj0gdGhpcy5nYW1lRGlzcGxheS5sZXZlbEdvYWwpe1xuICAgICAgICAvL3BsYXllciBwcm9ncmVzcyB0byBuZXh0IGxldmVsXG4gICAgICAgIHRoaXMuc2V0dXBMZXZlbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGxheWVyIGxvc3RcbiAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nYW1lTG9zdCgpOyAgICAgICAgXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5jaGFuZ2VVc2VyUHJvbXB0KDIpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXIgPSB0cnVlO1xuICAgICAgICB9LDI1MDApO1xuICAgICAgfVxuICAgIH0gICAgXG4gIH1cblxuICBidWlsZE5ld01ldGVvcnMoKSB7XG4gICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5sZXZlbCAqIDI7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lRGlzcGxheXtcbiAgY29uc3RydWN0b3IoY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgXG4gICAgdGhpcy5jdHguZm9udCA9IFwiMjRwdCBzYW5zIHNlcmlmXCI7XG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5taXNzaWxlcyA9IDEwO1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPSAwO1xuICAgIHRoaXMubGV2ZWxHb2FsID0gMTU7XG5cbiAgICB0aGlzLmJhc2VzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tYmFzZXNcIik7XG4gICAgdGhpcy5taXNzaWxlc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLW1pc3NpbGVzXCIpO1xuICAgIHRoaXMubGV2ZWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1sZXZlbFwiKTtcbiAgICB0aGlzLmRlc3Ryb3llZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLWRlc3Ryb3llZFwiKTtcbiAgICB0aGlzLnByb21wdEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1wcm9tcHQtaGVhZGVyLWFjdGl2ZVwiKTtcblxuICAgIHRoaXMuY2hlY2tDb250aW51ZSA9IHRoaXMuY2hlY2tDb250aW51ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveUJhc2UgPSB0aGlzLmRlc3Ryb3lCYXNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ID0gdGhpcy51cGRhdGVEaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXh0TGV2ZWwgPSB0aGlzLm5leHRMZXZlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveU1ldGVvciA9IHRoaXMuZGVzdHJveU1ldGVvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2FtZUxvc3QgPSB0aGlzLmdhbWVMb3N0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXR1cExldmVsRGlzcGxheSA9IHRoaXMuc2V0dXBMZXZlbERpc3BsYXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0RGlzcGxheSA9IHRoaXMucmVzZXREaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VVc2VyUHJvbXB0ID0gdGhpcy5jaGFuZ2VVc2VyUHJvbXB0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuXG4gIGNoYW5nZVVzZXJQcm9tcHQocHJvbXB0SWQpe1xuICAgIGlmIChwcm9tcHRJZCA9PT0gMSl7XG4gICAgICB0aGlzLnByb21wdEhlYWRlci5pbm5lclRleHQgPSBcIkJlZ2luIVwiO1xuICAgICAgdGhpcy5wcm9tcHRIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1c2VyLXByb21wdC1oZWFkZXItaWRsZVwiKTtcbiAgICB9IGVsc2UgaWYgKHByb21wdElkID09PSAyKXtcbiAgICAgIHRoaXMucHJvbXB0SGVhZGVyLmlubmVyVGV4dCA9IFwiUHJlc3MgQW55IEtleSB0byBCZWdpblwiO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RGlzcGxheSgpe1xuICAgIHRoaXMuYmFzZXMgPSAzO1xuICAgIHRoaXMubWlzc2lsZXMgPSAxMDtcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID0gMDtcbiAgICB0aGlzLmxldmVsR29hbCA9IDE1O1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9XG5cbiAgc2V0dXBMZXZlbERpc3BsYXkoKXtcbiAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgdGhpcy5taXNzaWxlcyA9ICg4ICsgKHRoaXMubGV2ZWwpKTsgICAgXG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCA9IDA7XG4gICAgdGhpcy5sZXZlbEdvYWwgPSAoOCArICh0aGlzLmxldmVsICogNSkpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9XG5cbiAgbmV4dExldmVsKGNhbGxiYWNrKXtcbiAgICAvL2xldmVsIHNldHVwIGxvZ2ljICAgIFxuICAgIHRoaXMuc2V0dXBMZXZlbERpc3BsYXkoKTsgXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCg1MDAsIDMwMCwgMjUwLCAyMDApO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgTGV2ZWwgJHt0aGlzLmxldmVsfWAsIDU3NSw0MDApO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgY2FsbGJhY2soMCk7IH0sIDI1MDApOyAgICBcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXkoKXtcbiAgICB0aGlzLmxldmVsRGl2LmlubmVyVGV4dCA9IGBMZXZlbDogJHt0aGlzLmxldmVsfWA7XG4gICAgdGhpcy5iYXNlc0Rpdi5pbm5lclRleHQgPSBgQmFzZXM6ICR7dGhpcy5iYXNlc31gO1xuICAgIHRoaXMubWlzc2lsZXNEaXYuaW5uZXJUZXh0ID0gYE1pc3NpbGVzOiAke3RoaXMubWlzc2lsZXN9YDtcbiAgICB0aGlzLmRlc3Ryb3llZERpdi5pbm5lclRleHQgPSBgRGVzdHJveWVkIE1ldGVvcnM6ICR7dGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudH0gb2YgJHt0aGlzLmxldmVsR29hbH1gO1xuICB9XG5cbiAgZmlyZU1pc3NpbGUoKXtcbiAgICB0aGlzLm1pc3NpbGVzIC09IDE7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuYmFzZXMgLT0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuXG4gIGRlc3Ryb3lNZXRlb3IoKXtcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ICs9IDE7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cblxuICBnYW1lTG9zdCgpe1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMzUwLCAzMDAsIDY1MCwgMjAwKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYEVhcnRoIGhhcyBiZWVuIGRlc3Ryb3llZCwgd2hvb3BzIWAsIDQ1MCwgNDAwKTtcbiAgICB0aGlzLnByb21wdEhlYWRlci5pbm5lclRleHQgPSBcIkdhbWUgT3ZlclwiO1xuICB9XG5cbiAgY2hlY2tDb250aW51ZSgpe1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID49IHRoaXMubGV2ZWxHb2FsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMuYmFzZXMgPjAgKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRlb3J7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiAtMTBcbiAgICB9O1xuICAgIC8vIHRoaXMuZHJhd1Bvc2l0aW9uID0ge1xuICAgIC8vICAgeDogdGhpcy5wb3NpdGlvbi54IC0gMTAsXG4gICAgLy8gICB5OiB0aGlzLnBvc2l0aW9uLnkgLSAxMFxuICAgIC8vIH07XG4gICAgdGhpcy5zcGVlZCA9IDU1ICogdGhpcy5zZXRTcGVlZCgpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICB0aGlzLnJhZGl1cyA9IDEwO1xuXG4gICAgdGhpcy5tZXRlb3JJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWV0ZW9yLTFcIik7XG5cbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0U3BlZWQoKXtcbiAgICAvL2hlbHBzIHNldCBhbiBpbnRpYWwgcmFuZG9tIHJhbmdlIG9mIHNwZWVkc1xuICAgIGxldCB0aHJvdHRsZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh0aHJvdHRsZXIgPD0gMC4yNSkgcmV0dXJuIDAuNzU7XG4gICAgaWYgKHRocm90dGxlciA+PSAwLjc1KSByZXR1cm4gMS4yNTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHNldERpcmVjdGlvbigpe1xuICAgIC8vc2V0IFJhbmRvbSB4IGRpcmVjdGlvblxuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAoeCA+IDAuNSkgeCAqPSAtMTtcbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGxldmVsTXVsdGlwbGllciwgZGVsdGFUaW1lKXtcbiAgICAvL2RlYnVnZ2VyO1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLmRpcmVjdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKGxldmVsTXVsdGlwbGllciAqIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpOyAgXG4gICAgLy9kZWJ1Z2dlcjsgIFxuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cblxuICBkcmF3KCl7XG4gICAgLy8gdGhpcy5jdHguYmVnaW5QYXRoKCk7ICAgIFxuICAgIC8vIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAvLyB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5tZXRlb3JJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueC0xMCxcbiAgICAgIHRoaXMucG9zaXRpb24ueS0xMCxcbiAgICAgIDIwLFxuICAgICAgMjBcbiAgICApO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lsZXtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24sIHBvc2l0aW9uLCBjdHgpe1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCArIDEwLFxuICAgICAgeTogcG9zaXRpb24ueSAtIDEwXG4gICAgfTtcblxuICAgIHRoaXMuY291cnNlID0ge1xuICAgICAgeDogKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCksXG4gICAgICB5OiAodGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55KVxuICAgIH07XG4gICAgdGhpcy5zcGVlZCA9IDAuODtcbiAgICB0aGlzLnJhZGl1cyA9IDU7XG4gICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSAzO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5taXNzaWxlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllbGxvdy1taXNzaWxlXCIpOyAgICBcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIC8vdGhpcy5jYWxjdWxhdGVEaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrRXhwbG9zaW9uID0gdGhpcy5jaGVja0V4cGxvc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2hlY2tFeHBsb3Npb24oZGlzdGFuY2Upe1xuICAgIC8vbGV0IGRpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZSgpOyAgICBcbiAgICBpZiAoZGlzdGFuY2UgPD0gdGhpcy5leHBsb3Npb25SYWRpdXMpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZURpc3RhbmNlKCl7XG4gIC8vICAgbGV0IHhEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi54IC0gdGhpcy5kZXN0aW5hdGlvbi54KTtcbiAgLy8gICBsZXQgeURpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmRlc3RpbmF0aW9uLnkpO1xuICAvLyAgIHJldHVybiBNYXRoLnNxcnQoKHhEaXN0KnhEaXN0KSArICh5RGlzdCp5RGlzdCkpO1xuICAvLyB9XG5cbiAgdXBkYXRlUG9zaXRpb24oZHQpe1xuICAgIHRoaXMucG9zaXRpb24ueCArPSAodGhpcy5jb3Vyc2UueCAvIHRoaXMuc3BlZWQpICogZHQ7ICAgIFxuICAgIHRoaXMucG9zaXRpb24ueSArPSAodGhpcy5jb3Vyc2UueSAvIHRoaXMuc3BlZWQpICogZHQ7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBkcmF3KCl7XG4gICAgLy9tZXRlb3JzIGFyZSBjaGVja2luZyBmb3IgY29sbGlzaW9ucyBpbiBHYW1lLmpzXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5taXNzaWxlSW1hZ2UsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnlcbiAgICApO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZURpc3RhbmNlID0gKHBvczEsIHBvczIpID0+IHtcbiAgLy9kZWJ1Z2dlcjtcbiAgbGV0IHhEaXN0ID0gTWF0aC5hYnMocG9zMS54IC0gcG9zMi54KTtcbiAgbGV0IHlEaXN0ID0gTWF0aC5hYnMocG9zMS55IC0gcG9zMi55KTtcbiAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QgKiB4RGlzdCkgKyAoeURpc3QgKiB5RGlzdCkpO1xufTtcblxuLy8gY2FsY3VsYXRlRGlzdGFuY2UoKXtcbi8vICAgbGV0IHhEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi54IC0gdGhpcy5kZXN0aW5hdGlvbi54KTtcbi8vICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gdGhpcy5kZXN0aW5hdGlvbi55KTtcbi8vICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QgKiB4RGlzdCkgKyAoeURpc3QgKiB5RGlzdCkpO1xuLy8gfSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=