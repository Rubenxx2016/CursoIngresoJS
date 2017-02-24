/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    var precio1=document.getElementById ("PrecioUno").value;
    var precio2=document.getElementById ("PrecioDos").value;
    var precio3=document.getElementById ("PrecioTres").value;
    precio1=parseInt(precio1)
    precio2=parseInt(precio2)
    precio3=parseInt(precio3);
    total=precio1+precio2+precio3;
    alert ("total " + total);	
}

function Promedio () 
{
    var precio1=document.getElementById ("PrecioUno").value;
    var precio2=document.getElementById ("PrecioDos").value;
    var precio3=document.getElementById ("PrecioTres").value;
    precio1=parseInt(precio1)
    precio2=parseInt(precio2)
    precio3=parseInt(precio3);
    total=((precio1+precio2+precio3)/3);
    alert ("total " + total);
	
}

function PrecioFinal () 
{
    var precio1=document.getElementById ("PrecioUno").value;
    var precio2=document.getElementById ("PrecioDos").value;
    var precio3=document.getElementById ("PrecioTres").value;
    precio1=parseInt(precio1)
    precio2=parseInt(precio2)
    precio3=parseInt(precio3);
    total=((precio1+precio2+precio3)*0.21);
    alert ("total " + total);
	
}