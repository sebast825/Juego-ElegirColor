 const puntos = document.querySelector('.puntos');
 const contador = document.querySelector('.contador');
 const infoMenu = document.querySelector('.infoMenu');
 const infoPlay = document.querySelector('.infoPlay');
 const endGame = document.querySelector('.endGame')


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
		console.log(clases[1])
		if(this.terminar ) return

 		if(clases[1] === this.parametro){

 			this.puntos +=1;
 		}
 		else{

 			this.puntos--;
 		}

 		puntos.innerHTML = this.puntos
		//  if (this.puntos == 3){
		// 	 this.getTerminar()
		//  }
				
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

 	
	iniciarContador(){
		
		let interval = setInterval(()=>{			
	
			if(this.terminar){
				clearInterval(interval);
				
			}else{
				this.time += 1
			}
			contador.innerHTML = this.time;	
		if(this.time >= 50){
			this.terminar = true
			this.getTerminar()}			

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

	getTerminar(){
		endGame.style.display = 'flex';
		endGame.innerHTML = `<h2>Terminaste en ${this.time} segundos?, hiciste${this.puntos} puntos </h2>`
	}
}






