const menu = document.querySelector('.menu')
const menuBtn = document.querySelectorAll('.menuBtn')

export function hideMenu(asd ){

	// this.gameTipe = ( asd);
	// console.log(this.gameTipe,)
	
	if(menu.style.display == "none"){
		menu.style.display = "flex"
		menuBtn.forEach(elem=>{
			elem.addEventListener('click',()=>{
				elem.style.display = "block"		
			})
		})
	}else{
		menu.style.display = "none"
		menuBtn.forEach(elem=>{
			elem.addEventListener('click',()=>{
				elem.style.display = "none"		
			})
		})
	}
}