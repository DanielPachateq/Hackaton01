//ejercicio09
var enteros=[1,2,3,4,5,6,7,8,9]

var pares=0;
var impares=0;

for(i=0 ; i<enteros.length ; i++)
{
    if (enteros[i] % 2   == 0)
    {
        pares = pares + enteros[i];
    }else{
        impares = impares +enteros[i];
    }
    
}
console.log('suma pares:',pares);
console.log('suma impares:',impares);

