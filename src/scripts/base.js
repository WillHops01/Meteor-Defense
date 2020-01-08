export default class Base{
  constructor(ctx, height){
    this.ctx = ctx;
    this.baseImage = document.getElementById("base-image");
    this.screenHeight = height;
    this.draw = this.draw.bind(this);
  }

  draw(){
    this.ctx.drawImage(this.baseImage, 15, this.screenHeight-140, 180,180);
  }
}