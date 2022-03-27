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
		},{x:'-100%'},'<')
		let menu = document.querySelector('.menu')

	setTimeout(()=>{
	
		if(menu.style.display=='none'){
			console.log('jejje')

			animationShowMenu()
			
		}
	},200)
		
 }

// //se traba la animacion se se usa la de animationHideMenu

export function showPartida(){


 	const timeLine = gsap.timeline();
 	timeLine
 	//dice flex, si no container aparece antes que menu x default :)

 	.fromTo('.container',{
		x:'-100%',display:'flex'
	},{
		x:0})
		.fromTo('.containerBarra',{x:-200,opacity:0},{
			opacity:1,x:0
		},'<')
	
 	.fromTo('.containerTablero',{x:-200,opacity:0},{
 			opacity:1,x:0
 		},'<')
 	
		 .fromTo('.infoItem',{opacity:0,x:0,y:0},{
			y:0,opacity:1,stagger:.1
		},'<.1')

	
	


		 
 }