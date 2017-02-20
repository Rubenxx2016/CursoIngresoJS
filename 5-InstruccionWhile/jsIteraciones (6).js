function Mostrar()
{

	var contador=0;
	var numero=0
	var acumulador=0;

	while(contador<5)
	{
		contador++;
		numero=prompt("ingrese numeros");
		numero=parseInt(numero);
		acumulador+=numero;

	}

	alert=(acumulador)
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN