/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;
let contadorIntentos = 0;
let flag = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.floor(Math.random()* 99 + 1)
  alert(numeroSecreto)
  document.getElementById("txtIdNumero").focus()
  flag= 1
		//aca el contadorIntentos podria estar en 0 para cada ver que empiece  a jugar de nuevo
	

}

function verificar()
{
  
	if( flag == 0){
    alert(" Primero debe empezar el juego")
    document.getElementById("txtIdNumero").value= "";
  } else{
    contadorIntentos++;
    alert("Verificando...")
    let numero = parseInt(document.getElementById("txtIdNumero").value);
    document.getElementById("txtIdIntentos").value= contadorIntentos;
    if(numeroSecreto == numero){
      alert(`Ud gana en ${contadorIntentos} intentos`)
      contadorIntentos = 0;
      flag = 0;
      document.getElementById("txtIdNumero").value= "";
      document.getElementById("txtIdIntentos").value= "";
    }else if( numero > numeroSecreto){
      alert("Se paso...")
    }else{
      alert("Falta...")
    }
    document.getElementById("txtIdNumero").value= "";
    document.getElementById("txtIdNumero").focus()
  }

	
}