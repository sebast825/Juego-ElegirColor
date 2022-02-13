

const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelector('.infoMenu')


// import { Cronometro } from "./Cronomoetro.js";
import { Partida ,Tablero} from "./Partida.js";
// import { Quiz } from "./Quiz.js";
// import { Tablero } from "./Tablero.js"


let asd = ''
export function main(asd){
	let par = 	new Partida()
	par.hideMenu(asd)
	par.activarTablero()




}


infoPlay.addEventListener('click',()=>setTimeout(() => {
	//  main()
}, 1));


//menu
menuBtn.forEach(elem=>{
	elem.addEventListener('click',()=>{
		// console.log(elem.c)
		main(elem.innerHTML)
	})
})
//SIMPORTANTEEEEEEEEEEEE
//  infoMenu.addEventListener('click',()=>{new Menu().hideMenu(this.value)})