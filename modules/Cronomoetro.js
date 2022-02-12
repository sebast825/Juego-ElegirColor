import { Menu } from "./Menu.js";


const contador = document.querySelector('.contador')

export class Cronometro extends Menu{
	
	time = 0;

	iniciarContador(){
		setInterval(()=>{			
			this.contador();
			contador.innerHTML = (this.time.toFixed(2));
		},70);
		
	};

	contador(){
		this.time += 0.11;		
	}
}