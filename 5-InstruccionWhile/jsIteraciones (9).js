function Mostrar()
{
	// declarar variables
	var numero=0
	var max=0;
	var min=0;
	var primera=true;
	var respuesta='si'

	while(respuesta!='no')
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(primera)
		{
			primera=false;
			max=numero;
			min=numero;
		}
		else
		{
			if(numero>max)
			max=numero
			if(numero<min)
			min=numero;
		}
		respuesta=prompt("reingrese numero");

	}

alert (max);
alert (min);
}




}//FIN DE LA FUNCIÓN