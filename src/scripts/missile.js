export default class Missile{
  constructor(destination, position, ctx){
    this.destination = destination;
    this.position = {
      x: position.x + 10,
      y: position.y - 10
    };

    this.course = {
      x: (this.destination.x - this.position.x),
      y: (this.destination.y - this.position.y)
    };
    //debugger;
    this.speed = 10;
    this.radius = 5;
    this.ctx = ctx;

    this.missileImage = document.getElementById("yellow-missile");    
    this.draw = this.draw.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);
  }

  calculateDistance(mPos){
    //debugger;
    let xDist = Math.abs(this.position.x - mPos.x);
    let yDist = Math.abs(this.position.y - mPos.y);
    return Math.sqrt((xDist*xDist) + (yDist*yDist));
  }

  updatePosition(dt){
    this.position.x += (this.course.x / this.speed) * dt;
    //debugger;
    this.position.y += (this.course.y / this.speed) * dt;


    this.draw();
  }

  draw(){
    //meteors are checking for collisions in Game.js
    this.ctx.drawImage(
      this.missileImage,
      this.position.x,
      this.position.y
    );
  }
}