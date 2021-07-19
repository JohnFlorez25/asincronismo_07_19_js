//1. En JS las funciones asincronas se ejecutan
//siempre despues del código fuente
//2. El código sincrónico SIEMPRE tiene prioridad de ejecución

console.log("Hola 1");

setTimeout( function(){
    console.log("Hola con retardo");
}, 2000);

setTimeout(() => {
    console.log("Hola con retardo 2")
}, 1000);

console.log("Hola 2");