const menu = document.querySelector('.menu')
const menuBtn = document.querySelectorAll('.menuBtn')
const endGame = document.querySelector('.endGame')
import { Clasico } from "./Clasico.js"
// import { contador } from "./app.js"
import { Contador } from "./Contador.js"
import { ContraReloj } from "./ContraReloj.js"
import { DeathMode } from "./DeathMode.js"


export function hideMenu(asd = 'none'){

	endGame.style.display = 'none'
	
	if(menu.style.display == "none"){
		menu.style.display = "flex"
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