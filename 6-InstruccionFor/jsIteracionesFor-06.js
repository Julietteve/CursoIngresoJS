function mostrar()
{
	let acumulador=0;
	let numero = parseInt(prompt("Ingrese un numero"));
	for ( let i = 1; i <= numero ; i++){
		 
		if( i % 2 == 0){
			acumulador++;
			console.log( "Numeros pares : " + i );
		}
		
	}
	
	console.log( `Hay ${acumulador} numeros pares`)


}//FIN DE LA FUNCIÓN