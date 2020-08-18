function mostrar()
{
  //declaro variables
  let seguir;
  let tipo;
  let cantidad; 
  let precio; 
  let descuento;
  let totalConDescuento;
  let mayorTipo;
  let tipoMasCaro;
  let tipoMasCaroPrecio;
  let precioBrutoPorProducto;
  let acumuladorCal=0;
  let acumuladorCemento=0;
  let acumuladorArena =0;
  let precioBrutoTotal = 0; 
  let acumuladorDeBolsas = 0;
  let flagCantidad =0;
  

  
  do{
    
    
    tipo = prompt ("Ingrese un tipo  : cal-cemento-arena").toLowerCase();
    while ( tipo != "cal" && tipo != "arena" && tipo != "cemento"){
      tipo = prompt ("Error. Reingrese un tipo  : cal-cemento-arena").toLowerCase(); 
    }
    cantidad = parseInt(prompt("Ingrese la cantidad"));
    while (cantidad < 0 || isNaN(cantidad)){
      cantidad = parseInt(prompt("Error. Ingrese la cantidad"));
    }
    precio = parseInt(prompt("Ingrese el precio"));
    while (precio < 0 || isNaN(precio)){
      precio = parseInt(prompt("Error. Ingrese el precio"));
    }
    
    //despues de cada interacion
    acumuladorDeBolsas += cantidad;
    precioBrutoPorProducto = cantidad*precio;
    precioBrutoTotal+=precioBrutoPorProducto;
    
   
    //tipo con mas bolsas
    switch(tipo){
      case "arena":
        acumuladorArena+=cantidad;
        break;
      case "cal":
        acumuladorCal+=cantidad;
        break;
      case "cemento":
        acumuladorCemento+=cantidad;
        break;
    }

    //dentro del loop apara analizar cual es el mas caro a medida de que van las interaciones
    
    if (flagCantidad == 0){
      flagCantidad = 1 ;
      tipoMasCaro = tipo;
      tipoMasCaroPrecio = precio;
    } else if (precio > tipoMasCaroPrecio){
      tipoMasCaroPrecio = precio;
      tipoMasCaro = tipo;
    }


  seguir = prompt("¿Desea continuar cargando productos? Si : s , No : n").toLowerCase();

  }while( seguir == 's'); // fin del loop

// saber cual es el tipo con mas cantidad, fuera del loop es cuando finaliza la compra
  if (acumuladorCemento > acumuladorArena && acumuladorCemento>acumuladorCal){
    mayorTipo ="Cemento";
  } else if ( acumuladorArena > acumuladorCal){
    mayorTipo = "Arena"
  } else {
    mayorTipo = "Cal"
  }

  if(acumuladorDeBolsas>10){
    descuento = 15;
  }else if( acumuladorDeBolsas >30){
    descuento = 25;
  }

  if (descuento != 0){
    totalConDescuento = precioBrutoTotal - (precioBrutoTotal*descuento/100)
  }


  console.log(`a) Importe total sin descuento: $ ${precioBrutoTotal}`);
  console.log(`b) Importe total con descuento: $ ${totalConDescuento}`);
  console.log(`c) Tipo con mayor cantidad:  ${mayorTipo}`);
  console.log(`d) Tipo mas caro:  ${tipoMasCaro}`);

  
 
}
