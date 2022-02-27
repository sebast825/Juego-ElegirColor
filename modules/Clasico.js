import { Contador } from "./Contador.js";
const contador = document.querySelector('.contador');



export class Clasico extends Contador{

	iniciarContador(){
		
		let interval = setInterval(()=>{			
	
			if(this.terminar){
				clearInterval(interval);
				
			}else{
				this.time += 1
			}
			contador.innerHTML = this.time;	
			// if(this.time >= 50){
			// 	this.terminar = true
			// 	this.getTerminar('Te quedaste sin tiempo! ')
			// }	
					
		},100)
	}
}