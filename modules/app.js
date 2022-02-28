

const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelectorAll('.infoMenu')



import { Partida} from "./Partida.js";
import {hideMenu} from './Menu.js'
import { Cronometro } from "./Cronometro.js";
import { Global } from "./Global.js";
import { Puntos } from "./Puntos.js";
import { Contador } from "./Contador.js";
const btn = document.querySelectorAll('.btn')


function main(){
	let cronometro = new Cronometro();
	let puntos = new Puntos()
	let par = new Partida();	
	par.activarTablero();

	
	 selectGame(cronometro,puntos);

	
	infoPlay.addEventListener('click',()=>{
		cronometro.reiniciarCronometro();
		puntos.reiniciarPuntos()
		
//mismo delay del cronometro
		setTimeout(()=>{
			// console.log(tipeGame)
			if (puntos.gameTipe != 'DeathMode'){
				botonComun(puntos,par)
			}else{
				botonDeathMode(puntos,par,cronometro)
			}
		},200)
	})
	infoMenu.forEach(elem=>{
		elem.addEventListener('click',()=>{
			hideMenu()
			cronometro.terminar = false;
			cronometro.reiniciarCronometro();
			puntos.reiniciarPuntos()
		})
	})
}

function botonComun(puntos,par){	
	btn.forEach(elem=>{
		elem.addEventListener('click',()=>{

			puntos.modificarPuntos(elem.classList[1])		
			par.clickBtn()
		})
	})
}
function botonDeathMode(puntos,par,cronometro){
	btn.forEach(elem=>{
		elem.addEventListener('click',()=>{

			if(puntos.modificarPuntosDeathMode(elem.classList[1])){

				cronometro.tiempo(false)				
			}{
				cronometro.getTerminar('Te equivocaste! ')
			}
			par.clickBtn()
		})
	})
}
function selectGame(cronometro,puntos){
	menuBtn.forEach(elem=>{
		elem.addEventListener('click',()=>{
			hideMenu();
			cronometro.selecTipeGame(elem.value)
			puntos.selecTipeGame(elem.value)

		});
	})
}
main()









	

