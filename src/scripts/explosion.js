export default class Explosion{
  constructor(ctx, position){
    this.position = {
      x: position.x,
      y: position.y
    };
    this.ctx = ctx;
    this.explosionImage = document.getElementById("explosion-1");

    this.draw = this.draw.bind(this);
  }

  draw(){
    this.ctx.drawImage(
      this.explosionImage,
      this.position.x,
      this.position.y
    );
  }
}