function mostrar()
{
	let destino= document.getElementById("txtIdDestino").value;
	switch(destino){
		case "Bariloche":
		alert("Sur");
		break;
		case "Cataratas":
		alert("Norte");
		break;
		case "Mar del plata":
		alert("Este");
		break;
		case "Cordoba":
		alert("Oeste");
		break;
	}

}//FIN DE LA FUNCIÓN