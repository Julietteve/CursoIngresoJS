function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let random = Math.floor(Math.random()*  9 + 1)

	if (random < 4){
		alert (` Nota : ${random} Vamos, la proxima se puede`)
	} else if ( random >= 4  && random <= 8){
		alert (` Nota : ${random} Aprobó`)
	} else {
		alert (` Nota : ${random} Excelente`)
	}

}//FIN DE LA FUNCIÓN