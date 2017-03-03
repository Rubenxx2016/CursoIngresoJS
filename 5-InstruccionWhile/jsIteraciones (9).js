function Mostrar()
{
	// declarar variables
	var numero;
	var max=0;
	var min=0;
	var primera=true;
	var respuesta="si"

	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(primera)
		{
			max=numero;
			min=numero;
			primera=false;
		}
		else
		{

		}
			if(numero>max)
			{
				max=numero
			}
			else 
			{

			}
				if(numero<min)
				{
					min=numero;
				}				
				else
				{

				}
				
		respuesta=prompt("desea continuar?");

	}

alert (max);
alert (min);

}//FIN DE LA FUNCIÓN