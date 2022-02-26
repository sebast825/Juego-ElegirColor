 const puntos = document.querySelector('.puntos');
 const contador = document.querySelector('.contador');
 const infoMenu = document.querySelector('.infoMenu');
 const infoPlay = document.querySelector('.infoPlay');
 const endGame = document.querySelector('.endGame');
 const endGame_rsta = document.querySelector('.endGame_rsta');
 const endGame_puntos = document.querySelector('.endGame_puntos');


 export class Contador{
 	parametro = 'yellow';
 	time = 0;
	puntos = 0;
	terminar = true;
	// finalizarContador = true

	atr(){
		console.log('llegamso hasta aca :v')		
	}

 	modificarPuntos(clases){
		console.log('usper')
		if(this.terminar ) return

 		if(clases[1] === this.parametro){

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
 	
	 delay(){
		if(!this.terminar){
			setTimeout(()=>{
				this.iniciarContador()
			},200)
		}else{
			this.iniciarContador()
		}
	 }

 	
	iniciarContador(clasico){
		
		let interval = setInterval(()=>{			
	
			if(this.terminar){
				clearInterval(interval);
				
			}else{
				this.time += 1
			}
			contador.innerHTML = this.time;	
			if(clasico && this.time >= 50){
				this.terminar = true
				this.getTerminar('Te quedaste sin tiempo! ')
			}	
					
		},100)
	}


	reiniciarEstadisticas(){
		
			
			this.time = 0;
			this.puntos = 0;
			puntos.innerHTML = this.puntos;
			
			if(this.terminar){
				this.terminar = false;
				infoPlay.innerHTML =` <i class="fa-solid fa-stop"></i>  `
			
				
			}else{
				this.terminar = true;
				infoPlay.innerHTML = (`<i class="fas fa-play-circle"></i>`)
				
			}
				this.delay();
	}

	
	elegirJuego(nameGame){
		this.gameTipe = nameGame;
		let clase = new Contador();
				
		return clase;
	}

	getTerminar(respuesta='',time = undefined){
		endGame.style.display = 'flex';
		endGame_puntos.innerHTML = this.puntos;
		endGame_rsta.innerHTML = respuesta;  
	
	}
}






