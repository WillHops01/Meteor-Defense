import TestObject from "./testobject";

export default class Game{
  constructor(context, width, height){
    this.ctx = context;
    this.screenHeight = height;
    this.screenWidth = width;    
    this.meteorArray = [];
    this.elapsedTime = 0;
    this.gameLoop = this.gameLoop.bind(this);
    this.runGame = this.runGame.bind(this)();
    this.canvas = document.getElementById("game-canvas");
    this.canvas.addEventListener("click", this.handleClick, false);
    
    // ${this.handleClick(event)}`);
  }

  handleClick(e){
    console.log(`clicked ${e.offsetX}`);
  }

  runGame(){
    //initial setup logic
    //then, start gameLoop
  }

  gameLoop(){
    //while not lost

      //update meteorarray
      //redraw meteors
      //listen for clicks
      //repeat

    //
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
