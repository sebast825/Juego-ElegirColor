 const puntos = document.querySelector('.puntos')


 export class Jcomun{
 	parametro = 'yellow'
 	puntos = 0;
 	time = 0;
	
	atr(){
		console.log('llegamso hasta aca :v')
	}
 	modificarPuntos(clases){
 		if(clases[2] === this.parametro){
 			this.puntos +=1;
 		}
 		else{

 			this.puntos--;
 		}
 		console.log(clases[2])
 		console.log(this.puntos)
				
 	}
 	showPuntos(){
 		puntos.innerHTML = this.puntos
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
