import TestObject from "./testobject";
import Meteor from "./meteor";
import Missile from "./missile";
import Base from "./base";

export default class Game{
  constructor(context, width, height){
    this.ctx = context;
    this.screenHeight = height;
    this.screenWidth = width;    
    this.meteorArray = [];
    this.baseArray = [];
    this.lastTime = 0;
    this.timer = 0; //used to generate new meteors at intervals
    this.level = 1; //controls difficulty and pace of game
    this.background = document.getElementById("background");

    this.gameLoop = this.gameLoop.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.buildNewMeteors = this.buildNewMeteors.bind(this);    
    //this.base = new Base(this.ctx, this.screenHeight);
  }

  handleClick(e){
    console.log(`clicked ${e.offsetX}`);  
    //console.log(`clicked ${e.offsetY}`);
    
    //find closest base to click
    this.baseArray.forEach(base => {
      console.log(base.xPos);
    });   
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
    let baseXoffset = 150;
    for (let i =0; i < startingBases; i++){
      this.baseArray.push(new Base(this.ctx, this.screenHeight,baseXoffset));
      baseXoffset += this.screenWidth/3;
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
    // console.log(this.timer);

    const levelMultiplier = 1.0;  

    if (this.timer >= 3.0){
      this.buildNewMeteors();
      this.timer = 0;
    }   

    this.ctx.drawImage(background, 0, 0);

    this.meteorArray.forEach(meteor =>{
      //check pos of meteor against missiles, explosions, and ground
      if (meteor.position.y >= this.screenHeight){
        this.meteorArray.splice(this.meteorArray.indexOf(meteor),1);
      } else {
        meteor.updatePosition(levelMultiplier, elapsedFrameTime / 100);  
      }           
    });  

    this.baseArray.forEach(base => {
      base.draw();
    });
    //console.log(this.meteorArray);
    requestAnimationFrame(this.gameLoop);    
  }

  buildNewMeteors() {
    for(let i =0; i < this.level * 2; i++){
      let posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
      this.meteorArray.push(new Meteor(posX, this.ctx));
    }
  }
}