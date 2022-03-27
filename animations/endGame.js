
export function showEndGame(){
	
	const timeLine = gsap.timeline();
	timeLine	
	.fromTo('.endGame',{
	   x:'100%',display:'flex',opacity:0
   },{
	   x:0,opacity:1})	

	.to('.endGame_infoRsta',{
	   opacity:1
   },'<')
	.fromTo('.endGame_info',{opacity:0,x:200},{
		opacity:1,stagger:.2,x:0
	},'<')
	.fromTo('.infoItem',{opacity:0,y:-50},{
	   // la la y es por que tienen la misma clase que  los botones de partida, se les aplica el mismo efecto de desplazamiento
	   opacity:1,y:0,
   },'<.5')
	
   

}

//parametro left ahce que se valla para la derecha

export function hideEndGame(right=false){
	const timeLine = gsap.timeline()

   if(!right){

	   timeLine		
	   .to('.endGame_info',{
	   opacity:0,x:200,stagger:.2
	   })
	   .to('.endGame_infoRsta',{
		   opacity:0
	   },'<')
	   .to('.endGame',{
		   x:'-100%',opacity:0
	   },'<')
	   .to('.endGame',{
		   display:'none'
	   },'<')
	   
   }else{
	   console.log(right)
	   timeLine		
	   .to('.endGame_info',{
	   opacity:0,x:200,stagger:.2
	   })
	   .to('.endGame_infoRsta',{
		   opacity:0
	   },'<')
	   .to('.endGame',{
		   x:'100%',opacity:0
	   },'<')
	   .to('.endGame',{
		   display:'none'
	   },'<')
	   
   }

}