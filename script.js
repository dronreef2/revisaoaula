function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

function exibirParOuImpar() {
    const numero = document.getElementById('numero').value;
    const resultado = verificarParOuImpar(numero);
    document.getElementById('resultadoParOuImpar').innerText = resultado;
}

function verificarMaioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

function exibirMaioridade() {
    const idade = document.getElementById('idade').value;
    const resultado = verificarMaioridade(idade);
    document.getElementById('resultadoMaioridade').innerText = resultado;
}

function classificarNota(nota) {
    if (nota >= 60) {
        return "Aprovado";
    } else if (nota >= 40 && nota <= 59) {
        return "Em recuperação";
    } else {
        return "Reprovado";
    }
}

function exibirClassificacaoNota() {
    const nota = document.getElementById('nota').value;
    const resultado = classificarNota(nota);
    document.getElementById('resultadoClassificacaoNota').innerText = resultado;
}

function calculadoraSimples(operacao, num1, num2) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Operação inválida";
    }
}

function exibirResultadoCalculadora() {
    const operacao = document.getElementById('operacao').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = calculadoraSimples(operacao, num1, num2);
    document.getElementById('resultadoCalculadora').innerText = resultado;
}

let array = [];

function addNumber(array, number) {
    array.push(number);
    return array;
}

function exibirAddNumber() {
    const numero = parseFloat(document.getElementById('numeroArray').value);
    const resultado = addNumber(array, numero);
    document.getElementById('resultadoAddNumber').innerText = "Array atualizado: " + resultado.join(", ");
}