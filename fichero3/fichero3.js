var valor = 0;

while (valor < 100){

    if (valor > 50 ){
        console.log("El valor "+ valor +" es superior a 50, todo terminó");
        break;
    }else if (valor % 2 == 0 ){
        console.log("El valor " + valor + " es par.");
    } else{
        console.log("El valor " + valor + " no es par");
    }
    valor += 1;
}