import { Contador } from "./Contador.js";

const puntos = document.querySelector('.puntos');


export class Puntos extends Contador{
	parametro = 'yellow';
	puntos = 0;
	
	

	modificarPuntos(clases){
		if(this.terminar ) return
console.log('puntosClasico')
 		if(clases === this.parametro){

 			this.puntos +=1;
			puntos.innerHTML = this.puntos;
			
			if(this.tipeGame == 'Clasico' && puntos ==5){
				this.terminar == true;
			}
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