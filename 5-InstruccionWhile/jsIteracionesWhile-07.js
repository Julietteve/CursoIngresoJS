/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let suma = 0;
	let promedio;
	let numero; 
	let i =0;
	let respuesta; //no necesito iniciallizar la variable

	
	do {
		numero = parseInt(prompt("Agregue un numero"));
		suma += numero;
		i++;
		respuesta = prompt("¿Quiere continuar? n= NO; s= SI")
	}while ( respuesta == 's');

	promedio = suma/i;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value  = promedio;
}//FIN DE LA FUNCIÓN