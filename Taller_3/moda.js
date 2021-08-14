

function calcularModa(lista){
    
    const listaCount = {};
    lista.map(
    function(elemento) {
        if (listaCount[elemento]){
            listaCount[elemento] += 1; //cada vez que aparece el objeto se le suma uno
        } else {
        listaCount[elemento] = 1;
        }
    }
    );

    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB){
        return elementoA[1]-elementoB[1];
        }
    );
    const moda = listaArray[listaArray.length -1];
    console.log(moda);

};