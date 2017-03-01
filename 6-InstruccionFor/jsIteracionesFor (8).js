function Mostrar()
{
    var numero=prompt ("ingrese numeros");
    var contador=0
    var i;

    for(var i=1;i<=numero;i++)
    
            {
                if (numero%i==0)
                {
                    contador++;
                }
            }
                if (contador==2)
                    {
                    alert ("es primo")
                    } 
                    else
                    {
                    alert ("no es primo")
                    }

}//FIN DE LA FUNCIÓN