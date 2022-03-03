

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
	let puntos = new Puntos();
	let par = new Partida();	
	par.activarTablero();

	
	 selectGame(puntos,cronometro,puntos,par);

	
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
		//se reiniciar los 2 contadores :)
		if(cronometro.getTerminar != false || puntos.getTerminar != false){
			cronometro.getTerminar == true;
			puntos.getTerminar == true;
		}
	
		elem.addEventListener('click',()=>{
			console.log('infoMenu')
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
			console.log('btnComun' ,puntos);
			puntos.modificarPuntos(elem.classList[1]);	
			par.clickBtn()
		})
	})
}
function botonDeathMode(puntos,par,cronometro){
	btn.forEach(elem=>{
		elem.addEventListener('click',()=>{

			if(puntos.modificarPuntosDeathMode(elem.classList[1])){

				cronometro.tiempo(false)				
			}else{
				cronometro.getTerminar('Te equivocaste! ')
			}
			par.clickBtn()
		})
	})
}
function selectGame(cronometro,puntos,par){
	menuBtn.forEach(elem=>{
		elem.addEventListener('click',()=>{
			hideMenu();
			cronometro.selecTipeGame(elem.value);

			// let tipoJuego = puntos.selecTipeGame(elem.value)
			puntos.selecTipeGame(elem.value)
			// selectPuntos(tipoJuego,puntos,cronometro,par);

		});
	})
}

function selectPuntos(tipeGame,puntos,cronometro,par){
	setTimeout(()=>{
		// console.log(tipeGame)
		if (tipeGame != 'DeathMode'){

			botonComun(puntos,par)
		}else{
			botonDeathMode(puntos,par,cronometro)
		}
	},200)
}
main()









	

