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
		if(this.time == 0){
			this.terminar = true;
			this.getTerminar()}			

		},100)
	}
	tiempo(parametro){
		if(parametro){
			// this.time -= 1;
		}else{
			this.time += 10; 
		}		
	}

	modificarPuntos(clases){
		console.log(clases[1])
		
		if(this.terminar ) return

 		if(clases[1] === this.parametro){

 			this.puntos +=1;
			this.tiempo(false)
 		}
 		else{

 			this.getTerminar()
 		}

 		puntos.innerHTML = this.puntos		 
				
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