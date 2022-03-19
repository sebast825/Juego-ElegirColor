export 	function animationShowMenu(){
	const timeLine = gsap.timeline();
	timeLine
	
	 .to('.menu',{
	 	opacity:1,display:'flex',delay:.1})	
	 .to('.menu_btn_Css',
	 	{x:0,opacity:1,stagger:.3})	

}
export function animationHideMenu(){
	const timeLine = gsap.timeline({default:{duration:.5}});
	timeLine
	.to('.menu_btn_Css',
		{x:200,opacity:0})
	.to('.menu',{
		opacity:0,display:'none'})	
}

export function hidePartida(){
	const timeLine = gsap.timeline();
	timeLine
		.to('.infoItem',{
			y:-100,opacity:0,duration:.5})
		 .to('.containerTablero',{
		 	opacity:0},'<')
		 .to('.containerBarra',{
		 	opacity:0},'<')
		.to('.container',{
		 	display:'none',opacity:0},'<')
			

}
export function showPartida(){
	const timeLine = gsap.timeline();
	timeLine
	.to('.container',{
		opacity:1,display:'flex',duration:.3,},.5)
	.to('.infoItem',{
			y:0,opacity:1
		})
	.to('.containerTablero',{
			opacity:1
		},'<.3')
	.to('.containerBarra',{
			opacity:1
		},'<')

}


export function showEndGame(){
	const timeLine = gsap.timeline();
	timeLine
	
	.to('.endGame', {
		opacity:1,display:'flex',
	},.1)
	.to('.infoItem',{
		//la la y es por que tienen la misma clase que  los botones de partida, se les aplica el mismo efecto de desplazamiento
		opacity:1,y:0
	})
	

}

export function hideEndGame(){
	const timeLine = gsap.timeline()
	timeLine
	.to('.infoItem',{
		y:100,opacity:0
	})
	.to('.endGame',{
		opacity:0,duration:.3
	},'<')
	.to('.endGame',{
		display:'none'
	})
}
