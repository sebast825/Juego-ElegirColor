const barra = document.querySelector('.barra');
const infoPlay = document.querySelector('.infoPlay');

export class Barra{

	terminar = false
	
	setTerminar(parametro){
		this.terminar = parametro
	}
	barraComun(puntos){
		let maxBarra = 11;
		//98 asi le queda el margen de 1 %
		let actualBarra = (puntos / 11) * 98;
		barra.style.width = `${actualBarra}%`
		console.log(puntos)
	}

	barraContrarreloj(cronometro){
		let tiempoRestante = 40 
		let interval = setInterval(()=>{
			if(this.terminar == true) return
			let actualBarra = (tiempoRestante / 40) * 96;
			console.log(actualBarra);	
			barra.style.width = `${actualBarra}%`;
			tiempoRestante -= 0.46;

			infoPlay.addEventListener('click',()=>{
				
				clearInterval(interval)
				 this.barFull(cronometro)

			})

			if(actualBarra <= 0 || actualBarra == 100){
				clearInterval(interval)
				return
			}
		},100)
	
	}

	barFull(cronometro){
		if(cronometro.getGametipe() != 'ContraReloj')return
		barra.style.width = `96%`
	}
	barEmpty(){
		barra.style.width = `0%`
	}
}