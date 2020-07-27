/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto;
let contadorIntentos = 0;
let flag = 0;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random()* 99 + 1)
  	alert(numeroSecreto)
  	document.getElementById("txtIdNumero").focus()
  	flag= 1
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
		    switch(contadorIntentos){
				case 1:
					alert (`Ud. gana en el primer intento, usted es un Psíquico`);
					break;
				case 2 :
					alert (`Ud. gana en el segundo intento, excelente percepción`);
					break;
				case 3 :
					alert (`Ud. gana en el tercer intento, esto es suerte`);
					break;
				case 4 :
					alert (`Ud. gana en el cuarto intento, excelente técnica`);
					break;
				case 5:
					alert (`Ud. gana en el quinto intento, Usted está en la media`);
					break;
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					alert (`Ud. gana a los ${contadorIntentos} intentos, le falta técnica`);
					break;
				default:
					alert(`Ud. gana a los ${contadorIntentos} intentos, es afortunado en el amor`)

			}
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