

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

export function hideInstructions(){
	const timeLine = gsap.timeline();
	timeLine
	.to('.instructions_type',{
		x:200,opacity:0, stagger:.2,ease: "power2.out"})
	.fromTo('.instructions',{x:0},{
		opacity:0,duartion:.3,x:'-100%'
	},'<')
	.to('.instructions',{
		display:'none'
	})
	// .fromTo('.menu',{
	// 	opacity:0
	// },{
	// 	display:'flex'
	// },'<.1')
	// .to('.menu',{
	// 	opacity:1,ease:"power1.out"},'<')
			
	// .to('.menu_btn_Css',
	// 	{x:0,opacity:1,stagger:.2},'<')	
	
	
}