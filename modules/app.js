const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelectorAll('.infoMenu')
const endGame = document.querySelector('.endGame');

 const container = document.querySelector('.container')
 const puntoss = document.querySelector('.puntos');
 const barra = document.querySelector('.barra');

 
 import { mostrarHistorial,recuperarLocalStoarage} from './historial.js'
import { Partida} from "./Partida.js";
import {hideMenu, seFinish,playFE} from './Menu.js'
import { Cronometro } from "./Cronometro.js";
import { Global } from "./Global.js";
import { Puntos } from "./Puntos.js";
import { Contador } from "./Contador.js";
import { Barra } from "./Barra.js";
import {animationShowMenu,animationHideMenu,hideHistorialContent,showHistorial,hideHistorial} from './animations.js'
const btn = document.querySelectorAll('.btn')


function main(){

	let cronometro = new Cronometro();
	let puntos = new Puntos();
	let par = new Partida();	
	let bar = new Barra()

	par.activarTablero();
	 recuperarLocalStoarage()
	selectGame(puntos,cronometro,bar);
	selecTipeBtn(cronometro,puntos,par,bar)
	
	
	infoPlay.addEventListener('click',()=>{
		
		par.mostrarBotones()
		barra.style.width = '0%'
		cronometro.reiniciarCronometro((callBack)=>{
			let respuesta = cronometro.getRespuesta()
				seFinish(puntos,cronometro,respuesta,par)
			
		})	
			playFE(cronometro)
		

		bar.selectBar(cronometro)
		puntos.reiniciarPuntos()

	})
	
	infoMenu.forEach(elem=>{

			elem.addEventListener('click',()=>{
				bar.setTerminar(true)
				par.ocultarBotnoes()
				cronometro.setTerminar(true);
				puntos.setTerminar(true)
				hideMenu()
				
				playFE(cronometro)

			})
		})
}

function selecTipeBtn(cronometro,puntos,par,bar){
	
	btn.forEach(elem=>{
		elem.addEventListener('click',()=>{
			if (puntos.tipeGame != 'DeathMode'){

				puntos.modificarPuntos(elem.classList[1],(callBack)=>{
					let respuesta = puntos.getRespuesta()
		
					seFinish(puntos,cronometro,respuesta,par)
				});	

				if(puntos.tipeGame == 'Clasico'){
					bar.barraComun(puntoss.innerText)

				}

			}else{
				par.iniciarSnowMan()

				if(puntos.modificarPuntosDeathMode(elem.classList[1])){
					//le va a sumar tiempo
					// par.snowMan()
					cronometro.tiempo(false)	
					bar.deathMode(cronometro.getTime())

				}else{
					let respuesta = puntos.getRespuesta()
					seFinish(puntos,cronometro,respuesta,par)
				}
			}
	
			par.clickBtn()
			
			
		})
	})	 
}


function selectGame(cronometro,puntos,bar){
	
	menuBtn.forEach(elem=>{
		elem.addEventListener('click',()=>{
			console.log(elem.value)
			hideMenu();
			cronometro.selecTipeGame(elem.value);
			puntos.selecTipeGame(elem.value)
			
			if(cronometro.getGametipe() != 'Clasico'){
				bar.barFull(cronometro)
			}
		
		});
	})
	
}


main()


const historial = document.querySelector('.historial');
const menu_historial = document.querySelector('.menu_historial');
const btnHistorial = document.querySelectorAll('.btn_historial');
const menu = document.querySelector('.menu')
const infoMenuHistorial = document.querySelector('.infoMenuHistorial')


menu_historial.addEventListener('click',()=>{

	animationHideMenu()
	showHistorial()
	
	btnHistorial.forEach(elem=>{
		elem.addEventListener('click',()=>{
		
			mostrarHistorial(elem.value)
		})
	})
})

infoMenuHistorial.addEventListener('click',()=>{
	
	hideHistorial()


})

const menu_information = document.querySelector('.menu_information');
const infoMenuInstruction = document.querySelector('.infoMenuInstruction');
const instructions = document .querySelector('.instructions');

menu_information.addEventListener('click',()=>{
	instructions.style.display = 'flex';
	animationHideMenu()

})

infoMenuInstruction.addEventListener('click',()=>{
	instructions.style.display = 'none';
	animationShowMenu()
})


	

