/** 
 * Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/

function mostrar()
{	
	let seguir;
	let nombre;
	let nacionalidad; 
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let flagTemperatura = 0;
	let mayorTemperatura;
	let nacionalidadConMayorTemperatura;
	let mayoresSolteros = 0;
	let mujeresSolterasOViudas = 0;
	let acumuladorEdadMujeresCasadas =0;
	let contadorMujeresCasadas = 0;
	let personasAncianasConTemperatura = 0;
	let promedioEdadMujeresCasadas;

	do{
		nombre = prompt("Ingrese nombre : ");
		nacionalidad = prompt("Ingrese Nacionalidad : ");
		edad = parseInt(prompt("Ingrese edad"));
		sexo = prompt(" Ingrese sexo : f o m").toLowerCase();
		while ( sexo != "f" && sexo != "m"){
			sexo = prompt(" Error. Reingrese sexo : f o m").toLowerCase();
		}
		estadoCivil = prompt("Ingrese estado civil: soltero, casado o viudo").toLowerCase();
		while (estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo"){
			estadoCivil = prompt("Error. Reingrese estado civil: soltero, casado o viudo").toLowerCase();
		}
		temperatura = parseInt(prompt("Ingrese temperatura : "));

	if (flagTemperatura == 0 || temperatura > mayorTemperatura ){
		flagTemperatura = 1;
		mayorTemperatura = temperatura;
		nacionalidadConMayorTemperatura = nacionalidad;
	}

	if ( edad >= 17 && estadoCivil == "soltero"){
		mayoresSolteros ++;
	}

	switch (estadoCivil){
		case "soltero":
		case "viudo:":
			if(sexo== "f"){
				mujeresSolterasOViudas ++;
			}
		break;
		case "casado":
			if (sexo = "f"){
				acumuladorEdadMujeresCasadas +=edad;
				contadorMujeresCasadas++;
			}
		break;
	}

	if ( edad > 60 && temperatura > 38){
		personasAncianasConTemperatura ++;
	}
	seguir= prompt ( "¿Desea seguir cargando pasajeros?")
	}while (seguir == 's')

	promedioEdadMujeresCasadas = acumuladorEdadMujeresCasadas /contadorMujeresCasadas;

	console.log( `Nacionalidad con mayor temeperatura ${nacionalidadConMayorTemperatura}`)
	console.log( `Hay ${mayoresSolteros} mayores de edad solteros`);
	console.log(`Personas de mas de 60 años con temperatura : ${personasAncianasConTemperatura}`)
	console.log(`Promedio de edad de mujeres casadas ${promedioEdadMujeresCasadas.toFixed()}`);


}
