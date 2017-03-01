function Mostrar()
{
//tomo la edad  
var hora
var hora=document.getElementById('hora').value;

//alert (laHora);
	switch (hora)
		{
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
				alert ("Madrugada");
				break;
			case "7":
			case "8":
			case "9":
			case "10":
			case "11":
				alert ("Es de mañana");
				break;
				default:
				alert ("Es mediodia o Tarde");

		}
	



}//FIN DE LA FUNCIÓN