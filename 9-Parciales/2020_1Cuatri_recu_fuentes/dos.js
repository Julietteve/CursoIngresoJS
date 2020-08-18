/*
 Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
 */

function mostrar()
{
  let seguir;
  let tipo;
  let cantidad;
  let precio;
  let acumuladorBolsas = 0;
  let descuento;
  let importeBrutoPorProducto = 0;
  let importeBrutoTotal = 0;
  let importeNeto;
  let acumuladorCal = 0;
  let acumuladorArena = 0;
  let acumuladorCemento = 0;
  let tipoConMasBolsas;
  let tipoMasCaro;
  let tipoMasCaroPrecio;
  let flag = 0; 

  do{
   
    tipo = prompt(` Ingrese el producto : "arena" - "cal" - "cemento"`).toLowerCase();
    while( tipo != "arena" && tipo != "cal" && tipo != "cemento"){
      tipo = prompt(`Error. Reingrese el producto : "arena" - "cal" - "cemento"`).toLowerCase();
    }

    cantidad = parseInt(prompt('Ingrese cantidad'));
    while ( isNaN(cantidad)){
      cantidad = parseInt('Error. Reingrese cantidad');
    }

    precio = parseFloat(prompt("Ingrese precio"));
    while ( precio <= 0 || isNaN (precio)){
      precio = parseFloat(prompt("Error.Reingrese precio"));
    }

    importeBrutoPorProducto = precio * cantidad
    importeBrutoTotal += importeBrutoPorProducto
    acumuladorBolsas += cantidad;

    switch(tipo){
      case "arena":
        acumuladorArena += cantidad;
        break;
      case "cal":
        acumuladorCal += cantidad;
        break;
      case "cemento":
        acumuladorCemento += cantidad;
        break;
    }

    if ( flag == 0 || tipoMasCaroPrecio > precio ){
      flag = 1;
      tipoMasCaroPrecio = precio;
      tipoMasCaro = tipo;
    }

    seguir = prompt ("¿Desea continuar cargando productos? s= si , n = no")
  } while ( seguir == 's');



  if (acumuladorArena > acumuladorCal && acumuladorCemento){
    tipoConMasBolsas = "Arena";
  } else if ( acumuladorCal > acumuladorCemento && acumuladorCal >= acumuladorArena ){
    tipoConMasBolsas = "Cal";
  } else{
    tipoConMasBolsas = "Cemento";
  }


  if (acumuladorBolsas > 10){
    descuento = 15;
  } else if ( acumuladorBolsas > 30){
    descuento = 25;
  } else{
    descuento=0;
  }

  if(descuento != 0){
    importeNeto = importeBrutoTotal - (importeBrutoTotal*descuento/100)
  } else{
    importeNeto = "No se aplica descuento"
  }

  console.log(`Importe total sin descuento:  ${importeBrutoTotal}`);
  console.log(`Importe total con descuento : ${importeNeto}`);
  console.log(`Tipo con más cantidad de bolsas ${tipoConMasBolsas}`);
  console.log(`El tipo más caro es ${tipoMasCaro}`);

}
