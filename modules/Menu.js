import { lsAlmacenar } from "./historial.js";


const menu = document.querySelector('.menu')
const menuBtn = document.querySelectorAll('.menuBtn')
const endGame = document.querySelector('.endGame')
const container = document.querySelector('.container');
const puntos = document.querySelector('.puntos');
const contador = document.querySelector('.contador');
const infoMenu_EndGame = document.querySelector('.infoMenu_EndGame')
const endGame_rsta = document.querySelector('.endGame_rsta');
 const endGame_puntos = document.querySelector('.endGame_puntos');
 const endGame_tiempo = document.querySelector('.endGame_tiempo');
 const endGame_again = document.querySelector('.endGame_again');
 const barra = document.querySelector('.barra');
 const infoPlay = document.querySelector('.infoPlay');
const historial = document.querySelector('.historial');


import {showPartida,animationHideMenu,animationShowMenu,hidePartida, showEndGame,hideEndGame} from './animations.js'

export function hideMenu(){
	barra.style.width = '0%'

	ocultarPuntos();
	// puntos.innerHTML = null;
	// contador.innerHTML = null;
	// endGame.style.display = 'none';

	if(menu.style.display == "none"){
				
				hidePartida()
			
			
			 animationShowMenu()
			
		


	}else{
		console.log('esta en partida')

		animationHideMenu()
		showPartida()
		
	}
	
}


export function seFinish(puntos,cronometro,respuesta,par){

	playFE(cronometro)


	hidePartida()
	showEndGame()

	par.ocultarBotnoes()
	cronometro.setTerminar(true);
	puntos.setTerminar(true);
	ocultarPuntos();

	endGame_again.addEventListener('click',()=>{

		par.ocultarBotnoes();
		console.log('asd')
		
		//parametro true ahce que se valla para la derecha
		hideEndGame(true)
		showPartida()
		playFE(cronometro)

	})
	infoMenu_EndGame.addEventListener('click',()=>{

	
		hideEndGame(false)
		animationShowMenu()
		
	})
	lsAlmacenar(cronometro,puntos)

	// container.style.display = 'none'
	// endGame.style.display = 'flex'
	
	
	endGame_rsta.innerHTML = respuesta; 
	endGame_puntos.innerHTML = `Puntos: ${puntos.getPuntos()}!`;

	if(cronometro.getGametipe() == 'DeathMode'){

		endGame_tiempo.innerHTML = ` ${cronometro.getTimeTotal().toFixed(2)} `;

	}else{
		endGame_tiempo.innerHTML = `${cronometro.getTime().toFixed(2)} `;

	}

}


function ocultarPuntos  (){
	
	contador.innerHTML = null;
		puntos.innerHTML = null;

	//sin el intervalo en el contador pasa una setInterval mas y no queda vacio :)
	setTimeout(()=>{
		contador.innerHTML = null;
		puntos.innerHTML = null;
	},200)
}

export function playFE(cronometro){
	if(cronometro.getTerminar() == true){
		infoPlay.innerHTML = (`<i class="fas fa-play-circle"></i>`)

	}else{
		infoPlay.innerHTML =`<i class="fas fa-pause-circle"></i>`
			
	}
}