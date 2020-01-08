import TestObject from "./testobject";
import Meteor from "./meteor";
import Missile from "./missile";
import Base from "./base";
import Explosion from "./explosion";

export default class Game{
  constructor(context, width, height){
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

  handleClick(e){ 
    
    //check for missile count
    //find closest base to click
    //spawn missile at base heading towards click    
    
    if (this.missileCount > 0){

      let closestBase = this.baseArray[0];
      let difference = Math.abs(e.offsetX - closestBase.position.x);
      for (let i = 1; i < this.baseArray.length; i++) {
        if (Math.abs(e.offsetX - this.baseArray[i].position.x) < difference) {
          closestBase = this.baseArray[i];
          difference = Math.abs(e.offsetX - closestBase.position.x);
        }
      }
      let destination = {
        x: e.offsetX,
        y: e.offsetY
      };
      
      this.missileArray.push(new Missile(destination, (closestBase.position), this.ctx));
    }     
  }

  runGame(){
    //initial setup logic
    //then, start gameLoop
    let startingMeteors = 10;
    let startingBases = 3;
    //setup meteors ???merge with buildMeteors????
    for (let i = 0; i < startingMeteors; i++){
      let posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
      this.meteorArray.push(new Meteor(posX, this.ctx));
    }
    //setup bases
    let basePosition = {
      x: 150,
      y: this.screenHeight - 100
    };
    
    for (let i =0; i < startingBases; i++){      
      this.baseArray.push(new Base(this.ctx, basePosition));      
      basePosition.x += this.screenWidth/3;
    }
    this.gameLoop(0);
  }

  gameLoop(timestamp){    
    //while not lost

      //update meteorarray
      //redraw meteors
      //listen for clicks
      //repeat

    //
    let elapsedFrameTime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    this.timer+=elapsedFrameTime/1000;    

    const levelMultiplier = 1.0;  

    if (this.timer >= 3.0){
      this.buildNewMeteors();
      this.timer = 0;
    }   

    this.ctx.drawImage(background, 0, 0);

    this.meteorArray.forEach(meteor =>{
      //check pos of meteor against explosions, and ground 

      // this.missileArray.forEach(missile => {
      //   let distance = missile.calculateDistance(meteor.position);
      //   let radiiDifference = missile.radius/2 + meteor.radius/2;
      //   if (distance - radiiDifference <= 3){
      //     console.log("hit");
      //   }
      // });
      
      if (meteor.position.y >= this.screenHeight){
        this.meteorArray.splice(this.meteorArray.indexOf(meteor),1);
      } else {
        meteor.updatePosition(levelMultiplier, elapsedFrameTime / 100);  
      }           
    });  

    this.missileArray.forEach(missile => {
      //check for explosion
      if (missile.checkExplosion()){        
        this.explosionArray.push(new Explosion(this.ctx, missile.position));
        this.missileArray.splice(this.missileArray.indexOf(missile),1);
      } else {
        missile.updatePosition(elapsedFrameTime / 100);
      }      
    });

    this.explosionArray.forEach(explosion => {
      explosion.draw();
    });


    this.baseArray.forEach(base => {
      base.draw();
    });
    
    requestAnimationFrame(this.gameLoop);    
  }

  buildNewMeteors() {
    for(let i =0; i < this.level * 2; i++){
      let posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
      this.meteorArray.push(new Meteor(posX, this.ctx));
    }
  }
}