

const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelectorAll('.infoMenu')



import { Partida} from "./Partida.js";
import {hideMenu, selectGame} from './Menu.js'
import { Cronometro } from "./Cronometro.js";
import { Global } from "./Global.js";
import { Puntos } from "./Puntos.js";
const btn = document.querySelectorAll('.btn')

let gameTipe = undefined;

function main(tipeGame){
	let tipeGam = tipeGame;
	let cronometro = new Cronometro();
	let puntos = new Puntos()
	boton()
	
	let par = new Partida();
	par.activarTablero();
	menuBtn.forEach(elem=>{
		elem.addEventListener('click',()=>{
			hideMenu();
			cronometro.selecTipeGame(elem.value)
			cronometro.selectFunction()
			
			gameTipe = elem.value;
		});
	
	})
	
	infoPlay.addEventListener('click',()=>{
		cronometro.reiniciarCronometro(tipeGam);
		// puntos.reiniciarPuntos(tipeGam)
	})
}

function boton(){
	btn.forEach(elem=>{
		elem.addEventListener('click',()=>{

			puntos.modificarPuntos(elem.classList[1])

		
			par.clickBtn()
		})
	})
}
main()



infoMenu.forEach(elem=>{
	elem.addEventListener('click',()=>{
		hideMenu()
	})
})





	

