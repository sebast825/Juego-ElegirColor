import { Contador } from "./Contador.js";

const puntos = document.querySelector('.puntos');


export class Puntos extends Contador{
	parametro = 'yellow';
	puntos = 0;
	


	modificarPuntos(clases){
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
		
		if (this.modificarPuntos(clases)){

			return true	
			
		}else{					
			return false
		}	 				
 	}

	 selectGame(tipeGame,clases){		
		if (tipeGame == 'DeathMode'){
			this.modificarPuntosDeathMode(clases);
		}else {
			this.modificarPuntos(clases);
		}
	}
	

	 reiniciarPuntos(tipeGame){
		
		this.tipeGame = tipeGame;
		this.time = 0;
		puntos.innerHTML = this.puntos;
		
		if(this.terminar){
			this.terminar = false;
		
			
		}else{
			this.terminar = true;
			
		}
}
}