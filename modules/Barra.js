const barra = document.querySelector('.barra');

export class Barra{
	
	barraComun(puntos){
		let maxBarra = 11;
		//98 asi le queda el margen de 1 %
		let actualBarra = (puntos / 11) * 98;
		barra.style.width = `${actualBarra}%`
		console.log(puntos)
	}

	barraContrarreloj(cronometro){
		let interval = setInterval(()=>{
			let actualBarra = (cronometro.getTime() / 40 ) * 98;
			console.log(actualBarra)
			console.log(cronometro.getTime())
			barra.style.width = `${actualBarra}%`
			if(actualBarra <= 0 || actualBarra == 100){
				clearInterval(interval)
			}
		},100)
	
	}

	barFull(){
		barra.style.width = `98%`
	}
}