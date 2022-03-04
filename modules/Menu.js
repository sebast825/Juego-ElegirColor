const menu = document.querySelector('.menu')
const menuBtn = document.querySelectorAll('.menuBtn')
const endGame = document.querySelector('.endGame')
const container = document.querySelector('.container');
// import { Cronometro } from "./app.js"
import { Cronometro } from "./Cronometro.js"


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

