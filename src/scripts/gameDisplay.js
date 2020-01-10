export default class gameDisplay{
  constructor(ctx){
    this.ctx = ctx;    
    this.ctx.font = "24pt sans serif";
    this.bases = 3;
    this.missiles = 10;
    this.level = 0;
    this.destroyedMeteorCount = 0;
    this.levelGoal = 15;
    this.continueGame = true;

    this.basesDiv = document.getElementById("game-info-bases");
    this.missilesDiv = document.getElementById("game-info-missiles");
    this.levelDiv = document.getElementById("game-info-level");
    this.destroyedDiv = document.getElementById("game-info-destroyed");
    this.promptHeader = document.getElementById("user-prompt-header-active");

    this.levelAudio = document.getElementById("level-advance");

    this.checkContinue = this.checkContinue.bind(this);
    this.destroyBase = this.destroyBase.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.destroyMeteor = this.destroyMeteor.bind(this);
    this.gameLost = this.gameLost.bind(this);
    this.setupLevelDisplay = this.setupLevelDisplay.bind(this);
    this.resetDisplay = this.resetDisplay.bind(this);
    this.changeUserPrompt = this.changeUserPrompt.bind(this);
    this.animateInfo = this.animateInfo.bind(this);
    this.outOfMissiles = this.outOfMissiles.bind(this);

    this.updateDisplay();
  }

  changeUserPrompt(promptId){
    if (promptId === 1){
      this.promptHeader.innerText = "Begin!";
      this.promptHeader.setAttribute("id", "user-prompt-header-idle");
    } else if (promptId === 2){
      this.promptHeader.innerText = "Press Any Key to Begin";
    }
  }

  resetDisplay(){
    this.bases = 3;
    this.missiles = 10;
    this.level = 0;
    this.destroyedMeteorCount = 0;
    this.levelGoal = 15;
    this.updateDisplay();
  }

  setupLevelDisplay(){
    this.level += 1;
    this.missiles = (8 + (this.level));    
    this.bases = 3;
    this.destroyedMeteorCount = 0;
    this.levelGoal = (8 + (this.level * 5));
    if(this.level >=3) this.levelGoal += this.level;
    this.continueGame = true;
    this.updateDisplay(4);
  }

  nextLevel(callback){
    //level setup logic       
    this.setupLevelDisplay(); 
    if (this.level > 1){
      this.levelAudio.play(); 
    }
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(500, 300, 250, 200);
    this.ctx.fillStyle = "yellow";
    this.ctx.strokeText(`Level ${this.level}`, 575,400);
    window.setTimeout(() => { callback(0); }, 2500);    
  }

  animateInfo(container){
    let animateClass = "game-info-animate";
    let animatedDoc = container;
    animatedDoc.classList.add(animateClass);
    window.setTimeout(() => {
      animatedDoc.classList.remove(animateClass);
    }, 1250);
  }

  updateDisplay(num = 0){
    
    this.levelDiv.innerText = `Level: ${this.level}`;
    this.basesDiv.innerText = `Bases: ${this.bases}`;
    this.missilesDiv.innerText = `Missiles: ${this.missiles}`;
    this.destroyedDiv.innerText = `Destroyed Meteors: ${this.destroyedMeteorCount} of ${this.levelGoal}`;
    switch (num) {
      case 1:
        this.animateInfo(this.basesDiv);       
        break;
      case 2:
        this.animateInfo(this.missilesDiv);        
        break;
      case 3:
        this.animateInfo(this.destroyedDiv);        
        break;
      case 4:
        this.animateInfo(this.levelDiv);        
      default:
        break;
    }
  }

  fireMissile(){
    this.missiles -= 1;
    this.updateDisplay(2);
  }

  destroyBase(){
    this.bases -= 1;
    this.updateDisplay(1);
  }

  destroyMeteor(){
    this.destroyedMeteorCount += 1;
    this.updateDisplay(3);
  }

  outOfMissiles(){
    if (this.levelGoal - this.destroyedMeteorCount > this.bases){
      this.continueGame = false;
    }
  }

  gameLost(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(300, 300, 650, 200);
    this.ctx.fillStyle = "yellow";
    this.ctx.strokeText(`Earth has been destroyed, whoops!`, 400, 400);
    this.promptHeader.innerText = "Game Over";
  }

  checkContinue(){    
    if (this.destroyedMeteorCount >= this.levelGoal){
      this.continueGame = false;
    } 
    if (this.bases < 1 ){
      this.continueGame = false;
    }
    return this.continueGame;
  }
}