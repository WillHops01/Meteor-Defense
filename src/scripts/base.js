export default class Base{
  constructor(ctx, position){
    this.ctx = ctx;
    this.baseImage = document.getElementById("base-image");
    //this.destroyedImage = document.getElementById("destroyed-base");
    this.drawPosition = {
      x: position.x,
      y: position.y
    };
    this.position = {
      x: position.x+21,
      y: position.y+50
    }; //magic numbers for width and height adjusting
    this.radius = 40;
    this.destroyed = false;
    this.draw = this.draw.bind(this);
  }

  destroyBase(){
    this.destroyed = true;
    this.baseImage = document.getElementById("destroyed-base");
    this.drawPosition.x -= 40;
  }

  draw(){ 
    this.ctx.drawImage(
      this.baseImage, 
      this.drawPosition.x, 
      this.drawPosition.y
      );
  }


}