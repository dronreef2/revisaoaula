//1

let nome = "Guilherme";
let idade = 30;

console.log("Nome:", nome);
console.log("Idade:", idade);


//2


function saudar(nome) {
    return `Olá ${nome}`;
}

console.log(saudar('Guilherme'));


function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(5, 3));


//3

function areaRetangulo(base, altura) {
    return base * altura;
}

// Exemplo
console.log(areaRetangulo(5, 3)); 


// Nivel medio 

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Exemplo de uso
console.log(verificarParOuImpar(4));
console.log(verificarParOuImpar(7));

//2

function verificarMaioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

// Exemplo
console.log(verificarMaioridade(20));
console.log(verificarMaioridade(16));

//3

function classificarNota(nota) {
    if (nota >= 60) {
        return "Aprovado";
    } else if (nota >= 40 && nota <= 59) {
        return "Em recuperação";
    } else {
        return "Reprovado";
    }
}

// Exemplo de uso
console.log(classificarNota(7)); // Deve exibir "Aprovado"
console.log(classificarNota(50)); // Deve exibir "Em recuperação"
console.log(classificarNota(30)); // Deve exibir "Reprovado"



//4

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

// Exemplo
console.log(calculadoraSimples('+', 5, 3))
console.log(calculadoraSimples('-', 5, 3))

 
//5

function Divisibilidade(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "Divisível por 3 e 5";
    } else if (numero % 3 === 0) {
        return "Divisível por 3";  
    } else if (numero % 5 === 0) {
        return "Divisível por 5";
    } else {
        return "Não é divisível por 3 nem por 5";
    }
}

// Exemplo de uso
console.log(Divisibilidade(15)); //
console.log(Divisibilidade(9));  // 
console.log(Divisibilidade(10)); // 5"
console.log(Divisibilidade(7));  // 5"

//Dificil 1

//Crie uma função chamada somarAteN que recebe um número N como parâmetro e retorna
//a soma de todos os números de 1 até N. Use um laço for.

function somarAteN(N) {
    let soma = 0;
    for (let i = 1; i <= N; i++) {
        soma += i;
    }
    return soma;
}

// Exemplo de uso
console.log(somarAteN(5)); // Deve exibir 15 (1 + 2 + 3 + 4 + 5)
Crie uma função chamada somarAteN que recebe um número N como parâmetro e retorna
a soma de todos os números de 1 até N. Use um laço for.