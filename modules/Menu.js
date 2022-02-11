import { main } from "./app.js"

const contador = document.querySelector('.contador')
const container = document.querySelector(".contianer")

export class Menu{
	time = 0;
	puntos = 0;
	
	comenzar(){
		setTimeout(()=>{
			this.time = 0;
			this.contador();
			main();
		},500);
	};

	iniciarContador(){
		setInterval(()=>{			
			this.contador();
		},70);
	};

	contador(){
		this.time += 0.11;
		contador.innerHTML = (this.time.toFixed(2));
	}
}