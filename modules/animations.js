export 	function animationShowMenu(){
	const timeLine = gsap.timeline();
	timeLine	
	 .to('.menu',{
	 	opacity:1,display:'flex',},.3)	
	 .to('.menu_btn_Css',
	 	{x:0,opacity:1,stagger:.2},'<')	

}
export function animationHideMenu(){
	const timeLine = gsap.timeline();
	timeLine
	.to('.menu_btn_Css',
		{x:200,opacity:0,stagger:.2,duration:.8})
	.to('.menu',{
		opacity:0,display:'none'},'<')	
}

//se traba la animacion se se usa la de animationShowMenu
export function hidePartida(){
	const timeLine = gsap.timeline();
	timeLine
		.to('.container',{
		display:'none',opacity:0,duration:.4})
		.to('.infoItem',{
			y:-100,opacity:0},'<.1')
		 .to('.containerTablero',{
		 	opacity:0},'<')
		 .to('.containerBarra',{
		 	opacity:0},'<')
		 .to('.menu',{
				opacity:1,display:'flex'},'<')	
		.to('.menu_btn_Css',
				{x:0,opacity:1,stagger:.2},'<')	
}

//se traba la animacion se se usa la de animationHideMenu

export function showPartida(){
	const timeLine = gsap.timeline();
	timeLine
	.to('.menu_btn_Css',
		{x:200,opacity:0,stagger:.2,duration:.8})
	.to('.menu',{
		opacity:0,display:'none'},'<')	
	.fromTo('.container',{
		opacity:0
	},{
		opacity:1,display:'flex'},'<.5')
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
	.to('.endGame_info',{
		opacity:1
	},'<')
	.to('.endGame_infoRsta',{
		opacity:1
	},'<')
	

}

export function hideEndGame(){
	const timeLine = gsap.timeline()
	timeLine
	.to('.infoItem',{
		y:100,opacity:0
	})
	.to('.endGame_info',{
		opacity:0
	},'<')
	.to('.endGame_infoRsta',{
		opacity:0
	},'<')
	.to('.endGame',{
		opacity:0,
	},'<')
	.to('.endGame',{
		display:'none'
	})
}

export function showHistorialContent(){
	const timeLine = gsap.timeline()
	timeLine
	.to('.historial_info_titulo',{
		opacity:1
	})

	.fromTo('.historial_info_partida',{opacity:0,x:-100},{
		opacity:1,stagger:.2,x:0,duration:.4,ease:'power2.out'
	})
}


export function hideHistorialContent(){
	const timeLine = gsap.timeline()
	timeLine
	.to('.historial_info_partida',{
		opacity:0,stagger:.2,x:-100,duration:.4,ease:'power2.out'
	})
	.to('.historial_info_titulo',{
		opacity:0
	})
}

export function hideHistorial(){
	const timeLine = gsap.timeline();
	timeLine

	.to('.historial',{
		display:'none',opacity:0})
	.to('.historial_btn_div',{
			opacity:0},'<.1')
	.to('.historial_info',{
		 	opacity:0},'<')
	
}

export function showHistorial(){
	const timeLine = gsap.timeline();
	timeLine
	.fromTo('.historial',{
		opacity:0
	},{
		opacity:1,display:'flex',duartion:.3
	},.7)
	.to('.historial_btn_div',{
		opacity:1},'<.2')
	 .to('.historial_info',{
		 opacity:1},'<')

}


export function showInstructions(){
	const timeLine = gsap.timeline();
	timeLine
	.to('.instructions',{
		display:'flex'
	})
	.fromTo('.instructions',{
		opacity:0
	},{opacity:1})
	.fromTo('.instruction_menu',{
		opacity:0
	},{opacity:1},'<.1')
	.fromTo('.instructions_type',{
		x:-200,opacity:0
	},{x:0,opacity:1,stagger:.2,ease: "power2.out"},'<')
}
export function hideInstructions(){
	const timeLine = gsap.timeline();
	timeLine
	.to('.instructions_type',{
		x:200,opacity:0, stagger:.2,ease: "power2.out"})
	.to('.instructions',{
		opacity:0,duartion:.3
	},'<')
	.to('.instructions',{
		display:'none'
	})
	.fromTo('.menu',{
		opacity:0
	},{
		display:'flex'
	},'<.1')
	.to('.menu',{
		opacity:1,ease:"power1.out"},'<')
			
	.to('.menu_btn_Css',
		{x:0,opacity:1,stagger:.2},'<')	
	
}