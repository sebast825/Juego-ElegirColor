

export class Contador{
	tipeGame = undefined;
	terminar = true;

	getGametipe(){
		return this.tipeGame
	}
	selecTipeGame(tipeGame){
		 this.tipeGame = tipeGame;
	}
	getTerminar(){
		return this.terminar;
	}
}