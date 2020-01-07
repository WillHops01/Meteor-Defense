export default class Meteor{
  constructor(posX, ctx){
    this.ctx = ctx;
    this.position = {
      x: posX,
      y: 30
    };
    this.direction = this.setDirection();
    //set speed as well
  }

  setDirection(){
    //set Random downwards direction
  }

  updatePosition(){

  }


  draw(){
    this.ctx.beginPath();
    let radius = 10;
    this.ctx.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }

}