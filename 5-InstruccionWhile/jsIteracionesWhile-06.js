function mostrar()
{
	let numero;
	let suma = 0;
	let promedio;
	let i = 0;

	while ( i < 5){
		numero = parseInt(prompt("Ingrese un numero"));
		i++;
		suma += numero;
		console.log("dentro del log " + i)
	}
	console.log("fuera del log " + i)
	promedio = suma/i;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value  = promedio;

	
}//FIN DE LA FUNCIÓN