import { main } from "./app.js"
import { Jcomun } from "./Quiz.js"

const container = document.querySelector(".contianer")
const menuBtn = document.querySelectorAll('.menu_btn')
const infoMenu = document.querySelector('.infoMenu')
const menu = document.querySelector('.menu');

const contador = document.querySelector('.contador')
const puntos = document.querySelector('.puntos')


export class Partida{
	
	gameTipe = '';
	
	gameTipeAll = {
		0: 'Clasico'
	}


	


	
	
	elegirJuego(nameGame){
		this.gameTipe = nameGame
		if(this.gameTipeAll[0] == this.gameTipe){
			return new Jcomun()
			 
		}
		else{
			return new  Jcomun()
			
		}
		console.log('elegirJuego',this.gameTipeAll , this.gameTipe)
		// return ar
		
	}




	array = []
	tipoJueo = {}

	activarTablero(nameGame){
		this.createTablero(nameGame);
		this.numArray();
		this.setColor();
	}
	//pone los botones en el tablero
	createTablero(nameGame){
		let clase = this.elegirJuego(nameGame)
		clase.iniciarContador()
		tablero.innerHTML =''
		for(let i = 0; i < 4 ; i++){
			const btn = document.createElement('button');
			btn.classList.add('btn');
			btn.classList.add(`btn-${i}`)
			//al tirar renueva los colores
			btn.addEventListener('click',()=> {
				 clase.atr()
				 clase.modificarPuntos(btn.classList)
				
				//  console.log(btn.classList)				
				this.numArray()
				this.setColor()
				
			})
			tablero.appendChild (btn);
		}
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
	//agrega la clase con el color
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