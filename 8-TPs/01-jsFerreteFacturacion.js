/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioA = parseFloat(document.getElementById("txtIdPrecioUno").value)
    let precioB = parseFloat(document.getElementById("txtIdPrecioDos").value)
    let precioC = parseFloat(document.getElementById("txtIdPrecioTres").value)

    let resultado= precioA + precioB + precioC
    alert(resultado)
}
function Promedio () 
{
    let precioA = parseFloat(document.getElementById("txtIdPrecioUno").value)
    let precioB = parseFloat(document.getElementById("txtIdPrecioDos").value)
    let precioC = parseFloat(document.getElementById("txtIdPrecioTres").value)

    let resultado= (precioA + precioB + precioC) / 3
    alert(resultado)
	
}
function PrecioFinal () 
{
    let precioA = parseFloat(document.getElementById("txtIdPrecioUno").value)
    let precioB = parseFloat(document.getElementById("txtIdPrecioDos").value)
    let precioC = parseFloat(document.getElementById("txtIdPrecioTres").value)

    let resultado= precioA + precioB + precioC 
    let final = resultado * 0.21 + resultado
    alert(final)
	
}