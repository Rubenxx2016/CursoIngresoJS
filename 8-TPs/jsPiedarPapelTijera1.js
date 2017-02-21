/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

var eleccionMaquina;
var contgano=0;
var contperdio=0;
var contempato=0;
var rachag=0;
var rachae=0;
var rachap=0;
var maxrachag=0;
var maxrachae=0;
var maxrachap=0;


function comenzar()
{    

    eleccionMaquina=Math.floor(Math.random()*(4-1))+1;
    console.log(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{   

    switch(eleccionMaquina)
    {
        case 1:
            rachae++
            if(rachae>maxrachae)
            maxrachae=rachae;
            break
        case 2:
            contgano++;
            alert ("gano")
            break
        case 3:
            alert ("perdio")
            break
                   
    }
function informar()
{
    console.log ("gano" + contgano);
    console.log ("empato" + contempato);
    console.log ("perdio" + contperdio);
    console.log ("racha ganada" + rachag);
    console.log ("racha perdidas" + rachap);
    console.log ("racha empate" + rachae);
}

}


function comenzar()
{    

    eleccionMaquina=Math.floor(Math.random()*(4-1))+1;
    console.log(eleccionMaquina);


}
function papel()
{   
    switch(eleccionMaquina)
    {
        case 1:
            contperdio++;
            alert("perdio");
            break
        case 2:
            contempato++;
            alert("empate");
            break
        case 3:
            alert("gano");
            break
     }

}
function comenzar()
{    

    eleccionMaquina=Math.floor(Math.random()*(4-1))+1;
    console.log(eleccionMaquina);


}
function tijera()
{
     switch(eleccionMaquina)
    {
        case 1:
            contempato++;
            alert("gano");
            break
        case 2:
            contperdio++;
            alert("perdio");
            break
        case 3:
            alert("empato");
            break
     }

}