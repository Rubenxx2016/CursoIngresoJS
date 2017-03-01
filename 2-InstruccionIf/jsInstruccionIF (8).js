function Mostrar()
{
//tomo la edad  
	var edad;
	var edad=document.getElementById('edad').value;
	var estadocivil;
	var estadocivil=document.getElementById("estadoCivil").value;

	if (edad>18 && estadocivil)
		{
			alert ("Es " + estadocivil + " y no es menor")
		}
		else
		{
			alert ("Es " + estadocivil + " PERO es menor")
		}
	


}//FIN DE LA FUNCIÓN