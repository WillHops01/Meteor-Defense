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
    this.musicEnabled = true;
    this.muteMusic = document.getElementById("mute-music-checkbox");
    this.muteMusic.addEventListener("click", function () {
      _this.musicEnabled = !_this.musicEnabled;

      if (!_this.musicEnabled) {
        _this.backingAudio.pause();
      } else {
        _this.backingAudio.play();
      }
    });
    this.sfxEnabled = true;
    this.muteSFX = document.getElementById("mute-sfx-checkbox");
    this.muteSFX.addEventListener("click", function () {
      _this.sfxEnabled = !_this.sfxEnabled;
    });
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
        if (this.musicEnabled) this.backingAudio.play();
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
        if (this.sfxEnabled) new Audio(this.missileFlightAudio.src).play();
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
        this.lastTime = timestamp;
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
              if (_this2.sfxEnabled) new Audio(_this2.explosionAudio.src).play();

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
              if (_this2.sfxEnabled) new Audio(_this2.baseDeathAudio.src).play();
              base.destroyBase();

              _this2.gameDisplay.destroyBase();

              _this2.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_3__["default"](_this2.ctx, base.position));
            }
          });
        });
        this.missileArray.forEach(function (missile) {
          //check for explosion
          if (missile.checkExplosion(Object(_util__WEBPACK_IMPORTED_MODULE_5__["calculateDistance"])(missile.position, missile.destination))) {
            if (_this2.sfxEnabled) new Audio(_this2.explosionAudio.src).play();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiU0NSRUVOX1dJRFRIIiwiU0NSRUVOX0hFSUdIVCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsIkdhbWUiLCJoYW5kbGVDbGljayIsIkJhc2UiLCJwb3NpdGlvbiIsImJhc2VJbWFnZSIsImRyYXdQb3NpdGlvbiIsIngiLCJ5IiwiZHJhd1dpZHRoIiwiZHJhd0hlaWdodCIsInJhZGl1cyIsImRlc3Ryb3llZCIsImRyYXciLCJiaW5kIiwiZGVzdHJveUJhc2UiLCJkcmF3SW1hZ2UiLCJFeHBsb3Npb24iLCJzaXplIiwibWF4U2l6ZSIsImdyb3d0aFJhdGUiLCJ0aW1lciIsImV4cGxvc2lvbkltYWdlQXJyYXkiLCJpbWFnZVRvRHJhdyIsInN0YWdlIiwiZXhwbG9zaW9uUmFkaXVzIiwidXBkYXRlRXhwbG9zaW9uIiwiZHQiLCJjb250ZXh0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJtZXRlb3JBcnJheSIsImJhc2VBcnJheSIsIm1pc3NpbGVBcnJheSIsImV4cGxvc2lvbkFycmF5IiwibGFzdFRpbWUiLCJzdGFydFRpbWUiLCJsZXZlbCIsImxldmVsTXVsdGlwbGllciIsImdhbWVEaXNwbGF5IiwiR2FtZURpc3BsYXkiLCJzZXR1cExldmVsRGlzcGxheSIsImdhbWVMb29wIiwicnVuR2FtZSIsImJ1aWxkTmV3TWV0ZW9ycyIsInNldHVwTGV2ZWwiLCJ3YWl0Rm9yU3RhcnQiLCJyZXNldEdhbWUiLCJleHBsb3Npb25BdWRpbyIsImJhc2VEZWF0aEF1ZGlvIiwibWlzc2lsZUZsaWdodEF1ZGlvIiwiYmFja2luZ0F1ZGlvIiwibXVzaWNFbmFibGVkIiwibXV0ZU11c2ljIiwicGF1c2UiLCJwbGF5Iiwic2Z4RW5hYmxlZCIsIm11dGVTRlgiLCJhY3RpdmVMaXN0ZW5lciIsImJhY2tncm91bmQiLCJyZXNldERpc3BsYXkiLCJjaGFuZ2VVc2VyUHJvbXB0IiwiZSIsIm1pc3NpbGVzIiwiQXVkaW8iLCJzcmMiLCJwb3RlbnRpYWxCYXNlcyIsImZpbHRlciIsImJhc2UiLCJjbG9zZXN0QmFzZSIsImRpZmZlcmVuY2UiLCJNYXRoIiwiYWJzIiwib2Zmc2V0WCIsImkiLCJsZW5ndGgiLCJkZXN0aW5hdGlvbiIsIm9mZnNldFkiLCJmaXJlTWlzc2lsZSIsInB1c2giLCJNaXNzaWxlIiwicG9zWCIsImZsb29yIiwicmFuZG9tIiwiTWV0ZW9yIiwiYmFzZVBvc2l0aW9uIiwibmV4dExldmVsIiwidGltZXN0YW1wIiwiY2hlY2tDb250aW51ZSIsImVsYXBzZWRGcmFtZVRpbWUiLCJmb3JFYWNoIiwibWV0ZW9yIiwic3BsaWNlIiwiaW5kZXhPZiIsInVwZGF0ZVBvc2l0aW9uIiwiZXhwbG9zaW9uIiwiZGlzdGFuY2UiLCJjYWxjdWxhdGVEaXN0YW5jZSIsImRlc3Ryb3lNZXRlb3IiLCJtaXNzaWxlIiwiY2hlY2tFeHBsb3Npb24iLCJvdXRPZk1pc3NpbGVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVzdHJveWVkTWV0ZW9yQ291bnQiLCJsZXZlbEdvYWwiLCJnYW1lTG9zdCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJmb250IiwiYmFzZXMiLCJjb250aW51ZUdhbWUiLCJiYXNlc0RpdiIsIm1pc3NpbGVzRGl2IiwibGV2ZWxEaXYiLCJkZXN0cm95ZWREaXYiLCJwcm9tcHRIZWFkZXIiLCJsZXZlbEF1ZGlvIiwidXBkYXRlRGlzcGxheSIsImFuaW1hdGVJbmZvIiwicHJvbXB0SWQiLCJpbm5lclRleHQiLCJzZXRBdHRyaWJ1dGUiLCJjYWxsYmFjayIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlVGV4dCIsImNvbnRhaW5lciIsImFuaW1hdGVDbGFzcyIsImFuaW1hdGVkRG9jIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibnVtIiwidGV4dCIsInNwZWVkIiwic2V0U3BlZWQiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJtZXRlb3JJbWFnZSIsInRocm90dGxlciIsImRlbHRhVGltZSIsImNvdXJzZSIsIm1pc3NpbGVJbWFnZSIsInBvczEiLCJwb3MyIiwieERpc3QiLCJ5RGlzdCIsInNxcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFl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QUFMLENBQVlySSxDQUFaLEdBQWdCLEtBQUs4SCxLQUF0QixHQUErQjNHLEVBQWxEO0FBQ0EsV0FBS2QsSUFBTDtBQUNEOzs7MkJBRUs7QUFDSjtBQUNBLFdBQUtuQixHQUFMLENBQVNzQixTQUFULENBQ0UsS0FBSzhILFlBRFAsRUFFRSxLQUFLMUksUUFBTCxDQUFjRyxDQUZoQixFQUdFLEtBQUtILFFBQUwsQ0FBY0ksQ0FIaEI7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRIO0FBQUE7QUFBTyxJQUFNeUYsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDOEMsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQy9DO0FBQ0EsTUFBSUMsS0FBSyxHQUFHMUUsSUFBSSxDQUFDQyxHQUFMLENBQVN1RSxJQUFJLENBQUN4SSxDQUFMLEdBQVN5SSxJQUFJLENBQUN6SSxDQUF2QixDQUFaO0FBQ0EsTUFBSTJJLEtBQUssR0FBRzNFLElBQUksQ0FBQ0MsR0FBTCxDQUFTdUUsSUFBSSxDQUFDdkksQ0FBTCxHQUFTd0ksSUFBSSxDQUFDeEksQ0FBdkIsQ0FBWjtBQUNBLFNBQU8rRCxJQUFJLENBQUM0RSxJQUFMLENBQVdGLEtBQUssR0FBR0EsS0FBVCxHQUFtQkMsS0FBSyxHQUFHQSxLQUFyQyxDQUFQO0FBQ0QsQ0FMTSxDLENBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ1hBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vY29uc3QgQXBwID0gcmVxdWlyZShcIi4vc2NyaXB0cy9hcHAuanNcIik7XG4vLyBjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7ICBcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBjb25zdCBTQ1JFRU5fV0lEVEggPSAxMjAwO1xuICBjb25zdCBTQ1JFRU5fSEVJR0hUID0gODAwO1xuICBjdHguY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIO1xuICBjdHguY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQ7XG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgsIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4gIC8vbGV0IGJhY2tpbmdBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2luZy10cmFja1wiKTtcbiAgLy8gYmFja2luZ0F1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgLy8gICBkZWJ1Z2dlcjtcbiAgLy8gICBuZXcgQXVkaW8oYmFja2luZ0F1ZGlvLnNyYykucGxheSgpO1xuICAvLyB9LCBmYWxzZSk7XG4gIFxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWUuaGFuZGxlQ2xpY2ssIGZhbHNlKTtcbiAgLy9nYW1lLnJ1bkdhbWUoKTtcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2V7XG4gIGNvbnN0cnVjdG9yKGN0eCwgcG9zaXRpb24pe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuYmFzZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLWltYWdlXCIpO1xuICAgIFxuICAgIC8vdGhpcy5kZXN0cm95ZWRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgeTogcG9zaXRpb24ueVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngrMjEsXG4gICAgICB5OiBwb3NpdGlvbi55KzUwXG4gICAgfTsgLy9tYWdpYyBudW1iZXJzIGZvciB3aWR0aCBhbmQgaGVpZ2h0IGFkanVzdGluZ1xuICAgIHRoaXMuZHJhd1dpZHRoID0gdGhpcy5iYXNlSW1hZ2Uud2lkdGg7XG4gICAgdGhpcy5kcmF3SGVpZ2h0ID0gdGhpcy5iYXNlSW1hZ2UuaGVpZ2h0O1xuICAgIHRoaXMucmFkaXVzID0gNDA7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveUJhc2UgPSB0aGlzLmRlc3Ryb3lCYXNlLmJpbmQodGhpcyk7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3V2lkdGggPSAxMDA7XG4gICAgdGhpcy5kcmF3SGVpZ2h0ID0gMTAwO1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnggLT0gMjA7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24ueSs9NDA7XG4gIH1cblxuICBkcmF3KCl7IFxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuYmFzZUltYWdlLCBcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLngsIFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueSxcbiAgICAgIHRoaXMuZHJhd1dpZHRoLFxuICAgICAgdGhpcy5kcmF3SGVpZ2h0XG5cbiAgICAgICk7XG4gIH1cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9zaW9ue1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICB5OiBwb3NpdGlvbi55XG4gICAgfTsgLy81MCBpcyBtYWdpYyBudW1iZXIgY2VudGVyXG4gICAgdGhpcy5wb3NpdGlvbj17XG4gICAgICB4OnBvc2l0aW9uLngsXG4gICAgICB5OnBvc2l0aW9uLnlcbiAgICB9O1xuXG4gICAgdGhpcy5zaXplID0gNjA7XG4gICAgdGhpcy5tYXhTaXplID0gMTUwO1xuICAgIHRoaXMuZ3Jvd3RoUmF0ZSA9ICh0aGlzLm1heFNpemUgLSB0aGlzLnNpemUpIC8gNDtcbiAgICAvL2NhbGN1bGF0aW9uIGZvciBob3cgZmFzdCB0byBncm93XG5cbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXkgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tMVwiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTJcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0zXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tNFwiKV07XG4gICAgdGhpcy5pbWFnZVRvRHJhdyA9IHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheVswXTtcbiAgICB0aGlzLnN0YWdlID0gMDtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IHRoaXMuc2l6ZS8yO1xuXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVFeHBsb3Npb24gPSB0aGlzLnVwZGF0ZUV4cGxvc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlRXhwbG9zaW9uKGR0KXtcbiAgICBkdCA9IGR0LzEwMDA7XG4gICAgdGhpcy50aW1lcis9ZHQ7XG4gICAgaWYgKHRoaXMudGltZXIgPj0gMC44KXtcbiAgICAgIHRoaXMuc3RhZ2UrKztcblxuICAgICAgdGhpcy50aW1lciA9MDtcbiAgICB9ICAgIFxuICAgIGlmICh0aGlzLnN0YWdlIDwgNCl7XG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLzI7XG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55ID0gdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zaXplLzI7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICAgIHRoaXMuc2l6ZSArPSB0aGlzLmdyb3d0aFJhdGUgKiBkdDsgIFxuICAgICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSB0aGlzLnNpemUgLyAyOyAgICBcbiAgICB9XG4gICAgXG4gIH1cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5W3RoaXMuc3RhZ2VdLFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCxcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUsIHRoaXMuc2l6ZVxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgTWV0ZW9yIGZyb20gXCIuL21ldGVvclwiO1xuaW1wb3J0IE1pc3NpbGUgZnJvbSBcIi4vbWlzc2lsZVwiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IEV4cGxvc2lvbiBmcm9tIFwiLi9leHBsb3Npb25cIjtcbmltcG9ydCBHYW1lRGlzcGxheSBmcm9tIFwiLi9nYW1lRGlzcGxheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGlzdGFuY2UgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpe1xuICAgIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gd2lkdGg7IFxuXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5taXNzaWxlQXJyYXkgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5ID0gW107XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMDsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciA9IDAuODU7XG4gICAgXG4gICAgdGhpcy5nYW1lRGlzcGxheSA9IG5ldyBHYW1lRGlzcGxheSh0aGlzLmN0eCk7ICBcbiAgICB0aGlzLmdhbWVEaXNwbGF5LnNldHVwTGV2ZWxEaXNwbGF5KCk7IFxuXG4gICAgdGhpcy5nYW1lTG9vcCA9IHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJ1bkdhbWUgPSB0aGlzLnJ1bkdhbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzID0gdGhpcy5idWlsZE5ld01ldGVvcnMuYmluZCh0aGlzKTsgIFxuICAgIHRoaXMuc2V0dXBMZXZlbCA9IHRoaXMuc2V0dXBMZXZlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2FpdEZvclN0YXJ0ID0gdGhpcy53YWl0Rm9yU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0R2FtZSA9IHRoaXMucmVzZXRHYW1lLmJpbmQodGhpcyk7ICAgXG4gICAgXG4gICAgdGhpcy5leHBsb3Npb25BdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLWF1ZGlvXCIpO1xuICAgIHRoaXMuYmFzZURlYXRoQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2UtZGVhdGgtYXVkaW9cIik7ICAgIFxuICAgIHRoaXMubWlzc2lsZUZsaWdodEF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXNzaWxlLWZsaWdodFwiKTtcbiAgICB0aGlzLmJhY2tpbmdBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2luZy10cmFja1wiKTtcblxuICAgIHRoaXMubXVzaWNFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLm11dGVNdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXV0ZS1tdXNpYy1jaGVja2JveFwiKTtcbiAgICB0aGlzLm11dGVNdXNpYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgIHRoaXMubXVzaWNFbmFibGVkID0gIXRoaXMubXVzaWNFbmFibGVkO1xuICAgICAgaWYgKCF0aGlzLm11c2ljRW5hYmxlZCl7XG4gICAgICAgIHRoaXMuYmFja2luZ0F1ZGlvLnBhdXNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJhY2tpbmdBdWRpby5wbGF5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNmeEVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubXV0ZVNGWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXV0ZS1zZngtY2hlY2tib3hcIik7XG4gICAgdGhpcy5tdXRlU0ZYLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgdGhpcy5zZnhFbmFibGVkID0gIXRoaXMuc2Z4RW5hYmxlZDtcbiAgICB9KTtcblxuICAgIHRoaXMuYWN0aXZlTGlzdGVuZXIgPSB0cnVlO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHsgXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTsgfSwgZmFsc2UpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKCkgPT4ge3RoaXMud2FpdEZvclN0YXJ0KCk7fSk7XG4gIH1cblxuICByZXNldEdhbWUoKXtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDsgLy91c2VkIHRvIGdlbmVyYXRlIG5ldyBtZXRlb3JzIGF0IGludGVydmFsc1xuICAgIHRoaXMubGV2ZWwgPSAwOyAvL2NvbnRyb2xzIGRpZmZpY3VsdHkgYW5kIHBhY2Ugb2YgZ2FtZVxuICAgIHRoaXMubGV2ZWxNdWx0aXBsaWVyID0gMC44NTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5nYW1lRGlzcGxheS5yZXNldERpc3BsYXkoKTtcbiAgfVxuXG4gIHdhaXRGb3JTdGFydCgpe1xuICAgIGlmICh0aGlzLmFjdGl2ZUxpc3RlbmVyKXtcbiAgICAgIGlmKHRoaXMubXVzaWNFbmFibGVkKSB0aGlzLmJhY2tpbmdBdWRpby5wbGF5KCk7XG4gICAgICB0aGlzLmdhbWVEaXNwbGF5LmNoYW5nZVVzZXJQcm9tcHQoMSk7XG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgICAgdGhpcy5zZXR1cExldmVsKCk7XG4gICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSl7ICAgICBcbiAgICAvL2NoZWNrIGZvciBtaXNzaWxlIGNvdW50XG4gICAgLy9maW5kIGNsb3Nlc3QgYmFzZSB0byBjbGlja1xuICAgIC8vc3Bhd24gbWlzc2lsZSBhdCBiYXNlIGhlYWRpbmcgdG93YXJkcyBjbGljayBcbiAgICBpZiAodGhpcy5nYW1lRGlzcGxheS5taXNzaWxlcyA+IDApe1xuICAgICAgaWYodGhpcy5zZnhFbmFibGVkKSBuZXcgQXVkaW8odGhpcy5taXNzaWxlRmxpZ2h0QXVkaW8uc3JjKS5wbGF5KCk7XG4gICAgICBsZXQgcG90ZW50aWFsQmFzZXMgPSB0aGlzLmJhc2VBcnJheS5maWx0ZXIoYmFzZSA9PiB7cmV0dXJuICFiYXNlLmRlc3Ryb3llZDt9KTtcbiAgICAgIGxldCBjbG9zZXN0QmFzZSA9IHBvdGVudGlhbEJhc2VzWzBdO1xuICAgICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG90ZW50aWFsQmFzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGUub2Zmc2V0WCAtIHBvdGVudGlhbEJhc2VzW2ldLnBvc2l0aW9uLngpIDwgZGlmZmVyZW5jZSkge1xuICAgICAgICAgIGNsb3Nlc3RCYXNlID0gcG90ZW50aWFsQmFzZXNbaV07XG4gICAgICAgICAgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnBvc2l0aW9uLngpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZGVzdGluYXRpb24gPSB7XG4gICAgICAgIHg6IGUub2Zmc2V0WCxcbiAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICB9O1xuICAgICAgdGhpcy5nYW1lRGlzcGxheS5maXJlTWlzc2lsZSgpO1xuICAgICAgdGhpcy5taXNzaWxlQXJyYXkucHVzaChuZXcgTWlzc2lsZShkZXN0aW5hdGlvbiwgKGNsb3Nlc3RCYXNlLnBvc2l0aW9uKSwgdGhpcy5jdHgpKTtcbiAgICB9ICAgICBcbiAgfVxuXG4gIHNldHVwTGV2ZWwoKXtcbiAgICAvL3NldHMgdXAgZWFjaCBsZXZlbCAgICBcbiAgICB0aGlzLm1ldGVvckFycmF5ID0gW107XG4gICAgdGhpcy5iYXNlQXJyYXkgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5ID0gW107XG4gICAgdGhpcy5taXNzaWxlQXJyYXkgPSBbXTsgICAgXG4gICAgdGhpcy5sZXZlbCArPSAxO1xuICAgIC8vc2V0dXAgbWV0ZW9ycyA/Pz9tZXJnZSB3aXRoIGJ1aWxkTWV0ZW9ycz8/Pz9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICg4ICsgKDIgKiB0aGlzLmxldmVsKSk7IGkrKykge1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIC8vc2V0dXAgYmFzZXNcbiAgICBsZXQgYmFzZVBvc2l0aW9uID0ge1xuICAgICAgeDogMTUwLFxuICAgICAgeTogdGhpcy5zY3JlZW5IZWlnaHQgLSAxMDBcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIHRoaXMuYmFzZUFycmF5LnB1c2gobmV3IEJhc2UodGhpcy5jdHgsIGJhc2VQb3NpdGlvbikpO1xuXG4gICAgICBiYXNlUG9zaXRpb24ueCArPSB0aGlzLnNjcmVlbldpZHRoIC8gMztcbiAgICB9ICBcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciArPSAwLjE1O1xuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLnJ1bkdhbWUoKTtcbiAgfVxuXG4gIHJ1bkdhbWUoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTsgICAgXG4gICAgdGhpcy5nYW1lRGlzcGxheS5uZXh0TGV2ZWwodGhpcy5nYW1lTG9vcCk7XG4gIH1cblxuICBnYW1lTG9vcCh0aW1lc3RhbXApeyAgXG4gICAgaWYgKCF0aGlzLnN0YXJ0VGltZSl7XG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLnN0YXJ0VGltZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2FtZURpc3BsYXkuY2hlY2tDb250aW51ZSgpKXtcbiAgICAgIC8vZ2FtZSBzdGlsbCBwcm9ncmVzc2luZywgcGxheWVyIGhhcyBuZWl0aGVyIHdvbiBvciBsb3N0XG4gICAgICBsZXQgZWxhcHNlZEZyYW1lVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgICAgdGhpcy50aW1lciArPSBlbGFwc2VkRnJhbWVUaW1lIC8gMTAwMDtcblxuICAgICAgLy9jb25zdCBsZXZlbE11bHRpcGxpZXIgPSAxLjA7XG5cbiAgICAgIGlmICh0aGlzLnRpbWVyID49IDMuMCkge1xuICAgICAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycygpO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZCwgMCwgMCk7XG5cbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkuZm9yRWFjaChtZXRlb3IgPT4ge1xuICAgICAgICAvL2ZpcnN0LCBtb3ZlIHRoZSBtZXRlb3JcbiAgICAgICAgaWYgKG1ldGVvci5wb3NpdGlvbi55ID49IHRoaXMuc2NyZWVuSGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5tZXRlb3JBcnJheS5zcGxpY2UodGhpcy5tZXRlb3JBcnJheS5pbmRleE9mKG1ldGVvciksIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1ldGVvci51cGRhdGVQb3NpdGlvbih0aGlzLmxldmVsTXVsdGlwbGllciwgZWxhcHNlZEZyYW1lVGltZSAvIDEwMDApO1xuICAgICAgICB9XG4gICAgICAgIC8vY2hlY2sgcG9zIG9mIG1ldGVvciBhZ2FpbnN0IGV4cGxvc2lvbnMsIGFuZCBncm91bmQgXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuZm9yRWFjaChleHBsb3Npb24gPT4ge1xuICAgICAgICAgIGxldCBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKGV4cGxvc2lvbi5wb3NpdGlvbiwgbWV0ZW9yLnBvc2l0aW9uKTtcbiAgICAgICAgICAvLyBpZiBtZXRlb3IgaW4gcmFkaXVzLCBkZXN0cm95IGl0IGFuZCBjcmVhdGUgZXhwbG9zaW9uXG4gICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IGV4cGxvc2lvbi5leHBsb3Npb25SYWRpdXMgKyBtZXRlb3IucmFkaXVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZnhFbmFibGVkKSBuZXcgQXVkaW8odGhpcy5leHBsb3Npb25BdWRpby5zcmMpLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBtZXRlb3IucG9zaXRpb24pKTtcbiAgICAgICAgICAgIHRoaXMubWV0ZW9yQXJyYXkuc3BsaWNlKHRoaXMubWV0ZW9yQXJyYXkuaW5kZXhPZihtZXRlb3IpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZGVzdHJveU1ldGVvcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iYXNlQXJyYXkuZm9yRWFjaChiYXNlID0+IHtcbiAgICAgICAgICBiYXNlLmRyYXcoKTtcbiAgICAgICAgICBpZiAoYmFzZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShtZXRlb3IucG9zaXRpb24sIGJhc2UucG9zaXRpb24pO1xuICAgICAgICAgIGlmIChkaXN0YW5jZSA8PSBiYXNlLnJhZGl1cyArIG1ldGVvci5yYWRpdXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNmeEVuYWJsZWQpIG5ldyBBdWRpbyh0aGlzLmJhc2VEZWF0aEF1ZGlvLnNyYykucGxheSgpO1xuICAgICAgICAgICAgYmFzZS5kZXN0cm95QmFzZSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5kZXN0cm95QmFzZSgpO1xuICAgICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIGJhc2UucG9zaXRpb24pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LmZvckVhY2gobWlzc2lsZSA9PiB7XG4gICAgICAgIC8vY2hlY2sgZm9yIGV4cGxvc2lvblxuICAgICAgICBpZiAobWlzc2lsZS5jaGVja0V4cGxvc2lvbihjYWxjdWxhdGVEaXN0YW5jZShtaXNzaWxlLnBvc2l0aW9uLCBtaXNzaWxlLmRlc3RpbmF0aW9uKSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZnhFbmFibGVkKSBuZXcgQXVkaW8odGhpcy5leHBsb3Npb25BdWRpby5zcmMpLnBsYXkoKTtcbiAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgbWlzc2lsZS5wb3NpdGlvbikpOyAgICAgICAgICBcbiAgICAgICAgICB0aGlzLm1pc3NpbGVBcnJheS5zcGxpY2UodGhpcy5taXNzaWxlQXJyYXkuaW5kZXhPZihtaXNzaWxlKSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWlzc2lsZS51cGRhdGVQb3NpdGlvbigoZWxhcHNlZEZyYW1lVGltZSAvIDEwMDApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuZm9yRWFjaChleHBsb3Npb24gPT4ge1xuICAgICAgICBpZiAoZXhwbG9zaW9uLnN0YWdlID49IDQpIHtcbiAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnNwbGljZSh0aGlzLmV4cGxvc2lvbkFycmF5LmluZGV4T2YoZXhwbG9zaW9uKSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhwbG9zaW9uLnVwZGF0ZUV4cGxvc2lvbihlbGFwc2VkRnJhbWVUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vZmluYWwgY2hlY2sgZm9yIG91dCBvZiBtaXNzaWxlIGxvc2UgY29uZGl0aW9uXG4gICAgICBpZiAodGhpcy5nYW1lRGlzcGxheS5taXNzaWxlcyA9PT0gMCl7XG4gICAgICAgIC8vbm8gbW9yZSBtaXNzaWxlcyBpbiByYWNrLCB0cmFjayBmb3IgYWN0aXZlIGV4cGxvc2lvbnMgYW5kIG1pc3NpbGVzXG4gICAgICAgIGlmICh0aGlzLm1pc3NpbGVBcnJheS5sZW5ndGggPT09IDAgJiYgdGhpcy5leHBsb3Npb25BcnJheS5sZW5ndGggPT09IDApe1xuICAgICAgICAgIHRoaXMuZ2FtZURpc3BsYXkub3V0T2ZNaXNzaWxlcygpOyBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7ICAgXG4gICAgLy9HYW1lIERpc3BsYXkgbm90IENvbnRpbnVlaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdhbWVEaXNwbGF5LmRlc3Ryb3llZE1ldGVvckNvdW50ID49IHRoaXMuZ2FtZURpc3BsYXkubGV2ZWxHb2FsKXtcbiAgICAgICAgLy9wbGF5ZXIgcHJvZ3Jlc3MgdG8gbmV4dCBsZXZlbFxuICAgICAgICB0aGlzLnNldHVwTGV2ZWwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHBsYXllciBsb3N0XG4gICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZ2FtZUxvc3QoKTsgICAgICAgIFxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuY2hhbmdlVXNlclByb21wdCgyKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVyID0gdHJ1ZTtcbiAgICAgICAgfSwyNTAwKTtcbiAgICAgIH1cbiAgICB9ICAgIFxuICB9XG5cbiAgYnVpbGROZXdNZXRlb3JzKCkge1xuICAgIGZvcihsZXQgaSA9MDsgaSA8IHRoaXMubGV2ZWwgKiAyOyBpKyspe1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZURpc3BsYXl7XG4gIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7ICAgIFxuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHQgc2FucyBzZXJpZlwiO1xuICAgIHRoaXMuYmFzZXMgPSAzO1xuICAgIHRoaXMubWlzc2lsZXMgPSAxMDtcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID0gMDtcbiAgICB0aGlzLmxldmVsR29hbCA9IDE1O1xuICAgIHRoaXMuY29udGludWVHYW1lID0gdHJ1ZTtcblxuICAgIHRoaXMuYmFzZXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1iYXNlc1wiKTtcbiAgICB0aGlzLm1pc3NpbGVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tbWlzc2lsZXNcIik7XG4gICAgdGhpcy5sZXZlbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLWxldmVsXCIpO1xuICAgIHRoaXMuZGVzdHJveWVkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tZGVzdHJveWVkXCIpO1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLXByb21wdC1oZWFkZXItYWN0aXZlXCIpO1xuXG4gICAgdGhpcy5sZXZlbEF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXZlbC1hZHZhbmNlXCIpO1xuICAgIFxuXG4gICAgdGhpcy5jaGVja0NvbnRpbnVlID0gdGhpcy5jaGVja0NvbnRpbnVlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXN0cm95QmFzZSA9IHRoaXMuZGVzdHJveUJhc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkgPSB0aGlzLnVwZGF0ZURpc3BsYXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLm5leHRMZXZlbCA9IHRoaXMubmV4dExldmVsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXN0cm95TWV0ZW9yID0gdGhpcy5kZXN0cm95TWV0ZW9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nYW1lTG9zdCA9IHRoaXMuZ2FtZUxvc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldHVwTGV2ZWxEaXNwbGF5ID0gdGhpcy5zZXR1cExldmVsRGlzcGxheS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXREaXNwbGF5ID0gdGhpcy5yZXNldERpc3BsYXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVVzZXJQcm9tcHQgPSB0aGlzLmNoYW5nZVVzZXJQcm9tcHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFuaW1hdGVJbmZvID0gdGhpcy5hbmltYXRlSW5mby5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3V0T2ZNaXNzaWxlcyA9IHRoaXMub3V0T2ZNaXNzaWxlcy5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cblxuICBjaGFuZ2VVc2VyUHJvbXB0KHByb21wdElkKXtcbiAgICBpZiAocHJvbXB0SWQgPT09IDEpe1xuICAgICAgdGhpcy5wcm9tcHRIZWFkZXIuaW5uZXJUZXh0ID0gXCJCZWdpbiFcIjtcbiAgICAgIHRoaXMucHJvbXB0SGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidXNlci1wcm9tcHQtaGVhZGVyLWlkbGVcIik7XG4gICAgfSBlbHNlIGlmIChwcm9tcHRJZCA9PT0gMil7XG4gICAgICB0aGlzLnByb21wdEhlYWRlci5pbm5lclRleHQgPSBcIlByZXNzIEFueSBLZXkgdG8gQmVnaW5cIjtcbiAgICB9XG4gIH1cblxuICByZXNldERpc3BsYXkoKXtcbiAgICB0aGlzLmJhc2VzID0gMztcbiAgICB0aGlzLm1pc3NpbGVzID0gMTA7XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCA9IDA7XG4gICAgdGhpcy5sZXZlbEdvYWwgPSAxNTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuXG4gIHNldHVwTGV2ZWxEaXNwbGF5KCl7XG4gICAgdGhpcy5sZXZlbCArPSAxO1xuICAgIHRoaXMubWlzc2lsZXMgPSAoOCArICh0aGlzLmxldmVsKSk7ICAgIFxuICAgIHRoaXMuYmFzZXMgPSAzO1xuICAgIHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPSAwO1xuICAgIHRoaXMubGV2ZWxHb2FsID0gKDggKyAodGhpcy5sZXZlbCAqIDUpKTtcbiAgICBpZih0aGlzLmxldmVsID49MykgdGhpcy5sZXZlbEdvYWwgKz0gdGhpcy5sZXZlbDtcbiAgICB0aGlzLmNvbnRpbnVlR2FtZSA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KDQpO1xuICB9XG5cbiAgbmV4dExldmVsKGNhbGxiYWNrKXtcbiAgICAvL2xldmVsIHNldHVwIGxvZ2ljICAgICAgIFxuICAgIHRoaXMuc2V0dXBMZXZlbERpc3BsYXkoKTsgXG4gICAgaWYgKHRoaXMubGV2ZWwgPiAxKXtcbiAgICAgIHRoaXMubGV2ZWxBdWRpby5wbGF5KCk7IFxuICAgIH1cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDUwMCwgMzAwLCAyNTAsIDIwMCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KGBMZXZlbCAke3RoaXMubGV2ZWx9YCwgNTc1LDQwMCk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyBjYWxsYmFjaygwKTsgfSwgMjUwMCk7ICAgIFxuICB9XG5cbiAgYW5pbWF0ZUluZm8oY29udGFpbmVyKXtcbiAgICBsZXQgYW5pbWF0ZUNsYXNzID0gXCJnYW1lLWluZm8tYW5pbWF0ZVwiO1xuICAgIGxldCBhbmltYXRlZERvYyA9IGNvbnRhaW5lcjtcbiAgICBhbmltYXRlZERvYy5jbGFzc0xpc3QuYWRkKGFuaW1hdGVDbGFzcyk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYW5pbWF0ZWREb2MuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRlQ2xhc3MpO1xuICAgIH0sIDEyNTApO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheShudW0gPSAwKXtcbiAgICBcbiAgICB0aGlzLmxldmVsRGl2LmlubmVyVGV4dCA9IGBMZXZlbDogJHt0aGlzLmxldmVsfWA7XG4gICAgdGhpcy5iYXNlc0Rpdi5pbm5lclRleHQgPSBgQmFzZXM6ICR7dGhpcy5iYXNlc31gO1xuICAgIHRoaXMubWlzc2lsZXNEaXYuaW5uZXJUZXh0ID0gYE1pc3NpbGVzOiAke3RoaXMubWlzc2lsZXN9YDtcbiAgICB0aGlzLmRlc3Ryb3llZERpdi5pbm5lclRleHQgPSBgRGVzdHJveWVkIE1ldGVvcnM6ICR7dGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudH0gb2YgJHt0aGlzLmxldmVsR29hbH1gO1xuICAgIHN3aXRjaCAobnVtKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUluZm8odGhpcy5iYXNlc0Rpdik7ICAgICAgIFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5hbmltYXRlSW5mbyh0aGlzLm1pc3NpbGVzRGl2KTsgICAgICAgIFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdGhpcy5hbmltYXRlSW5mbyh0aGlzLmRlc3Ryb3llZERpdik7ICAgICAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUluZm8odGhpcy5sZXZlbERpdik7ICAgICAgICBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGZpcmVNaXNzaWxlKCl7XG4gICAgdGhpcy5taXNzaWxlcyAtPSAxO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgyKTtcbiAgfVxuXG4gIGRlc3Ryb3lCYXNlKCl7XG4gICAgdGhpcy5iYXNlcyAtPSAxO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgxKTtcbiAgfVxuXG4gIGRlc3Ryb3lNZXRlb3IoKXtcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ICs9IDE7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KDMpO1xuICB9XG5cbiAgb3V0T2ZNaXNzaWxlcygpe1xuICAgIGlmICh0aGlzLmxldmVsR29hbCAtIHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPiB0aGlzLmJhc2VzKXtcbiAgICAgIHRoaXMuY29udGludWVHYW1lID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2FtZUxvc3QoKXtcbiAgICBsZXQgdGV4dCA9IHRoaXMuYmFzZXMgPT09IDAgPyBcIkVhcnRoIGhhcyBiZWVuIGRlc3Ryb3llZCwgd2hvb3BzIVwiIDogXCJZb3UncmUgb3V0IG9mIG1pc3NpbGVzLCBhaW0gYmV0dGVyIVwiO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMzAwLCAzMDAsIDY1MCwgMjAwKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYCR7dGV4dH1gLCA0MDAsIDQwMCk7XG4gICAgdGhpcy5wcm9tcHRIZWFkZXIuaW5uZXJUZXh0ID0gXCJHYW1lIE92ZXJcIjtcbiAgfVxuXG4gIGNoZWNrQ29udGludWUoKXsgICAgXG4gICAgaWYgKHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPj0gdGhpcy5sZXZlbEdvYWwpe1xuICAgICAgdGhpcy5jb250aW51ZUdhbWUgPSBmYWxzZTtcbiAgICB9IFxuICAgIGlmICh0aGlzLmJhc2VzIDwgMSApe1xuICAgICAgdGhpcy5jb250aW51ZUdhbWUgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udGludWVHYW1lO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0ZW9ye1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogLTEwXG4gICAgfTtcbiAgICAvLyB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAvLyAgIHg6IHRoaXMucG9zaXRpb24ueCAtIDEwLFxuICAgIC8vICAgeTogdGhpcy5wb3NpdGlvbi55IC0gMTBcbiAgICAvLyB9O1xuICAgIHRoaXMuc3BlZWQgPSA1NSAqIHRoaXMuc2V0U3BlZWQoKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuc2V0RGlyZWN0aW9uKCk7XG4gICAgdGhpcy5yYWRpdXMgPSAxMDtcblxuICAgIHRoaXMubWV0ZW9ySW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1ldGVvci0xXCIpO1xuXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldFNwZWVkKCl7XG4gICAgLy9oZWxwcyBzZXQgYW4gaW50aWFsIHJhbmRvbSByYW5nZSBvZiBzcGVlZHNcbiAgICBsZXQgdGhyb3R0bGVyID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAodGhyb3R0bGVyIDw9IDAuMjUpIHJldHVybiAwLjc1O1xuICAgIGlmICh0aHJvdHRsZXIgPj0gMC43NSkgcmV0dXJuIDEuMjU7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBzZXREaXJlY3Rpb24oKXtcbiAgICAvL3NldCBSYW5kb20geCBkaXJlY3Rpb25cbiAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHggPiAwLjUpIHggKj0gLTE7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbihsZXZlbE11bHRpcGxpZXIsIGRlbHRhVGltZSl7XG4gICAgLy9kZWJ1Z2dlcjtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5kaXJlY3Rpb247XG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IChsZXZlbE11bHRpcGxpZXIgKiB0aGlzLnNwZWVkICogZGVsdGFUaW1lKTsgIFxuICAgIC8vZGVidWdnZXI7ICBcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG5cbiAgZHJhdygpe1xuICAgIC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyAgICBcbiAgICAvLyB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgLy8gdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMubWV0ZW9ySW1hZ2UsXG4gICAgICB0aGlzLnBvc2l0aW9uLngtMTAsXG4gICAgICB0aGlzLnBvc2l0aW9uLnktMTAsXG4gICAgICAyMCxcbiAgICAgIDIwXG4gICAgKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3NpbGV7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uLCBwb3NpdGlvbiwgY3R4KXtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLnggKyAxMCxcbiAgICAgIHk6IHBvc2l0aW9uLnkgLSAxMFxuICAgIH07XG5cbiAgICB0aGlzLmNvdXJzZSA9IHtcbiAgICAgIHg6ICh0aGlzLmRlc3RpbmF0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpLFxuICAgICAgeTogKHRoaXMuZGVzdGluYXRpb24ueSAtIHRoaXMucG9zaXRpb24ueSlcbiAgICB9O1xuICAgIHRoaXMuc3BlZWQgPSAwLjg7XG4gICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gMztcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMubWlzc2lsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWxsb3ctbWlzc2lsZVwiKTsgICAgXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICAvL3RoaXMuY2FsY3VsYXRlRGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0V4cGxvc2lvbiA9IHRoaXMuY2hlY2tFeHBsb3Npb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNoZWNrRXhwbG9zaW9uKGRpc3RhbmNlKXtcbiAgICAvL2xldCBkaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoKTsgICAgXG4gICAgaWYgKGRpc3RhbmNlIDw9IHRoaXMuZXhwbG9zaW9uUmFkaXVzKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuICAvLyAgIGxldCB4RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuZGVzdGluYXRpb24ueCk7XG4gIC8vICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gdGhpcy5kZXN0aW5hdGlvbi55KTtcbiAgLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCp4RGlzdCkgKyAoeURpc3QqeURpc3QpKTtcbiAgLy8gfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGR0KXtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gKHRoaXMuY291cnNlLnggLyB0aGlzLnNwZWVkKSAqIGR0OyAgICBcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKHRoaXMuY291cnNlLnkgLyB0aGlzLnNwZWVkKSAqIGR0O1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgZHJhdygpe1xuICAgIC8vbWV0ZW9ycyBhcmUgY2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMgaW4gR2FtZS5qc1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMubWlzc2lsZUltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55XG4gICAgKTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVEaXN0YW5jZSA9IChwb3MxLCBwb3MyKSA9PiB7XG4gIC8vZGVidWdnZXI7XG4gIGxldCB4RGlzdCA9IE1hdGguYWJzKHBvczEueCAtIHBvczIueCk7XG4gIGxldCB5RGlzdCA9IE1hdGguYWJzKHBvczEueSAtIHBvczIueSk7XG4gIHJldHVybiBNYXRoLnNxcnQoKHhEaXN0ICogeERpc3QpICsgKHlEaXN0ICogeURpc3QpKTtcbn07XG5cbi8vIGNhbGN1bGF0ZURpc3RhbmNlKCl7XG4vLyAgIGxldCB4RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuZGVzdGluYXRpb24ueCk7XG4vLyAgIGxldCB5RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuZGVzdGluYXRpb24ueSk7XG4vLyAgIHJldHVybiBNYXRoLnNxcnQoKHhEaXN0ICogeERpc3QpICsgKHlEaXN0ICogeURpc3QpKTtcbi8vIH0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9