
export function showHistorialContent(){
	const timeLine = gsap.timeline()
	timeLine
	.to('.historial_info_titulo',{
		opacity:1
	})
	.to('.historial_info',{
		opacity:1},'<')

	.fromTo('.historial_info_partida',{opacity:0,x:-100},{
		opacity:1,stagger:.1,x:0,duration:.4,ease:'power2.out'
	},'<')
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

	.to('.btn_historial',{
			opacity:0},'<.1')
	.to('.historial_info',{
		 	opacity:0},'<')
	.fromTo('.historial',{},{
		x:'-100%',opacity:0,},'<')
	.to('.historial',{
		display:'none'
	})
	
}

export function showHistorial(){
	const timeLine = gsap.timeline();
	timeLine
	.fromTo('.historial',{
		x:'-100%',display:'flex',opacity:0
	},{
		duartion:.3,x:0,opacity:1
	})
	.fromTo('.btn_historial',{
		opacity:0,x:-100,y:100
	},{
		opacity:1,x:0,y:0,stagger:.05},'<.1')
	 
		 

}