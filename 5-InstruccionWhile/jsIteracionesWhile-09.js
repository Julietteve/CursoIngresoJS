/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let i = 0;
	let numero;
	let minimo;
	let maximo;
	let respuesta;
	let flag = 0;

	do{
		numero= parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("¿Quiere continuar? n= NO; s= SI");
		if (flag == 0 ){
			maximo = numero;
			minimo = numero;
			flag = 1;
		} 
		if (numero>maximo){
			maximo = numero;
		}
		if (numero<minimo){
			minimo= numero;
		}

	} while(respuesta == 's');

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

}

// VERSION ALTERNATIVA
//  esto da true en el inicio, el otro da false = numero + undefined  = false
/* if (flag == 0 || numero > maximo) {
	 maximo = numero;
 }
 if (flag == 0 || numero < minimo){
	 minimo = numero;
	 flag = 1;
 } */