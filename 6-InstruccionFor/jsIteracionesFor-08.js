function mostrar()
{
	let numero;
	let flag = 0;
	
	numero = parseInt(prompt("Ingrese un numero"));

	while (isNaN(numero)){
		numero = parseInt(prompt("Error. Ingrese un numero"));
	}

	for( let i = 2 ; i < numero ; i++){
		if (numero % i == 0){
			flag = 1;
			break; // cortar si encontre el divisor
		}
	}
			if( flag == 1 || numero <= 1){
				alert( numero + " no es primo");
			} else{
				alert( numero + " es  primo");
			}
		


}//FIN DE LA FUNCIÓN