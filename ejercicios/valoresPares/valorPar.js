var alto = prompt("Ingrese el valor máximo");
var pares = ""
for (var i = 1; i <= alto ; i++){
    if (i%2 == 0){
        pares = i.toString() + " " + pares;
    }
}
alert("Los número pares entre 1 y "+alto + " son: \n"+pares);
console.log("Los número pares entre 1 y "+alto + " son: \n"+pares);