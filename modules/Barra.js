const barra = document.querySelector('.barra');

export class Barra{
	
	barraComun(puntos){
		let maxBarra = 11;
		//98 asi le queda el margen de 1 %
		let actualBarra = (puntos / 11) * 98;
		barra.style.width = `${actualBarra}%`
		console.log(puntos)
	}
}