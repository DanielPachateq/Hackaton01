//Ejercicio 01

function datos(name, adress,phone,nif){
    this.name = name;
    this.adress = adress;
    this.phone = phone;
    this.nif = nif;
}

function producto(descripcion, precio, cantidad){
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
}
function totales(importetotal, tipoiva, formapago)
{
    this.importetotal = importetotal;
    this.tipoiva = tipoiva;
    this.formapago = formapago;
}

var empresa = new datos('Claro SAC', 'av la rinconanda','999999999','1042790149');
var cliente = new datos('Daniel Teran','zorritos 1399','997599221','');
var detalle = new producto ('producto 01',2,1);
var detalle1 = new producto ('producto 02',2,2);
var detalle2 = new producto ('producto 03',2,1);


var factura ={
    empresa : empresa,
    cliente : cliente,
    detalle : [detalle,detalle1,detalle2]
}
var total=0;
var subtotal =0;
for( var i=0; i<factura.detalle.length; i++)
{
    subtotal = factura.detalle[i].precio * factura.detalle[i].cantidad;
    total = total + subtotal;
}
var totales = new totales(total,'IGV','CONTADO');

var factura ={
    empresa : empresa,
    cliente : cliente,
    detalle : [detalle,detalle1,detalle2],
    total : totales
}


console.log(factura);

