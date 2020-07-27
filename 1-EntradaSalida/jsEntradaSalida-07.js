/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	
	let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado= numeroUno + numeroDos;
	alert(`La suma es ${resultado}`);	
}

function restar()
{
	
	let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);	
	alert(numeroUno - numeroDos);	
}

function multiplicar()
{ 
	
	let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert(numeroUno * numeroDos);	
}

function dividir()
{
	
	let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert(numeroUno / numeroDos);	
}

