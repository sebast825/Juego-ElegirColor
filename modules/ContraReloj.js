import { Contador } from "./Contador.js";

const contador = document.querySelector('.contador');
const endGame = document.querySelector('.endGame')

export class ContraReloj extends Contador{

	iniciarContador(){
		this.time = 100
		let interval = setInterval(()=>{			
	
			if(this.terminar ){
				clearInterval(interval);
				
			}else{
				this.time -= 1
			}
			contador.innerHTML = this.time;	
		if(this.time == 0){
			this.terminar = true;
			this.getTerminar()}			

		},100)
	}

	getTerminar(){
		endGame.style.display = 'flex';
		endGame.innerHTML = `<h2>Hiciste${this.puntos} puntos </h2>`
	}
	}
	