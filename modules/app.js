

const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelectorAll('.infoMenu')
const endGame = document.querySelector('.endGame');



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

	
	 selectGame(puntos,cronometro,puntos);
	 selecTipeBtn(cronometro,puntos,par)

	
	infoPlay.addEventListener('click',()=>{

		cronometro.reiniciarCronometro();
		puntos.reiniciarPuntos()		
		
		//mismo delay del cronometro
		setTimeout(()=>{
			// console.log(tipeGame)
			console.log(puntos.tipeGame, cronometro.tipeGame)
			
		},200)
	})
	infoMenu.forEach(elem=>{
		//se reiniciar los 2 contadores :)
		if(cronometro.getTerminar != false || puntos.getTerminar != false){

			cronometro.getTerminar == true;
			puntos.getTerminar == true;
		}
	
		elem.addEventListener('click',()=>{
			
			hideMenu()
			cronometro.terminar = false;
			cronometro.reiniciarCronometro();
			puntos.reiniciarPuntos()
		})
	})
}

function selecTipeBtn(cronometro,puntos,par){
	
		btn.forEach(elem=>{
		elem.addEventListener('click',()=>{

			if (puntos.tipeGame != 'DeathMode'){
				puntos.modificarPuntos(elem.classList[1]);	

			}else{
				par.iniciarSnowMan()
				if(puntos.modificarPuntosDeathMode(elem.classList[1])){
					//le va a sumar tiempo
					// par.snowMan()

					cronometro.tiempo(false)	

				}else{
					cronometro.getTerminar('Te equivocaste! ')
				}
			}
	
			par.clickBtn()
		})
	})	 
}


function selectGame(cronometro,puntos){
	
	menuBtn.forEach(elem=>{
		elem.addEventListener('click',()=>{

			hideMenu();
			cronometro.selecTipeGame(elem.value);
			puntos.selecTipeGame(elem.value)
		});
	})
}


main()









	

