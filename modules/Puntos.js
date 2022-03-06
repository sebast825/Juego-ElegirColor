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
			if(this.tipeGame == 'Clasico' && this.puntos ==1){
				this.terminar = true;
				this.respuesta = 'Has alcanzado 30 puntos!'
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
			this.respuesta = `Te equivocaste!`	
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