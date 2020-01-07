import "./styles/index.scss";
const App = require("./scripts/app.js");
// const Game = require("./scripts/game.js");
import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded", ()=>{
  const canvas = document.getElementById("game-canvas");
  
  const ctx = canvas.getContext("2d");
  // App(ctx);
  Game(ctx);
});