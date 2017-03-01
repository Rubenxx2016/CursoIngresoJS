/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;
var cantidadIntentos;
var numero;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random()*(5-1))+1;
	console.log(numeroSecreto);
}

function verificar()
{
	contadorIntentos++;
	numero=document.getElementById("numero").value;
	
	if(numero==numeroSecreto)
	{
			
		switch(contadorIntentos)
		{
				case 1:
				alert("usted es un Psíquico");
				break;

				case 2:
				alert("eres un genio");
				break;

				case 3:
				alert("eres maravilloso");
				break;

				case 4:
				alert("eres el mejor");
				break;

				default:
				alert("perdirstes");
				break;
		}
	}
	
	document.getElementById("intentos").value=contadorIntentos;


}