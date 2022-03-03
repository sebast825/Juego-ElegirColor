import { Contador } from "./Contador.js";

const puntos = document.querySelector('.puntos');


export class Puntos extends Contador{
	parametro = 'yellow';
	puntos = 0;
	


	modificarPuntos(clases){
		console.log(clases)
		if(this.terminar ) return

 		if(clases === this.parametro){

 			this.puntos +=1;
			 puntos.innerHTML = this.puntos;
			return true;
 		}
 		else{

 			this.puntos--;
			 puntos.innerHTML = this.puntos;
			return false;
 		}		
		 
 	}
	
	modificarPuntosDeathMode(clases){
		console.log(clases)
		if (this.modificarPuntos(clases)){

			return true	
			
		}else{					
			return false
		}	 				
 	}

	//  selectGame(tipeGame,clases){		
	// 	if (tipeGame == 'DeathMode'){
	// 		this.modificarPuntosDeathMode(clases);
	// 	}else {
	// 		this.modificarPuntos(clases);
	// 	}
	// }
	

	 reiniciarPuntos(){
		
			this.puntos = null;

		
		puntos.innerHTML = this.puntos;
		
		if(this.terminar){
			this.terminar = false;
		
			
		}else{
			this.terminar = true;
			
		}
}
}