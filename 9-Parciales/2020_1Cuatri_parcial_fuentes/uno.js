
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let acumuladorAlcohol=0;
	let acumuladorBarbijo=0;
	let acumuladorJabon=0;
	let contadorAlcohol=0;
	let contadorBarbijo=0;
	let contadorJabon=0;
	let alcoholEconomicoCantidad;
	let alcoholEconomicoFabricante;
	let mayorTipo;
	let promedioCompra = 0;
	let flag = 0;
	let alcoholEconomico = 0;
	let mensajeAlcohol = "A - No se compraron alcoholes";
	let mensajeB;
	let mensajeJabon;


	for ( let i = 0 ; i < 1 ; i++){

		tipo = prompt( "Indique tipo de producto: Barbijo - Jabon - Alcohol ").toLowerCase();
		while( tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"){
			tipo = prompt( "Error. Indique tipo de producto: Barbijo - Jabon - Alcohol ").toLowerCase();
		}

		precio = parseInt( prompt("Ingrese precio de los productos. Entre $100 y $300"));
		while( precio < 100 || precio > 300 || isNaN(precio)){
			precio = parseInt(prompt("Error. Ingrese precio de los productos. Entre $100 y $300"));
		}
				
		cantidad = parseInt (prompt("Indicar unidades, limite de 100 U."));
		while ( cantidad < 0 || cantidad > 1000 || isNaN(cantidad)){
			cantidad = parseInt (prompt("Error. Debe indicar más de una unidad. Limite de 1000 U."));
		}				
								
		marca = prompt ( "Indique marca");
								
		fabricante = prompt ( "Indique Fabricante");


		switch(tipo){
		case "alcohol":
			acumuladorAlcohol+= cantidad; // calculamos max y min
			contadorAlcohol++
			if(flag == 0 || alcoholEconomico > precio){
				alcoholEconomico = precio;
				alcoholEconomicoCantidad = cantidad;
				alcoholEconomicoFabricante = fabricante;
				flag = 1;
			}
			break;
		case "barbijo":
			acumuladorBarbijo+= cantidad;
			contadorBarbijo++;
			break;
		case "jabon":
			acumuladorJabon+= cantidad;
			contadorJabon++;
			break;
		}

	}
		if( acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol> acumuladorJabon){ // cal producto mayor comprado SIN BANDERA
			mayorTipo = "Alcohol";
			promedioCompra = acumuladorAlcohol / contadorAlcohol;

		} else if ( acumuladorBarbijo >= acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon){
			mayorTipo = "Barbijo";
			promedioCompra = acumuladorBarbijo / contadorBarbijo;

		}else{
			mayorTipo = "Jabon";
			promedioCompra = acumuladorJabon / contadorJabon;
		}

		if(flag == 1){
			mensajeAlcohol = " A-Fabricante alcohol economico : " + alcoholEconomicoFabricante +
			"\nCantidad" + alcoholEconomicoCantidad
			"\nFabricante" + alcoholEconomicoFabricante;
		}

		mensajeB = `B- Tipo con mas unidades : ${mayorTipo}. Promedio : ${promedioCompra}`
		mensajeJabon = `C- Unidades de Jabon : ${acumuladorJabon}`

	alert( mensajeAlcohol + "\n" + mensajeB + "\n"+ mensajeJabon)

	}




