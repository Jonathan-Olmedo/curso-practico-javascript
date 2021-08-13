/* const precioOriginal = 120;
const descuento = 18; */


/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

const descuentoPorCupones = document.getElementById("InputCupones");

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento-descuentoPorCupones.value;
    const precioConDescuento = (precio * porcentajePrecioConDescuento )/100;    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const Price = inputPrice.value;
    const Discount = inputDiscount.value;
    const resultado = calcularPrecioConDescuento(Price, Discount);

    const resultadoP = document.getElementById("Resultado");
    resultadoP.innerText = "El precio a pagar  con descuento es de : $" + resultado;
}
