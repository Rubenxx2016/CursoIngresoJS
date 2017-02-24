function Mostrar()
{
//tomo la edad  
var mes
var mes=document.getElementById('mes').value;

switch (mes)
    {
    case "Enero":
    {
        alert("Ya pasamos el frio, ahora calor!!!")
        break;
    }
    case "Febrero":
    {
        alert("Ya pasamos el frio, ahora calor!!!")
        break;
    }
    case "Marzo":
    {
        alert("Ya pasamos el frio, ahora calor!!!")
        break;
    }
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
                alert("Ya pasamos el frio, ahora calor!!!")
                break;
    case "Abril":
    case "Mayo":
    case "Junio":
                alert("Falta para el invierno")
                break;
    case "Julio":
    case "Agosto":
                alert("Abrigate que hace frio")
                break;            

    }

}




//FIN DE LA FUNCIÓN