//Es un método que nos ayuda a manejar peticiones web,
// este siempre recibe un argumento que será la URL
// (ENDPOINT)
//fetch('URL');

console.log(
    fetch('https://rickandmortyapi.com/api/character')
        .then(function (response) {
            response.json()
                .then( function (data) {
                    console.log(data);
                })
        })
)