import TestObject from "./testobject";



function Game(ctx){
  const SCREEN_WIDTH = 800;
  const SCREEN_HEIGHT = 600;

  ctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
  let obj1 = new TestObject(SCREEN_WIDTH, SCREEN_HEIGHT);
  obj1.draw(ctx);
}



export default Game;