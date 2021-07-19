const algoVaAsuceder = () => {
    return new Promise( (resolve, reject) => {
        if(true){
            resolve('Hello hello =D')
        } else {
            reject("Nooooo :(")
        }
    }  )
}

algoVaAsuceder()
    .then(response => console.log(response))
    .catch( error => console.log(error));


const otroEjemploDePromesa = () => {
    return new Promise( (resolve, reject) => {
        if(false){
            setTimeout( () =>{
                resolve({
                    "name" : "John",
                    "lastname": "Florez",
                    "age" : 28
                })
            }, 2000);
        }else {
            const error = new Error('Problemitas :(');
            reject(error);
        }
    })
}

otroEjemploDePromesa()
    .then( response => console.log(response))
    .catch( err => console.error(err))

//PROMESAS;
//Promise.all()

Promise.all( [algoVaAsuceder(), otroEjemploDePromesa()])
    .then(response => {
        console.table(response)
    })
    .catch( err => {
        console.error(err)
    })