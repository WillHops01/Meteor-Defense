import TestObject from "./testobject";
import Meteor from "./meteor";

export default class Game{
  constructor(context, width, height){
    this.ctx = context;
    this.screenHeight = height;
    this.screenWidth = width;    
    this.meteorArray = [];
    this.lastTime = 0;
    this.elapsedFrameTime = 0;
    this.gameLoop = this.gameLoop.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.background = document.getElementById("background");
  }

  handleClick(e){
    //console.log(`clicked ${e.offsetX}`);  
    //console.log(`clicked ${e.offsetY}`);      
  }

  runGame(){
    //initial setup logic
    //then, start gameLoop
    let startingMeteors = 10;
    for (let i = 0; i < startingMeteors; i++){
      let posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
      this.meteorArray.push(new Meteor(posX, this.ctx));
    }
    this.gameLoop(0);
  }

  gameLoop(timestamp){
    this.elapsedFrameTime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    const levelMultiplier = 1.0;
    //while not lost

      //update meteorarray
      //redraw meteors
      //listen for clicks
      //repeat

    //

    this.ctx.drawImage(background, 0,0);
    this.meteorArray.forEach(meteor =>{
      meteor.updatePosition(levelMultiplier, this.elapsedFrameTime/100);       
    });  
    requestAnimationFrame(this.gameLoop);    
  }
}

// function Game(ctx){
  

//   ctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
//   let obj1 = new TestObject(SCREEN_WIDTH, SCREEN_HEIGHT);
//   obj1.draw(ctx);

//   let lastTime = 0;

//   function gameLoop (timestamp){
//     let dt = timestamp - lastTime;
//     lastTime = timestamp;    
//     ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
//     obj1.update(dt);
//     obj1.draw(ctx);
//     requestAnimationFrame(gameLoop);
//   }
//   gameLoop();
// }
