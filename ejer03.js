//ejercicio 03
//valor_futuro =valor*Math.pow (1+tasa/100,periodo)

function Calcular(valor,tasa,periodo)
{
    valor_futuro = valor * Math.pow(1+tasa/100, periodo);
    console.log(valor_futuro);
}

Calcular(1000,0.10,6);