import { main } from "./app.js"
//  import { Contador } from "./Contador.js";

const container = document.querySelector(".contianer")
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelector('.infoMenu')
const menu = document.querySelector('.menu');

export class Menu{
	
	hideMenu(){
		if(menu.style.display == "none"){
			menu.style.display = "flex"
			menuBtn.forEach(elem=>{
				elem.addEventListener('click',()=>{
					elem.style.display = "block"		
				})
		})
		}else{
			menu.style.display = "none"
			menuBtn.forEach(elem=>{
				elem.addEventListener('click',()=>{
					elem.style.display = "none"		
				})
	})
	}}


	
}

 
