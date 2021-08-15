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

function calcularMediaGeometrica (lista){
    const mulLista = lista.reduce(
        function (valorAcumulado=1, nuevoElemento){
            return valorAcumulado * nuevoElemento;
        }
    );
    const mediageometrica = Math.pow(mulLista, 1/ lista.length)
    return mediageometrica
}