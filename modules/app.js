

const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelector('.infoMenu')



import { Partida ,Tablero} from "./Partida.js";
import {hideMenu} from './Menu.js'
import { Contador } from "./Contador.js";

const btn = document.querySelectorAll('.btn')


let nameGame = ''

let par = new Partida();
let contador =  new Contador();



infoPlay.addEventListener('click',()=>{

	contador.reiniciarEstadisticas();
	par.activarTablero();

});

infoMenu.addEventListener('click',()=>{

	contador.iniciarContador();
})


//menu
menuBtn.forEach(elem=>{
	elem.addEventListener('click',()=>{		
		
		let nameGame=elem.innerHTML;
		hideMenu(nameGame);
	})
})


btn.forEach(elem =>{
	elem.addEventListener('click',()=>{
		
		contador.modificarPuntos(elem.classList)
	})
})