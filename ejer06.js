//ejercicio 06
function telefono(nro, name){
    this.nro = nro;
    this.name = name;
}

var phone = new telefono('997599221','Daniel');
var phone1 = new telefono('99999999','carlos');
var phone2 = new telefono('88888888','Maria');
var agenda ={
    telefonos :[phone,phone1,phone2]
}
function obtenernombre(telefono)
{
    var phone ='';
    for( i=0; i< agenda.telefonos.length; i++)
    {
        if(agenda.telefonos[i].nro === telefono)
        {
            phone = agenda.telefonos[i].name;
        }
    }
    console.log(phone);
}
obtenernombre('99999999');