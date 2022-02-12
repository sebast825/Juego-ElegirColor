const puntos = document.querySelector('.puntos')

export class Puntos{
	parametro = 'yellow'
	puntos = 0;
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