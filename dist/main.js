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
    this.gameDisplay.setupLevelDisplay();
    this.gameLoop = this.gameLoop.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.buildNewMeteors = this.buildNewMeteors.bind(this);
    this.setupLevel = this.setupLevel.bind(this);
    this.waitForStart = this.waitForStart.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.explosionAudio = document.getElementById("explosion-audio");
    this.baseDeathAudio = document.getElementById("base-death-audio");
    this.missileFlightAudio = document.getElementById("missile-flight");
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
        new Audio(this.missileFlightAudio.src).play();
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
      this.startTime = null;
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
              new Audio(_this2.baseDeathAudio.src).play();
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
        }); //final check for out of missile lose condition

        if (this.gameDisplay.missiles === 0) {
          //no more missiles in rack, track for active explosions and missiles
          if (this.missileArray.length === 0 && this.explosionArray.length === 0) {
            this.gameDisplay.outOfMissiles();
          }
        }

        requestAnimationFrame(this.gameLoop); //Game Display not Continueing
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
    this.continueGame = true;
    this.basesDiv = document.getElementById("game-info-bases");
    this.missilesDiv = document.getElementById("game-info-missiles");
    this.levelDiv = document.getElementById("game-info-level");
    this.destroyedDiv = document.getElementById("game-info-destroyed");
    this.promptHeader = document.getElementById("user-prompt-header-active");
    this.levelAudio = document.getElementById("level-advance");
    this.checkContinue = this.checkContinue.bind(this);
    this.destroyBase = this.destroyBase.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.destroyMeteor = this.destroyMeteor.bind(this);
    this.gameLost = this.gameLost.bind(this);
    this.setupLevelDisplay = this.setupLevelDisplay.bind(this);
    this.resetDisplay = this.resetDisplay.bind(this);
    this.changeUserPrompt = this.changeUserPrompt.bind(this);
    this.animateInfo = this.animateInfo.bind(this);
    this.outOfMissiles = this.outOfMissiles.bind(this);
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
      if (this.level >= 3) this.levelGoal += this.level;
      this.continueGame = true;
      this.updateDisplay(4);
    }
  }, {
    key: "nextLevel",
    value: function nextLevel(callback) {
      //level setup logic       
      this.setupLevelDisplay();

      if (this.level > 1) {
        this.levelAudio.play();
      }

      this.ctx.fillStyle = "red";
      this.ctx.fillRect(500, 300, 250, 200);
      this.ctx.fillStyle = "yellow";
      this.ctx.strokeText("Level ".concat(this.level), 575, 400);
      window.setTimeout(function () {
        callback(0);
      }, 2500);
    }
  }, {
    key: "animateInfo",
    value: function animateInfo(container) {
      var animateClass = "game-info-animate";
      var animatedDoc = container;
      animatedDoc.classList.add(animateClass);
      window.setTimeout(function () {
        animatedDoc.classList.remove(animateClass);
      }, 1250);
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.levelDiv.innerText = "Level: ".concat(this.level);
      this.basesDiv.innerText = "Bases: ".concat(this.bases);
      this.missilesDiv.innerText = "Missiles: ".concat(this.missiles);
      this.destroyedDiv.innerText = "Destroyed Meteors: ".concat(this.destroyedMeteorCount, " of ").concat(this.levelGoal);

      switch (num) {
        case 1:
          this.animateInfo(this.basesDiv);
          break;

        case 2:
          this.animateInfo(this.missilesDiv);
          break;

        case 3:
          this.animateInfo(this.destroyedDiv);
          break;

        case 4:
          this.animateInfo(this.levelDiv);

        default:
          break;
      }
    }
  }, {
    key: "fireMissile",
    value: function fireMissile() {
      this.missiles -= 1;
      this.updateDisplay(2);
    }
  }, {
    key: "destroyBase",
    value: function destroyBase() {
      this.bases -= 1;
      this.updateDisplay(1);
    }
  }, {
    key: "destroyMeteor",
    value: function destroyMeteor() {
      this.destroyedMeteorCount += 1;
      this.updateDisplay(3);
    }
  }, {
    key: "outOfMissiles",
    value: function outOfMissiles() {
      if (this.levelGoal - this.destroyedMeteorCount > this.bases) {
        this.continueGame = false;
      }
    }
  }, {
    key: "gameLost",
    value: function gameLost() {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(300, 300, 650, 200);
      this.ctx.fillStyle = "yellow";
      this.ctx.strokeText("Earth has been destroyed, whoops!", 400, 400);
      this.promptHeader.innerText = "Game Over";
    }
  }, {
    key: "checkContinue",
    value: function checkContinue() {
      if (this.destroyedMeteorCount >= this.levelGoal) {
        this.continueGame = false;
      }

      if (this.bases < 1) {
        this.continueGame = false;
      }

      return this.continueGame;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiU0NSRUVOX1dJRFRIIiwiU0NSRUVOX0hFSUdIVCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsIkdhbWUiLCJoYW5kbGVDbGljayIsIkJhc2UiLCJwb3NpdGlvbiIsImJhc2VJbWFnZSIsImRyYXdQb3NpdGlvbiIsIngiLCJ5IiwiZHJhd1dpZHRoIiwiZHJhd0hlaWdodCIsInJhZGl1cyIsImRlc3Ryb3llZCIsImRyYXciLCJiaW5kIiwiZGVzdHJveUJhc2UiLCJkcmF3SW1hZ2UiLCJFeHBsb3Npb24iLCJzaXplIiwibWF4U2l6ZSIsImdyb3d0aFJhdGUiLCJ0aW1lciIsImV4cGxvc2lvbkltYWdlQXJyYXkiLCJpbWFnZVRvRHJhdyIsInN0YWdlIiwiZXhwbG9zaW9uUmFkaXVzIiwidXBkYXRlRXhwbG9zaW9uIiwiZHQiLCJjb250ZXh0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJtZXRlb3JBcnJheSIsImJhc2VBcnJheSIsIm1pc3NpbGVBcnJheSIsImV4cGxvc2lvbkFycmF5IiwibGFzdFRpbWUiLCJzdGFydFRpbWUiLCJsZXZlbCIsImxldmVsTXVsdGlwbGllciIsImdhbWVEaXNwbGF5IiwiR2FtZURpc3BsYXkiLCJzZXR1cExldmVsRGlzcGxheSIsImdhbWVMb29wIiwicnVuR2FtZSIsImJ1aWxkTmV3TWV0ZW9ycyIsInNldHVwTGV2ZWwiLCJ3YWl0Rm9yU3RhcnQiLCJyZXNldEdhbWUiLCJleHBsb3Npb25BdWRpbyIsImJhc2VEZWF0aEF1ZGlvIiwibWlzc2lsZUZsaWdodEF1ZGlvIiwiYWN0aXZlTGlzdGVuZXIiLCJiYWNrZ3JvdW5kIiwicmVzZXREaXNwbGF5IiwiY2hhbmdlVXNlclByb21wdCIsImUiLCJtaXNzaWxlcyIsIkF1ZGlvIiwic3JjIiwicGxheSIsInBvdGVudGlhbEJhc2VzIiwiZmlsdGVyIiwiYmFzZSIsImNsb3Nlc3RCYXNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJvZmZzZXRYIiwiaSIsImxlbmd0aCIsImRlc3RpbmF0aW9uIiwib2Zmc2V0WSIsImZpcmVNaXNzaWxlIiwicHVzaCIsIk1pc3NpbGUiLCJwb3NYIiwiZmxvb3IiLCJyYW5kb20iLCJNZXRlb3IiLCJiYXNlUG9zaXRpb24iLCJuZXh0TGV2ZWwiLCJ0aW1lc3RhbXAiLCJjaGVja0NvbnRpbnVlIiwiZWxhcHNlZEZyYW1lVGltZSIsImZvckVhY2giLCJtZXRlb3IiLCJzcGxpY2UiLCJpbmRleE9mIiwidXBkYXRlUG9zaXRpb24iLCJleHBsb3Npb24iLCJkaXN0YW5jZSIsImNhbGN1bGF0ZURpc3RhbmNlIiwiZGVzdHJveU1ldGVvciIsIm1pc3NpbGUiLCJjaGVja0V4cGxvc2lvbiIsIm91dE9mTWlzc2lsZXMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkZXN0cm95ZWRNZXRlb3JDb3VudCIsImxldmVsR29hbCIsImdhbWVMb3N0Iiwid2luZG93Iiwic2V0VGltZW91dCIsImZvbnQiLCJiYXNlcyIsImNvbnRpbnVlR2FtZSIsImJhc2VzRGl2IiwibWlzc2lsZXNEaXYiLCJsZXZlbERpdiIsImRlc3Ryb3llZERpdiIsInByb21wdEhlYWRlciIsImxldmVsQXVkaW8iLCJ1cGRhdGVEaXNwbGF5IiwiYW5pbWF0ZUluZm8iLCJwcm9tcHRJZCIsImlubmVyVGV4dCIsInNldEF0dHJpYnV0ZSIsImNhbGxiYWNrIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VUZXh0IiwiY29udGFpbmVyIiwiYW5pbWF0ZUNsYXNzIiwiYW5pbWF0ZWREb2MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJudW0iLCJzcGVlZCIsInNldFNwZWVkIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwibWV0ZW9ySW1hZ2UiLCJ0aHJvdHRsZXIiLCJkZWx0YVRpbWUiLCJjb3Vyc2UiLCJtaXNzaWxlSW1hZ2UiLCJwb3MxIiwicG9zMiIsInhEaXN0IiwieURpc3QiLCJzcXJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FD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TUFBTCxDQUFZOUgsQ0FBWixHQUFnQixLQUFLdUgsS0FBdEIsR0FBK0JwRyxFQUFsRDtBQUNBLFdBQUtkLElBQUw7QUFDRDs7OzJCQUVLO0FBQ0o7QUFDQSxXQUFLbkIsR0FBTCxDQUFTc0IsU0FBVCxDQUNFLEtBQUt1SCxZQURQLEVBRUUsS0FBS25JLFFBQUwsQ0FBY0csQ0FGaEIsRUFHRSxLQUFLSCxRQUFMLENBQWNJLENBSGhCO0FBS0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pESDtBQUFBO0FBQU8sSUFBTW1GLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQzZDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUMvQztBQUNBLE1BQUlDLEtBQUssR0FBR3pFLElBQUksQ0FBQ0MsR0FBTCxDQUFTc0UsSUFBSSxDQUFDakksQ0FBTCxHQUFTa0ksSUFBSSxDQUFDbEksQ0FBdkIsQ0FBWjtBQUNBLE1BQUlvSSxLQUFLLEdBQUcxRSxJQUFJLENBQUNDLEdBQUwsQ0FBU3NFLElBQUksQ0FBQ2hJLENBQUwsR0FBU2lJLElBQUksQ0FBQ2pJLENBQXZCLENBQVo7QUFDQSxTQUFPeUQsSUFBSSxDQUFDMkUsSUFBTCxDQUFXRixLQUFLLEdBQUdBLEtBQVQsR0FBbUJDLEtBQUssR0FBR0EsS0FBckMsQ0FBUDtBQUNELENBTE0sQyxDQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUNYQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG4vL2NvbnN0IEFwcCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYXBwLmpzXCIpO1xuLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpOyAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgU0NSRUVOX1dJRFRIID0gMTIwMDtcbiAgY29uc3QgU0NSRUVOX0hFSUdIVCA9IDgwMDtcbiAgY3R4LmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSDtcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4LCBTQ1JFRU5fV0lEVEgsIFNDUkVFTl9IRUlHSFQpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWUuaGFuZGxlQ2xpY2ssIGZhbHNlKTtcbiAgLy9nYW1lLnJ1bkdhbWUoKTtcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2V7XG4gIGNvbnN0cnVjdG9yKGN0eCwgcG9zaXRpb24pe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuYmFzZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLWltYWdlXCIpO1xuICAgIFxuICAgIC8vdGhpcy5kZXN0cm95ZWRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgeTogcG9zaXRpb24ueVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngrMjEsXG4gICAgICB5OiBwb3NpdGlvbi55KzUwXG4gICAgfTsgLy9tYWdpYyBudW1iZXJzIGZvciB3aWR0aCBhbmQgaGVpZ2h0IGFkanVzdGluZ1xuICAgIHRoaXMuZHJhd1dpZHRoID0gdGhpcy5iYXNlSW1hZ2Uud2lkdGg7XG4gICAgdGhpcy5kcmF3SGVpZ2h0ID0gdGhpcy5iYXNlSW1hZ2UuaGVpZ2h0O1xuICAgIHRoaXMucmFkaXVzID0gNDA7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveUJhc2UgPSB0aGlzLmRlc3Ryb3lCYXNlLmJpbmQodGhpcyk7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3V2lkdGggPSAxMDA7XG4gICAgdGhpcy5kcmF3SGVpZ2h0ID0gMTAwO1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnggLT0gMjA7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24ueSs9NDA7XG4gIH1cblxuICBkcmF3KCl7IFxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuYmFzZUltYWdlLCBcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLngsIFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueSxcbiAgICAgIHRoaXMuZHJhd1dpZHRoLFxuICAgICAgdGhpcy5kcmF3SGVpZ2h0XG5cbiAgICAgICk7XG4gIH1cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9zaW9ue1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICB5OiBwb3NpdGlvbi55XG4gICAgfTsgLy81MCBpcyBtYWdpYyBudW1iZXIgY2VudGVyXG4gICAgdGhpcy5wb3NpdGlvbj17XG4gICAgICB4OnBvc2l0aW9uLngsXG4gICAgICB5OnBvc2l0aW9uLnlcbiAgICB9O1xuXG4gICAgdGhpcy5zaXplID0gNjA7XG4gICAgdGhpcy5tYXhTaXplID0gMTUwO1xuICAgIHRoaXMuZ3Jvd3RoUmF0ZSA9ICh0aGlzLm1heFNpemUgLSB0aGlzLnNpemUpIC8gNDtcbiAgICAvL2NhbGN1bGF0aW9uIGZvciBob3cgZmFzdCB0byBncm93XG5cbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXkgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tMVwiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTJcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0zXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tNFwiKV07XG4gICAgdGhpcy5pbWFnZVRvRHJhdyA9IHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheVswXTtcbiAgICB0aGlzLnN0YWdlID0gMDtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IHRoaXMuc2l6ZS8yO1xuXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVFeHBsb3Npb24gPSB0aGlzLnVwZGF0ZUV4cGxvc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlRXhwbG9zaW9uKGR0KXtcbiAgICBkdCA9IGR0LzEwMDA7XG4gICAgdGhpcy50aW1lcis9ZHQ7XG4gICAgaWYgKHRoaXMudGltZXIgPj0gMC44KXtcbiAgICAgIHRoaXMuc3RhZ2UrKztcblxuICAgICAgdGhpcy50aW1lciA9MDtcbiAgICB9ICAgIFxuICAgIGlmICh0aGlzLnN0YWdlIDwgNCl7XG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLzI7XG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55ID0gdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zaXplLzI7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICAgIHRoaXMuc2l6ZSArPSB0aGlzLmdyb3d0aFJhdGUgKiBkdDsgIFxuICAgICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSB0aGlzLnNpemUgLyAyOyAgICBcbiAgICB9XG4gICAgXG4gIH1cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5W3RoaXMuc3RhZ2VdLFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCxcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUsIHRoaXMuc2l6ZVxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgTWV0ZW9yIGZyb20gXCIuL21ldGVvclwiO1xuaW1wb3J0IE1pc3NpbGUgZnJvbSBcIi4vbWlzc2lsZVwiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IEV4cGxvc2lvbiBmcm9tIFwiLi9leHBsb3Npb25cIjtcbmltcG9ydCBHYW1lRGlzcGxheSBmcm9tIFwiLi9nYW1lRGlzcGxheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGlzdGFuY2UgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpe1xuICAgIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gd2lkdGg7IFxuXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5taXNzaWxlQXJyYXkgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5ID0gW107XG5cbiAgICAvL3RoaXMubWlzc2lsZUNvdW50ID0gMTA7XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMDsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciA9IDAuODU7XG4gICAgXG4gICAgdGhpcy5nYW1lRGlzcGxheSA9IG5ldyBHYW1lRGlzcGxheSh0aGlzLmN0eCk7ICBcbiAgICB0aGlzLmdhbWVEaXNwbGF5LnNldHVwTGV2ZWxEaXNwbGF5KCk7IFxuXG4gICAgdGhpcy5nYW1lTG9vcCA9IHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJ1bkdhbWUgPSB0aGlzLnJ1bkdhbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzID0gdGhpcy5idWlsZE5ld01ldGVvcnMuYmluZCh0aGlzKTsgIFxuICAgIHRoaXMuc2V0dXBMZXZlbCA9IHRoaXMuc2V0dXBMZXZlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2FpdEZvclN0YXJ0ID0gdGhpcy53YWl0Rm9yU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0R2FtZSA9IHRoaXMucmVzZXRHYW1lLmJpbmQodGhpcyk7ICAgXG4gICAgXG4gICAgdGhpcy5leHBsb3Npb25BdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLWF1ZGlvXCIpO1xuICAgIHRoaXMuYmFzZURlYXRoQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2UtZGVhdGgtYXVkaW9cIik7ICAgIFxuICAgIHRoaXMubWlzc2lsZUZsaWdodEF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXNzaWxlLWZsaWdodFwiKTsgXG4gICAgICBcblxuICAgIHRoaXMuYWN0aXZlTGlzdGVuZXIgPSB0cnVlO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgICBiYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHsgXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTsgfSwgZmFsc2UpO1xuICAgIC8vICQoXCIjYmFja2dyb3VuZFwiKS5vbmUoXCJrZXlwcmVzc1wiLCB0aGlzLndhaXRGb3JTdGFydCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoKSA9PiB7dGhpcy53YWl0Rm9yU3RhcnQoKTt9KTtcbiAgICBcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7dGhpcy5zZXR1cExldmVsKCk7fSwgZmFsc2UpO1xuICB9XG5cbiAgcmVzZXRHYW1lKCl7XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMDsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciA9IDAuODU7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMuZ2FtZURpc3BsYXkucmVzZXREaXNwbGF5KCk7XG4gIH1cblxuICB3YWl0Rm9yU3RhcnQoKXtcbiAgICBpZiAodGhpcy5hY3RpdmVMaXN0ZW5lcil7XG4gICAgICB0aGlzLmdhbWVEaXNwbGF5LmNoYW5nZVVzZXJQcm9tcHQoMSk7XG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgICAgdGhpcy5zZXR1cExldmVsKCk7XG4gICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSl7ICAgICBcbiAgICAvL2NoZWNrIGZvciBtaXNzaWxlIGNvdW50XG4gICAgLy9maW5kIGNsb3Nlc3QgYmFzZSB0byBjbGlja1xuICAgIC8vc3Bhd24gbWlzc2lsZSBhdCBiYXNlIGhlYWRpbmcgdG93YXJkcyBjbGljayBcbiAgICBpZiAodGhpcy5nYW1lRGlzcGxheS5taXNzaWxlcyA+IDApe1xuICAgICAgbmV3IEF1ZGlvKHRoaXMubWlzc2lsZUZsaWdodEF1ZGlvLnNyYykucGxheSgpO1xuICAgICAgbGV0IHBvdGVudGlhbEJhc2VzID0gdGhpcy5iYXNlQXJyYXkuZmlsdGVyKGJhc2UgPT4ge3JldHVybiAhYmFzZS5kZXN0cm95ZWQ7fSk7XG4gICAgICBsZXQgY2xvc2VzdEJhc2UgPSBwb3RlbnRpYWxCYXNlc1swXTtcbiAgICAgIGxldCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UucG9zaXRpb24ueCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvdGVudGlhbEJhc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhlLm9mZnNldFggLSBwb3RlbnRpYWxCYXNlc1tpXS5wb3NpdGlvbi54KSA8IGRpZmZlcmVuY2UpIHtcbiAgICAgICAgICBjbG9zZXN0QmFzZSA9IHBvdGVudGlhbEJhc2VzW2ldO1xuICAgICAgICAgIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGRlc3RpbmF0aW9uID0ge1xuICAgICAgICB4OiBlLm9mZnNldFgsXG4gICAgICAgIHk6IGUub2Zmc2V0WVxuICAgICAgfTtcbiAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZmlyZU1pc3NpbGUoKTtcbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LnB1c2gobmV3IE1pc3NpbGUoZGVzdGluYXRpb24sIChjbG9zZXN0QmFzZS5wb3NpdGlvbiksIHRoaXMuY3R4KSk7XG4gICAgfSAgICAgXG4gIH1cblxuICBzZXR1cExldmVsKCl7XG4gICAgLy9zZXRzIHVwIGVhY2ggbGV2ZWwgICAgXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5leHBsb3Npb25BcnJheSA9IFtdO1xuICAgIHRoaXMubWlzc2lsZUFycmF5ID0gW107ICAgIFxuICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICAvL3NldHVwIG1ldGVvcnMgPz8/bWVyZ2Ugd2l0aCBidWlsZE1ldGVvcnM/Pz8/XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoOCArICgyICogdGhpcy5sZXZlbCkpOyBpKyspIHtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgICAvL3NldHVwIGJhc2VzXG4gICAgbGV0IGJhc2VQb3NpdGlvbiA9IHtcbiAgICAgIHg6IDE1MCxcbiAgICAgIHk6IHRoaXMuc2NyZWVuSGVpZ2h0IC0gMTAwXG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICB0aGlzLmJhc2VBcnJheS5wdXNoKG5ldyBCYXNlKHRoaXMuY3R4LCBiYXNlUG9zaXRpb24pKTtcblxuICAgICAgYmFzZVBvc2l0aW9uLnggKz0gdGhpcy5zY3JlZW5XaWR0aCAvIDM7XG4gICAgfSAgXG4gICAgdGhpcy5sZXZlbE11bHRpcGxpZXIgKz0gMC4xNTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5ydW5HYW1lKCk7XG4gIH1cblxuICBydW5HYW1lKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZCwgMCwgMCk7ICAgIFxuICAgIHRoaXMuZ2FtZURpc3BsYXkubmV4dExldmVsKHRoaXMuZ2FtZUxvb3ApO1xuICB9XG5cbiAgZ2FtZUxvb3AodGltZXN0YW1wKXsgIFxuICAgIGlmICghdGhpcy5zdGFydFRpbWUpe1xuICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGhpcy5zdGFydFRpbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmdhbWVEaXNwbGF5LmNoZWNrQ29udGludWUoKSl7XG4gICAgICAvL2dhbWUgc3RpbGwgcHJvZ3Jlc3NpbmcsIHBsYXllciBoYXMgbmVpdGhlciB3b24gb3IgbG9zdFxuICAgICAgbGV0IGVsYXBzZWRGcmFtZVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgIC8vZGVidWdnZXI7XG4gICAgICB0aGlzLnRpbWVyICs9IGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwO1xuXG4gICAgICAvL2NvbnN0IGxldmVsTXVsdGlwbGllciA9IDEuMDtcblxuICAgICAgaWYgKHRoaXMudGltZXIgPj0gMy4wKSB7XG4gICAgICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTtcblxuICAgICAgdGhpcy5tZXRlb3JBcnJheS5mb3JFYWNoKG1ldGVvciA9PiB7XG4gICAgICAgIC8vZmlyc3QsIG1vdmUgdGhlIG1ldGVvclxuICAgICAgICBpZiAobWV0ZW9yLnBvc2l0aW9uLnkgPj0gdGhpcy5zY3JlZW5IZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWV0ZW9yLnVwZGF0ZVBvc2l0aW9uKHRoaXMubGV2ZWxNdWx0aXBsaWVyLCBlbGFwc2VkRnJhbWVUaW1lIC8gMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBwb3Mgb2YgbWV0ZW9yIGFnYWluc3QgZXhwbG9zaW9ucywgYW5kIGdyb3VuZCBcbiAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5mb3JFYWNoKGV4cGxvc2lvbiA9PiB7XG4gICAgICAgICAgbGV0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoZXhwbG9zaW9uLnBvc2l0aW9uLCBtZXRlb3IucG9zaXRpb24pO1xuICAgICAgICAgIC8vIGlmIG1ldGVvciBpbiByYWRpdXMsIGRlc3Ryb3kgaXQgYW5kIGNyZWF0ZSBleHBsb3Npb25cbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gZXhwbG9zaW9uLmV4cGxvc2lvblJhZGl1cyArIG1ldGVvci5yYWRpdXMpIHtcbiAgICAgICAgICAgIG5ldyBBdWRpbyh0aGlzLmV4cGxvc2lvbkF1ZGlvLnNyYykucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIG1ldGVvci5wb3NpdGlvbikpO1xuICAgICAgICAgICAgdGhpcy5tZXRlb3JBcnJheS5zcGxpY2UodGhpcy5tZXRlb3JBcnJheS5pbmRleE9mKG1ldGVvciksIDEpO1xuICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5kZXN0cm95TWV0ZW9yKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJhc2VBcnJheS5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgICAgIGJhc2UuZHJhdygpO1xuICAgICAgICAgIGlmIChiYXNlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKG1ldGVvci5wb3NpdGlvbiwgYmFzZS5wb3NpdGlvbik7XG4gICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IGJhc2UucmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgICAgbmV3IEF1ZGlvKHRoaXMuYmFzZURlYXRoQXVkaW8uc3JjKS5wbGF5KCk7XG4gICAgICAgICAgICBiYXNlLmRlc3Ryb3lCYXNlKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmRlc3Ryb3lCYXNlKCk7XG4gICAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgYmFzZS5wb3NpdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5taXNzaWxlQXJyYXkuZm9yRWFjaChtaXNzaWxlID0+IHtcbiAgICAgICAgLy9jaGVjayBmb3IgZXhwbG9zaW9uXG4gICAgICAgIGlmIChtaXNzaWxlLmNoZWNrRXhwbG9zaW9uKGNhbGN1bGF0ZURpc3RhbmNlKG1pc3NpbGUucG9zaXRpb24sIG1pc3NpbGUuZGVzdGluYXRpb24pKSkge1xuICAgICAgICAgIG5ldyBBdWRpbyh0aGlzLmV4cGxvc2lvbkF1ZGlvLnNyYykucGxheSgpO1xuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBtaXNzaWxlLnBvc2l0aW9uKSk7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXMubWlzc2lsZUFycmF5LnNwbGljZSh0aGlzLm1pc3NpbGVBcnJheS5pbmRleE9mKG1pc3NpbGUpLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtaXNzaWxlLnVwZGF0ZVBvc2l0aW9uKChlbGFwc2VkRnJhbWVUaW1lIC8gMTAwMCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5mb3JFYWNoKGV4cGxvc2lvbiA9PiB7XG4gICAgICAgIGlmIChleHBsb3Npb24uc3RhZ2UgPj0gNCkge1xuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuc3BsaWNlKHRoaXMuZXhwbG9zaW9uQXJyYXkuaW5kZXhPZihleHBsb3Npb24pLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleHBsb3Npb24udXBkYXRlRXhwbG9zaW9uKGVsYXBzZWRGcmFtZVRpbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy9maW5hbCBjaGVjayBmb3Igb3V0IG9mIG1pc3NpbGUgbG9zZSBjb25kaXRpb25cbiAgICAgIGlmICh0aGlzLmdhbWVEaXNwbGF5Lm1pc3NpbGVzID09PSAwKXtcbiAgICAgICAgLy9ubyBtb3JlIG1pc3NpbGVzIGluIHJhY2ssIHRyYWNrIGZvciBhY3RpdmUgZXhwbG9zaW9ucyBhbmQgbWlzc2lsZXNcbiAgICAgICAgaWYgKHRoaXMubWlzc2lsZUFycmF5Lmxlbmd0aCA9PT0gMCAmJiB0aGlzLmV4cGxvc2lvbkFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5vdXRPZk1pc3NpbGVzKCk7IFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTsgICBcbiAgICAvL0dhbWUgRGlzcGxheSBub3QgQ29udGludWVpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ2FtZURpc3BsYXkuZGVzdHJveWVkTWV0ZW9yQ291bnQgPj0gdGhpcy5nYW1lRGlzcGxheS5sZXZlbEdvYWwpe1xuICAgICAgICAvL3BsYXllciBwcm9ncmVzcyB0byBuZXh0IGxldmVsXG4gICAgICAgIHRoaXMuc2V0dXBMZXZlbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGxheWVyIGxvc3RcbiAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nYW1lTG9zdCgpOyAgICAgICAgXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmNoYW5nZVVzZXJQcm9tcHQoMik7XG4gICAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lciA9IHRydWU7XG4gICAgICAgIH0sMjUwMCk7XG4gICAgICB9XG4gICAgfSAgICBcbiAgfVxuXG4gIGJ1aWxkTmV3TWV0ZW9ycygpIHtcbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmxldmVsICogMjsgaSsrKXtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWVEaXNwbGF5e1xuICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4OyAgICBcbiAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB0IHNhbnMgc2VyaWZcIjtcbiAgICB0aGlzLmJhc2VzID0gMztcbiAgICB0aGlzLm1pc3NpbGVzID0gMTA7XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCA9IDA7XG4gICAgdGhpcy5sZXZlbEdvYWwgPSAxNTtcbiAgICB0aGlzLmNvbnRpbnVlR2FtZSA9IHRydWU7XG5cbiAgICB0aGlzLmJhc2VzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tYmFzZXNcIik7XG4gICAgdGhpcy5taXNzaWxlc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLW1pc3NpbGVzXCIpO1xuICAgIHRoaXMubGV2ZWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1sZXZlbFwiKTtcbiAgICB0aGlzLmRlc3Ryb3llZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLWRlc3Ryb3llZFwiKTtcbiAgICB0aGlzLnByb21wdEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1wcm9tcHQtaGVhZGVyLWFjdGl2ZVwiKTtcblxuICAgIHRoaXMubGV2ZWxBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWwtYWR2YW5jZVwiKTtcblxuICAgIHRoaXMuY2hlY2tDb250aW51ZSA9IHRoaXMuY2hlY2tDb250aW51ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveUJhc2UgPSB0aGlzLmRlc3Ryb3lCYXNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ID0gdGhpcy51cGRhdGVEaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXh0TGV2ZWwgPSB0aGlzLm5leHRMZXZlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveU1ldGVvciA9IHRoaXMuZGVzdHJveU1ldGVvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2FtZUxvc3QgPSB0aGlzLmdhbWVMb3N0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXR1cExldmVsRGlzcGxheSA9IHRoaXMuc2V0dXBMZXZlbERpc3BsYXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0RGlzcGxheSA9IHRoaXMucmVzZXREaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VVc2VyUHJvbXB0ID0gdGhpcy5jaGFuZ2VVc2VyUHJvbXB0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbmltYXRlSW5mbyA9IHRoaXMuYW5pbWF0ZUluZm8uYmluZCh0aGlzKTtcbiAgICB0aGlzLm91dE9mTWlzc2lsZXMgPSB0aGlzLm91dE9mTWlzc2lsZXMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9XG5cbiAgY2hhbmdlVXNlclByb21wdChwcm9tcHRJZCl7XG4gICAgaWYgKHByb21wdElkID09PSAxKXtcbiAgICAgIHRoaXMucHJvbXB0SGVhZGVyLmlubmVyVGV4dCA9IFwiQmVnaW4hXCI7XG4gICAgICB0aGlzLnByb21wdEhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVzZXItcHJvbXB0LWhlYWRlci1pZGxlXCIpO1xuICAgIH0gZWxzZSBpZiAocHJvbXB0SWQgPT09IDIpe1xuICAgICAgdGhpcy5wcm9tcHRIZWFkZXIuaW5uZXJUZXh0ID0gXCJQcmVzcyBBbnkgS2V5IHRvIEJlZ2luXCI7XG4gICAgfVxuICB9XG5cbiAgcmVzZXREaXNwbGF5KCl7XG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5taXNzaWxlcyA9IDEwO1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPSAwO1xuICAgIHRoaXMubGV2ZWxHb2FsID0gMTU7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cblxuICBzZXR1cExldmVsRGlzcGxheSgpe1xuICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICB0aGlzLm1pc3NpbGVzID0gKDggKyAodGhpcy5sZXZlbCkpOyAgICBcbiAgICB0aGlzLmJhc2VzID0gMztcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID0gMDtcbiAgICB0aGlzLmxldmVsR29hbCA9ICg4ICsgKHRoaXMubGV2ZWwgKiA1KSk7XG4gICAgaWYodGhpcy5sZXZlbCA+PTMpIHRoaXMubGV2ZWxHb2FsICs9IHRoaXMubGV2ZWw7XG4gICAgdGhpcy5jb250aW51ZUdhbWUgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSg0KTtcbiAgfVxuXG4gIG5leHRMZXZlbChjYWxsYmFjayl7XG4gICAgLy9sZXZlbCBzZXR1cCBsb2dpYyAgICAgICBcbiAgICB0aGlzLnNldHVwTGV2ZWxEaXNwbGF5KCk7IFxuICAgIGlmICh0aGlzLmxldmVsID4gMSl7XG4gICAgICB0aGlzLmxldmVsQXVkaW8ucGxheSgpOyBcbiAgICB9XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCg1MDAsIDMwMCwgMjUwLCAyMDApO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgTGV2ZWwgJHt0aGlzLmxldmVsfWAsIDU3NSw0MDApO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgY2FsbGJhY2soMCk7IH0sIDI1MDApOyAgICBcbiAgfVxuXG4gIGFuaW1hdGVJbmZvKGNvbnRhaW5lcil7XG4gICAgbGV0IGFuaW1hdGVDbGFzcyA9IFwiZ2FtZS1pbmZvLWFuaW1hdGVcIjtcbiAgICBsZXQgYW5pbWF0ZWREb2MgPSBjb250YWluZXI7XG4gICAgYW5pbWF0ZWREb2MuY2xhc3NMaXN0LmFkZChhbmltYXRlQ2xhc3MpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFuaW1hdGVkRG9jLmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0ZUNsYXNzKTtcbiAgICB9LCAxMjUwKTtcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXkobnVtID0gMCl7XG4gICAgXG4gICAgdGhpcy5sZXZlbERpdi5pbm5lclRleHQgPSBgTGV2ZWw6ICR7dGhpcy5sZXZlbH1gO1xuICAgIHRoaXMuYmFzZXNEaXYuaW5uZXJUZXh0ID0gYEJhc2VzOiAke3RoaXMuYmFzZXN9YDtcbiAgICB0aGlzLm1pc3NpbGVzRGl2LmlubmVyVGV4dCA9IGBNaXNzaWxlczogJHt0aGlzLm1pc3NpbGVzfWA7XG4gICAgdGhpcy5kZXN0cm95ZWREaXYuaW5uZXJUZXh0ID0gYERlc3Ryb3llZCBNZXRlb3JzOiAke3RoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnR9IG9mICR7dGhpcy5sZXZlbEdvYWx9YDtcbiAgICBzd2l0Y2ggKG51bSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLmFuaW1hdGVJbmZvKHRoaXMuYmFzZXNEaXYpOyAgICAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUluZm8odGhpcy5taXNzaWxlc0Rpdik7ICAgICAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUluZm8odGhpcy5kZXN0cm95ZWREaXYpOyAgICAgICAgXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICB0aGlzLmFuaW1hdGVJbmZvKHRoaXMubGV2ZWxEaXYpOyAgICAgICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmaXJlTWlzc2lsZSgpe1xuICAgIHRoaXMubWlzc2lsZXMgLT0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoMik7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuYmFzZXMgLT0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoMSk7XG4gIH1cblxuICBkZXN0cm95TWV0ZW9yKCl7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCArPSAxO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgzKTtcbiAgfVxuXG4gIG91dE9mTWlzc2lsZXMoKXtcbiAgICBpZiAodGhpcy5sZXZlbEdvYWwgLSB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID4gdGhpcy5iYXNlcyl7XG4gICAgICB0aGlzLmNvbnRpbnVlR2FtZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdhbWVMb3N0KCl7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgzMDAsIDMwMCwgNjUwLCAyMDApO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgRWFydGggaGFzIGJlZW4gZGVzdHJveWVkLCB3aG9vcHMhYCwgNDAwLCA0MDApO1xuICAgIHRoaXMucHJvbXB0SGVhZGVyLmlubmVyVGV4dCA9IFwiR2FtZSBPdmVyXCI7XG4gIH1cblxuICBjaGVja0NvbnRpbnVlKCl7ICAgIFxuICAgIGlmICh0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID49IHRoaXMubGV2ZWxHb2FsKXtcbiAgICAgIHRoaXMuY29udGludWVHYW1lID0gZmFsc2U7XG4gICAgfSBcbiAgICBpZiAodGhpcy5iYXNlcyA8IDEgKXtcbiAgICAgIHRoaXMuY29udGludWVHYW1lID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRpbnVlR2FtZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGVvcntcbiAgY29uc3RydWN0b3IocG9zWCwgY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IC0xMFxuICAgIH07XG4gICAgLy8gdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgLy8gICB4OiB0aGlzLnBvc2l0aW9uLnggLSAxMCxcbiAgICAvLyAgIHk6IHRoaXMucG9zaXRpb24ueSAtIDEwXG4gICAgLy8gfTtcbiAgICB0aGlzLnNwZWVkID0gNTUgKiB0aGlzLnNldFNwZWVkKCk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG5cbiAgICB0aGlzLm1ldGVvckltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXRlb3ItMVwiKTtcblxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTcGVlZCgpe1xuICAgIC8vaGVscHMgc2V0IGFuIGludGlhbCByYW5kb20gcmFuZ2Ugb2Ygc3BlZWRzXG4gICAgbGV0IHRocm90dGxlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHRocm90dGxlciA8PSAwLjI1KSByZXR1cm4gMC43NTtcbiAgICBpZiAodGhyb3R0bGVyID49IDAuNzUpIHJldHVybiAxLjI1O1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKCl7XG4gICAgLy9zZXQgUmFuZG9tIHggZGlyZWN0aW9uXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh4ID4gMC41KSB4ICo9IC0xO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBkZWx0YVRpbWUpe1xuICAgIC8vZGVidWdnZXI7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuZGlyZWN0aW9uO1xuICAgIHRoaXMucG9zaXRpb24ueSArPSAobGV2ZWxNdWx0aXBsaWVyICogdGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7ICBcbiAgICAvL2RlYnVnZ2VyOyAgXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuXG4gIGRyYXcoKXtcbiAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTsgICAgXG4gICAgLy8gdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIC8vIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1ldGVvckltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LTEwLFxuICAgICAgdGhpcy5wb3NpdGlvbi55LTEwLFxuICAgICAgMjAsXG4gICAgICAyMFxuICAgICk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaWxle1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbiwgcG9zaXRpb24sIGN0eCl7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54ICsgMTAsXG4gICAgICB5OiBwb3NpdGlvbi55IC0gMTBcbiAgICB9O1xuXG4gICAgdGhpcy5jb3Vyc2UgPSB7XG4gICAgICB4OiAodGhpcy5kZXN0aW5hdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSxcbiAgICAgIHk6ICh0aGlzLmRlc3RpbmF0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkpXG4gICAgfTtcbiAgICB0aGlzLnNwZWVkID0gMC44O1xuICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IDM7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLm1pc3NpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVsbG93LW1pc3NpbGVcIik7ICAgIFxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgLy90aGlzLmNhbGN1bGF0ZURpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tFeHBsb3Npb24gPSB0aGlzLmNoZWNrRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBjaGVja0V4cGxvc2lvbihkaXN0YW5jZSl7XG4gICAgLy9sZXQgZGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKCk7ICAgIFxuICAgIGlmIChkaXN0YW5jZSA8PSB0aGlzLmV4cGxvc2lvblJhZGl1cykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlRGlzdGFuY2UoKXtcbiAgLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuICAvLyAgIGxldCB5RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuZGVzdGluYXRpb24ueSk7XG4gIC8vICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QqeERpc3QpICsgKHlEaXN0KnlEaXN0KSk7XG4gIC8vIH1cblxuICB1cGRhdGVQb3NpdGlvbihkdCl7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9ICh0aGlzLmNvdXJzZS54IC8gdGhpcy5zcGVlZCkgKiBkdDsgICAgXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLmNvdXJzZS55IC8gdGhpcy5zcGVlZCkgKiBkdDtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICAvL21ldGVvcnMgYXJlIGNoZWNraW5nIGZvciBjb2xsaXNpb25zIGluIEdhbWUuanNcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1pc3NpbGVJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueVxuICAgICk7XG4gIH1cbn0iLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlRGlzdGFuY2UgPSAocG9zMSwgcG9zMikgPT4ge1xuICAvL2RlYnVnZ2VyO1xuICBsZXQgeERpc3QgPSBNYXRoLmFicyhwb3MxLnggLSBwb3MyLngpO1xuICBsZXQgeURpc3QgPSBNYXRoLmFicyhwb3MxLnkgLSBwb3MyLnkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG59O1xuXG4vLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuLy8gICBsZXQgeURpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmRlc3RpbmF0aW9uLnkpO1xuLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG4vLyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==