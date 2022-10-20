import { play } from "./module/botonFunctions.js";
let userInput = prompt("1 reproduce la musica");
export function sound() {if (parseInt(userInput) === 1) {
  play();
}
}