const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelectorAll('.infoMenu')
const endGame = document.querySelector('.endGame');
const endGame_rsta = document.querySelector('.endGame_rsta');
 const endGame_puntos = document.querySelector('.endGame_puntos');
 const endGame_tiempo = document.querySelector('.endGame_tiempo')
 const container = document.querySelector('.container')


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
			
setTimeout(() => {
	do{
			console.log(puntos.getTerminar(),cronometro.getTerminar())
		// seFinish(puntos,cronometro)
	break
	

}while(puntos.getTerminar() == true || cronometro.getTerminar() == true)
}, 1000);
		
			

	
		
	})

	
		
		infoMenu.forEach(elem=>{
//se reiniciar los 2 contadores :)
		// asi no hay problemiyas con los cambios de color de deathMode
				
			if(cronometro.getTerminar != false || puntos.getTerminar != false){
	
				cronometro.getTerminar = true;
				puntos.getTerminar = true;
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

					seFinish(puntos,cronometro)
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

export function seFinish(puntos,cronometro){
	console.log('estasmos Se FENEEEEEE')
	
		puntos.terminar = true;
	cronometro.terminar = true;

	// console.log( cronometro.getTerminar(),puntos.getTerminar())
	endGame.style.display = 'flex';
	container.style.display = 'none';
	let respuesta = puntos.getRespuesta();
	
	
	endGame_rsta.innerHTML = respuesta; 
	endGame_puntos.innerHTML = `Puntos: ${puntos.getPuntos()}!`;
	endGame_tiempo.innerHTML = `Tiempo: ${cronometro.getTime()} `;


	
		
}
main()









	

