import TestObject from "./testobject";

export default class Game{
  constructor(context, width, height){
    this.ctx = context;
    this.screenHeight = height;
    this.screenWidth = width;    
    this.meteorArray = [];
    this.elapsedTime = 0;

    this.runGame = this.runGame.bind(this)();
  }

  runGame(){
    //while not lost
    
    //update meteorarray
    //redraw meteors
  }

  gameLoop(){

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
