export function animacionMenu(disp){

	if(disp){
		gsap.fromTo('.menu',{
			opacity:1,display:'flex'
		},{opacity:0,duration:0.3,display:'none'})
		animacionMenuBtn(false)

	
	}else{
		gsap.fromTo('.menu',{
			opacity:0,display:'none'
		},{opacity:1,duration:0.3,display:'flex'})
		animacionMenuBtn(true)
	
		
	}
	
	
	
}

function animacionMenuBtn(displ){
	if(displ){
		gsap.fromTo('.menu_btn_Css',{
			opacity:0,x:-50,
		},{opacity:1,x:0,duration:.3,stagger:.3})
	}else{
		gsap.fromTo('.menu_btn_Css',{
			opacity:1,x:0,
		},{opacity:0,x:'-50',duration:.3,stagger:.1})
		
	}

}


export function animationPartida(disp){
	if(disp){
		gsap.fromTo('.container',{
			opacity:0,display:'none',
		},{opacity:1,display:'flex',duration:.3})
		animationPartidaInfo()
	}else{
		gsap.fromTo('.container',{
			opacity:1,display:'flex',
		},{opacity:0,display:'none',duration:.3})
	}
	
}

function animationPartidaInfo(){

	gsap.fromTo('.infoItem',{
		y:-100,opacity:0,
	},{y:0,opacity:1})
}








export 	function animationHideMenu(){
	
	const timeLine = gsap.timeline({default:{duration:.5}});
	timeLine
	.to('.menu_btn_Css',
		{x:200,opacity:0})
	.to('.menu',{
		opacity:0,display:'none'})	
		.to('.container',{
			opacity:1,display:'flex',duration:.3,},.5)
		.fromTo('.infoItem',{
			y:-100,opacity:0},{
				y:-0,opacity:1
			})
		.fromTo('.containerTablero',{
			opacity:0},{
				opacity:1
			},'<.3')
		.fromTo('.containerBarra',{
			opacity:0},{
				opacity:1
			},'<')	

}
export 	function animationShowMenu(){
		hidePartida()
	const timeLine = gsap.timeline({default:{duration:.2}});
	timeLine
	
	.to('.menu',{
		opacity:1,display:'flex'},'<-.2')	
	.to('.menu_btn_Css',
		{x:0,opacity:1,stagger:.3})	

}

function hidePartida(){
	const timeLine = gsap.timeline();
	timeLine
		.to('.infoItem',{
			y:-100,opacity:0,duration:.5})
		.to('.containerTablero',{
			opacity:0},'<')
		.to('.containerBarra',{
			opacity:0},'<')
		.to('.container',{
			display:'none',opacity:0})

}

























export function animationShowPartida(){
	const timeLine = gsap.timeline();
	timeLine
	.to('.container',{
		opacity:1,display:'flex',duration:.3,},.5)
	.fromTo('.infoItem',{
		y:-100,opacity:0},{
			y:-0,opacity:1
		})
	.fromTo('.containerTablero',{
		opacity:0},{
			opacity:1
		},'<.3')
	.fromTo('.containerBarra',{
		opacity:0},{
			opacity:1
		},'<')

}
export function animationHidePartida(){
	const timeLine = gsap.timeline();
	timeLine
	.to('.infoItem',{
		y:-100,opacity:0,duration:1},5)
	.to('.containerTablero',{
		opacity:0,duration:.4},)
	.to('.containerBarra',{
		opacity:0,duration:.4},)
	.to('.container',{
		opacity:0,})
	
}

export function aimationShowHistorial(){

}
