
const menu = document.querySelector('.menu');
const infoPlay = document.querySelector('.infoPlay')

import { Menu } from "./Menu.js";
import { Quiz } from "./Quiz.js";
import { Tablero } from "./Tablero.js"



export function main(){
	const tablero = new Tablero();
	tablero.createTablero();
	tablero.numArray();
	tablero.setColor();

	
}


infoPlay.addEventListener('click',()=> new Menu().iniciarContador());
// main()