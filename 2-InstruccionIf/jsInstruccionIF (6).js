function Mostrar()
{
    var edad=document.getElementById("edad").value;

    if (edad>18)
    {
        alert ("es mayor")
    }
    else if (edad>=13 && edad<=18)
    {
        alert ("adolescente")
    }
    else
    {
        alert ("niño")
    }
    
}//FIN DE LA FUNCIÓN