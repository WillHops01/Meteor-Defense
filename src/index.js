import "./styles/index.scss";
//const App = require("./scripts/app.js");
// const Game = require("./scripts/game.js");
import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded", ()=>{
  const canvas = document.getElementById("game-canvas");  
  const ctx = canvas.getContext("2d");

  const SCREEN_WIDTH = 1200;
  const SCREEN_HEIGHT = 800;
  ctx.canvas.width = SCREEN_WIDTH;
  ctx.canvas.height = SCREEN_HEIGHT;

  let game = new Game(ctx, SCREEN_WIDTH, SCREEN_HEIGHT);
  //let backingAudio = document.getElementById("backing-track");
  // backingAudio.addEventListener("load", () => {
  //   debugger;
  //   new Audio(backingAudio.src).play();
  // }, false);
  
  canvas.addEventListener("click", game.handleClick, false);
  //game.runGame();
});