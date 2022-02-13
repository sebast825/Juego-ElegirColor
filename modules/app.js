

const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelector('.infoMenu')


// import { Cronometro } from "./Cronomoetro.js";
import { Partida ,Tablero} from "./Partida.js";
import {hideMenu} from './Menu.js'
// import { Quiz } from "./Quiz.js";
// import { Tablero } from "./Tablero.js"


let nameGame = ''
export function main(nameGame){
	let par = 	new Partida()
	// par.hideMenu(asd)
	par.activarTablero(nameGame)




}


infoPlay.addEventListener('click',()=>setTimeout(() => {
	main(nameGame)
}, 1));


//menu
menuBtn.forEach(elem=>{
	elem.addEventListener('click',()=>{
		// console.log(elem.c)
		let nameGame=elem.innerHTML
		
		hideMenu(nameGame)
	})
})
//SIMPORTANTEEEEEEEEEEEE
//  infoMenu.addEventListener('click',()=>{new Menu().hideMenu(this.value)})