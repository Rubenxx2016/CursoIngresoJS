/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{

    var num1=document.getElementById ("importe").value;
    num1=parseInt(num1);
    resultado=num1%0.2;
    var cuadro=document.getElementById ("resultado").value = resultado; 
	
}
