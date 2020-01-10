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
    this.animateInfo = this.animateInfo.bind(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiU0NSRUVOX1dJRFRIIiwiU0NSRUVOX0hFSUdIVCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsIkdhbWUiLCJoYW5kbGVDbGljayIsIkJhc2UiLCJwb3NpdGlvbiIsImJhc2VJbWFnZSIsImRyYXdQb3NpdGlvbiIsIngiLCJ5IiwiZHJhd1dpZHRoIiwiZHJhd0hlaWdodCIsInJhZGl1cyIsImRlc3Ryb3llZCIsImRyYXciLCJiaW5kIiwiZGVzdHJveUJhc2UiLCJkcmF3SW1hZ2UiLCJFeHBsb3Npb24iLCJzaXplIiwibWF4U2l6ZSIsImdyb3d0aFJhdGUiLCJ0aW1lciIsImV4cGxvc2lvbkltYWdlQXJyYXkiLCJpbWFnZVRvRHJhdyIsInN0YWdlIiwiZXhwbG9zaW9uUmFkaXVzIiwidXBkYXRlRXhwbG9zaW9uIiwiZHQiLCJjb250ZXh0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJtZXRlb3JBcnJheSIsImJhc2VBcnJheSIsIm1pc3NpbGVBcnJheSIsImV4cGxvc2lvbkFycmF5IiwibGFzdFRpbWUiLCJzdGFydFRpbWUiLCJsZXZlbCIsImxldmVsTXVsdGlwbGllciIsImdhbWVEaXNwbGF5IiwiR2FtZURpc3BsYXkiLCJzZXR1cExldmVsRGlzcGxheSIsImdhbWVMb29wIiwicnVuR2FtZSIsImJ1aWxkTmV3TWV0ZW9ycyIsInNldHVwTGV2ZWwiLCJ3YWl0Rm9yU3RhcnQiLCJyZXNldEdhbWUiLCJleHBsb3Npb25BdWRpbyIsImJhc2VEZWF0aEF1ZGlvIiwibWlzc2lsZUZsaWdodEF1ZGlvIiwiYWN0aXZlTGlzdGVuZXIiLCJiYWNrZ3JvdW5kIiwicmVzZXREaXNwbGF5IiwiY2hhbmdlVXNlclByb21wdCIsImUiLCJtaXNzaWxlcyIsIkF1ZGlvIiwic3JjIiwicGxheSIsInBvdGVudGlhbEJhc2VzIiwiZmlsdGVyIiwiYmFzZSIsImNsb3Nlc3RCYXNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJvZmZzZXRYIiwiaSIsImxlbmd0aCIsImRlc3RpbmF0aW9uIiwib2Zmc2V0WSIsImZpcmVNaXNzaWxlIiwicHVzaCIsIk1pc3NpbGUiLCJwb3NYIiwiZmxvb3IiLCJyYW5kb20iLCJNZXRlb3IiLCJiYXNlUG9zaXRpb24iLCJuZXh0TGV2ZWwiLCJ0aW1lc3RhbXAiLCJjaGVja0NvbnRpbnVlIiwiZWxhcHNlZEZyYW1lVGltZSIsImZvckVhY2giLCJtZXRlb3IiLCJzcGxpY2UiLCJpbmRleE9mIiwidXBkYXRlUG9zaXRpb24iLCJleHBsb3Npb24iLCJkaXN0YW5jZSIsImNhbGN1bGF0ZURpc3RhbmNlIiwiZGVzdHJveU1ldGVvciIsIm1pc3NpbGUiLCJjaGVja0V4cGxvc2lvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlc3Ryb3llZE1ldGVvckNvdW50IiwibGV2ZWxHb2FsIiwiZ2FtZUxvc3QiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiZm9udCIsImJhc2VzIiwiYmFzZXNEaXYiLCJtaXNzaWxlc0RpdiIsImxldmVsRGl2IiwiZGVzdHJveWVkRGl2IiwicHJvbXB0SGVhZGVyIiwibGV2ZWxBdWRpbyIsInVwZGF0ZURpc3BsYXkiLCJhbmltYXRlSW5mbyIsInByb21wdElkIiwiaW5uZXJUZXh0Iiwic2V0QXR0cmlidXRlIiwiY2FsbGJhY2siLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVRleHQiLCJjb250YWluZXIiLCJhbmltYXRlQ2xhc3MiLCJhbmltYXRlZERvYyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm51bSIsInNwZWVkIiwic2V0U3BlZWQiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJtZXRlb3JJbWFnZSIsInRocm90dGxlciIsImRlbHRhVGltZSIsImNvdXJzZSIsIm1pc3NpbGVJbWFnZSIsInBvczEiLCJwb3MyIiwieERpc3QiLCJ5RGlzdCIsInNxcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Q0FDQTtBQUNBOztB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S0FBckMsQ0FBUDtBQUNELENBTE0sQyxDQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUNYQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG4vL2NvbnN0IEFwcCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYXBwLmpzXCIpO1xuLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpOyAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgU0NSRUVOX1dJRFRIID0gMTIwMDtcbiAgY29uc3QgU0NSRUVOX0hFSUdIVCA9IDgwMDtcbiAgY3R4LmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSDtcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4LCBTQ1JFRU5fV0lEVEgsIFNDUkVFTl9IRUlHSFQpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWUuaGFuZGxlQ2xpY2ssIGZhbHNlKTtcbiAgLy9nYW1lLnJ1bkdhbWUoKTtcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2V7XG4gIGNvbnN0cnVjdG9yKGN0eCwgcG9zaXRpb24pe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuYmFzZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLWltYWdlXCIpO1xuICAgIFxuICAgIC8vdGhpcy5kZXN0cm95ZWRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgeTogcG9zaXRpb24ueVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngrMjEsXG4gICAgICB5OiBwb3NpdGlvbi55KzUwXG4gICAgfTsgLy9tYWdpYyBudW1iZXJzIGZvciB3aWR0aCBhbmQgaGVpZ2h0IGFkanVzdGluZ1xuICAgIHRoaXMuZHJhd1dpZHRoID0gdGhpcy5iYXNlSW1hZ2Uud2lkdGg7XG4gICAgdGhpcy5kcmF3SGVpZ2h0ID0gdGhpcy5iYXNlSW1hZ2UuaGVpZ2h0O1xuICAgIHRoaXMucmFkaXVzID0gNDA7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveUJhc2UgPSB0aGlzLmRlc3Ryb3lCYXNlLmJpbmQodGhpcyk7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdHJveWVkLWJhc2VcIik7XG4gICAgdGhpcy5kcmF3V2lkdGggPSAxMDA7XG4gICAgdGhpcy5kcmF3SGVpZ2h0ID0gMTAwO1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnggLT0gMjA7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24ueSs9NDA7XG4gIH1cblxuICBkcmF3KCl7IFxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuYmFzZUltYWdlLCBcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLngsIFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueSxcbiAgICAgIHRoaXMuZHJhd1dpZHRoLFxuICAgICAgdGhpcy5kcmF3SGVpZ2h0XG5cbiAgICAgICk7XG4gIH1cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9zaW9ue1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICB5OiBwb3NpdGlvbi55XG4gICAgfTsgLy81MCBpcyBtYWdpYyBudW1iZXIgY2VudGVyXG4gICAgdGhpcy5wb3NpdGlvbj17XG4gICAgICB4OnBvc2l0aW9uLngsXG4gICAgICB5OnBvc2l0aW9uLnlcbiAgICB9O1xuXG4gICAgdGhpcy5zaXplID0gNjA7XG4gICAgdGhpcy5tYXhTaXplID0gMTUwO1xuICAgIHRoaXMuZ3Jvd3RoUmF0ZSA9ICh0aGlzLm1heFNpemUgLSB0aGlzLnNpemUpIC8gNDtcbiAgICAvL2NhbGN1bGF0aW9uIGZvciBob3cgZmFzdCB0byBncm93XG5cbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXkgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tMVwiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTJcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0zXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tNFwiKV07XG4gICAgdGhpcy5pbWFnZVRvRHJhdyA9IHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheVswXTtcbiAgICB0aGlzLnN0YWdlID0gMDtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IHRoaXMuc2l6ZS8yO1xuXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVFeHBsb3Npb24gPSB0aGlzLnVwZGF0ZUV4cGxvc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlRXhwbG9zaW9uKGR0KXtcbiAgICBkdCA9IGR0LzEwMDA7XG4gICAgdGhpcy50aW1lcis9ZHQ7XG4gICAgaWYgKHRoaXMudGltZXIgPj0gMC44KXtcbiAgICAgIHRoaXMuc3RhZ2UrKztcblxuICAgICAgdGhpcy50aW1lciA9MDtcbiAgICB9ICAgIFxuICAgIGlmICh0aGlzLnN0YWdlIDwgNCl7XG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplLzI7XG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55ID0gdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zaXplLzI7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICAgIHRoaXMuc2l6ZSArPSB0aGlzLmdyb3d0aFJhdGUgKiBkdDsgIFxuICAgICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSB0aGlzLnNpemUgLyAyOyAgICBcbiAgICB9XG4gICAgXG4gIH1cblxuICBkcmF3KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5W3RoaXMuc3RhZ2VdLFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCxcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUsIHRoaXMuc2l6ZVxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgTWV0ZW9yIGZyb20gXCIuL21ldGVvclwiO1xuaW1wb3J0IE1pc3NpbGUgZnJvbSBcIi4vbWlzc2lsZVwiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IEV4cGxvc2lvbiBmcm9tIFwiLi9leHBsb3Npb25cIjtcbmltcG9ydCBHYW1lRGlzcGxheSBmcm9tIFwiLi9nYW1lRGlzcGxheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGlzdGFuY2UgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpe1xuICAgIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gd2lkdGg7IFxuXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5taXNzaWxlQXJyYXkgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5ID0gW107XG5cbiAgICAvL3RoaXMubWlzc2lsZUNvdW50ID0gMTA7XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMDsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciA9IDAuODU7XG4gICAgXG4gICAgdGhpcy5nYW1lRGlzcGxheSA9IG5ldyBHYW1lRGlzcGxheSh0aGlzLmN0eCk7ICBcbiAgICB0aGlzLmdhbWVEaXNwbGF5LnNldHVwTGV2ZWxEaXNwbGF5KCk7IFxuXG4gICAgdGhpcy5nYW1lTG9vcCA9IHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJ1bkdhbWUgPSB0aGlzLnJ1bkdhbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzID0gdGhpcy5idWlsZE5ld01ldGVvcnMuYmluZCh0aGlzKTsgIFxuICAgIHRoaXMuc2V0dXBMZXZlbCA9IHRoaXMuc2V0dXBMZXZlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2FpdEZvclN0YXJ0ID0gdGhpcy53YWl0Rm9yU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0R2FtZSA9IHRoaXMucmVzZXRHYW1lLmJpbmQodGhpcyk7ICAgXG4gICAgXG4gICAgdGhpcy5leHBsb3Npb25BdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLWF1ZGlvXCIpO1xuICAgIHRoaXMuYmFzZURlYXRoQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2UtZGVhdGgtYXVkaW9cIik7ICAgIFxuICAgIHRoaXMubWlzc2lsZUZsaWdodEF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXNzaWxlLWZsaWdodFwiKTsgXG4gICAgICBcblxuICAgIHRoaXMuYWN0aXZlTGlzdGVuZXIgPSB0cnVlO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgICBiYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHsgXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTsgfSwgZmFsc2UpO1xuICAgIC8vICQoXCIjYmFja2dyb3VuZFwiKS5vbmUoXCJrZXlwcmVzc1wiLCB0aGlzLndhaXRGb3JTdGFydCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoKSA9PiB7dGhpcy53YWl0Rm9yU3RhcnQoKTt9KTtcbiAgICBcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7dGhpcy5zZXR1cExldmVsKCk7fSwgZmFsc2UpO1xuICB9XG5cbiAgcmVzZXRHYW1lKCl7XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMDsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciA9IDAuODU7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMuZ2FtZURpc3BsYXkucmVzZXREaXNwbGF5KCk7XG4gIH1cblxuICB3YWl0Rm9yU3RhcnQoKXtcbiAgICBpZiAodGhpcy5hY3RpdmVMaXN0ZW5lcil7XG4gICAgICB0aGlzLmdhbWVEaXNwbGF5LmNoYW5nZVVzZXJQcm9tcHQoMSk7XG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgICAgdGhpcy5zZXR1cExldmVsKCk7XG4gICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSl7ICAgICBcbiAgICAvL2NoZWNrIGZvciBtaXNzaWxlIGNvdW50XG4gICAgLy9maW5kIGNsb3Nlc3QgYmFzZSB0byBjbGlja1xuICAgIC8vc3Bhd24gbWlzc2lsZSBhdCBiYXNlIGhlYWRpbmcgdG93YXJkcyBjbGljayBcbiAgICBpZiAodGhpcy5nYW1lRGlzcGxheS5taXNzaWxlcyA+IDApe1xuICAgICAgbmV3IEF1ZGlvKHRoaXMubWlzc2lsZUZsaWdodEF1ZGlvLnNyYykucGxheSgpO1xuICAgICAgbGV0IHBvdGVudGlhbEJhc2VzID0gdGhpcy5iYXNlQXJyYXkuZmlsdGVyKGJhc2UgPT4ge3JldHVybiAhYmFzZS5kZXN0cm95ZWQ7fSk7XG4gICAgICBsZXQgY2xvc2VzdEJhc2UgPSBwb3RlbnRpYWxCYXNlc1swXTtcbiAgICAgIGxldCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UucG9zaXRpb24ueCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvdGVudGlhbEJhc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhlLm9mZnNldFggLSBwb3RlbnRpYWxCYXNlc1tpXS5wb3NpdGlvbi54KSA8IGRpZmZlcmVuY2UpIHtcbiAgICAgICAgICBjbG9zZXN0QmFzZSA9IHBvdGVudGlhbEJhc2VzW2ldO1xuICAgICAgICAgIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhlLm9mZnNldFggLSBjbG9zZXN0QmFzZS5wb3NpdGlvbi54KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGRlc3RpbmF0aW9uID0ge1xuICAgICAgICB4OiBlLm9mZnNldFgsXG4gICAgICAgIHk6IGUub2Zmc2V0WVxuICAgICAgfTtcbiAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZmlyZU1pc3NpbGUoKTtcbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LnB1c2gobmV3IE1pc3NpbGUoZGVzdGluYXRpb24sIChjbG9zZXN0QmFzZS5wb3NpdGlvbiksIHRoaXMuY3R4KSk7XG4gICAgfSAgICAgXG4gIH1cblxuICBzZXR1cExldmVsKCl7XG4gICAgLy9zZXRzIHVwIGVhY2ggbGV2ZWwgICAgXG4gICAgdGhpcy5tZXRlb3JBcnJheSA9IFtdO1xuICAgIHRoaXMuYmFzZUFycmF5ID0gW107XG4gICAgdGhpcy5leHBsb3Npb25BcnJheSA9IFtdO1xuICAgIHRoaXMubWlzc2lsZUFycmF5ID0gW107ICAgIFxuICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICAvL3NldHVwIG1ldGVvcnMgPz8/bWVyZ2Ugd2l0aCBidWlsZE1ldGVvcnM/Pz8/XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoOCArICgyICogdGhpcy5sZXZlbCkpOyBpKyspIHtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgICAvL3NldHVwIGJhc2VzXG4gICAgbGV0IGJhc2VQb3NpdGlvbiA9IHtcbiAgICAgIHg6IDE1MCxcbiAgICAgIHk6IHRoaXMuc2NyZWVuSGVpZ2h0IC0gMTAwXG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICB0aGlzLmJhc2VBcnJheS5wdXNoKG5ldyBCYXNlKHRoaXMuY3R4LCBiYXNlUG9zaXRpb24pKTtcblxuICAgICAgYmFzZVBvc2l0aW9uLnggKz0gdGhpcy5zY3JlZW5XaWR0aCAvIDM7XG4gICAgfSAgXG4gICAgdGhpcy5sZXZlbE11bHRpcGxpZXIgKz0gMC4xNTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5ydW5HYW1lKCk7XG4gIH1cblxuICBydW5HYW1lKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZCwgMCwgMCk7ICAgIFxuICAgIHRoaXMuZ2FtZURpc3BsYXkubmV4dExldmVsKHRoaXMuZ2FtZUxvb3ApO1xuICB9XG5cbiAgZ2FtZUxvb3AodGltZXN0YW1wKXsgIFxuICAgIGlmICghdGhpcy5zdGFydFRpbWUpe1xuICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGhpcy5zdGFydFRpbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmdhbWVEaXNwbGF5LmNoZWNrQ29udGludWUoKSl7XG4gICAgICAvL2dhbWUgc3RpbGwgcHJvZ3Jlc3NpbmcsIHBsYXllciBoYXMgbmVpdGhlciB3b24gb3IgbG9zdFxuICAgICAgbGV0IGVsYXBzZWRGcmFtZVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgIC8vZGVidWdnZXI7XG4gICAgICB0aGlzLnRpbWVyICs9IGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwO1xuXG4gICAgICAvL2NvbnN0IGxldmVsTXVsdGlwbGllciA9IDEuMDtcblxuICAgICAgaWYgKHRoaXMudGltZXIgPj0gMy4wKSB7XG4gICAgICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTtcblxuICAgICAgdGhpcy5tZXRlb3JBcnJheS5mb3JFYWNoKG1ldGVvciA9PiB7XG4gICAgICAgIC8vZmlyc3QsIG1vdmUgdGhlIG1ldGVvclxuICAgICAgICBpZiAobWV0ZW9yLnBvc2l0aW9uLnkgPj0gdGhpcy5zY3JlZW5IZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWV0ZW9yLnVwZGF0ZVBvc2l0aW9uKHRoaXMubGV2ZWxNdWx0aXBsaWVyLCBlbGFwc2VkRnJhbWVUaW1lIC8gMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBwb3Mgb2YgbWV0ZW9yIGFnYWluc3QgZXhwbG9zaW9ucywgYW5kIGdyb3VuZCBcbiAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5mb3JFYWNoKGV4cGxvc2lvbiA9PiB7XG4gICAgICAgICAgbGV0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoZXhwbG9zaW9uLnBvc2l0aW9uLCBtZXRlb3IucG9zaXRpb24pO1xuICAgICAgICAgIC8vIGlmIG1ldGVvciBpbiByYWRpdXMsIGRlc3Ryb3kgaXQgYW5kIGNyZWF0ZSBleHBsb3Npb25cbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gZXhwbG9zaW9uLmV4cGxvc2lvblJhZGl1cyArIG1ldGVvci5yYWRpdXMpIHtcbiAgICAgICAgICAgIG5ldyBBdWRpbyh0aGlzLmV4cGxvc2lvbkF1ZGlvLnNyYykucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIG1ldGVvci5wb3NpdGlvbikpO1xuICAgICAgICAgICAgdGhpcy5tZXRlb3JBcnJheS5zcGxpY2UodGhpcy5tZXRlb3JBcnJheS5pbmRleE9mKG1ldGVvciksIDEpO1xuICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5kZXN0cm95TWV0ZW9yKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJhc2VBcnJheS5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgICAgIGJhc2UuZHJhdygpO1xuICAgICAgICAgIGlmIChiYXNlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKG1ldGVvci5wb3NpdGlvbiwgYmFzZS5wb3NpdGlvbik7XG4gICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IGJhc2UucmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgICAgbmV3IEF1ZGlvKHRoaXMuYmFzZURlYXRoQXVkaW8uc3JjKS5wbGF5KCk7XG4gICAgICAgICAgICBiYXNlLmRlc3Ryb3lCYXNlKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmRlc3Ryb3lCYXNlKCk7XG4gICAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgYmFzZS5wb3NpdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5taXNzaWxlQXJyYXkuZm9yRWFjaChtaXNzaWxlID0+IHtcbiAgICAgICAgLy9jaGVjayBmb3IgZXhwbG9zaW9uXG4gICAgICAgIGlmIChtaXNzaWxlLmNoZWNrRXhwbG9zaW9uKGNhbGN1bGF0ZURpc3RhbmNlKG1pc3NpbGUucG9zaXRpb24sIG1pc3NpbGUuZGVzdGluYXRpb24pKSkge1xuICAgICAgICAgIG5ldyBBdWRpbyh0aGlzLmV4cGxvc2lvbkF1ZGlvLnNyYykucGxheSgpO1xuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBtaXNzaWxlLnBvc2l0aW9uKSk7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXMubWlzc2lsZUFycmF5LnNwbGljZSh0aGlzLm1pc3NpbGVBcnJheS5pbmRleE9mKG1pc3NpbGUpLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtaXNzaWxlLnVwZGF0ZVBvc2l0aW9uKChlbGFwc2VkRnJhbWVUaW1lIC8gMTAwMCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5mb3JFYWNoKGV4cGxvc2lvbiA9PiB7XG4gICAgICAgIGlmIChleHBsb3Npb24uc3RhZ2UgPj0gNCkge1xuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuc3BsaWNlKHRoaXMuZXhwbG9zaW9uQXJyYXkuaW5kZXhPZihleHBsb3Npb24pLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleHBsb3Npb24udXBkYXRlRXhwbG9zaW9uKGVsYXBzZWRGcmFtZVRpbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApOyAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5nYW1lRGlzcGxheS5kZXN0cm95ZWRNZXRlb3JDb3VudCA+PSB0aGlzLmdhbWVEaXNwbGF5LmxldmVsR29hbCl7XG4gICAgICAgIC8vcGxheWVyIHByb2dyZXNzIHRvIG5leHQgbGV2ZWxcbiAgICAgICAgdGhpcy5zZXR1cExldmVsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGF5ZXIgbG9zdFxuICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmdhbWVMb3N0KCk7ICAgICAgICBcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuY2hhbmdlVXNlclByb21wdCgyKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVyID0gdHJ1ZTtcbiAgICAgICAgfSwyNTAwKTtcbiAgICAgIH1cbiAgICB9ICAgIFxuICB9XG5cbiAgYnVpbGROZXdNZXRlb3JzKCkge1xuICAgIGZvcihsZXQgaSA9MDsgaSA8IHRoaXMubGV2ZWwgKiAyOyBpKyspe1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZURpc3BsYXl7XG4gIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7ICAgIFxuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHQgc2FucyBzZXJpZlwiO1xuICAgIHRoaXMuYmFzZXMgPSAzO1xuICAgIHRoaXMubWlzc2lsZXMgPSAxMDtcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID0gMDtcbiAgICB0aGlzLmxldmVsR29hbCA9IDE1O1xuXG4gICAgdGhpcy5iYXNlc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLWJhc2VzXCIpO1xuICAgIHRoaXMubWlzc2lsZXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1taXNzaWxlc1wiKTtcbiAgICB0aGlzLmxldmVsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tbGV2ZWxcIik7XG4gICAgdGhpcy5kZXN0cm95ZWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1kZXN0cm95ZWRcIik7XG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItcHJvbXB0LWhlYWRlci1hY3RpdmVcIik7XG5cbiAgICB0aGlzLmxldmVsQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldmVsLWFkdmFuY2VcIik7XG5cbiAgICB0aGlzLmNoZWNrQ29udGludWUgPSB0aGlzLmNoZWNrQ29udGludWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3lCYXNlID0gdGhpcy5kZXN0cm95QmFzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSA9IHRoaXMudXBkYXRlRGlzcGxheS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubmV4dExldmVsID0gdGhpcy5uZXh0TGV2ZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3lNZXRlb3IgPSB0aGlzLmRlc3Ryb3lNZXRlb3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdhbWVMb3N0ID0gdGhpcy5nYW1lTG9zdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0dXBMZXZlbERpc3BsYXkgPSB0aGlzLnNldHVwTGV2ZWxEaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldERpc3BsYXkgPSB0aGlzLnJlc2V0RGlzcGxheS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlVXNlclByb21wdCA9IHRoaXMuY2hhbmdlVXNlclByb21wdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYW5pbWF0ZUluZm8gPSB0aGlzLmFuaW1hdGVJbmZvLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuXG4gIGNoYW5nZVVzZXJQcm9tcHQocHJvbXB0SWQpe1xuICAgIGlmIChwcm9tcHRJZCA9PT0gMSl7XG4gICAgICB0aGlzLnByb21wdEhlYWRlci5pbm5lclRleHQgPSBcIkJlZ2luIVwiO1xuICAgICAgdGhpcy5wcm9tcHRIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1c2VyLXByb21wdC1oZWFkZXItaWRsZVwiKTtcbiAgICB9IGVsc2UgaWYgKHByb21wdElkID09PSAyKXtcbiAgICAgIHRoaXMucHJvbXB0SGVhZGVyLmlubmVyVGV4dCA9IFwiUHJlc3MgQW55IEtleSB0byBCZWdpblwiO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RGlzcGxheSgpe1xuICAgIHRoaXMuYmFzZXMgPSAzO1xuICAgIHRoaXMubWlzc2lsZXMgPSAxMDtcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID0gMDtcbiAgICB0aGlzLmxldmVsR29hbCA9IDE1O1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9XG5cbiAgc2V0dXBMZXZlbERpc3BsYXkoKXtcbiAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgdGhpcy5taXNzaWxlcyA9ICg4ICsgKHRoaXMubGV2ZWwpKTsgICAgXG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCA9IDA7XG4gICAgdGhpcy5sZXZlbEdvYWwgPSAoOCArICh0aGlzLmxldmVsICogNSkpO1xuICAgIGlmKHRoaXMubGV2ZWwgPj0zKSB0aGlzLmxldmVsR29hbCArPSB0aGlzLmxldmVsO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSg0KTtcbiAgfVxuXG4gIG5leHRMZXZlbChjYWxsYmFjayl7XG4gICAgLy9sZXZlbCBzZXR1cCBsb2dpYyAgICAgICBcbiAgICB0aGlzLnNldHVwTGV2ZWxEaXNwbGF5KCk7IFxuICAgIGlmICh0aGlzLmxldmVsID4gMSl7XG4gICAgICB0aGlzLmxldmVsQXVkaW8ucGxheSgpOyBcbiAgICB9XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCg1MDAsIDMwMCwgMjUwLCAyMDApO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgTGV2ZWwgJHt0aGlzLmxldmVsfWAsIDU3NSw0MDApO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgY2FsbGJhY2soMCk7IH0sIDI1MDApOyAgICBcbiAgfVxuXG4gIGFuaW1hdGVJbmZvKGNvbnRhaW5lcil7XG4gICAgbGV0IGFuaW1hdGVDbGFzcyA9IFwiZ2FtZS1pbmZvLWFuaW1hdGVcIjtcbiAgICBsZXQgYW5pbWF0ZWREb2MgPSBjb250YWluZXI7XG4gICAgYW5pbWF0ZWREb2MuY2xhc3NMaXN0LmFkZChhbmltYXRlQ2xhc3MpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFuaW1hdGVkRG9jLmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0ZUNsYXNzKTtcbiAgICB9LCAxMjUwKTtcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXkobnVtID0gMCl7XG4gICAgXG4gICAgdGhpcy5sZXZlbERpdi5pbm5lclRleHQgPSBgTGV2ZWw6ICR7dGhpcy5sZXZlbH1gO1xuICAgIHRoaXMuYmFzZXNEaXYuaW5uZXJUZXh0ID0gYEJhc2VzOiAke3RoaXMuYmFzZXN9YDtcbiAgICB0aGlzLm1pc3NpbGVzRGl2LmlubmVyVGV4dCA9IGBNaXNzaWxlczogJHt0aGlzLm1pc3NpbGVzfWA7XG4gICAgdGhpcy5kZXN0cm95ZWREaXYuaW5uZXJUZXh0ID0gYERlc3Ryb3llZCBNZXRlb3JzOiAke3RoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnR9IG9mICR7dGhpcy5sZXZlbEdvYWx9YDtcbiAgICBzd2l0Y2ggKG51bSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLmFuaW1hdGVJbmZvKHRoaXMuYmFzZXNEaXYpOyAgICAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUluZm8odGhpcy5taXNzaWxlc0Rpdik7ICAgICAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUluZm8odGhpcy5kZXN0cm95ZWREaXYpOyAgICAgICAgXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICB0aGlzLmFuaW1hdGVJbmZvKHRoaXMubGV2ZWxEaXYpOyAgICAgICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmaXJlTWlzc2lsZSgpe1xuICAgIHRoaXMubWlzc2lsZXMgLT0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoMik7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuYmFzZXMgLT0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoMSk7XG4gIH1cblxuICBkZXN0cm95TWV0ZW9yKCl7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCArPSAxO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgzKTtcbiAgfVxuXG4gIGdhbWVMb3N0KCl7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgzMDAsIDMwMCwgNjUwLCAyMDApO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgRWFydGggaGFzIGJlZW4gZGVzdHJveWVkLCB3aG9vcHMhYCwgNDAwLCA0MDApO1xuICAgIHRoaXMucHJvbXB0SGVhZGVyLmlubmVyVGV4dCA9IFwiR2FtZSBPdmVyXCI7XG4gIH1cblxuICBjaGVja0NvbnRpbnVlKCl7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPj0gdGhpcy5sZXZlbEdvYWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5iYXNlcyA+MCApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGVvcntcbiAgY29uc3RydWN0b3IocG9zWCwgY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IC0xMFxuICAgIH07XG4gICAgLy8gdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgLy8gICB4OiB0aGlzLnBvc2l0aW9uLnggLSAxMCxcbiAgICAvLyAgIHk6IHRoaXMucG9zaXRpb24ueSAtIDEwXG4gICAgLy8gfTtcbiAgICB0aGlzLnNwZWVkID0gNTUgKiB0aGlzLnNldFNwZWVkKCk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG5cbiAgICB0aGlzLm1ldGVvckltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXRlb3ItMVwiKTtcblxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTcGVlZCgpe1xuICAgIC8vaGVscHMgc2V0IGFuIGludGlhbCByYW5kb20gcmFuZ2Ugb2Ygc3BlZWRzXG4gICAgbGV0IHRocm90dGxlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHRocm90dGxlciA8PSAwLjI1KSByZXR1cm4gMC43NTtcbiAgICBpZiAodGhyb3R0bGVyID49IDAuNzUpIHJldHVybiAxLjI1O1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKCl7XG4gICAgLy9zZXQgUmFuZG9tIHggZGlyZWN0aW9uXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh4ID4gMC41KSB4ICo9IC0xO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBkZWx0YVRpbWUpe1xuICAgIC8vZGVidWdnZXI7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuZGlyZWN0aW9uO1xuICAgIHRoaXMucG9zaXRpb24ueSArPSAobGV2ZWxNdWx0aXBsaWVyICogdGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7ICBcbiAgICAvL2RlYnVnZ2VyOyAgXG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuXG4gIGRyYXcoKXtcbiAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTsgICAgXG4gICAgLy8gdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIC8vIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1ldGVvckltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LTEwLFxuICAgICAgdGhpcy5wb3NpdGlvbi55LTEwLFxuICAgICAgMjAsXG4gICAgICAyMFxuICAgICk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaWxle1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbiwgcG9zaXRpb24sIGN0eCl7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54ICsgMTAsXG4gICAgICB5OiBwb3NpdGlvbi55IC0gMTBcbiAgICB9O1xuXG4gICAgdGhpcy5jb3Vyc2UgPSB7XG4gICAgICB4OiAodGhpcy5kZXN0aW5hdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSxcbiAgICAgIHk6ICh0aGlzLmRlc3RpbmF0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkpXG4gICAgfTtcbiAgICB0aGlzLnNwZWVkID0gMC44O1xuICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IDM7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLm1pc3NpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVsbG93LW1pc3NpbGVcIik7ICAgIFxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgLy90aGlzLmNhbGN1bGF0ZURpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tFeHBsb3Npb24gPSB0aGlzLmNoZWNrRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBjaGVja0V4cGxvc2lvbihkaXN0YW5jZSl7XG4gICAgLy9sZXQgZGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKCk7ICAgIFxuICAgIGlmIChkaXN0YW5jZSA8PSB0aGlzLmV4cGxvc2lvblJhZGl1cykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlRGlzdGFuY2UoKXtcbiAgLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuICAvLyAgIGxldCB5RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuZGVzdGluYXRpb24ueSk7XG4gIC8vICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QqeERpc3QpICsgKHlEaXN0KnlEaXN0KSk7XG4gIC8vIH1cblxuICB1cGRhdGVQb3NpdGlvbihkdCl7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9ICh0aGlzLmNvdXJzZS54IC8gdGhpcy5zcGVlZCkgKiBkdDsgICAgXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLmNvdXJzZS55IC8gdGhpcy5zcGVlZCkgKiBkdDtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICAvL21ldGVvcnMgYXJlIGNoZWNraW5nIGZvciBjb2xsaXNpb25zIGluIEdhbWUuanNcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1pc3NpbGVJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueVxuICAgICk7XG4gIH1cbn0iLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlRGlzdGFuY2UgPSAocG9zMSwgcG9zMikgPT4ge1xuICAvL2RlYnVnZ2VyO1xuICBsZXQgeERpc3QgPSBNYXRoLmFicyhwb3MxLnggLSBwb3MyLngpO1xuICBsZXQgeURpc3QgPSBNYXRoLmFicyhwb3MxLnkgLSBwb3MyLnkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG59O1xuXG4vLyBjYWxjdWxhdGVEaXN0YW5jZSgpe1xuLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuLy8gICBsZXQgeURpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmRlc3RpbmF0aW9uLnkpO1xuLy8gICByZXR1cm4gTWF0aC5zcXJ0KCh4RGlzdCAqIHhEaXN0KSArICh5RGlzdCAqIHlEaXN0KSk7XG4vLyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==