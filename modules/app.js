

const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelector('.infoMenu')


// import { Cronometro } from "./Cronomoetro.js";
import { Partida ,Tablero} from "./Partida.js";
import {hideMenu} from './Menu.js'
import { Contador } from "./Contador.js";
// import { Quiz } from "./Quiz.js";
// import { Tablero } from "./Tablero.js"


let nameGame = ''

let par = null;

export function main(nameGame){
	console.log('asd')
	let par = 	new Partida()
	// par.hideMenu(asd)
	par.activarTablero(nameGame)

}


infoPlay.addEventListener('click',()=>setTimeout(() => {
	par = 	new Partida()
		// par.hideMenu(asd)
		par.activarTablero(nameGame)
}, 1));


//menu
menuBtn.forEach(elem=>{
	elem.addEventListener('click',()=>{
		// new Contador().finalizarContador = false
		
		
		let nameGame=elem.innerHTML		
		hideMenu(nameGame)
		
		
		
	})
})
//SIMPORTANTEEEEEEEEEEEE