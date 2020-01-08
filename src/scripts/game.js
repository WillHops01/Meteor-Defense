import TestObject from "./testobject";
import Meteor from "./meteor";

export default class Game{
  constructor(context, width, height){
    this.ctx = context;
    this.screenHeight = height;
    this.screenWidth = width;    
    this.meteorArray = [];
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
    console.log(this.meteorArray);
    requestAnimationFrame(this.gameLoop);    
  }

  buildNewMeteors() {
    for(let i =0; i < this.level * 2; i++){
      let posX = Math.floor(Math.random() * Math.floor(this.screenWidth));
      this.meteorArray.push(new Meteor(posX, this.ctx));
    }
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
