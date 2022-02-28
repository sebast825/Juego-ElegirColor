const puntos = document.querySelector('.puntos');


export class Puntos{
	parametro = 'yellow';
	puntos = 0;
	terminar = true;
	tipeGame = undefined;


	modificarPuntos(clases){
		// console.log(clases)
		if(this.terminar ) return

 		if(clases === this.parametro){

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
	
	modificarPuntosDeathMode(clases){
		let supers = this.modificarPuntos(clases);
		if (supers){
			return true	
		}else{					
			return false
		}	 				
 	}

	 selectGame(){
		let parametro = this.tipeGame;
		 console.log(parametro)
		if (parametro == 'DeathMode'){
			this.modificarPuntosDeathMode(parametro);
		}else {
			this.modificarPuntos(parametro);
		}
	}

	delay(){
		if(!this.terminar){
			setTimeout(()=>{
				this.selectGame()
				// console.log('delay false')
			},200)
		}else{
			this.selectGame()
			// console.log('delay true')
		}
	 }

	 reiniciarPuntos(tipeGame){
		
		this.tipeGame = tipeGame;
		this.time = 0;
		puntos.innerHTML = this.puntos;
		
		if(this.terminar){
			this.terminar = false;
		
			
		}else{
			this.terminar = true;
			
		}
			this.delay();
}
}