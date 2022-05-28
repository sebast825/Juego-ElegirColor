export 	function animationShowMenu(){
	const timeLine = gsap.timeline();
	timeLine	
	 .fromTo('.menu',{
		 x:'100%',display:'flex',
	 },{
		 x:0,})	
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
   },'<')
   // document.querySelector('.menu').style.display = 'none'
   
}

///////////////////////////
//eventos over
const menuBtn = document.querySelectorAll('.menu_btn');
const customText = document.querySelector(".menu_customText");
const menu_info = document.querySelector(".menu_info");

export function eventMenu(){
	menuBtn.forEach(element => {
		element.addEventListener("mouseover",()=>{
			let value = element.value;
			derivarAnimacion(value);
	})
}); 

	menuBtn.forEach(element => {
		element.addEventListener("mouseout",()=>{
	
			customText.innerHTML = "Click yellow button to win points!";

	})
	}); 
}

function derivarAnimacion(value){

	if(value=="Clasico"){
		customText.innerHTML = "Do 11 points to Win!";	
	}else if(value=="ContraReloj"){
		customText.innerHTML = "You have 40 seconds to do all the points you can!";
	}else if(value=="DeathMode"){
		customText.innerHTML = "Win Points to win time, Be Carefull! If you miss, will lose!";
	}else{
		console.log('error');
		}


}