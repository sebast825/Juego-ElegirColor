 const puntos = document.querySelector('.puntos')
 const contador = document.querySelector('.contador')
 const infoMenu = document.querySelector('.infoMenu')


 export class Contador{
 	parametro = 'yellow'
 	time = 0;
	puntos = 0;
	terminar = false
	// finalizarContador = true

	atr(){
		console.log('llegamso hasta aca :v')		
	}

 	modificarPuntos(clases){
		if(this.terminar ) return

 		if(clases[2] === this.parametro){

 			this.puntos +=1;
 		}
 		else{

 			this.puntos--;
 		}

 		puntos.innerHTML = this.puntos
				
 	}
 	

 	
	iniciarContador(){
		
		
		let interval = setInterval(()=>{
			// infoMenu.addEventListener('click',()=>{
			// 	this.terminar = true
			// })
	
			
			contador.innerHTML = this.time
			this.contador()			

		},100)
	}

	contador(){
		
		this.time += 1
		
	}



	reiniciarEstadisticas(){
		
			
			this.time = 0;
			this.puntos = 0;
			puntos.innerHTML = this.puntos;
			
			setInterval(()=>{
				if(!this.terminar){
				this.iniciarContador();
				this.terminar = true;}
			},300)
			
	}

	
	elegirJuego(nameGame){
		this.gameTipe = nameGame;
		let clase = new Contador();
				
		return clase;
	}

	getTerminar(){
		return this.terminar
	}
}


// 	iniciarContador(){
		
// 		setInterval(()=>{			
// 			this.contador();
// 			contador.innerHTML = (this.time.toFixed(2));
// 		},70);
		
// 	};

// 	contador(){
// 		this.time += 0.11;		
