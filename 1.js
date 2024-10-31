

function exercicio1() {
    console.log(
    )
}



// todos so lados do triangulo

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("equilatero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("isoceles");
    } else {
        console.log("escaleno");
    }
} else {
    console.log("não formam um triângulo.");
}
