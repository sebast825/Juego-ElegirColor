import { Partida } from "./Partida.js";



export class Global{
	nameGame = this.game;
	par = new Partida;

	constructor(game){
		this.game = game;
	}


}