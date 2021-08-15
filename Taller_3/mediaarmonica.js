const lista1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
];
    


function mediarmonica(lista){
    const reciprocoLista = [];

    for (let i = 0; i < lista.length; i++){
        let reciproco = 1/lista[i];
        reciprocoLista.push(reciproco);
    }
    console.log(reciprocoLista);

    const sumalista = reciprocoLista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    console.log(lista.length / sumalista);
}