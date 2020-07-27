function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value

	switch(mes){
	case "Febrero":
		alert( " Este mes no tiene más de 29 días.");
		break
	default:
		alert(  "Este mes tiene 30 o más días");
		break; // en el break puede ponerse o no porque como el default es el ultimo se termina la funcion
	}
	
	


}//FIN DE LA FUNCIÓN