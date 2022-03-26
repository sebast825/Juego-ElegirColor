const barra = document.querySelector('.barra');
const infoPlay = document.querySelector('.infoPlay');



export class Barra{

	terminar = false
	
	selectBar(cronometro){
		if (cronometro.getGametipe() == 'ContraReloj' && cronometro.getTerminar() != true){			
			console.log('entra aca', cronometro.getTerminar())
			this.setTerminar(false)
			this.barraContrarreloj(cronometro)
			
		}	else if(cronometro.getGametipe() == 'Clasico'){
			this.barEmpty()
		}else if(cronometro.getGametipe() == 'DeathMode'){
			this.deathMode(cronometro.getTime())

		}
	}
	setTerminar(parametro){
		this.terminar = parametro
	}
	barraComun(puntos){
		let maxBarra = 11;
		//98 asi le queda el margen de 1 %
		let actualBarra = (puntos / 11) * 98;
		barra.style.width = `${actualBarra}%`
		
	}

	barraContrarreloj(cronometro){
		let tiempoRestante = 40 ;
		let interval = setInterval(()=>{
			if(this.terminar == true) return
			let actualBarra = (tiempoRestante / 40) * 96;
			// console.log(actualBarra);	
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

	deathMode(tiempoTotal){
	//librearia para animar la barra
		gsap.from('.barra',{
			width:'100%',
			
		})
		gsap.to('.barra',{
			duration:`${(tiempoTotal)*.123}`,
			width:'0%',
			
		})

	
	}

	barFull(cronometro){
		if(cronometro.getGametipe() == 'Clasico')return
		barra.style.width = `96%`
	}
	barEmpty(){
		barra.style.width = `0%`
	}
}