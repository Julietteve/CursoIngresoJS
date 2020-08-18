/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero; 
	let respuesta;
	let suma = 0;
	let multiplicacion=1;
	let flag= 0;
	
	
	do{
		numero = parseInt(prompt("Agregue un numero"));
		respuesta = prompt("¿Quiere continuar? n= NO; s= SI")
		
		if(numero >= 0){
			suma = suma + numero;
		}else{
			multiplicacion =  multiplicacion * numero;
			flag = 1;
			
		}
		

	}while( respuesta == 's');
	
	if (flag == 0 ){
		multiplicacion = 0;
	}

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdProducto").value = multiplicacion;

}//FIN DE LA FUNCIÓN
