function Mostrar()
{
	var numero=0;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta="si"
	
	while(respuesta="si")
	{
		contador++
		numero=prompt("ingrese numeros");
		numero=parseInt(numero);
			if(numero>=0)
			{
				positivo*=numero
			}
			else
		negativo*=numero;
	}

	alert (positivo);
	alert (negativo);

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN