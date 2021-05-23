/*Ejemplo de tipos
de datos
en java script
*/

// Tipo de datos string
var nombre = "Guillermo";
console.log(nombre);

//Tipo de dato número
var numero = 1000;
console.log(numero);

//Tipo de dato objeto
var objeto = {
    nombre  : "Juan",
    apellido : "Perez",
    edad    : 30
}
console.log(objeto);

// Tipo de datos boolean (True, False)
var bandera = true;
console.log(bandera);

///Tipo de dato funcion
function miFuncion(){
    var saludo = "Hola Mundo"
    return saludo;
}

console.log(miFuncion);

//Tipo de datos simbolo
var simbolo = Symbol("Mi Simbolo");
console.log(typeof simbolo);

//Tipo de datos clase

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo de variable no definida

var x;
console.log(typeof x);

//Tipo de dato null
var y = null;
console.log(typeof y);

//Arreglos
var autos = ['changan', 'toyota','nissan'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);

