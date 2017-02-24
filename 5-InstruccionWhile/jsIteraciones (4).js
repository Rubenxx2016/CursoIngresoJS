function Mostrar()
{

var numero
var numero=prompt("ingrese un número entre 0 y 9.");

	while (numero<0 || numero>9)
	{
		var numero=prompt("el numero que ingresaste es el equibocado");
	}

document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN