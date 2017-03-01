function Mostrar()
{
    var edad=document.getElementById ("edad").value;
    var estadocivil=document.getElementById ("estadoCivil").value;

    if (edad<18 && estadocivil)
    {
        alert ("Es muy pequeño para NO ser soltero")
    }

}//FIN DE LA FUNCIÓN