/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura= parseInt(document.getElementById("txtIdTemperatura").value)
    let fahrenheit = ((temperatura -32)*5/9).toFixed(2)
    alert (`${temperatura}° Fahrenheit son ${fahrenheit}° Centigrados`)
}

function CentigradosFahrenheit () 
{
    let temperatura= parseInt(document.getElementById("txtIdTemperatura").value)
    let fahrenheit = (temperatura * 9/5) + 32
    alert (`${temperatura}° Centigrados son ${fahrenheit}° Fahrenheit`)
}
