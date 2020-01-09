import Meteor from "./meteor";
import Missile from "./missile";
import Base from "./base";
import Explosion from "./explosion";
import GameDisplay from "./gameDisplay";
import { calculateDistance } from "./util";

export default class Game{
  constructor(context, width, height){
    this.ctx = context;
    this.screenHeight = height;
    this.screenWidth = width; 

    this.meteorArray = [];
    this.baseArray = [];
    this.missileArray = [];
    this.explosionArray = [];

    //this.missileCount = 10;

    this.lastTime = 0;
    this.timer = 0; //used to generate new meteors at intervals
    this.level = 0; //controls difficulty and pace of game
    this.levelMultiplier = 0.85;
    
    this.gameDisplay = new GameDisplay(this.ctx);

    this.testTimer = 0;

    this.gameLoop = this.gameLoop.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.buildNewMeteors = this.buildNewMeteors.bind(this);  
    this.setupLevel = this.setupLevel.bind(this);

    this.background = document.getElementById("background");
    this.background.addEventListener("load", () => {this.setupLevel();}, false);
  }

  handleClick(e){ 
    
    //check for missile count
    //find closest base to click
    //spawn missile at base heading towards click    
    
    if (this.gameDisplay.missiles > 0){
      let potentialBases = this.baseArray.filter(base => {return !base.destroyed;});
      let closestBase = potentialBases[0];
      let difference = Math.abs(e.offsetX - closestBase.position.x);
      for (let i = 1; i < potentialBases.length; i++) {
        if (Math.abs(e.offsetX - potentialBases[i].position.x) < difference) {
          closestBase = potentialBases[i];
          difference = Math.abs(e.offsetX - closestBase.position.x);
        }
      }
      let destination = {
        x: e.offsetX,
        y: e.offsetY
      };
      this.gameDisplay.fireMissile();
      this.missileArray.push(new Missile(destination, (closestBase.position), this.ctx));
    }     
  }

  setupLevel(){
    //sets up each level    
    this.meteorArray = [];
    this.baseArray = [];
    this.explosionArray = [];
    this.missileArray = [];
    this.level += 1;
    //setup meteors ???merge with buildMeteors????
    for (let i = 0; i < (8 + (2 * this.level)); i++) {
      let posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
      this.meteorArray.push(new Meteor(posX, this.ctx));
    }
    //setup bases
    let basePosition = {
      x: 150,
      y: this.screenHeight - 100
    };

    for (let i = 0; i < 3; i++) {
      this.baseArray.push(new Base(this.ctx, basePosition));

      basePosition.x += this.screenWidth / 3;
    }  
    this.levelMultiplier += 0.15;
    this.runGame();
  }

  runGame(){
    this.ctx.drawImage(this.background, 0, 0, this.screenWidth, this.screenHeight);
    this.lastTime += 2500;
    this.gameDisplay.nextLevel(this.gameLoop);
  }

  gameLoop(timestamp){   
    if (this.testTimer < 2){
      console.log(timestamp);
      this.testTimer+=1;
    }
    if (this.gameDisplay.checkContinue()){
      //game still progressing, player has neither won or lost
      let elapsedFrameTime = timestamp - this.lastTime;
      this.lastTime = timestamp;
      //debugger;
      this.timer += elapsedFrameTime / 1000;

      //const levelMultiplier = 1.0;

      if (this.timer >= 3.0) {
        this.buildNewMeteors();
        this.timer = 0;
      }

      this.ctx.drawImage(this.background, 0, 0);

      this.meteorArray.forEach(meteor => {
        //first, move the meteor
        if (meteor.position.y >= this.screenHeight) {
          this.meteorArray.splice(this.meteorArray.indexOf(meteor), 1);
        } else {
          meteor.updatePosition(this.levelMultiplier, elapsedFrameTime / 1000);
        }
        //check pos of meteor against explosions, and ground 
        this.explosionArray.forEach(explosion => {
          let distance = calculateDistance(explosion.position, meteor.position);
          // if meteor in radius, destroy it and create explosion
          if (distance <= explosion.explosionRadius + meteor.radius) {
            this.explosionArray.push(new Explosion(this.ctx, meteor.position));
            this.meteorArray.splice(this.meteorArray.indexOf(meteor), 1);
            this.gameDisplay.destroyMeteor();
            return;
          }
        });

        this.baseArray.forEach(base => {
          base.draw();
          if (base.destroyed) {
            return;
          }

          let distance = calculateDistance(meteor.position, base.position);
          if (distance <= base.radius + meteor.radius) {
            base.destroyBase();
            this.gameDisplay.destroyBase();
            this.explosionArray.push(new Explosion(this.ctx, base.position));
          }
        });
      });

      this.missileArray.forEach(missile => {
        //check for explosion
        if (missile.checkExplosion(calculateDistance(missile.position, missile.destination))) {
          this.explosionArray.push(new Explosion(this.ctx, missile.position));
          this.missileArray.splice(this.missileArray.indexOf(missile), 1);
        } else {
          missile.updatePosition((elapsedFrameTime / 1000));
        }
      });

      this.explosionArray.forEach(explosion => {
        if (explosion.stage >= 4) {
          this.explosionArray.splice(this.explosionArray.indexOf(explosion), 1);
        } else {
          explosion.updateExplosion(elapsedFrameTime);
        }
      });

      requestAnimationFrame(this.gameLoop);   
    } else {
      if (this.gameDisplay.destroyedMeteorCount >= this.gameDisplay.levelGoal){
        //player progress to next level
        this.setupLevel();
      } else {
        // player lost
        this.gameDisplay.gameLost();
      }
    }    
  }

  buildNewMeteors() {
    for(let i =0; i < this.level * 2; i++){
      let posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
      this.meteorArray.push(new Meteor(posX, this.ctx));
    }
  }
}