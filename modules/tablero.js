const tablero = document.querySelector('.containerTablero');

export class Tablero{
	createTablero(){
		for(let i = 0; i < 4 ; i++){
			const btn = document.createElement('button');
			btn.classList.add('btn');
			tablero.appendChild (sbtn);
		}
	}
}