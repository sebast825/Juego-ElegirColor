import { Puntos } from "./Puntos.js";

const tablero = document.querySelector('.containerTablero');

export class Tablero{

	array = []
	
	//pone los botones en el tablero
	createTablero(){
		const clase = new Puntos();
		tablero.innerHTML =''
		for(let i = 0; i < 4 ; i++){
			const btn = document.createElement('button');
			btn.classList.add('btn');
			btn.classList.add(`btn-${i}`)
			//al tirar renueva los colores
			btn.addEventListener('click',()=> {
				clase.showPuntos()
				clase.modificarPuntos(btn.classList)
				console.log(btn.classList)				
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