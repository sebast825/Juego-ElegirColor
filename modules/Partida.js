const infoMenu = document.querySelector('.infoMenu')
const btn = document.querySelectorAll('.btn')



export class Partida{
	terminar = false;
	
	array = []
	

	//para btn play-- agregar clase que saque los botones de FE
	activarTablero(){
		this.mostrarBotones()
		this.clickBtn();
		this.numArray();
		this.setColor();
		// infoMenu.addEventListener('click',()=>{	
		// 	tipoJuego.endGame()				
		//  })
	}

	mostrarBotones(){
		if(!this.terminar){

			btn.forEach(elem=>{
				elem.style.display = 'flex';
			})
			this.terminar = true

		}else{

			btn.forEach(elem=>{
				elem.style.display = 'none';
			})			
			this.terminar = false
		}
	}
	//pone los botones en el tablero
	clickBtn(){	
		btn.forEach(elem => {
			elem.addEventListener('click',()=>{
				this.numArray()
				this.setColor()
			})
		})
	}

	borarBotones(){
		 for(let i = 0; i < 4 ; i++){
		 	tablero.childNodes.removeChild(tablero[i])
		 }
		 
		tablero.remove.childNodes
	}
	//genera un numero apra que despues cada boton tenga un color
	numArray(){
		this.array = [];
		
		while(this.array.length < 4){
			let mat = Math.floor(Math.random(1)*4)
			if(!this.array.includes(mat)){
				this.array.push(mat)
			}
			// console.log(this.array)
		}
		
	}
		
	// le da un color al boton en relacion al this.array
	setColor(){
		 let num = 0;
		tablero.childNodes.forEach(elem =>{
		this.colores(num,elem);
		num++})
	}
	//agrega la tipoJuego con el color
	colores(num,elem){
		elem.classList.remove('red','blue','yellow','orange')
		if(this.array[num] === 0){
			elem.classList.add('red');
		}else if(this.array[num] === 1){
			elem.classList.add('blue');
		}else if(this.array[num] === 2){
			elem.classList.add('yellow');
		}else if(this.array[num] === 3){
			elem.classList.add('orange')
		}else{
			console.log('error')
		}
	}
	


	

	
}

 


const tablero = document.querySelector('.containerTablero');

export class Tablero extends Partida {
	
	
		
}