/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{

	let sumaNegativos=0;
	let sumaPositivos=0;
	let candtidadPositivos=0;
	let cantidadNegativos=0;
	let cantidadDeCeros=0;
	let cantidadDeNumerosPares=0;
	let promedioPositivos=0;
	let promedioNegativos=0;
	let diferenciaNegativosYpositivos=0;
	let respuesta; 
	let numero;

	do{
		numero = parseInt(prompt("Ingrese a un numero"));
		respuesta = prompt("¿Desea continuar? s = si / n = no");

		if ( numero > 0 ){
			sumaPositivos += numero;
			candtidadPositivos++;
			
		}else if( numero < 0 ){
			sumaNegativos += numero;
			cantidadNegativos++;
			
		}else if ( numero == 0 ){
			cantidadDeCeros++;
		}

		if( numero % 2 == 0 ){
			cantidadDeNumerosPares++;
		}
		
	}while(respuesta == 's')

	if (candtidadPositivos > 0){
		promedioPositivos = sumaPositivos / candtidadPositivos;
	}

	if (cantidadNegativos > 0){
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}
	

	diferenciaNegativosYpositivos = sumaPositivos - sumaNegativos;

	console.log(`La suma de negativos es ${sumaNegativos},
				La suma de positivos es ${sumaPositivos},
				La candidad de positivos es ${candtidadPositivos},
				La candidad de negativos es ${cantidadNegativos},
				La candidad de ceros es ${cantidadDeCeros},
				La candidad de numeros pares es ${cantidadDeNumerosPares},
				El promedio de numeros positivos es ${promedioPositivos},
				El promedio de numeros negativos es ${promedioNegativos},
				La diferencia entre positivos y negativos es ${diferenciaNegativosYpositivos},
				`);
}//FIN DE LA FUNCIÓN