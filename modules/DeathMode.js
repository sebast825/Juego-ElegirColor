import { Contador } from "./Contador.js";

const contador = document.querySelector('.contador');
const endGame = document.querySelector('.endGame');
const puntos = document.querySelector('.puntos');
const btn = document.querySelectorAll('.btn');

const tablero = document.querySelector('.containerTablero');

export class DeathMode extends Contador{

	array = [];

	iniciarContador(){
		this.iniciarSnowMan()
		this.time = 10

		let interval = setInterval(()=>{			
	
			if(this.terminar ){
				clearInterval(interval);
				
			}else{
				this.tiempo(true);
			}
			contador.innerHTML = this.time;	
		if(this.time == 0 && this.terminar == false){
			this.terminar = true;
			this.getTerminar('Te quedaste sin tiempo! '}			

		},100)
	}
	tiempo(parametro){
		if(parametro){
			this.time -= 1;
		}else{
			this.time += 6.5; 
		}		
	}

	modificarPuntos(clases){
		let supers = super.modificarPuntos(clases);
		if (supers){

			this.tiempo(false);
		}else{					

			this.getTerminar('Te equivocaste!');
		}	 				
 	}

	 //pone el color distinto
	 iniciarSnowMan(){
		 setInterval(()=>{
			 
		this.numArray()
		this.setColor()
		 },500) 
	 }

	 snowMan(num,elem){
		 elem.classList.remove('black')
		 if(this.array[num]==1){
			 elem.classList.add('black')
		 }
		
	 }
	 numArray(){
		this.array = [];
		
		while(this.array.length < 4){
			let mat = Math.floor(Math.random(1)*4);			
			this.array.push(mat);
			
		}
				
	}
	setColor(){
		let num = 0;
	   tablero.childNodes.forEach(elem =>{
	   this.snowMan(num,elem);
	   num++})
   }
}