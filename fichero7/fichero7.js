var objeto = {rut: "16739366-7", nombre: "Guillermo", edad: 33}
console.log(objeto['rut']);
console.log("=========");

for (clave in objeto){
    console.log("Nombre de las clave = "+clave);
    console.log("Valor de la clave = "+objeto[clave]);
}

var objeto2 =   {color: "azul",
                numero: 33,
                metodo: function(){(alert("Esta es la función del objeto"))}
                }

console.log(objeto2.metodo());
console.log(objeto2.numero);

var objeto3 =   {color: "azul",
                numero: 33,
                metodo: function(){
                    alert("El color es " + this.color + " y el numero es " + this.numero);
                }
                }
console.log(objeto3.metodo());