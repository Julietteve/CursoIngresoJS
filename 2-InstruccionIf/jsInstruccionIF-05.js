function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad<=12 || edad>=18 ){
		alert("No es adolescesnte")
	}
}//FIN DE LA FUNCIÓN