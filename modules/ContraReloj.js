import { Contador } from "./Contador.js";

const contador = document.querySelector('.contador');
const endGame = document.querySelector('.endGame')

export class ContraReloj extends Contador{

	iniciarContador(){
		this.time = 10
		let interval = setInterval(()=>{			
	
			if(this.terminar ){
				clearInterval(interval);
				
			}else{
				this.time -= 0.46
			}
			contador.innerHTML = this.time.toFixed(1);	
		if(this.time <= 0){
			this.terminar = true;
			this.getTerminar('Te quedaste sin tiempo! ')}			

		},100)
	}

	
	}
	