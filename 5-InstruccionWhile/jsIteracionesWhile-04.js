/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while ( numero < 0 || numero >= 10 || isNaN(numero) ) {
		numero = parseInt(prompt ("Numero invalido"));
	}
	alert("Correcto!")
	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN
