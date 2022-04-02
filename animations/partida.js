import {animationShowMenu} from '../animations/menu.js'


//se traba la animacion se se usa la de animationShowMenu
 export function hidePartida(){
 	const timeLine = gsap.timeline();
 	timeLine
 		
		.fromTo('.containerTablero',{},{
			opacity:0,x:-200
		},)
		.fromTo('.infoItem',{},{
			opacity:0
		},'<.1')
		.fromTo('.containerBarra',{},{
			x:-200,opacity:0
		},'<.1')
	
	   .fromTo('.container',{x:0
		},{x:'-100%',},'<')

//ya se corrigio pero por las dudas de alguiene xepcionalmente rapido de clicks, este codigo hace que no se buguee :)

//si se clickea muy rapido cunado esta en partida activa hideMenu y se temrina sin mostrar nada, es una atajadita :)
		let menu = document.querySelector('.menu')

	setTimeout(()=>{
	
		if(menu.style.display=='none'){
			console.log('jejje')
			// menu.style.display == 'flex'
			animationShowMenu()
			
		}
	},500)
		
 }

// //se traba la animacion se se usa la de animationHideMenu

export function showPartida(){


 	const timeLine = gsap.timeline();
 	timeLine
 	//dice flex, si no container aparece antes que menu x default :)

 	.fromTo('.container',{
		x:'-100%',display:'flex'
	},{
		x:0,opacity:1})
		.fromTo('.containerBarra',{x:-200,opacity:0},{
			opacity:1,x:0
		},'<.2')
	
 	.fromTo('.containerTablero',{x:-200,opacity:0},{
 			opacity:1,x:0
 		},'<.1')
 	
		 .fromTo('.infoItem',{opacity:0,x:0,y:0},{
			y:0,opacity:1,stagger:.05	
		},'<.1')
		 
 }


 export function hideTablero(){
	const timeLine = gsap.timeline();

	timeLine

	.to('.btn',{
		opacity:0,duartion:.05
	})
	
 }

 export function showTablero(){
	const timeLine = gsap.timeline();
	timeLine

	.fromTo('.btn',{
		opacity:0,x:0
	},{
		opacity:1,duration:.1
	})
 }