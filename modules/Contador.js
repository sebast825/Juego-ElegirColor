import { seFinish } from "./app.js";


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
	getRespuesta(respuesta){
		this.respuesta = respuesta;
	}
	
	terminarRonda(){
		seFinish()
	}
}