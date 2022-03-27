
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