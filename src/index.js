import { play, pause } from "./module/botonFunctions.js";
const userInput = prompt("1 reproduce la musica");
if (parseInt(userInput) === 1) {
  play.then(play());
}
const userInput1 = prompt("2 pausa la musica");
if (parseInt(userInput1) === 2) {
  pause.then(pause());
}
