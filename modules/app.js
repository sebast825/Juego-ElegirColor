
const menu = document.querySelector('.menu')

import { Tablero } from "./Tablero.js"

function main(){
	const tablero = new Tablero()
	tablero.createTablero()
	tablero.numArray()
	tablero.setColor()
}

main()