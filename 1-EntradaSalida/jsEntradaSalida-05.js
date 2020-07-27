/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre = document.getElementById("txtIdNombre").value
	let edad = parseInt(document.getElementById("txtIdEdad").value)
	alert("Usted se llama " + nombre + " y tiene " +  edad + " años")
}

