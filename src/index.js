import { play } from "./module/botonFunctions.js";
let userInput = prompt("1 reproduce la musica");
if (parseInt(userInput) === 1) {
  play();
}