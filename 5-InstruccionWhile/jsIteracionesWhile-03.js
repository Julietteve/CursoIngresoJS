/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada = prompt("Ingrese la clave : ")

	while ( claveIngresada != "utn750"){
	claveIngresada = prompt("Clave invalida.Reintente.");
	}

	alert ("Clave valida")
}//FIN DE LA FUNCIÓN
