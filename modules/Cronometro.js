import { Contador } from "./Contador.js";
import { hideMenu } from "./Menu.js";
import { seFinish } from "./app.js";

 const puntos = document.querySelector('.puntos');
 const contador = document.querySelector('.contador');
 const container = document.querySelector('.container')

 const infoPlay = document.querySelector('.infoPlay');
 const endGame = document.querySelector('.endGame');
 
 const infoMenuEnd = document.querySelector('.infoMenuEnd');



 export class Cronometro extends Contador{
 	time = 0;	
	funcionCronometro = undefined;
	// finalizarContador = true

	
	selectFunction(callBack){
		let parametro = this.tipeGame;
		if (parametro == 'DeathMode'){
			 this.cronometroDeathMode(callBack);
		}else if(parametro == 'Clasico'){
			 this.cronometroClasico();
		}else if(parametro == 'ContraReloj'){
			 this.cronometroContraReloj(callBack);
		}else{
			console.log('error select Game')
		}
	}

	
 	
	 delay(callBack){
		if(!this.terminar){
			setTimeout(()=>{
				this.selectFunction(callBack)
				// console.log('delay false')
			},200)
		}else{
			this.selectFunction(callBack)
			// console.log('delay true')
		}
	 }
	 cronometroClasico(){
		
		let interval = setInterval(()=>{			
	
			if(this.terminar){
				clearInterval(interval);
				this.time = null;
				contador.innerHTML = this.time;	

				return
				
			}else{
				this.time += 1
			}
			contador.innerHTML = this.time;	
			
					
		},100)
	}

	cronometroContraReloj(callBack){
		this.time = 3;
		let interval = setInterval(()=>{			
	
			if(this.terminar ){
				clearInterval(interval);
				
			}else{
				this.time -= 0.46
			}
			contador.innerHTML = this.time.toFixed(1);	
		if(this.time <= 0){
			this.terminar = true;
			this.respuesta = 'Te Quedaste sin tiempo! '
			callBack()
			}			

		},100)
	}
	cronometroDeathMode(callBack){
		// this.iniciarSnowMan()
		this.time = 10

		let interval = setInterval(()=>{			
	
			if(this.terminar ){
				clearInterval(interval);
				
			}else{
				this.tiempo(true,callBack);
			}
			contador.innerHTML = this.time;	

		if(this.time == 0 && this.terminar == false){
			this.terminar = true;
			this.respuesta = 'Te Quedaste sin tiempo! '
			callBack()
			// this.terminarRonda()
			}	
		},100)
	}
	tiempo(parametro){
		if(parametro){
			
				this.time -= 1;

			
			
		}else{
			this.time += 6.5; 
		}		
	}
 	
	iniciarCronometro(){
		
		let interval = setInterval(()=>{			
	
			if(this.terminar){
				clearInterval(interval);
				return
				
			}else{
				this.time += 1
			}
			contador.innerHTML = this.time;	
				
					
		},100)
	}



	reiniciarCronometro(callBack){
		
			this.time = 0;
			
			if(this.terminar){
				this.terminar = false;
				infoPlay.innerHTML =`<i class="fas fa-pause-circle"></i>`
			
				
			}else{
				this.terminar = true;
				

				infoPlay.innerHTML = (`<i class="fas fa-play-circle"></i>`)
				
				
			}
				this.delay(callBack);
	}

	getTime(){
		return this.time;
	}
	
	


}






