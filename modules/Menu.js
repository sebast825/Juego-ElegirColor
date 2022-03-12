const menu = document.querySelector('.menu')
const menuBtn = document.querySelectorAll('.menuBtn')
const endGame = document.querySelector('.endGame')
const container = document.querySelector('.container');
const puntos = document.querySelector('.puntos');
const contador = document.querySelector('.contador');

const endGame_rsta = document.querySelector('.endGame_rsta');
 const endGame_puntos = document.querySelector('.endGame_puntos');
 const endGame_tiempo = document.querySelector('.endGame_tiempo');
 const endGame_again = document.querySelector('.endGame_again');
 const barra = document.querySelector('.barra');

 

export function hideMenu(){
	barra.style.width = '0%'

	ocultarPuntos();
	puntos.innerHTML = null;
	contador.innerHTML = null;
	endGame.style.display = 'none';

	if(menu.style.display == "none"){

		menu.style.display = "flex";
		container.style.display = 'none';

		menuBtn.forEach(elem=>{

			elem.addEventListener('click',()=>{				
				elem.style.display = "block"		
			})
		})
	}else{

		menu.style.display = "none";
		container.style.display = 'flex';

		menuBtn.forEach(elem=>{

			elem.addEventListener('click',()=>{
				elem.style.display = "none"	;
	
			})
		})
	}
	
}


export function seFinish(puntos,cronometro,respuesta,par){

	cronometro.setTerminar(true);
	puntos.setTerminar(true);
	ocultarPuntos();

	endGame_again.addEventListener('click',()=>{

		par.ocultarBotnoes();
		endGame.style.display = 'none';
		container.style.display = 'flex';
		barra.style.width = '0%';

	})

	
	endGame.style.display = 'flex';
	container.style.display = 'none';	
	
	endGame_rsta.innerHTML = respuesta; 
	endGame_puntos.innerHTML = `Puntos: ${puntos.getPuntos()}!`;

	if(cronometro.getGametipe() == 'DeathMode'){

		endGame_tiempo.innerHTML = `Tiempo jugado: ${cronometro.getTimeTotal().toFixed(2)} `;

	}else{
		endGame_tiempo.innerHTML = `Tiempo: ${cronometro.getTime().toFixed(2)} `;

	}

}



function ocultarPuntos  (){
	console.log('limpiar')
	
	contador.innerHTML = 'asd';

	puntos.innerHTML = 'asd';

	//sin el intervalo en el contador pasa una setInterval mas y no queda vacio :)
	setTimeout(()=>{
		contador.innerHTML = null;
		puntos.innerHTML = null;
	},100)
}