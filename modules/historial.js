const historial_info = document.querySelector('.historial_info');

import {showHistorialContent,hideHistorialContent} from './animations.js'

let clasico = [];
let contraReloj = [];
let deathMode = [];



export function lsAlmacenar(cronometro,puntos){
	let parametro = cronometro.getGametipe()

	if(parametro == 'Clasico'){
		lsClaisco(cronometro.getTime(),puntos.getPuntos())
	}else if(parametro == 'ContraReloj'){
		lsContraReloj('40',puntos.getPuntos())
	}else if(parametro == 'DeathMode'){
		lsDeathMode(cronometro.getTimeTotal(),puntos.getPuntos())
	}else{
		console.log('error')
	}
}
function lsSort(tipeHistorial){
	
	tipeHistorial = tipeHistorial.sort(function(a,b){
		return b[1] - a[1] 
	})
	if(tipeHistorial.length >= 7){
		tipeHistorial.pop()
	}
}
function lsClaisco(tiempo,puntos){
	clasico.push([tiempo,puntos])
	lsSort(clasico)
	localStorage.setItem('clasico',JSON.stringify(clasico))

}

function lsContraReloj(tiempo,puntos){
	clasico.push( [tiempo,puntos])
	lsSort(contraReloj)
	localStorage.setItem('ContraReloj',JSON.stringify(clasico))
	console.log('guardado')
}

function lsDeathMode(tiempo,puntos){
	deathMode.push( [tiempo,puntos])
	lsSort(deathMode)
	localStorage.setItem('DeathMode',JSON.stringify(deathMode))
	console.log('guardado')
}


export function mostrarHistorial(parametro){
	hideHistorialContent()
	historial_info.innerHTML = 
	`<div class="historial_info_titulo">
		<h2>Tiempo</h2>
		<h2>Puntos</h2>
	</div>`;
	if(parametro == 'Clasico'){
		recupuerar_lsClasico()
	}else if(parametro == 'ContraReloj'){
		recupuerar_lsContraReloj()
	}else if(parametro == 'DeathMode'){
		recupuerar_lsDeathMode()
	}else{
		console.log('error')
	}
}

export function recuperarLocalStoarage(){
	 let clas = JSON.parse(localStorage.getItem('clasico'))
	 let contra = contraReloj = JSON.parse(localStorage.getItem('ContraReloj'))
	let death = JSON.parse(localStorage.getItem('DeathMode'))
	//si no hay nada almacenado se rompe todo
	//si no se trae  cada vez que se carga la pagina se le guarda arriba
	
	try{
		clas.forEach(elem=>{
			clasico.push(elem)
		})

	}catch{}
	try{
		death.forEach(elem=>{
			deathMode.push(elem)
		})
	}catch {}
	try{
		contra.forEach(elem=>{
			contraReloj.push(elem)
		})
	}catch{}
	
	 
	


}
export function recupuerar_lsClasico(){
	let partida = JSON.parse(localStorage.getItem('clasico'))
	partida.forEach(element => {
		showFe(element)
	})
	showHistorialContent()
};

function recupuerar_lsContraReloj(){
	let partida = JSON.parse(localStorage.getItem('ContraReloj'))

		partida.forEach(element => {
			showFe(element)
		})	
		showHistorialContent()
};

function recupuerar_lsDeathMode(){
	let partida = JSON.parse(localStorage.getItem('DeathMode'))
	partida.forEach(element => {
		
		showFe(element)
	})
	showHistorialContent()
};
	

function showFe(partida){
	

	let contenedor = document.createElement('div');
	contenedor.classList.add('historial_info_partida')
	let tiempo = document.createElement('h2');
	let puntos = document.createElement('h2');

	tiempo.innerText = partida[0].toFixed(1);
	puntos.innerText = partida[1];

	contenedor.appendChild(tiempo);
	contenedor.appendChild(puntos)
	historial_info.appendChild(contenedor)
	
}