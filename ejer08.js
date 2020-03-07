//ejercicio 08
function traductor(id, texto,idioma){
    this.id = id;
    this.texto = texto;
    this.idioma = idioma
}

var t1 = new traductor(1,'Bienvenido','Español');
var t2 = new traductor(2,'Bienvenido','Ingles');
var t3 = new traductor(3,'Bienvenido','Frances');
var t4 = new traductor(4,'Bienvenido','Italiano');


var traducir ={
    idiomas :[t1,t2,t3,t4]
}
function obtenernombre(id)
{
    var texto ='';
    for( i=0; i< traducir.idiomas.length; i++)
    {
        if(traducir.idiomas[i].id === id)
        {
            texto = traducir.idiomas[i].texto;
        }
    }
    console.log(texto);
}
obtenernombre(1);
