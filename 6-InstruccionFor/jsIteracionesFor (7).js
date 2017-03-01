function Mostrar()
{
    var numero;
    var numero=prompt("ingrese numero")
    var contador=0
    var divisores="divisores de divisores" + numero + "<br>"
    var i;


        for (var i=1;i<=numero;i++)

        {  
            if(numero%i==0)

            {
            contador++;
            divisores=i+"<br>"
            }

        }

divisores="cantidad: "+ contador + "<br>";
document.write (divisores);

}//FIN DE LA FUNCIÓN