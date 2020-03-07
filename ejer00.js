//ejercicio 00

/*function mayorymenor(lista)
{
    var mayor = lista[0];
    var menor = lista[0];
    var mensaje ='';
    for( var i=1; i<lista.length; i++)
    {
        if (lista[i] > mayor){
            mayor = lista [i];
        }
        if (lista[i] < menor){
            menor = lista[i];
        }     
    } 
    return(console.log('el numero mayor es:', mayor, 'El numero menor es:' , menor));    
}*/

//console.log(Math.min.apply(null, valores));
//console.log(Math.max.apply(null, valores));

var milista =[3,32,4,99,1,23,5,65,17,10,109];
var mayor = Math.min.apply(null, milista);
var menor = Math.max.apply(null, milista);
console.log(console.log('el numero mayor es:', mayor, 'El numero menor es:' , menor));  