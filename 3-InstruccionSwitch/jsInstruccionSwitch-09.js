function mostrar()
{
	const BASE = 15000;
	let precioFinalConAumento;
	let precioFinalConDescuento
	let descuento;
	let aumento;
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if( destino == "Bariloche"){
				aumento = 20;
			}else if( destino == "Cataratas" || destino == "Cordoba"){
				descuento = 10;
			} else{
				descuento = 20;
			}
			break
		case "Verano":
			if( destino ==  "Bariloche"){
				descuento = 20;
			} else if ( destino == "Cataratas" || destino == "Cordoba"){
				aumento = 10;
			} else {
				aumento = 20;
			}
			break
		case "Otoño":
		case "Primavera":
			if (destino == "Cordoba" ){
				descuento = 0;
			} else {
				aumento = 10;
			}
			break
		}
		
		precioFinalConAumento = BASE + (BASE * aumento/100)
		precioFinalConDescuento = BASE - (BASE * descuento/100)

		if (aumento){
			alert( `El monto final es de $ ${precioFinalConAumento}`)
		}else{
			alert( `El monto final es de $ ${precioFinalConDescuento}`)
		
		
	}

}//FIN DE LA FUNCIÓN