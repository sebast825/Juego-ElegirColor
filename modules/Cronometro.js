import { hideMenu } from "./Menu.js";

 const puntos = document.querySelector('.puntos');
 const contador = document.querySelector('.contador');

 const infoPlay = document.querySelector('.infoPlay');
 const endGame = document.querySelector('.endGame');
 const endGame_rsta = document.querySelector('.endGame_rsta');
 const endGame_puntos = document.querySelector('.endGame_puntos');
 const infoMenu = document.querySelectorAll('.infoMenu');



 export class Cronometro{
 	time = 0;
	terminar = true;
	tipeGame = undefined;
	
	// finalizarContador = true

	selectGame(){
		let parametro = this.tipeGame;
		// console.log(parametro)
		if (parametro == 'DeathMode'){
			this.cronometroDeathMode()
		}else if(parametro == 'Clasico'){
			this.cronometroClasico()
		}else if(parametro == 'ContraReloj'){
			return  new ContraReloj();
		}else{
			console.log('error select Game')
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
	 cronometroClasico(){
		
		let interval = setInterval(()=>{			
	
			if(this.terminar){
				clearInterval(interval);
				return
				
			}else{
				this.time += 1
			}
			contador.innerHTML = this.time;	
			 if(this.time >= 5000){
			 	this.terminar = true
			 	this.getTerminar('Te quedaste sin tiempo! ')
			 }	
					
		},100)
	}
	cronometroDeathMode(){
		// this.iniciarSnowMan()
		this.time = 10

		let interval = setInterval(()=>{			
	
			if(this.terminar ){
				clearInterval(interval);
				
			}else{
				this.tiempo(true);
			}
			contador.innerHTML = this.time;	
		if(this.time == 0 && this.terminar == false){
			this.terminar = true;
			this.getTerminar('Te quedaste sin tiempo! ')}			

		},100)
	}
	tiempo(parametro){
		if(parametro){
			this.time -= 1;
		}else{
			this.time += 6.5; 
		}		
	}
 	
	iniciarCronometro(){
		
		let interval = setInterval(()=>{			
	
			if(this.terminar){
				clearInterval(interval);
				console.log('asd')
				return
				
			}else{
				this.time += 1
			}
			contador.innerHTML = this.time;	
				
					
		},100)
	}

	botones(){
		
		
		infoMenu.forEach(elem=>{
			elem.addEventListener('click',()=>{
				this.terminar = true;
			})
		})
		
	 
	}
	

	reiniciarCronometro(tipeGame){
		
			this.tipeGame = tipeGame;
			this.time = 0;
			puntos.innerHTML = this.puntos;
			
			if(this.terminar){
				this.terminar = false;
				infoPlay.innerHTML =` <i class="fa-solid fa-stop"></i>`
			
				
			}else{
				this.terminar = true;
				

				infoPlay.innerHTML = (`<i class="fas fa-play-circle"></i>`)
				
				
			}
				this.delay();
	}

	
	elegirJuego(nameGame){
		this.gameTipe = nameGame;
		let clase = new Cronometro();
				
		return clase;
	}

	getTerminar(respuesta=''){
		this.reiniciarCronometro();
		this.terminar = false;
		endGame.style.display = 'flex';
		endGame_puntos.innerHTML = this.puntos;
		endGame_rsta.innerHTML = respuesta;  
	
	}
}






