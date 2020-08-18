/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edad;
	let sexo;
	let estadoCivil;
	let estadoCivilaStg;
	let sueldo;
	let numeroLejago;
	let nacionalidad;
	let nacionalidadAStr;

	edad = parseInt(prompt("Ingrese edad entre 18 y 90: "));
	while( edad < 18 || edad > 90 || isNaN(edad)){
		edad = parseInt(prompt("Error. Ingrese edad entre 18 y 90: "));
	}
	document.getElementById("txtIdEdad").value = edad;

	sexo = prompt("Ingrese sexo : 'M' para masculino y 'F' para femenino ");
	while( sexo != "f" && sexo != "m" && sexo != "F" && sexo != "M"){
		sexo= prompt("Error. Ingrese 'M' para masculino y 'F' para femenino" );
	}
	document.getElementById("txtIdSexo").value = sexo;

	estadoCivil = parseInt(prompt("Ingrese estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	while ( estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4 ){
		estadoCivil = parseInt(prompt ("Error. Ingrese  1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	}

	switch (estadoCivil) {
		case 1:
			estadoCivilaStg = "Soltero";
			break;
		case 2:
			estadoCivilaStg = "Casado";
			break;
		case 3:
			estadoCivilaStg = "Divorciado";
			break;
		case 4:
			estadoCivilaStg = "Viudo";
			break;
	}
	
	document.getElementById("txtIdEstadoCivil").value = estadoCivilaStg;

	sueldo = parseInt(prompt(" Ingrese sueldo bruto. El sueldo bruto debe ser mayor a 8000"));
	while (sueldo < 8000 || isNaN(sueldo)){
		sueldo= parseInt(prompt(" Error. El sueldo bruto debe ser mayor a 8000"));
	}

	document.getElementById("txtIdSueldo").value = sueldo;

	numeroLejago = parseInt(prompt("Ingrese numero de legajo. 4 cifras, sin ceros a la izquierda."));
	while( !(numeroLejago < 9999  && numeroLejago > 1000) ){
		numeroLejago = parseInt(prompt(" Error. EL numero de legajo debe tener 4 cifras, sin ceros a la izquierda"));
	}

	document.getElementById("txtIdLegajo").value = numeroLejago;

	nacionalidad = prompt("Ingrese nacionalidad. “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
	while( nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n" && nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
		nacionalidad = prompt( "Error. La nacionalidad debe ser “A” para argentinos, “E” para extranjeros, “N” para nacionalizados")
	}

	switch (nacionalidad) {
		case "a":
		case "A":
			nacionalidadAStr = "Argentino"
			break;
		case "E":
		case "e":
			nacionalidadAStr= "Extranjero"
			break
		case "N":
		case "n":
			nacionalidadAStr = "Nacionalizado"
			break;
	}

	document.getElementById("txtIdNacionalidad").value= nacionalidadAStr;

}
