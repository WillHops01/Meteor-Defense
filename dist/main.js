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
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, SCREEN_WIDTH, SCREEN_HEIGHT); //let backingAudio = document.getElementById("backing-track");
  // backingAudio.addEventListener("load", () => {
  //   debugger;
  //   new Audio(backingAudio.src).play();
  // }, false);

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
    this.explosionArray = [];
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
    this.backingAudio = document.getElementById("backing-track");
    this.activeListener = true;
    this.background = document.getElementById("background");
    background.addEventListener("load", function () {
      _this.ctx.drawImage(_this.background, 0, 0);
    }, false);
    document.addEventListener("keydown", function () {
      _this.waitForStart();
    });
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
        this.backingAudio.play();
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
      var text = this.bases === 0 ? "Earth has been destroyed, whoops!" : "You're out of missiles, aim better!";
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(300, 300, 650, 200);
      this.ctx.fillStyle = "yellow";
      this.ctx.strokeText("".concat(text), 400, 400);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJTQ1JFRU5fV0lEVEgiLCJTQ1JFRU5fSEVJR0hUIiwid2lkdGgiLCJoZWlnaHQiLCJnYW1lIiwiR2FtZSIsImhhbmRsZUNsaWNrIiwiQmFzZSIsInBvc2l0aW9uIiwiYmFzZUltYWdlIiwiZHJhd1Bvc2l0aW9uIiwieCIsInkiLCJkcmF3V2lkdGgiLCJkcmF3SGVpZ2h0IiwicmFkaXVzIiwiZGVzdHJveWVkIiwiZHJhdyIsImJpbmQiLCJkZXN0cm95QmFzZSIsImRyYXdJbWFnZSIsIkV4cGxvc2lvbiIsInNpemUiLCJtYXhTaXplIiwiZ3Jvd3RoUmF0ZSIsInRpbWVyIiwiZXhwbG9zaW9uSW1hZ2VBcnJheSIsImltYWdlVG9EcmF3Iiwic3RhZ2UiLCJleHBsb3Npb25SYWRpdXMiLCJ1cGRhdGVFeHBsb3Npb24iLCJkdCIsImNvbnRleHQiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5XaWR0aCIsIm1ldGVvckFycmF5IiwiYmFzZUFycmF5IiwibWlzc2lsZUFycmF5IiwiZXhwbG9zaW9uQXJyYXkiLCJsYXN0VGltZSIsInN0YXJ0VGltZSIsImxldmVsIiwibGV2ZWxNdWx0aXBsaWVyIiwiZ2FtZURpc3BsYXkiLCJHYW1lRGlzcGxheSIsInNldHVwTGV2ZWxEaXNwbGF5IiwiZ2FtZUxvb3AiLCJydW5HYW1lIiwiYnVpbGROZXdNZXRlb3JzIiwic2V0dXBMZXZlbCIsIndhaXRGb3JTdGFydCIsInJlc2V0R2FtZSIsImV4cGxvc2lvbkF1ZGlvIiwiYmFzZURlYXRoQXVkaW8iLCJtaXNzaWxlRmxpZ2h0QXVkaW8iLCJiYWNraW5nQXVkaW8iLCJhY3RpdmVMaXN0ZW5lciIsImJhY2tncm91bmQiLCJyZXNldERpc3BsYXkiLCJwbGF5IiwiY2hhbmdlVXNlclByb21wdCIsImUiLCJtaXNzaWxlcyIsIkF1ZGlvIiwic3JjIiwicG90ZW50aWFsQmFzZXMiLCJmaWx0ZXIiLCJiYXNlIiwiY2xvc2VzdEJhc2UiLCJkaWZmZXJlbmNlIiwiTWF0aCIsImFicyIsIm9mZnNldFgiLCJpIiwibGVuZ3RoIiwiZGVzdGluYXRpb24iLCJvZmZzZXRZIiwiZmlyZU1pc3NpbGUiLCJwdXNoIiwiTWlzc2lsZSIsInBvc1giLCJmbG9vciIsInJhbmRvbSIsIk1ldGVvciIsImJhc2VQb3NpdGlvbiIsIm5leHRMZXZlbCIsInRpbWVzdGFtcCIsImNoZWNrQ29udGludWUiLCJlbGFwc2VkRnJhbWVUaW1lIiwiZm9yRWFjaCIsIm1ldGVvciIsInNwbGljZSIsImluZGV4T2YiLCJ1cGRhdGVQb3NpdGlvbiIsImV4cGxvc2lvbiIsImRpc3RhbmNlIiwiY2FsY3VsYXRlRGlzdGFuY2UiLCJkZXN0cm95TWV0ZW9yIiwibWlzc2lsZSIsImNoZWNrRXhwbG9zaW9uIiwib3V0T2ZNaXNzaWxlcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlc3Ryb3llZE1ldGVvckNvdW50IiwibGV2ZWxHb2FsIiwiZ2FtZUxvc3QiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiZm9udCIsImJhc2VzIiwiY29udGludWVHYW1lIiwiYmFzZXNEaXYiLCJtaXNzaWxlc0RpdiIsImxldmVsRGl2IiwiZGVzdHJveWVkRGl2IiwicHJvbXB0SGVhZGVyIiwibGV2ZWxBdWRpbyIsInVwZGF0ZURpc3BsYXkiLCJhbmltYXRlSW5mbyIsInByb21wdElkIiwiaW5uZXJUZXh0Iiwic2V0QXR0cmlidXRlIiwiY2FsbGJhY2siLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVRleHQiLCJjb250YWluZXIiLCJhbmltYXRlQ2xhc3MiLCJhbmltYXRlZERvYyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm51bSIsInRleHQiLCJzcGVlZCIsInNldFNwZWVkIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwibWV0ZW9ySW1hZ2UiLCJ0aHJvdHRsZXIiLCJkZWx0YVRpbWUiLCJjb3Vyc2UiLCJtaXNzaWxlSW1hZ2UiLCJwb3MxIiwicG9zMiIsInhEaXN0IiwieURpc3QiLCJzcXJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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QyxhQUFPLEtBQVA7QUFDRCxLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzttQ0FFZUUsRSxFQUFHO0FBQ2hCLFdBQUt2QixRQUFMLENBQWNHLENBQWQsSUFBb0IsS0FBS2lJLE1BQUwsQ0FBWWpJLENBQVosR0FBZ0IsS0FBSzBILEtBQXRCLEdBQStCdEcsRUFBbEQ7QUFDQSxXQUFLdkIsUUFBTCxDQUFjSSxDQUFkLElBQW9CLEtBQUtnSSxNQUFMLENBQVloSSxDQUFaLEdBQWdCLEtBQUt5SCxLQUF0QixHQUErQnRHLEVBQWxEO0FBQ0EsV0FBS2QsSUFBTDtBQUNEOzs7MkJBRUs7QUFDSjtBQUNBLFdBQUtuQixHQUFMLENBQVNzQixTQUFULENBQ0UsS0FBS3lILFlBRFAsRUFFRSxLQUFLckksUUFBTCxDQUFjRyxDQUZoQixFQUdFLEtBQUtILFFBQUwsQ0FBY0ksQ0FIaEI7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRIO0FBQUE7QUFBTyxJQUFNb0YsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDOEMsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQy9DO0FBQ0EsTUFBSUMsS0FBSyxHQUFHMUUsSUFBSSxDQUFDQyxHQUFMLENBQVN1RSxJQUFJLENBQUNuSSxDQUFMLEdBQVNvSSxJQUFJLENBQUNwSSxDQUF2QixDQUFaO0FBQ0EsTUFBSXNJLEtBQUssR0FBRzNFLElBQUksQ0FBQ0MsR0FBTCxDQUFTdUUsSUFBSSxDQUFDbEksQ0FBTCxHQUFTbUksSUFBSSxDQUFDbkksQ0FBdkIsQ0FBWjtBQUNBLFNBQU8wRCxJQUFJLENBQUM0RSxJQUFMLENBQVdGLEtBQUssR0FBR0EsS0FBVCxHQUFtQkMsS0FBSyxHQUFHQSxLQUFyQyxDQUFQO0FBQ0QsQ0FMTSxDLENBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ1hBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vY29uc3QgQXBwID0gcmVxdWlyZShcIi4vc2NyaXB0cy9hcHAuanNcIik7XG4vLyBjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7ICBcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBjb25zdCBTQ1JFRU5fV0lEVEggPSAxMjAwO1xuICBjb25zdCBTQ1JFRU5fSEVJR0hUID0gODAwO1xuICBjdHguY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIO1xuICBjdHguY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQ7XG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgsIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4gIC8vbGV0IGJhY2tpbmdBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2luZy10cmFja1wiKTtcbiAgLy8gYmFja2luZ0F1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgLy8gICBkZWJ1Z2dlcjtcbiAgLy8gICBuZXcgQXVkaW8oYmFja2luZ0F1ZGlvLnNyYykucGxheSgpO1xuICAvLyB9LCBmYWxzZSk7XG4gIFxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWUuaGFuZGxlQ2xpY2ssIGZhbHNlKTtcbiAgLy9nYW1lLnJ1bkdhbWUoKTtcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2V7XG4gIGNvbnN0cnVjdG9yKGN0eCwgcG9zaXRpb24pe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuYmFzZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLWltYWdlXCIpO1xuICAgIFxuICAgIC8vdGhpcy5kZXN0cm95ZWRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgeTogcG9zaXRpb24ueVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngrMjEsXG4gICAgICB5OiBwb3NpdGlvbi55KzUwXG4gICAgfTsgLy9tYWdpYyBudW1iZXJzIGZvciB3aWR0aCBhbmQgaGVpZ2h0IGFkanVzdGluZ1xuICAgIHRoaXMuZHJhd1dpZHRoID0gdGhpcy5iYXNlSW1hZ2Uud2lkdGg7XG4gICAgdGhpcy5kcmF3SGVpZ2h0ID0gdGhpcy5iYXNlSW1hZ2UuaGVpZ2h0O1xuICAgIHRoaXMucmFkaXVzID0gNDA7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveUJhc2UgPSB0aGlzLmRlc3Ryb3lCYXNlLmJpbmQodGhpcyk7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3V2lkdGggPSAxMDA7XG4gICAgdGhpcy5kcmF3SGVpZ2h0ID0gMTAwO1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnggLT0gMjA7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24ueSs9NDA7XG4gIH1cblxuICBkcmF3KCl7IFxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuYmFzZUltYWdlLCBcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLngsIFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueSxcbiAgICAgIHRoaXMuZHJhd1dpZHRoLFxuICAgICAgdGhpcy5kcmF3SGVpZ2h0XG5cbiAgICAgICk7XG4gIH1cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9zaW9ue1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICB5OiBwb3NpdGlvbi55XG4gICAgfTsgLy81MCBpcyBtYWdpYyBudW1iZXIgY2VudGVyXG4gICAgdGhpcy5wb3NpdGlvbj17XG4gICAgICB4OnBvc2l0aW9uLngsXG4gICAgICB5OnBvc2l0aW9uLnlcbiAgICB9O1xuXG4gICAgdGhpcy5zaXplID0gNjA7XG4gICAgdGhpcy5tYXhTaXplID0gMTUwO1xuICAgIHRoaXMuZ3Jvd3RoUmF0ZSA9ICh0aGlzLm1heFNpemUgLSB0aGlzLnNpemUpIC8gNDtcbiAgICAvL2NhbGN1bGF0aW9uIGZvciBob3cgZmFzdCB0byBncm93XG5cbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXkgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tMVwiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTJcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0zXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tNFwiKV07XG4gICAgdGhpcy5pbWFnZVRvRHJhdyA9IHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheVswXTtcbiAgICB0aGlzLnN0YWdlID0gMDtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IHRoaXMuc2l6ZS8yO1xuXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVFeHBsb3Npb24gPSB0aGlzLnVwZGF0ZUV4cGxvc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlRXhwbG9zaW9uKGR0KXtcbiAgICBkdCA9IGR0LzEwMDA7XG4gICAgdGhpcy50aW1lcis9ZHQ7XG4gICAgaWYgKHRoaXMudGltZXIgPj0gMC44KXtcbiAgICAgIHRoaXMuc3RhZ2UrKztcblxuICAgICAgdGhpcy50aW1lciA9MDtcbiAgICB9ICAgIFxuICAgIGlmICh0aGlzLnN0YWdlIDwgNCl7XG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLzI7XG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55ID0gdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zaXplLzI7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICAgIHRoaXMuc2l6ZSArPSB0aGlzLmdyb3d0aFJhdGUgKiBkdDsgIFxuICAgICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSB0aGlzLnNpemUgLyAyOyAgICBcbiAgICB9XG4gICAgXG4gIH1cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5W3RoaXMuc3RhZ2VdLFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCxcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUsIHRoaXMuc2l6ZVxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgTWV0ZW9yIGZyb20gXCIuL21ldGVvclwiO1xuaW1wb3J0IE1pc3NpbGUgZnJvbSBcIi4vbWlzc2lsZVwiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IEV4cGxvc2lvbiBmcm9tIFwiLi9leHBsb3Npb25cIjtcbmltcG9ydCBHYW1lRGlzcGxheSBmcm9tIFwiLi9nYW1lRGlzcGxheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGlzdGFuY2UgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpe1xuICAgIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gd2lkdGg7IFxuXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5taXNzaWxlQXJyYXkgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5ID0gW107XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMDsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciA9IDAuODU7XG4gICAgXG4gICAgdGhpcy5nYW1lRGlzcGxheSA9IG5ldyBHYW1lRGlzcGxheSh0aGlzLmN0eCk7ICBcbiAgICB0aGlzLmdhbWVEaXNwbGF5LnNldHVwTGV2ZWxEaXNwbGF5KCk7IFxuXG4gICAgdGhpcy5nYW1lTG9vcCA9IHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJ1bkdhbWUgPSB0aGlzLnJ1bkdhbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzID0gdGhpcy5idWlsZE5ld01ldGVvcnMuYmluZCh0aGlzKTsgIFxuICAgIHRoaXMuc2V0dXBMZXZlbCA9IHRoaXMuc2V0dXBMZXZlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2FpdEZvclN0YXJ0ID0gdGhpcy53YWl0Rm9yU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0R2FtZSA9IHRoaXMucmVzZXRHYW1lLmJpbmQodGhpcyk7ICAgXG4gICAgXG4gICAgdGhpcy5leHBsb3Npb25BdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLWF1ZGlvXCIpO1xuICAgIHRoaXMuYmFzZURlYXRoQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2UtZGVhdGgtYXVkaW9cIik7ICAgIFxuICAgIHRoaXMubWlzc2lsZUZsaWdodEF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXNzaWxlLWZsaWdodFwiKTtcbiAgICB0aGlzLmJhY2tpbmdBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2luZy10cmFja1wiKTtcblxuICAgIHRoaXMuYWN0aXZlTGlzdGVuZXIgPSB0cnVlO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHsgXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTsgfSwgZmFsc2UpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKCkgPT4ge3RoaXMud2FpdEZvclN0YXJ0KCk7fSk7XG4gIH1cblxuICByZXNldEdhbWUoKXtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDsgLy91c2VkIHRvIGdlbmVyYXRlIG5ldyBtZXRlb3JzIGF0IGludGVydmFsc1xuICAgIHRoaXMubGV2ZWwgPSAwOyAvL2NvbnRyb2xzIGRpZmZpY3VsdHkgYW5kIHBhY2Ugb2YgZ2FtZVxuICAgIHRoaXMubGV2ZWxNdWx0aXBsaWVyID0gMC44NTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5nYW1lRGlzcGxheS5yZXNldERpc3BsYXkoKTtcbiAgfVxuXG4gIHdhaXRGb3JTdGFydCgpe1xuICAgIGlmICh0aGlzLmFjdGl2ZUxpc3RlbmVyKXtcbiAgICAgIHRoaXMuYmFja2luZ0F1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMuZ2FtZURpc3BsYXkuY2hhbmdlVXNlclByb21wdCgxKTtcbiAgICAgIHRoaXMucmVzZXRHYW1lKCk7XG4gICAgICB0aGlzLnNldHVwTGV2ZWwoKTtcbiAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGljayhlKXsgICAgIFxuICAgIC8vY2hlY2sgZm9yIG1pc3NpbGUgY291bnRcbiAgICAvL2ZpbmQgY2xvc2VzdCBiYXNlIHRvIGNsaWNrXG4gICAgLy9zcGF3biBtaXNzaWxlIGF0IGJhc2UgaGVhZGluZyB0b3dhcmRzIGNsaWNrIFxuICAgIGlmICh0aGlzLmdhbWVEaXNwbGF5Lm1pc3NpbGVzID4gMCl7XG4gICAgICBuZXcgQXVkaW8odGhpcy5taXNzaWxlRmxpZ2h0QXVkaW8uc3JjKS5wbGF5KCk7XG4gICAgICBsZXQgcG90ZW50aWFsQmFzZXMgPSB0aGlzLmJhc2VBcnJheS5maWx0ZXIoYmFzZSA9PiB7cmV0dXJuICFiYXNlLmRlc3Ryb3llZDt9KTtcbiAgICAgIGxldCBjbG9zZXN0QmFzZSA9IHBvdGVudGlhbEJhc2VzWzBdO1xuICAgICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG90ZW50aWFsQmFzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGUub2Zmc2V0WCAtIHBvdGVudGlhbEJhc2VzW2ldLnBvc2l0aW9uLngpIDwgZGlmZmVyZW5jZSkge1xuICAgICAgICAgIGNsb3Nlc3RCYXNlID0gcG90ZW50aWFsQmFzZXNbaV07XG4gICAgICAgICAgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnBvc2l0aW9uLngpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZGVzdGluYXRpb24gPSB7XG4gICAgICAgIHg6IGUub2Zmc2V0WCxcbiAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICB9O1xuICAgICAgdGhpcy5nYW1lRGlzcGxheS5maXJlTWlzc2lsZSgpO1xuICAgICAgdGhpcy5taXNzaWxlQXJyYXkucHVzaChuZXcgTWlzc2lsZShkZXN0aW5hdGlvbiwgKGNsb3Nlc3RCYXNlLnBvc2l0aW9uKSwgdGhpcy5jdHgpKTtcbiAgICB9ICAgICBcbiAgfVxuXG4gIHNldHVwTGV2ZWwoKXtcbiAgICAvL3NldHMgdXAgZWFjaCBsZXZlbCAgICBcbiAgICB0aGlzLm1ldGVvckFycmF5ID0gW107XG4gICAgdGhpcy5iYXNlQXJyYXkgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5ID0gW107XG4gICAgdGhpcy5taXNzaWxlQXJyYXkgPSBbXTsgICAgXG4gICAgdGhpcy5sZXZlbCArPSAxO1xuICAgIC8vc2V0dXAgbWV0ZW9ycyA/Pz9tZXJnZSB3aXRoIGJ1aWxkTWV0ZW9ycz8/Pz9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICg4ICsgKDIgKiB0aGlzLmxldmVsKSk7IGkrKykge1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIC8vc2V0dXAgYmFzZXNcbiAgICBsZXQgYmFzZVBvc2l0aW9uID0ge1xuICAgICAgeDogMTUwLFxuICAgICAgeTogdGhpcy5zY3JlZW5IZWlnaHQgLSAxMDBcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIHRoaXMuYmFzZUFycmF5LnB1c2gobmV3IEJhc2UodGhpcy5jdHgsIGJhc2VQb3NpdGlvbikpO1xuXG4gICAgICBiYXNlUG9zaXRpb24ueCArPSB0aGlzLnNjcmVlbldpZHRoIC8gMztcbiAgICB9ICBcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciArPSAwLjE1O1xuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLnJ1bkdhbWUoKTtcbiAgfVxuXG4gIHJ1bkdhbWUoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTsgICAgXG4gICAgdGhpcy5nYW1lRGlzcGxheS5uZXh0TGV2ZWwodGhpcy5nYW1lTG9vcCk7XG4gIH1cblxuICBnYW1lTG9vcCh0aW1lc3RhbXApeyAgXG4gICAgaWYgKCF0aGlzLnN0YXJ0VGltZSl7XG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLnN0YXJ0VGltZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2FtZURpc3BsYXkuY2hlY2tDb250aW51ZSgpKXtcbiAgICAgIC8vZ2FtZSBzdGlsbCBwcm9ncmVzc2luZywgcGxheWVyIGhhcyBuZWl0aGVyIHdvbiBvciBsb3N0XG4gICAgICBsZXQgZWxhcHNlZEZyYW1lVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgICAgLy9kZWJ1Z2dlcjtcbiAgICAgIHRoaXMudGltZXIgKz0gZWxhcHNlZEZyYW1lVGltZSAvIDEwMDA7XG5cbiAgICAgIC8vY29uc3QgbGV2ZWxNdWx0aXBsaWVyID0gMS4wO1xuXG4gICAgICBpZiAodGhpcy50aW1lciA+PSAzLjApIHtcbiAgICAgICAgdGhpcy5idWlsZE5ld01ldGVvcnMoKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmQsIDAsIDApO1xuXG4gICAgICB0aGlzLm1ldGVvckFycmF5LmZvckVhY2gobWV0ZW9yID0+IHtcbiAgICAgICAgLy9maXJzdCwgbW92ZSB0aGUgbWV0ZW9yXG4gICAgICAgIGlmIChtZXRlb3IucG9zaXRpb24ueSA+PSB0aGlzLnNjcmVlbkhlaWdodCkge1xuICAgICAgICAgIHRoaXMubWV0ZW9yQXJyYXkuc3BsaWNlKHRoaXMubWV0ZW9yQXJyYXkuaW5kZXhPZihtZXRlb3IpLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXRlb3IudXBkYXRlUG9zaXRpb24odGhpcy5sZXZlbE11bHRpcGxpZXIsIGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NoZWNrIHBvcyBvZiBtZXRlb3IgYWdhaW5zdCBleHBsb3Npb25zLCBhbmQgZ3JvdW5kIFxuICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShleHBsb3Npb24ucG9zaXRpb24sIG1ldGVvci5wb3NpdGlvbik7XG4gICAgICAgICAgLy8gaWYgbWV0ZW9yIGluIHJhZGl1cywgZGVzdHJveSBpdCBhbmQgY3JlYXRlIGV4cGxvc2lvblxuICAgICAgICAgIGlmIChkaXN0YW5jZSA8PSBleHBsb3Npb24uZXhwbG9zaW9uUmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgICAgbmV3IEF1ZGlvKHRoaXMuZXhwbG9zaW9uQXVkaW8uc3JjKS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgbWV0ZW9yLnBvc2l0aW9uKSk7XG4gICAgICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwgMSk7XG4gICAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmRlc3Ryb3lNZXRlb3IoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmFzZUFycmF5LmZvckVhY2goYmFzZSA9PiB7XG4gICAgICAgICAgYmFzZS5kcmF3KCk7XG4gICAgICAgICAgaWYgKGJhc2UuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UobWV0ZW9yLnBvc2l0aW9uLCBiYXNlLnBvc2l0aW9uKTtcbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gYmFzZS5yYWRpdXMgKyBtZXRlb3IucmFkaXVzKSB7XG4gICAgICAgICAgICBuZXcgQXVkaW8odGhpcy5iYXNlRGVhdGhBdWRpby5zcmMpLnBsYXkoKTtcbiAgICAgICAgICAgIGJhc2UuZGVzdHJveUJhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZGVzdHJveUJhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBiYXNlLnBvc2l0aW9uKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1pc3NpbGVBcnJheS5mb3JFYWNoKG1pc3NpbGUgPT4ge1xuICAgICAgICAvL2NoZWNrIGZvciBleHBsb3Npb25cbiAgICAgICAgaWYgKG1pc3NpbGUuY2hlY2tFeHBsb3Npb24oY2FsY3VsYXRlRGlzdGFuY2UobWlzc2lsZS5wb3NpdGlvbiwgbWlzc2lsZS5kZXN0aW5hdGlvbikpKSB7XG4gICAgICAgICAgbmV3IEF1ZGlvKHRoaXMuZXhwbG9zaW9uQXVkaW8uc3JjKS5wbGF5KCk7XG4gICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIG1pc3NpbGUucG9zaXRpb24pKTsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5taXNzaWxlQXJyYXkuc3BsaWNlKHRoaXMubWlzc2lsZUFycmF5LmluZGV4T2YobWlzc2lsZSksIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1pc3NpbGUudXBkYXRlUG9zaXRpb24oKGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgICAgaWYgKGV4cGxvc2lvbi5zdGFnZSA+PSA0KSB7XG4gICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5zcGxpY2UodGhpcy5leHBsb3Npb25BcnJheS5pbmRleE9mKGV4cGxvc2lvbiksIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4cGxvc2lvbi51cGRhdGVFeHBsb3Npb24oZWxhcHNlZEZyYW1lVGltZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvL2ZpbmFsIGNoZWNrIGZvciBvdXQgb2YgbWlzc2lsZSBsb3NlIGNvbmRpdGlvblxuICAgICAgaWYgKHRoaXMuZ2FtZURpc3BsYXkubWlzc2lsZXMgPT09IDApe1xuICAgICAgICAvL25vIG1vcmUgbWlzc2lsZXMgaW4gcmFjaywgdHJhY2sgZm9yIGFjdGl2ZSBleHBsb3Npb25zIGFuZCBtaXNzaWxlc1xuICAgICAgICBpZiAodGhpcy5taXNzaWxlQXJyYXkubGVuZ3RoID09PSAwICYmIHRoaXMuZXhwbG9zaW9uQXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5Lm91dE9mTWlzc2lsZXMoKTsgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApOyAgIFxuICAgIC8vR2FtZSBEaXNwbGF5IG5vdCBDb250aW51ZWluZ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5nYW1lRGlzcGxheS5kZXN0cm95ZWRNZXRlb3JDb3VudCA+PSB0aGlzLmdhbWVEaXNwbGF5LmxldmVsR29hbCl7XG4gICAgICAgIC8vcGxheWVyIHByb2dyZXNzIHRvIG5leHQgbGV2ZWxcbiAgICAgICAgdGhpcy5zZXR1cExldmVsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGF5ZXIgbG9zdFxuICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmdhbWVMb3N0KCk7ICAgICAgICBcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmNoYW5nZVVzZXJQcm9tcHQoMik7XG4gICAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lciA9IHRydWU7XG4gICAgICAgIH0sMjUwMCk7XG4gICAgICB9XG4gICAgfSAgICBcbiAgfVxuXG4gIGJ1aWxkTmV3TWV0ZW9ycygpIHtcbiAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmxldmVsICogMjsgaSsrKXtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWVEaXNwbGF5e1xuICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4OyAgICBcbiAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB0IHNhbnMgc2VyaWZcIjtcbiAgICB0aGlzLmJhc2VzID0gMztcbiAgICB0aGlzLm1pc3NpbGVzID0gMTA7XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCA9IDA7XG4gICAgdGhpcy5sZXZlbEdvYWwgPSAxNTtcbiAgICB0aGlzLmNvbnRpbnVlR2FtZSA9IHRydWU7XG5cbiAgICB0aGlzLmJhc2VzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tYmFzZXNcIik7XG4gICAgdGhpcy5taXNzaWxlc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLW1pc3NpbGVzXCIpO1xuICAgIHRoaXMubGV2ZWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1sZXZlbFwiKTtcbiAgICB0aGlzLmRlc3Ryb3llZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLWRlc3Ryb3llZFwiKTtcbiAgICB0aGlzLnByb21wdEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1wcm9tcHQtaGVhZGVyLWFjdGl2ZVwiKTtcblxuICAgIHRoaXMubGV2ZWxBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWwtYWR2YW5jZVwiKTtcbiAgICBcblxuICAgIHRoaXMuY2hlY2tDb250aW51ZSA9IHRoaXMuY2hlY2tDb250aW51ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveUJhc2UgPSB0aGlzLmRlc3Ryb3lCYXNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ID0gdGhpcy51cGRhdGVEaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXh0TGV2ZWwgPSB0aGlzLm5leHRMZXZlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveU1ldGVvciA9IHRoaXMuZGVzdHJveU1ldGVvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2FtZUxvc3QgPSB0aGlzLmdhbWVMb3N0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXR1cExldmVsRGlzcGxheSA9IHRoaXMuc2V0dXBMZXZlbERpc3BsYXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0RGlzcGxheSA9IHRoaXMucmVzZXREaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VVc2VyUHJvbXB0ID0gdGhpcy5jaGFuZ2VVc2VyUHJvbXB0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbmltYXRlSW5mbyA9IHRoaXMuYW5pbWF0ZUluZm8uYmluZCh0aGlzKTtcbiAgICB0aGlzLm91dE9mTWlzc2lsZXMgPSB0aGlzLm91dE9mTWlzc2lsZXMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9XG5cbiAgY2hhbmdlVXNlclByb21wdChwcm9tcHRJZCl7XG4gICAgaWYgKHByb21wdElkID09PSAxKXtcbiAgICAgIHRoaXMucHJvbXB0SGVhZGVyLmlubmVyVGV4dCA9IFwiQmVnaW4hXCI7XG4gICAgICB0aGlzLnByb21wdEhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVzZXItcHJvbXB0LWhlYWRlci1pZGxlXCIpO1xuICAgIH0gZWxzZSBpZiAocHJvbXB0SWQgPT09IDIpe1xuICAgICAgdGhpcy5wcm9tcHRIZWFkZXIuaW5uZXJUZXh0ID0gXCJQcmVzcyBBbnkgS2V5IHRvIEJlZ2luXCI7XG4gICAgfVxuICB9XG5cbiAgcmVzZXREaXNwbGF5KCl7XG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5taXNzaWxlcyA9IDEwO1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPSAwO1xuICAgIHRoaXMubGV2ZWxHb2FsID0gMTU7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cblxuICBzZXR1cExldmVsRGlzcGxheSgpe1xuICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICB0aGlzLm1pc3NpbGVzID0gKDggKyAodGhpcy5sZXZlbCkpOyAgICBcbiAgICB0aGlzLmJhc2VzID0gMztcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID0gMDtcbiAgICB0aGlzLmxldmVsR29hbCA9ICg4ICsgKHRoaXMubGV2ZWwgKiA1KSk7XG4gICAgaWYodGhpcy5sZXZlbCA+PTMpIHRoaXMubGV2ZWxHb2FsICs9IHRoaXMubGV2ZWw7XG4gICAgdGhpcy5jb250aW51ZUdhbWUgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSg0KTtcbiAgfVxuXG4gIG5leHRMZXZlbChjYWxsYmFjayl7XG4gICAgLy9sZXZlbCBzZXR1cCBsb2dpYyAgICAgICBcbiAgICB0aGlzLnNldHVwTGV2ZWxEaXNwbGF5KCk7IFxuICAgIGlmICh0aGlzLmxldmVsID4gMSl7XG4gICAgICB0aGlzLmxldmVsQXVkaW8ucGxheSgpOyBcbiAgICB9XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCg1MDAsIDMwMCwgMjUwLCAyMDApO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgTGV2ZWwgJHt0aGlzLmxldmVsfWAsIDU3NSw0MDApO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgY2FsbGJhY2soMCk7IH0sIDI1MDApOyAgICBcbiAgfVxuXG4gIGFuaW1hdGVJbmZvKGNvbnRhaW5lcil7XG4gICAgbGV0IGFuaW1hdGVDbGFzcyA9IFwiZ2FtZS1pbmZvLWFuaW1hdGVcIjtcbiAgICBsZXQgYW5pbWF0ZWREb2MgPSBjb250YWluZXI7XG4gICAgYW5pbWF0ZWREb2MuY2xhc3NMaXN0LmFkZChhbmltYXRlQ2xhc3MpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFuaW1hdGVkRG9jLmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0ZUNsYXNzKTtcbiAgICB9LCAxMjUwKTtcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXkobnVtID0gMCl7XG4gICAgXG4gICAgdGhpcy5sZXZlbERpdi5pbm5lclRleHQgPSBgTGV2ZWw6ICR7dGhpcy5sZXZlbH1gO1xuICAgIHRoaXMuYmFzZXNEaXYuaW5uZXJUZXh0ID0gYEJhc2VzOiAke3RoaXMuYmFzZXN9YDtcbiAgICB0aGlzLm1pc3NpbGVzRGl2LmlubmVyVGV4dCA9IGBNaXNzaWxlczogJHt0aGlzLm1pc3NpbGVzfWA7XG4gICAgdGhpcy5kZXN0cm95ZWREaXYuaW5uZXJUZXh0ID0gYERlc3Ryb3llZCBNZXRlb3JzOiAke3RoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnR9IG9mICR7dGhpcy5sZXZlbEdvYWx9YDtcbiAgICBzd2l0Y2ggKG51bSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLmFuaW1hdGVJbmZvKHRoaXMuYmFzZXNEaXYpOyAgICAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUluZm8odGhpcy5taXNzaWxlc0Rpdik7ICAgICAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUluZm8odGhpcy5kZXN0cm95ZWREaXYpOyAgICAgICAgXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICB0aGlzLmFuaW1hdGVJbmZvKHRoaXMubGV2ZWxEaXYpOyAgICAgICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmaXJlTWlzc2lsZSgpe1xuICAgIHRoaXMubWlzc2lsZXMgLT0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoMik7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuYmFzZXMgLT0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoMSk7XG4gIH1cblxuICBkZXN0cm95TWV0ZW9yKCl7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCArPSAxO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgzKTtcbiAgfVxuXG4gIG91dE9mTWlzc2lsZXMoKXtcbiAgICBpZiAodGhpcy5sZXZlbEdvYWwgLSB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID4gdGhpcy5iYXNlcyl7XG4gICAgICB0aGlzLmNvbnRpbnVlR2FtZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdhbWVMb3N0KCl7XG4gICAgbGV0IHRleHQgPSB0aGlzLmJhc2VzID09PSAwID8gXCJFYXJ0aCBoYXMgYmVlbiBkZXN0cm95ZWQsIHdob29wcyFcIiA6IFwiWW91J3JlIG91dCBvZiBtaXNzaWxlcywgYWltIGJldHRlciFcIjtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDMwMCwgMzAwLCA2NTAsIDIwMCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KGAke3RleHR9YCwgNDAwLCA0MDApO1xuICAgIHRoaXMucHJvbXB0SGVhZGVyLmlubmVyVGV4dCA9IFwiR2FtZSBPdmVyXCI7XG4gIH1cblxuICBjaGVja0NvbnRpbnVlKCl7ICAgIFxuICAgIGlmICh0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID49IHRoaXMubGV2ZWxHb2FsKXtcbiAgICAgIHRoaXMuY29udGludWVHYW1lID0gZmFsc2U7XG4gICAgfSBcbiAgICBpZiAodGhpcy5iYXNlcyA8IDEgKXtcbiAgICAgIHRoaXMuY29udGludWVHYW1lID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRpbnVlR2FtZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGVvcntcbiAgY29uc3RydWN0b3IocG9zWCwgY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IC0xMFxuICAgIH07XG4gICAgLy8gdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgLy8gICB4OiB0aGlzLnBvc2l0aW9uLnggLSAxMCxcbiAgICAvLyAgIHk6IHRoaXMucG9zaXRpb24ueSAtIDEwXG4gICAgLy8gfTtcbiAgICB0aGlzLnNwZWVkID0gNTUgKiB0aGlzLnNldFNwZWVkKCk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG5cbiAgICB0aGlzLm1ldGVvckltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXRlb3ItMVwiKTtcblxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTcGVlZCgpe1xuICAgIC8vaGVscHMgc2V0IGFuIGludGlhbCByYW5kb20gcmFuZ2Ugb2Ygc3BlZWRzXG4gICAgbGV0IHRocm90dGxlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHRocm90dGxlciA8PSAwLjI1KSByZXR1cm4gMC43NTtcbiAgICBpZiAodGhyb3R0bGVyID49IDAuNzUpIHJldHVybiAxLjI1O1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKCl7XG4gICAgLy9zZXQgUmFuZG9tIHggZGlyZWN0aW9uXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh4ID4gMC41KSB4ICo9IC0xO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBkZWx0YVRpbWUpe1xuICAgIC8vZGVidWdnZXI7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuZGlyZWN0aW9uO1xuICAgIHRoaXMucG9zaXRpb24ueSArPSAobGV2ZWxNdWx0aXBsaWVyICogdGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7ICBcbiAgICAvL2RlYnVnZ2VyOyAgXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuXG4gIGRyYXcoKXtcbiAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTsgICAgXG4gICAgLy8gdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIC8vIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1ldGVvckltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LTEwLFxuICAgICAgdGhpcy5wb3NpdGlvbi55LTEwLFxuICAgICAgMjAsXG4gICAgICAyMFxuICAgICk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaWxle1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbiwgcG9zaXRpb24sIGN0eCl7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54ICsgMTAsXG4gICAgICB5OiBwb3NpdGlvbi55IC0gMTBcbiAgICB9O1xuXG4gICAgdGhpcy5jb3Vyc2UgPSB7XG4gICAgICB4OiAodGhpcy5kZXN0aW5hdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSxcbiAgICAgIHk6ICh0aGlzLmRlc3RpbmF0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkpXG4gICAgfTtcbiAgICB0aGlzLnNwZWVkID0gMC44O1xuICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IDM7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLm1pc3NpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVsbG93LW1pc3NpbGVcIik7ICAgIFxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgLy90aGlzLmNhbGN1bGF0ZURpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tFeHBsb3Npb24gPSB0aGlzLmNoZWNrRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBjaGVja0V4cGxvc2lvbihkaXN0YW5jZSl7XG4gICAgLy9sZXQgZGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKCk7ICAgIFxuICAgIGlmIChkaXN0YW5jZSA8PSB0aGlzLmV4cGxvc2lvblJhZGl1cykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlRGlzdGFuY2UoKXtcbiAgLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuICAvLyAgIGxldCB5RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuZGVzdGluYXRpb24ueSk7XG4gIC8vICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QqeERpc3QpICsgKHlEaXN0KnlEaXN0KSk7XG4gIC8vIH1cblxuICB1cGRhdGVQb3NpdGlvbihkdCl7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9ICh0aGlzLmNvdXJzZS54IC8gdGhpcy5zcGVlZCkgKiBkdDsgICAgXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLmNvdXJzZS55IC8gdGhpcy5zcGVlZCkgKiBkdDtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICAvL21ldGVvcnMgYXJlIGNoZWNraW5nIGZvciBjb2xsaXNpb25zIGluIEdhbWUuanNcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1pc3NpbGVJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueVxuICAgICk7XG4gIH1cbn0iLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlRGlzdGFuY2UgPSAocG9zMSwgcG9zMikgPT4ge1xuICAvL2RlYnVnZ2VyO1xuICBsZXQgeERpc3QgPSBNYXRoLmFicyhwb3MxLnggLSBwb3MyLngpO1xuICBsZXQgeURpc3QgPSBNYXRoLmFicyhwb3MxLnkgLSBwb3MyLnkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG59O1xuXG4vLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuLy8gICBsZXQgeURpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmRlc3RpbmF0aW9uLnkpO1xuLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG4vLyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==