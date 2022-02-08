
const menu = document.querySelector('.menu');
const btn = document.querySelectorAll('.btn');

import { Quiz } from "./Quiz.js";
import { Tablero } from "./Tablero.js"



function main(){
	const tablero = new Tablero();
	tablero.createTablero();
	tablero.numArray();
	tablero.setColor();
	// const qu = new Quiz();
	
}

main()