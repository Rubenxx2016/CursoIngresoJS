function Mostrar()
{
	//declarar contadores y variables
	var numero;
	var sumaNeg=0;
	var contadorNeg=0;
	var sumaPos=0;
	var contadorPos=0;
	var contadorCero=0
	var contadorPares=0

	var respuesta=true;

	while(respuesta==true)
		{

			numero=parseInt(prompt("ingrese un numero"));
			
			if(numero<0)
			{
			sumaNeg=sumaNeg+numero;
			contadorNeg++;			
			}
			else
			{
				if(numero>0)
				{
					sumaPos=sumaPos+numero;
					contadorPos++;
				}
				else
				{
					contadorCero++;
				}	
			}
				if((numero%2)==0)
				{
					contadorPares++;
				}

			respuesta=confirm("desea continuar???");
		}

document.write("la suma de los negativos es: "+ sumaNeg + "<br>");
document.write("la cantidad de los negativo es: "+ contadorNeg + "<br>");
document.write("la suma de los positivos es: "+ sumaPos + "<br>");
document.write("la cantidad de los positivos es: "+ contadorPos + "<br>");
document.write("la cantidad de ceros es: "+ contadorCero + "<br>");
document.write("la cantidad de pares es: "+ contadorPares + "<br>");

if(contadorPos!=0)
{
	document.write("el promedio de los positivos es: " + sumaPos/contadorPos + "<br>")
}

if(contadorNeg!=0)
{
	document.write("el promedio de los negativos es: " + sumaNeg/contadorNeg + "<br>")
}

}