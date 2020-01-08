export default class Base{
  constructor(ctx, height, position){
    this.ctx = ctx;
    this.baseImage = document.getElementById("base-image");
    this.screenHeight = height;
    this.position = position;
    this.draw = this.draw.bind(this);
  }

  draw(){
    this.ctx.drawImage(
      this.baseImage, 
      this.position.x, 
      this.screenHeight-this.position.y
      );
  }


}