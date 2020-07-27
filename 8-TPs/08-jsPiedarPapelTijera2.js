let eleccionMaquina;
let contadorDeEmpates=0;
let contadorDeGanadas=0;
let contadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random()* 3 + 1)	
	alert(eleccionMaquina)


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina){
        case 1 :
		alert("Empate!")
		contadorDeEmpates++;
        break;
        case 2:
		alert ("Pierde contra papel");
		contadorDePerdidas++;
        break;
        case 3 :
		alert("Gana contra tijera");
		contadorDeGanadas++;
        break;
	}
		document.getElementById("txtIdGanadas").value= contadorDeGanadas;
		document.getElementById("txtIdPerdidas").value=contadorDePerdidas;
		document.getElementById("txtIdEmpatadas").value=contadorDeEmpates;

}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina){
        case 1 :
		alert("Gana contra piedra");
		contadorDeGanadas++;
        break;
        case 2:
		alert ("Empate");
		contadorDeEmpates++
        break;
        case 3 :
		alert("Pierde contra tijera");
		contadorDePerdidas++;;
		break;
}
		document.getElementById("txtIdGanadas").value= contadorDeGanadas;
		document.getElementById("txtIdPerdidas").value=contadorDePerdidas;
		document.getElementById("txtIdEmpatadas").value=contadorDeEmpates;

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina){
        case 1 :
		alert("Pierde contra piedra");
		contadorDePerdidas++;
        break;
        case 2:
		alert ("Gana contra tijera");
		contadorDeGanadas++;
        break;
        case 3 :
		alert("Empate");
		contadorDeEmpates++
        break;
}
		document.getElementById("txtIdGanadas").value= contadorDeGanadas;
		document.getElementById("txtIdPerdidas").value=contadorDePerdidas;
		document.getElementById("txtIdEmpatadas").value=contadorDeEmpates;

	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
		document.getElementById("txtIdGanadas").value= contadorDeGanadas;
		document.getElementById("txtIdPerdidas").value=contadorDePerdidas;
		document.getElementById("txtIdEmpatadas").value=contadorDeEmpates;
}