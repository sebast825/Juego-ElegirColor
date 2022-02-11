export class Puntos{
	parametro = 'yellow'
	puntos = 0;
	puntitos(clases){
		if(clases[2] === this.parametro){
			
			this.puntos +=1;

		}
		else{
			
			this.puntos--;
		}
		console.log(clases[2])
		console.log(this.puntos)
		
	}
}