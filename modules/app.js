
const menu = document.querySelector('.menu');
const infoPlay = document.querySelector('.infoPlay')


import { Contador } from "./Contador.js";
import { Menu } from "./Menu.js";
import { Quiz } from "./Quiz.js";
import { Tablero } from "./Tablero.js"



export function main(){
	
	const tablero = new Tablero();
	tablero.createTablero();
	tablero.numArray();
	tablero.setColor();

	const contador = new Contador();
	contador.iniciarContador()

}


infoPlay.addEventListener('click',()=>setTimeout(() => {
	 main()
}, 1));
