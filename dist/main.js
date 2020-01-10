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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiU0NSRUVOX1dJRFRIIiwiU0NSRUVOX0hFSUdIVCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsIkdhbWUiLCJoYW5kbGVDbGljayIsIkJhc2UiLCJwb3NpdGlvbiIsImJhc2VJbWFnZSIsImRyYXdQb3NpdGlvbiIsIngiLCJ5IiwiZHJhd1dpZHRoIiwiZHJhd0hlaWdodCIsInJhZGl1cyIsImRlc3Ryb3llZCIsImRyYXciLCJiaW5kIiwiZGVzdHJveUJhc2UiLCJkcmF3SW1hZ2UiLCJFeHBsb3Npb24iLCJzaXplIiwibWF4U2l6ZSIsImdyb3d0aFJhdGUiLCJ0aW1lciIsImV4cGxvc2lvbkltYWdlQXJyYXkiLCJpbWFnZVRvRHJhdyIsInN0YWdlIiwiZXhwbG9zaW9uUmFkaXVzIiwidXBkYXRlRXhwbG9zaW9uIiwiZHQiLCJjb250ZXh0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJtZXRlb3JBcnJheSIsImJhc2VBcnJheSIsIm1pc3NpbGVBcnJheSIsImV4cGxvc2lvbkFycmF5IiwibGFzdFRpbWUiLCJzdGFydFRpbWUiLCJsZXZlbCIsImxldmVsTXVsdGlwbGllciIsImdhbWVEaXNwbGF5IiwiR2FtZURpc3BsYXkiLCJzZXR1cExldmVsRGlzcGxheSIsImdhbWVMb29wIiwicnVuR2FtZSIsImJ1aWxkTmV3TWV0ZW9ycyIsInNldHVwTGV2ZWwiLCJ3YWl0Rm9yU3RhcnQiLCJyZXNldEdhbWUiLCJleHBsb3Npb25BdWRpbyIsImJhc2VEZWF0aEF1ZGlvIiwibWlzc2lsZUZsaWdodEF1ZGlvIiwiYmFja2luZ0F1ZGlvIiwiYWN0aXZlTGlzdGVuZXIiLCJiYWNrZ3JvdW5kIiwicmVzZXREaXNwbGF5IiwicGxheSIsImNoYW5nZVVzZXJQcm9tcHQiLCJlIiwibWlzc2lsZXMiLCJBdWRpbyIsInNyYyIsInBvdGVudGlhbEJhc2VzIiwiZmlsdGVyIiwiYmFzZSIsImNsb3Nlc3RCYXNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJvZmZzZXRYIiwiaSIsImxlbmd0aCIsImRlc3RpbmF0aW9uIiwib2Zmc2V0WSIsImZpcmVNaXNzaWxlIiwicHVzaCIsIk1pc3NpbGUiLCJwb3NYIiwiZmxvb3IiLCJyYW5kb20iLCJNZXRlb3IiLCJiYXNlUG9zaXRpb24iLCJuZXh0TGV2ZWwiLCJ0aW1lc3RhbXAiLCJjaGVja0NvbnRpbnVlIiwiZWxhcHNlZEZyYW1lVGltZSIsImZvckVhY2giLCJtZXRlb3IiLCJzcGxpY2UiLCJpbmRleE9mIiwidXBkYXRlUG9zaXRpb24iLCJleHBsb3Npb24iLCJkaXN0YW5jZSIsImNhbGN1bGF0ZURpc3RhbmNlIiwiZGVzdHJveU1ldGVvciIsIm1pc3NpbGUiLCJjaGVja0V4cGxvc2lvbiIsIm91dE9mTWlzc2lsZXMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkZXN0cm95ZWRNZXRlb3JDb3VudCIsImxldmVsR29hbCIsImdhbWVMb3N0Iiwid2luZG93Iiwic2V0VGltZW91dCIsImZvbnQiLCJiYXNlcyIsImNvbnRpbnVlR2FtZSIsImJhc2VzRGl2IiwibWlzc2lsZXNEaXYiLCJsZXZlbERpdiIsImRlc3Ryb3llZERpdiIsInByb21wdEhlYWRlciIsImxldmVsQXVkaW8iLCJ1cGRhdGVEaXNwbGF5IiwiYW5pbWF0ZUluZm8iLCJwcm9tcHRJZCIsImlubmVyVGV4dCIsInNldEF0dHJpYnV0ZSIsImNhbGxiYWNrIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VUZXh0IiwiY29udGFpbmVyIiwiYW5pbWF0ZUNsYXNzIiwiYW5pbWF0ZWREb2MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJudW0iLCJ0ZXh0Iiwic3BlZWQiLCJzZXRTcGVlZCIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsIm1ldGVvckltYWdlIiwidGhyb3R0bGVyIiwiZGVsdGFUaW1lIiwiY291cnNlIiwibWlzc2lsZUltYWdlIiwicG9zMSIsInBvczIiLCJ4RGlzdCIsInlEaXN0Iiwic3FydCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtDQUNBO0FBQ0E7O0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBSTtBQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUVBLE1BQU1DLFlBQVksR0FBRyxJQUFyQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxHQUF0QjtBQUNBSCxLQUFHLENBQUNGLE1BQUosQ0FBV00sS0FBWCxHQUFtQkYsWUFBbkI7QUFDQUYsS0FBRyxDQUFDRixNQUFKLENBQVdPLE1BQVgsR0FBb0JGLGFBQXBCO0FBRUEsTUFBSUcsSUFBSSxHQUFHLElBQUlDLHFEQUFKLENBQVNQLEdBQVQsRUFBY0UsWUFBZCxFQUE0QkMsYUFBNUIsQ0FBWCxDQVRnRCxDQVVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBTCxRQUFNLENBQUNELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDUyxJQUFJLENBQUNFLFdBQXRDLEVBQW1ELEtBQW5ELEVBaEJnRCxDQWlCaEQ7QUFDRCxDQWxCRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0xxQkMsSTs7O0FBQ25CLGdCQUFZVCxHQUFaLEVBQWlCVSxRQUFqQixFQUEwQjtBQUFBOztBQUN4QixTQUFLVixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLVyxTQUFMLEdBQWlCZixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakIsQ0FGd0IsQ0FJeEI7O0FBQ0EsU0FBS2EsWUFBTCxHQUFvQjtBQUNsQkMsT0FBQyxFQUFFSCxRQUFRLENBQUNHLENBRE07QUFFbEJDLE9BQUMsRUFBRUosUUFBUSxDQUFDSTtBQUZNLEtBQXBCO0FBSUEsU0FBS0osUUFBTCxHQUFnQjtBQUNkRyxPQUFDLEVBQUVILFFBQVEsQ0FBQ0csQ0FBVCxHQUFXLEVBREE7QUFFZEMsT0FBQyxFQUFFSixRQUFRLENBQUNJLENBQVQsR0FBVztBQUZBLEtBQWhCLENBVHdCLENBWXJCOztBQUNILFNBQUtDLFNBQUwsR0FBaUIsS0FBS0osU0FBTCxDQUFlUCxLQUFoQztBQUNBLFNBQUtZLFVBQUwsR0FBa0IsS0FBS0wsU0FBTCxDQUFlTixNQUFqQztBQUNBLFNBQUtZLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUVBLFNBQUtDLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVDLElBQVYsQ0FBZSxJQUFmLENBQVo7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0Q7Ozs7a0NBRVk7QUFDWCxXQUFLRixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS1AsU0FBTCxHQUFpQmYsUUFBUSxDQUFDRyxjQUFULENBQXdCLGdCQUF4QixDQUFqQjtBQUNBLFdBQUtnQixTQUFMLEdBQWlCLEdBQWpCO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQixHQUFsQjtBQUNBLFdBQUtKLFlBQUwsQ0FBa0JDLENBQWxCLElBQXVCLEVBQXZCO0FBQ0EsV0FBS0QsWUFBTCxDQUFrQkUsQ0FBbEIsSUFBcUIsRUFBckI7QUFDRDs7OzJCQUVLO0FBQ0osV0FBS2QsR0FBTCxDQUFTc0IsU0FBVCxDQUNFLEtBQUtYLFNBRFAsRUFFRSxLQUFLQyxZQUFMLENBQWtCQyxDQUZwQixFQUdFLEtBQUtELFlBQUwsQ0FBa0JFLENBSHBCLEVBSUUsS0FBS0MsU0FKUCxFQUtFLEtBQUtDLFVBTFA7QUFRRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN6Q2tCTyxTOzs7QUFDbkIscUJBQVl2QixHQUFaLEVBQWlCVSxRQUFqQixFQUEwQjtBQUFBOztBQUN4QixTQUFLRSxZQUFMLEdBQW9CO0FBQ2xCQyxPQUFDLEVBQUVILFFBQVEsQ0FBQ0csQ0FETTtBQUVsQkMsT0FBQyxFQUFFSixRQUFRLENBQUNJO0FBRk0sS0FBcEIsQ0FEd0IsQ0FJckI7O0FBQ0gsU0FBS0osUUFBTCxHQUFjO0FBQ1pHLE9BQUMsRUFBQ0gsUUFBUSxDQUFDRyxDQURDO0FBRVpDLE9BQUMsRUFBQ0osUUFBUSxDQUFDSTtBQUZDLEtBQWQ7QUFLQSxTQUFLVSxJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxHQUFmO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixDQUFDLEtBQUtELE9BQUwsR0FBZSxLQUFLRCxJQUFyQixJQUE2QixDQUEvQyxDQVp3QixDQWF4Qjs7QUFFQSxTQUFLeEIsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBSzJCLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkIsQ0FBQ2hDLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFELEVBQ3pCSCxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FEeUIsRUFFekJILFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUZ5QixFQUd6QkgsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBSHlCLENBQTNCO0FBSUEsU0FBSzhCLFdBQUwsR0FBbUIsS0FBS0QsbUJBQUwsQ0FBeUIsQ0FBekIsQ0FBbkI7QUFDQSxTQUFLRSxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsS0FBS1AsSUFBTCxHQUFVLENBQWpDO0FBRUEsU0FBS0wsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBWjtBQUNBLFNBQUtZLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQlosSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDRDs7OztvQ0FFZWEsRSxFQUFHO0FBQ2pCQSxRQUFFLEdBQUdBLEVBQUUsR0FBQyxJQUFSO0FBQ0EsV0FBS04sS0FBTCxJQUFZTSxFQUFaOztBQUNBLFVBQUksS0FBS04sS0FBTCxJQUFjLEdBQWxCLEVBQXNCO0FBQ3BCLGFBQUtHLEtBQUw7QUFFQSxhQUFLSCxLQUFMLEdBQVksQ0FBWjtBQUNEOztBQUNELFVBQUksS0FBS0csS0FBTCxHQUFhLENBQWpCLEVBQW1CO0FBQ2pCLGFBQUtsQixZQUFMLENBQWtCQyxDQUFsQixHQUFzQixLQUFLSCxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS1csSUFBTCxHQUFVLENBQWxEO0FBQ0EsYUFBS1osWUFBTCxDQUFrQkUsQ0FBbEIsR0FBc0IsS0FBS0osUUFBTCxDQUFjSSxDQUFkLEdBQWtCLEtBQUtVLElBQUwsR0FBVSxDQUFsRDtBQUNBLGFBQUtMLElBQUw7QUFDQSxhQUFLSyxJQUFMLElBQWEsS0FBS0UsVUFBTCxHQUFrQk8sRUFBL0I7QUFDQSxhQUFLRixlQUFMLEdBQXVCLEtBQUtQLElBQUwsR0FBWSxDQUFuQztBQUNEO0FBRUY7OzsyQkFFSztBQUNKLFdBQUt4QixHQUFMLENBQVNzQixTQUFULENBQ0UsS0FBS00sbUJBQUwsQ0FBeUIsS0FBS0UsS0FBOUIsQ0FERixFQUVFLEtBQUtsQixZQUFMLENBQWtCQyxDQUZwQixFQUdFLEtBQUtELFlBQUwsQ0FBa0JFLENBSHBCLEVBSUUsS0FBS1UsSUFKUCxFQUlhLEtBQUtBLElBSmxCO0FBTUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJqQixJOzs7QUFDbkIsZ0JBQVkyQixPQUFaLEVBQXFCOUIsS0FBckIsRUFBNEJDLE1BQTVCLEVBQW1DO0FBQUE7O0FBQUE7O0FBQ2pDLFNBQUtMLEdBQUwsR0FBV2tDLE9BQVg7QUFDQSxTQUFLQyxZQUFMLEdBQW9COUIsTUFBcEI7QUFDQSxTQUFLK0IsV0FBTCxHQUFtQmhDLEtBQW5CO0FBRUEsU0FBS2lDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFFQSxTQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFNBQUtmLEtBQUwsR0FBYSxDQUFiLENBWmlDLENBWWpCOztBQUNoQixTQUFLZ0IsS0FBTCxHQUFhLENBQWIsQ0FiaUMsQ0FhakI7O0FBQ2hCLFNBQUtDLGVBQUwsR0FBdUIsSUFBdkI7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLElBQUlDLG9EQUFKLENBQWdCLEtBQUs5QyxHQUFyQixDQUFuQjtBQUNBLFNBQUs2QyxXQUFMLENBQWlCRSxpQkFBakI7QUFFQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBYzVCLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLNkIsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYTdCLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLFNBQUtaLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQlksSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLOEIsZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCOUIsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDQSxTQUFLK0IsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCL0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDQSxTQUFLZ0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCaEMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQSxTQUFLaUMsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWVqQyxJQUFmLENBQW9CLElBQXBCLENBQWpCO0FBRUEsU0FBS2tDLGNBQUwsR0FBc0IxRCxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXRCO0FBQ0EsU0FBS3dELGNBQUwsR0FBc0IzRCxRQUFRLENBQUNHLGNBQVQsQ0FBd0Isa0JBQXhCLENBQXRCO0FBQ0EsU0FBS3lELGtCQUFMLEdBQTBCNUQsUUFBUSxDQUFDRyxjQUFULENBQXdCLGdCQUF4QixDQUExQjtBQUNBLFNBQUswRCxZQUFMLEdBQW9CN0QsUUFBUSxDQUFDRyxjQUFULENBQXdCLGVBQXhCLENBQXBCO0FBRUEsU0FBSzJELGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCL0QsUUFBUSxDQUFDRyxjQUFULENBQXdCLFlBQXhCLENBQWxCO0FBRUE0RCxjQUFVLENBQUM5RCxnQkFBWCxDQUE0QixNQUE1QixFQUFvQyxZQUFNO0FBQ3hDLFdBQUksQ0FBQ0csR0FBTCxDQUFTc0IsU0FBVCxDQUFtQixLQUFJLENBQUNxQyxVQUF4QixFQUFvQyxDQUFwQyxFQUF1QyxDQUF2QztBQUE0QyxLQUQ5QyxFQUNnRCxLQURoRDtBQUdBL0QsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxZQUFNO0FBQUMsV0FBSSxDQUFDdUQsWUFBTDtBQUFxQixLQUFqRTtBQUNEOzs7O2dDQUVVO0FBQ1QsV0FBS1gsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFdBQUtkLEtBQUwsR0FBYSxDQUFiLENBRlMsQ0FFTzs7QUFDaEIsV0FBS2dCLEtBQUwsR0FBYSxDQUFiLENBSFMsQ0FHTzs7QUFDaEIsV0FBS0MsZUFBTCxHQUF1QixJQUF2QjtBQUNBLFdBQUtGLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxXQUFLRyxXQUFMLENBQWlCZSxZQUFqQjtBQUNEOzs7bUNBRWE7QUFDWixVQUFJLEtBQUtGLGNBQVQsRUFBd0I7QUFDdEIsYUFBS0QsWUFBTCxDQUFrQkksSUFBbEI7QUFDQSxhQUFLaEIsV0FBTCxDQUFpQmlCLGdCQUFqQixDQUFrQyxDQUFsQztBQUNBLGFBQUtULFNBQUw7QUFDQSxhQUFLRixVQUFMO0FBQ0EsYUFBS08sY0FBTCxHQUFzQixLQUF0QjtBQUNEO0FBQ0Y7OztnQ0FFV0ssQyxFQUFFO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsVUFBSSxLQUFLbEIsV0FBTCxDQUFpQm1CLFFBQWpCLEdBQTRCLENBQWhDLEVBQWtDO0FBQ2hDLFlBQUlDLEtBQUosQ0FBVSxLQUFLVCxrQkFBTCxDQUF3QlUsR0FBbEMsRUFBdUNMLElBQXZDO0FBQ0EsWUFBSU0sY0FBYyxHQUFHLEtBQUs3QixTQUFMLENBQWU4QixNQUFmLENBQXNCLFVBQUFDLElBQUksRUFBSTtBQUFDLGlCQUFPLENBQUNBLElBQUksQ0FBQ25ELFNBQWI7QUFBd0IsU0FBdkQsQ0FBckI7QUFDQSxZQUFJb0QsV0FBVyxHQUFHSCxjQUFjLENBQUMsQ0FBRCxDQUFoQztBQUNBLFlBQUlJLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNWLENBQUMsQ0FBQ1csT0FBRixHQUFZSixXQUFXLENBQUM1RCxRQUFaLENBQXFCRyxDQUExQyxDQUFqQjs7QUFDQSxhQUFLLElBQUk4RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUixjQUFjLENBQUNTLE1BQW5DLEVBQTJDRCxDQUFDLEVBQTVDLEVBQWdEO0FBQzlDLGNBQUlILElBQUksQ0FBQ0MsR0FBTCxDQUFTVixDQUFDLENBQUNXLE9BQUYsR0FBWVAsY0FBYyxDQUFDUSxDQUFELENBQWQsQ0FBa0JqRSxRQUFsQixDQUEyQkcsQ0FBaEQsSUFBcUQwRCxVQUF6RCxFQUFxRTtBQUNuRUQsdUJBQVcsR0FBR0gsY0FBYyxDQUFDUSxDQUFELENBQTVCO0FBQ0FKLHNCQUFVLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTVixDQUFDLENBQUNXLE9BQUYsR0FBWUosV0FBVyxDQUFDNUQsUUFBWixDQUFxQkcsQ0FBMUMsQ0FBYjtBQUNEO0FBQ0Y7O0FBQ0QsWUFBSWdFLFdBQVcsR0FBRztBQUNoQmhFLFdBQUMsRUFBRWtELENBQUMsQ0FBQ1csT0FEVztBQUVoQjVELFdBQUMsRUFBRWlELENBQUMsQ0FBQ2U7QUFGVyxTQUFsQjtBQUlBLGFBQUtqQyxXQUFMLENBQWlCa0MsV0FBakI7QUFDQSxhQUFLeEMsWUFBTCxDQUFrQnlDLElBQWxCLENBQXVCLElBQUlDLGdEQUFKLENBQVlKLFdBQVosRUFBMEJQLFdBQVcsQ0FBQzVELFFBQXRDLEVBQWlELEtBQUtWLEdBQXRELENBQXZCO0FBQ0Q7QUFDRjs7O2lDQUVXO0FBQ1Y7QUFDQSxXQUFLcUMsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFdBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxXQUFLRSxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsV0FBS0QsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFdBQUtJLEtBQUwsSUFBYyxDQUFkLENBTlUsQ0FPVjs7QUFDQSxXQUFLLElBQUlnQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFJLElBQUssSUFBSSxLQUFLaEMsS0FBbkMsRUFBNENnQyxDQUFDLEVBQTdDLEVBQWlEO0FBQy9DLFlBQUlPLElBQUksR0FBR1YsSUFBSSxDQUFDVyxLQUFMLENBQVdYLElBQUksQ0FBQ1ksTUFBTCxLQUFnQlosSUFBSSxDQUFDVyxLQUFMLENBQVcsS0FBSy9DLFdBQWhCLENBQTNCLENBQVg7QUFDQSxhQUFLQyxXQUFMLENBQWlCMkMsSUFBakIsQ0FBc0IsSUFBSUssK0NBQUosQ0FBV0gsSUFBWCxFQUFpQixLQUFLbEYsR0FBdEIsQ0FBdEI7QUFDRCxPQVhTLENBWVY7OztBQUNBLFVBQUlzRixZQUFZLEdBQUc7QUFDakJ6RSxTQUFDLEVBQUUsR0FEYztBQUVqQkMsU0FBQyxFQUFFLEtBQUtxQixZQUFMLEdBQW9CO0FBRk4sT0FBbkI7O0FBS0EsV0FBSyxJQUFJd0MsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxDQUFwQixFQUF1QkEsRUFBQyxFQUF4QixFQUE0QjtBQUMxQixhQUFLckMsU0FBTCxDQUFlMEMsSUFBZixDQUFvQixJQUFJdkUsNkNBQUosQ0FBUyxLQUFLVCxHQUFkLEVBQW1Cc0YsWUFBbkIsQ0FBcEI7QUFFQUEsb0JBQVksQ0FBQ3pFLENBQWIsSUFBa0IsS0FBS3VCLFdBQUwsR0FBbUIsQ0FBckM7QUFDRDs7QUFDRCxXQUFLUSxlQUFMLElBQXdCLElBQXhCO0FBQ0EsV0FBS0YsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFdBQUtPLE9BQUw7QUFDRDs7OzhCQUVRO0FBQ1AsV0FBS2pELEdBQUwsQ0FBU3NCLFNBQVQsQ0FBbUIsS0FBS3FDLFVBQXhCLEVBQW9DLENBQXBDLEVBQXVDLENBQXZDO0FBQ0EsV0FBS2QsV0FBTCxDQUFpQjBDLFNBQWpCLENBQTJCLEtBQUt2QyxRQUFoQztBQUNEOzs7NkJBRVF3QyxTLEVBQVU7QUFBQTs7QUFDakIsVUFBSSxDQUFDLEtBQUs5QyxTQUFWLEVBQW9CO0FBQ2xCLGFBQUtBLFNBQUwsR0FBaUI4QyxTQUFqQjtBQUNBLGFBQUsvQyxRQUFMLEdBQWdCLEtBQUtDLFNBQXJCO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLRyxXQUFMLENBQWlCNEMsYUFBakIsRUFBSixFQUFxQztBQUNuQztBQUNBLFlBQUlDLGdCQUFnQixHQUFHRixTQUFTLEdBQUcsS0FBSy9DLFFBQXhDO0FBQ0EsYUFBS0EsUUFBTCxHQUFnQitDLFNBQWhCLENBSG1DLENBSW5DOztBQUNBLGFBQUs3RCxLQUFMLElBQWMrRCxnQkFBZ0IsR0FBRyxJQUFqQyxDQUxtQyxDQU9uQzs7QUFFQSxZQUFJLEtBQUsvRCxLQUFMLElBQWMsR0FBbEIsRUFBdUI7QUFDckIsZUFBS3VCLGVBQUw7QUFDQSxlQUFLdkIsS0FBTCxHQUFhLENBQWI7QUFDRDs7QUFFRCxhQUFLM0IsR0FBTCxDQUFTc0IsU0FBVCxDQUFtQixLQUFLcUMsVUFBeEIsRUFBb0MsQ0FBcEMsRUFBdUMsQ0FBdkM7QUFFQSxhQUFLdEIsV0FBTCxDQUFpQnNELE9BQWpCLENBQXlCLFVBQUFDLE1BQU0sRUFBSTtBQUNqQztBQUNBLGNBQUlBLE1BQU0sQ0FBQ2xGLFFBQVAsQ0FBZ0JJLENBQWhCLElBQXFCLE1BQUksQ0FBQ3FCLFlBQTlCLEVBQTRDO0FBQzFDLGtCQUFJLENBQUNFLFdBQUwsQ0FBaUJ3RCxNQUFqQixDQUF3QixNQUFJLENBQUN4RCxXQUFMLENBQWlCeUQsT0FBakIsQ0FBeUJGLE1BQXpCLENBQXhCLEVBQTBELENBQTFEO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLGtCQUFNLENBQUNHLGNBQVAsQ0FBc0IsTUFBSSxDQUFDbkQsZUFBM0IsRUFBNEM4QyxnQkFBZ0IsR0FBRyxJQUEvRDtBQUNELFdBTmdDLENBT2pDOzs7QUFDQSxnQkFBSSxDQUFDbEQsY0FBTCxDQUFvQm1ELE9BQXBCLENBQTRCLFVBQUFLLFNBQVMsRUFBSTtBQUN2QyxnQkFBSUMsUUFBUSxHQUFHQywrREFBaUIsQ0FBQ0YsU0FBUyxDQUFDdEYsUUFBWCxFQUFxQmtGLE1BQU0sQ0FBQ2xGLFFBQTVCLENBQWhDLENBRHVDLENBRXZDOztBQUNBLGdCQUFJdUYsUUFBUSxJQUFJRCxTQUFTLENBQUNqRSxlQUFWLEdBQTRCNkQsTUFBTSxDQUFDM0UsTUFBbkQsRUFBMkQ7QUFDekQsa0JBQUlnRCxLQUFKLENBQVUsTUFBSSxDQUFDWCxjQUFMLENBQW9CWSxHQUE5QixFQUFtQ0wsSUFBbkM7O0FBQ0Esb0JBQUksQ0FBQ3JCLGNBQUwsQ0FBb0J3QyxJQUFwQixDQUF5QixJQUFJekQsa0RBQUosQ0FBYyxNQUFJLENBQUN2QixHQUFuQixFQUF3QjRGLE1BQU0sQ0FBQ2xGLFFBQS9CLENBQXpCOztBQUNBLG9CQUFJLENBQUMyQixXQUFMLENBQWlCd0QsTUFBakIsQ0FBd0IsTUFBSSxDQUFDeEQsV0FBTCxDQUFpQnlELE9BQWpCLENBQXlCRixNQUF6QixDQUF4QixFQUEwRCxDQUExRDs7QUFDQSxvQkFBSSxDQUFDL0MsV0FBTCxDQUFpQnNELGFBQWpCOztBQUNBO0FBQ0Q7QUFDRixXQVZEOztBQVlBLGdCQUFJLENBQUM3RCxTQUFMLENBQWVxRCxPQUFmLENBQXVCLFVBQUF0QixJQUFJLEVBQUk7QUFDN0JBLGdCQUFJLENBQUNsRCxJQUFMOztBQUNBLGdCQUFJa0QsSUFBSSxDQUFDbkQsU0FBVCxFQUFvQjtBQUNsQjtBQUNEOztBQUVELGdCQUFJK0UsUUFBUSxHQUFHQywrREFBaUIsQ0FBQ04sTUFBTSxDQUFDbEYsUUFBUixFQUFrQjJELElBQUksQ0FBQzNELFFBQXZCLENBQWhDOztBQUNBLGdCQUFJdUYsUUFBUSxJQUFJNUIsSUFBSSxDQUFDcEQsTUFBTCxHQUFjMkUsTUFBTSxDQUFDM0UsTUFBckMsRUFBNkM7QUFDM0Msa0JBQUlnRCxLQUFKLENBQVUsTUFBSSxDQUFDVixjQUFMLENBQW9CVyxHQUE5QixFQUFtQ0wsSUFBbkM7QUFDQVEsa0JBQUksQ0FBQ2hELFdBQUw7O0FBQ0Esb0JBQUksQ0FBQ3dCLFdBQUwsQ0FBaUJ4QixXQUFqQjs7QUFDQSxvQkFBSSxDQUFDbUIsY0FBTCxDQUFvQndDLElBQXBCLENBQXlCLElBQUl6RCxrREFBSixDQUFjLE1BQUksQ0FBQ3ZCLEdBQW5CLEVBQXdCcUUsSUFBSSxDQUFDM0QsUUFBN0IsQ0FBekI7QUFDRDtBQUNGLFdBYkQ7QUFjRCxTQWxDRDtBQW9DQSxhQUFLNkIsWUFBTCxDQUFrQm9ELE9BQWxCLENBQTBCLFVBQUFTLE9BQU8sRUFBSTtBQUNuQztBQUNBLGNBQUlBLE9BQU8sQ0FBQ0MsY0FBUixDQUF1QkgsK0RBQWlCLENBQUNFLE9BQU8sQ0FBQzFGLFFBQVQsRUFBbUIwRixPQUFPLENBQUN2QixXQUEzQixDQUF4QyxDQUFKLEVBQXNGO0FBQ3BGLGdCQUFJWixLQUFKLENBQVUsTUFBSSxDQUFDWCxjQUFMLENBQW9CWSxHQUE5QixFQUFtQ0wsSUFBbkM7O0FBQ0Esa0JBQUksQ0FBQ3JCLGNBQUwsQ0FBb0J3QyxJQUFwQixDQUF5QixJQUFJekQsa0RBQUosQ0FBYyxNQUFJLENBQUN2QixHQUFuQixFQUF3Qm9HLE9BQU8sQ0FBQzFGLFFBQWhDLENBQXpCOztBQUNBLGtCQUFJLENBQUM2QixZQUFMLENBQWtCc0QsTUFBbEIsQ0FBeUIsTUFBSSxDQUFDdEQsWUFBTCxDQUFrQnVELE9BQWxCLENBQTBCTSxPQUExQixDQUF6QixFQUE2RCxDQUE3RDtBQUNELFdBSkQsTUFJTztBQUNMQSxtQkFBTyxDQUFDTCxjQUFSLENBQXdCTCxnQkFBZ0IsR0FBRyxJQUEzQztBQUNEO0FBQ0YsU0FURDtBQVdBLGFBQUtsRCxjQUFMLENBQW9CbUQsT0FBcEIsQ0FBNEIsVUFBQUssU0FBUyxFQUFJO0FBQ3ZDLGNBQUlBLFNBQVMsQ0FBQ2xFLEtBQVYsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsa0JBQUksQ0FBQ1UsY0FBTCxDQUFvQnFELE1BQXBCLENBQTJCLE1BQUksQ0FBQ3JELGNBQUwsQ0FBb0JzRCxPQUFwQixDQUE0QkUsU0FBNUIsQ0FBM0IsRUFBbUUsQ0FBbkU7QUFDRCxXQUZELE1BRU87QUFDTEEscUJBQVMsQ0FBQ2hFLGVBQVYsQ0FBMEIwRCxnQkFBMUI7QUFDRDtBQUNGLFNBTkQsRUEvRG1DLENBdUVuQzs7QUFDQSxZQUFJLEtBQUs3QyxXQUFMLENBQWlCbUIsUUFBakIsS0FBOEIsQ0FBbEMsRUFBb0M7QUFDbEM7QUFDQSxjQUFJLEtBQUt6QixZQUFMLENBQWtCcUMsTUFBbEIsS0FBNkIsQ0FBN0IsSUFBa0MsS0FBS3BDLGNBQUwsQ0FBb0JvQyxNQUFwQixLQUErQixDQUFyRSxFQUF1RTtBQUNyRSxpQkFBSy9CLFdBQUwsQ0FBaUJ5RCxhQUFqQjtBQUNEO0FBQ0Y7O0FBRURDLDZCQUFxQixDQUFDLEtBQUt2RCxRQUFOLENBQXJCLENBL0VtQyxDQWdGckM7QUFDQyxPQWpGRCxNQWlGTztBQUNMLFlBQUksS0FBS0gsV0FBTCxDQUFpQjJELG9CQUFqQixJQUF5QyxLQUFLM0QsV0FBTCxDQUFpQjRELFNBQTlELEVBQXdFO0FBQ3RFO0FBQ0EsZUFBS3RELFVBQUw7QUFDRCxTQUhELE1BR087QUFDTDtBQUNBLGVBQUtOLFdBQUwsQ0FBaUI2RCxRQUFqQjtBQUNBQyxnQkFBTSxDQUFDQyxVQUFQLENBQWtCLFlBQU07QUFDdEIsa0JBQUksQ0FBQy9ELFdBQUwsQ0FBaUJpQixnQkFBakIsQ0FBa0MsQ0FBbEM7O0FBQ0Esa0JBQUksQ0FBQ0osY0FBTCxHQUFzQixJQUF0QjtBQUNELFdBSEQsRUFHRSxJQUhGO0FBSUQ7QUFDRjtBQUNGOzs7c0NBRWlCO0FBQ2hCLFdBQUksSUFBSWlCLENBQUMsR0FBRSxDQUFYLEVBQWNBLENBQUMsR0FBRyxLQUFLaEMsS0FBTCxHQUFhLENBQS9CLEVBQWtDZ0MsQ0FBQyxFQUFuQyxFQUFzQztBQUNwQyxZQUFJTyxJQUFJLEdBQUdWLElBQUksQ0FBQ1csS0FBTCxDQUFXWCxJQUFJLENBQUNZLE1BQUwsS0FBZ0JaLElBQUksQ0FBQ1csS0FBTCxDQUFXLEtBQUsvQyxXQUFoQixDQUEzQixDQUFYO0FBQ0EsYUFBS0MsV0FBTCxDQUFpQjJDLElBQWpCLENBQXNCLElBQUlLLCtDQUFKLENBQVdILElBQVgsRUFBaUIsS0FBS2xGLEdBQXRCLENBQXRCO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN2T2tCNkMsVzs7O0FBQ25CLHVCQUFZN0MsR0FBWixFQUFnQjtBQUFBOztBQUNkLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtBLEdBQUwsQ0FBUzZHLElBQVQsR0FBZ0IsaUJBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLOUMsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtyQixLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUs2RCxvQkFBTCxHQUE0QixDQUE1QjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLTSxZQUFMLEdBQW9CLElBQXBCO0FBRUEsU0FBS0MsUUFBTCxHQUFnQnBILFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixpQkFBeEIsQ0FBaEI7QUFDQSxTQUFLa0gsV0FBTCxHQUFtQnJILFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixvQkFBeEIsQ0FBbkI7QUFDQSxTQUFLbUgsUUFBTCxHQUFnQnRILFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixpQkFBeEIsQ0FBaEI7QUFDQSxTQUFLb0gsWUFBTCxHQUFvQnZILFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixxQkFBeEIsQ0FBcEI7QUFDQSxTQUFLcUgsWUFBTCxHQUFvQnhILFFBQVEsQ0FBQ0csY0FBVCxDQUF3QiwyQkFBeEIsQ0FBcEI7QUFFQSxTQUFLc0gsVUFBTCxHQUFrQnpILFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixlQUF4QixDQUFsQjtBQUdBLFNBQUswRixhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJyRSxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLa0csYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CbEcsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDQSxTQUFLbUUsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWVuRSxJQUFmLENBQW9CLElBQXBCLENBQWpCO0FBQ0EsU0FBSytFLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQi9FLElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0EsU0FBS3NGLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjdEYsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUsyQixpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxDQUF1QjNCLElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0EsU0FBS3dDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQnhDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBSzBDLGdCQUFMLEdBQXdCLEtBQUtBLGdCQUFMLENBQXNCMUMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBeEI7QUFDQSxTQUFLbUcsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCbkcsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLa0YsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CbEYsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFFQSxTQUFLa0csYUFBTDtBQUNEOzs7O3FDQUVnQkUsUSxFQUFTO0FBQ3hCLFVBQUlBLFFBQVEsS0FBSyxDQUFqQixFQUFtQjtBQUNqQixhQUFLSixZQUFMLENBQWtCSyxTQUFsQixHQUE4QixRQUE5QjtBQUNBLGFBQUtMLFlBQUwsQ0FBa0JNLFlBQWxCLENBQStCLElBQS9CLEVBQXFDLHlCQUFyQztBQUNELE9BSEQsTUFHTyxJQUFJRixRQUFRLEtBQUssQ0FBakIsRUFBbUI7QUFDeEIsYUFBS0osWUFBTCxDQUFrQkssU0FBbEIsR0FBOEIsd0JBQTlCO0FBQ0Q7QUFDRjs7O21DQUVhO0FBQ1osV0FBS1gsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLOUMsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFdBQUtyQixLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUs2RCxvQkFBTCxHQUE0QixDQUE1QjtBQUNBLFdBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxXQUFLYSxhQUFMO0FBQ0Q7Ozt3Q0FFa0I7QUFDakIsV0FBSzNFLEtBQUwsSUFBYyxDQUFkO0FBQ0EsV0FBS3FCLFFBQUwsR0FBaUIsSUFBSyxLQUFLckIsS0FBM0I7QUFDQSxXQUFLbUUsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLTixvQkFBTCxHQUE0QixDQUE1QjtBQUNBLFdBQUtDLFNBQUwsR0FBa0IsSUFBSyxLQUFLOUQsS0FBTCxHQUFhLENBQXBDO0FBQ0EsVUFBRyxLQUFLQSxLQUFMLElBQWEsQ0FBaEIsRUFBbUIsS0FBSzhELFNBQUwsSUFBa0IsS0FBSzlELEtBQXZCO0FBQ25CLFdBQUtvRSxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsV0FBS08sYUFBTCxDQUFtQixDQUFuQjtBQUNEOzs7OEJBRVNLLFEsRUFBUztBQUNqQjtBQUNBLFdBQUs1RSxpQkFBTDs7QUFDQSxVQUFJLEtBQUtKLEtBQUwsR0FBYSxDQUFqQixFQUFtQjtBQUNqQixhQUFLMEUsVUFBTCxDQUFnQnhELElBQWhCO0FBQ0Q7O0FBQ0QsV0FBSzdELEdBQUwsQ0FBUzRILFNBQVQsR0FBcUIsS0FBckI7QUFDQSxXQUFLNUgsR0FBTCxDQUFTNkgsUUFBVCxDQUFrQixHQUFsQixFQUF1QixHQUF2QixFQUE0QixHQUE1QixFQUFpQyxHQUFqQztBQUNBLFdBQUs3SCxHQUFMLENBQVM0SCxTQUFULEdBQXFCLFFBQXJCO0FBQ0EsV0FBSzVILEdBQUwsQ0FBUzhILFVBQVQsaUJBQTZCLEtBQUtuRixLQUFsQyxHQUEyQyxHQUEzQyxFQUErQyxHQUEvQztBQUNBZ0UsWUFBTSxDQUFDQyxVQUFQLENBQWtCLFlBQU07QUFBRWUsZ0JBQVEsQ0FBQyxDQUFELENBQVI7QUFBYyxPQUF4QyxFQUEwQyxJQUExQztBQUNEOzs7Z0NBRVdJLFMsRUFBVTtBQUNwQixVQUFJQyxZQUFZLEdBQUcsbUJBQW5CO0FBQ0EsVUFBSUMsV0FBVyxHQUFHRixTQUFsQjtBQUNBRSxpQkFBVyxDQUFDQyxTQUFaLENBQXNCQyxHQUF0QixDQUEwQkgsWUFBMUI7QUFDQXJCLFlBQU0sQ0FBQ0MsVUFBUCxDQUFrQixZQUFNO0FBQ3RCcUIsbUJBQVcsQ0FBQ0MsU0FBWixDQUFzQkUsTUFBdEIsQ0FBNkJKLFlBQTdCO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7O29DQUVxQjtBQUFBLFVBQVJLLEdBQVEsdUVBQUYsQ0FBRTtBQUVwQixXQUFLbkIsUUFBTCxDQUFjTyxTQUFkLG9CQUFvQyxLQUFLOUUsS0FBekM7QUFDQSxXQUFLcUUsUUFBTCxDQUFjUyxTQUFkLG9CQUFvQyxLQUFLWCxLQUF6QztBQUNBLFdBQUtHLFdBQUwsQ0FBaUJRLFNBQWpCLHVCQUEwQyxLQUFLekQsUUFBL0M7QUFDQSxXQUFLbUQsWUFBTCxDQUFrQk0sU0FBbEIsZ0NBQW9ELEtBQUtqQixvQkFBekQsaUJBQW9GLEtBQUtDLFNBQXpGOztBQUNBLGNBQVE0QixHQUFSO0FBQ0UsYUFBSyxDQUFMO0FBQ0UsZUFBS2QsV0FBTCxDQUFpQixLQUFLUCxRQUF0QjtBQUNBOztBQUNGLGFBQUssQ0FBTDtBQUNFLGVBQUtPLFdBQUwsQ0FBaUIsS0FBS04sV0FBdEI7QUFDQTs7QUFDRixhQUFLLENBQUw7QUFDRSxlQUFLTSxXQUFMLENBQWlCLEtBQUtKLFlBQXRCO0FBQ0E7O0FBQ0YsYUFBSyxDQUFMO0FBQ0UsZUFBS0ksV0FBTCxDQUFpQixLQUFLTCxRQUF0Qjs7QUFDRjtBQUNFO0FBYko7QUFlRDs7O2tDQUVZO0FBQ1gsV0FBS2xELFFBQUwsSUFBaUIsQ0FBakI7QUFDQSxXQUFLc0QsYUFBTCxDQUFtQixDQUFuQjtBQUNEOzs7a0NBRVk7QUFDWCxXQUFLUixLQUFMLElBQWMsQ0FBZDtBQUNBLFdBQUtRLGFBQUwsQ0FBbUIsQ0FBbkI7QUFDRDs7O29DQUVjO0FBQ2IsV0FBS2Qsb0JBQUwsSUFBNkIsQ0FBN0I7QUFDQSxXQUFLYyxhQUFMLENBQW1CLENBQW5CO0FBQ0Q7OztvQ0FFYztBQUNiLFVBQUksS0FBS2IsU0FBTCxHQUFpQixLQUFLRCxvQkFBdEIsR0FBNkMsS0FBS00sS0FBdEQsRUFBNEQ7QUFDMUQsYUFBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUNEO0FBQ0Y7OzsrQkFFUztBQUNSLFVBQUl1QixJQUFJLEdBQUcsS0FBS3hCLEtBQUwsS0FBZSxDQUFmLEdBQW1CLG1DQUFuQixHQUF5RCxxQ0FBcEU7QUFDQSxXQUFLOUcsR0FBTCxDQUFTNEgsU0FBVCxHQUFxQixLQUFyQjtBQUNBLFdBQUs1SCxHQUFMLENBQVM2SCxRQUFULENBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLEVBQTRCLEdBQTVCLEVBQWlDLEdBQWpDO0FBQ0EsV0FBSzdILEdBQUwsQ0FBUzRILFNBQVQsR0FBcUIsUUFBckI7QUFDQSxXQUFLNUgsR0FBTCxDQUFTOEgsVUFBVCxXQUF1QlEsSUFBdkIsR0FBK0IsR0FBL0IsRUFBb0MsR0FBcEM7QUFDQSxXQUFLbEIsWUFBTCxDQUFrQkssU0FBbEIsR0FBOEIsV0FBOUI7QUFDRDs7O29DQUVjO0FBQ2IsVUFBSSxLQUFLakIsb0JBQUwsSUFBNkIsS0FBS0MsU0FBdEMsRUFBZ0Q7QUFDOUMsYUFBS00sWUFBTCxHQUFvQixLQUFwQjtBQUNEOztBQUNELFVBQUksS0FBS0QsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ2xCLGFBQUtDLFlBQUwsR0FBb0IsS0FBcEI7QUFDRDs7QUFDRCxhQUFPLEtBQUtBLFlBQVo7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuSmtCMUIsTTs7O0FBQ25CLGtCQUFZSCxJQUFaLEVBQWtCbEYsR0FBbEIsRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS1UsUUFBTCxHQUFnQjtBQUNkRyxPQUFDLEVBQUVxRSxJQURXO0FBRWRwRSxPQUFDLEVBQUUsQ0FBQztBQUZVLEtBQWhCLENBRm9CLENBTXBCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQUt5SCxLQUFMLEdBQWEsS0FBSyxLQUFLQyxRQUFMLEVBQWxCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLQyxZQUFMLEVBQWpCO0FBQ0EsU0FBS3pILE1BQUwsR0FBYyxFQUFkO0FBRUEsU0FBSzBILFdBQUwsR0FBbUIvSSxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBbkI7QUFFQSxTQUFLZ0csY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CM0UsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQSxTQUFLRCxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0Q7Ozs7K0JBRVM7QUFDUjtBQUNBLFVBQUl3SCxTQUFTLEdBQUdwRSxJQUFJLENBQUNZLE1BQUwsRUFBaEI7QUFDQSxVQUFJd0QsU0FBUyxJQUFJLElBQWpCLEVBQXVCLE9BQU8sSUFBUDtBQUN2QixVQUFJQSxTQUFTLElBQUksSUFBakIsRUFBdUIsT0FBTyxJQUFQO0FBQ3ZCLGFBQU8sQ0FBUDtBQUNEOzs7bUNBRWE7QUFDWjtBQUNBLFVBQUkvSCxDQUFDLEdBQUcyRCxJQUFJLENBQUNZLE1BQUwsRUFBUjtBQUNBLFVBQUl2RSxDQUFDLEdBQUcsR0FBUixFQUFhQSxDQUFDLElBQUksQ0FBQyxDQUFOO0FBQ2IsYUFBT0EsQ0FBUDtBQUNEOzs7bUNBRWMrQixlLEVBQWlCaUcsUyxFQUFVO0FBQ3hDO0FBQ0EsV0FBS25JLFFBQUwsQ0FBY0csQ0FBZCxJQUFtQixLQUFLNEgsU0FBeEI7QUFDQSxXQUFLL0gsUUFBTCxDQUFjSSxDQUFkLElBQW9COEIsZUFBZSxHQUFHLEtBQUsyRixLQUF2QixHQUErQk0sU0FBbkQsQ0FId0MsQ0FJeEM7O0FBQ0EsV0FBSzFILElBQUw7QUFDRDs7OzJCQUdLO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsV0FBS25CLEdBQUwsQ0FBU3NCLFNBQVQsQ0FDRSxLQUFLcUgsV0FEUCxFQUVFLEtBQUtqSSxRQUFMLENBQWNHLENBQWQsR0FBZ0IsRUFGbEIsRUFHRSxLQUFLSCxRQUFMLENBQWNJLENBQWQsR0FBZ0IsRUFIbEIsRUFJRSxFQUpGLEVBS0UsRUFMRjtBQU9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3hEa0JtRSxPOzs7QUFDbkIsbUJBQVlKLFdBQVosRUFBeUJuRSxRQUF6QixFQUFtQ1YsR0FBbkMsRUFBdUM7QUFBQTs7QUFDckMsU0FBSzZFLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS25FLFFBQUwsR0FBZ0I7QUFDZEcsT0FBQyxFQUFFSCxRQUFRLENBQUNHLENBQVQsR0FBYSxFQURGO0FBRWRDLE9BQUMsRUFBRUosUUFBUSxDQUFDSSxDQUFULEdBQWE7QUFGRixLQUFoQjtBQUtBLFNBQUtnSSxNQUFMLEdBQWM7QUFDWmpJLE9BQUMsRUFBRyxLQUFLZ0UsV0FBTCxDQUFpQmhFLENBQWpCLEdBQXFCLEtBQUtILFFBQUwsQ0FBY0csQ0FEM0I7QUFFWkMsT0FBQyxFQUFHLEtBQUsrRCxXQUFMLENBQWlCL0QsQ0FBakIsR0FBcUIsS0FBS0osUUFBTCxDQUFjSTtBQUYzQixLQUFkO0FBSUEsU0FBS3lILEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS3RILE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS2MsZUFBTCxHQUF1QixDQUF2QjtBQUNBLFNBQUsvQixHQUFMLEdBQVdBLEdBQVg7QUFFQSxTQUFLK0ksWUFBTCxHQUFvQm5KLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixnQkFBeEIsQ0FBcEI7QUFDQSxTQUFLb0IsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBWjtBQUNBLFNBQUsyRSxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0IzRSxJQUFwQixDQUF5QixJQUF6QixDQUF0QixDQWxCcUMsQ0FtQnJDOztBQUNBLFNBQUtpRixjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JqRixJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNEOzs7O21DQUVjNkUsUSxFQUFTO0FBQ3RCO0FBQ0EsVUFBSUEsUUFBUSxJQUFJLEtBQUtsRSxlQUFyQixFQUFzQyxPQUFPLElBQVA7QUFDdEMsYUFBTyxLQUFQO0FBQ0QsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7bUNBRWVFLEUsRUFBRztBQUNoQixXQUFLdkIsUUFBTCxDQUFjRyxDQUFkLElBQW9CLEtBQUtpSSxNQUFMLENBQVlqSSxDQUFaLEdBQWdCLEtBQUswSCxLQUF0QixHQUErQnRHLEVBQWxEO0FBQ0EsV0FBS3ZCLFFBQUwsQ0FBY0ksQ0FBZCxJQUFvQixLQUFLZ0ksTUFBTCxDQUFZaEksQ0FBWixHQUFnQixLQUFLeUgsS0FBdEIsR0FBK0J0RyxFQUFsRDtBQUNBLFdBQUtkLElBQUw7QUFDRDs7OzJCQUVLO0FBQ0o7QUFDQSxXQUFLbkIsR0FBTCxDQUFTc0IsU0FBVCxDQUNFLEtBQUt5SCxZQURQLEVBRUUsS0FBS3JJLFFBQUwsQ0FBY0csQ0FGaEIsRUFHRSxLQUFLSCxRQUFMLENBQWNJLENBSGhCO0FBS0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pESDtBQUFBO0FBQU8sSUFBTW9GLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQzhDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUMvQztBQUNBLE1BQUlDLEtBQUssR0FBRzFFLElBQUksQ0FBQ0MsR0FBTCxDQUFTdUUsSUFBSSxDQUFDbkksQ0FBTCxHQUFTb0ksSUFBSSxDQUFDcEksQ0FBdkIsQ0FBWjtBQUNBLE1BQUlzSSxLQUFLLEdBQUczRSxJQUFJLENBQUNDLEdBQUwsQ0FBU3VFLElBQUksQ0FBQ2xJLENBQUwsR0FBU21JLElBQUksQ0FBQ25JLENBQXZCLENBQVo7QUFDQSxTQUFPMEQsSUFBSSxDQUFDNEUsSUFBTCxDQUFXRixLQUFLLEdBQUdBLEtBQVQsR0FBbUJDLEtBQUssR0FBR0EsS0FBckMsQ0FBUDtBQUNELENBTE0sQyxDQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUNYQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG4vL2NvbnN0IEFwcCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYXBwLmpzXCIpO1xuLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpOyAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgU0NSRUVOX1dJRFRIID0gMTIwMDtcbiAgY29uc3QgU0NSRUVOX0hFSUdIVCA9IDgwMDtcbiAgY3R4LmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSDtcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4LCBTQ1JFRU5fV0lEVEgsIFNDUkVFTl9IRUlHSFQpO1xuICAvL2xldCBiYWNraW5nQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tpbmctdHJhY2tcIik7XG4gIC8vIGJhY2tpbmdBdWRpby5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIC8vICAgZGVidWdnZXI7XG4gIC8vICAgbmV3IEF1ZGlvKGJhY2tpbmdBdWRpby5zcmMpLnBsYXkoKTtcbiAgLy8gfSwgZmFsc2UpO1xuICBcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lLmhhbmRsZUNsaWNrLCBmYWxzZSk7XG4gIC8vZ2FtZS5ydW5HYW1lKCk7XG59KTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNle1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZS1pbWFnZVwiKTtcbiAgICBcbiAgICAvL3RoaXMuZGVzdHJveWVkSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3Ryb3llZC1iYXNlXCIpO1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgIHk6IHBvc2l0aW9uLnlcbiAgICB9O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54KzIxLFxuICAgICAgeTogcG9zaXRpb24ueSs1MFxuICAgIH07IC8vbWFnaWMgbnVtYmVycyBmb3Igd2lkdGggYW5kIGhlaWdodCBhZGp1c3RpbmdcbiAgICB0aGlzLmRyYXdXaWR0aCA9IHRoaXMuYmFzZUltYWdlLndpZHRoO1xuICAgIHRoaXMuZHJhd0hlaWdodCA9IHRoaXMuYmFzZUltYWdlLmhlaWdodDtcbiAgICB0aGlzLnJhZGl1cyA9IDQwO1xuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3lCYXNlID0gdGhpcy5kZXN0cm95QmFzZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZGVzdHJveUJhc2UoKXtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5iYXNlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3Ryb3llZC1iYXNlXCIpO1xuICAgIHRoaXMuZHJhd1dpZHRoID0gMTAwO1xuICAgIHRoaXMuZHJhd0hlaWdodCA9IDEwMDtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbi54IC09IDIwO1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnkrPTQwO1xuICB9XG5cbiAgZHJhdygpeyBcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmJhc2VJbWFnZSwgXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54LCBcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnksXG4gICAgICB0aGlzLmRyYXdXaWR0aCxcbiAgICAgIHRoaXMuZHJhd0hlaWdodFxuXG4gICAgICApO1xuICB9XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvc2lvbntcbiAgY29uc3RydWN0b3IoY3R4LCBwb3NpdGlvbil7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgeTogcG9zaXRpb24ueVxuICAgIH07IC8vNTAgaXMgbWFnaWMgbnVtYmVyIGNlbnRlclxuICAgIHRoaXMucG9zaXRpb249e1xuICAgICAgeDpwb3NpdGlvbi54LFxuICAgICAgeTpwb3NpdGlvbi55XG4gICAgfTtcblxuICAgIHRoaXMuc2l6ZSA9IDYwO1xuICAgIHRoaXMubWF4U2l6ZSA9IDE1MDtcbiAgICB0aGlzLmdyb3d0aFJhdGUgPSAodGhpcy5tYXhTaXplIC0gdGhpcy5zaXplKSAvIDQ7XG4gICAgLy9jYWxjdWxhdGlvbiBmb3IgaG93IGZhc3QgdG8gZ3Jvd1xuXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy50aW1lciA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5ID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTFcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0yXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tM1wiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTRcIildO1xuICAgIHRoaXMuaW1hZ2VUb0RyYXcgPSB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXlbMF07XG4gICAgdGhpcy5zdGFnZSA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSB0aGlzLnNpemUvMjtcblxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlRXhwbG9zaW9uID0gdGhpcy51cGRhdGVFeHBsb3Npb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZUV4cGxvc2lvbihkdCl7XG4gICAgZHQgPSBkdC8xMDAwO1xuICAgIHRoaXMudGltZXIrPWR0O1xuICAgIGlmICh0aGlzLnRpbWVyID49IDAuOCl7XG4gICAgICB0aGlzLnN0YWdlKys7XG5cbiAgICAgIHRoaXMudGltZXIgPTA7XG4gICAgfSAgICBcbiAgICBpZiAodGhpcy5zdGFnZSA8IDQpe1xuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCA9IHRoaXMucG9zaXRpb24ueCAtIHRoaXMuc2l6ZS8yO1xuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueSA9IHRoaXMucG9zaXRpb24ueSAtIHRoaXMuc2l6ZS8yO1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB0aGlzLnNpemUgKz0gdGhpcy5ncm93dGhSYXRlICogZHQ7ICBcbiAgICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gdGhpcy5zaXplIC8gMjsgICAgXG4gICAgfVxuICAgIFxuICB9XG5cbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheVt0aGlzLnN0YWdlXSxcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLngsXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLCB0aGlzLnNpemVcbiAgICApO1xuICB9XG59IiwiaW1wb3J0IE1ldGVvciBmcm9tIFwiLi9tZXRlb3JcIjtcbmltcG9ydCBNaXNzaWxlIGZyb20gXCIuL21pc3NpbGVcIjtcbmltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCBFeHBsb3Npb24gZnJvbSBcIi4vZXhwbG9zaW9uXCI7XG5pbXBvcnQgR2FtZURpc3BsYXkgZnJvbSBcIi4vZ2FtZURpc3BsYXlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZURpc3RhbmNlIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1le1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KXtcbiAgICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5zY3JlZW5XaWR0aCA9IHdpZHRoOyBcblxuICAgIHRoaXMubWV0ZW9yQXJyYXkgPSBbXTtcbiAgICB0aGlzLmJhc2VBcnJheSA9IFtdO1xuICAgIHRoaXMubWlzc2lsZUFycmF5ID0gW107XG4gICAgdGhpcy5leHBsb3Npb25BcnJheSA9IFtdO1xuXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMudGltZXIgPSAwOyAvL3VzZWQgdG8gZ2VuZXJhdGUgbmV3IG1ldGVvcnMgYXQgaW50ZXJ2YWxzXG4gICAgdGhpcy5sZXZlbCA9IDA7IC8vY29udHJvbHMgZGlmZmljdWx0eSBhbmQgcGFjZSBvZiBnYW1lXG4gICAgdGhpcy5sZXZlbE11bHRpcGxpZXIgPSAwLjg1O1xuICAgIFxuICAgIHRoaXMuZ2FtZURpc3BsYXkgPSBuZXcgR2FtZURpc3BsYXkodGhpcy5jdHgpOyAgXG4gICAgdGhpcy5nYW1lRGlzcGxheS5zZXR1cExldmVsRGlzcGxheSgpOyBcblxuICAgIHRoaXMuZ2FtZUxvb3AgPSB0aGlzLmdhbWVMb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ydW5HYW1lID0gdGhpcy5ydW5HYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycyA9IHRoaXMuYnVpbGROZXdNZXRlb3JzLmJpbmQodGhpcyk7ICBcbiAgICB0aGlzLnNldHVwTGV2ZWwgPSB0aGlzLnNldHVwTGV2ZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLndhaXRGb3JTdGFydCA9IHRoaXMud2FpdEZvclN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEdhbWUgPSB0aGlzLnJlc2V0R2FtZS5iaW5kKHRoaXMpOyAgIFxuICAgIFxuICAgIHRoaXMuZXhwbG9zaW9uQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi1hdWRpb1wiKTtcbiAgICB0aGlzLmJhc2VEZWF0aEF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLWRlYXRoLWF1ZGlvXCIpOyAgICBcbiAgICB0aGlzLm1pc3NpbGVGbGlnaHRBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlzc2lsZS1mbGlnaHRcIik7XG4gICAgdGhpcy5iYWNraW5nQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tpbmctdHJhY2tcIik7XG5cbiAgICB0aGlzLmFjdGl2ZUxpc3RlbmVyID0gdHJ1ZTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gICAgXG4gICAgYmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7IFxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZCwgMCwgMCk7IH0sIGZhbHNlKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICgpID0+IHt0aGlzLndhaXRGb3JTdGFydCgpO30pO1xuICB9XG5cbiAgcmVzZXRHYW1lKCl7XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMDsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciA9IDAuODU7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMuZ2FtZURpc3BsYXkucmVzZXREaXNwbGF5KCk7XG4gIH1cblxuICB3YWl0Rm9yU3RhcnQoKXtcbiAgICBpZiAodGhpcy5hY3RpdmVMaXN0ZW5lcil7XG4gICAgICB0aGlzLmJhY2tpbmdBdWRpby5wbGF5KCk7XG4gICAgICB0aGlzLmdhbWVEaXNwbGF5LmNoYW5nZVVzZXJQcm9tcHQoMSk7XG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgICAgdGhpcy5zZXR1cExldmVsKCk7XG4gICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSl7ICAgICBcbiAgICAvL2NoZWNrIGZvciBtaXNzaWxlIGNvdW50XG4gICAgLy9maW5kIGNsb3Nlc3QgYmFzZSB0byBjbGlja1xuICAgIC8vc3Bhd24gbWlzc2lsZSBhdCBiYXNlIGhlYWRpbmcgdG93YXJkcyBjbGljayBcbiAgICBpZiAodGhpcy5nYW1lRGlzcGxheS5taXNzaWxlcyA+IDApe1xuICAgICAgbmV3IEF1ZGlvKHRoaXMubWlzc2lsZUZsaWdodEF1ZGlvLnNyYykucGxheSgpO1xuICAgICAgbGV0IHBvdGVudGlhbEJhc2VzID0gdGhpcy5iYXNlQXJyYXkuZmlsdGVyKGJhc2UgPT4ge3JldHVybiAhYmFzZS5kZXN0cm95ZWQ7fSk7XG4gICAgICBsZXQgY2xvc2VzdEJhc2UgPSBwb3RlbnRpYWxCYXNlc1swXTtcbiAgICAgIGxldCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UucG9zaXRpb24ueCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvdGVudGlhbEJhc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhlLm9mZnNldFggLSBwb3RlbnRpYWxCYXNlc1tpXS5wb3NpdGlvbi54KSA8IGRpZmZlcmVuY2UpIHtcbiAgICAgICAgICBjbG9zZXN0QmFzZSA9IHBvdGVudGlhbEJhc2VzW2ldO1xuICAgICAgICAgIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGRlc3RpbmF0aW9uID0ge1xuICAgICAgICB4OiBlLm9mZnNldFgsXG4gICAgICAgIHk6IGUub2Zmc2V0WVxuICAgICAgfTtcbiAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZmlyZU1pc3NpbGUoKTtcbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LnB1c2gobmV3IE1pc3NpbGUoZGVzdGluYXRpb24sIChjbG9zZXN0QmFzZS5wb3NpdGlvbiksIHRoaXMuY3R4KSk7XG4gICAgfSAgICAgXG4gIH1cblxuICBzZXR1cExldmVsKCl7XG4gICAgLy9zZXRzIHVwIGVhY2ggbGV2ZWwgICAgXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5leHBsb3Npb25BcnJheSA9IFtdO1xuICAgIHRoaXMubWlzc2lsZUFycmF5ID0gW107ICAgIFxuICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICAvL3NldHVwIG1ldGVvcnMgPz8/bWVyZ2Ugd2l0aCBidWlsZE1ldGVvcnM/Pz8/XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoOCArICgyICogdGhpcy5sZXZlbCkpOyBpKyspIHtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgICAvL3NldHVwIGJhc2VzXG4gICAgbGV0IGJhc2VQb3NpdGlvbiA9IHtcbiAgICAgIHg6IDE1MCxcbiAgICAgIHk6IHRoaXMuc2NyZWVuSGVpZ2h0IC0gMTAwXG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICB0aGlzLmJhc2VBcnJheS5wdXNoKG5ldyBCYXNlKHRoaXMuY3R4LCBiYXNlUG9zaXRpb24pKTtcblxuICAgICAgYmFzZVBvc2l0aW9uLnggKz0gdGhpcy5zY3JlZW5XaWR0aCAvIDM7XG4gICAgfSAgXG4gICAgdGhpcy5sZXZlbE11bHRpcGxpZXIgKz0gMC4xNTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5ydW5HYW1lKCk7XG4gIH1cblxuICBydW5HYW1lKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZCwgMCwgMCk7ICAgIFxuICAgIHRoaXMuZ2FtZURpc3BsYXkubmV4dExldmVsKHRoaXMuZ2FtZUxvb3ApO1xuICB9XG5cbiAgZ2FtZUxvb3AodGltZXN0YW1wKXsgIFxuICAgIGlmICghdGhpcy5zdGFydFRpbWUpe1xuICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGhpcy5zdGFydFRpbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmdhbWVEaXNwbGF5LmNoZWNrQ29udGludWUoKSl7XG4gICAgICAvL2dhbWUgc3RpbGwgcHJvZ3Jlc3NpbmcsIHBsYXllciBoYXMgbmVpdGhlciB3b24gb3IgbG9zdFxuICAgICAgbGV0IGVsYXBzZWRGcmFtZVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgIC8vZGVidWdnZXI7XG4gICAgICB0aGlzLnRpbWVyICs9IGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwO1xuXG4gICAgICAvL2NvbnN0IGxldmVsTXVsdGlwbGllciA9IDEuMDtcblxuICAgICAgaWYgKHRoaXMudGltZXIgPj0gMy4wKSB7XG4gICAgICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTtcblxuICAgICAgdGhpcy5tZXRlb3JBcnJheS5mb3JFYWNoKG1ldGVvciA9PiB7XG4gICAgICAgIC8vZmlyc3QsIG1vdmUgdGhlIG1ldGVvclxuICAgICAgICBpZiAobWV0ZW9yLnBvc2l0aW9uLnkgPj0gdGhpcy5zY3JlZW5IZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWV0ZW9yLnVwZGF0ZVBvc2l0aW9uKHRoaXMubGV2ZWxNdWx0aXBsaWVyLCBlbGFwc2VkRnJhbWVUaW1lIC8gMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBwb3Mgb2YgbWV0ZW9yIGFnYWluc3QgZXhwbG9zaW9ucywgYW5kIGdyb3VuZCBcbiAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5mb3JFYWNoKGV4cGxvc2lvbiA9PiB7XG4gICAgICAgICAgbGV0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoZXhwbG9zaW9uLnBvc2l0aW9uLCBtZXRlb3IucG9zaXRpb24pO1xuICAgICAgICAgIC8vIGlmIG1ldGVvciBpbiByYWRpdXMsIGRlc3Ryb3kgaXQgYW5kIGNyZWF0ZSBleHBsb3Npb25cbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gZXhwbG9zaW9uLmV4cGxvc2lvblJhZGl1cyArIG1ldGVvci5yYWRpdXMpIHtcbiAgICAgICAgICAgIG5ldyBBdWRpbyh0aGlzLmV4cGxvc2lvbkF1ZGlvLnNyYykucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIG1ldGVvci5wb3NpdGlvbikpO1xuICAgICAgICAgICAgdGhpcy5tZXRlb3JBcnJheS5zcGxpY2UodGhpcy5tZXRlb3JBcnJheS5pbmRleE9mKG1ldGVvciksIDEpO1xuICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5kZXN0cm95TWV0ZW9yKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJhc2VBcnJheS5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgICAgIGJhc2UuZHJhdygpO1xuICAgICAgICAgIGlmIChiYXNlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKG1ldGVvci5wb3NpdGlvbiwgYmFzZS5wb3NpdGlvbik7XG4gICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IGJhc2UucmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgICAgbmV3IEF1ZGlvKHRoaXMuYmFzZURlYXRoQXVkaW8uc3JjKS5wbGF5KCk7XG4gICAgICAgICAgICBiYXNlLmRlc3Ryb3lCYXNlKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmRlc3Ryb3lCYXNlKCk7XG4gICAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgYmFzZS5wb3NpdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5taXNzaWxlQXJyYXkuZm9yRWFjaChtaXNzaWxlID0+IHtcbiAgICAgICAgLy9jaGVjayBmb3IgZXhwbG9zaW9uXG4gICAgICAgIGlmIChtaXNzaWxlLmNoZWNrRXhwbG9zaW9uKGNhbGN1bGF0ZURpc3RhbmNlKG1pc3NpbGUucG9zaXRpb24sIG1pc3NpbGUuZGVzdGluYXRpb24pKSkge1xuICAgICAgICAgIG5ldyBBdWRpbyh0aGlzLmV4cGxvc2lvbkF1ZGlvLnNyYykucGxheSgpO1xuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBtaXNzaWxlLnBvc2l0aW9uKSk7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXMubWlzc2lsZUFycmF5LnNwbGljZSh0aGlzLm1pc3NpbGVBcnJheS5pbmRleE9mKG1pc3NpbGUpLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtaXNzaWxlLnVwZGF0ZVBvc2l0aW9uKChlbGFwc2VkRnJhbWVUaW1lIC8gMTAwMCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5mb3JFYWNoKGV4cGxvc2lvbiA9PiB7XG4gICAgICAgIGlmIChleHBsb3Npb24uc3RhZ2UgPj0gNCkge1xuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuc3BsaWNlKHRoaXMuZXhwbG9zaW9uQXJyYXkuaW5kZXhPZihleHBsb3Npb24pLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleHBsb3Npb24udXBkYXRlRXhwbG9zaW9uKGVsYXBzZWRGcmFtZVRpbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy9maW5hbCBjaGVjayBmb3Igb3V0IG9mIG1pc3NpbGUgbG9zZSBjb25kaXRpb25cbiAgICAgIGlmICh0aGlzLmdhbWVEaXNwbGF5Lm1pc3NpbGVzID09PSAwKXtcbiAgICAgICAgLy9ubyBtb3JlIG1pc3NpbGVzIGluIHJhY2ssIHRyYWNrIGZvciBhY3RpdmUgZXhwbG9zaW9ucyBhbmQgbWlzc2lsZXNcbiAgICAgICAgaWYgKHRoaXMubWlzc2lsZUFycmF5Lmxlbmd0aCA9PT0gMCAmJiB0aGlzLmV4cGxvc2lvbkFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5vdXRPZk1pc3NpbGVzKCk7IFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTsgICBcbiAgICAvL0dhbWUgRGlzcGxheSBub3QgQ29udGludWVpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ2FtZURpc3BsYXkuZGVzdHJveWVkTWV0ZW9yQ291bnQgPj0gdGhpcy5nYW1lRGlzcGxheS5sZXZlbEdvYWwpe1xuICAgICAgICAvL3BsYXllciBwcm9ncmVzcyB0byBuZXh0IGxldmVsXG4gICAgICAgIHRoaXMuc2V0dXBMZXZlbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGxheWVyIGxvc3RcbiAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nYW1lTG9zdCgpOyAgICAgICAgXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5jaGFuZ2VVc2VyUHJvbXB0KDIpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXIgPSB0cnVlO1xuICAgICAgICB9LDI1MDApO1xuICAgICAgfVxuICAgIH0gICAgXG4gIH1cblxuICBidWlsZE5ld01ldGVvcnMoKSB7XG4gICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5sZXZlbCAqIDI7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lRGlzcGxheXtcbiAgY29uc3RydWN0b3IoY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgXG4gICAgdGhpcy5jdHguZm9udCA9IFwiMjRwdCBzYW5zIHNlcmlmXCI7XG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5taXNzaWxlcyA9IDEwO1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPSAwO1xuICAgIHRoaXMubGV2ZWxHb2FsID0gMTU7XG4gICAgdGhpcy5jb250aW51ZUdhbWUgPSB0cnVlO1xuXG4gICAgdGhpcy5iYXNlc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLWJhc2VzXCIpO1xuICAgIHRoaXMubWlzc2lsZXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1taXNzaWxlc1wiKTtcbiAgICB0aGlzLmxldmVsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tbGV2ZWxcIik7XG4gICAgdGhpcy5kZXN0cm95ZWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1kZXN0cm95ZWRcIik7XG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItcHJvbXB0LWhlYWRlci1hY3RpdmVcIik7XG5cbiAgICB0aGlzLmxldmVsQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldmVsLWFkdmFuY2VcIik7XG4gICAgXG5cbiAgICB0aGlzLmNoZWNrQ29udGludWUgPSB0aGlzLmNoZWNrQ29udGludWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3lCYXNlID0gdGhpcy5kZXN0cm95QmFzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSA9IHRoaXMudXBkYXRlRGlzcGxheS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubmV4dExldmVsID0gdGhpcy5uZXh0TGV2ZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3lNZXRlb3IgPSB0aGlzLmRlc3Ryb3lNZXRlb3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdhbWVMb3N0ID0gdGhpcy5nYW1lTG9zdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0dXBMZXZlbERpc3BsYXkgPSB0aGlzLnNldHVwTGV2ZWxEaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldERpc3BsYXkgPSB0aGlzLnJlc2V0RGlzcGxheS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlVXNlclByb21wdCA9IHRoaXMuY2hhbmdlVXNlclByb21wdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYW5pbWF0ZUluZm8gPSB0aGlzLmFuaW1hdGVJbmZvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vdXRPZk1pc3NpbGVzID0gdGhpcy5vdXRPZk1pc3NpbGVzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuXG4gIGNoYW5nZVVzZXJQcm9tcHQocHJvbXB0SWQpe1xuICAgIGlmIChwcm9tcHRJZCA9PT0gMSl7XG4gICAgICB0aGlzLnByb21wdEhlYWRlci5pbm5lclRleHQgPSBcIkJlZ2luIVwiO1xuICAgICAgdGhpcy5wcm9tcHRIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1c2VyLXByb21wdC1oZWFkZXItaWRsZVwiKTtcbiAgICB9IGVsc2UgaWYgKHByb21wdElkID09PSAyKXtcbiAgICAgIHRoaXMucHJvbXB0SGVhZGVyLmlubmVyVGV4dCA9IFwiUHJlc3MgQW55IEtleSB0byBCZWdpblwiO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RGlzcGxheSgpe1xuICAgIHRoaXMuYmFzZXMgPSAzO1xuICAgIHRoaXMubWlzc2lsZXMgPSAxMDtcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID0gMDtcbiAgICB0aGlzLmxldmVsR29hbCA9IDE1O1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9XG5cbiAgc2V0dXBMZXZlbERpc3BsYXkoKXtcbiAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgdGhpcy5taXNzaWxlcyA9ICg4ICsgKHRoaXMubGV2ZWwpKTsgICAgXG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCA9IDA7XG4gICAgdGhpcy5sZXZlbEdvYWwgPSAoOCArICh0aGlzLmxldmVsICogNSkpO1xuICAgIGlmKHRoaXMubGV2ZWwgPj0zKSB0aGlzLmxldmVsR29hbCArPSB0aGlzLmxldmVsO1xuICAgIHRoaXMuY29udGludWVHYW1lID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoNCk7XG4gIH1cblxuICBuZXh0TGV2ZWwoY2FsbGJhY2spe1xuICAgIC8vbGV2ZWwgc2V0dXAgbG9naWMgICAgICAgXG4gICAgdGhpcy5zZXR1cExldmVsRGlzcGxheSgpOyBcbiAgICBpZiAodGhpcy5sZXZlbCA+IDEpe1xuICAgICAgdGhpcy5sZXZlbEF1ZGlvLnBsYXkoKTsgXG4gICAgfVxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoNTAwLCAzMDAsIDI1MCwgMjAwKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYExldmVsICR7dGhpcy5sZXZlbH1gLCA1NzUsNDAwKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IGNhbGxiYWNrKDApOyB9LCAyNTAwKTsgICAgXG4gIH1cblxuICBhbmltYXRlSW5mbyhjb250YWluZXIpe1xuICAgIGxldCBhbmltYXRlQ2xhc3MgPSBcImdhbWUtaW5mby1hbmltYXRlXCI7XG4gICAgbGV0IGFuaW1hdGVkRG9jID0gY29udGFpbmVyO1xuICAgIGFuaW1hdGVkRG9jLmNsYXNzTGlzdC5hZGQoYW5pbWF0ZUNsYXNzKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhbmltYXRlZERvYy5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGVDbGFzcyk7XG4gICAgfSwgMTI1MCk7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5KG51bSA9IDApe1xuICAgIFxuICAgIHRoaXMubGV2ZWxEaXYuaW5uZXJUZXh0ID0gYExldmVsOiAke3RoaXMubGV2ZWx9YDtcbiAgICB0aGlzLmJhc2VzRGl2LmlubmVyVGV4dCA9IGBCYXNlczogJHt0aGlzLmJhc2VzfWA7XG4gICAgdGhpcy5taXNzaWxlc0Rpdi5pbm5lclRleHQgPSBgTWlzc2lsZXM6ICR7dGhpcy5taXNzaWxlc31gO1xuICAgIHRoaXMuZGVzdHJveWVkRGl2LmlubmVyVGV4dCA9IGBEZXN0cm95ZWQgTWV0ZW9yczogJHt0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50fSBvZiAke3RoaXMubGV2ZWxHb2FsfWA7XG4gICAgc3dpdGNoIChudW0pIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5hbmltYXRlSW5mbyh0aGlzLmJhc2VzRGl2KTsgICAgICAgXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmFuaW1hdGVJbmZvKHRoaXMubWlzc2lsZXNEaXYpOyAgICAgICAgXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLmFuaW1hdGVJbmZvKHRoaXMuZGVzdHJveWVkRGl2KTsgICAgICAgIFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpcy5hbmltYXRlSW5mbyh0aGlzLmxldmVsRGl2KTsgICAgICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZmlyZU1pc3NpbGUoKXtcbiAgICB0aGlzLm1pc3NpbGVzIC09IDE7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KDIpO1xuICB9XG5cbiAgZGVzdHJveUJhc2UoKXtcbiAgICB0aGlzLmJhc2VzIC09IDE7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KDEpO1xuICB9XG5cbiAgZGVzdHJveU1ldGVvcigpe1xuICAgIHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgKz0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoMyk7XG4gIH1cblxuICBvdXRPZk1pc3NpbGVzKCl7XG4gICAgaWYgKHRoaXMubGV2ZWxHb2FsIC0gdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCA+IHRoaXMuYmFzZXMpe1xuICAgICAgdGhpcy5jb250aW51ZUdhbWUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnYW1lTG9zdCgpe1xuICAgIGxldCB0ZXh0ID0gdGhpcy5iYXNlcyA9PT0gMCA/IFwiRWFydGggaGFzIGJlZW4gZGVzdHJveWVkLCB3aG9vcHMhXCIgOiBcIllvdSdyZSBvdXQgb2YgbWlzc2lsZXMsIGFpbSBiZXR0ZXIhXCI7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgzMDAsIDMwMCwgNjUwLCAyMDApO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgJHt0ZXh0fWAsIDQwMCwgNDAwKTtcbiAgICB0aGlzLnByb21wdEhlYWRlci5pbm5lclRleHQgPSBcIkdhbWUgT3ZlclwiO1xuICB9XG5cbiAgY2hlY2tDb250aW51ZSgpeyAgICBcbiAgICBpZiAodGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCA+PSB0aGlzLmxldmVsR29hbCl7XG4gICAgICB0aGlzLmNvbnRpbnVlR2FtZSA9IGZhbHNlO1xuICAgIH0gXG4gICAgaWYgKHRoaXMuYmFzZXMgPCAxICl7XG4gICAgICB0aGlzLmNvbnRpbnVlR2FtZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250aW51ZUdhbWU7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRlb3J7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiAtMTBcbiAgICB9O1xuICAgIC8vIHRoaXMuZHJhd1Bvc2l0aW9uID0ge1xuICAgIC8vICAgeDogdGhpcy5wb3NpdGlvbi54IC0gMTAsXG4gICAgLy8gICB5OiB0aGlzLnBvc2l0aW9uLnkgLSAxMFxuICAgIC8vIH07XG4gICAgdGhpcy5zcGVlZCA9IDU1ICogdGhpcy5zZXRTcGVlZCgpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICB0aGlzLnJhZGl1cyA9IDEwO1xuXG4gICAgdGhpcy5tZXRlb3JJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWV0ZW9yLTFcIik7XG5cbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0U3BlZWQoKXtcbiAgICAvL2hlbHBzIHNldCBhbiBpbnRpYWwgcmFuZG9tIHJhbmdlIG9mIHNwZWVkc1xuICAgIGxldCB0aHJvdHRsZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh0aHJvdHRsZXIgPD0gMC4yNSkgcmV0dXJuIDAuNzU7XG4gICAgaWYgKHRocm90dGxlciA+PSAwLjc1KSByZXR1cm4gMS4yNTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHNldERpcmVjdGlvbigpe1xuICAgIC8vc2V0IFJhbmRvbSB4IGRpcmVjdGlvblxuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAoeCA+IDAuNSkgeCAqPSAtMTtcbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGxldmVsTXVsdGlwbGllciwgZGVsdGFUaW1lKXtcbiAgICAvL2RlYnVnZ2VyO1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLmRpcmVjdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKGxldmVsTXVsdGlwbGllciAqIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpOyAgXG4gICAgLy9kZWJ1Z2dlcjsgIFxuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cblxuICBkcmF3KCl7XG4gICAgLy8gdGhpcy5jdHguYmVnaW5QYXRoKCk7ICAgIFxuICAgIC8vIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAvLyB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5tZXRlb3JJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueC0xMCxcbiAgICAgIHRoaXMucG9zaXRpb24ueS0xMCxcbiAgICAgIDIwLFxuICAgICAgMjBcbiAgICApO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lsZXtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24sIHBvc2l0aW9uLCBjdHgpe1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCArIDEwLFxuICAgICAgeTogcG9zaXRpb24ueSAtIDEwXG4gICAgfTtcblxuICAgIHRoaXMuY291cnNlID0ge1xuICAgICAgeDogKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCksXG4gICAgICB5OiAodGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55KVxuICAgIH07XG4gICAgdGhpcy5zcGVlZCA9IDAuODtcbiAgICB0aGlzLnJhZGl1cyA9IDU7XG4gICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSAzO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5taXNzaWxlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllbGxvdy1taXNzaWxlXCIpOyAgICBcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIC8vdGhpcy5jYWxjdWxhdGVEaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrRXhwbG9zaW9uID0gdGhpcy5jaGVja0V4cGxvc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2hlY2tFeHBsb3Npb24oZGlzdGFuY2Upe1xuICAgIC8vbGV0IGRpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZSgpOyAgICBcbiAgICBpZiAoZGlzdGFuY2UgPD0gdGhpcy5leHBsb3Npb25SYWRpdXMpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZURpc3RhbmNlKCl7XG4gIC8vICAgbGV0IHhEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi54IC0gdGhpcy5kZXN0aW5hdGlvbi54KTtcbiAgLy8gICBsZXQgeURpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmRlc3RpbmF0aW9uLnkpO1xuICAvLyAgIHJldHVybiBNYXRoLnNxcnQoKHhEaXN0KnhEaXN0KSArICh5RGlzdCp5RGlzdCkpO1xuICAvLyB9XG5cbiAgdXBkYXRlUG9zaXRpb24oZHQpe1xuICAgIHRoaXMucG9zaXRpb24ueCArPSAodGhpcy5jb3Vyc2UueCAvIHRoaXMuc3BlZWQpICogZHQ7ICAgIFxuICAgIHRoaXMucG9zaXRpb24ueSArPSAodGhpcy5jb3Vyc2UueSAvIHRoaXMuc3BlZWQpICogZHQ7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBkcmF3KCl7XG4gICAgLy9tZXRlb3JzIGFyZSBjaGVja2luZyBmb3IgY29sbGlzaW9ucyBpbiBHYW1lLmpzXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5taXNzaWxlSW1hZ2UsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnlcbiAgICApO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZURpc3RhbmNlID0gKHBvczEsIHBvczIpID0+IHtcbiAgLy9kZWJ1Z2dlcjtcbiAgbGV0IHhEaXN0ID0gTWF0aC5hYnMocG9zMS54IC0gcG9zMi54KTtcbiAgbGV0IHlEaXN0ID0gTWF0aC5hYnMocG9zMS55IC0gcG9zMi55KTtcbiAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QgKiB4RGlzdCkgKyAoeURpc3QgKiB5RGlzdCkpO1xufTtcblxuLy8gY2FsY3VsYXRlRGlzdGFuY2UoKXtcbi8vICAgbGV0IHhEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi54IC0gdGhpcy5kZXN0aW5hdGlvbi54KTtcbi8vICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gdGhpcy5kZXN0aW5hdGlvbi55KTtcbi8vICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QgKiB4RGlzdCkgKyAoeURpc3QgKiB5RGlzdCkpO1xuLy8gfSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=