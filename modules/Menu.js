const menu = document.querySelector('.menu')
const menuBtn = document.querySelectorAll('.menuBtn')
const endGame = document.querySelector('.endGame')
const container = document.querySelector('.container');
// import { Cronometro } from "./app.js"
import { Cronometro } from "./Cronometro.js"

const endGame_rsta = document.querySelector('.endGame_rsta');
 const endGame_puntos = document.querySelector('.endGame_puntos');
 const endGame_tiempo = document.querySelector('.endGame_tiempo')

export function hideMenu(){

	

	endGame.style.display = 'none'
	if(menu.style.display == "none"){
		menu.style.display = "flex";
		container.style.display = 'none'
		menuBtn.forEach(elem=>{
			elem.addEventListener('click',()=>{
				elem.style.display = "block"		
			})
		})
	}else{
		menu.style.display = "none";
		container.style.display = 'flex';

		menuBtn.forEach(elem=>{
			elem.addEventListener('click',()=>{
				elem.style.display = "none"	;
	
			})
		})
	}
	
}


export function seFinish(puntos,cronometro,respuesta){
	console.log('estasmos Se FENEEEEEE')
	cronometro.setTerminar(true);
	puntos.setTerminar(true)

	
	endGame.style.display = 'flex';
	container.style.display = 'none';
	
	
	endGame_rsta.innerHTML = respuesta; 
	endGame_puntos.innerHTML = `Puntos: ${puntos.getPuntos()}!`;
	if(cronometro.getGametipe() == 'DeathMode'){
		endGame_tiempo.innerHTML = `Tiempo jugado: ${cronometro.getTimeTotal().toFixed(2)} `;

	}else{
		endGame_tiempo.innerHTML = `Tiempo: ${cronometro.getTime().toFixed(2)} `;

	}


	
		
}
