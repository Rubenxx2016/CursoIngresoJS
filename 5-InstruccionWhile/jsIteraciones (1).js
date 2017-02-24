function Mostrar()
{
	var	numero=0;
	var acumuladornotas=0;
	var contadornotas=0;
	var nota=-1;
	var contadordenotasd=0

	while(confirm ("aprobados"))
		{
			while(nota<=1 || nota>=10)
			{
			contadornotas=prompt("ingrese numeros");
			contadornotas=parseInt(numero);
			}
			contadordenotasd++;
					if (nota>=4)
					{
						acumuladornotas+=numero;
						contadornotas++;
					}
					else
					{
						
					}
			alert(contadordenotas);
			alert(acumuladornotas/contadornotas)

		}

}
/*{
	numero=0;
	contador=0;

	while(numero<10) 
		{
  		numero++;
  		contador += numero;
  		alert (numero);
		}

*/

