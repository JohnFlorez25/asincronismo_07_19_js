//Es una función que llama a otra función
//teniendo en cuenta el valor que se pasa por referencia
//(argumentos) y lo que se recibe por parametro

function exponencial (numeroUno, numeroDos){
    let resultado = numeroUno ** numeroDos;
    return resultado;
}


//Función de orden superios HOF 
function calcularExponencial(x, y, callback){
    return callback(x, y);
}

console.log(calcularExponencial(5, 2, exponencial));