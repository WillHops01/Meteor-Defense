export default class gameState{
  constructor(){
    this.bases = 3;
    this.missiles = 10;
    this.level = 1;

    this.basesDiv = document.getElementById("game-info-bases");
    this.missilesDiv = document.getElementById("game-info-missiles");
    this.levelDiv = document.getElementById("game-info-level");

    this.checkContinue = this.checkContinue.bind(this);
    this.destroyBase = this.destroyBase.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);

    this.updateDisplay();
  }

  updateDisplay(){
    this.levelDiv.innerText = `Level: ${this.level}`;
    this.basesDiv.innerText = `Bases: ${this.bases}`;
    this.missilesDiv.innerText = `Missiles: ${this.missiles}`;
  }

  fireMissile(){
    this.missiles -= 1;
    this.updateDisplay();
  }

  resetState(){

  }

  destroyBase(){
    this.bases -= 1;
  }

  checkContinue(){
    if (this.bases >0 ) return true;
    return false;
  }
}