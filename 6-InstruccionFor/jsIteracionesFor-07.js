function mostrar()
{
	let divisores = 0;
	let numero = parseInt(prompt("Ingrese numero"));

	for (let i = 1 ; i <= numero; i++){
		if( numero % i == 0){
			divisores++;
			console.log(" Numeros : " + i);
		}

	}
	
	console.log( "Cantidad de divisores: " + divisores)

}//FIN DE LA FUNCIÓN