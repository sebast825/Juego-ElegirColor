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
			infoMenu.addEventListener('click',()=>{
				this.terminar = true
			})

			if(this.terminar){
				clearInterval(interval)
				this.reiniciarEstadisticas()
				
			}

			contador.innerHTML = this.time
			this.contador()			

		},100)
	}

	contador(){
		this.time ++
		
	}



	reiniciarEstadisticas(){
		this.time = 0;
		this.puntos = 0;
		puntos.innerHTML = this.puntos;
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
