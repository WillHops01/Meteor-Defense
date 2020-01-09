export default class Explosion{
  constructor(ctx, position){
    this.drawPosition = {
      x: position.x,
      y: position.y
    }; //50 is magic number center
    this.position={
      x:position.x,
      y:position.y
    };

    this.size = 50;
    this.maxSize = 130;
    this.growthRate = (this.maxSize - this.size) / 4;
    //calculation for how fast to grow

    this.ctx = ctx;
    this.timer = 0;
    this.explosionImageArray = [document.getElementById("explosion-1"),
      document.getElementById("explosion-2"),
      document.getElementById("explosion-3"),
      document.getElementById("explosion-4")];
    this.imageToDraw = this.explosionImageArray[0];
    this.stage = 0;
    this.explosionRadius = 63; 

    this.draw = this.draw.bind(this);
    this.updateExplosion = this.updateExplosion.bind(this);
  }

  updateExplosion(dt){
    dt = dt/1000;
    this.timer+=dt;
    if (this.timer >= 0.8){
      this.stage++;

      this.timer =0;
    }    
    if (this.stage < 4){
      this.drawPosition.x = this.position.x - this.size/2;
      this.drawPosition.y = this.position.y - this.size/2;
      this.draw();
      this.size += this.growthRate * dt;      
    }
    
  }

  draw(){
    this.ctx.drawImage(
      this.explosionImageArray[this.stage],
      this.drawPosition.x,
      this.drawPosition.y,
      this.size, this.size
    );
  }
}