var persona = {
    nombre:"Guillermo",
    apellido:"Callpa",
    edad:33,
    info: function(){
        alert("El nombre es "+this.nombre+" su apellido es "+this.apellido+" y su edad es "+this.edad);
        console.log("El nombre es "+this.nombre+" su apellido es "+this.apellido+" y su edad es "+this.edad);
    }
}

console.log(persona.info);
alert(persona.info);