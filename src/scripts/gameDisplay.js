export default class gameDisplay{
  constructor(ctx){
    this.ctx = ctx;    
    this.ctx.font = "24pt sans serif";
    this.bases = 3;
    this.missiles = 10;
    this.level = 0;
    this.destroyedMeteorCount = 0;
    this.levelGoal = 15;

    this.basesDiv = document.getElementById("game-info-bases");
    this.missilesDiv = document.getElementById("game-info-missiles");
    this.levelDiv = document.getElementById("game-info-level");
    this.destroyedDiv = document.getElementById("game-info-destroyed");

    this.checkContinue = this.checkContinue.bind(this);
    this.destroyBase = this.destroyBase.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.destroyMeteor = this.destroyMeteor.bind(this);
    this.gameLost = this.gameLost.bind(this);
    this.setupLevelDisplay = this.setupLevelDisplay.bind(this);

    this.updateDisplay();
  }

  setupLevelDisplay(){
    this.level += 1;
    this.missiles = (8 + (this.level * 2));    
    this.bases = 3;
    this.destroyedMeteorCount = 0;
    this.levelGoal = (10 + (this.level * 5));
    this.updateDisplay();
  }

  nextLevel(callback){
    //level setup logic    
    this.setupLevelDisplay(); 

    this.ctx.fillStyle = "red";
    this.ctx.fillRect(500, 300, 250, 200);
    this.ctx.fillStyle = "yellow";
    this.ctx.strokeText(`Level ${this.level}`, 575,400);
    //let time = new Date().getMilliseconds();
    window.setTimeout(() => { callback(2500); }, 2500);    
  }

  updateDisplay(){
    this.levelDiv.innerText = `Level: ${this.level}`;
    this.basesDiv.innerText = `Bases: ${this.bases}`;
    this.missilesDiv.innerText = `Missiles: ${this.missiles}`;
    this.destroyedDiv.innerText = `Destroyed Meteors: ${this.destroyedMeteorCount} of ${this.levelGoal}`;
  }

  fireMissile(){
    this.missiles -= 1;
    this.updateDisplay();
  }

  destroyBase(){
    this.bases -= 1;
    this.updateDisplay();
  }

  destroyMeteor(){
    this.destroyedMeteorCount += 1;
    this.updateDisplay();
    // if (this.destroyedMeteorCount >= this.levelGoal){
    //   this.
    // }

  }

  gameLost(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(500, 300, 450, 200);
    this.ctx.fillStyle = "yellow";
    this.ctx.strokeText(`Earth has been destroyed, whoops!`, 550, 400);
  }

  checkContinue(){
    if (this.destroyedMeteorCount >= this.levelGoal) return false;
    if (this.bases >0 ) return true;
    return false;
  }
}