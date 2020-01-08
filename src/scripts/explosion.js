export default class Explosion{
  constructor(ctx, position){
    this.position = {
      x: position.x-50,
      y: position.y-50
    }; //50 is magic number center
    this.ctx = ctx;
    this.timer = 0;
    this.explosionImageArray = [document.getElementById("explosion-1"),
      document.getElementById("explosion-2"),
      document.getElementById("explosion-3"),
      document.getElementById("explosion-4")];
    this.imageToDraw = this.explosionImageArray[0];
    this.stage = 0;
    this.explosionRadius = 75; 

    this.draw = this.draw.bind(this);
    this.updateExplosion = this.updateExplosion.bind(this);
  }

  updateExplosion(dt){
    //debugger;
    this.timer+=dt/1000;
    if (this.timer >= 0.8){
      this.stage++;
      this.timer =0;
    }    
    if (this.stage < 4){
      this.draw();
    }
    
  }

  draw(){
    this.ctx.drawImage(
      this.explosionImageArray[this.stage],
      this.position.x,
      this.position.y,
      100, 100
    );
  }
}