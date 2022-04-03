import { Contador } from "./Contador.js";

const puntos = document.querySelector('.puntos');



export class Puntos extends Contador{
	parametro = 'yellow';
	puntos = 0;
	
	

	modificarPuntos(clases,callBack){
		if(this.terminar ) return
		
 		if(clases === this.parametro){

 			this.puntos +=1;
			puntos.innerHTML = this.puntos;
			
			if(this.tipeGame == 'Clasico' && this.puntos == 11){
				// this.terminar = true;
				this.respuesta = 'You Win!'
				callBack()
			}
		
			return true;
 		}
 		else{

 			this.puntos--;
			 puntos.innerHTML = this.puntos;
			
			return false;
 		}		
		 
 	}
	
	getPuntos(){
		return this.puntos;
	}
	modificarPuntosDeathMode(clases){
		if (this.modificarPuntos(clases)){

			return true	
			
		}else{				
			this.respuesta = `You miss!`	
			return false
		}	 				
 	}



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