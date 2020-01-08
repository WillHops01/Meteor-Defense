export default class Meteor{
  constructor(posX, ctx){
    this.ctx = ctx;
    this.position = {
      x: posX,
      y: 30
    };
    this.speed = 7 * this.setSpeed();
    this.direction = this.setDirection();
    this.updatePosition = this.updatePosition.bind(this);
    this.draw = this.draw.bind(this);
  }

  setSpeed(){
    //helps set an intial random range of speeds
    let throttler = Math.random();
    if (throttler <= 0.25) return 0.75;
    if (throttler >= 0.75) return 1.25;
    return 1;
  }

  setDirection(){
    //set Random x direction
    let x = Math.random();
    if (x > 0.5) x *= -1;
    return x;
  }

  updatePosition(levelMultiplier, deltaTime){
    this.position.x += this.direction;
    this.position.y += (levelMultiplier * this.speed * deltaTime);    
    this.draw();
  }


  draw(){
    this.ctx.beginPath();
    let radius = 10;
    this.ctx.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}