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
      this.levelGoal = 10 + this.level * 5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWV0ZW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21pc3NpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiU0NSRUVOX1dJRFRIIiwiU0NSRUVOX0hFSUdIVCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSIsIkdhbWUiLCJoYW5kbGVDbGljayIsIkJhc2UiLCJwb3NpdGlvbiIsImJhc2VJbWFnZSIsImRyYXdQb3NpdGlvbiIsIngiLCJ5IiwiZHJhd1dpZHRoIiwiZHJhd0hlaWdodCIsInJhZGl1cyIsImRlc3Ryb3llZCIsImRyYXciLCJiaW5kIiwiZGVzdHJveUJhc2UiLCJkcmF3SW1hZ2UiLCJFeHBsb3Npb24iLCJzaXplIiwibWF4U2l6ZSIsImdyb3d0aFJhdGUiLCJ0aW1lciIsImV4cGxvc2lvbkltYWdlQXJyYXkiLCJpbWFnZVRvRHJhdyIsInN0YWdlIiwiZXhwbG9zaW9uUmFkaXVzIiwidXBkYXRlRXhwbG9zaW9uIiwiZHQiLCJjb250ZXh0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJtZXRlb3JBcnJheSIsImJhc2VBcnJheSIsIm1pc3NpbGVBcnJheSIsImV4cGxvc2lvbkFycmF5IiwibGFzdFRpbWUiLCJsZXZlbCIsImxldmVsTXVsdGlwbGllciIsImdhbWVEaXNwbGF5IiwiR2FtZURpc3BsYXkiLCJnYW1lTG9vcCIsInJ1bkdhbWUiLCJidWlsZE5ld01ldGVvcnMiLCJzZXR1cExldmVsIiwiYmFja2dyb3VuZCIsImUiLCJtaXNzaWxlcyIsInBvdGVudGlhbEJhc2VzIiwiZmlsdGVyIiwiYmFzZSIsImNsb3Nlc3RCYXNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJvZmZzZXRYIiwiaSIsImxlbmd0aCIsImRlc3RpbmF0aW9uIiwib2Zmc2V0WSIsImZpcmVNaXNzaWxlIiwicHVzaCIsIk1pc3NpbGUiLCJwb3NYIiwiZmxvb3IiLCJyYW5kb20iLCJNZXRlb3IiLCJiYXNlUG9zaXRpb24iLCJuZXh0TGV2ZWwiLCJ0aW1lc3RhbXAiLCJjaGVja0NvbnRpbnVlIiwiZWxhcHNlZEZyYW1lVGltZSIsImZvckVhY2giLCJtZXRlb3IiLCJzcGxpY2UiLCJpbmRleE9mIiwidXBkYXRlUG9zaXRpb24iLCJleHBsb3Npb24iLCJkaXN0YW5jZSIsImNhbGN1bGF0ZURpc3RhbmNlIiwiZGVzdHJveU1ldGVvciIsIm1pc3NpbGUiLCJjaGVja0V4cGxvc2lvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlc3Ryb3llZE1ldGVvckNvdW50IiwibGV2ZWxHb2FsIiwiZ2FtZUxvc3QiLCJmb250IiwiYmFzZXMiLCJiYXNlc0RpdiIsIm1pc3NpbGVzRGl2IiwibGV2ZWxEaXYiLCJkZXN0cm95ZWREaXYiLCJ1cGRhdGVEaXNwbGF5Iiwic2V0dXBMZXZlbERpc3BsYXkiLCJjYWxsYmFjayIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlVGV4dCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJpbm5lclRleHQiLCJzcGVlZCIsInNldFNwZWVkIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwibWV0ZW9ySW1hZ2UiLCJ0aHJvdHRsZXIiLCJkZWx0YVRpbWUiLCJjb3Vy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O0FBQ0EsV0FBS25CLEdBQUwsQ0FBU3NCLFNBQVQsQ0FDRSxLQUFLNkYsWUFEUCxFQUVFLEtBQUt6RyxRQUFMLENBQWNHLENBRmhCLEVBR0UsS0FBS0gsUUFBTCxDQUFjSSxDQUhoQjtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREg7QUFBQTtBQUFPLElBQU1zRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNnQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDL0M7QUFDQSxNQUFJQyxLQUFLLEdBQUc1RCxJQUFJLENBQUNDLEdBQUwsQ0FBU3lELElBQUksQ0FBQ3ZHLENBQUwsR0FBU3dHLElBQUksQ0FBQ3hHLENBQXZCLENBQVo7QUFDQSxNQUFJMEcsS0FBSyxHQUFHN0QsSUFBSSxDQUFDQyxHQUFMLENBQVN5RCxJQUFJLENBQUN0RyxDQUFMLEdBQVN1RyxJQUFJLENBQUN2RyxDQUF2QixDQUFaO0FBQ0EsU0FBTzRDLElBQUksQ0FBQzhELElBQUwsQ0FBV0YsS0FBSyxHQUFHQSxLQUFULEdBQW1CQyxLQUFLLEdBQUdBLEtBQXJDLENBQVA7QUFDRCxDQUxNLEMsQ0FPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7O0FDWEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuLy9jb25zdCBBcHAgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2FwcC5qc1wiKTtcbi8vIGNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWUuanNcIik7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTsgIFxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGNvbnN0IFNDUkVFTl9XSURUSCA9IDEyMDA7XG4gIGNvbnN0IFNDUkVFTl9IRUlHSFQgPSA4MDA7XG4gIGN0eC5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEg7XG4gIGN0eC5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVDtcblxuICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgU0NSRUVOX1dJRFRILCBTQ1JFRU5fSEVJR0hUKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lLmhhbmRsZUNsaWNrLCBmYWxzZSk7XG4gIC8vZ2FtZS5ydW5HYW1lKCk7XG59KTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNle1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZS1pbWFnZVwiKTtcbiAgICBcbiAgICAvL3RoaXMuZGVzdHJveWVkSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3Ryb3llZC1iYXNlXCIpO1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgIHk6IHBvc2l0aW9uLnlcbiAgICB9O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54KzIxLFxuICAgICAgeTogcG9zaXRpb24ueSs1MFxuICAgIH07IC8vbWFnaWMgbnVtYmVycyBmb3Igd2lkdGggYW5kIGhlaWdodCBhZGp1c3RpbmdcbiAgICB0aGlzLmRyYXdXaWR0aCA9IHRoaXMuYmFzZUltYWdlLndpZHRoO1xuICAgIHRoaXMuZHJhd0hlaWdodCA9IHRoaXMuYmFzZUltYWdlLmhlaWdodDtcbiAgICB0aGlzLnJhZGl1cyA9IDQwO1xuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3lCYXNlID0gdGhpcy5kZXN0cm95QmFzZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZGVzdHJveUJhc2UoKXtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5iYXNlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3Ryb3llZC1iYXNlXCIpO1xuICAgIHRoaXMuZHJhd1dpZHRoID0gMTAwO1xuICAgIHRoaXMuZHJhd0hlaWdodCA9IDEwMDtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbi54IC09IDIwO1xuICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnkrPTQwO1xuICB9XG5cbiAgZHJhdygpeyBcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmJhc2VJbWFnZSwgXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi54LCBcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLnksXG4gICAgICB0aGlzLmRyYXdXaWR0aCxcbiAgICAgIHRoaXMuZHJhd0hlaWdodFxuXG4gICAgICApO1xuICB9XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvc2lvbntcbiAgY29uc3RydWN0b3IoY3R4LCBwb3NpdGlvbil7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgeTogcG9zaXRpb24ueVxuICAgIH07IC8vNTAgaXMgbWFnaWMgbnVtYmVyIGNlbnRlclxuICAgIHRoaXMucG9zaXRpb249e1xuICAgICAgeDpwb3NpdGlvbi54LFxuICAgICAgeTpwb3NpdGlvbi55XG4gICAgfTtcblxuICAgIHRoaXMuc2l6ZSA9IDYwO1xuICAgIHRoaXMubWF4U2l6ZSA9IDE1MDtcbiAgICB0aGlzLmdyb3d0aFJhdGUgPSAodGhpcy5tYXhTaXplIC0gdGhpcy5zaXplKSAvIDQ7XG4gICAgLy9jYWxjdWxhdGlvbiBmb3IgaG93IGZhc3QgdG8gZ3Jvd1xuXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy50aW1lciA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25JbWFnZUFycmF5ID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTFcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0yXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tM1wiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTRcIildO1xuICAgIHRoaXMuaW1hZ2VUb0RyYXcgPSB0aGlzLmV4cGxvc2lvbkltYWdlQXJyYXlbMF07XG4gICAgdGhpcy5zdGFnZSA9IDA7XG4gICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSB0aGlzLnNpemUvMjtcblxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlRXhwbG9zaW9uID0gdGhpcy51cGRhdGVFeHBsb3Npb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZUV4cGxvc2lvbihkdCl7XG4gICAgZHQgPSBkdC8xMDAwO1xuICAgIHRoaXMudGltZXIrPWR0O1xuICAgIGlmICh0aGlzLnRpbWVyID49IDAuOCl7XG4gICAgICB0aGlzLnN0YWdlKys7XG5cbiAgICAgIHRoaXMudGltZXIgPTA7XG4gICAgfSAgICBcbiAgICBpZiAodGhpcy5zdGFnZSA8IDQpe1xuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCA9IHRoaXMucG9zaXRpb24ueCAtIHRoaXMuc2l6ZS8yO1xuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueSA9IHRoaXMucG9zaXRpb24ueSAtIHRoaXMuc2l6ZS8yO1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB0aGlzLnNpemUgKz0gdGhpcy5ncm93dGhSYXRlICogZHQ7ICBcbiAgICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gdGhpcy5zaXplIC8gMjsgICAgXG4gICAgfVxuICAgIFxuICB9XG5cbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheVt0aGlzLnN0YWdlXSxcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLngsXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLCB0aGlzLnNpemVcbiAgICApO1xuICB9XG59IiwiaW1wb3J0IE1ldGVvciBmcm9tIFwiLi9tZXRlb3JcIjtcbmltcG9ydCBNaXNzaWxlIGZyb20gXCIuL21pc3NpbGVcIjtcbmltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCBFeHBsb3Npb24gZnJvbSBcIi4vZXhwbG9zaW9uXCI7XG5pbXBvcnQgR2FtZURpc3BsYXkgZnJvbSBcIi4vZ2FtZURpc3BsYXlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZURpc3RhbmNlIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1le1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KXtcbiAgICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5zY3JlZW5XaWR0aCA9IHdpZHRoOyBcblxuICAgIHRoaXMubWV0ZW9yQXJyYXkgPSBbXTtcbiAgICB0aGlzLmJhc2VBcnJheSA9IFtdO1xuICAgIHRoaXMubWlzc2lsZUFycmF5ID0gW107XG4gICAgdGhpcy5leHBsb3Npb25BcnJheSA9IFtdO1xuXG4gICAgLy90aGlzLm1pc3NpbGVDb3VudCA9IDEwO1xuXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50aW1lciA9IDA7IC8vdXNlZCB0byBnZW5lcmF0ZSBuZXcgbWV0ZW9ycyBhdCBpbnRlcnZhbHNcbiAgICB0aGlzLmxldmVsID0gMDsgLy9jb250cm9scyBkaWZmaWN1bHR5IGFuZCBwYWNlIG9mIGdhbWVcbiAgICB0aGlzLmxldmVsTXVsdGlwbGllciA9IDAuODU7XG4gICAgXG4gICAgdGhpcy5nYW1lRGlzcGxheSA9IG5ldyBHYW1lRGlzcGxheSh0aGlzLmN0eCk7ICAgXG5cbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucnVuR2FtZSA9IHRoaXMucnVuR2FtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5idWlsZE5ld01ldGVvcnMgPSB0aGlzLmJ1aWxkTmV3TWV0ZW9ycy5iaW5kKHRoaXMpOyAgXG4gICAgdGhpcy5zZXR1cExldmVsID0gdGhpcy5zZXR1cExldmVsLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHt0aGlzLnNldHVwTGV2ZWwoKTt9LCBmYWxzZSk7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKXsgXG4gICAgXG4gICAgLy9jaGVjayBmb3IgbWlzc2lsZSBjb3VudFxuICAgIC8vZmluZCBjbG9zZXN0IGJhc2UgdG8gY2xpY2tcbiAgICAvL3NwYXduIG1pc3NpbGUgYXQgYmFzZSBoZWFkaW5nIHRvd2FyZHMgY2xpY2sgICAgXG4gICAgXG4gICAgaWYgKHRoaXMuZ2FtZURpc3BsYXkubWlzc2lsZXMgPiAwKXtcbiAgICAgIGxldCBwb3RlbnRpYWxCYXNlcyA9IHRoaXMuYmFzZUFycmF5LmZpbHRlcihiYXNlID0+IHtyZXR1cm4gIWJhc2UuZGVzdHJveWVkO30pO1xuICAgICAgbGV0IGNsb3Nlc3RCYXNlID0gcG90ZW50aWFsQmFzZXNbMF07XG4gICAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnBvc2l0aW9uLngpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb3RlbnRpYWxCYXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoTWF0aC5hYnMoZS5vZmZzZXRYIC0gcG90ZW50aWFsQmFzZXNbaV0ucG9zaXRpb24ueCkgPCBkaWZmZXJlbmNlKSB7XG4gICAgICAgICAgY2xvc2VzdEJhc2UgPSBwb3RlbnRpYWxCYXNlc1tpXTtcbiAgICAgICAgICBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UucG9zaXRpb24ueCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBkZXN0aW5hdGlvbiA9IHtcbiAgICAgICAgeDogZS5vZmZzZXRYLFxuICAgICAgICB5OiBlLm9mZnNldFlcbiAgICAgIH07XG4gICAgICB0aGlzLmdhbWVEaXNwbGF5LmZpcmVNaXNzaWxlKCk7XG4gICAgICB0aGlzLm1pc3NpbGVBcnJheS5wdXNoKG5ldyBNaXNzaWxlKGRlc3RpbmF0aW9uLCAoY2xvc2VzdEJhc2UucG9zaXRpb24pLCB0aGlzLmN0eCkpO1xuICAgIH0gICAgIFxuICB9XG5cbiAgc2V0dXBMZXZlbCgpe1xuICAgIC8vc2V0cyB1cCBlYWNoIGxldmVsICAgIFxuICAgIHRoaXMubWV0ZW9yQXJyYXkgPSBbXTtcbiAgICB0aGlzLmJhc2VBcnJheSA9IFtdO1xuICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkgPSBbXTtcbiAgICB0aGlzLm1pc3NpbGVBcnJheSA9IFtdO1xuICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICAvL3NldHVwIG1ldGVvcnMgPz8/bWVyZ2Ugd2l0aCBidWlsZE1ldGVvcnM/Pz8/XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoOCArICgyICogdGhpcy5sZXZlbCkpOyBpKyspIHtcbiAgICAgIGxldCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNjcmVlbldpZHRoKSk7XG4gICAgICB0aGlzLm1ldGVvckFycmF5LnB1c2gobmV3IE1ldGVvcihwb3NYLCB0aGlzLmN0eCkpO1xuICAgIH1cbiAgICAvL3NldHVwIGJhc2VzXG4gICAgbGV0IGJhc2VQb3NpdGlvbiA9IHtcbiAgICAgIHg6IDE1MCxcbiAgICAgIHk6IHRoaXMuc2NyZWVuSGVpZ2h0IC0gMTAwXG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICB0aGlzLmJhc2VBcnJheS5wdXNoKG5ldyBCYXNlKHRoaXMuY3R4LCBiYXNlUG9zaXRpb24pKTtcblxuICAgICAgYmFzZVBvc2l0aW9uLnggKz0gdGhpcy5zY3JlZW5XaWR0aCAvIDM7XG4gICAgfSAgXG4gICAgdGhpcy5sZXZlbE11bHRpcGxpZXIgKz0gMC4xNTtcbiAgICB0aGlzLnJ1bkdhbWUoKTtcbiAgfVxuXG4gIHJ1bkdhbWUoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLnNjcmVlbldpZHRoLCB0aGlzLnNjcmVlbkhlaWdodCk7XG4gICAgdGhpcy5sYXN0VGltZSArPSAyNTAwO1xuICAgIHRoaXMuZ2FtZURpc3BsYXkubmV4dExldmVsKHRoaXMuZ2FtZUxvb3ApO1xuICB9XG5cbiAgZ2FtZUxvb3AodGltZXN0YW1wKXsgIFxuICAgIGlmICh0aGlzLmdhbWVEaXNwbGF5LmNoZWNrQ29udGludWUoKSl7XG4gICAgICAvL2dhbWUgc3RpbGwgcHJvZ3Jlc3NpbmcsIHBsYXllciBoYXMgbmVpdGhlciB3b24gb3IgbG9zdFxuICAgICAgbGV0IGVsYXBzZWRGcmFtZVRpbWUgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgIC8vZGVidWdnZXI7XG4gICAgICB0aGlzLnRpbWVyICs9IGVsYXBzZWRGcmFtZVRpbWUgLyAxMDAwO1xuXG4gICAgICAvL2NvbnN0IGxldmVsTXVsdGlwbGllciA9IDEuMDtcblxuICAgICAgaWYgKHRoaXMudGltZXIgPj0gMy4wKSB7XG4gICAgICAgIHRoaXMuYnVpbGROZXdNZXRlb3JzKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwKTtcblxuICAgICAgdGhpcy5tZXRlb3JBcnJheS5mb3JFYWNoKG1ldGVvciA9PiB7XG4gICAgICAgIC8vZmlyc3QsIG1vdmUgdGhlIG1ldGVvclxuICAgICAgICBpZiAobWV0ZW9yLnBvc2l0aW9uLnkgPj0gdGhpcy5zY3JlZW5IZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWV0ZW9yLnVwZGF0ZVBvc2l0aW9uKHRoaXMubGV2ZWxNdWx0aXBsaWVyLCBlbGFwc2VkRnJhbWVUaW1lIC8gMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBwb3Mgb2YgbWV0ZW9yIGFnYWluc3QgZXhwbG9zaW9ucywgYW5kIGdyb3VuZCBcbiAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5mb3JFYWNoKGV4cGxvc2lvbiA9PiB7XG4gICAgICAgICAgbGV0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoZXhwbG9zaW9uLnBvc2l0aW9uLCBtZXRlb3IucG9zaXRpb24pO1xuICAgICAgICAgIC8vIGlmIG1ldGVvciBpbiByYWRpdXMsIGRlc3Ryb3kgaXQgYW5kIGNyZWF0ZSBleHBsb3Npb25cbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gZXhwbG9zaW9uLmV4cGxvc2lvblJhZGl1cyArIG1ldGVvci5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBtZXRlb3IucG9zaXRpb24pKTtcbiAgICAgICAgICAgIHRoaXMubWV0ZW9yQXJyYXkuc3BsaWNlKHRoaXMubWV0ZW9yQXJyYXkuaW5kZXhPZihtZXRlb3IpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZGVzdHJveU1ldGVvcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iYXNlQXJyYXkuZm9yRWFjaChiYXNlID0+IHtcbiAgICAgICAgICBiYXNlLmRyYXcoKTtcbiAgICAgICAgICBpZiAoYmFzZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShtZXRlb3IucG9zaXRpb24sIGJhc2UucG9zaXRpb24pO1xuICAgICAgICAgIGlmIChkaXN0YW5jZSA8PSBiYXNlLnJhZGl1cyArIG1ldGVvci5yYWRpdXMpIHtcbiAgICAgICAgICAgIGJhc2UuZGVzdHJveUJhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZGVzdHJveUJhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBiYXNlLnBvc2l0aW9uKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1pc3NpbGVBcnJheS5mb3JFYWNoKG1pc3NpbGUgPT4ge1xuICAgICAgICAvL2NoZWNrIGZvciBleHBsb3Npb25cbiAgICAgICAgaWYgKG1pc3NpbGUuY2hlY2tFeHBsb3Npb24oY2FsY3VsYXRlRGlzdGFuY2UobWlzc2lsZS5wb3NpdGlvbiwgbWlzc2lsZS5kZXN0aW5hdGlvbikpKSB7XG4gICAgICAgICAgdGhpcy5leHBsb3Npb25BcnJheS5wdXNoKG5ldyBFeHBsb3Npb24odGhpcy5jdHgsIG1pc3NpbGUucG9zaXRpb24pKTtcbiAgICAgICAgICB0aGlzLm1pc3NpbGVBcnJheS5zcGxpY2UodGhpcy5taXNzaWxlQXJyYXkuaW5kZXhPZihtaXNzaWxlKSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWlzc2lsZS51cGRhdGVQb3NpdGlvbigoZWxhcHNlZEZyYW1lVGltZSAvIDEwMDApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuZm9yRWFjaChleHBsb3Npb24gPT4ge1xuICAgICAgICBpZiAoZXhwbG9zaW9uLnN0YWdlID49IDQpIHtcbiAgICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnNwbGljZSh0aGlzLmV4cGxvc2lvbkFycmF5LmluZGV4T2YoZXhwbG9zaW9uKSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhwbG9zaW9uLnVwZGF0ZUV4cGxvc2lvbihlbGFwc2VkRnJhbWVUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTsgICBcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ2FtZURpc3BsYXkuZGVzdHJveWVkTWV0ZW9yQ291bnQgPj0gdGhpcy5nYW1lRGlzcGxheS5sZXZlbEdvYWwpe1xuICAgICAgICAvL3BsYXllciBwcm9ncmVzcyB0byBuZXh0IGxldmVsXG4gICAgICAgIHRoaXMuc2V0dXBMZXZlbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGxheWVyIGxvc3RcbiAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nYW1lTG9zdCgpO1xuICAgICAgfVxuICAgIH0gICAgXG4gIH1cblxuICBidWlsZE5ld01ldGVvcnMoKSB7XG4gICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5sZXZlbCAqIDI7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lRGlzcGxheXtcbiAgY29uc3RydWN0b3IoY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgXG4gICAgdGhpcy5jdHguZm9udCA9IFwiMjRwdCBzYW5zIHNlcmlmXCI7XG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5taXNzaWxlcyA9IDEwO1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPSAwO1xuICAgIHRoaXMubGV2ZWxHb2FsID0gMTU7XG5cbiAgICB0aGlzLmJhc2VzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm8tYmFzZXNcIik7XG4gICAgdGhpcy5taXNzaWxlc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLW1pc3NpbGVzXCIpO1xuICAgIHRoaXMubGV2ZWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW5mby1sZXZlbFwiKTtcbiAgICB0aGlzLmRlc3Ryb3llZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvLWRlc3Ryb3llZFwiKTtcblxuICAgIHRoaXMuY2hlY2tDb250aW51ZSA9IHRoaXMuY2hlY2tDb250aW51ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveUJhc2UgPSB0aGlzLmRlc3Ryb3lCYXNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ID0gdGhpcy51cGRhdGVEaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXh0TGV2ZWwgPSB0aGlzLm5leHRMZXZlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveU1ldGVvciA9IHRoaXMuZGVzdHJveU1ldGVvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2FtZUxvc3QgPSB0aGlzLmdhbWVMb3N0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXR1cExldmVsRGlzcGxheSA9IHRoaXMuc2V0dXBMZXZlbERpc3BsYXkuYmluZCh0aGlzKTtcblxuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9XG5cbiAgc2V0dXBMZXZlbERpc3BsYXkoKXtcbiAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgdGhpcy5taXNzaWxlcyA9ICg4ICsgKHRoaXMubGV2ZWwpKTsgICAgXG4gICAgdGhpcy5iYXNlcyA9IDM7XG4gICAgdGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudCA9IDA7XG4gICAgdGhpcy5sZXZlbEdvYWwgPSAoMTAgKyAodGhpcy5sZXZlbCAqIDUpKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuXG4gIG5leHRMZXZlbChjYWxsYmFjayl7XG4gICAgLy9sZXZlbCBzZXR1cCBsb2dpYyAgICBcbiAgICB0aGlzLnNldHVwTGV2ZWxEaXNwbGF5KCk7IFxuXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCg1MDAsIDMwMCwgMjUwLCAyMDApO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgTGV2ZWwgJHt0aGlzLmxldmVsfWAsIDU3NSw0MDApO1xuICAgIC8vbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgY2FsbGJhY2soMjUwMCk7IH0sIDI1MDApOyAgICBcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXkoKXtcbiAgICB0aGlzLmxldmVsRGl2LmlubmVyVGV4dCA9IGBMZXZlbDogJHt0aGlzLmxldmVsfWA7XG4gICAgdGhpcy5iYXNlc0Rpdi5pbm5lclRleHQgPSBgQmFzZXM6ICR7dGhpcy5iYXNlc31gO1xuICAgIHRoaXMubWlzc2lsZXNEaXYuaW5uZXJUZXh0ID0gYE1pc3NpbGVzOiAke3RoaXMubWlzc2lsZXN9YDtcbiAgICB0aGlzLmRlc3Ryb3llZERpdi5pbm5lclRleHQgPSBgRGVzdHJveWVkIE1ldGVvcnM6ICR7dGhpcy5kZXN0cm95ZWRNZXRlb3JDb3VudH0gb2YgJHt0aGlzLmxldmVsR29hbH1gO1xuICB9XG5cbiAgZmlyZU1pc3NpbGUoKXtcbiAgICB0aGlzLm1pc3NpbGVzIC09IDE7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH1cblxuICBkZXN0cm95QmFzZSgpe1xuICAgIHRoaXMuYmFzZXMgLT0gMTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuXG4gIGRlc3Ryb3lNZXRlb3IoKXtcbiAgICB0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ICs9IDE7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgLy8gaWYgKHRoaXMuZGVzdHJveWVkTWV0ZW9yQ291bnQgPj0gdGhpcy5sZXZlbEdvYWwpe1xuICAgIC8vICAgdGhpcy5cbiAgICAvLyB9XG5cbiAgfVxuXG4gIGdhbWVMb3N0KCl7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgzNTAsIDMwMCwgNjUwLCAyMDApO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgRWFydGggaGFzIGJlZW4gZGVzdHJveWVkLCB3aG9vcHMhYCwgNDUwLCA0MDApO1xuICB9XG5cbiAgY2hlY2tDb250aW51ZSgpe1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZE1ldGVvckNvdW50ID49IHRoaXMubGV2ZWxHb2FsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMuYmFzZXMgPjAgKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRlb3J7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiAtMTBcbiAgICB9O1xuICAgIC8vIHRoaXMuZHJhd1Bvc2l0aW9uID0ge1xuICAgIC8vICAgeDogdGhpcy5wb3NpdGlvbi54IC0gMTAsXG4gICAgLy8gICB5OiB0aGlzLnBvc2l0aW9uLnkgLSAxMFxuICAgIC8vIH07XG4gICAgdGhpcy5zcGVlZCA9IDU1ICogdGhpcy5zZXRTcGVlZCgpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICB0aGlzLnJhZGl1cyA9IDEwO1xuXG4gICAgdGhpcy5tZXRlb3JJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWV0ZW9yLTFcIik7XG5cbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0U3BlZWQoKXtcbiAgICAvL2hlbHBzIHNldCBhbiBpbnRpYWwgcmFuZG9tIHJhbmdlIG9mIHNwZWVkc1xuICAgIGxldCB0aHJvdHRsZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh0aHJvdHRsZXIgPD0gMC4yNSkgcmV0dXJuIDAuNzU7XG4gICAgaWYgKHRocm90dGxlciA+PSAwLjc1KSByZXR1cm4gMS4yNTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHNldERpcmVjdGlvbigpe1xuICAgIC8vc2V0IFJhbmRvbSB4IGRpcmVjdGlvblxuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAoeCA+IDAuNSkgeCAqPSAtMTtcbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGxldmVsTXVsdGlwbGllciwgZGVsdGFUaW1lKXtcbiAgICAvL2RlYnVnZ2VyO1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLmRpcmVjdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKGxldmVsTXVsdGlwbGllciAqIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpOyAgXG4gICAgLy9kZWJ1Z2dlcjsgIFxuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cblxuICBkcmF3KCl7XG4gICAgLy8gdGhpcy5jdHguYmVnaW5QYXRoKCk7ICAgIFxuICAgIC8vIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAvLyB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5tZXRlb3JJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueC0xMCxcbiAgICAgIHRoaXMucG9zaXRpb24ueS0xMCxcbiAgICAgIDIwLFxuICAgICAgMjBcbiAgICApO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lsZXtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24sIHBvc2l0aW9uLCBjdHgpe1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCArIDEwLFxuICAgICAgeTogcG9zaXRpb24ueSAtIDEwXG4gICAgfTtcblxuICAgIHRoaXMuY291cnNlID0ge1xuICAgICAgeDogKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCksXG4gICAgICB5OiAodGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55KVxuICAgIH07XG4gICAgdGhpcy5zcGVlZCA9IDAuODtcbiAgICB0aGlzLnJhZGl1cyA9IDU7XG4gICAgdGhpcy5leHBsb3Npb25SYWRpdXMgPSAzO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5taXNzaWxlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllbGxvdy1taXNzaWxlXCIpOyAgICBcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIC8vdGhpcy5jYWxjdWxhdGVEaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrRXhwbG9zaW9uID0gdGhpcy5jaGVja0V4cGxvc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2hlY2tFeHBsb3Npb24oZGlzdGFuY2Upe1xuICAgIC8vbGV0IGRpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZSgpOyAgICBcbiAgICBpZiAoZGlzdGFuY2UgPD0gdGhpcy5leHBsb3Npb25SYWRpdXMpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZURpc3RhbmNlKCl7XG4gIC8vICAgbGV0IHhEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi54IC0gdGhpcy5kZXN0aW5hdGlvbi54KTtcbiAgLy8gICBsZXQgeURpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmRlc3RpbmF0aW9uLnkpO1xuICAvLyAgIHJldHVybiBNYXRoLnNxcnQoKHhEaXN0KnhEaXN0KSArICh5RGlzdCp5RGlzdCkpO1xuICAvLyB9XG5cbiAgdXBkYXRlUG9zaXRpb24oZHQpe1xuICAgIHRoaXMucG9zaXRpb24ueCArPSAodGhpcy5jb3Vyc2UueCAvIHRoaXMuc3BlZWQpICogZHQ7ICAgIFxuICAgIHRoaXMucG9zaXRpb24ueSArPSAodGhpcy5jb3Vyc2UueSAvIHRoaXMuc3BlZWQpICogZHQ7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBkcmF3KCl7XG4gICAgLy9tZXRlb3JzIGFyZSBjaGVja2luZyBmb3IgY29sbGlzaW9ucyBpbiBHYW1lLmpzXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5taXNzaWxlSW1hZ2UsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnlcbiAgICApO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZURpc3RhbmNlID0gKHBvczEsIHBvczIpID0+IHtcbiAgLy9kZWJ1Z2dlcjtcbiAgbGV0IHhEaXN0ID0gTWF0aC5hYnMocG9zMS54IC0gcG9zMi54KTtcbiAgbGV0IHlEaXN0ID0gTWF0aC5hYnMocG9zMS55IC0gcG9zMi55KTtcbiAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QgKiB4RGlzdCkgKyAoeURpc3QgKiB5RGlzdCkpO1xufTtcblxuLy8gY2FsY3VsYXRlRGlzdGFuY2UoKXtcbi8vICAgbGV0IHhEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi54IC0gdGhpcy5kZXN0aW5hdGlvbi54KTtcbi8vICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gdGhpcy5kZXN0aW5hdGlvbi55KTtcbi8vICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QgKiB4RGlzdCkgKyAoeURpc3QgKiB5RGlzdCkpO1xuLy8gfSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=