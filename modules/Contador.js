

export class Contador{
	tipeGame = undefined;
	terminar = true;
	respuesta = undefined


	getGametipe(){
		return this.tipeGame
	}
	selecTipeGame(tipeGame){
		 this.tipeGame = tipeGame;
	}
	getTerminar(){
		return this.terminar;
	}
	setTerminar(parametro){
		this.terminar = parametro;
	}
	getRespuesta(){
		return this.respuesta;
	}
	
	terminarRonda(){
		seFinish()
	}
}