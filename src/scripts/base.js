export default class Base{
  constructor(ctx, position){
    this.ctx = ctx;
    this.baseImage = document.getElementById("base-image");
    this.position = {
      x: position.x,
      y: position.y
    };
    //debugger;
    this.draw = this.draw.bind(this);
  }

  draw(){
    //debugger;
    this.ctx.drawImage(
      this.baseImage, 
      this.position.x, 
      this.position.y
      );
  }


}