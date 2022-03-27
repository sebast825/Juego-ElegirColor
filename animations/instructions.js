

export function showInstructions(){
	const timeLine = gsap.timeline();
	timeLine
	.to('.instructions',{
		display:'flex'
	})
	.fromTo('.instructions',{
		opacity:0,x:'-100%'
	},{opacity:1,x:0},'<')
	.fromTo('.instruction_menu',{
		opacity:0
	},{opacity:1},'<.1')
	.fromTo('.instructions_type',{
		x:-200,opacity:0
	},{x:0,opacity:1,stagger:.2,ease: "power2.out"},'<')
}
import {animationShowMenu} from '../animations/menu.js'


export function hideInstructions(){
	const timeLine = gsap.timeline();
	timeLine
	.to('.instructions_type',{
		x:200,opacity:0, stagger:.2,ease: "power2.out"})
	.fromTo('.instructions',{x:0},{
		duartion:.3,x:'-100%',display:'none'
	},'<')


	//si se clickea muy rapido cunado esta en partida activa hideMenu y se temrina sin mostrar nada, es una atajadita :)
	let menu = document.querySelector('.menu')

	setTimeout(()=>{
	
		if(menu.style.display=='none'){
			console.log('jejje')

			animationShowMenu()
			
		}
	},500)
	
}