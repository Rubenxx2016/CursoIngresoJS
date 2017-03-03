function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si"

	while (respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese numeros");
		numero=parseInt(numero);
		acumulador+=numero;
		console.log (acumulador);

		respuesta=prompt("desea continuar?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN