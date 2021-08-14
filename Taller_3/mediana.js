function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista /lista.length
    return promedioLista;
}

function esPar(numerito) {
    if (numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

//ordenar lista

function ordernarLista (a,b){ //esta funcion nos ayuda a ordernar elementos de un array en particular numeros
    return a-b;
}

let mediana;

function calcularMediana(lista) {
    const listaOrdenada = lista.sort(ordernarLista); //El método .sort de los arrays nos permite ordenar listas de letras o números en JavaScript. 
    const mitadLista = parseInt(lista.length /2);
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,
        elemento2
    ]);
    console.log("la mediana es "+ (mediana = promedioElemento1y2)+ " y la lista ordenada es [" + listaOrdenada + "]");
    }else {
        console.log("la mediana es "+ (mediana = lista [mitadLista])+ " y la lista ordenada es [" + listaOrdenada + "]");
    };
}