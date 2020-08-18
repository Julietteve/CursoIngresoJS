function mostrar()
{
	let nombre;
	let edad ; 
	let sexo;
	let estadoCivil;
	let temperatura;
	let seguir;
	let personaMasTemperatura;
	let mayorTemperatura;
	let promedioEdadSolteros= 0;
	let flag = 0;
	let contadorViudos=0;
	let contadorViudosHombres =0;
	let contadorSolterosHombres =0;
	let contadorMayoresConTemperatura = 0;
	let acumuladorEdadHombresSolteros =0;


	do{

	nombre = prompt ("Ingrese Nombre");
	
	edad = parseInt(prompt("Ingrese edad"));

	sexo = prompt ("Ingrese sexo : s o m").toLowerCase();
	while (sexo != "f" && sexo != "m"){
		sexo = prompt ("Error. Ingrese sexo : s o m").toLowerCase();
	}

	estadoCivil = prompt( 'Ingrese estado civil : "soltero", "casado" o "viudo"').toLowerCase();
	while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
		estadoCivil = prompt( 'Error. Reingrese estado civil : "soltero", "casado" o "viudo"').toLowerCase();
	}

	temperatura = parseInt(prompt("Ingrese temperatura"));

	if (flag == 0){
		mayorTemperatura = temperatura;
		flag = 1;
	}
	if (temperatura > mayorTemperatura){
		mayorTemperatura = temperatura;
		personaMasTemperatura = nombre;
	}

	if( edad > 18 && estadoCivil == "viudo"){
		contadorViudos++;
	}

	if ( sexo == "m" && estadoCivil == "soltero"){
		acumuladorEdadHombresSolteros += edad;
	}

	if ( sexo == "m"){
		switch(estadoCivil){
			case "soltero":
				contadorSolterosHombres++;
				break;
			case "viudo":
				contadorViudosHombres++;
				break;
		}
	}

	if( edad > 60 && temperatura > 38){
		contadorMayoresConTemperatura++;
	}

	seguir = prompt("¿Desea continuar cargando pasajeros?");	
	} while (seguir == 's');

	promedioEdadSolteros = acumuladorEdadHombresSolteros / contadorSolterosHombres;


	console.log(`Persona con mayor temperatura: ${personaMasTemperatura}`);
	console.log(`Mayores de edad viudos: ${contadorViudos}`);
	console.log(`Hombres viudos: ${contadorViudosHombres}`);
	console.log(`Hombres solteros: ${contadorSolterosHombres}`);
	console.log(`Hombres mayores de edad con temperatura: ${contadorMayoresConTemperatura}`);
	console.log(`Promedio de edad de hombres solteros: ${promedioEdadSolteros}`);

}
