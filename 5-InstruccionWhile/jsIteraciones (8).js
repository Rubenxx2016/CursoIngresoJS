function Mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=0;
	var respuesta=true
	
	while(respuesta==true)
	{
		contador++
		numero=prompt("ingrese numeros");
		numero=parseInt(numero);

			if(numero>=0)
			{
				positivo+=numero
				console.log (positivo)
			}
			else
			{
				if (negativo-0)
				negativo*=numero;
				console.log (negativo)

			}
			respuesta = confirm("desea continuar?")
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN