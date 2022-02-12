

const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelector('.infoMenu')


import { Cronometro } from "./Cronomoetro.js";
import { Menu } from "./Menu.js";
import { Quiz } from "./Quiz.js";
import { Tablero } from "./Tablero.js"



export function main(){
	
	const tablero = new Tablero();
	tablero.createTablero();
	tablero.numArray();
	tablero.setColor();

	const cronometro = new Cronometro();
	cronometro.iniciarContador()

}


infoPlay.addEventListener('click',()=>setTimeout(() => {
	 main()
}, 1));


//menu
menuBtn.forEach(elem=>{
	elem.addEventListener('click',()=>{
		new Menu().hideMenu()
	})
})

 infoMenu.addEventListener('click',()=>{new Menu().hideMenu()})