export default class Base{
  constructor(ctx, height, xPos){
    this.ctx = ctx;
    this.baseImage = document.getElementById("base-image");
    this.screenHeight = height;
    this.xPos = xPos;
    this.draw = this.draw.bind(this);
  }

  draw(){
    this.ctx.drawImage(this.baseImage, this.xPos, this.screenHeight-100);
  }


}