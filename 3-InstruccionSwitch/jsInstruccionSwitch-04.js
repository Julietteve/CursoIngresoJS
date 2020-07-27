function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value
	 switch(mes){
		case "Febrero":
			 alert("tiene 28 días");
			 break;
		case "Abril":
		case "Septiembre":
		case "Junio":
		case "Noviembre":
			alert(" tiene 30 días");
			 break;
		default:
			alert ("tiene 31 días");
			break;
	 }
	
	



}//FIN DE LA FUNCIÓN