function mostrar()
{
	let numero;

	
	for( ; ; ){ //Bucle infinito
		numero = parseInt(prompt("Ingrese un numero")); // lo declaro aca porque se muestra infinitas veces hasta que caiga el 9
		if( numero == 9 ){
			break;
		}
		alert(`Ud. ingreso el numero ${numero}`)
	}



}//FIN DE LA FUNCIÓN