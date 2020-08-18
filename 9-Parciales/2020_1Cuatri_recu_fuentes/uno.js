/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total) ,
*/

function mostrar()
{
	
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let flagJabon= 0;
	let jabonMasCaro;
	let jabonMasCaroUnidades;
	let jabonMasCaroFabricante;
	let acumuladorJabon = 0;
	let acumuladorAlcohol = 0;
	let acumuladorBarbijo = 0;
	let contadorBarbijos = 0;
	let contadorAlcohol = 0;
	let contadorJabon = 0;
	let productoMasCompradoTipo;
	let promedioProductoMasComprado = 0;

	for ( let i = 0; i < 5 ; i++){
		
		//carga de datos y validaciones

		tipo  = prompt("Ingrese tipo de producto : barbijo , jabon o alcohol").toLowerCase();
		while ( tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"){
			tipo  = prompt("Error. Ingrese tipo de producto : barbijo , jabon o alcohol").toLowerCase();
		}

		precio = parseInt(prompt("Indique precio entre $100 y $300"));
		while ( precio < 100 || precio > 300 || isNaN(precio)){
			precio = parseInt(prompt("Error. Indique precio entre $100 y $300"));
		}

		cantidad = parseInt(prompt("Indique cantidad. Max 1000 u."))
		while( cantidad > 1000 || cantidad <= 0 || isNaN(cantidad)){
			cantidad = parseInt(prompt("Error. Indique cantidad. Max 1000 u."))
		}

		marca= prompt("Indique marca");

		fabricante = prompt("Indique fabricante");

		switch(tipo){
			case "jabon":
				if (flagJabon == 0 || precio > jabonMasCaro){
					flagJabon =1;
					jabonMasCaro = precio;
					jabonMasCaroUnidades = cantidad;
					jabonMasCaroFabricante = fabricante;
					contadorJabon++;
					acumuladorJabon +=cantidad;
				}
			break;
			case "alcohol" :
				contadorAlcohol++;
				acumuladorAlcohol += cantidad;
				break;
			case "barbijo":
				contadorBarbijos++;
				acumuladorBarbijo +=cantidad;
				break;
		}
		
	}
	
	if ( acumuladorAlcohol > acumuladorBarbijo && acumuladorJabon){
		productoMasCompradoTipo = "Alcohol";
		promedioProductoMasComprado = acumuladorAlcohol / contadorAlcohol;
	} else if ( acumuladorBarbijo > acumuladorJabon){
		productoMasCompradoTipo = "Barbijo";
		promedioProductoMasComprado = acumuladorBarbijo / contadorBarbijos;
	} else{
		productoMasCompradoTipo = "Jabon";
		promedioProductoMasComprado = acumuladorJabon / contadorJabon;
	}

	console.log( ` a) El jabon más caro cuesta $ ${jabonMasCaro}, es del fabricante ${jabonMasCaroFabricante}, y se compraron ${jabonMasCaroUnidades} u.`)
	console.log( ` b) El producto más comprado es ${productoMasCompradoTipo}, con un promedio de compra de  ${promedioProductoMasComprado} u.`)
	console.log( ` c) Se compraron ${acumuladorBarbijo} barbijos`)
}
