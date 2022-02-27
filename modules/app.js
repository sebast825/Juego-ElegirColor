

const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelector('.infoMenu')



import { Partida} from "./Partida.js";
import {hideMenu, selectGame} from './Menu.js'
import { Contador } from "./Contador.js";
import { ContraReloj} from './ContraReloj.js'
import {DeathMode} from './DeathMode.js'
import { Global } from "./Global.js";
const btn = document.querySelectorAll('.btn')

let gameTipe = undefined;

function main(gameTipe){
	let par = new Partida();
	par.activarTablero();
	let contador = selectGame(gameTipe);
	contador.reiniciarEstadisticas()
	// console.log(contador,'asd')
}


menuBtn.forEach(elem=>{
	elem.addEventListener('click',()=>{
		hideMenu();
		gameTipe = elem.value;
	})

})


infoPlay.addEventListener('click',()=>{
	main(gameTipe)
	// console.log(gameTipe,'infoplay')
})