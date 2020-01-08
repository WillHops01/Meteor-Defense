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


var App = __webpack_require__(/*! ./scripts/app.js */ "./src/scripts/app.js"); // const Game = require("./scripts/game.js");



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

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// function App(){
//   console.log("apped");
// }
// module.exports = App;

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
    this.baseImage = document.getElementById("base-image");
    this.drawPosition = {
      x: position.x,
      y: position.y
    };
    this.position = {
      x: position.x + 21,
      y: position.y + 50
    }; //magic numbers for width and height adjusting

    this.radius = 40;
    this.draw = this.draw.bind(this);
  }

  _createClass(Base, [{
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.baseImage, this.drawPosition.x, this.drawPosition.y);
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
      x: position.x - 60,
      y: position.y - 60
    }; //50 is magic number center

    this.position = {
      x: position.x,
      y: position.y
    };
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
      //debugger;
      this.timer += dt / 1000;

      if (this.timer >= 0.8) {
        this.stage++;
        this.timer = 0;
      }

      if (this.stage < 4) {
        this.draw();
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.explosionImageArray[this.stage], this.drawPosition.x, this.drawPosition.y, 120, 120);
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
/* harmony import */ var _testobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testobject */ "./src/scripts/testobject.js");
/* harmony import */ var _testobject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_testobject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meteor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meteor */ "./src/scripts/meteor.js");
/* harmony import */ var _missile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./missile */ "./src/scripts/missile.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./src/scripts/base.js");
/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explosion */ "./src/scripts/explosion.js");
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
    this.explosionArray = [];
    this.missileCount = 10;
    this.lastTime = 0;
    this.timer = 0; //used to generate new meteors at intervals

    this.level = 1; //controls difficulty and pace of game

    this.background = document.getElementById("background");
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
      if (this.missileCount > 0) {
        var closestBase = this.baseArray[0];
        var difference = Math.abs(e.offsetX - closestBase.position.x);

        for (var i = 1; i < this.baseArray.length; i++) {
          if (Math.abs(e.offsetX - this.baseArray[i].position.x) < difference) {
            closestBase = this.baseArray[i];
            difference = Math.abs(e.offsetX - closestBase.position.x);
          }
        }

        var destination = {
          x: e.offsetX,
          y: e.offsetY
        };
        this.missileArray.push(new _missile__WEBPACK_IMPORTED_MODULE_2__["default"](destination, closestBase.position, this.ctx));
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
        this.meteorArray.push(new _meteor__WEBPACK_IMPORTED_MODULE_1__["default"](posX, this.ctx));
      } //setup bases


      var basePosition = {
        x: 150,
        y: this.screenHeight - 100
      };

      for (var _i = 0; _i < startingBases; _i++) {
        this.baseArray.push(new _base__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx, basePosition));
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
            _this.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_4__["default"](_this.ctx, meteor.position));

            _this.meteorArray.splice(_this.meteorArray.indexOf(meteor), 1);

            return;
          }
        });

        _this.baseArray.forEach(function (base) {
          var distance = Object(_util__WEBPACK_IMPORTED_MODULE_5__["calculateDistance"])(meteor.position, base.position);

          if (distance <= base.radius + meteor.radius) {
            console.log("base destroyed");
          }
        });
      });
      this.missileArray.forEach(function (missile) {
        //check for explosion
        if (missile.checkExplosion(Object(_util__WEBPACK_IMPORTED_MODULE_5__["calculateDistance"])(missile.position, missile.destination))) {
          _this.explosionArray.push(new _explosion__WEBPACK_IMPORTED_MODULE_4__["default"](_this.ctx, missile.position));

          _this.missileArray.splice(_this.missileArray.indexOf(missile), 1);
        } else {
          missile.updatePosition(elapsedFrameTime / 100);
        }
      });
      this.explosionArray.forEach(function (explosion) {
        if (explosion.stage >= 4) {
          _this.explosionArray.splice(_this.explosionArray.indexOf(explosion), 1);
        } else {
          explosion.updateExplosion(elapsedFrameTime);
        }
      });
      this.baseArray.forEach(function (base) {
        base.draw();
      });
      requestAnimationFrame(this.gameLoop);
    }
  }, {
    key: "buildNewMeteors",
    value: function buildNewMeteors() {
      for (var i = 0; i < this.level * 2; i++) {
        var posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
        this.meteorArray.push(new _meteor__WEBPACK_IMPORTED_MODULE_1__["default"](posX, this.ctx));
      }
    }
  }]);

  return Game;
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
    };
    this.speed = 7 * this.setSpeed();
    this.direction = this.setDirection();
    this.radius = 10;
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
      this.ctx.beginPath();
      this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      this.ctx.fill();
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
    this.speed = 10;
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

/***/ "./src/scripts/testobject.js":
/*!***********************************!*\
  !*** ./src/scripts/testobject.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// class TestObject{
//   constructor(screenWidth, screenHeight){
//     this.width = 150;
//     this.height = 30;
//     this.position = {
//       x: screenWidth/2 - this.width/2,
//       y: screenHeight - this.height - 10
//     };
//   }
//   draw(ctx){
//     ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
//   }
//   update(deltaTime)
//   {
//     if(!deltaTime) return;
//     console.log(deltaTime);
//     this.position.x += 5 / deltaTime;
//   }
// }
// export default TestObject;
// let a = [1,2,3];
// a.forEach(el => {
//   if (el === 2){
//     a.splice(a.indexOf(el),1);
//   } else {
//     console.log(el);
//   }
// });
// console.log(a);
// class Test{
//   constructor(){
//     this.variable = 1;
//   }
//   buildObj(){
//     return new Test();
//   }
// }
// // let test = Test.buildObj();
// // let test = new Test();
// // let otherTest = test.buildObj();
// let otherTest = new Test().buildObj();
// console.log(otherTest.variable);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2V4cGxvc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ldGVvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9taXNzaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3Rlc3RvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQXBwIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIlNDUkVFTl9XSURUSCIsIlNDUkVFTl9IRUlHSFQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWUiLCJHYW1lIiwiaGFuZGxlQ2xpY2siLCJydW5HYW1lIiwiQmFzZSIsInBvc2l0aW9uIiwiYmFzZUltYWdlIiwiZHJhd1Bvc2l0aW9uIiwieCIsInkiLCJyYWRpdXMiLCJkcmF3IiwiYmluZCIsImRyYXdJbWFnZSIsIkV4cGxvc2lvbiIsInRpbWVyIiwiZXhwbG9zaW9uSW1hZ2VBcnJheSIsImltYWdlVG9EcmF3Iiwic3RhZ2UiLCJleHBsb3Npb25SYWRpdXMiLCJ1cGRhdGVFeHBsb3Npb24iLCJkdCIsImNvbnRleHQiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5XaWR0aCIsIm1ldGVvckFycmF5IiwiYmFzZUFycmF5IiwibWlzc2lsZUFycmF5IiwiZXhwbG9zaW9uQXJyYXkiLCJtaXNzaWxlQ291bnQiLCJsYXN0VGltZSIsImxldmVsIiwiYmFja2dyb3VuZCIsImdhbWVMb29wIiwiYnVpbGROZXdNZXRlb3JzIiwiZSIsImNsb3Nlc3RCYXNlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJvZmZzZXRYIiwiaSIsImxlbmd0aCIsImRlc3RpbmF0aW9uIiwib2Zmc2V0WSIsInB1c2giLCJNaXNzaWxlIiwic3RhcnRpbmdNZXRlb3JzIiwic3RhcnRpbmdCYXNlcyIsInBvc1giLCJmbG9vciIsInJhbmRvbSIsIk1ldGVvciIsImJhc2VQb3NpdGlvbiIsInRpbWVzdGFtcCIsImVsYXBzZWRGcmFtZVRpbWUiLCJsZXZlbE11bHRpcGxpZXIiLCJmb3JFYWNoIiwibWV0ZW9yIiwic3BsaWNlIiwiaW5kZXhPZiIsInVwZGF0ZVBvc2l0aW9uIiwiZXhwbG9zaW9uIiwiZGlzdGFuY2UiLCJjYWxjdWxhdGVEaXN0YW5jZSIsImJhc2UiLCJjb25zb2xlIiwibG9nIiwibWlzc2lsZSIsImNoZWNrRXhwbG9zaW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3BlZWQiLCJzZXRTcGVlZCIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsInRocm90dGxlciIsImRlbHRhVGltZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbCIsImNvdXJzZSIsIm1pc3NpbGVJbWFnZSIsInBvczEiLCJwb3MyIiwieERpc3QiLCJ5RGlzdCIsInNxcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FB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Ozs7Ozs7O0FDakRIO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBTyxJQUFNdUQsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDbUIsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQy9DO0FBQ0EsTUFBSUMsS0FBSyxHQUFHL0MsSUFBSSxDQUFDQyxHQUFMLENBQVM0QyxJQUFJLENBQUMzRSxDQUFMLEdBQVM0RSxJQUFJLENBQUM1RSxDQUF2QixDQUFaO0FBQ0EsTUFBSThFLEtBQUssR0FBR2hELElBQUksQ0FBQ0MsR0FBTCxDQUFTNEMsSUFBSSxDQUFDMUUsQ0FBTCxHQUFTMkUsSUFBSSxDQUFDM0UsQ0FBdkIsQ0FBWjtBQUNBLFNBQU82QixJQUFJLENBQUNpRCxJQUFMLENBQVdGLEtBQUssR0FBR0EsS0FBVCxHQUFtQkMsS0FBSyxHQUFHQSxLQUFyQyxDQUFQO0FBQ0QsQ0FMTSxDLENBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ1hBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmNvbnN0IEFwcCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYXBwLmpzXCIpO1xuLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpOyAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIFxuICBjb25zdCBTQ1JFRU5fV0lEVEggPSAxMjAwO1xuICBjb25zdCBTQ1JFRU5fSEVJR0hUID0gODAwO1xuICBjdHguY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIO1xuICBjdHguY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQ7XG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgsIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5oYW5kbGVDbGljaywgZmFsc2UpO1xuICBnYW1lLnJ1bkdhbWUoKTtcbn0pOyIsIi8vIGZ1bmN0aW9uIEFwcCgpe1xuLy8gICBjb25zb2xlLmxvZyhcImFwcGVkXCIpO1xuLy8gfVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNle1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvc2l0aW9uKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJhc2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZS1pbWFnZVwiKTtcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICB5OiBwb3NpdGlvbi55XG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCsyMSxcbiAgICAgIHk6IHBvc2l0aW9uLnkrNTBcbiAgICB9OyAvL21hZ2ljIG51bWJlcnMgZm9yIHdpZHRoIGFuZCBoZWlnaHQgYWRqdXN0aW5nXG4gICAgdGhpcy5yYWRpdXMgPSA0MDtcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRyYXcoKXsgICAgXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5iYXNlSW1hZ2UsIFxuICAgICAgdGhpcy5kcmF3UG9zaXRpb24ueCwgXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55XG4gICAgICApO1xuICB9XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvc2lvbntcbiAgY29uc3RydWN0b3IoY3R4LCBwb3NpdGlvbil7XG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NpdGlvbi54LTYwLFxuICAgICAgeTogcG9zaXRpb24ueS02MFxuICAgIH07IC8vNTAgaXMgbWFnaWMgbnVtYmVyIGNlbnRlclxuICAgIHRoaXMucG9zaXRpb249e1xuICAgICAgeDpwb3NpdGlvbi54LFxuICAgICAgeTpwb3NpdGlvbi55XG4gICAgfTtcblxuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMudGltZXIgPSAwO1xuICAgIHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheSA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi0xXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3Npb24tMlwiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9zaW9uLTNcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvc2lvbi00XCIpXTtcbiAgICB0aGlzLmltYWdlVG9EcmF3ID0gdGhpcy5leHBsb3Npb25JbWFnZUFycmF5WzBdO1xuICAgIHRoaXMuc3RhZ2UgPSAwO1xuICAgIHRoaXMuZXhwbG9zaW9uUmFkaXVzID0gNjM7IFxuXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVFeHBsb3Npb24gPSB0aGlzLnVwZGF0ZUV4cGxvc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlRXhwbG9zaW9uKGR0KXtcbiAgICAvL2RlYnVnZ2VyO1xuICAgIHRoaXMudGltZXIrPWR0LzEwMDA7XG4gICAgaWYgKHRoaXMudGltZXIgPj0gMC44KXtcbiAgICAgIHRoaXMuc3RhZ2UrKztcbiAgICAgIHRoaXMudGltZXIgPTA7XG4gICAgfSAgICBcbiAgICBpZiAodGhpcy5zdGFnZSA8IDQpe1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuZXhwbG9zaW9uSW1hZ2VBcnJheVt0aGlzLnN0YWdlXSxcbiAgICAgIHRoaXMuZHJhd1Bvc2l0aW9uLngsXG4gICAgICB0aGlzLmRyYXdQb3NpdGlvbi55LFxuICAgICAgMTIwLCAxMjBcbiAgICApO1xuICB9XG59IiwiaW1wb3J0IFRlc3RPYmplY3QgZnJvbSBcIi4vdGVzdG9iamVjdFwiO1xuaW1wb3J0IE1ldGVvciBmcm9tIFwiLi9tZXRlb3JcIjtcbmltcG9ydCBNaXNzaWxlIGZyb20gXCIuL21pc3NpbGVcIjtcbmltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCBFeHBsb3Npb24gZnJvbSBcIi4vZXhwbG9zaW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVEaXN0YW5jZSB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgd2lkdGgsIGhlaWdodCl7XG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xuICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuc2NyZWVuV2lkdGggPSB3aWR0aDsgXG5cbiAgICB0aGlzLm1ldGVvckFycmF5ID0gW107XG4gICAgdGhpcy5iYXNlQXJyYXkgPSBbXTtcbiAgICB0aGlzLm1pc3NpbGVBcnJheSA9IFtdO1xuICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkgPSBbXTtcblxuICAgIHRoaXMubWlzc2lsZUNvdW50ID0gMTA7XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDsgLy91c2VkIHRvIGdlbmVyYXRlIG5ldyBtZXRlb3JzIGF0IGludGVydmFsc1xuICAgIHRoaXMubGV2ZWwgPSAxOyAvL2NvbnRyb2xzIGRpZmZpY3VsdHkgYW5kIHBhY2Ugb2YgZ2FtZVxuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcblxuICAgIHRoaXMuZ2FtZUxvb3AgPSB0aGlzLmdhbWVMb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ydW5HYW1lID0gdGhpcy5ydW5HYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmJ1aWxkTmV3TWV0ZW9ycyA9IHRoaXMuYnVpbGROZXdNZXRlb3JzLmJpbmQodGhpcyk7ICBcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpeyBcbiAgICBcbiAgICAvL2NoZWNrIGZvciBtaXNzaWxlIGNvdW50XG4gICAgLy9maW5kIGNsb3Nlc3QgYmFzZSB0byBjbGlja1xuICAgIC8vc3Bhd24gbWlzc2lsZSBhdCBiYXNlIGhlYWRpbmcgdG93YXJkcyBjbGljayAgICBcbiAgICBcbiAgICBpZiAodGhpcy5taXNzaWxlQ291bnQgPiAwKXtcblxuICAgICAgbGV0IGNsb3Nlc3RCYXNlID0gdGhpcy5iYXNlQXJyYXlbMF07XG4gICAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGUub2Zmc2V0WCAtIGNsb3Nlc3RCYXNlLnBvc2l0aW9uLngpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJhc2VBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoTWF0aC5hYnMoZS5vZmZzZXRYIC0gdGhpcy5iYXNlQXJyYXlbaV0ucG9zaXRpb24ueCkgPCBkaWZmZXJlbmNlKSB7XG4gICAgICAgICAgY2xvc2VzdEJhc2UgPSB0aGlzLmJhc2VBcnJheVtpXTtcbiAgICAgICAgICBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZS5vZmZzZXRYIC0gY2xvc2VzdEJhc2UucG9zaXRpb24ueCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBkZXN0aW5hdGlvbiA9IHtcbiAgICAgICAgeDogZS5vZmZzZXRYLFxuICAgICAgICB5OiBlLm9mZnNldFlcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHRoaXMubWlzc2lsZUFycmF5LnB1c2gobmV3IE1pc3NpbGUoZGVzdGluYXRpb24sIChjbG9zZXN0QmFzZS5wb3NpdGlvbiksIHRoaXMuY3R4KSk7XG4gICAgfSAgICAgXG4gIH1cblxuICBydW5HYW1lKCl7XG4gICAgLy9pbml0aWFsIHNldHVwIGxvZ2ljXG4gICAgLy90aGVuLCBzdGFydCBnYW1lTG9vcFxuICAgIGxldCBzdGFydGluZ01ldGVvcnMgPSAxMDtcbiAgICBsZXQgc3RhcnRpbmdCYXNlcyA9IDM7XG4gICAgLy9zZXR1cCBtZXRlb3JzID8/P21lcmdlIHdpdGggYnVpbGRNZXRlb3JzPz8/P1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRpbmdNZXRlb3JzOyBpKyspe1xuICAgICAgbGV0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuc2NyZWVuV2lkdGgpKTtcbiAgICAgIHRoaXMubWV0ZW9yQXJyYXkucHVzaChuZXcgTWV0ZW9yKHBvc1gsIHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIC8vc2V0dXAgYmFzZXNcbiAgICBsZXQgYmFzZVBvc2l0aW9uID0ge1xuICAgICAgeDogMTUwLFxuICAgICAgeTogdGhpcy5zY3JlZW5IZWlnaHQgLSAxMDBcbiAgICB9O1xuICAgIFxuICAgIGZvciAobGV0IGkgPTA7IGkgPCBzdGFydGluZ0Jhc2VzOyBpKyspeyAgICAgIFxuICAgICAgdGhpcy5iYXNlQXJyYXkucHVzaChuZXcgQmFzZSh0aGlzLmN0eCwgYmFzZVBvc2l0aW9uKSk7ICAgICAgXG4gICAgICBiYXNlUG9zaXRpb24ueCArPSB0aGlzLnNjcmVlbldpZHRoLzM7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUxvb3AoMCk7XG4gIH1cblxuICBnYW1lTG9vcCh0aW1lc3RhbXApeyAgICBcbiAgICAvL3doaWxlIG5vdCBsb3N0XG5cbiAgICAgIC8vdXBkYXRlIG1ldGVvcmFycmF5XG4gICAgICAvL3JlZHJhdyBtZXRlb3JzXG4gICAgICAvL2xpc3RlbiBmb3IgY2xpY2tzXG4gICAgICAvL3JlcGVhdFxuXG4gICAgLy9cbiAgICBsZXQgZWxhcHNlZEZyYW1lVGltZSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICB0aGlzLnRpbWVyKz1lbGFwc2VkRnJhbWVUaW1lLzEwMDA7ICAgIFxuXG4gICAgY29uc3QgbGV2ZWxNdWx0aXBsaWVyID0gMS4wOyAgXG5cbiAgICBpZiAodGhpcy50aW1lciA+PSAzLjApe1xuICAgICAgdGhpcy5idWlsZE5ld01ldGVvcnMoKTtcbiAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH0gICBcblxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwKTtcblxuICAgIHRoaXMubWV0ZW9yQXJyYXkuZm9yRWFjaChtZXRlb3IgPT57XG4gICAgICAvL2ZpcnN0LCBtb3ZlIHRoZSBtZXRlb3JcbiAgICAgIGlmIChtZXRlb3IucG9zaXRpb24ueSA+PSB0aGlzLnNjcmVlbkhlaWdodCl7XG4gICAgICAgIHRoaXMubWV0ZW9yQXJyYXkuc3BsaWNlKHRoaXMubWV0ZW9yQXJyYXkuaW5kZXhPZihtZXRlb3IpLDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0ZW9yLnVwZGF0ZVBvc2l0aW9uKGxldmVsTXVsdGlwbGllciwgZWxhcHNlZEZyYW1lVGltZSAvIDEwMCk7ICBcbiAgICAgIH0gICBcbiAgICAgIC8vY2hlY2sgcG9zIG9mIG1ldGVvciBhZ2FpbnN0IGV4cGxvc2lvbnMsIGFuZCBncm91bmQgXG4gICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoZXhwbG9zaW9uLnBvc2l0aW9uLCBtZXRlb3IucG9zaXRpb24pO1xuICAgICAgICAvLyBpZiBtZXRlb3IgaW4gcmFkaXVzLCBkZXN0cm95IGl0IGFuZCBjcmVhdGUgZXhwbG9zaW9uXG4gICAgICAgIGlmIChkaXN0YW5jZSA8PSBleHBsb3Npb24uZXhwbG9zaW9uUmFkaXVzICsgbWV0ZW9yLnJhZGl1cykge1xuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkucHVzaChuZXcgRXhwbG9zaW9uKHRoaXMuY3R4LCBtZXRlb3IucG9zaXRpb24pKTtcbiAgICAgICAgICB0aGlzLm1ldGVvckFycmF5LnNwbGljZSh0aGlzLm1ldGVvckFycmF5LmluZGV4T2YobWV0ZW9yKSwgMSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTsgICAgICAgIFxuXG4gICAgICB0aGlzLmJhc2VBcnJheS5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgICBsZXQgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShtZXRlb3IucG9zaXRpb24sIGJhc2UucG9zaXRpb24pO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPD0gYmFzZS5yYWRpdXMgKyBtZXRlb3IucmFkaXVzKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJhc2UgZGVzdHJveWVkXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTsgIFxuXG4gICAgdGhpcy5taXNzaWxlQXJyYXkuZm9yRWFjaChtaXNzaWxlID0+IHtcbiAgICAgIC8vY2hlY2sgZm9yIGV4cGxvc2lvblxuICAgICAgaWYgKG1pc3NpbGUuY2hlY2tFeHBsb3Npb24oY2FsY3VsYXRlRGlzdGFuY2UobWlzc2lsZS5wb3NpdGlvbiwgbWlzc2lsZS5kZXN0aW5hdGlvbikpKXsgICAgICAgIFxuICAgICAgICB0aGlzLmV4cGxvc2lvbkFycmF5LnB1c2gobmV3IEV4cGxvc2lvbih0aGlzLmN0eCwgbWlzc2lsZS5wb3NpdGlvbikpO1xuICAgICAgICB0aGlzLm1pc3NpbGVBcnJheS5zcGxpY2UodGhpcy5taXNzaWxlQXJyYXkuaW5kZXhPZihtaXNzaWxlKSwxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pc3NpbGUudXBkYXRlUG9zaXRpb24oZWxhcHNlZEZyYW1lVGltZSAvIDEwMCk7XG4gICAgICB9ICAgICAgXG4gICAgfSk7XG5cbiAgICB0aGlzLmV4cGxvc2lvbkFycmF5LmZvckVhY2goZXhwbG9zaW9uID0+IHtcbiAgICAgIGlmIChleHBsb3Npb24uc3RhZ2UgPj0gNCl7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uQXJyYXkuc3BsaWNlKHRoaXMuZXhwbG9zaW9uQXJyYXkuaW5kZXhPZihleHBsb3Npb24pLDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwbG9zaW9uLnVwZGF0ZUV4cGxvc2lvbihlbGFwc2VkRnJhbWVUaW1lKTtcbiAgICAgIH0gICAgICBcbiAgICB9KTtcblxuXG4gICAgdGhpcy5iYXNlQXJyYXkuZm9yRWFjaChiYXNlID0+IHtcbiAgICAgIGJhc2UuZHJhdygpO1xuICAgIH0pO1xuICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTsgICAgXG4gIH1cblxuICBidWlsZE5ld01ldGVvcnMoKSB7XG4gICAgZm9yKGxldCBpID0wOyBpIDwgdGhpcy5sZXZlbCAqIDI7IGkrKyl7XG4gICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zY3JlZW5XaWR0aCkpO1xuICAgICAgdGhpcy5tZXRlb3JBcnJheS5wdXNoKG5ldyBNZXRlb3IocG9zWCwgdGhpcy5jdHgpKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRlb3J7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiAtMTBcbiAgICB9O1xuICAgIHRoaXMuc3BlZWQgPSA3ICogdGhpcy5zZXRTcGVlZCgpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICB0aGlzLnJhZGl1cyA9IDEwO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTcGVlZCgpe1xuICAgIC8vaGVscHMgc2V0IGFuIGludGlhbCByYW5kb20gcmFuZ2Ugb2Ygc3BlZWRzXG4gICAgbGV0IHRocm90dGxlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHRocm90dGxlciA8PSAwLjI1KSByZXR1cm4gMC43NTtcbiAgICBpZiAodGhyb3R0bGVyID49IDAuNzUpIHJldHVybiAxLjI1O1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKCl7XG4gICAgLy9zZXQgUmFuZG9tIHggZGlyZWN0aW9uXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh4ID4gMC41KSB4ICo9IC0xO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24obGV2ZWxNdWx0aXBsaWVyLCBkZWx0YVRpbWUpe1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLmRpcmVjdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gKGxldmVsTXVsdGlwbGllciAqIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpOyAgICBcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG5cbiAgZHJhdygpe1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyAgICBcbiAgICB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lsZXtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24sIHBvc2l0aW9uLCBjdHgpe1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zaXRpb24ueCArIDEwLFxuICAgICAgeTogcG9zaXRpb24ueSAtIDEwXG4gICAgfTtcblxuICAgIHRoaXMuY291cnNlID0ge1xuICAgICAgeDogKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCksXG4gICAgICB5OiAodGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55KVxuICAgIH07XG4gICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICB0aGlzLmV4cGxvc2lvblJhZGl1cyA9IDM7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLm1pc3NpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVsbG93LW1pc3NpbGVcIik7ICAgIFxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgLy90aGlzLmNhbGN1bGF0ZURpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tFeHBsb3Npb24gPSB0aGlzLmNoZWNrRXhwbG9zaW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBjaGVja0V4cGxvc2lvbihkaXN0YW5jZSl7XG4gICAgLy9sZXQgZGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKCk7ICAgIFxuICAgIGlmIChkaXN0YW5jZSA8PSB0aGlzLmV4cGxvc2lvblJhZGl1cykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlRGlzdGFuY2UoKXtcbiAgLy8gICBsZXQgeERpc3QgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmRlc3RpbmF0aW9uLngpO1xuICAvLyAgIGxldCB5RGlzdCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuZGVzdGluYXRpb24ueSk7XG4gIC8vICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QqeERpc3QpICsgKHlEaXN0KnlEaXN0KSk7XG4gIC8vIH1cblxuICB1cGRhdGVQb3NpdGlvbihkdCl7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9ICh0aGlzLmNvdXJzZS54IC8gdGhpcy5zcGVlZCkgKiBkdDsgICAgXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLmNvdXJzZS55IC8gdGhpcy5zcGVlZCkgKiBkdDtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICAvL21ldGVvcnMgYXJlIGNoZWNraW5nIGZvciBjb2xsaXNpb25zIGluIEdhbWUuanNcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1pc3NpbGVJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueVxuICAgICk7XG4gIH1cbn0iLCIvLyBjbGFzcyBUZXN0T2JqZWN0e1xuLy8gICBjb25zdHJ1Y3RvcihzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0KXtcbi8vICAgICB0aGlzLndpZHRoID0gMTUwO1xuLy8gICAgIHRoaXMuaGVpZ2h0ID0gMzA7XG5cbi8vICAgICB0aGlzLnBvc2l0aW9uID0ge1xuLy8gICAgICAgeDogc2NyZWVuV2lkdGgvMiAtIHRoaXMud2lkdGgvMixcbi8vICAgICAgIHk6IHNjcmVlbkhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMTBcbi8vICAgICB9O1xuLy8gICB9XG5cbi8vICAgZHJhdyhjdHgpe1xuLy8gICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuLy8gICB9XG5cbi8vICAgdXBkYXRlKGRlbHRhVGltZSlcbi8vICAge1xuICAgIFxuLy8gICAgIGlmKCFkZWx0YVRpbWUpIHJldHVybjtcbi8vICAgICBjb25zb2xlLmxvZyhkZWx0YVRpbWUpO1xuLy8gICAgIHRoaXMucG9zaXRpb24ueCArPSA1IC8gZGVsdGFUaW1lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFRlc3RPYmplY3Q7XG5cbi8vIGxldCBhID0gWzEsMiwzXTtcbi8vIGEuZm9yRWFjaChlbCA9PiB7XG4vLyAgIGlmIChlbCA9PT0gMil7XG4vLyAgICAgYS5zcGxpY2UoYS5pbmRleE9mKGVsKSwxKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZyhlbCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBjb25zb2xlLmxvZyhhKTtcblxuLy8gY2xhc3MgVGVzdHtcbi8vICAgY29uc3RydWN0b3IoKXtcbi8vICAgICB0aGlzLnZhcmlhYmxlID0gMTtcbi8vICAgfVxuXG4vLyAgIGJ1aWxkT2JqKCl7XG4vLyAgICAgcmV0dXJuIG5ldyBUZXN0KCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gLy8gbGV0IHRlc3QgPSBUZXN0LmJ1aWxkT2JqKCk7XG4vLyAvLyBsZXQgdGVzdCA9IG5ldyBUZXN0KCk7XG4vLyAvLyBsZXQgb3RoZXJUZXN0ID0gdGVzdC5idWlsZE9iaigpO1xuLy8gbGV0IG90aGVyVGVzdCA9IG5ldyBUZXN0KCkuYnVpbGRPYmooKTtcbi8vIGNvbnNvbGUubG9nKG90aGVyVGVzdC52YXJpYWJsZSk7IiwiZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZURpc3RhbmNlID0gKHBvczEsIHBvczIpID0+IHtcbiAgLy9kZWJ1Z2dlcjtcbiAgbGV0IHhEaXN0ID0gTWF0aC5hYnMocG9zMS54IC0gcG9zMi54KTtcbiAgbGV0IHlEaXN0ID0gTWF0aC5hYnMocG9zMS55IC0gcG9zMi55KTtcbiAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QgKiB4RGlzdCkgKyAoeURpc3QgKiB5RGlzdCkpO1xufTtcblxuLy8gY2FsY3VsYXRlRGlzdGFuY2UoKXtcbi8vICAgbGV0IHhEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi54IC0gdGhpcy5kZXN0aW5hdGlvbi54KTtcbi8vICAgbGV0IHlEaXN0ID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gdGhpcy5kZXN0aW5hdGlvbi55KTtcbi8vICAgcmV0dXJuIE1hdGguc3FydCgoeERpc3QgKiB4RGlzdCkgKyAoeURpc3QgKiB5RGlzdCkpO1xuLy8gfSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=