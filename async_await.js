const hacerAlgoAsincrono = () => {
    return new Promise( (resolve, reject) => {
        (false)
        ? setTimeout( () => {
            resolve('Sucedió algo asincrono')
        }, 2000)
        : reject( new Error('Error asincrono'))
    });
}

const hacerAlgo = async () => {
    const algo = await hacerAlgoAsincrono();
    console.log(algo);
}

console.log('Estoy antes en cola como proceso sincrónico');
hacerAlgo()
console.log('Estoy despues en la cola como proceso sincrónico');

const otraFuncionAsincrona = async () => {
    try {
        const algo = await hacerAlgoAsincrono();
        console.log(algo);
    }catch(err){
        console.error(err)
    }
}