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
    key: "updateDisplay",
    value: function updateDisplay() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.levelDiv.innerText = "Level: ".concat(this.level);
      this.basesDiv.innerText = "Bases: ".concat(this.bases);
      this.missilesDiv.innerText = "Missiles: ".concat(this.missiles);
      this.destroyedDiv.innerText = "Destroyed Meteors: ".concat(this.destroyedMeteorCount, " of ").concat(this.levelGoal);
      var animateClass = "game-info-animate";
      var animatedDoc;

      switch (num) {
        case 1:
          animatedDoc = this.basesDiv;
          animatedDoc.classList.add(animateClass);
          window.setTimeout(function () {
            animatedDoc.classList.remove(animateClass);
          }, 2000);
          break;

        case 2:
          animatedDoc = this.missilesDiv;
          animatedDoc.classList.add(animateClass);
          window.setTimeout(function () {
            animatedDoc.classList.remove(animateClass);
          }, 2000);
          break;

        case 3:
          animatedDoc = this.destroyedDiv;
          animatedDoc.classList.add(animateClass);
          window.setTimeout(function () {
            animatedDoc.classList.remove(animateClass);
          }, 2000);
          break;

        case 4:
          animatedDoc = this.levelDiv;
          animatedDoc.classList.add(animateClass);
          window.setTimeout(function () {
            animatedDoc.classList.remove(animateClass);
          }, 2000);
          break;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiU0NSRUVOX1dJRFRIIiwiU0NSRUVOX0hFSUdIVCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsIkdhbWUiLCJoYW5kbGVDbGljayIsIkJhc2UiLCJwb3NpdGlvbiIsImJhc2VJbWFnZSIsImRyYXdQb3NpdGlvbiIsIngiLCJ5IiwiZHJhd1dpZHRoIiwiZHJhd0hlaWdodCIsInJhZGl1cyIsImRlc3Ryb3llZCIsImRyYXciLCJiaW5kIiwiZGVzdHJveUJhc2UiLCJkcmF3SW1hZ2UiLCJFeHBsb3Npb24iLCJzaXplIiwibWF4U2l6ZSIsImdyb3d0aFJhdGUiLCJ0aW1lciIsImV4cGxvc2lvbkltYWdlQXJyYXkiLCJpbWFnZVRvRHJhdyIsInN0YWdlIiwiZXhwbG9zaW9uUmFkaXVzIiwidXBkYXRlRXhwbG9zaW9uIiwiZHQiLCJjb250ZXh0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJtZXRlb3JBcnJheSIsImJhc2VBcnJheSIsIm1pc3NpbGVBcnJheSIsImV4cGxvc2lvbkFycmF5IiwibGFzdFRpbWUiLCJzdGFydFRpbWUiLCJsZXZlbCIsImxldmVsTXVsdGlwbGllciIsImdhbWVEaXNwbGF5IiwiR2FtZURpc3BsYXkiLCJzZXR1cExldmVsRGlzcGxheSIsImdhbWVMb29wIiwicnVuR2FtZSIsImJ1aWxkTmV3TWV0ZW9ycyIsInNldHVwTGV2ZWwiLCJ3YWl0Rm9yU3RhcnQiLCJyZXNldEdhbWUiLCJleHBsb3Npb25BdWRpbyIsImJhc2VEZWF0aEF1ZGlvIiwibWlzc2lsZUZsaWdodEF1ZGlvIiwiYWN0aXZlTGlzdGVuZXIiLCJiYWNrZ3JvdW5kIiwicmVzZXREaXNwbGF5IiwiY2hhbmdlVXNlclByb21wdCIsImUiLCJtaXNzaWxlcyIsIkF1ZGlvIiwic3JjIiwicGxheSIsInBvdGVudGlhbEJhc2VzIiwiZmlsdGVyIiwiYmFzZSIsImNsb3Nlc3RCYXNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJvZmZzZXRYIiwiaSIsImxlbmd0aCIsImRlc3RpbmF0aW9uIiwib2Zmc2V0WSIsImZpcmVNaXNzaWxlIiwicHVzaCIsIk1pc3NpbGUiLCJwb3NYIiwiZmxvb3IiLCJyYW5kb20iLCJNZXRlb3IiLCJiYXNlUG9zaXRpb24iLCJuZXh0TGV2ZWwiLCJ0aW1lc3RhbXAiLCJjaGVja0NvbnRpbnVlIiwiZWxhcHNlZEZyYW1lVGltZSIsImZvckVhY2giLCJtZXRlb3IiLCJzcGxpY2UiLCJpbmRleE9mIiwidXBkYXRlUG9zaXRpb24iLCJleHBsb3Npb24iLCJkaXN0YW5jZSIsImNhbGN1bGF0ZURpc3RhbmNlIiwiZGVzdHJveU1ldGVvciIsIm1pc3NpbGUiLCJjaGVja0V4cGxvc2lvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlc3Ryb3llZE1ldGVvckNvdW50IiwibGV2ZWxHb2FsIiwiZ2FtZUxvc3QiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiZm9udCIsImJhc2VzIiwiYmFzZXNEaXYiLCJtaXNzaWxlc0RpdiIsImxldmVsRGl2IiwiZGVzdHJveWVkRGl2IiwicHJvbXB0SGVhZGVyIiwibGV2ZWxBdWRpbyIsInVwZGF0ZURpc3BsYXkiLCJwcm9tcHRJZCIsImlubmVyVGV4dCIsInNldEF0dHJpYnV0ZSIsImNhbGxiYWNrIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VUZXh0IiwibnVtIiwiYW5pbWF0ZUNsYXNzIiwiYW5pbWF0ZWREb2MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzcGVlZCIsInNldFNwZWVkIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwibWV0ZW9ySW1hZ2UiLCJ0aHJvdHRsZXIiLCJkZWx0YVRpbWUiLCJjb3Vyc2UiLCJtaXNzaWxlSW1hZ2UiLCJwb3MxIiwicG9zMiIsInhEaXN0IiwieURpc3QiLCJzcXJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7QUFDQTs7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFU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TyxJQUFNbUYsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDeUMsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQy9DO0FBQ0EsTUFBSUMsS0FBSyxHQUFHckUsSUFBSSxDQUFDQyxHQUFMLENBQVNrRSxJQUFJLENBQUM3SCxDQUFMLEdBQVM4SCxJQUFJLENBQUM5SCxDQUF2QixDQUFaO0FBQ0EsTUFBSWdJLEtBQUssR0FBR3RFLElBQUksQ0FBQ0MsR0FBTCxDQUFTa0UsSUFBSSxDQUFDNUgsQ0FBTCxHQUFTNkgsSUFBSSxDQUFDN0gsQ0FBdkIsQ0FBWjtBQUNBLFNBQU95RCxJQUFJLENBQUN1RSxJQUFMLENBQVdGLEtBQUssR0FBR0EsS0FBVCxHQUFtQkMsS0FBSyxHQUFHQSxLQUFyQyxDQUFQO0FBQ0QsQ0FMTSxDLENBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ1hBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vY29uc3QgQXBwID0gcmVxdWlyZShcIi4vc2NyaXB0cy9hcHAuanNcIik7XG4vLyBjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7ICBcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBjb25zdCBTQ1JFRU5fV0lEVEggPSAxMjAwO1xuICBjb25zdCBTQ1JFRU5fSEVJR0hUID0gODAwO1xuICBjdHguY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIO1xuICBjdHguY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQ7XG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgsIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5oYW5kbGVDbGljaywgZmFsc2UpO1xuICAvL2dhbWUucnVuR2FtZSgpO1xufSk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZXtcbiAgY29uc3RydWN0b3IoY3R4LCBwb3NpdGlvbil7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5iYXNlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2UtaW1hZ2VcIik7XG4gICAgXG4gICAgLy90aGlzLmRlc3Ryb3llZEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXN0cm95ZWQtYmFzZVwiKTtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICB5OiBwb3NpdGlvbi55XG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCsyMSxcbiAgICAgIHk6IHBvc2l0aW9uLnkrNTBcbiAgICB9OyAvL21hZ2ljIG51bWJlcnMgZm9yIHdpZHRoIGFuZCBoZWlnaHQgYWRqdXN0aW5nXG4gICAgdGhpcy5kcmF3V2lkdGggPSB0aGlzLmJhc2VJbWFnZS53aWR0aDtcbiAgICB0aGlzLmRyYXdIZWlnaHQgPSB0aGlzLmJhc2VJbWFnZS5oZWlnaHQ7XG4gICAgdGhpcy5yYWRpdXMgPSA0MDtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXN0cm95QmFzZSA9IHRoaXMuZGVzdHJveUJhc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRlc3Ryb3lCYXNlKCl7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMuYmFzZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXN0cm95ZWQtYmFzZVwiKTtcbiAgICB0aGlzLmRyYXdXaWR0aCA9IDEwMDtcbiAgICB0aGlzLmRyYXdIZWlnaHQgPSAxMDA7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24ueCAtPSAyMDtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbi55Kz00MDtcbiAgfVxuXG4gIGRyYXcoKXsgXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5iYXNlSW1hZ2UsIFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCwgXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55LFxuICAgICAgdGhpcy5kcmF3V2lkdGgsXG4gICAgICB0aGlzLmRyYXdIZWlnaHRcblxuICAgICAgKTtcbiAgfVxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb3Npb257XG4gIGNvbnN0cnVjdG9yKGN0eCwgcG9zaXRpb24pe1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgIHk6IHBvc2l0aW9uLnlcbiAgICB9OyAvLzUwIGlzIG1hZ2ljIG51bWJlciBjZW50ZXJcbiAgICB0aGlzLnBvc2l0aW9uPXtcbiAgICAgIHg6cG9zaXRpb24ueCxcbiAgICAgIHk6cG9zaXRpb24ueVxuICAgIH07XG5cbiAgICB0aGlzLnNpemUgPSA2MDtcbiAgICB0aGlzLm1heFNpemUgPSAxNTA7XG4gICAgdGhpcy5ncm93dGhSYXRlID0gKHRoaXMubWF4U2l6ZSAtIHRoaXMuc2l6ZSkgLyA0O1xuICAgIC8vY2FsY3VsYXRpb24gZm9yIGhvdyBmYXN0IHRvIGdyb3dcblxuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMudGltZXIgPSAwO1xuICAgIHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheSA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0xXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tMlwiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTNcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi00XCIpXTtcbiAgICB0aGlzLmltYWdlVG9EcmF3ID0gdGhpcy5leHBsb3Npb25JbWFnZUFycmF5WzBdO1xuICAgIHRoaXMuc3RhZ2UgPSAwO1xuICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gdGhpcy5zaXplLzI7XG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUV4cGxvc2lvbiA9IHRoaXMudXBkYXRlRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVFeHBsb3Npb24oZHQpe1xuICAgIGR0ID0gZHQvMTAwMDtcbiAgICB0aGlzLnRpbWVyKz1kdDtcbiAgICBpZiAodGhpcy50aW1lciA+PSAwLjgpe1xuICAgICAgdGhpcy5zdGFnZSsrO1xuXG4gICAgICB0aGlzLnRpbWVyID0wO1xuICAgIH0gICAgXG4gICAgaWYgKHRoaXMuc3RhZ2UgPCA0KXtcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnggPSB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnNpemUvMjtcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNpemUvMjtcbiAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgdGhpcy5zaXplICs9IHRoaXMuZ3Jvd3RoUmF0ZSAqIGR0OyAgXG4gICAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IHRoaXMuc2l6ZSAvIDI7ICAgIFxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXlbdGhpcy5zdGFnZV0sXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54LFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2l6ZSwgdGhpcy5zaXplXG4gICAgKTtcbiAgfVxufSIsImltcG9ydCBNZXRlb3IgZnJvbSBcIi4vbWV0ZW9yXCI7XG5pbXBvcnQgTWlzc2lsZSBmcm9tIFwiLi9taXNzaWxlXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQgRXhwbG9zaW9uIGZyb20gXCIuL2V4cGxvc2lvblwiO1xuaW1wb3J0IEdhbWVEaXNwbGF5IGZyb20gXCIuL2dhbWVEaXNwbGF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVEaXN0YW5jZSB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgd2lkdGgsIGhlaWdodCl7XG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xuICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuc2NyZWVuV2lkdGggPSB3aWR0aDsgXG5cbiAgICB0aGlzLm1ldGVvckFycmF5ID0gW107XG4gICAgdGhpcy5iYXNlQXJyYXkgPSBbXTtcbiAgICB0aGlzLm1pc3NpbGVBcnJheSA9IFtdO1xuICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkgPSBbXTtcblxuICAgIC8vdGhpcy5taXNzaWxlQ291bnQgPSAxMDtcblxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLnRpbWVyID0gMDsgLy91c2VkIHRvIGdlbmVyYXRlIG5ldyBtZXRlb3JzIGF0IGludGVydmFsc1xuICAgIHRoaXMubGV2ZWwgPSAwOyAvL2NvbnRyb2xzIGRpZmZpY3VsdHkgYW5kIHBhY2Ugb2YgZ2FtZVxuICAgIHRoaXMubGV2ZWxNdWx0aXBsaWVyID0gMC44NTtcbiAgICBcbiAgICB0aGlzLmdhbWVEaXNwbGF5ID0gbmV3IEdhbWVEaXNwbGF5KHRoaXMuY3R4KTsgIFxuICAgIHRoaXMuZ2FtZURpc3BsYXkuc2V0dXBMZXZlbERpc3BsYXkoKTsgXG5cbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucnVuR2FtZSA9IHRoaXMucnVuR2FtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5idWlsZE5ld01ldGVvcnMgPSB0aGlzLmJ1aWxkTmV3TWV0ZW9ycy5iaW5kKHRoaXMpOyAgXG4gICAgdGhpcy5zZXR1cExldmVsID0gdGhpcy5zZXR1cExldmVsLmJpbmQodGhpcyk7XG4gICAgdGhpcy53YWl0Rm9yU3RhcnQgPSB0aGlzLndhaXRGb3JTdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXRHYW1lID0gdGhpcy5yZXNldEdhbWUuYmluZCh0aGlzKTsgICBcbiAgICBcbiAgICB0aGlzLmV4cGxvc2lvbkF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tYXVkaW9cIik7XG4gICAgdGhpcy5iYXNlRGVhdGhBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZS1kZWF0aC1hdWRpb1wiKTsgICAgXG4gICAgdGhpcy5taXNzaWxlRmxpZ2h0QXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pc3NpbGUtZmxpZ2h0XCIpOyBcbiAgICAgIFxuXG4gICAgdGhpcy5hY3RpdmVMaXN0ZW5lciA9IHRydWU7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgIGJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4geyBcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmQsIDAsIDApOyB9LCBmYWxzZSk7XG4gICAgLy8gJChcIiNiYWNrZ3JvdW5kXCIpLm9uZShcImtleXByZXNzXCIsIHRoaXMud2FpdEZvclN0YXJ0KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICgpID0+IHt0aGlzLndhaXRGb3JTdGFydCgpO30pO1xuICAgIFxuICAgIC8vIGFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHt0aGlzLnNldHVwTGV2ZWwoKTt9LCBmYWxzZSk7XG4gIH1cblxuICByZXNldEdhbWUoKXtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDsgLy91c2VkIHRvIGdlbmVyYXRlIG5ldyBtZXRlb3JzIGF0IGludGVydmFsc1xuICAgIHRoaXMubGV2ZWwgPSAwOyAvL2NvbnRyb2xzIGRpZmZpY3VsdHkgYW5kIHBhY2Ugb2YgZ2FtZVxuICAgIHRoaXMubGV2ZWxNdWx0aXBsaWVyID0gMC44NTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5nYW1lRGlzcGxheS5yZXNldERpc3BsYXkoKTtcbiAgfVxuXG4gIHdhaXRGb3JTdGFydCgpe1xuICAgIGlmICh0aGlzLmFjdGl2ZUxpc3RlbmVyKXtcbiAgICAgIHRoaXMuZ2FtZURpc3BsYXkuY2hhbmdlVXNlclByb21wdCgxKTtcbiAgICAgIHRoaXMucmVzZXRHYW1lKCk7XG4gICAgICB0aGlzLnNldHVwTGV2ZWwoKTtcbiAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGljayhlKXsgICAgIFxuICAgIC8vY2hlY2sgZm9yIG1pc3NpbGUgY291bnRcbiAgICAvL2ZpbmQgY2xvc2VzdCBiYXNlIHRvIGNsaWNrXG4gICAgLy9zcGF3biBtaXNzaWxlIGF0IGJhc2UgaGVhZGluZyB0b3dhcmRzIGNsaWNrIFxuICAgIGlmICh0aGlzLmdhbWVEaXNwbGF5Lm1pc3NpbGVzID4gMCl7XG4gICAgICBuZXcgQXVkaW8odGhpcy5taXNzaWxlRmxpZ2h0QXVkaW8uc3JjKS5wbGF5KCk7XG4gICAgICBsZXQgcG90ZW50aWFsQmFzZXMgPSB0aGlzLmJhc2VBcnJheS5maWx0ZXIoYmFzZSA9PiB7cmV0dXJuICFiYXNlLmRlc3Ryb3llZDt9KTtcbiAgICAgIGxldCBjbG9zZXN0QmFzZSA9IHBvdGVudGlhbEJhc2VzWzBdO1xuICAgICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG90ZW50aWFsQmFzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGUub2Zmc2V0WCAtIHBvdGVudGlhbEJhc2VzW2ldLnBvc2l0aW9uLngpIDwgZGlmZmVyZW5jZSkge1xuICAgICAgICAgIGNsb3Nlc3RCYXNlID0gcG90ZW50aWFsQmFzZXNbaV07XG4gICAgICAgICAgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnBvc2l0aW9uLngpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZGVzdGluYXRpb24gPSB7XG4gICAgICAgIHg6IGUub2Zmc2V0WCxcbiAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICB9O1xuICAgICAgdGhpcy5nYW1lRGlzcGxheS5maXJlTWlzc2lsZSgpO1xuICAgICAgdGhpcy5taXNzaWxlQXJyYXkucHVzaChuZXcgTWlzc2lsZShkZXN0aW5hdGlvbiwgKGNsb3Nlc3RCYXNlLnBvc2l0aW9uKSwgdGhpcy5jdHgpKTtcbiAgICB9ICAgICBcbiAgfVxuXG4gIHNldHVwTGV2ZWwoKXtcbiAgICAvL3NldHMgdXAgZWFjaCBsZXZlbCAgICBcbiAgICB0aGlzLm1ldGVvckFycmF5ID0gW107XG4gICAgdGhpcy5iYXNlQXJyYXkgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5ID0gW107XG4gICAgdGhpcy5taXNzaWxlQXJyYXkgPSBbXTsgICAgXG4gICAgdGhpcy5sZXZlbCArPSAxO1xuICAgIC8vc2V0dXAgbWV0ZW9ycyA/Pz9tZXJnZSB3aXRoIGJ1aWxkTWV0ZW9ycz8/Pz9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICg4ICsgKDIgKiB0aGlzLmxldmVsKSk7IGkrKykge1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIC8vc2V0dXAgYmFzZXNcbiAgICBsZXQgYmFzZVBvc2l0aW9uID0ge1xuICAgICAgeDogMTUwLFxuICAgICAgeTogdGhpcy5zY3JlZW5IZWlnaHQgLSAxMDBcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIHRoaXMuYmFzZUFycmF5LnB1c2gobmV3IEJhc2UodGhpcy5jdHgsIGJhc2VQb3NpdGlvbikpO1xuXG4gICAgICBiYXNlUG9zaXRpb24ueCArPSB0aGlzLnNjcmVlbldpZHRoIC8gMztcbiAgICB9ICBcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciArPSAwLjE1O1xuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLnJ1bkdhbWUoKTtcbiAgfVxuXG4gIHJ1bkdhbWUoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTsgICAgXG4gICAgdGhpcy5nYW1lRGlzcGxheS5uZXh0TGV2ZWwodGhpcy5nYW1lTG9vcCk7XG4gIH1cblxuICBnYW1lTG9vcCh0aW1lc3RhbXApeyAgXG4gICAgaWYgKCF0aGlzLnN0YXJ0VGltZSl7XG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLnN0YXJ0VGltZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2FtZURpc3BsYXkuY2hlY2tDb250aW51ZSgpKXtcbiAgICAgIC8vZ2FtZSBzdGlsbCBwcm9ncmVzc2luZywgcGxheWVyIGhhcyBuZWl0aGVyIHdvbiBvciBsb3N0XG4gICAgICBsZXQgZWxhcHNlZEZyYW1lVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgICAgLy9kZWJ1Z2dlcjtcbiAgICAgIHRoaXMudGltZXIgKz0gZWxhcHNlZEZyYW1lVGltZSAvIDEwMDA7XG5cbiAgICAgIC8vY29uc3QgbGV2ZWxNdWx0aXBsaWVyID0gMS4wO1xuXG4gICAgICBpZiAodGhpcy50aW1lciA+PSAzLjApIHtcbiAgICAgICAgdGhpcy5idWlsZE5ld01ldGVvcnMoKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmQsIDAsIDApO1xuXG4gICAgICB0aGlzLm1ldGVvckFycmF5LmZvckVhY2gobWV0ZW9yID0+IHtcbiAgICAgICAgLy9maXJzdCwgbW92ZSB0aGUgbWV0ZW9yXG4gICAgICAgIGlmIChtZXRlb3IucG9zaXRpb24ueSA+PSB0aGlzLnNjcmVlbkhlaWdodCkge1xuICAgICAgICAgIHRoaXMubWV0ZW9yQXJyYXkuc3BsaWNlKHRoaXMubWV0ZW9yQXJyYXkuaW5kZXhPZihtZXRlb3IpLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXRlb3IudXBkYXRlUG9zaXRpb24odGhpcy5sZXZlbE11bHRpcGxpZXIsIGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NoZWNrIHBvcyBvZiBtZXRlb3IgYWdhaW5zdCBleHBsb3Npb25zLCBhbmQgZ3JvdW5kIFxuICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShleHBsb3Npb24ucG9zaXRpb24sIG1ldGVvci5wb3NpdGlvbik7XG4gICAgICAgICAgLy8gaWYgbWV0ZW9yIGluIHJhZGl1cywgZGVzdHJveSBpdCBhbmQgY3JlYXRlIGV4cGxvc2lvblxuICAgICAgICAgIGlmIChkaXN0YW5jZSA8PSBleHBsb3Npb24uZXhwbG9zaW9uUmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgICAgbmV3IEF1ZGlvKHRoaXMuZXhwbG9zaW9uQXVkaW8uc3JjKS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgbWV0ZW9yLnBvc2l0aW9uKSk7XG4gICAgICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwgMSk7XG4gICAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmRlc3Ryb3lNZXRlb3IoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmFzZUFycmF5LmZvckVhY2goYmFzZSA9PiB7XG4gICAgICAgICAgYmFzZS5kcmF3KCk7XG4gICAgICAgICAgaWYgKGJhc2UuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UobWV0ZW9yLnBvc2l0aW9uLCBiYXNlLnBvc2l0aW9uKTtcbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gYmFzZS5yYWRpdXMgKyBtZXRlb3IucmFkaXVzKSB7XG4gICAgICAgICAgICBuZXcgQXVkaW8odGhpcy5iYXNlRGVhdGhBdWRpby5zcmMpLnBsYXkoKTtcbiAgICAgICAgICAgIGJhc2UuZGVzdHJveUJhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZGVzdHJveUJhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBiYXNlLnBvc2l0aW9uKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1pc3NpbGVBcnJheS5mb3JFYWNoKG1pc3NpbGUgPT4ge1xuICAgICAgICAvL2NoZWNrIGZvciBleHBsb3Npb25cbiAgICAgICAgaWYgKG1pc3NpbGUuY2hlY2tFeHBsb3Npb24oY2FsY3VsYXRlRGlzdGFuY2UobWlzc2lsZS5wb3NpdGlvbiwgbWlzc2lsZS5kZXN0aW5hdGlvbikpKSB7XG4gICAgICAgICAgbmV3IEF1ZGlvKHRoaXMuZXhwbG9zaW9uQXVkaW8uc3JjKS5wbGF5KCk7XG4gICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIG1pc3NpbGUucG9zaXRpb24pKTsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5taXNzaWxlQXJyYXkuc3BsaWNlKHRoaXMubWlzc2lsZUFycmF5LmluZGV4T2YobWlzc2lsZSksIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1pc3NpbGUudXBkYXRlUG9zaXRpb24oKGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgICAgaWYgKGV4cGxvc2lvbi5zdGFnZSA+PSA0KSB7XG4gICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5zcGxpY2UodGhpcy5leHBsb3Npb25BcnJheS5pbmRleE9mKGV4cGxvc2lvbiksIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4cGxvc2lvbi51cGRhdGVFeHBsb3Npb24oZWxhcHNlZEZyYW1lVGltZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7ICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdhbWVEaXNwbGF5LmRlc3Ryb3llZE1ldGVvckNvdW50ID49IHRoaXMuZ2FtZURpc3BsYXkubGV2ZWxHb2FsKXtcbiAgICAgICAgLy9wbGF5ZXIgcHJvZ3Jlc3MgdG8gbmV4dCBsZXZlbFxuICAgICAgICB0aGlzLnNldHVwTGV2ZWwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHBsYXllciBsb3N0XG4gICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZ2FtZUxvc3QoKTsgICAgICAgIFxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5jaGFuZ2VVc2VyUHJvbXB0KDIpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXIgPSB0cnVlO1xuICAgICAgICB9LDI1MDApO1xuICAgICAgfVxuICAgIH0gICAgXG4gIH1cblxuICBidWlsZE5ld01ldGVvcnMoKSB7XG4gICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5sZXZlbCAqIDI7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lRGlzcGxheXtcbiAgY29uc3RydWN0b3IoY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgXG4gICAgdGhpcy5jdHguZm9udCA9IFwiMjRwdCBzYW5zIHNlcmlmXCI7XG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5taXNzaWxlcyA9IDEwO1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPSAwO1xuICAgIHRoaXMubGV2ZWxHb2FsID0gMTU7XG5cbiAgICB0aGlzLmJhc2VzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tYmFzZXNcIik7XG4gICAgdGhpcy5taXNzaWxlc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLW1pc3NpbGVzXCIpO1xuICAgIHRoaXMubGV2ZWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1sZXZlbFwiKTtcbiAgICB0aGlzLmRlc3Ryb3llZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLWRlc3Ryb3llZFwiKTtcbiAgICB0aGlzLnByb21wdEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1wcm9tcHQtaGVhZGVyLWFjdGl2ZVwiKTtcblxuICAgIHRoaXMubGV2ZWxBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWwtYWR2YW5jZVwiKTtcblxuICAgIHRoaXMuY2hlY2tDb250aW51ZSA9IHRoaXMuY2hlY2tDb250aW51ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveUJhc2UgPSB0aGlzLmRlc3Ryb3lCYXNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ID0gdGhpcy51cGRhdGVEaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXh0TGV2ZWwgPSB0aGlzLm5leHRMZXZlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveU1ldGVvciA9IHRoaXMuZGVzdHJveU1ldGVvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2FtZUxvc3QgPSB0aGlzLmdhbWVMb3N0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXR1cExldmVsRGlzcGxheSA9IHRoaXMuc2V0dXBMZXZlbERpc3BsYXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0RGlzcGxheSA9IHRoaXMucmVzZXREaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VVc2VyUHJvbXB0ID0gdGhpcy5jaGFuZ2VVc2VyUHJvbXB0LmJpbmQodGhpcyk7XG5cblxuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9XG5cbiAgY2hhbmdlVXNlclByb21wdChwcm9tcHRJZCl7XG4gICAgaWYgKHByb21wdElkID09PSAxKXtcbiAgICAgIHRoaXMucHJvbXB0SGVhZGVyLmlubmVyVGV4dCA9IFwiQmVnaW4hXCI7XG4gICAgICB0aGlzLnByb21wdEhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVzZXItcHJvbXB0LWhlYWRlci1pZGxlXCIpO1xuICAgIH0gZWxzZSBpZiAocHJvbXB0SWQgPT09IDIpe1xuICAgICAgdGhpcy5wcm9tcHRIZWFkZXIuaW5uZXJUZXh0ID0gXCJQcmVzcyBBbnkgS2V5IHRvIEJlZ2luXCI7XG4gICAgfVxuICB9XG5cbiAgcmVzZXREaXNwbGF5KCl7XG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5taXNzaWxlcyA9IDEwO1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPSAwO1xuICAgIHRoaXMubGV2ZWxHb2FsID0gMTU7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cblxuICBzZXR1cExldmVsRGlzcGxheSgpe1xuICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICB0aGlzLm1pc3NpbGVzID0gKDggKyAodGhpcy5sZXZlbCkpOyAgICBcbiAgICB0aGlzLmJhc2VzID0gMztcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID0gMDtcbiAgICB0aGlzLmxldmVsR29hbCA9ICg4ICsgKHRoaXMubGV2ZWwgKiA1KSk7XG4gICAgaWYodGhpcy5sZXZlbCA+PTMpIHRoaXMubGV2ZWxHb2FsICs9IHRoaXMubGV2ZWw7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KDQpO1xuICB9XG5cbiAgbmV4dExldmVsKGNhbGxiYWNrKXtcbiAgICAvL2xldmVsIHNldHVwIGxvZ2ljICAgICAgIFxuICAgIHRoaXMuc2V0dXBMZXZlbERpc3BsYXkoKTsgXG4gICAgaWYgKHRoaXMubGV2ZWwgPiAxKXtcbiAgICAgIHRoaXMubGV2ZWxBdWRpby5wbGF5KCk7IFxuICAgIH1cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDUwMCwgMzAwLCAyNTAsIDIwMCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KGBMZXZlbCAke3RoaXMubGV2ZWx9YCwgNTc1LDQwMCk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyBjYWxsYmFjaygwKTsgfSwgMjUwMCk7ICAgIFxuICB9XG5cbiAgdXBkYXRlRGlzcGxheShudW0gPSAwKXtcbiAgICBcbiAgICB0aGlzLmxldmVsRGl2LmlubmVyVGV4dCA9IGBMZXZlbDogJHt0aGlzLmxldmVsfWA7XG4gICAgdGhpcy5iYXNlc0Rpdi5pbm5lclRleHQgPSBgQmFzZXM6ICR7dGhpcy5iYXNlc31gO1xuICAgIHRoaXMubWlzc2lsZXNEaXYuaW5uZXJUZXh0ID0gYE1pc3NpbGVzOiAke3RoaXMubWlzc2lsZXN9YDtcbiAgICB0aGlzLmRlc3Ryb3llZERpdi5pbm5lclRleHQgPSBgRGVzdHJveWVkIE1ldGVvcnM6ICR7dGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudH0gb2YgJHt0aGlzLmxldmVsR29hbH1gO1xuICAgIGxldCBhbmltYXRlQ2xhc3MgPSBcImdhbWUtaW5mby1hbmltYXRlXCI7XG4gICAgbGV0IGFuaW1hdGVkRG9jO1xuICAgIHN3aXRjaCAobnVtKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGFuaW1hdGVkRG9jID0gdGhpcy5iYXNlc0RpdjtcbiAgICAgICAgYW5pbWF0ZWREb2MuY2xhc3NMaXN0LmFkZChhbmltYXRlQ2xhc3MpO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYW5pbWF0ZWREb2MuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRlQ2xhc3MpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGFuaW1hdGVkRG9jID0gdGhpcy5taXNzaWxlc0RpdjtcbiAgICAgICAgYW5pbWF0ZWREb2MuY2xhc3NMaXN0LmFkZChhbmltYXRlQ2xhc3MpO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIGFuaW1hdGVkRG9jLmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0ZUNsYXNzKTtcbiAgICAgICAgfSwgMjAwMCk7IFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgYW5pbWF0ZWREb2MgPSB0aGlzLmRlc3Ryb3llZERpdjtcbiAgICAgICAgYW5pbWF0ZWREb2MuY2xhc3NMaXN0LmFkZChhbmltYXRlQ2xhc3MpO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYW5pbWF0ZWREb2MuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRlQ2xhc3MpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGFuaW1hdGVkRG9jID0gdGhpcy5sZXZlbERpdjtcbiAgICAgICAgYW5pbWF0ZWREb2MuY2xhc3NMaXN0LmFkZChhbmltYXRlQ2xhc3MpO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYW5pbWF0ZWREb2MuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRlQ2xhc3MpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmaXJlTWlzc2lsZSgpe1xuICAgIHRoaXMubWlzc2lsZXMgLT0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoMik7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuYmFzZXMgLT0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoMSk7XG4gIH1cblxuICBkZXN0cm95TWV0ZW9yKCl7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCArPSAxO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgzKTtcbiAgfVxuXG4gIGdhbWVMb3N0KCl7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgzNTAsIDMwMCwgNjUwLCAyMDApO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgRWFydGggaGFzIGJlZW4gZGVzdHJveWVkLCB3aG9vcHMhYCwgNDUwLCA0MDApO1xuICAgIHRoaXMucHJvbXB0SGVhZGVyLmlubmVyVGV4dCA9IFwiR2FtZSBPdmVyXCI7XG4gIH1cblxuICBjaGVja0NvbnRpbnVlKCl7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPj0gdGhpcy5sZXZlbEdvYWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5iYXNlcyA+MCApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGVvcntcbiAgY29uc3RydWN0b3IocG9zWCwgY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IC0xMFxuICAgIH07XG4gICAgLy8gdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgLy8gICB4OiB0aGlzLnBvc2l0aW9uLnggLSAxMCxcbiAgICAvLyAgIHk6IHRoaXMucG9zaXRpb24ueSAtIDEwXG4gICAgLy8gfTtcbiAgICB0aGlzLnNwZWVkID0gNTUgKiB0aGlzLnNldFNwZWVkKCk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG5cbiAgICB0aGlzLm1ldGVvckltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXRlb3ItMVwiKTtcblxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTcGVlZCgpe1xuICAgIC8vaGVscHMgc2V0IGFuIGludGlhbCByYW5kb20gcmFuZ2Ugb2Ygc3BlZWRzXG4gICAgbGV0IHRocm90dGxlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHRocm90dGxlciA8PSAwLjI1KSByZXR1cm4gMC43NTtcbiAgICBpZiAodGhyb3R0bGVyID49IDAuNzUpIHJldHVybiAxLjI1O1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKCl7XG4gICAgLy9zZXQgUmFuZG9tIHggZGlyZWN0aW9uXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh4ID4gMC41KSB4ICo9IC0xO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBkZWx0YVRpbWUpe1xuICAgIC8vZGVidWdnZXI7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuZGlyZWN0aW9uO1xuICAgIHRoaXMucG9zaXRpb24ueSArPSAobGV2ZWxNdWx0aXBsaWVyICogdGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7ICBcbiAgICAvL2RlYnVnZ2VyOyAgXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuXG4gIGRyYXcoKXtcbiAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTsgICAgXG4gICAgLy8gdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIC8vIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1ldGVvckltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LTEwLFxuICAgICAgdGhpcy5wb3NpdGlvbi55LTEwLFxuICAgICAgMjAsXG4gICAgICAyMFxuICAgICk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaWxle1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbiwgcG9zaXRpb24sIGN0eCl7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54ICsgMTAsXG4gICAgICB5OiBwb3NpdGlvbi55IC0gMTBcbiAgICB9O1xuXG4gICAgdGhpcy5jb3Vyc2UgPSB7XG4gICAgICB4OiAodGhpcy5kZXN0aW5hdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSxcbiAgICAgIHk6ICh0aGlzLmRlc3RpbmF0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkpXG4gICAgfTtcbiAgICB0aGlzLnNwZWVkID0gMC44O1xuICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IDM7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLm1pc3NpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVsbG93LW1pc3NpbGVcIik7ICAgIFxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgLy90aGlzLmNhbGN1bGF0ZURpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tFeHBsb3Npb24gPSB0aGlzLmNoZWNrRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBjaGVja0V4cGxvc2lvbihkaXN0YW5jZSl7XG4gICAgLy9sZXQgZGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKCk7ICAgIFxuICAgIGlmIChkaXN0YW5jZSA8PSB0aGlzLmV4cGxvc2lvblJhZGl1cykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlRGlzdGFuY2UoKXtcbiAgLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuICAvLyAgIGxldCB5RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuZGVzdGluYXRpb24ueSk7XG4gIC8vICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QqeERpc3QpICsgKHlEaXN0KnlEaXN0KSk7XG4gIC8vIH1cblxuICB1cGRhdGVQb3NpdGlvbihkdCl7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9ICh0aGlzLmNvdXJzZS54IC8gdGhpcy5zcGVlZCkgKiBkdDsgICAgXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLmNvdXJzZS55IC8gdGhpcy5zcGVlZCkgKiBkdDtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICAvL21ldGVvcnMgYXJlIGNoZWNraW5nIGZvciBjb2xsaXNpb25zIGluIEdhbWUuanNcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1pc3NpbGVJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueVxuICAgICk7XG4gIH1cbn0iLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlRGlzdGFuY2UgPSAocG9zMSwgcG9zMikgPT4ge1xuICAvL2RlYnVnZ2VyO1xuICBsZXQgeERpc3QgPSBNYXRoLmFicyhwb3MxLnggLSBwb3MyLngpO1xuICBsZXQgeURpc3QgPSBNYXRoLmFicyhwb3MxLnkgLSBwb3MyLnkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG59O1xuXG4vLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuLy8gICBsZXQgeURpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmRlc3RpbmF0aW9uLnkpO1xuLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG4vLyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==