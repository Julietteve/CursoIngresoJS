function mostrar()
{
	let destino= document.getElementById("txtIdDestino").value;
	switch(destino){
		case "Bariloche":
		alert("Hace frío");
		break;
		default:
		alert("Hace calor");
		break;
	}
}//FIN DE LA FUNCIÓN