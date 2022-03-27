export 	function animationShowMenu(){
	const timeLine = gsap.timeline();
	timeLine	
	 .fromTo('.menu',{
		 x:'100%',display:'flex',
	 },{
		 x:0,},)	
	 .fromTo('.menu_btn_Css',{
		 x:200
	 },
		 {x:0,opacity:1,stagger:.1},'<')	

}
export function animationHideMenu(){
	const timeLine = gsap.timeline();
	timeLine
	.to('.menu_btn_Css',
		 {x:200,opacity:0})
	.fromTo('.menu',{
		x:0
	},{
		x:'100vw'},'<.2')
   .to('.menu',{
	   display:'none'
   })
   // document.querySelector('.menu').style.display = 'none'
   
}