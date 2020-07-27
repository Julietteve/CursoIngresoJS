/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert (numeroUno + numeroDos)

}