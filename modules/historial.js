let clasico = [];
let contraReloj = [];
let deathMode = [];



export function almacenar(cronometro,puntos){
	let parametro = cronometro.getGametipe()
	console.log(parametro,'asd')
	if(parametro == 'DeathMode'){
		this.lsClaisco(cronometro.getTime(),puntos.getPuntos())
	}else if(parametro == 'asd'){
		this.lsContraReloj(cronometro.getTime(),puntos.getPuntos())
	}else{
		console.log('error')
	}
}

function lsClaisco(tiempo,puntos){
	clasico.push( [tiempo,puntos])
	localStorage.setItem('clasico',JSON.stringify(clasico))
	console.log('guardado clasico')
}

function lsContraReloj(tiempo,puntos){
	clasico.push( [tiempo,puntos])
	localStorage.setItem('clasico',JSON.stringify(clasico))
	console.log('guardado')
}

function lsDeathMode(tiempo,puntos){
	clasico.push( [tiempo,puntos])
	localStorage.setItem('clasico',JSON.stringify(clasico))
	console.log('guardado')
}



function recupuerar_lsClasico(){
	let partida = JSON.parse(localStorage.getItem('clasico'))
	partida.forEach(element => {
		console.log(element)
	})
};
	