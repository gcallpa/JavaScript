//Fichero para estudiar las funsiones, Ejercicio CALCULADORA

function suma(a,b){
    var resultado=a+b;
    return(resultado)
}
function resta(a,b){
    return(a-b)
}
function divide(a,b){
    return(a/b)
}
function multiplica(a,b){
    return(a*b)
}

var a=parseInt(prompt("Ingrese el primer número"));
var b=parseInt(prompt("Ingrese segundo número"));
var operacion=prompt("Ingresar operación: suma, resta, multiplicacion o division");

if (operacion == "suma"){
    console.log("La suma de "+a+" y "+b+" es: "+suma(a,b));
    alert("La suma de "+a+" y "+b+" es: "+suma(a,b));
} else if (operacion == "resta"){
    console.log("La resta de "+a+" y "+b+" es: "+resta(a,b));
}else if (operacion == "division"){
    console.log("La división de "+a+" y "+b+" es: "+divide(a,b));
}else if (operacion == "multiplicacion"){
    console.log("La multiplicación de "+a+" y "+b+" es: "+multiplica(a,b));
}