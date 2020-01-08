export default class Missile{
  constructor(destination, position){
    this.destination = destination;
    this.position = position;
    this.radius = 5;

    this.draw = this.draw.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);
  }

  calculateDistance(mPos){
    //debugger;
    let xDist = Math.abs(this.position.x - mPos.x);
    let yDist = Math.abs(this.position.y - mPos.y);
    return Math.sqrt((xDist*xDist) + (yDist*yDist));
  }

  draw(){
    //meteors are checking for collisions
  }
}