//Código del cuadrado
console.group('Cuadrado');

function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Código del triángulo
console.group('Triángulos');
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura)/2;
} 
console.groupEnd();

//Código del circulo
console.group('Circulos');
//diámetro
function diametroCirculo(radio){
    return radio * 2;
}
//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio){
    return (radio * radio) *PI;
}

//Altura triangulo isoceles
function alturatrianguloIsoceles(lado, base) {
    return Math.sqrt((lado*lado)-((base/2)*(base/2)));
}

console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    if (value <= 0){
        alert ("No es un cuadrado")
    } else {
        const perimetro =  perimetroCuadrado(value);
        alert(perimetro);
    }
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    if (value <= 0){
        alert ("No es un cuadrado")
    } else {
        const area =  areaCuadrado(value);
        alert(area);
    }
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo_lado1");
    const input2 = document.getElementById("InputTriangulo_lado2");
    const input3 = document.getElementById("InputTriangulo_lado3");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    if (value1 <= 0 || value <= 0 || value3 <= 0){
        alert('No es un triangulo');
    } else {
        const perimetro =perimetroTriangulo(value1,value2,value3);
        alert(perimetro);
    }
    
}

function calcularAreaTriangulo(){
    const input_base = document.getElementById("InputTriangulo_base");
    const input_altura = document.getElementById("InputTriangulo_altura");
    const value_base = input_base.value;
    const value_altura = input_altura.value;
    if (value_base <= 0 || value_altura <= 0){
        alert("No es un triangulo")
    } else {
        const area = areaTriangulo(value_base, value_altura);
        alert (area);
    }
}

function calcularPerimetroCirculo(){
    const input_radio = document.getElementById("InputCirculo");
    const value_radio = input_radio.value;
    if (value_radio <= 0){
        alert ("No es un circulo")
    } else {
        const perimetro = perimetroCirculo(value_radio);
        alert (perimetro);
    }
}

function calcularAreaCirculo(){
    const input_radio = document.getElementById("InputCirculo");
    const value_radio = input_radio.value;
    if (value_radio <= 0){
        alert ("No es un circulo")
    } else {
        const area = areaCirculo(value_radio);
        alert (area);
    }
}

function calcularAlturaTriangulo(){
    const input_lado1 = document.getElementById("InputIsoceles_lado1");
    const input_lado2 = document.getElementById("InputIsoceles_lado2");
    const input_base = document.getElementById("InputIsoceles_base");
    const lado1 = input_lado1.value;
    const lado2 = input_lado2.value;
    const base = input_base.value;
    if (lado1 != lado2 || lado1 <= 0 || lado2 <= 0 ||base <=0){
        alert("No es un triangulo isoceles")
    } else if (lado1 == lado2 && base > 0){
        const altura = alturatrianguloIsoceles(lado1, base);
        alert(altura);
    }
}