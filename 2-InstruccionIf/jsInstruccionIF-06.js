function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value)
	if( edad <= 12){
		alert("Es niño")
	}else if( edad>= 13 && edad <=17){
		alert("Es adolecsente")
	} else if( edad >=18 && edad<60){
		alert ("Es adulto")
	} else if (edad >= 60){
		alert ("Es adulto mayor")
	}



}//FIN DE LA FUNCIÓN