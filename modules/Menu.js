const menu = document.querySelector('.menu')
const menuBtn = document.querySelectorAll('.menuBtn')
const endGame = document.querySelector('.endGame')
const container = document.querySelector('.container');
// import { Cronometro } from "./app.js"
import { Cronometro } from "./Cronometro.js"


export function hideMenu(){

	

	endGame.style.display = 'none'
	console.log('atr perri')
	if(menu.style.display == "none"){
		menu.style.display = "flex";
		menuBtn.forEach(elem=>{
			elem.addEventListener('click',()=>{
				elem.style.display = "block"		
			})
		})
	}else{
		menu.style.display = "none";

		menuBtn.forEach(elem=>{
			elem.addEventListener('click',()=>{
				elem.style.display = "none"		
			})
		})
	}
	
}

export function selectGame(parametro){
	console.log(parametro)
	if (parametro == 'DeathMode'){
		return  new DeathMode();
	}else if(parametro == 'Clasico'){
		return  new Clasico();
	}else if(parametro == 'ContraReloj'){
		return  new ContraReloj();
	}else{
		console.log('error select Game')
	}
}