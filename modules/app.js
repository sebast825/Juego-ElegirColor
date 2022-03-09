const infoPlay = document.querySelector('.infoPlay')
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelectorAll('.infoMenu')
const endGame = document.querySelector('.endGame');

 const container = document.querySelector('.container')
 const puntoss = document.querySelector('.puntos');



import { Partida} from "./Partida.js";
import {hideMenu, seFinish} from './Menu.js'
import { Cronometro } from "./Cronometro.js";
import { Global } from "./Global.js";
import { Puntos } from "./Puntos.js";
import { Contador } from "./Contador.js";
import { Barra } from "./Barra.js";
const btn = document.querySelectorAll('.btn')


function main(){

	let cronometro = new Cronometro();
	let puntos = new Puntos();
	let par = new Partida();	
	let bar = new Barra()

	par.activarTablero();
	
	selectGame(puntos,cronometro,puntos);
	selecTipeBtn(cronometro,puntos,par,bar)

	
	infoPlay.addEventListener('click',()=>{
		par.mostrarBotones()

		cronometro.reiniciarCronometro((callBack)=>{
			let respuesta = cronometro.getRespuesta()
				seFinish(puntos,cronometro,respuesta,par)
			
		})		
		puntos.reiniciarPuntos()
	})
	
		infoMenu.forEach(elem=>{

			

			elem.addEventListener('click',()=>{
				par.ocultarBotnoes()
				cronometro.setTerminar(true);
				puntos.setTerminar(true)
				hideMenu()
				
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

			}else{
				par.iniciarSnowMan()

				if(puntos.modificarPuntosDeathMode(elem.classList[1])){
					//le va a sumar tiempo
					// par.snowMan()
					cronometro.tiempo(false)	

				}else{
					let respuesta = puntos.getRespuesta()
					seFinish(puntos,cronometro,respuesta,par)
				}
			}
	
			par.clickBtn()
			bar.barraComun(puntoss.innerHTML)
			
			
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









	

