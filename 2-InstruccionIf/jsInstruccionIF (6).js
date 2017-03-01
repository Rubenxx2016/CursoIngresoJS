function Mostrar()
{
    var edad=document.getElementById("edad").value;

    

    if (edad>=18)
    {
        alert("es mayor")
    }
    else if (edad>=13 && edad<=17)
        {
            alert("adolescente")
        }
        else if (edad<=13)
        {
            alert("Ñiño")
        }
}//FIN DE LA FUNCIÓN