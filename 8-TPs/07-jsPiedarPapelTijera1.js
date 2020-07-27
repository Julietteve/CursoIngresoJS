/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
    eleccionMaquina= Math.floor(Math.random()*3+1)
    alert(eleccionMaquina)
	


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina){
        case 1 :
        alert("Empate!")
        break;
        case 2:
        alert ("Pierde contra papel");
        break;
        case 3 :
        alert("Gana contra tijera")
        break;
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    switch(eleccionMaquina){
        case 1 :
        alert("Gana contra piedra")
        break;
        case 2:
        alert ("Empate");
        break;
        case 3 :
        alert("Pierde contra tijera")
        break;
}
}//FIN DE LA FUNCIÓN
function tijera()
{
    switch(eleccionMaquina){
        case 1 :
        alert("Pierde contra piedra")
        break;
        case 2:
        alert ("Gana contra tijera");
        break;
        case 3 :
        alert("Empate")
        break;
}
	

}//FIN DE LA FUNCIÓN