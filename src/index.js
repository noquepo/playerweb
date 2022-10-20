import { play } from "./module/botonFunctions";
let userInput = prompt("1 reproduce la musica");
export function sound() {if (parseInt(userInput) === 1) {
  play();
}
}